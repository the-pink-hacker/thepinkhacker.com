<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <ContentHeader is="h6" :id="id">
        <slot />
    </ContentHeader>
</template>
