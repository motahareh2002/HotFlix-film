
<script setup lang="ts">
import { ref } from "vue";
import MoreMenu from "./MoreMenu.vue";
let showMenu = ref(false);
function showMoreMenu() {
  showMenu.value = !showMenu.value;
}
</script>


<template>
  <div
    class="text-[#FFFFFF] bg-[#1a191f] w-[285px] md:w-[340px] absolute left-0 border-t border-primary z-50 h-[10000px]"
  >
    <ul
      class="flex flex-col justify-between items-start w-2/5 pl-5 text-sm mt-5 z-50"
    >
      <router-link :to="{ path: '/' }">
        <button class="hover:hover py-2">
          <li>HOME</li>
        </button>
      </router-link>
      <router-link :to="{ path: '/catalog' }">
        <button class="hover:hover py-2">
          <li>CATALOG</li>
        </button>
      </router-link>
      <router-link :to="{path : '/pricingPlan'}">
        <button class="hover:hover py-2">
          <li>PRICING PLAN</li>
        </button>
      </router-link>
      <button class="hover:hover py-2" @click="showMoreMenu">
        <li class="text-sm">see All</li>
      </button>
    </ul>
    <MoreMenu v-if="showMenu" class="text-xs w-[60%] h-[170px] ml-5" />
  </div>
</template>

