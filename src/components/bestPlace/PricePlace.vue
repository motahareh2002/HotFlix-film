
<script setup lang="ts">
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
  clients: Array<client>;
}
const Buttons: button[] = [
  {
    id: 1,
    title: "Basic",
    price: "Free",
    status: "",
    color: "primary",
    clients: [
      { id: 1, icon: "check", client: " 7 days", colorTxt: "[#29b474]" },
      {
        id: 2,
        icon: "check",
        client: " 720p Resolution",
        colorTxt: "[#29b474]",
      },
      {
        id: 3,
        icon: "times",
        client: " Limited Availability",
        colorTxt: "[#eb5757]",
      },
      { id: 4, icon: "times", client: " Desktop Only", colorTxt: "[#eb5757]" },
      {
        id: 5,
        icon: "times",
        client: " Limited Support",
        colorTxt: "[#eb5757]",
      },
    ],
  },
  {
    id: 2,
    title: "Premium",
    price: "$34.99 ",
    status: "/ month",
    color: "[#29b474]",
    clients: [
      { id: 1, icon: "check", client: " 1 Month", colorTxt: "[#29b474]" },
      { id: 2, icon: "check", client: " Full HD", colorTxt: "[#29b474]" },
      {
        id: 3,
        icon: "check",
        client: " Lifetime Availability",
        colorTxt: "[#29b474]",
      },
      { id: 4, icon: "times", client: " TV & Desktop", colorTxt: "[#eb5757]" },
      { id: 5, icon: "times", client: " 24/7 Support", colorTxt: "[#eb5757]" },
    ],
  },
  {
    id: 3,
    title: "Cinematic",
    price: "$49.99 ",
    status: "/ month",
    color: "primary",
    clients: [
      { id: 1, icon: "check", client: " 2 Months", colorTxt: "[#29b474]" },
      { id: 2, icon: "check", client: " Ultra HD", colorTxt: "[#29b474]" },
      {
        id: 3,
        icon: "check",
        client: " Lifetime Availability",
        colorTxt: "[#29b474]",
      },
      { id: 4, icon: "check", client: " Any Device", colorTxt: "[#29b474]" },
      { id: 5, icon: "check", client: " 24/7 Support", colorTxt: "[#29b474]" },
    ],
  },
];
</script>

<template></template>
