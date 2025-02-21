<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
    const query = queryCollectionNavigation("blog", [ "description", "date", "tags"])
        .order("date", "DESC");

    if (!process.dev) query.where("date", "IS NOT NULL");

    return query;
});

useSeoMeta({
    title: "Pink's Blog",
    description: "A personal blog about whatever I'm working on.",
    ogTitle: "Pink's Blog",
    ogDescription: "A personal blog about whatever I'm working on.",
})
</script>

<template>
    <h1>Welcome To My Blog</h1>
    <GridContainer>
        <template v-for="{ path, title, description, date, tags } in data[0].children[0].children">
            <BlogPostCard :path="path" :title="title" :description="description" :date="date" :tags="tags" />
        </template>
    </GridContainer>
</template>
