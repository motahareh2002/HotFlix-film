
<script setup lang="ts">
import ArrowLeft from "../icons/ArrowLeft.vue";
import ArrowRight from "../icons/ArrowRight.vue";
import { ref } from "vue";
import type { Ref } from "vue";
let backImg = [
  { id: 1, src: "../assets/img/home__bg.jpg" },
  { id: 2, src: "../assets/img/home__bg2.jpg" },
  { id: 3, src: "../assets/img/home__bg3.jpg" },
  { id: 4, src: "../assets/img/home__bg4.jpg" },
  { id: 5, src: "../assets/img/home__bg5.jpg" },
];
const index: Ref<number> = ref(0);
const x: Ref<string> = ref(
  "../assets/img/home__bg.jpg"
);
function nextItem() {
  if (index.value === backImg.length) index.value = 0;
  const nextTo: Ref<number> = ref(0);
  nextTo.value = index.value++;
  x.value = backImg[nextTo.value].src;
}
function prevITem() {
  if (index.value === 0) index.value = backImg.length - 1;
  const nextTo: Ref<number> = ref(0);
  nextTo.value = index.value--;
  x.value = backImg[nextTo.value].src;
}
console.log(backImg.length);

</script>

<template>
  <div :class="`bg-[url('${x}')] p-10 text-white`">
    <div class="flex justify-between">
      <div class="text-xl">
        <span class="font-bold">NEW ITEMS </span>
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
<!-- <style>
    div{
        background-image: url('');
    }
</style> -->


