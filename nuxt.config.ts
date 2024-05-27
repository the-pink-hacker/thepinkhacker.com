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
        "@nuxtjs/sitemap",
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
            {
                Sitemap: "https://thepinkhacker.com/sitemap.xml"
            },
        ],
    },
    site: {
        url: "https://thepinkhacker.com",
    },
    sitemap: {
        sources: [
            "/api/__sitemap__/urls"
        ],
    },
});
