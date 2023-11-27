<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <ContentHeader is="h4" :id="id">
        <slot />
    </ContentHeader>
</template>
