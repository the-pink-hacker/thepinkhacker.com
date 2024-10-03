<script lang="ts" setup>
defineProps<{
    path?: string,
    title?: string,
    description?: string,
    date?: string,
    tags?: string[],
}>();
</script>

<template>
    <article class="blog-post-card">
        <h1>
            <NuxtLink :to="path">{{ title ?? "Untitled" }}</NuxtLink>
        </h1>
        <Timestamp v-if="date" :date="date" />
        <p v-if="description">{{ description }}</p>
        <Tags :tags="tags" />
    </article>
</template>

<style lang="scss">
.blog-post-card {
    background-color: var(--background-middle-color);
    padding: 0.5rem;
    margin: 0.5rem;
}
</style>
