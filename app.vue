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
  <main>
    <NuxtPage />
  </main>
  <Footer />
</template>
