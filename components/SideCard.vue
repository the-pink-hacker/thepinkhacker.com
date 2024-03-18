<template>
    <div class="side-card">
        <slot />
    </div>
</template>

<style lang="scss">
@import "/assets/style/abstract/mixins";

.side-card>.card-header {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
}

@media screen and (min-width: 75rem) {
    .side-card {
        @include bordered-block;
        margin: 2rem;
    }
}
</style>
