<script setup lang="ts">
import HotFlix from "../icons/HotFlix.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import CaretDownIcon from "../icons/caretDownIcon.vue";
import SignIn from "../icons/SignIn.vue";
import NavBar from "../icons/NavBar.vue";
import SearchBox from "../searchComp/SearchBox.vue";
import { ref } from "vue";
import NavBarMenu from "./NavBarMenu.vue";
let isOpen = ref(false);
let showMenu = ref(false);
function goTo() {
  isOpen.value = true;
}
function showNavMenu() {
  showMenu.value = true;
}
</script>

<template>
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
        <caret-down-icon @click="showNavMenu" />
      </div>
      <div>
        <Sign-In />
      </div>
      <Nav-Bar />
    </div>
  </div>
  <div v-else>
    <SearchBox />
  </div>
  <!-- <NavBarMenu /> -->
</template>
