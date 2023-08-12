<script setup lang="ts">
defineProps<{ id?: string, is: string }>();
</script>

<template>
    <component :is="is" :id="id">
        <a v-if="id" :href="`#${id}`">
            <slot />
        </a>
        <a v-else>
            <slot />
        </a>
    </component>
</template>
