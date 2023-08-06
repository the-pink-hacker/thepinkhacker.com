<template>
  <div>
    <p>{{ error }}</p>
    <button @click="handleError">Go Home</button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
