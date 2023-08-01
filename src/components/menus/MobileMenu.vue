<script setup lang="ts">
    import HotFlix from "../icons/HotFlix.vue";
    import SearchIcon from "../icons/SearchIcon.vue";
    import CaretDownIcon from "../icons/caretDownIcon.vue";
    import SignIn from "../icons/SignIn.vue";
    import NavBar from "../icons/NavBar.vue";
</script>

<template>
  <div class="text-[#FFFFFF] flex justify-between items-center m-3 ">
    <div class="w-1/2">
      <HotFlix class="w-24" />
    </div>
    <div class="flex justify-between items-center w-1/2">
      <SearchIcon />
      <div class="flex items-center  hover:hover">
        <span class="mr-1">En</span>
        <caret-down-icon />
      </div>
      <Sign-In />
      <Nav-Bar />
    </div>
  </div>
</template>
