<script setup lang="ts">
defineProps<{ id?: string, render?: boolean }>();
</script>

<template>
    <ContentHeader v-if="render" is="h1" :id="id">
        <slot />
    </ContentHeader>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
    font-size: 1.75rem;
}
</style>
