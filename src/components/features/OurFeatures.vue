
<script setup lang="ts">
import FeaturesTask from "./FeaturesTask.vue";
interface featuresType {
  id: number;
  icon: string;
  title: string;
  text: string;
}
const features: featuresType[] = [
  {
    id: 1,
    icon: "desktop",
    title: "Ultra HD",
    text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn"t anything embarrassing hidden in the middle of text."',
  },
  {
    id: 2,
    icon: "camera ",
    title: "Film",
    text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first.",
  },
  {
    id: 3,
    icon: "award",
    title: "Awards",
    text: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.",
  },
  {
    id: 4,
    icon: "bell",
    title: "Notifications",
    text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
  },
  {
    id: 5,
    icon: "rocket",
    title: "Rocket",
    text: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: 6,
    icon: "ravelry",
    title: "Multi Language Subtitles",
    text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
  },
];
</script>


<template>
  <div
    class="border-t border-[#222028] px-4 sm:px-24 text-[#FFFFFF] pt-14 pb-10"
  >
    <h1 class="text-3xl">Our Features</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
      <FeaturesTask
        v-for="feature in features"
        :key="feature.id"
        :icon="feature.icon"
        :title="feature.title"
        :text="feature.text"
      />
    </div>
  </div>
</template>