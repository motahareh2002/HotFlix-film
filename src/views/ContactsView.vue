<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import HeaderView from '@/components/header/HeaderView.vue'
import FooterPage from '@/components/footer/FooterPage.vue';
import SectionTop from '@/components/sections/SectionTop.vue';
import ContactsAll from '@/components/contacts/ContactsAll.vue';

const name:Ref<string> = ref('Contacts')
</script>
<template>
  <div>
    <HeaderView />
    <SectionTop :Name="name" />
    <ContactsAll />
    <FooterPage />
  </div>
</template>
