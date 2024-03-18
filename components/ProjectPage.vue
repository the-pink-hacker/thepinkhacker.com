<template>
    <DocumentContainer>
        <ContentDoc v-slot="{ doc, doc: { logo, title } }">
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
                <SideCard>
                    <div class="card-header">Links</div>
                </SideCard>

                <SideCard>
                    <div class="card-header">Files</div>
                </SideCard>
            </SideCardContainer>

            <SideCardContainer direction="right">
                <SideCard>
                    <div class="card-header">Posts</div>
                </SideCard>
            </SideCardContainer>

            <Head>
                <Meta name="og:image" :content="logo" />
            </Head>
        </ContentDoc>
    </DocumentContainer>
</template>

<style lang="scss" scoped>
header>h1 {
    text-align: center;
}
</style>
