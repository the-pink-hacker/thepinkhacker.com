<script lang="ts" setup>
defineProps({
    to: {
        type: String,
        default: "/",
    },
});

function isRoute(url: string) {
    return url.startsWith("/");
}
</script>

<template>
    <li class="dropdown-item">
        <NuxtLink v-if="isRoute(to)" :to="to">
            <slot />
        </NuxtLink>
        <a v-else :href="to">
            <slot />
        </a>
    </li>
</template>
