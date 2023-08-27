<script setup lang="ts">
import ArrowRight from "../icons/ArrowRight.vue";

const props = defineProps<{
  Name ?: string
}>();
</script>
<template>
  <section
    class="text-[#FFFFFF] bg-[url('../assets/img/section.jpg')] bg-[length:100%_100%] h-auto md:bg-[length:100%_100%] bg-no-repeat px-5 py-14
    sm:px-20 md:flex items-center justify-between"
  >
    <h1 class="text-3xl">{{Name}}</h1>
    <div class="flex items-center mt-5">
      <router-link :to="{ path: '/' }">
        <button class="text-[rgba(255,255,255,0.7)]">Home</button>
      </router-link>
      <ArrowRight class="mx-2 text-xs"/>
      <span>{{Name}}</span>
    </div>
  </section>
</template>
