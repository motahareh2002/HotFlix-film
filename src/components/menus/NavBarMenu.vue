
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
    class="text-[#FFFFFF] bg-[#1a191f] w-[300px] absolute right-0 border-t border-primary z-50 h-full"
  >
    <ul
      class="flex flex-col justify-between items-start w-2/5 pl-5 text-xs mt-5"
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
        <li class="font-bold text-xl">...</li>
      </button>
    </ul>
    <MoreMenu v-if="showMenu" class="text-xs w-[60%] h-[170px] ml-5" />
  </div>
</template>

