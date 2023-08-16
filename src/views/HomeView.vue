<script setup lang="ts">
import MobileMenu from "@/components/menus/MobileMenu.vue";
import Menu from "@/components/menus/Menu.vue";
import NewItemSwipper from "@/components/swipper/NewItemSwipper.vue";
import NewItems from "@/components/newItems/NewItems.vue";
import ExpectedPremiere from "@/components/expectedPremiere/ExpectedPremiere.vue";
import BestPlace from "@/components/bestPlace/BestPlace.vue";
import PricePlace from "@/components/bestPlace/PricePlace.vue";
import FooterPage from "@/components/footer/FooterPage.vue"
</script>
<template>
  <div class="selection:bg-primary selection:text-[#FFFFFF]">
    <div>
      <router-link :to="{ path: '/' }">
        <MobileMenu />
        <Menu />
      </router-link>
    </div>
    <new-item-swipper />
    <new-items />
    <ExpectedPremiere />
    <best-place />
    <price-place />
    <FooterPage />
  </div>
</template>
