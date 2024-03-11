<script lang="ts" setup>
defineProps({
    headerName: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <tr>
        <th scope="row">{{ headerName }}</th>

        <slot />
    </tr>
</template>
