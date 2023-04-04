<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  images: Array<{
    title: string,
    alt: string,
    src: string,
    route: string,
  }>,
});

const selected = ref(0);

function isSelected(index: number) {
  return index == selected.value;
}

function getSelectedClass(index: number) {
  if (isSelected(index)) return "selected";
}
</script>

<template>
  <div class="image-collection">
    <div v-for="{ title, alt, src, route }, index in images" class="image-wrapper" @click="selected = index"
      :class="getSelectedClass(index)">
      <RouterLink v-if="isSelected(index)" class="image-link" :to="route"></RouterLink>
      <div class="image-title-wrapper">
        <div class="image-title">{{ title }}</div>
      </div>
      <img :alt="alt" :src="src" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-collection {
  display: flex;
  width: 100%;
  height: auto;
  margin: 8px 0;
  overflow: hidden;
}

.image-wrapper {
  cursor: pointer;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  height: 20vw;
  user-select: none;
  overflow: hidden;
  transition: width var(--ui-move-time);
  justify-content: center;
  align-items: center;

  &.selected {
    width: 300%;

    .image-title-wrapper {
      min-height: fit-content;
      min-width: fit-content;
      height: 33%;
      width: 33%;
      padding: 8px;
    }

    .image-title {
      font-size: var(--font-large-size);
    }

    &:hover .image-title::after {
      width: 100%;
    }
  }

  &:hover .image-title-wrapper,
  &.selected .image-title-wrapper {
    font-size: var(--font-large-size);
    opacity: 100%;
    backdrop-filter: brightness(33%);
    transition-duration: 500ms;
  }
}

.image-title-wrapper {
  opacity: 0;
  display: flex;
  backdrop-filter: brightness(100%);
  transition-duration: var(--hover-time);
  transition-property: backdrop-filter, width, height;
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}

.image-title {
  font-size: 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  color: var(--text-accent-color);
  transition: font-size var(--hover-time);

  &::after {
    transition-duration: var(--hover-time);
    transition-property: width;
    display: block;
    content: "";
    position: absolute;
    height: var(--underline-size);
    width: 0;
    bottom: calc(-1 * var(--underline-size) + var(--underline-offset-size));
    background-color: var(--text-accent-color);
  }
}

.image-link {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

img {
  width: 100%;
  height: 100%;
  pointer-events: none;
  object-fit: cover;
  z-index: -1;
}
</style>
