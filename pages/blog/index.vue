<script setup>
const { path } = useRoute();
const { data: posts } = await useAsyncData(`content-${path}`, () => {
    const query = queryContent("/blog/post")
        .only(["_path", "title", "description", "date"])
        .sort({ title: -1 });

    if (!process.dev) query.where({ _partial: false });

    return query.find();
});
</script>

<template>
    <h1>Welcome To My Blog</h1>
    <div class="blog-posts">
        <template v-for="{ _path, title, description, date } in posts">
            <BlogPostCard :path="_path" :title="title" :description="description" :date="date" />
        </template>
    </div>
</template>

<style lang="scss">
.blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
}
</style>
