
<script setup lang="ts">
const props = defineProps<{
  details?: string;
  category?: string;
  rate?: number;
  img?: string;
  borderColor?: string
}>();

</script>


<template>
  <div>
    <div class="rounded-lg relative m-2">
      <div class="w-[100%] relative group">
        <img
          :src="`${img}`"
          class="rounded-lg brightness-75 group-hover:brightness-50 transition-all duration-300"
        />
        <button
          class="bg-[#FFFFFF] rounded-full h-14 w-14 border-[6px] absolute top-[40%] invisible group-hover:visible transition-all duration-700 left-1/3"
        >
          <fa icon="play" class="text-primary text-xl mt-1 ml-1" />
        </button>
      </div>
      <div
        id="rate"
        class="absolute top-2 left-2 rounded-full border-2 text-white p-1"
        :style="{ backgroundColor: 'rgba(26,25,31,0.6)' , borderColor : borderColor}"
      >
        <span>{{ rate }}</span>
      </div>
    </div>
    <div id="details" class="text-[#FFFFFF] hover:hover ml-3 text-lg">
      <h1>{{ details }}</h1>
    </div>
    <div id="category" class="text-primary ml-3 text-xs">
      <h3>{{ category }}</h3>
    </div>
  </div>
</template>
