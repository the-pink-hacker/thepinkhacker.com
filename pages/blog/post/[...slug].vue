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
        <ContentDoc v-slot="{ doc, doc: { title, description, body: { toc } } }">
            <aside>
                <section class="table-of-contents">
                    <header>
                        <h1>Table of Contents</h1>
                    </header>
                    <TableOfContentsItem id="" :depth="1" :text="title" :children="toc.links"
                        :content-top="titleToId(title)" />
                </section>
                <hr />
            </aside>
            <section>
                <ContentRenderer :value="doc" />
            </section>
            <hr />
            <section v-if="surrounding" class="bottom-article-links">
                <a :href="surrounding[0]?._path">Previous</a>
                <a :href="surrounding[1]?._path">Next</a>
            </section>

            <Head>
                <Meta property="og:title" :content="title" />
                <Meta property="og:description" :content="description" />
            </Head>
        </ContentDoc>
    </DocumentContainer>
</template>

<style lang="scss">
.bottom-article-links {
    padding: 8px;
    display: flex;
    justify-content: space-between;
}

aside {
    position: static;
}

@for $i from 1 through 6 {
    .table-of-contents h#{7 - $i} {
        font-size: 4px * $i;
    }
}

@media screen and (min-width: 1350px) {
    aside {
        padding: 8px;
        box-sizing: border-box;
        position: absolute;
        width: calc(((100% - var(--content-width)) / 2));
        top: 0;
        left: 0px;
        height: 100%;

        hr {
            display: none;
        }
    }

    .table-of-contents {
        position: sticky;
        top: 0;
    }
}
</style>
