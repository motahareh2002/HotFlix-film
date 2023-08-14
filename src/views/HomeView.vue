<script setup lang="ts">
import MobileMenu from "../components/menus/MobileMenu.vue";
import Menu from "../components/menus/Menu.vue";
import NewItemSwipper from "../components/swipper/NewItemSwipper.vue";
import NewItems from "../components/newItems/NewItems.vue";
import ExpectedPremiere from '../components/expectedPremiere/ExpectedPremiere.vue';
import BestPlace from "../components/bestPlace/BestPlace.vue";
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
    <div>
      <new-items />
    </div>
    <div>
        <ExpectedPremiere />
    </div>
    <div>
      <best-place />
    </div>
  </div>
</template>
