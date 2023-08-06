<script setup lang="ts">
import MobileMenu from "../components/menus/MobileMenu.vue";
import Menu from "../components/menus/Menu.vue";
</script>
<template>
  <div class="selection:bg-[#f9ab00] selection:text-[#FFFFFF]">
    <router-link :to="{path: '/'}">
      <MobileMenu />
      <Menu />
    </router-link>
  </div>
</template>