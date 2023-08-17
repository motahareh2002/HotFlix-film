
<script setup lang="ts">
import HotFlix from "../icons/HotFlix.vue";
import ButtonOrange from "../btns/buttonOrange.vue";
function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
</script>
<template>
  <div class="text-white border-t border-[#222028] px-3 pt-10 pb-8 sm:px-20">
    <div class="md:hidden">
      <HotFlix />
      <ul class="flex text-sm my-8">
        <li class="hover:hover mr-5">About Us</li>
        <li class="hover:hover mr-5">Contacts</li>
        <li class="hover:hover mr-5">Privacy Policy</li>
      </ul>
      <div class="flex justify-between">
        <h1 class="text-xs text-[rgba(255,255,255,0.6)]">
          © HOTFLIX, 2019—2021
          <br />
          Create by
          <span class="text-primary">Motahareh Jafarian</span>
        </h1>
        <ButtonOrange class="px-3.5 py-1.5" @click="scrollToTop">
          <fa icon="arrow-up" />
        </ButtonOrange>
      </div>
    </div>
    <div class="hidden md:flex items-center justify-between">
      <div class="flex">
        <HotFlix />
        <h1 class="text-xs ml-5 lg:ml-8 text-[rgba(255,255,255,0.6)]">
          © HOTFLIX, 2019—2021
          <br />
          Create by
          <span class="text-primary">Motahareh Jafarian</span>
        </h1>
      </div>

      <div class="flex justify-between">
        <ul class="flex text-sm my-8">
          <li class="hover:hover mr-5">About Us</li>
          <li class="hover:hover mr-5">Contacts</li>
          <li class="hover:hover mr-5">Privacy Policy</li>
        </ul>
        <ButtonOrange class="h-10 px-3.5 mt-5" @click="scrollToTop">
          <fa icon="arrow-up" />
        </ButtonOrange>
      </div>
    </div>
  </div>
</template>
