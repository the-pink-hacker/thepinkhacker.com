<script lang="ts" setup>
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo";
import { useRuntimeConfig, computed } from "#imports";

const props = defineProps({
    src: {
        type: String,
        default: "",
    },
    alt: {
        type: String,
        default: "",
    },
    width: {
        type: [String, Number],
        default: undefined,
    },
    height: {
        type: [String, Number],
        default: undefined,
    },
});

const refinedSrc = computed(() => {
    if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));

        if (_base !== "/" && !props.src.startsWith(_base)) {
            return joinURL(_base, props.src);
        }
    }

    return props.src;
});
</script>

<template>
    <img :src="refinedSrc" :alt="alt" :title="alt" :width="width" :height="height">
</template>

<style lang="scss" scoped>
img {
    max-height: 50vh;
}
</style>
