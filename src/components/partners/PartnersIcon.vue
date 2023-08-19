
<script lang="ts" setup>


interface partnerType {
    id : number ;
    src : string
}
const partner : partnerType[] = [
  {
    id: 1,
    src: "http://hotflix.volkovdesign.com/main/img/partners/themeforest-light-background.png",
  },
  {
    id: 2,
    src: "http://hotflix.volkovdesign.com/main/img/partners/audiojungle-light-background.png",
  },
  {
    id: 3,
    src: "http://hotflix.volkovdesign.com/main/img/partners/codecanyon-light-background.png",
  },
  {
    id: 4,
    src: "http://hotflix.volkovdesign.com/main/img/partners/photodune-light-background.png",
  },
  {
    id: 5,
    src: "http://hotflix.volkovdesign.com/main/img/partners/activeden-light-background.png",
  },
  {
    id: 6,
    src: "http://hotflix.volkovdesign.com/main/img/partners/3docean-light-background.png",
  },
];
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" >
    <div v-for="part in partner" :key="part.id" class="w-[90%] mt-10 md:w-[70%]">
        <img :src="part.src" alt="">
    </div>
  </div>
</template>

