<!--TODO: Add minimize button for table of contents-->
<template>
    <DocumentContainer>
        <article>
            <ContentDoc v-slot="{ doc, doc: { title, description, body: { toc }, logo, date } }">
                <SideCardContainer>
                    <SideCard :top-divider="false" :bottom-divider="true">
                        <template #title>Table of Contents</template>
                        <TableOfContentsItem id="" :depth="1" :text="title" :children="toc.links" />
                    </SideCard>
                </SideCardContainer>
                <header>
                    <ProseH1 v-if="title" :render="true">{{ title }}</ProseH1>
                    <img :src="logo" />
                </header>
                <hr />
                <section>
                    <ContentRenderer :value="doc" />
                </section>

                <Meta property="og:image" :content="logo" />
                <Meta property="og:description" :content="description" />
            </ContentDoc>
        </article>
    </DocumentContainer>
</template>
