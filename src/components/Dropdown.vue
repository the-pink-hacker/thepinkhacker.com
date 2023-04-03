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
    <div class="dropdown-title">{{ title }}</div>
    <ul class="dropdown-items">
      <li v-for="{ link, title } in options" class="dropdown-item">
        <RouterLink :to="link">{{ title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/style/abstract/mixins";

.dropdown {
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover .dropdown-items {
    display: flex;
    flex-direction: column;
    height: max-content;
    width: max-content;
  }
}

.dropdown-title {
  @include bordered-block;
}

.dropdown-items {
  @include bordered-block;
  list-style: none;
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  bottom: 0;
  margin-top: 0;
}

.dropdown-item {
  list-style: none;
}
</style>
