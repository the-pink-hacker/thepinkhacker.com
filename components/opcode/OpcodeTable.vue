<script lang="ts" setup>
defineProps({
    caption: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <table>
        <caption>{{ caption }}</caption>

        <tbody>
            <tr>
                <td />
                <th scope="col" v-for="i in 16">{{ (i - 1).toString(16).toUpperCase() }}</th>
            </tr>

            <slot />
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
table {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
}

tbody {
    border: 0.125rem solid var(--accent-color);
    background-color: var(--background-accent-color);
    padding: 0 1rem 1rem 0.5rem;
    width: fit-content;
    box-sizing: border-box;
    margin: 1rem auto 1rem auto;
}
</style>
