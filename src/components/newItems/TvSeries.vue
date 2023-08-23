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
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 mt-5 pb-10 border-b border-[#222028]"
  >
    <CardImg
      v-for="newR in newRelease"
      :key="newR.id"
      :id="newR.id"
      :img="newR.src"
      :rate="newR.rate"
      :details="newR.detail"
      :category="newR.category"
      :borderColor="
        newR.rate > 7.5 ? 'green' : newR.rate > 5.6 ? 'yellow' : 'red'
      "
      class="mb-4"
    />
  </div>
</template>
