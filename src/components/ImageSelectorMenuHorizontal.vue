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

  &.selected {
    width: 300%;
  }

  &:hover .image-title-wrapper {
    opacity: 100%;
    backdrop-filter: blur(var(--blur-size));
  }
}

.image-title-wrapper {
  opacity: 0;
  display: flex;
  backdrop-filter: blur(0px);
  transition: backdrop-filter 200ms;
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: bold;
  align-items: center;
  justify-content: center;
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
