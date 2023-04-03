<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <p><strong>This website is under heavy construction right now. Check back later.</strong></p>
    <button @click="count++">Counter: {{ count }}</button>
    <p>Here is an <RouterLink to="/">inline link</RouterLink>
    </p>
  </div>
</template>
