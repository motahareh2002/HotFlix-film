<script setup lang="ts">
import SearchIcon from "../icons/SearchIcon.vue";
</script>
<template>
  <form
    action=""
    class="bg-[#222028] flex items-center px-3 rounded-md
    focus-within:border-[#f9ab00] hover:hover border border-[#222028]
    lg:w-3/6"
  >
    <input
      type="text"
      placeholder="Search..."
      class="focus:outline-none rounded-md p-2 bg-[#222028] lg:w-full"
    />
    <SearchIcon class="ml-2" />
  </form>
</template>