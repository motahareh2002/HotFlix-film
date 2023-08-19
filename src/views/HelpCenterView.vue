<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import HeaderView from '@/components/header/HeaderView.vue'
import FooterPage from '@/components/footer/FooterPage.vue';
import SectionTop from '@/components/sections/SectionTop.vue';
import HelpCenter from '../components/helpCenter/HelpCenter.vue';
const name:Ref<string> = ref('FAQ')
</script>
<template>
  <div>
    <HeaderView />
    <SectionTop :Name="name" />
    <HelpCenter />
    <FooterPage />
  </div>
</template>
