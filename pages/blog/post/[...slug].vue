<script setup lang="ts">
const { path } = useRoute();

const { data: page } = await useAsyncData(`content-${path}`, () => queryCollection("blog")
    .path(path)
    .select("title", "description", "body", "logo", "logoAlt", "date", "tags")
    .first()
);

const { data: surrounding } = await useAsyncData(`surrounding-${path}`, () => queryCollectionItemSurroundings("blog", path)
    .where("date", "IS NOT NULL")
    .order("date", "ASC")
);

function tagsToKeywords(tags: string[]) {
    return tags.join(",");
}
</script>

<!--TODO: Add minimize button for table of contents-->
<template>
    <DocumentContainer>
        <article>
            <SideCardContainer>
                <SideCard :top-divider="false" :bottom-divider="true">
                    <template #title>Table of Contents</template>
                    <TableOfContentsItem id="" :depth="1" :text="page.title" :children="page.body.toc.links" />
                </SideCard>
            </SideCardContainer>
            <header>
                <ProseH1 v-if="page.title" :render="true">{{ page.title }}</ProseH1>
                <img :src="page.logo" :alt="page.logoAlt" />
                <div>
                    <IconRoute to="/blog/rss" icon="rss_feed" font-pack="material-icons" />
                </div>
                <div v-if="page.date">Created:
                    <Timestamp :date="page.date" />
                </div>
                <Tags :tags="page.tags" />
            </header>
            <hr />
            <section>
                <ContentRenderer :value="page" />
            </section>
            <hr />
            <section v-if="surrounding" class="bottom-article-links">
                <a v-if="surrounding[0]" :href="surrounding[0].path" class="previous">Previous</a>
                <a v-if="surrounding[1]" :href="surrounding[1].path" class="next">Next</a>
            </section>

            <Meta property="og:image" :content="page.logo" />
            <Meta property="og:image:alt" :content="page.logoAlt" />
            <Meta property="og:description" :content="page.description" />
            <Meta property="keywords" :content="tagsToKeywords(page.tags)" />
        </article>
    </DocumentContainer>
</template>

<style lang="scss">
.bottom-article-links {
    padding: 8px;
    display: flex;
    justify-content: space-between;

    >.previous {
        margin-right: auto;
    }

    >.next {
        margin-left: auto;
    }
}

header {
    display: flex;
    flex-direction: column;
}
</style>
