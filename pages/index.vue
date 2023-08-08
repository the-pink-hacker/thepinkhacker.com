<script lang="ts" setup>
const count = ref(0);
const minecraftProjects = [
    {
        title: "Apollo",
        alt: "Apollo logo",
        src: "https://media.forgecdn.net/avatars/478/208/637773649648384039.png",
        link: "projects/apollo",
    },
    {
        title: "Classic 3D",
        alt: "Classic 3D logo",
        src: "https://cdn.modrinth.com/data/FRSckbRo/icon.png",
        link: "projects/classic-3d",
    },
    {
        title: "Commands+",
        alt: "Commands+ logo",
        src: "https://media.forgecdn.net/avatars/569/858/637930634199896245.png",
        link: "projects/commands-plus",
    },
    {
        title: "Title",
        src: "https://picsum.photos/seed/dasj/1920/1080",
        link: "",
    },
    {
        title: "SUPER LONG TITLE TO TRY AND OVERFLOW",
        src: "https://picsum.photos/seed/jgnjk/1920/1080",
        link: "",
    },
    {
        title: "Medium title this time",
        src: "https://picsum.photos/seed/gjnfjkng/1920/1080",
        link: "",
    },
    {
        title: "hi",
        src: "https://picsum.photos/seed/ginmn/1920/1080",
        link: ""
    },
];

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
        <p>Here is an <RouterLink to="/">inline link</RouterLink>
        </p>
        <h1>Minecraft Projects</h1>
        <ImageSelectorMenuHorizontal :images="minecraftProjects" />
    </div>
</template>
