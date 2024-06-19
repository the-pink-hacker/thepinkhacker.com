<script lang="ts" setup>
</script>

<template>
    <DocumentContainer>
        <ContentDoc v-slot="{ doc, doc: { logo, title, projectLinks, projectType, projectId } }">
            <header>
                <h1>
                    {{ title }}
                </h1>

                <img :src="logo" />
            </header>

            <section>
                <ContentRenderer :value="doc" />
            </section>

            <SideCardContainer direction="left">
                <div>
                    <SideCard>
                        <template #title>Links</template>

                        <ul class="icon-row" v-if="projectLinks?.length > 0">
                            <li v-for="{ name, url, icon } in projectLinks">
                                <IconRoute :to="url" :name="name" :icon="icon" />
                            </li>
                        </ul>
                    </SideCard>

                    <SideCard v-if="projectType == 'modrinth'">
                        <template #title>Files</template>
                        <ModrinthFileList :project-id="projectId" />
                    </SideCard>
                </div>
            </SideCardContainer>

            <SideCardContainer direction="right">
                <SideCard>
                    <template #title>Posts</template>
                </SideCard>
            </SideCardContainer>

            <Head>
                <Meta property="og:image" :content="logo" />
            </Head>
        </ContentDoc>
    </DocumentContainer>
</template>

<style lang="scss" scoped>
header>h1 {
    text-align: center;
}

.icon-row {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    user-select: none;
}
</style>
