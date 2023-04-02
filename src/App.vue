<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <p>This website is under heavy construction right now. Check back later.</p>
    <button @click="count++">Counter: {{ count }}</button>
  </div>
</template>

<style lang="scss" scoped>
</style>
