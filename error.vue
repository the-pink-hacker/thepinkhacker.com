<template>
  <main>
    <p>{{ error }}</p>
    <button @click="handleError">Go Home</button>
  </main>
</template>

<script lang="ts" setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
