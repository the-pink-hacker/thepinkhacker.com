<script setup lang="ts">
const { path } = useRoute();

const { data: surrounding } = await useAsyncData(`content-${path}`, () => {
    return queryContent("/blog/post")
        .only("_path")
        .findSurround(path);
});

function titleToId(title: string) {
    return title.toLowerCase().replaceAll(" ", "-");
}
</script>

<!--TODO: Add minimize button for table of contents-->
<template>
    <DocumentContainer>
        <article>
            <ContentDoc v-slot="{ doc, doc: { title, description, body: { toc }, logo, date } }">
                <SideCardContainer>
                    <SideCard :top-divider="false" :bottom-divider="true">
                        <template #title>Table of Contents</template>
                        <TableOfContentsItem id="" :depth="1" :text="title" :children="toc.links"
                            :content-top="titleToId(title)" />
                    </SideCard>
                </SideCardContainer>
                <header>
                    <ProseH1 v-if="title" :id="titleToId(title)" :render="true">{{ title }}</ProseH1>
                    <img :src="logo" />
                    <div>
                        <IconRoute to="/blog/rss" icon="rss_feed" font-pack="material-icons" />
                    </div>
                    <div v-if="date">Created:
                        <Timestamp :date="date" />
                    </div>
                </header>
                <hr />
                <section>
                    <ContentRenderer :value="doc" />
                </section>
                <hr />
                <section v-if="surrounding" class="bottom-article-links">
                    <a v-if="surrounding[0]" :href="surrounding[0]._path" class="previous">Previous</a>
                    <a v-if="surrounding[1]" :href="surrounding[1]._path" class="next">Next</a>
                </section>

                <Meta property="og:image" :content="logo" />
                <Meta property="og:description" :content="description" />
            </ContentDoc>
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
