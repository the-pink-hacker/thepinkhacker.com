<script lang="ts" setup>
import Dropdown from "./Dropdown.vue";
</script>

<template>
  <div class="navbar">
    <Dropdown title="Projects" :options="[
      { title: 'Apollo', link: '/projects/apollo' },
      { title: 'Classic 3D', link: '/projects/classic-3d' },
    ]" />
    <Dropdown title="Socials" :options="[
      { title: 'Tumblr', link: '/socials/tumblr' },
      { title: 'GitHub', link: '/socials/github' },
      { title: 'CurseForge', link: '/socials/curseforge' },
      { title: 'Modrinth', link: '/socials/modrinth' },
    ]" />
  </div>
</template>

<style lang="scss">
</style>
