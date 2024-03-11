<script lang="ts" setup>
defineProps<{
    src?: string,
    alt?: string,
}>();
</script>

<template>
    <img :src="src" :alt="alt" :title="alt" />
</template>

<style scoped>
img {
    image-rendering: pixelated;
}
</style>
