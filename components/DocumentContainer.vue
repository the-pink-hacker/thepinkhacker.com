<template>
    <div class="document-container-wrapper">
        <div class="document-container">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.document-container-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.document-container {
    background-color: var(--background-middle-color);
    width: var(--content-width);
    padding: 8px;
}
</style>
