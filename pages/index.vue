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
        <p><strong>This website is under heavy construction right now. Check back later.</strong></p>
        <BorderedButton @click="count++">Counter: {{ count }}</BorderedButton>
        <p>Here is an <NuxtLink to="/">inline link</NuxtLink>
        </p>
        <h1>Minecraft Projects</h1>
        <ImageCarousel>
            <ImageCarouselItem alt="Apollo logo" src="https://media.forgecdn.net/avatars/478/208/637773649648384039.png"
                to="/projects/apollo">
                Apollo
            </ImageCarouselItem>
            <ImageCarouselItem alt="Classic 3D logo" src="https://cdn.modrinth.com/data/FRSckbRo/icon.png"
                to="/projects/apollo">
                Classic 3D
            </ImageCarouselItem>
            <ImageCarouselItem alt="Commands+ logo" src="https://media.forgecdn.net/avatars/569/858/637930634199896245.png"
                to="/projects/apollo">
                Commands+
            </ImageCarouselItem>
            <ImageCarouselItem src="https://picsum.photos/seed/dasj/1920/1080">
                Title
            </ImageCarouselItem>
            <ImageCarouselItem src="https://picsum.photos/seed/jgnjk/1920/1080">
                SUPER LONG TITLE TO TRY AND OVERFLOW
            </ImageCarouselItem>
            <ImageCarouselItem src="https://picsum.photos/seed/gjnfjkng/1920/1080">
                Medium title this time
            </ImageCarouselItem>
            <ImageCarouselItem src="https://picsum.photos/seed/ginmn/1920/1080">
                hi
            </ImageCarouselItem>
        </ImageCarousel>
    </div>
</template>
