
<script setup lang="ts">
interface contentType {
  id: number;
  title: string;
  price: string;
  icon: string;
}
const contents: contentType[] = [
  { id: 1, title: "Premium plan", price: "$34.99 / month", icon: "credit-card-alt" },
  { id: 2, title: "Films watched", price: "1 678", icon: "film" },
  { id: 3, title: "Your comments", price: "2 573", icon: "comment" },
  { id: 4, title: "Your reviews", price: "1 021", icon: "star-half-o" },
];
</script>


<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4">
        <div v-for="content in contents" :key="content.id" class="bg-[#222028] rounded-lg my-4 p-5">
            <h2 class="text-xl">{{ content.title }}</h2>
            <div class="flex justify-between mt-2">
                <span>{{ content.price }}</span>
                <fa v-if="content.id === 4"  icon="fa-solid fa-star-half" class="text-primary text-2xl"/>
                <fa :icon="content.icon" class="text-primary text-2xl" v-else/>
            </div>
        </div>  
    </div>
</template>