<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <ContentHeader is="h5" :id="id">
        <slot />
    </ContentHeader>
</template>
