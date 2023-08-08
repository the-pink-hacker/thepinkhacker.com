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
    align-items: center;
}

.document-container {
    background-color: var(--background-middle-color);
    width: 100%;
    max-width: var(--content-width);
    padding: 8px;
    box-sizing: border-box;
}
</style>
