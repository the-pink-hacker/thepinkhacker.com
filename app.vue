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
    {
      rel: "me",
      href: "https://social.linux.pizza/@ThePinkHacker"
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
