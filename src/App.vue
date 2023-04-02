<script setup lang="ts">
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";

const count = ref(0);
</script>

<template>
  <NavBar />
  <div>
    <p>This website is under heavy construction right now. Check back later.</p>
    <button @click="count++">Counter: {{ count }}</button>
    <p>Here is an <a href="">inline link</a></p>
  </div>
</template>

<style lang="scss" scoped>
</style>
