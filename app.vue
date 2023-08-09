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
    },
  ]
});
</script>

<template>
  <Head>
    <Link rel="canonical" :href="'https://thepinkhacker.com' + $route.path" />
  </Head>
  <NavBar />
  <main>
    <NuxtPage />
  </main>
  <Footer />
</template>
