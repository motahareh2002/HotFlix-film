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
    id: 41,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/516MFML05KWiPfiQNAsVCGMySc7.jpg",
    detail: "The Seven Deadly Sins",
    category: "Fantasy, Animation",
    rate: 7.1,
  },
  {
    id: 42,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    detail: "Puss in Boots",
    category: "Adventure, Comedy, Action",
    rate: 2.8,
  },
  {
    id: 43,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    detail: "Guardians of the Galaxy",
    category: "Science Fiction",
    rate: 5.5,
  },
  {
    id: 44,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/zI3E2a3WYma5w8emI35mgq5Iurx.jpg",
    detail: "The Simpsons ",
    category: " Animation, Comedy",
    rate: 6.6,
  },
  {
    id: 45,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/aLB7psB9N81n5GecHNOudXWW3AI.jpg",
    detail: "Family Guy ",
    category: "Animation, Comedy",
    rate: 5.6,
  },
  {
    id: 46,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/xnFFz3etm1vftF0ns8RMHA8XdqT.jpg",
    detail: "American Dad",
    category: "Animation, Comedy",
    rate: 9.2,
  }
];
</script>


<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 mt-5 pb-10 border-b border-[#222028]">
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
