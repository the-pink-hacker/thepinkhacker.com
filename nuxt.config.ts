// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    css: [
        "~/assets/style/main.scss",
    ],
    modules: [
        "@nuxtjs/sitemap",
        "@nuxt/content",
    ],
    content: {
        build: {
            markdown: {
                highlight: {
                    theme: "github-dark",
                    langs: [
                        "rust",
                        "toml",
                        "asm",
                        "typescript",
                        "c",
                        "cpp",
                        "hjson",
                    ],
                },
            },
        },
    },
    site: {
        url: "https://thepinkhacker.com",
    },
    sitemap: {
        sources: [
            "/api/__sitemap__/urls",
        ],
    },
    nitro: {
        compressPublicAssets: true,
    },
    compatibilityDate: "2025-02-20",
});
