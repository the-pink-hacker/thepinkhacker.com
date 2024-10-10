<script setup>
const { path } = useRoute();
const { data: posts } = await useAsyncData(`content-${path}`, () => {
    const query = queryContent("/blog/post")
        .only(["_path", "title", "description", "date", "tags"])
        .sort({ date: -1, $numeric: true });

    if (!process.dev) query.where({ _partial: false });

    return query.find();
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
        <template v-for="{ _path, title, description, date, tags} in posts">
            <BlogPostCard :path="_path" :title="title" :description="description" :date="date" :tags="tags" />
        </template>
    </GridContainer>
</template>
