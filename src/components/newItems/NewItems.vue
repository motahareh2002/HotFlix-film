<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { Ref } from "vue";
import ListIcon from "../icons/ListIcon.vue";
import NewReleases from "./NewReleases.vue";
import CloseIcon from "../icons/CloseIcon.vue";
const isOpen: Ref<boolean> = ref(false);
const x: Ref<string> = ref("RELEASES");
const router = useRouter();
function subMenuOpen() {
  isOpen.value = !isOpen.value;
}
</script>



<template>
  <div class="w-full px-3 sm:px-20">
    <div class="text-[#FFFFFF] py-5 md:pb-3 border-b border-[#222028]">
      <h1 class="text-3xl pb-2">New Items</h1>
      <button class="text-xs md:hidden" @click="subMenuOpen">
        <span>{{ x }}</span>
        <ListIcon v-if="!isOpen" class="ml-2" />
        <CloseIcon v-else class="ml-2" />
      </button>
      <ul class="md:flex text-xs mt-2 hidden">
        <li class="mr-5 hover:hover cursor-pointer border-b-2 border-primary pb-3">NEW RELEASES</li>
        <li class="mr-5 hover:hover cursor-pointer">MOVIES</li>
        <li class="mr-5 hover:hover cursor-pointer">TV SERIES</li>
        <li class="mr-5 hover:hover cursor-pointer">CARTOONS</li>
      </ul>
    </div>
    <div class="relative">
      <div
        class="bg-[#222028] rounded-lg text-[#FFFFFF] text-xs w-[220px] px-4 py-5 -mt-3 z-50 md:hidden"
        v-if="isOpen"
      >
        <ul>
          <li
            class="pb-3 cursor-pointer"
            @click="
              () => {
                x = 'RELEASES';
                isOpen = false;
              }
            "
          >
            NEW RELEASES
          </li>
          <li
            class="pb-3 cursor-pointer"
            @click="
              () => {
                x = 'MOVIES';
                isOpen = false;
              }
            "
          >
            MOVIES
          </li>
          <li
            class="pb-3 cursor-pointer"
            @click="
              () => {
                x = 'SERIES';
                isOpen = false;
              }
            "
          >
            TV SERIES
          </li>
          <li
            class="cursor-pointer"
            @click="
              () => {
                x = 'CARTOONS';
                isOpen = false;
              }
            "
          >
            CARTOONS
          </li>
        </ul>
      </div>
      <new-releases/>
    </div>
  </div>
</template>
