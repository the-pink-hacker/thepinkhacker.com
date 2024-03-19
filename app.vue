<script lang="ts" setup>
useHead({
    htmlAttrs: {
        lang: "en"
    },
    link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
        },
        {
            rel: "me",
            href: "https://social.linux.pizza/@ThePinkHacker",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        }
    ],
    meta: [
        {
            name: "viewport",
            content: "width=device-width; user-scalable=yes",
        },
    ],
});

const scale = ref(1);

onMounted(() => {
    window.visualViewport?.addEventListener("resize", () => {
        scale.value = devicePixelRatio;
    });
});
</script>

<template>
    <div :style="`font-size: ${scale}rem`">
        <NavBar />
        <main>
            <NuxtPage />
        </main>
        <Footer />

        <Head>
            <Link rel="canonical" :href="'https://thepinkhacker.com' + $route.path" />
            <Meta property="og:url" :content="'https://thepinkhacker.com' + $route.path" />
        </Head>
    </div>
</template>
