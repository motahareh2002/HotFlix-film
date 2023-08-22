<script setup lang="ts">
import ArrowLeft from "../icons/ArrowLeft.vue";
import ArrowRight from "../icons/ArrowRight.vue";
import CardImg from "../cardImage/CardImg.vue";
import { ref } from "vue";
import type { Ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {Navigation } from 'swiper/modules';
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
interface backImage {
  id: number;
  src: string;
}
interface slider {
  id: number;
  src: string;
  rate: number;
  detail: string;
  category: string;
}
const backImg: backImage[] = [
  { id: 1, src: "http://hotflix.volkovdesign.com/main/img/home/home__bg.jpg" },
  { id: 2, src: "http://hotflix.volkovdesign.com/main/img/home/home__bg2.jpg" },
  { id: 3, src: "http://hotflix.volkovdesign.com/main/img/home/home__bg3.jpg" },
  { id: 5, src: "http://hotflix.volkovdesign.com/main/img/home/home__bg5.jpg" },
];
const sliderImages: slider[] = [
  {
    id: 1,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover.jpg",
    detail: "I Dream in Another...",
    category: "Action, Triler",
    rate: 8.4,
  },
  {
    id: 2,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover2.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 7.1,
  },
  {
    id: 3,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover3.jpg",
    detail: "Whitney",
    category: "Romance, Drama",
    rate: 2.3,
  },
  {
    id: 4,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover4.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 6.8,
  },
  {
    id: 5,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover5.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 3.9,
  },
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
  <div
    class="text-white bg-blend-darken px-2 sm:px-20 pt-14 pb-8"
    :style="{ background: `rgba(0,0,0,0.7) url(${backgroundImg})` }"
  >
    <div class="flex justify-between mb-10 pl-4 pr-6">
      <div class="text-2xl sm:text-4xl leading-relaxed">
        <span class="font-black">NEW ITEMS </span>
        <span class="">OF THIS SEASON</span>
      </div>
      <div class="flex justify-between text-xl opacity-90">
        <ArrowLeft class="mr-5 prev" @click="prevITem" />
        <ArrowRight class="next" @click="nextItem" />
      </div>
    </div>
    <div>
      <Swiper
        :rewind="true"
        :modules="[Navigation]"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '100':{
            slidesPerView: 2,
            spaceBetween: 1,
          },
          '640': {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          
        }"
        :navigation="{
          nextEl : '.next',
          prevEl : '.prev'
        }"
        class="mySwiper"
      >
        <SwiperSlide
          v-for="sliderImage in sliderImages"
          :key="sliderImage.id"
          class=""
        >
          <CardImg
            :img="sliderImage.src"
            :id="sliderImage.id"
            :rate="sliderImage.rate"
            :details="sliderImage.detail"
            :category="sliderImage.category"
            :borderColor="
              sliderImage.rate > 7.5
                ? 'green'
                : sliderImage.rate > 5.6
                ? 'yellow'
                : 'red'
            "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>



