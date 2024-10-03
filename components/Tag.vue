<template>
    <span>
        <slot />
    </span>
</template>

<style lang="scss" scoped>
span {
    display: inline-block;
    margin: 4px;
    padding: 2px 8px;
    border: 2px solid var(--accent-color);
    border-radius: 8px;
    color: var(--text-accent-color)
}
</style>
