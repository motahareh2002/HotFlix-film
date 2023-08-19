


<script setup lang="ts">
import ButtonOrange from "@/components/btns/ButtonOrange.vue";
</script>

<template>
  <div class="text-[#FFFFFF] px-3 sm:px-20 md:pl-20 md:pr-10">
    <h5 class="text-3xl my-10">Contact Form</h5>
    <form class="border border-[#222028] rounded-lg mx-auto p-5">
      <div class="lg:flex items-center justify-center">
        <input
          type="text"
          placeholder="Name"
          class="mb-3 w-full p-2 rounded-md form-input md:my-3 md:mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          class="my-3 w-full p-2 rounded-md form-input"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        class="my-3 w-full p-2 rounded-md form-input"
      />
      <textarea
        placeholder="Type your message..."
        class="mt-3 w-full p-2 rounded-md form-input resize-none h-32"
      ></textarea>
      <ButtonOrange class="px-10 py-2 mt-5">SEND</ButtonOrange>
    </form>
  </div>
</template>