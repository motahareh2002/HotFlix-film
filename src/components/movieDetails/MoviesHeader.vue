<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
interface movieType {
  id: number;
  src: string;
  rate: number;
  detail: string;
  category: string;
  releaseYear: number;
  country: string;
  director: string;
}
const movies: movieType[] = [
  {
    id: 1,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover.jpg",
    detail: "I Dream in Another...",
    category: "Action, Triler",
    rate: 8.4,
    releaseYear: 2023,
    country: "ARG",
    director: "Quentin Tarantino",
  },
  {
    id: 2,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover2.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 7.1,
    releaseYear: 2019,
    country: "BGD",
    director: "Alfred Hitchcock",
  },
  {
    id: 3,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover3.jpg",
    detail: "Whitney",
    category: "Romance, Drama",
    rate: 2.3,
    releaseYear: 2020,
    country: "BEN",
    director: "Steven Spielberg",
  },
  {
    id: 4,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover4.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 6.8,
    releaseYear: 1999,
    country: "BFA",
    director: "Martin Scorsese",
  },
  {
    id: 5,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover5.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 3.9,
    releaseYear: 1950,
    country: "CPV",
    director: "Stanley Kubrick",
  },
  {
    id: 6,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover6.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 7.1,
    releaseYear: 2002,
    country: "CXR",
    director: "Akira Kurosawa",
  },
  {
    id: 7,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover7.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 2.8,
    releaseYear: 2008,
    country: "DOM",
    director: "Tim Burton",
  },
  {
    id: 8,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover8.jpg",
    detail: "I Dream in Another...",
    category: "Action, Triler",
    rate: 5.5,
    releaseYear: 2021,
    country: "FRA",
    director: "Jean-Luc Godard",
  },
  {
    id: 9,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover9.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 6.6,
    releaseYear: 2019,
    country: "GIB",
    director: "Wes Anderson",
  },
  {
    id: 10,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover10.jpg",
    detail: "Whitney",
    category: "Romance, Drama",
    rate: 5.6,
    releaseYear: 2017,
    country: "HND",
    director: "Francis Ford Coppola",
  },
  {
    id: 11,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover11.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 9.2,
    releaseYear: 1998,
    country: "IRN",
    director: "Andrei Tarkovsky",
  },
  {
    id: 12,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover12.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 5.6,
    releaseYear: 2019,
    country: "ITA",
    director: "Ridley Scott",
  },
  {
    id: 13,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover13.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 4.9,
    releaseYear: 2023,
    country: "KOR",
    director: "Orson Welles",
  },
  {
    id: 14,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover14.jpg",
    detail: "I Dream in Another...",
    category: "Action, Triler",
    rate: 7.2,
    releaseYear: 2022,
    country: "LBR",
    director: "David Fincher",
  },
  {
    id: 15,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover15.jpg",
    detail: "Benched",
    category: "Comedy",
    rate: 5.9,
    releaseYear: 2021,
    country: "OMN",
    director: "Brian De Palma",
  },
  {
    id: 16,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover16.jpg",
    detail: "Whitney",
    category: "Romance, Drama",
    rate: 2.5,
    releaseYear: 2005,
    country: "QAT",
    director: "David Lynch",
  },
  {
    id: 17,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover17.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 6.8,
    releaseYear: 2010,
    country: "TUV",
    director: "Howard Hawks",
  },
  {
    id: 18,
    src: "http://hotflix.volkovdesign.com/main/img/covers/cover18.jpg",
    detail: "Blindspotting",
    category: "Comedy, Drama",
    rate: 3.9,
    releaseYear: 2012,
    country: "USA",
    director: "Christopher Nolan",
  },
];

const src: Ref<string> = ref("");
const rate: Ref<number> = ref(0);
const detail: Ref<string> = ref("");
const category: Ref<string> = ref("");
const borderColor: Ref<string> = ref("");
const releaseYear: Ref<number> = ref();
const country: Ref<string> = ref("");
const director: Ref<string> = ref("");
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
  releaseYear.value = movies[index].releaseYear;
  country.value = movies[index].country;
  director.value = movies[index].director;
});
</script>



<template>
  <div class="bg-[url('http://hotflix.volkovdesign.com/main/img/section/details.jpg')] pb-10">
    <div class="text-[#FFFFFF] relative mt-10 px-3 sm:px-20 lg:w-1/2 lg:mx-auto ">
      <h1 class="text-3xl mb-5">{{ detail }}</h1>
      <div class="md:flex">
        <div class="md:w-1/3 lg:w-1/2">
          <img :src="src" class="rounded-lg  brightness-75 h-[350px]" />
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
        <div class="md:w-2/3 md:ml-8 mt-5 md:mt-0">
          <div class="flex flex-col text-sm mb-5">
            <span class="mb-2">Director : {{ director }}</span>
            <span class="mb-2"
              >Genre : <span class="text-primary">{{ category }}</span></span
            >
            <span class="mb-2">Release Year : {{ releaseYear }}</span>
            <span class="mb-2"
              >Country : <span class="text-primary">{{ country }}</span></span
            >
          </div>
          <div
            class="bg-[#222028] overflow-y-auto h-32 md:h-44 lg:h-[212px] leading-loose px-5 py-4 text-sm rounded-lg mb-4"
          >
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

