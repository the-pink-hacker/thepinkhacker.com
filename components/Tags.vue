<script lang="ts" setup>
defineProps<{
    tags?: string[],
}>();
</script>

<template>
    <ul v-if="tags">
        <li v-for="tag in tags">
            <Tag>
                {{ tag }}
            </Tag>
        </li>
    </ul>
</template>
