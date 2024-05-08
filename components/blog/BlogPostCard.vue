<script lang="ts" setup>
defineProps({
    path: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: "Untitled",
    },
    description: {
        type: String,
        default: "",
    },
    date: String,
});
</script>

<template>
    <article class="blog-post-card">
        <h1>
            <NuxtLink :to="path">{{ title }}</NuxtLink>
        </h1>
        <Timestamp v-if="date" :date="date" />
        <p>{{ description }}</p>
    </article>
</template>

<style lang="scss">
.blog-post-card {
    background-color: var(--background-middle-color);
    padding: 0.5rem;
    margin: 0.5rem;
}
</style>
