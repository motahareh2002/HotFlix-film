

<script setup lang="ts">
import { defineProps } from "vue";
interface featuresType {
  id: number;
  icon: string;
  title: string;
  text: string;
}
defineProps({
  icon: {
    type: String,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>

<template>
  <div class="flex items-start my-8 md:w-11/12">
    <fa :icon="icon" class="text-primary text-3xl" />
    <div class="flex flex-col ml-6">
      <span class="font-bold mb-3">{{ title}}</span>
      <p class="text-sm">
        {{ text}}
      </p>
    </div>
  </div>
</template>
