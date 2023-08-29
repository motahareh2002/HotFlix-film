
<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import HeaderView from "@/components/header/HeaderView.vue";
import FooterPage from "@/components/footer/FooterPage.vue";
import SectionTop from "@/components/sections/SectionTop.vue";
import CatalogMovies from '@/components/catalog/CatalogMovies.vue';
import ExpectedPremiere from '@/components/expectedPremiere/ExpectedPremiere.vue';
import BestPlace from '@/components/bestPlace/BestPlace.vue';
import PricePlace from '@/components/bestPlace/PricePlace.vue';
let name: Ref<string> = ref("Catalog");
</script>
<template>
  <div>
    <HeaderView />
    <SectionTop :Name="name" />
    <CatalogMovies />
    <ExpectedPremiere />
    <BestPlace />
    <PricePlace  class=" sm:px-16" />
    <FooterPage />
  </div>
</template>
