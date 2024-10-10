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
        },
        {
            rel: "alternate",
            href: "/blog/rss",
            type: "application/rss+xml",
        },
        {
            rel: "apple-touch-icon",
            href: "https://thepinkhacker.com/image/icon/the-finite-doctor.png",
        },
    ],
    meta: [
        {
            name: "viewport",
            content: "width=device-width; user-scalable=yes",
        },
    ],
});

useSeoMeta({
    title: "The Pink Hacker",
    description: "A personal website.",
    ogTitle: "The Pink Hacker",
    ogDescription: "A personal website",
    ogImage: "/public/image/icon/the-finite-doctor.png",
});
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
