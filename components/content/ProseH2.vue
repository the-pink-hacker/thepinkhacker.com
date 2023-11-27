<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <ContentHeader is="h2" :id="id">
        <slot />
    </ContentHeader>
</template>
