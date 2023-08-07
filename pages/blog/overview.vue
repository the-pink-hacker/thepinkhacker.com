<template>
    <h1>Welcome To My Blog</h1>
    <div class="blog-posts">
        <ContentQuery :only="['_path', 'title', 'description', 'draft']" v-slot="{ data }">
            <template v-for="{ _path, title, description, draft } in data">
                <article v-if="draft !== true" class="blog-post-card">
                    <h1>
                        <RouterLink :to="_path">{{ title }}</RouterLink>
                    </h1>
                    <p>{{ description }}</p>
                </article>
            </template>
        </ContentQuery>
    </div>
</template>

<style lang="scss">
.blog-posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.blog-post-card {
    background-color: var(--background-middle-color);
    padding: 8px;
    margin: 8px
}
</style>
