<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <ContentHeader is="h1" :id="id">
        <slot />
    </ContentHeader>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
    font-size: 1.75rem;
}
</style>
