<template>
    <div>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
}
</style>
