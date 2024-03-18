<script setup lang="ts">
interface Child {
    id: string,
    depth: number,
    text: string,
    children?: Array<Child>,
    contentTop?: string,
}

defineProps<Child>();

// Nuxt won't let me enable anchor links for h1.
// This is a hack.
function parseId(id: string, contentTop?: string) {
    return id ? `#${id}` : `#${contentTop}`;
}
</script>

<template>
    <component :is="'h' + depth">
        <NuxtLink :to="parseId(id, contentTop)">{{ text }}</NuxtLink>
    </component>
    <template v-for="child in children">
        <TableOfContentsItem :id="child.id" :depth="child.depth" :text="child.text" :children="child.children" />
    </template>
</template>

<style lang="scss" scoped>
@for $i from 1 through 6 {
    h#{7 - $i} {
        font-size: 0.25rem * $i;
    }
}
</style>
