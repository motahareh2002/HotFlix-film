
<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import HeaderView from "@/components/header/HeaderView.vue";
import FooterPage from "@/components/footer/FooterPage.vue";
import SectionTop from "@/components/sections/SectionTop.vue";
import PricePlace from '@/components/bestPlace/PricePlace.vue';
import OurFeatures from '@/components/features/OurFeatures.vue'
let name: Ref<string> = ref("Pricing plan");
</script>
<template>
  <div>
    <HeaderView />
    <SectionTop :Name="name" />
    <PricePlace  class="mt-20"/>
    <our-features />
    <FooterPage />
  </div>
</template>
