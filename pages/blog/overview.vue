<script setup lang="ts">
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
    <h1>Welcome To My Blog</h1>
    <div class="blog-posts">
        <ContentQuery :only="['_path', 'title', 'description', 'draft', 'date']" v-slot="{ data }">
            <template v-for="{ _path, title, description, draft, date } in data">
                <article v-if="draft !== true" class="blog-post-card">
                    <h1>
                        <NuxtLink :to="_path">{{ title }}</NuxtLink>
                    </h1>
                    <time v-if="date != null" :datetime="date" :title="formatPostDateLong(date)">{{ formatPostDate(date)
                    }}</time>
                    <p>{{ description }}</p>
                </article>
            </template>
        </ContentQuery>
    </div>
</template>

<style lang="scss">
.blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
}

.blog-post-card {
    background-color: var(--background-middle-color);
    padding: 8px;
    margin: 8px
}
</style>
