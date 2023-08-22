<script setup lang="ts">
import buttonOrange from "@/components/btns/buttonOrange.vue";
import { useRouter } from "vue-router";
const router = useRouter()
function goToHome(){
  router.push('/')
}
</script>



<template >
  <div
    class="bg-[#1a191f] shadow-xl text-center rounded-md border border-[#222028] w-11/12 sm:w-[400px] mx-auto py-14 px-4 mt-5 text-[#FFFFFF] sm:px-16"
  >
    <h1 class="text-9xl text-primary mb-5">404</h1>
    <p>
      The page you are looking for not available!
    </p>
    <buttonOrange class="w-full mt-10 py-3" @click="goToHome">GO BACK</buttonOrange>
  </div>
</template>

