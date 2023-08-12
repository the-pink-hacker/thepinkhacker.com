<template>
    <h1>Welcome To My Blog</h1>
    <div class="blog-posts">
        <ContentQuery :only="['_path', 'title', 'description', 'date']" v-slot="{ data }">
            <template v-for="{ _path, title, description, date } in data">
                <BlogPostCard :path="_path" :title="title" :description="description" :date="date" />
            </template>
        </ContentQuery>
    </div>
</template>

<style lang="scss">
.blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
}
</style>
