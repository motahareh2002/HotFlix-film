<script setup lang="ts">
import CardImg from "../cardImage/CardImg.vue";
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
</script>


<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 mt-5 pb-10 border-b border-[#222028]">
    <CardImg
      v-for="newR in newRelease"
      :key="newR.id"
      :id = newR.id
      :img="newR.src"
      :rate="newR.rate"
      :details="newR.detail"
      :category="newR.category"
      :borderColor="
        newR.rate > 7.5 ? 'green' : newR.rate > 5.6 ? 'yellow' : 'red'"
        class="mb-4"
    />
  </div>
</template>
