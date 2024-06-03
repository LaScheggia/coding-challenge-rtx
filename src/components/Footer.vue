<template>
  <div class="h-32 flex bg-[#F4F4F4]">
    <div class="w-2/3 flex content-center items-center ml-14">
      <div class="mr-8 " v-for="item in items" :key="item.label">
        <a :href="item.href">{{ item.label }}</a>
      </div>
    </div>
    <div class="w-1/3 flex content-center items-center justify-end mr-14">
      <p>1994-2022 Vita Società Editoriale S.p.A.</p>
    </div>
  </div>
</template>

<script setup>
const items = [
  { label: 'Il gruppo', href: '#' },
  { label: 'Note Legali', href: '#' },
  { label: 'Chi Siamo', href: '#' },
  { label: 'Condizioni Uso', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Scrivici', href: '#' },
  { label: 'Pubblicità', href: '#' }
];
</script>