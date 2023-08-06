<!-- Adapted from https://github.com/nuxt/content/blob/main/src/runtime/components/Prose/ProseImg.vue -->

<script setup lang="ts">
import { withBase } from "ufo";

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
        return withBase(props.src, useRuntimeConfig().app.baseURL);
    }
    return props.src;
});
</script>

<template>
    <img :src="refinedSrc" :alt="alt" :width="width" :height="height">
</template>

<style lang="scss">
img {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>
