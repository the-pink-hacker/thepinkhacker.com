<script lang="ts" setup>
import { ref } from "vue";
import ImageHoverCollectionHorizontal from "../ImageSelectorMenuHorizontal.vue";

const count = ref(0);
const exampleImages = [
  {
    title: "Apollo",
    alt: "Apollo logo",
    src: "https://cdn.modrinth.com/data/rQU8oPFc/icon.png",
    route: "projects/apollo",
  },
  {
    title: "Classic 3D",
    alt: "Classic 3D logo",
    src: "https://cdn.modrinth.com/data/FRSckbRo/icon.png",
    route: "projects/classic-3d",
  },
  {
    title: "Classic 3D",
    alt: "Classic 3D logo",
    src: "https://cdn.modrinth.com/data/FRSckbRo/icon.png",
    route: "projects/classic-3d",
  },
  {
    title: "Classic 3D",
    alt: "Classic 3D logo",
    src: "https://cdn.modrinth.com/data/FRSckbRo/icon.png",
    route: "projects/classic-3d",
  },
  {
    title: "Classic 3D",
    alt: "Classic 3D logo",
    src: "https://cdn.modrinth.com/data/FRSckbRo/icon.png",
    route: "projects/classic-3d",
  },
  {
    title: "Classic 3D",
    alt: "Classic 3D logo",
    src: "https://cdn.modrinth.com/data/FRSckbRo/icon.png",
    route: "projects/classic-3d",
  },
  {
    title: "Classic 3D",
    alt: "Classic 3D logo",
    src: "https://cdn.modrinth.com/data/FRSckbRo/icon.png",
    route: "projects/classic-3d",
  },
];
</script>

<template>
  <div>
    <p><strong>This website is under heavy construction right now. Check back later.</strong></p>
    <button @click="count++">Counter: {{ count }}</button>
    <p>Here is an <RouterLink to="/">inline link</RouterLink>
    </p>
    <h1>Minecraft</h1>
    <ImageHoverCollectionHorizontal :images="exampleImages" />
  </div>
</template>
