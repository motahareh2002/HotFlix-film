<script setup lang="ts">
import CardImg from "../cardImage/CardImg.vue";
import AngleLeft from "../icons/AngleLeft.vue";
import AngleRight from "../icons/AngleRight .vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";
interface release {
  id: number;
  src: string;
  rate: number;
  detail: string;
  category: string;
}
const newRelease: release[] = [
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
  {
    id: 6,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover6.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 7.1,
  },
  {
    id: 7,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover7.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 2.8,
  },
  {
    id: 8,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover8.jpg",
    detail: "I Dream in Another...",
    category: "Action, Triler",
    rate: 5.5,
  },
  {
    id: 9,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover9.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 6.6,
  },
  {
    id: 10,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover10.jpg",
    detail: "Whitney",
    category: "Romance, Drama",
    rate: 5.6,
  },
  {
    id: 11,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover11.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 9.2,
  },
  {
    id: 12,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover12.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 5.6,
  },
  {
    id: 13,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover13.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 4.9,
  },
  {
    id: 14,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover14.jpg",
    detail: "I Dream in Another...",
    category: "Action, Triler",
    rate: 7.2,
  },
  {
    id: 15,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover15.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 5.9,
  },
  {
    id: 16,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover16.jpg",
    detail: "Whitney",
    category: "Romance, Drama",
    rate: 2.5,
  },
  {
    id: 17,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover17.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 6.8,
  },
  {
    id: 18,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover18.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 3.9,
  },
];
const swiper = useSwiper();
</script>


<template>
  <div class="px-4 sm:px-20 pt-14 pb-10">
    <div class="text-[#FFFFFF]">
      <h1 class="text-2xl">Expected premiere</h1>
      <div class="flex justify-between mt-5 mb-8">
        <button class="bg-[#222028] px-2 py-1 rounded-md text-sm hover:hover">
          View All
        </button>
        <div>
          <AngleLeft
            class="bg-[#222028] px-2.5 py-1 rounded-md mr-5 hover:hover"
          />
          <AngleRight class="bg-[#222028] px-2.5 py-1 rounded-md hover:hover" />
        </div>
      </div>
    </div>
    <Swiper
      :rewind="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '100': {
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
      class="mySwiper"
    >
      <SwiperSlide v-for="newR in newRelease" :key="newR.id" class="">
        <CardImg
          :img="newR.src"
          :rate="newR.rate"
          :details="newR.detail"
          :category="newR.category"
          :borderColor="
            newR.rate > 7.5 ? 'green' : newR.rate > 5.6 ? 'yellow' : 'red'
          "
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
