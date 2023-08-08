<script setup lang="ts">
import MobileMenu from "../components/menus/MobileMenu.vue";
import Menu from "../components/menus/Menu.vue";
import NewItemSwipper from "../components/swipper/NewItemSwipper.vue";
</script>
<template>
  <div class="selection:bg-primary selection:text-[#FFFFFF]">
    <div>
      <router-link :to="{ path: '/' }">
        <MobileMenu />
        <Menu />
      </router-link>
    </div>
    <div>
      <new-item-swipper />
    </div>
  </div>
</template>
