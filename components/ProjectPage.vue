<template>
    <DocumentContainer>
        <ContentDoc v-slot="{ doc, doc: { logo, title, projectVersions, projectLinks } }">
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
                                <a :href="url">
                                    <img :src="icon" :title="name" role="img" />
                                </a>
                            </li>
                        </ul>
                    </SideCard>

                    <SideCard>
                        <template #title>Files</template>

                        <div v-for="{ name, download } in projectVersions">
                            <a :href="download">{{ name }}</a>
                        </div>
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

    >li {
        transition: scale var(--hover-time);
        width: 2rem;
        aspect-ratio: 1/1;
        margin-left: 0.5rem;
        margin-right: 0.5rem;

        img {
            width: 100%;
            aspect-ratio: 1/1;
        }

        &:hover {
            scale: 1.25;
        }
    }
}
</style>
