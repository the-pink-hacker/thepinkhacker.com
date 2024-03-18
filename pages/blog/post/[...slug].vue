<script setup lang="ts">
const { path } = useRoute()

const { data: surrounding } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
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
            <ContentDoc v-slot="{ doc, doc: { title, description, body: { toc } } }">
                <SideCardContainer>
                    <SideCard>
                        <div class="card-header">Table of Contents</div>
                        <TableOfContentsItem id="" :depth="1" :text="title" :children="toc.links"
                            :content-top="titleToId(title)" />
                    </SideCard>
                </SideCardContainer>
                <section>
                    <ContentRenderer :value="doc" />
                </section>
                <hr />
                <section v-if="surrounding" class="bottom-article-links">
                    <a v-if="surrounding[0]" :href="surrounding[0]._path">Previous</a>
                    <a v-if="surrounding[1]" :href="surrounding[1]._path">Next</a>
                </section>

                <Head>
                    <Meta property="og:title" :content="title" />
                    <Meta property="og:description" :content="description" />
                </Head>
            </ContentDoc>
        </article>
    </DocumentContainer>
</template>

<style lang="scss">
.bottom-article-links {
    padding: 8px;
    display: flex;
    justify-content: space-between;
}
</style>
