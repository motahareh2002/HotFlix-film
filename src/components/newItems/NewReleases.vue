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
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
    detail: "Ahsoka",
    category: "Sci-Fi & Fantasy, Action & Adventure",
    rate: 8.4,
  },
  {
    id: 2,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg",
    detail: "The Monkey King",
    category: "Animation, Fantasy, Adventure",
    rate: 7.1,
  },
  {
    id: 3,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    detail: "Elemental",
    category: "Animation, Comedy, Family",
    rate: 2.3,
  },
  {
    id: 4,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg",
    detail: "Blue Beetle",
    category: "Action, Science Fiction",
    rate: 6.8,
  },
  {
    id: 5,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    detail: "Across the Spider-Verse",
    category: "Animation, Action, Adventure",
    rate: 3.9,
  },
  {
    id: 6,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    detail: "Barbie",
    category: "Comedy, Adventure, Fantasy",
    rate: 7.1,
  },
  {
    id: 7,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    detail: "The Flash",
    category: "Action, Adventure",
    rate: 2.8,
  },
  {
    id: 8,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    detail: "Oppenheimer",
    category: "Drama, History",
    rate: 5.5,
  },
  {
    id: 9,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/8vfyhKkTwvxbV5UuuIMBP0BLILv.jpg",
    detail: "The List",
    category: "Romance, Comedy",
    rate: 6.6,
  },
  {
    id: 10,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    detail: "Heart of Stone",
    category: "Thriller, Action",
    rate: 5.6,
  },
  {
    id: 11,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/3O8uTUpt76ShtEtNNrOJpcwQROH.jpg",
    detail: "Mask Girl",
    category: "Comedy, Drama",
    rate: 9.2,
  },
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
        newR.rate > 7 ? 'green' : newR.rate > 5.6 ? 'yellow' : 'red'"
        class="mb-4"
    />
  </div>
</template>
