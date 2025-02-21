<script lang="ts" setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => queryCollection("project")
    .path(path)
    .select("title", "logo", "projectLinks", "projectType", "projectId", "body", "description")
    .first()
);
</script>

<template>
    <DocumentContainer>
        <header>
            <h1>
                {{ data.title }}
            </h1>

            <img :src="data.logo" />
        </header>

        <section>
            <ContentRenderer :value="data" />
        </section>

        <SideCardContainer direction="left">
            <div>
                <SideCard>
                    <template #title>Links</template>

                    <ul class="icon-row" v-if="data.projectLinks?.length > 0">
                        <li v-for="{ name, url, icon } in data.projectLinks">
                            <IconRoute :to="url" :name="name" :icon="icon" />
                        </li>
                    </ul>
                </SideCard>

                <SideCard v-if="data.projectType == 'modrinth'">
                    <template #title>Files</template>
                    <ModrinthFileList :project-id="data.projectId" />
                </SideCard>
            </div>
        </SideCardContainer>

        <SideCardContainer direction="right">
            <SideCard>
                <template #title>Posts</template>
            </SideCard>
        </SideCardContainer>

        <Head>
            <Meta property="og:image" :content="data.logo" />
        </Head>
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
