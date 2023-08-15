
<script setup lang="ts">
import ButtonGreen from "../btns/ButtonGreen.vue";
import type ButtonPriceVue from "../btns/ButtonPrice.vue";
import buttonOrange from "../btns/buttonOrange.vue";
interface client {
  id: number;
  icon: string;
  client: string;
  colorTxt: string;
}
interface button {
  id: number;
  title: string;
  price: string;
  status: string;
  color: string;
  show: boolean;
  clients: Array<client>;
}
const buttons: button[] = [
  {
    id: 1,
    title: "Basic",
    price: "Free",
    status: "",
    color: "#f9ab00",
    show: true,
    clients: [
      { id: 1, icon: "check", client: " 7 days", colorTxt: "#29b474" },
      {
        id: 2,
        icon: "check",
        client: " 720p Resolution",
        colorTxt: "#29b474",
      },
      {
        id: 3,
        icon: "times",
        client: " Limited Availability",
        colorTxt: "#eb5757",
      },
      { id: 4, icon: "times", client: " Desktop Only", colorTxt: "#eb5757" },
      {
        id: 5,
        icon: "times",
        client: " Limited Support",
        colorTxt: "#eb5757",
      },
    ],
  },
  {
    id: 2,
    title: "Premium",
    price: "$34.99 ",
    status: "/ month",
    color: "#29b474",
    show: false,
    clients: [
      { id: 1, icon: "check", client: " 1 Month", colorTxt: "#29b474" },
      { id: 2, icon: "check", client: " Full HD", colorTxt: "#29b474" },
      {
        id: 3,
        icon: "check",
        client: " Lifetime Availability",
        colorTxt: "#29b474",
      },
      { id: 4, icon: "times", client: " TV & Desktop", colorTxt: "#eb5757" },
      { id: 5, icon: "times", client: " 24/7 Support", colorTxt: "#eb5757" },
    ],
  },
  {
    id: 3,
    title: "Cinematic",
    price: "$49.99 ",
    status: "/ month",
    color: "#f9ab00",
    show: true,
    clients: [
      { id: 1, icon: "check", client: " 2 Months", colorTxt: "#29b474" },
      { id: 2, icon: "check", client: " Ultra HD", colorTxt: "#29b474" },
      {
        id: 3,
        icon: "check",
        client: " Lifetime Availability",
        colorTxt: "#29b474",
      },
      { id: 4, icon: "check", client: " Any Device", colorTxt: "#29b474" },
      { id: 5, icon: "check", client: " 24/7 Support", colorTxt: "#29b474" },
    ],
  },
];
</script>

<template>
  <!-- <div v-for="btn in buttons" :key="btn.id">
    <ButtonPriceVue
      :title="btn.title"
      :price="btn.price"
      :status="btn.status"
      :color="btn.color"
      :clients="btn.clients"
      :client="btn.clients"
    />
  </div> -->
  <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 px-4 sm:px-20">
    <div
      v-for="button in buttons"
      :key="button.id"
      class="bg-[#222028] rounded-lg w-[95%] mx-auto px-5 py-8 text-[#FFFFFF] mb-8"
      
    >
      <div class="flex justify-between text-2xl mb-8">
        <span>{{ button.title }}</span>
        <span :style="{ color: button.color }">
          {{ button.price }}
          <span class="text-sm">{{ button.status }}</span></span
        >
      </div>
      <ul>
        <li
          v-for="btn in button.clients"
          :key="btn.id"
          class="mb-5 border-b border-[#1a191f] pb-4 text-sm"
        >
          <fa
            :icon="`${btn.icon}`"
            class="mr-2"
            :style="{ color: btn.colorTxt }"
          />
          <span>{{ btn.client }}</span>
        </li>
      </ul>
      <buttonOrange v-if="button.show" class="w-full p-3">
        Choose Plan
      </buttonOrange>
      <ButtonGreen v-if="!button.show" class="w-full p-3"
        >Choose Plan</ButtonGreen
      >
    </div>
  </div>
</template>