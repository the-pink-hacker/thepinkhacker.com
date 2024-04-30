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

// function updateScale() {
//     document.body.style.fontSize = `${devicePixelRatio}rem`;
// }

// onMounted(() => {
//     updateScale();
//     window.visualViewport?.addEventListener("resize", updateScale);
// });
</script>

<template>
    <NavBar />
    <main>
        <NuxtPage />
    </main>
    <Footer />

    <Head>
        <Link rel=" canonical" :href="'https://thepinkhacker.com' + $route.path" />
        <Meta property="og:url" :content="'https://thepinkhacker.com' + $route.path" />
    </Head>
</template>
