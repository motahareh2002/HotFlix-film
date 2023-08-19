

<script setup lang="ts">
import ContactsForm from "./ContactsForm.vue";
import ContactsInfo from "./ContactsInfo.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row md:mb-10">
    <ContactsForm class="lg:w-full" />
    <ContactsInfo class="md:w-8/12 lg:w-7/12" />
  </div>
</template>
