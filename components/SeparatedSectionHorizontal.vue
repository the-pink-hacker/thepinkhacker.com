<template>
    <section class="separated-section">
        <slot />
    </section>
</template>

<style lang="scss">
.separated-section {
    display: flex;
    flex-direction: column;
    padding: 8px;
    background-color: var(--background-middle-color);

    &>h2 {
        align-self: center;
    }
}
</style>
