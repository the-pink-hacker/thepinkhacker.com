<script lang="ts" setup>
import Dropdown from "./Dropdown.vue";
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="navbar-title">
      <div>ThePinkHacker</div>
    </RouterLink>
    <Dropdown title="Projects" :options="[
      { title: 'Apollo', link: '/projects/apollo' },
      { title: 'Classic 3D', link: '/projects/classic-3d' },
      { title: 'Commands+', link: '/projects/commands-plus' },
    ]" />
    <Dropdown title="Socials" :options="[
      { title: 'Tumblr', link: 'https://the-pink-hacker.tumblr.com', isRoute: false },
      { title: 'GitHub', link: '/socials/github' },
      { title: 'CurseForge', link: '/socials/curseforge' },
      { title: 'Modrinth', link: '/socials/modrinth' },
    ]" />
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  background-color: var(--background-accent-color);
}

.navbar-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px;
}
</style>
