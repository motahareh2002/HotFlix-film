
<script setup lang="ts">
import buttonOrange from "../btns/buttonOrange.vue";
const props = defineProps<{
  title?: string;
  price?: string;
  status?: string;
  color?: string;
  icon?: string;
  client?: string;
  colorTxt?: string;
}>();
</script>

<template>
  <div
    class="bg-[#222028] rounded-lg w-[95%] mx-auto px-5 py-8 text-[#FFFFFF] mb-3"
  >
    <div class="flex justify-between text-2xl mb-8">
      <span>{{title}}</span>
      <span :class="`text-${color}`">{{ price }} {{status}}</span>
    </div>
    <ul>
      <li class="mb-5 border-b border-[#1a191f] pb-4 text-sm">
        <fa :icon="`${icon}`" :class="`text-${colorTxt} mr-2`" />
        <span>{{client}}</span>
      </li>
      <!-- <li class="mb-5 border-b border-[#1a191f] pb-4 text-sm">
        <fa icon="check" class="text-[#29b474] mr-2" />
        <span> 720p Resolution</span>
      </li>
      <li class="mb-5 border-b border-[#1a191f] pb-4 text-sm">
        <fa icon="times" class="text-[#eb5757] mr-2" />
        <span> Limited Availability</span>
      </li>
      <li class="mb-5 border-b border-[#1a191f] pb-4 text-sm">
        <fa icon="times" class="text-[#eb5757] mr-2" />
        <span> Desktop Only</span>
      </li>
      <li class="mb-5 border-b border-[#1a191f] pb-4 text-sm">
        <fa icon="times" class="text-[#eb5757] mr-2" />
        <span> Limited Support</span>
      </li> -->
    </ul>
    <buttonOrange class="w-full p-3"> Choose Plan </buttonOrange>
  </div>
</template>