<script setup lang="ts">
interface Child {
    id: string,
    depth: number,
    text: string,
    children?: Array<Child>,
}

defineProps<Child>();

// Nuxt won't let me enable anchor links for h1.
// This is a hack.
function parseId(id: string) {
    return id ? `#${id}` : "#content-top";
}
</script>

<template>
    <component :is="'h' + depth">
        <NuxtLink :to="parseId(id)">{{ text }}</NuxtLink>
    </component>
    <template v-for="child in children">
        <TableOfContentsItem :id="child.id" :depth="child.depth" :text="child.text" :children="child.children" />
    </template>
</template>
