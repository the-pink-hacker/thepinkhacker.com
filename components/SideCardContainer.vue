<script lang="ts" setup>
defineProps({
    direction: {
        type: String,
        default: "left",
    },
});
</script>

<template>
    <aside :class="direction">
        <slot />
    </aside>
</template>

<style lang="scss">
aside {
    position: static;
}

@media screen and (min-width: 75rem) {
    aside {
        position: absolute;
        width: calc((100% - var(--content-width)) / 2);
        box-sizing: border-box;
        top: 0;
        height: 100%;

        &.left {
            left: 0;
        }

        &.right {
            right: 0;
        }

        &>* {
            position: sticky;
            top: 2rem;
            height: fit-content;
        }
    }
}
</style>
