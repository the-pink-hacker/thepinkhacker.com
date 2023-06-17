<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en"
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png"
    }
  ]
});
</script>

<template>
  <NavBar />
  <NuxtPage />
  <Footer />
</template>

<style lang="scss">
main {
  margin: 8px;
}
</style>
