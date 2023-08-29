<script setup lang="ts">
import NewItemSwipper from "@/components/swipper/NewItemSwipper.vue";
import NewItems from "@/components/newItems/NewItems.vue";
import ExpectedPremiere from "@/components/expectedPremiere/ExpectedPremiere.vue";
import BestPlace from "@/components/bestPlace/BestPlace.vue";
import PricePlace from "@/components/bestPlace/PricePlace.vue";
import FooterPage from "@/components/footer/FooterPage.vue"
import HeaderView from '@/components/header/HeaderView.vue'
</script>
<template>
  <div>
    <header-view />
    <new-item-swipper />
    <new-items />
    <ExpectedPremiere />
    <best-place />
    <price-place class=" sm:px-16" />
    <FooterPage />
  </div>
</template>
