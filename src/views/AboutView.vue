


<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import HeaderView from "@/components/header/HeaderView.vue";
import FooterPage from "@/components/footer/FooterPage.vue";
import SectionTop from "@/components/sections/SectionTop.vue";
import OurPartners from "@/components/partners/OurPartners.vue";
import BestPlace from '@/components/bestPlace/BestPlace.vue';
import FeachersAll from '@/components/features/FeachersAll.vue';
import HowWorks from "@/components/howWork/HowWorks.vue";
const name: Ref<string> = ref("About Us");
</script>




<template>
  <div>
    <HeaderView />
    <SectionTop :Name="name" />
    <BestPlace />
    <FeachersAll class=" px-4 sm:px-20" />
    <HowWorks />
    <OurPartners />
    <FooterPage />
  </div>
</template>


