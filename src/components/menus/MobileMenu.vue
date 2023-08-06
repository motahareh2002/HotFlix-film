<script setup lang="ts">
import { ref } from "vue";
import HotFlix from "../icons/HotFlix.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import CaretDownIcon from "../icons/caretDownIcon.vue";
import SignIn from "../icons/SignIn.vue";
import NavBar from "../icons/NavBar.vue";
import SearchBox from "../searchComp/SearchBox.vue";
import NavBarMenu from "./NavBarMenu.vue";
import CloseIcon from "../icons/CloseIcon.vue";
let menuNav = ref(true);
let isOpen = ref(false);
let showMenu = ref(false);
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
  <header class="block lg:hidden border-b border-[#222028]" >
    <div>
      <div
        v-if="!isOpen"
        class="text-[#FFFFFF] flex justify-between items-center py-5 px-4 sm:px-24"
      >
        <div class="w-1/2">
          <HotFlix class="w-24 sm:w-28" />
        </div>
        <div class="flex justify-between items-center w-1/2 sm:w-2/5">
          <SearchIcon @click="goTo" />
          <div class="flex items-center hover:hover">
            <span class="mr-1">En</span>
            <caret-down-icon />
          </div>
          <div>
            <Sign-In />
          </div>
          <div>
            <Nav-Bar @click="showNavMenu" v-if="menuNav" />
            <CloseIcon
              @click="hiddenNavMenu"
              v-if="!menuNav"
              class="h-7 mt-1 text-[#f9ab00]"
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
