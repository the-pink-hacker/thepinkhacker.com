<script setup lang="ts">
interface Child {
    id?: string,
    depth: number,
    text: string,
    children?: Child[],
}

defineProps<Child>();
</script>

<template>
    <component :is="'h' + depth">
        <NuxtLink :to="id ? `#${id}` : undefined">{{ text }}</NuxtLink>
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
