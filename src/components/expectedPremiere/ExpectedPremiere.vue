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
];
</script>


<template>
  <div>
    <h1>Expected premiere</h1>
    <!-- <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 mt-5 pb-10 border-b border-[#222028]">
    <CardImg
      v-for="newR in newRelease"
      :key="newR.id"
      :img="newR.src"
      :rate="newR.rate"
      :details="newR.detail"
      :category="newR.category"
      :borderColor="
        newR.rate > 7.5 ? 'green' : newR.rate > 5.6 ? 'yellow' : 'red'"
        class="mb-4"
    />
  </div> -->
  </div>
</template>
