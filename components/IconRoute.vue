<script lang="ts" setup>
defineProps({
    to: String,
    name: String,
    fontPack: String,
    icon: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <a :href="to">
        <span v-if="fontPack" :title="name" :class="fontPack" role="img">{{ icon }}</span>
        <img v-else :src="icon" :title="name" role="img" />
    </a>
</template>

<style lang="scss" scoped>
a {
    display: block;
    transition: scale var(--hover-time);
    width: 2em;
    aspect-ratio: 1 / 1;
    user-select: none;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    &:hover {
        scale: 1.25;
    }

    &>* {
        width: 100%;
        aspect-ratio: 1 / 1;
    }
}
</style>
