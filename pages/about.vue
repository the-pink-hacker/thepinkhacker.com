<!--TODO: Add minimize button for table of contents-->
<script lang="ts" setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => queryCollection("about")
    .path(path)
    .select("title", "description", "body", "logo", "date")
    .first()
);
</script>

<template>
    <DocumentContainer>
        <article>
            <SideCardContainer>
                <SideCard :top-divider="false" :bottom-divider="true">
                    <template #title>Table of Contents</template>
                    <TableOfContentsItem id="" :depth="1" :text="title" :children="data.body.toc.links" />
                </SideCard>
            </SideCardContainer>
            <header>
                <ProseH1 v-if="title" :render="true">{{ title }}</ProseH1>
                <img :src="logo" />
            </header>
            <hr />
            <section>
                <ContentRenderer :value="data" />
            </section>

            <Meta property="og:image" :content="logo" />
            <Meta property="og:description" :content="description" />
        </article>
    </DocumentContainer>
</template>
