<script setup lang="ts">
import CardImg from "../cardImage/CardImg.vue";
import AngleLeft from "../icons/AngleLeft.vue";
import AngleRight from "../icons/AngleRight .vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
interface release {
  id: number;
  src: string;
  rate: number;
  detail: string;
  category: string;
}
const newRelease: release[] = [
  {
    id: 12,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
    detail: "No Hard Feelings",
    category: "Comedy, Romance",
    rate: 5.6,
  },
  {
    id: 13,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
    detail: "The Winter King",
    category: "Drama",
    rate: 4.9,
  },
  {
    id: 14,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/q17tXNROOslj7uCGicKNlIf9Rx6.jpg",
    detail: "The Castle Quest",
    category: "Animation",
    rate: 7.2,
  },
  {
    id: 15,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
    detail: "One Piece",
    category: "Action & Adventure",
    rate: 5.9,
  },
  {
    id: 16,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
    detail: "Ruby Gillman,",
    category: "Animation, Family",
    rate: 2.5,
  },
  {
    id: 17,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    detail: "Guardians of Galaxy...",
    category: "Adventure, Action",
    rate: 6.8,
  },
  {
    id: 18,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/ckW6FZqMFEKA9DonixjZSAPxJMo.jpg",
    detail: "Gran Turismo",
    category: "Action, Drama",
    rate: 3.9,
  },
  {
    id: 24,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/ez1EDULOCUUCySHOZU6tz97qbtM.jpg",
    detail: "Just Go with It",
    category: "Comedy, Romance",
    rate: 5.6,
  },
  {
    id: 25,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/38Xr1JnV1ZcLQ55zmdSp6n475cZ.jpg",
    detail: "Predestination",
    category: "Science Fiction",
    rate: 4.9,
  },
  {
    id: 26,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/fLzlNq3fjNQ64TRRLKlNkrDpYLt.jpg",
    detail: "Megalodon",
    category: "Science Fiction",
    rate: 7.2,
  },
  {
    id: 27,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/g8KB77SPA7SyU8eid6TAEpt9skU.jpg",
    detail: "Redemptio",
    category: "Action, Thriller",
    rate: 5.9,
  },
  {
    id: 28,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    detail: "Far From Home",
    category: "Action, Adventure",
    rate: 2.5,
  },
  {
    id: 29,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/eoMsojXOiO18leSgHHOxzYOtG5o.jpg",
    detail: "Grotesque",
    category: "Horror, Comedy",
    rate: 6.8,
  },
  {
    id: 30,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/dnN1ncxEOO1TY0gYL2FWxJqlhlL.jpg",
    detail: "The Silencing",
    category: "Thriller, Action",
    rate: 3.9,
  },
  {
    id: 31,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/7RRHbCUtAsVmKI6FEMzZB6Re88P.jpg",
    detail: "Futurama ",
    category: "Animation, Comedy",
    rate: 6.8,
  },
  {
    id: 32,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/klL4yhwiU8aF4AuF5dCfJA9sRnS.jpg",
    detail: "Modern Family ",
    category: "Comedy",
    rate: 3.9,
  },
  {
    id: 33,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/6X2hftdC8y78SKMSgfzeUItqaVq.jpg",
    detail: "Ancient Aliens ",
    category: "Documentary, Mystery",
    rate: 7.1,
  },
  {
    id: 34,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    detail: "Friends",
    category: "Comedy, Drama",
    rate: 2.8,
  },
  {
    id: 35,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/daSFbrt8QCXV2hSwB0hqYjbj681.jpg",
    detail: "Grey's Anatomy",
    category: "Drama",
    rate: 5.5,
  },
  {
    id: 36,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/oGE7FI29ihpWlO4TAC7bJiswW4H.jpg",
    detail: "Beverly Hillbillies ",
    category: "Comedy",
    rate: 6.6,
  },
  {
    id: 37,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    detail: "Peaky Blinders",
    category: "Drama, Crime",
    rate: 5.6,
  },
  {
    id: 38,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/r935SMphvXppx5bJjbIBNx02fwc.jpg",
    detail: "The Blacklist",
    category: "Crime, Mystery",
    rate: 9.2,
  },
  {
    id: 39,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/ceqomvL0e1jGkJAPVWFlq2hGl7i.jpg",
    detail: "Blue Bloods",
    category: "Drama, Crime",
    rate: 5.6,
  },
  {
    id: 40,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/joPhJJblNtFDOpp6zQlx0xJWsmM.jpg",
    detail: "Bob's Burgers ",
    category: "Comedy, Animation",
    rate: 4.9,
  },
];
</script>


<template>
  <div class="px-4 sm:px-20 pt-14 pb-10 border-b border-[#222028]">
    <div class="text-[#FFFFFF] md:flex justify-between">
      <h1 class="text-2xl">Expected premiere</h1>
      <div class="flex justify-between mt-5 mb-8">
        <router-link :to="{ path: '/catalog' }">
          <button class="bg-[#222028] px-2 py-1 rounded-md text-sm hover:hover">
            View All
          </button>
        </router-link>
        <div>
          <AngleLeft
            class="bg-[#222028] px-2.5 py-1 rounded-md ml-8 mr-5 hover:hover prev"
          />
          <AngleRight
            class="bg-[#222028] px-2.5 py-1 rounded-md hover:hover next"
          />
        </div>
      </div>
    </div>
    <Swiper
      :rewind="true"
      :modules="[Navigation]"
      :navigation="{
        nextEl: '.next',
        prevEl: '.prev',
      }"
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
        '1200': {
          slidesPerView: 6,
          spaceBetween: 5,
        },
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="newR in newRelease" :key="newR.id" class="">
        <CardImg
          :img="newR.src"
          :id="newR.id"
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

