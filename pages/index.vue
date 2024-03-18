<script lang="ts" setup>
const count = ref(0);

useSeoMeta({
    title: "The Pink Hacker",
    description: "A personal website.",
    ogTitle: "The Pink Hacker",
    ogDescription: "A personal website",
});
</script>

<template>
    <div>
        <h2><strong>This website is under heavy construction right now. Check back later.</strong></h2>
        <BorderedButton @click="count++">Counter: {{ count }}</BorderedButton>
        <p>Here is an <NuxtLink to="/">inline link</NuxtLink>
        </p>
        <h2>Projects</h2>
        <ImageCarousel>
            <ImageCarouselItem style="image-rendering: pixelated;" alt="" src="https://i.imgur.com/xoFQ3Aa.png"
                to="/project/ti-sans-undertale">
                Apollo
            </ImageCarouselItem>
            <ImageCarouselItem alt="Apollo logo" src="https://media.forgecdn.net/avatars/478/208/637773649648384039.png"
                to="/project/apollo">
                Apollo
            </ImageCarouselItem>
            <ImageCarouselItem alt="Classic 3D logo" src="https://cdn.modrinth.com/data/FRSckbRo/icon.png"
                to="/project/classic-3d">
                Classic 3D
            </ImageCarouselItem>
            <ImageCarouselItem alt="Commands+ logo"
                src="https://media.forgecdn.net/avatars/569/858/637930634199896245.png" to="/project/commands-plus">
                Commands+
            </ImageCarouselItem>
        </ImageCarousel>
    </div>
</template>
