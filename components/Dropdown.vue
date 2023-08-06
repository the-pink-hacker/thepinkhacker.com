<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  options: Array<{
    title: string,
    link: string,
    isRoute?: boolean,
  }>,
});
</script>

<template>
  <div class="dropdown" tabindex="0">
    <BorderedBlock class="dropdown-title">{{ title }}</BorderedBlock>
    <div class="dropdown-items-wrapper">
      <BorderedBlock class="dropdown-items" tag="ul">
        <li v-for="{ link, title, isRoute } in options" class="dropdown-item">
          <RouterLink v-if="isRoute === true || isRoute === undefined" :to="link">{{ title }}</RouterLink>
          <a v-else :href="link">{{ title }}</a>
        </li>
      </BorderedBlock>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover,
  &:focus {
    .dropdown-items-wrapper {
      padding-top: 0;
    }

    .dropdown-items {
      display: flex;
      flex-direction: column;
      height: max-content;
      width: max-content;
    }
  }
}

.dropdown-items {
  list-style: none;
  display: none;
  margin-top: 0;
}

.dropdown-item {
  list-style: none;
}

.dropdown-items-wrapper {
  position: absolute;
  left: 0;
  top: 100%;
  bottom: 0;
  padding-top: 30px;
  transition: padding-top 250ms ease;
}
</style>
