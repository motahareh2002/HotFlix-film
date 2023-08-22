<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import FooterPage from '@/components/footer/FooterPage.vue';
import HeaderView from '@/components/header/HeaderView.vue';
import SectionTop from '@/components/sections/SectionTop.vue';
import PrivacyPolicyText from '@/components/privacy/PrivacyPolicyText.vue'
const name:Ref<string> = ref('Privacy policy')
</script>



<template>
  <div>
    <HeaderView />
    <SectionTop :Name="name"/>
    <PrivacyPolicyText />
    <FooterPage />
  </div>
</template>

