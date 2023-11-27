<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <ContentHeader is="h1" :id="id">
        <slot />
    </ContentHeader>
</template>
