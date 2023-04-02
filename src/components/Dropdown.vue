<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  options: Array<{
    title: string,
    link: string,
  }>,
});
</script>

<template>
  <div class="dropdown">
    <div>{{ title }}</div>
    <ul>
      <li v-for="{ link, title } in options">
        <router-link :to="link">{{ title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
</style>
