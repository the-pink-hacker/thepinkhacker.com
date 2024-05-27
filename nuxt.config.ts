// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    css: [
        "~/assets/style/main.scss",
    ],
    modules: [
        "@nuxt/content",
        "@nuxtjs/robots",
    ],
    content: {
        highlight: {
            theme: "github-dark",
            preload: [
                "rust",
                "toml",
                "asm",
                "typescript",
                "c",
                "c++",
            ],
        },
    },
    robots: {
        rules: [
            // Block OpenAI from scraping.
            {
                UserAgent: "GPTBot",
                Disallow: "/",
            },
        ],
    },
});
