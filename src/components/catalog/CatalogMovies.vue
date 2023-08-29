
<script setup lang="ts">
import NewReleases from "@/components/newItems/NewReleases.vue";
import MoviesItem from '@/components/newItems/MoviesItem.vue'
import buttonOrange from "../btns/buttonOrange.vue";
import { ref } from "vue";
import type {Ref} from "vue"
const showMore:Ref<boolean> = ref(false)
function ShowMoreMovies(){
    showMore.value = true
}
</script>
<template>
  <div class="border-b border-[#222028] mx-1 sm:mx-14">
    <NewReleases />
    <movies-item v-if="showMore" />
    <div class="flex justify-center mb-10" @click="ShowMoreMovies" :class="{'hidden' : showMore}">
      <button-orange class="px-6 py-2 text-[#FFFFFF]"> LOAD MORE </button-orange>
    </div>
  </div>
</template>
