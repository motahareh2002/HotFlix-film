<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { Ref } from "vue";
import ListIcon from "../icons/ListIcon.vue";
import NewReleases from "./NewReleases.vue";
import CloseIcon from "../icons/CloseIcon.vue";
const isOpen: Ref<boolean> = ref(false);
const x: Ref<string> = ref("RELEASES");
const show: Ref<boolean> = ref(false);
function subMenuOpen() {
  isOpen.value = !isOpen.value;
}
function clickHandler() {
  show.value = true;
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
        <router-link active-class="active" :to="{ path: 'newRelease' }">
          <button @click="clickHandler">
            <li class="mr-5 text-center w-24 hover:hover cursor-pointer pb-3" :class="{'active' :!show }">
              NEW RELEASES
            </li>
          </button>
        </router-link>
        <router-link active-class="active" :to="{ path: 'movie' }">
          <button  @click="clickHandler">
            <li class="mr-5 text-center w-24 hover:hover cursor-pointer">
              MOVIES
            </li>
          </button>
        </router-link>
        <router-link active-class="active" :to="{ path: 'tvSeries' }">
          <button  @click="clickHandler">
            <li class="mr-5 text-center w-24 hover:hover cursor-pointer">
              TV SERIES
            </li>
          </button>
        </router-link>
        <router-link active-class="active" :to="{ path: 'carton' }">
          <button  @click="clickHandler">
            <li class="mr-5 text-center w-24 hover:hover cursor-pointer">
              CARTOONS
            </li>
          </button>
        </router-link>
      </ul>
    </div>
    <div class="relative">
      <div
        class="bg-[#222028] rounded-lg text-[#FFFFFF] text-xs w-[220px] px-4 py-5 -mt-3 z-50 md:hidden"
        v-if="isOpen"
      >
        <ul>
          <router-link :to="{ path: 'newRelease' }">
            <li
              class="pb-3 cursor-pointer"
              @click="
                () => {
                  x = 'NEW RELEASES';
                  isOpen = false;
                  show = true
                }
              "
            >
              NEW RELEASES
            </li>
          </router-link>
          <router-link :to="{ path: 'movie' }">
            <li
              class="pb-3 cursor-pointer"
              @click="
                () => {
                  x = 'MOVIES';
                  isOpen = false;
                  show = true
                }
              "
            >
              MOVIES
            </li>
          </router-link>
          <router-link :to="{ path: 'tvSeries' }">
            <li
              class="pb-3 cursor-pointer"
              @click="
                () => {
                  x = 'TV SERIES';
                  isOpen = false;
                  show = true
                }
              "
            >
              TV SERIES
            </li>
          </router-link>
          <router-link :to="{ path: 'carton' }">
            <li
              class="cursor-pointer"
              @click="
                () => {
                  x = 'CARTOONS';
                  isOpen = false;
                  show = true
                }
              "
            >
              CARTOONS
            </li>
          </router-link>
        </ul>
      </div>

      <router-view v-if="show" />
      <component :is="NewReleases" v-else />
    </div>
  </div>
</template>


<style scoped>
.active {
  border-bottom: 2px solid #f9ab00;
}
</style>