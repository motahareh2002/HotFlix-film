<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import FooterPage from '@/components/footer/FooterPage.vue';
import HeaderView from '@/components/header/HeaderView.vue';
import OurPartners from '@/components/partners/OurPartners.vue';
import SectionTop from '@/components/sections/SectionTop.vue';
import ProfileHeader from '@/components/profile/ProfileHeader.vue';

const name:Ref<string> = ref('My Profile')
</script>



<template>
  <div>
    <HeaderView />
    <SectionTop :Name="name"/>
    <ProfileHeader/>
    <OurPartners />
    <FooterPage />
  </div>
</template>

