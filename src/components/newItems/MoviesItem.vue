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
    id: 19,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/3O3klyyYpAZBBE4n7IngzTomRDp.jpg",
    detail: "Scream",
    category: "Crime, Horror, Mystery",
    rate: 2.8,
  },
  {
    id: 20,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
    detail: "Shrek 2",
    category: "Family, Comedy",
    rate: 5.5,
  },
  {
    id: 21,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/ruW3malZtlg66ODfg614dFbXO68.jpg",
    detail: "The Expendables",
    category: "Adventure, Thriller",
    rate: 6.6,
  },
  {
    id: 22,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/j5jM5pq78ObAXX1WhTsb115EkLl.jpg",
    detail: "The Twilight Saga",
    category: "Drama, Romance",
    rate: 5.6,
  },
  {
    id: 23,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/h3NJDiaaliUH35ApXPu8PFKZwWz.jpg",
    detail: "Waiting...",
    category: "Comedy",
    rate: 9.2,
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
];
</script>


<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 mt-5 pb-10">
    <CardImg
      v-for="newR in newRelease"
      :key="newR.id"
      :id="newR.id"
      :img="newR.src"
      :rate="newR.rate"
      :details="newR.detail"
      :category="newR.category"
      :borderColor="
        newR.rate > 7 ? 'green' : newR.rate > 5.6 ? 'yellow' : 'red'"
        class="mb-4"
    />
  </div>
</template>
