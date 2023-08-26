<script setup lang="ts">
import HotFlix from "../icons/HotFlix.vue";
import CaretDownIcon from "../icons/caretDownIcon.vue";
import SignIn from "../icons/SignIn.vue";
import SearchInput from "../searchComp/SearchInput.vue";
import MoreMenu from "./MoreMenu.vue";
import { ref, onMounted  } from "vue";
import type { Ref } from "vue";
const show: Ref<boolean> = ref(false);
const scroll: Ref<boolean> = ref(false);
function showMenu() {
  show.value = !show.value;
}
onMounted(() => {
  window.addEventListener('scroll',x)
});
function x(){
    if(window.scrollY > 1) scroll.value = true
    else scroll.value = false
}
</script>



<template>
  <header
    :class="{ 'header': scroll }"
    class="hidden lg:block px-24 py-4 border-b border-[#222028] text-[#FFFFFF]"
  >
    <div class="flex justify-between items-center">
      <div class="w-2/12">
        <router-link :to="{path :'/'}">
          <HotFlix />
        </router-link>
      </div>
      <div class="flex justify-between w-9/12">
        <ul class="flex justify-between items-center w-2/5 text-xs">
          <router-link :to="{ path: '/' }">
            <button class="hover:hover">
              <li>HOME</li>
            </button>
          </router-link>
          <router-link :to="{ path: '/catalog' }">
            <button class="hover:hover">
              <li>CATALOG</li>
            </button>
          </router-link>
          <router-link :to="{path : '/pricingPlan'}">
            <button class="hover:hover">
              <li>PRICING PLAN</li>
            </button>
          </router-link>
          <button class="-mt-2 hover:hover" @click="showMenu">
            <li class="font-bold text-xl">...</li>
          </button>
        </ul>
        <div class="flex justify-end items-center w-3/6">
          <SearchInput class="text-sm mr-10" />
          <!-- <div class="flex items-center hover:hover">
            <span class="mr-1">En</span>
            <caret-down-icon />
          </div> -->
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
    
<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 200;
  background-color: #1a191f;
}
</style>