<script setup lang="ts">
import ArrowLeft from "../icons/ArrowLeft.vue";
import ArrowRight from "../icons/ArrowRight.vue";
import CardImg from "../cardImage/CardImg.vue";
import NewItemMdSize from './NewItemMdSize.vue';
import NewItemUnderMd from './NewItemUnderMd.vue';
import { ref } from "vue";
import type { Ref } from "vue";
interface backImage {
  id: number;
  src: string;
}
const backImg: backImage[] = [
  {
    id: 1,
    src: "https://images5.fanpop.com/image/photos/30700000/FF-background-barbie-movies-30763500-990-660.jpg",
  },
  {
    id: 2,
    src: "https://getwallpapers.com/wallpaper/full/d/6/e/1017834-cool-friends-tv-show-wallpapers-1920x1080-for-macbook.jpg",
  },
  { id: 3, src: "https://4kwallpapers.com/images/walls/thumbs_3t/11822.jpg" },
  { id: 4, src: "https://wallpapercave.com/wp/wp10758144.jpg" },
];
const index: Ref<number> = ref(0);
const nextTo: Ref<number> = ref(0);
const backgroundImg: Ref<string> = ref(
  "https://wallpapercave.com/wp/wp1890591.jpg"
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

setInterval(()=>{
  nextItem()
},4000)
</script>
<template>
  <div
    class="text-white bg-blend-darken px-3 sm:px-20 pt-14 relative pb-8"
    :style="{ background: `rgba(0,0,0,0.7) url(${backgroundImg}) 100%` }"
  >
    <div class="flex justify-between mb-10 pl-4 pr-6">
      <div class="text-xl sm:text-4xl leading-relaxed">
        <span class="font-black">NEW ITEMS </span>
        <span class="">OF THIS SEASON</span>
      </div>
    </div>
    <div>
      <div class="sm:hidden">
        <NewItemUnderMd />
      </div>
      <div class="hidden sm:block">
        <new-item-md-size />
      </div>
      <div class="md:flex justify-center mt-5 text-xl opacity-90 hidden">
        <ArrowLeft
          class="mr-5 prev rounded-full border px-3 py-1.5 hover:bg-white hover:text-black transition-colors ease-in-out duration-700"
          @click="prevITem"
        />
        <ArrowRight
          class="next rounded-full border px-3 py-1.5 hover:bg-white hover:text-black transition-colors ease-in-out duration-700"
          @click="nextItem"
        />
      </div>
    </div>
  </div>
</template>



