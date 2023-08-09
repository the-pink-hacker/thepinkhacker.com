<template>
    <h1>Welcome To My Blog</h1>
    <div class="blog-posts">
        <ContentQuery :only="['_path', 'title', 'description', 'draft', 'date']" v-slot="{ data }">
            <template v-for="{ _path, title, description, draft, date } in data">
                <BlogPostCard v-if="draft !== true" :path="_path" :title="title" :description="description" :draft="draft"
                    :date="date" />
                <DevOnly v-else>
                    <BlogPostCard :path="_path" :title="title" :description="description" :draft="draft" :date="date" />
                </DevOnly>
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
