<template>
    <DocumentContainer>
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc" />

            <Head>
                <Meta property="og:title" :content="doc.title" />
                <Meta property="og:description" :content="doc.description" />
            </Head>
        </ContentDoc>
    </DocumentContainer>
</template>
