<script lang="ts" setup>
    defineProps({
        caption: {
            type: String,
            required: true,
        },
    });
</script>

<template>
        <caption>{{ caption }}</caption>
    <tbody>
        <tr>
            <th scope="colgroup"></th>
            <th scope="col" v-for="i in 16">{{ (i - 1).toString(16).toUpperCase() }}</th>
        </tr>

        <slot />
    </tbody>
</template>
