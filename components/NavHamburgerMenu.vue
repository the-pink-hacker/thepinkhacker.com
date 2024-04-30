<script lang="ts" setup>
defineProps<{
    toggleMenu: () => void,
}>();
</script>

<template>
    <button @click="toggleMenu">
        <span class="material-icons">menu</span>
    </button>
</template>

<style lang="scss" scoped>
.material-icons {
    font-size: 2em;
    width: min-content;
    aspect-ratio: 1 / 1;
}

button {
    width: fit-content;
    aspect-ratio: 1 / 1;
    padding: 0;
    margin: 8px;
    border: none;
    background: transparent;
    color: var(--text-color);
    transition: var(--hover-time);
    transition-property: color, rotate;

    &:hover,
    &:focus-visible {
        color: var(--text-accent-color);
    }
}
</style>
