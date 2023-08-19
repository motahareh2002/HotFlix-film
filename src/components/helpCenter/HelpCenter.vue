

<script setup lang="ts">
import InfoIcon from '../icons/InfoIcon.vue'
interface helpType {
  id: number;
  title: string;
  text: string;
}

const helps: helpType[] = [
  {
    id: 1,
    title: "Why is a Video is not loading?",
    text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 2,
    title: "Why isn't the video starting at the beginning?",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 3,
    title: "Why isn't there a HD version of this video?",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
  {
    id: 4,
    title: "How do I make the Video go Fullscreen?",
    text: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    id: 5,
    title: "Why is the sound distorted?",
    text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 6,
    title: "What Browsers are supported?",
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 7,
    title: "Why is the Video stuttering, buffering or randomly stopping?",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 8,
    title: "How do you handle my privacy?",
    text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 9,
    title: "When I change the quality of a video, nothing happens.",
    text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 10,
    title: "How can I contact you?",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];
</script>

<template>
    <div class="text-[#FFFFFF] px-4 sm:px-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:gap-x-8">
        <div v-for="help in helps" :key="help.id" class="rounded-md bg-[#222028] my-10 p-4">
            <div class="flex items-center mb-4">
                <InfoIcon class="text-primary border border-primary rounded-full px-2 mr-2" />
                <h1 class="text-xl">
                    {{ help.title }}
                </h1>
            </div>
            <p class="text-sm">
                {{ help.text }}
            </p>
        </div>
    </div>
</template>
