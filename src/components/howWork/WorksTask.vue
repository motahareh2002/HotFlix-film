

<script setup lang="ts">
interface workType {
  id: string;
  title: string;
  text: string;
}
const works: workType[] = [
  {
    id: "01",
    title: "Create an account",
    text: "It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.",
  },
  {
    id: "02",
    title: "Choose your Plan",
    text: "It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.",
  },
  {
    id: "03",
    title: "Enjoy MovieGo",
    text: "It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.",
  },
];
</script>


<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-8 mt-10">
    <div v-for="work in works" :key="work.id" class="my-5">
        <span class="text-4xl font-bold text-primary">{{ work.id }}</span>
        <h4 class="text-xl font-bold my-3">{{ work.title }}</h4>
        <p class="text-sm">
            {{ work.text }}
        </p>
    </div>
  </div>
</template>