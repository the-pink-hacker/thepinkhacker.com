<script setup lang="ts">
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

const DATE_FORMAT_LONG = new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "long",
        timeStyle: "long",
    },
);

const DATE_FORMAT = new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "long",
    },
);


function formatPostDateLong(date: string) {
    let parsedDate = new Date(date);
    return DATE_FORMAT_LONG.format(parsedDate);
}

function formatPostDate(date: string) {
    let parsedDate = new Date(date);
    return DATE_FORMAT.format(parsedDate);
}
</script>

<template>
    <article class="blog-post-card">
        <h1>
            <NuxtLink :to="path">{{ title }}</NuxtLink>
        </h1>
        <ClientOnly>
            <time v-if="date != null" :datetime="date" :title="formatPostDateLong(date)">{{ formatPostDate(date)
                }}</time>
        </ClientOnly>
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
