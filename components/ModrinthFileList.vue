<script lang="ts" setup>
import { useAsyncData } from 'nuxt/app';

const props = defineProps<{
    projectId: string,
}>();

const { data: files } = await useAsyncData(
    "modrinth-project-file",
    () => $fetch(`https://api.modrinth.com/v2/project/${props.projectId}/version`),
);
</script>

<script lang="ts">
</script>

<template>
    <ol>
        <template v-for="{ name, id, featured } in files">
            <li v-if="featured">
                <a :href="`https://modrinth.com/resourcepack/${projectId}/version/${id}`">{{ name }}</a>
            </li>
        </template>
    </ol>
</template>

<style lang="scss" scoped>
ol {
    list-style: none;
}
</style>
