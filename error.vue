<template>
  <div>
    <p>{{ error }}</p>
    <BorderedButton @click="handleError">Go Home</BorderedButton>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
