<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en"
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
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
