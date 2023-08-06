<script setup lang="ts">
import HotFlix from "../icons/HotFlix.vue";
import CaretDownIcon from "../icons/caretDownIcon.vue";
import SignIn from "../icons/SignIn.vue";
import SearchInput from "../searchComp/SearchInput.vue";
import MoreMenu from "./MoreMenu.vue";
import { ref } from "vue";
let show = ref(false);
function showMenu() {
  show.value = !show.value;
}
</script>



<template>
  <header
    class="hidden lg:block px-24 py-4 border-b border-[#222028] text-[#FFFFFF]"
  >
    <div class="flex justify-between items-center">
      <div class="w-2/12">
        <HotFlix />
      </div>
      <div class="flex justify-between w-9/12">
        <ul class="flex justify-between items-center w-2/5 text-xs">
          <button class="hover:hover">
            <li>HOME</li>
          </button>
          <button class="hover:hover">
            <li>CATALOG</li>
          </button>
          <button class="hover:hover">
            <li>PRICING PLAN</li>
          </button>
          <button class="-mt-2 hover:hover" @click="showMenu">
            <li class="font-bold text-xl">...</li>
          </button>
        </ul>
        <div class="flex justify-between items-center w-3/6">
          <SearchInput class="text-sm" />
          <div class="flex items-center hover:hover">
            <span class="mr-1">En</span>
            <caret-down-icon />
          </div>
          <div>
            <router-link :to="{ path: '/signIn' }">
              <Sign-In />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <MoreMenu v-if="show" class="w-[13%] absolute left-1/2 h-[250px]" />
  </header>

</template>
    
