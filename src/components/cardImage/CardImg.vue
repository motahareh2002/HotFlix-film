
<script setup lang="ts">
import ButtonPlay from "../btns/ButtonPlay.vue";
import VLazyImage from "v-lazy-image";
const props = defineProps<{
  id: number;
  details?: string;
  category?: string;
  rate?: number;
  img?: string;
  borderColor?: string;
}>();
</script>

<!--  -->
<template>
  <div>
    <div class="rounded-lg relative m-2">
      <div class="w-[100%] relative group">
        <v-lazy-image
          :src="`${img}`"
          class="rounded-lg brightness-75 group-hover:brightness-90 transition-all duration-300 w-[300px] h-[250px] sm:h-[230px] md:h-[200px] md:w-[400px] lg:h-[300px] lg:w-[250px]"
        />
        <router-link :to="`/${id}`">
          <ButtonPlay class="group-hover:visible" />
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
    <div id="details" class="text-[#FFFFFF] hover:hover ml-3 text-lg">
      <h1>{{ details }}</h1>
    </div>
    <div id="category" class="text-primary ml-3 text-xs">
      <h3>{{ category }}</h3>
    </div>
  </div>
</template>


<style scoped>
.v-lazy-image {
  filter: blur(20px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>