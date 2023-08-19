

<script setup lang="ts">
import FacebookIcon from '../icons/FacebookIcon.vue'
import TwitterIcon from '../icons/TwitterIcon.vue';
import InstagramIcon from '../icons/InstagramIcon.vue';
</script>

<template>
  <div class="text-[#FFFFFF] px-4 sm:px-20 my-10 md:pr-20 md:pl-0">
    <h1 class="text-4xl">Info</h1>
    <p class="text-sm my-5 md:mt-8">
      It is a long fact that a reader will be distracted by the readable content
      of a page when looking at its layout. The point of using Lorem Ipsum is
      that it has a more-or-less normal distribution of letters, as opposed to
      using.
    </p>
    <h2>+98 905 119 8613</h2>
    <h3 class="my-3">motaharehjafi@gmail.com</h3>
    <div>
        <FacebookIcon class="mr-2"/>
        <twitter-icon class="mr-2"/>
        <InstagramIcon />
    </div>
  </div>
</template>
