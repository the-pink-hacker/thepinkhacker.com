<script lang="ts" setup>
import { ref } from "vue";
import ImageHoverCollectionHorizontal from "../ImageSelectorMenuHorizontal.vue";

const count = ref(0);
const minecraftProjects = [
  {
    title: "Apollo",
    alt: "Apollo logo",
    src: "https://media.forgecdn.net/avatars/478/208/637773649648384039.png",
    route: "projects/apollo",
  },
  {
    title: "Classic 3D",
    alt: "Classic 3D logo",
    src: "https://cdn.modrinth.com/data/FRSckbRo/icon.png",
    route: "projects/classic-3d",
  },
  {
    title: "Commands+",
    alt: "",
    src: "https://media.forgecdn.net/avatars/569/858/637930634199896245.png",
    route: "projects/classic-3d",
  },
  {
    title: "Title",
    alt: "",
    src: "https://picsum.photos/seed/dasj/1920/1080",
    route: "",
  },
  {
    title: "SUPER LONG TITLE TO TRY AND OVERFLOW",
    alt: "",
    src: "https://picsum.photos/seed/jgnjk/1920/1080",
    route: "",
  },
  {
    title: "Medium title this time",
    alt: "",
    src: "https://picsum.photos/seed/gjnfjkng/1920/1080",
    route: "",
  },
  {
    title: "hi",
    alt: "",
    src: "https://picsum.photos/seed/ginmn/1920/1080",
    route: "",
  },
];
</script>

<template>
  <div>
    <p><strong>This website is under heavy construction right now. Check back later.</strong></p>
    <button @click="count++">Counter: {{ count }}</button>
    <p>Here is an <RouterLink to="/">inline link</RouterLink>
    </p>
    <h1>Minecraft Projects</h1>
    <ImageHoverCollectionHorizontal :images="minecraftProjects" />
  </div>
</template>
