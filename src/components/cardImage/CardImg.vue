
<script setup lang="ts">
import ButtonPlay from "../btns/ButtonPlay.vue";
import buttonOrange from "../btns/buttonOrange.vue";
const props = defineProps<{
  id: number;
  details?: string;
  category?: string;
  rate?: number;
  img?: string;
  borderColor?: string;
}>();
</script>

<template>
  <div>
    <div class="rounded-lg relative m-2">
      <div class="w-[100%] relative group">
        <img
          :src="`${img}`"
          class="rounded-lg group-hover:brightness-50 transition-all duration-300 w-[300px] h-[240px] sm:h-[230px] md:h-[200px] md:w-[300px] lg:w-[230px] lg:h-[260px] xl:h-[278px]"
        />
        <router-link :to="`/${id}`">
          <ButtonPlay
            class="group-hover:visible group-hover:scale-125 hidden md:block"
          />
        </router-link>
      </div>
      <div
        id="rate"
        class="absolute top-2 left-2 rounded-full border-2 text-white p-1"
        :style="{
          backgroundColor: 'rgba(26,25,31,0.6)',
          borderColor: borderColor,
        }"
      >
        <span>{{ rate }}</span>
      </div>
    </div>
    <div
      id="details"
      class="md:text-[#FFFFFF] hover:hover ml-3 text-sm md:text-lg text-primary"
    >
      <h1>{{ details }}</h1>
    </div>
    <div id="category" class="text-primary ml-3 text-xs hidden md:block">
      <h3>{{ category }}</h3>
    </div>
    <RouterLink :to="`/${id}`" class="flex justify-center md:hidden">
      <buttonOrange class="text-white w-11/12 my-2 py-1 text-sm">
        Watch Now
      </buttonOrange>
    </RouterLink>
  </div>
</template>
