<template>
    <td>
        <slot />
    </td>
</template>

<style lang="scss" scoped>
td {
    text-align: center;
    position: relative;
    border: 2px solid var(--accent-color);
    background-color: var(--background-color);
    padding: 8px;
}
</style>
