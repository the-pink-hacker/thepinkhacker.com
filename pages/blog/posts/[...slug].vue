<template>
    <DocumentContainer>
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc" />

            <Head>
                <Meta name="og:title" :content="doc.title" />
                <Meta name="og:description" :content="doc.description" />
            </Head>
        </ContentDoc>
    </DocumentContainer>
</template>
