<script lang="ts" setup>
import { remove } from "@vue/shared";
import { ref } from "vue";

defineProps({
  images: Array<{
    title: string,
    alt?: string,
    src: string,
    link: string,
    isRoute?: boolean,
  }>,
});

const selected = ref(0);

function isSelected(index: number) {
  return index == selected.value;
}

function getSelectedClass(index: number) {
  if (isSelected(index)) return "selected";
}

function hover(event: MouseEvent) {
  const target = <HTMLElement>event.currentTarget;
  const relativeMouseX = event.clientX - target.getBoundingClientRect().x;
  const relativeMouseY = event.clientY - target.getBoundingClientRect().y;
  const offsetX = -(relativeMouseX - (target.clientWidth / 2)) / target.clientWidth;
  const offsetY = -(relativeMouseY - (target.clientHeight / 2)) / target.clientHeight;
  $(target).css({
    "--image-offset-x": `${offsetX}`,
    "--image-offset-y": `${offsetY}`,
  });
}

function resetHover(event: MouseEvent) {
  const target = <HTMLElement>event.currentTarget;
  $(target).css({
    "--image-offset-x": "",
    "--image-offset-y": "",
  });
}
</script>

<template>
  <div class="image-collection">
    <div v-for="{ title, alt, src, link, isRoute }, index in images" class="image-wrapper" @click="selected = index"
      @mousemove="hover" @mouseleave="resetHover" :class="getSelectedClass(index)">
      <a v-if="isSelected(index) && isRoute" class="image-link" :href="link"></a>
      <RouterLink v-else-if="isSelected(index)" class="image-link" :to="link"></RouterLink>
      <div class="image-title-wrapper">
        <div class="image-title">{{ title }}</div>
      </div>
      <img :alt="alt" :src="src" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-collection {
  position: relative;
  display: flex;
  width: 100%;
  height: 300px;
  margin: 8px 0;
  overflow: scroll hidden;
  gap: 8px;
  background-color: var(--background-accent-color);
  z-index: 0;
}

.image-wrapper {
  cursor: pointer;
  position: relative;
  display: flex;
  flex: 1 0 auto;
  width: 100px;
  min-width: 100px;
  height: 100%;
  user-select: none;
  overflow: hidden;
  transition-duration: var(--ui-move-time);
  transition-property: width, min-width;
  justify-content: center;
  align-items: center;

  &.selected {
    flex: 0 0 auto;
    width: 33vw;
    min-width: 300px;

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

    &:hover img {
      transform: translate(calc(var(--image-offset-x) * var(--image-zoom-move)), calc(var(--image-offset-y) * var(--image-zoom-move))) scale(calc(100% + var(--image-zoom-scale)));
    }
  }

  &:hover .image-title-wrapper,
  &.selected .image-title-wrapper {
    font-size: var(--font-large-size);
    opacity: 100%;
    background-color: rgba(0, 0, 0, 67%);
    transition-duration: var(--ui-move-time);
  }
}

.image-title-wrapper {
  --image-offset-x: 0;
  --image-offset-y: 0;
  opacity: 0;
  display: flex;
  background-color: transparent;
  transition-duration: var(--hover-time);
  transition-property: background-color, width, height;
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
  transition: transform 100ms;
  width: 100%;
  height: 100%;
  pointer-events: none;
  object-fit: cover;
  z-index: -1;
}
</style>
