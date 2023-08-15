<!-- 
<script setup lang="ts">
import buttonOrange from "../btns/buttonOrange.vue";
const props = defineProps<{
  id?: number;
  title?: string;
  price?: string;
  status?: string;
  color?: string;
  // icon?: string;
  // colorTxt?: string;
  // client?: string;
}>();
</script>

<template>
  <div
    class="bg-[#222028] rounded-lg w-[95%] mx-auto px-5 py-8 text-[#FFFFFF] mb-3"
  >
    <div class="flex justify-between text-2xl mb-8">
      <span>{{ title }}</span>
      <span :class="`text-${color}`">{{ price }} {{ status }}</span>
    </div>
    <ul>
      <li class="mb-5 border-b border-[#1a191f] pb-4 text-sm">
        <fa :icon="`${icon}`" :class="`text-${colorTxt} mr-2`" />
        <span>{{client}}</span>
      </li>
    </ul>
    <buttonOrange class="w-full p-3"> Choose Plan </buttonOrange>
  </div>
</template> -->