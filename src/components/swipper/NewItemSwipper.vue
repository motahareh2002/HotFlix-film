
<script setup lang="ts">
import ArrowLeft from "../icons/ArrowLeft.vue";
import ArrowRight from "../icons/ArrowRight.vue";
import { ref } from "vue";
import type { Ref } from "vue";
let backImg = [
  { id: 1, src: "http://hotflix.volkovdesign.com/main/img/home/home__bg.jpg" },
  { id: 2, src: "http://hotflix.volkovdesign.com/main/img/home/home__bg2.jpg" },
  { id: 3, src: "http://hotflix.volkovdesign.com/main/img/home/home__bg3.jpg" },
  { id: 5, src: "http://hotflix.volkovdesign.com/main/img/home/home__bg5.jpg" },
];
const index: Ref<number> = ref(0);
const nextTo: Ref<number> = ref(0);
const backgroundImg: Ref<string> = ref(
  "http://hotflix.volkovdesign.com/main/img/home/home__bg.jpg"
);
function nextItem() {
  if (index.value === backImg.length) index.value = 0;
  nextTo.value = index.value++;
  backgroundImg.value = backImg[nextTo.value].src;
}
function prevITem() {
  if (index.value === 0) index.value = backImg.length - 1;
  nextTo.value = index.value--;
  backgroundImg.value = backImg[nextTo.value].src;
}
</script>

<template>
  <div class=" text-white bg-blend-darken px-6 py-14" 
      :style="{ background: `rgba(0,0,0,0.7) url(${backgroundImg})`}">
    <div class="flex justify-between">
      <div class="text-2xl leading-relaxed ">
        <span class="font-black">NEW ITEMS </span>
        <span>OF THIS SEASON</span>
      </div>
      <div class="flex justify-between text-xl opacity-90">
        <ArrowLeft class="mr-5" @click="prevITem" />
        <ArrowRight @click="nextItem" />
      </div>
    </div>
    <div></div>
  </div>
</template>


