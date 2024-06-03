<template>
  <div>
    <!-- Top bar -->
    <div class="h-12 bg-slate-50 border-b border-slate-950 py-2">
      <div class="mx-auto px-6 flex justify-between items-center align-middle">
        <!-- sistemare il vertical align x metterli in centro -->
        <div class="flex space-x-4 content-center">
          <p><a href="#" class="text-black text-sm">Contribuisci</a></p>
          <p><a href="#" class="text-black text-sm">Abbonati</a></p>
        </div>
        <div>
          <button class="text-gray-700 text-sm">Accedi</button>
        </div>
      </div>
    </div>
    
    <!-- Search navigation bar -->
    <div class="h-24 border-b border-slate-950 flex justify-between items-center">
      <div class="h-24 w-24 flex justify-center items-center border-r border-black">
        <img class="h-7" src="@/assets/icons/HambMenu.svg" alt="">
      </div>
      <div class="h-24 w-24 flex items-center border-l border-black">
        <img class="" src="@/assets/icons/Search.svg" alt="">
      </div>
    </div>
    
    <!-- Sub navigation -->
    <div class="h-24 border-b border-slate-950 flex justify-between">
      <!-- navi bar -->
      <div class="h-24 w-5/6  flex flex-row">
        <div class="h-24 ml-12 w-11/12 flex justify-between">
          <div  v-for="(item, index) in navItems" :key="index" class="content-center pr-6">
            <a :href="item.href" class="text-black font-bold text-xl" :class="{'border-b-8 border-red-500 pb-7': item.active}" @click.prevent="setActive(index)">
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
      
      <!-- imgs -->
      <div class="h-24 w-1/6 mr-12 flex justify-end items-center">
        <img class="h-9" src="@/assets/icons/Toggle.svg" alt="">
        <img class="h-7 m-2 border rounded-md custom-shadow" src="@/assets/icons/Icon.svg" alt="">
      </div>
    </div>

    <!-- 3rd nav bar -->
    <div class="h-44 flex">
      <div class="h-44 w-1/3 flex">
        <div class="content-center ml-12">
          <p class="font-bold text-5xl align-middle">Tutti i temi</p>
        </div>
      </div>
      <div class="h-44 w-2/3 flex justify-end">
        <div class="mr-8 flex-row content-center">
          <a
            v-for="(category, index) in categories"
            :key="index"
            :href="category.href"
            class="text-xs uppercase border border-black p-3 rounded mr-6 custom-shadow"
            :style="{ backgroundColor: colors[index % colors.length] }"
          > {{ category.label }} </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const navItems = ref([
  { label: 'Tutti i temi', href: '#', active: true },
  { label: 'Ambiente', href: '#', active: false },
  { label: 'Economia', href: '#', active: false },
  { label: 'Mondo', href: '#', active: false },
  { label: 'Non Profit', href: '#', active: false },
  { label: 'Politica', href: '#', active: false },
  { label: 'Società', href: '#', active: false },
  { label: 'Welfare', href: '#', active: false }
]);

const categories = [
  { label: 'ambiente', href: '#ambiente' },
  { label: 'economia', href: '#economia' },
  { label: 'mondo', href: '#mondo' },
  { label: 'non profit', href: '#non-profit' },
  { label: 'politica', href: '#politica' },
  { label: 'società', href: '#societa' },
  { label: 'welfare', href: '#welfare' },
];

const colors = ['#E2F1E8', 'white', '#F1DADA', 'white', '#F1F1E2', 'white', 'white'];

const setActive = (index) => {
  navItems.value.forEach((item, i) => {
    item.active = i === index;
  });
};
</script>

<style >
.custom-shadow {
  -webkit-box-shadow: 1px 1px 1px 1px #000000; 
  box-shadow: 1px 1px 0.5px 1px #000000;;
}
</style>



