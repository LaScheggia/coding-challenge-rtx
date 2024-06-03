<template>
  <div class="w-fit flex">
    <div class="author-img">
      <img class="rounded-full" :src="imgSrc" alt="Author Image">
    </div>
    <div class="ml-4 flex flex-col justify-between">
      <p class="text-sm text-white">Di: {{ name }}</p>
      <p class="text-xs text-white">{{ day }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  imgSrc: String,
  day: String
});
</script>

<style scoped>

</style>