
<script setup lang="ts">
import { ref } from "vue";
import CloseIcon from "../icons/CloseIcon.vue";
import SearchInput from "./SearchInput.vue";
import MobileMenu from '../menus/MobileMenu.vue';
let isOpen = ref(false)
function goBack(){
    isOpen.value = true
}
</script>
<template>
  <div v-if="!isOpen" class="text-white flex justify-around items-center my-4 bg-[#1a191f]">
    <search-input />
    <close-icon @click="goBack" />
  </div>
  <div v-else>
    <MobileMenu />
  </div>
</template>
