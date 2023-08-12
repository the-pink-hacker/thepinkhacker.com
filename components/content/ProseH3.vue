<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <ContentHeader is="h3" :id="id">
        <slot />
    </ContentHeader>
</template>
