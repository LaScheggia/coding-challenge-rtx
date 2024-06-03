<template>
  <span class="text-xs uppercase border border-black px-3 py-1 rounded custom-shadow bg-[#f2f2f2]">{{ name }}</span>
</template>

<script setup>
const props = defineProps({
  name: String,
  color: String
});
</script>

<style scoped>
.tag {
  padding: 3px 6px;
  border-radius: 3px;
  margin-right: 5px;
}
</style>