import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        about: defineCollection({
            type: "page",
            source: "about.md",
            schema: z.object({
                date: z.optional(z.date()),
                tags: z.array(z.string()),
                logo: z.optional(z.string()),
                logoAlt: z.optional(z.string()),
            }),
        }),
        blog: defineCollection({
            type: "page",
            source: "blog/post/*.md",
            schema: z.object({
                date: z.optional(z.date()),
                tags: z.array(z.string()),
                logo: z.optional(z.string()),
                logoAlt: z.optional(z.string()),
            }),
        }),
        project: defineCollection({
            type: "page",
            source: "project/*.md",
            schema: z.object({
                date: z.optional(z.date()),
                tags: z.array(z.string()),
                logo: z.optional(z.string()),
                logoAlt: z.optional(z.string()),
                projectLinks: z.array(z.object({
                    name: z.string(),
                    url: z.string(),
                    icon: z.string(),
                })),
                projectType: z.optional(z.enum(["modrinth"])),
                projectId: z.optional(z.string()),
            }),
        }),
    },
});
