<script setup lang="ts">
import MobileMenu from "../components/menus/MobileMenu.vue";
import Menu from "../components/menus/Menu.vue";
</script>
<template>
  <div class="selection:bg-[#f9ab00] selection:text-[#FFFFFF]">
    <header id="menu">
      <MobileMenu class="block lg:hidden border-b border-[#222028]" />
      <Menu class="hidden lg:block px-24 py-4 border-b border-[#222028]" />
    </header>
  </div>
</template>