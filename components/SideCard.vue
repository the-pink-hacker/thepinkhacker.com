<script lang="ts" setup>
defineProps({
    topDivider: {
        type: Boolean,
        default: true,
    },
    bottomDivider: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="side-card">
        <hr v-if="topDivider">

        <div class="card-header">
            <slot name="title" />
        </div>

        <slot />

        <hr v-if="bottomDivider">
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

        &>hr {

            &:first-child,
            &:last-child {
                display: none;
            }
        }
    }
}
</style>
