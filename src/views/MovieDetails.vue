<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
import FooterPage from "@/components/footer/FooterPage.vue";
import HeaderView from "@/components/header/HeaderView.vue";
const route = useRoute();
interface movieType {
  id: number;
  src: string;
  rate: number;
  detail: string;
  category: string;
}
const movies: movieType[] = [
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
const src: Ref<string> = ref("");
const rate: Ref<number> = ref(0);
const detail: Ref<string> = ref("");
const category: Ref<string> = ref("");
const borderColor: Ref<string> = ref("");
onMounted(() => {
  const index = +route.params.id - 1;
  src.value = movies[index].src;
  rate.value = movies[index].rate;
  detail.value = movies[index].detail;
  category.value = movies[index].category;
  borderColor.value =
    movies[index].rate > 7.5
      ? "green"
      : movies[index].rate > 5.6
      ? "yellow"
      : "red";
});
</script>



<template>
  <div>
    <HeaderView />
    <div class="text-[#FFFFFF] relative mt-10">
      <h1 class="text-3xl px-3 sm:px-20 mb-5">{{ detail }}</h1>
      <img :src="src" class="rounded-lg ml-3 sm:ml-20" />
      <div
        id="rate"
        class="absolute top-16 left-5 sm:left-24 rounded-full border-2 text-white p-1"
        :style="{
          backgroundColor: 'rgba(26,25,31,0.6)',
          borderColor: borderColor,
        }"
      >
        <span>{{ rate }}</span>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

