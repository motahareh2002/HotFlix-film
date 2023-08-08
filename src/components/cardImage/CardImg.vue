
<script setup lang="ts">
defineProps<{
  details?: string;
  category?: string;
  rate?: number;
  img?: string;
}>();
</script>


<template>
  <div>
    <div :style="{ background: `url(${img})` }" class="rounded-lg relative">
      <div
        id="rate"
        class="absolute top-1 left-1 rounded-full border border-green-700"
      >
        <span>{{ rate }}</span>
      </div>
    </div>
    <div id="details" class="text-[#FFFFFF] hover:hover">
      <h1>{{ details }}</h1>
    </div>
    <div id="category" class="text-primary">
      <h3>{{ category }}</h3>
    </div>
  </div>
</template>
