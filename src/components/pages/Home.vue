<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <p>This website is under heavy construction right now. Check back later.</p>
    <button @click="count++">Counter: {{ count }}</button>
    <p>Here is an <a href="">inline link</a></p>
  </div>
</template>
