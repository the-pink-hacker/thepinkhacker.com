<template>
    <div class="image-carousel-collection">
        <slot />
    </div>
</template>

<style lang="scss">
.image-carousel-collection {
    position: relative;
    display: flex;
    width: 100%;
    height: 25rem;
    margin: 8px 0;
    overflow: scroll hidden;
    gap: 0.5rem;
    background-color: var(--background-accent-color);
    z-index: 0;
}
</style>
