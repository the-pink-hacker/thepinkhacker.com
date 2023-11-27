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
    position: relative;
}

.document-container {
    background-color: var(--background-middle-color);
    width: 100%;
    max-width: var(--content-width);
    padding: 16px;
    box-sizing: border-box;
}

img {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}

pre code {
    display: block;
    padding: 8px;
    background-color: var(--background-color);
    border: 4px solid var(--accent-color);
}
</style>
