

<script setup lang="ts">
import { useRouter } from 'vue-router';
interface type {
  id: number;
  title: string;
  catAndAuth: string;
  rating: number;
}

const movies: type[] = [
  {
    id: 1,
    title: "I Dream in Another Language",
    catAndAuth: "movie",
    rating: 9.2,
  },
  { id: 2, title: "Benched", catAndAuth: "movie", rating: 9.1 },
  { id: 3, title: "Whitney", catAndAuth: "TV Series", rating: 7.5 },
  { id: 4, title: "Blindspotting 2", catAndAuth: "TV Series", rating: 8.5 },
  { id: 5, title: "Blindspotting", catAndAuth: "TV Series", rating: 2.5 },
];
const reviews: type[] = [
  {
    id: 1,
    title: "I Dream in Another Language",
    catAndAuth: "John Doe",
    rating: 7.2,
  },
  { id: 2, title: "Benched", catAndAuth: "John Doe", rating: 6.8 },
  { id: 3, title: "Whitney", catAndAuth: "John Doe", rating: 3.4 },
  { id: 4, title: "Blindspotting", catAndAuth: "John Doe", rating: 9.8 },
  {
    id: 5,
    title: "I Dream in Another Language",
    catAndAuth: "John Doe",
    rating: 5.5,
  },
];
const goCatalog = useRouter()
function goToCatalog(){
  goCatalog.push('/catalog')
}
</script>



<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5">
    <div
      class="bg-[#222028] rounded-lg text-[#FFFFFF]"
    >
      <div class="flex justify-between px-6 py-5">
        <div class="text-xl">
          <fa icon="film" class="text-primary text-xl mr-3" />
          <span>Movies for you</span>
        </div>
        <button @click="goToCatalog" class="hover:hover bg-[#1a191f] text-xs px-2 rounded-lg">
          View All
        </button>
      </div>
      <div class="mt-3 overflow-y-auto scrollbar-hide">
        <div
          class="mt-5 py-3 px-6 grid grid-cols-4 text-xs text-[rgba(255,255,255,0.6)] border-t border-b border-[#1a191f]"
        >
          <span class="col-span-2">TITLE</span>
          <span>CATEGORY</span>
          <span>RATING</span>
        </div>
        <div class="-mr-32 overflow-y-auto scrollbar-hide md:overflow-hidden lg:mr-0">
          <div
            class="grid grid-cols-4 my-3 px-6 text-sm"
            v-for="movie in movies"
            :key="movie.id"
          >
            <span class="col-span-2">
              {{ movie.title }}
            </span>
            <span>
              {{ movie.catAndAuth }}
            </span>
            <div>
              <fa icon="star" class="text-primary mr-2" />
              <span>
                {{ movie.rating }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#222028] rounded-lg text-[#FFFFFF] mt-10 lg:mt-0">
      <div class="flex justify-between p-6">
        <div class="text-xl">
          <fa icon="fa-solid fa-star-half" class="text-primary mr-1" />
          <span>Latest reviews</span>
        </div>
        <button class="hover:hover bg-[#1a191f] text-xs px-2 rounded-lg">
          View All
        </button>
      </div>
      <div class="mt-3 overflow-y-auto scrollbar-hide">
        <div
          class="grid grid-cols-4 text-xs text-[rgba(255,255,255,0.6)] border-t border-b border-[#1a191f] px-6 py-3"
        >
          <span class="col-span-2">ITEM</span>
          <span>AUTHOR</span>
          <span>RATING</span>
        </div>
        <div class="-mr-32 overflow-y-auto scrollbar-hide md:overflow-hidden lg:mr-0">
          <div
            class="grid grid-cols-4 my-3 px-6 text-sm"
            v-for="review in reviews"
            :key="review.id"
          >
            <span class="col-span-2">
              {{ review.title }}
            </span>
            <span>
              {{ review.catAndAuth }}
            </span>
            <div>
              <fa icon="star" class="text-primary mr-2" />
              <span>
                {{ review.rating }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
