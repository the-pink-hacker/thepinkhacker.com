<script lang="ts" setup>
useSeoMeta({
    title: "The Pink Hacker",
    description: "A personal website.",
    ogTitle: "The Pink Hacker",
    ogDescription: "A personal website",
});
</script>

<template>
    <h1 style="text-align: center;">Welcome To My Website</h1>
    <SeparatedSectionHorizontal>
        <h2>Featured Projects</h2>
        <GridContainer>
            <ProjectGalleryCard style="image-rendering: pixelated;" image="https://i.imgur.com/xoFQ3Aa.png"
                to="/project/ti-sans-undertale">
                TI Sans Undertale
            </ProjectGalleryCard>
            <ProjectGalleryCard image="https://media.forgecdn.net/avatars/478/208/637773649648384039.png"
                to="/project/apollo">
                Apollo
            </ProjectGalleryCard>
            <ProjectGalleryCard image="https://cdn.modrinth.com/data/FRSckbRo/icon.png" to="/project/classic-3d">
                Classic 3D
            </ProjectGalleryCard>
            <ProjectGalleryCard image="https://media.forgecdn.net/avatars/569/858/637930634199896245.png"
                to="/project/commands-plus">
                Commands+
            </ProjectGalleryCard>
        </GridContainer>
    </SeparatedSectionHorizontal>
</template>
