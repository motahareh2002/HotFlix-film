<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import HotFlix from "../icons/HotFlix.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import CaretDownIcon from "../icons/caretDownIcon.vue";
import SignIn from "../icons/SignIn.vue";
import NavBar from "../icons/NavBar.vue";
import SearchBox from "../searchComp/SearchBox.vue";
import NavBarMenu from "./NavBarMenu.vue";
import CloseIcon from "../icons/CloseIcon.vue";
let menuNav: Ref<boolean> = ref(true);
let isOpen: Ref<boolean> = ref(false);
let showMenu: Ref<boolean> = ref(false);
const scroll: Ref<boolean> = ref(false);
onMounted(() => {
  window.addEventListener("scroll", x);
});

function x() {
  if (window.scrollY > 1) scroll.value = true;
  else scroll.value = false;
}
function goTo() {
  isOpen.value = true;
}
function showNavMenu() {
  showMenu.value = true;
  menuNav.value = false;
}
function hiddenNavMenu() {
  showMenu.value = false;
  menuNav.value = true;
}
</script>

<template>
  <header
    class="block lg:hidden border-b border-[#222028] z-50"
    :class="{ header: scroll }"
  >
    <div class="">
      <div
        v-if="!isOpen"
        class="text-[#FFFFFF] flex justify-between items-center py-5 px-4 sm:px-24"
      >
        <div class="w-1/2">
          <router-link :to="{path: '/'}">
            <HotFlix class="w-24 sm:w-28" />
          </router-link>
        </div>
        <div class="flex justify-between items-center w-1/2 sm:w-2/5">
          <SearchIcon @click="goTo" />
          <!-- <div class="flex items-center hover:hover">
            <span class="mr-1">En</span>
            <caret-down-icon />
          </div> -->
          <div>
            <router-link :to="{ path: '/signIn' }">
              <Sign-In />
            </router-link>
          </div>
          <div>
            <Nav-Bar @click="showNavMenu" v-if="menuNav" />
            <CloseIcon
              @click="hiddenNavMenu"
              v-if="!menuNav"
              class="h-7 mt-1 text-primary"
            />
          </div>
        </div>
      </div>
      <div v-else>
        <SearchBox />
      </div>
    </div>
    <NavBarMenu v-if="showMenu" />
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