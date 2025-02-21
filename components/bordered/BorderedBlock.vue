<script setup lang="ts">
defineProps({
    tag: {
        type: String,
        default: "div",
    }
});
</script>

<template>
    <component :is="tag" class="bordered-block">
        <slot />
    </component>
</template>

<style lang="scss">
@use "/assets/style/abstract/mixins";

.bordered-block {
    @include mixins.bordered-block;
}
</style>
