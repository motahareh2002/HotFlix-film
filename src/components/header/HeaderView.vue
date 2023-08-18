<script setup>
import MobileMenu from '../menus/MobileMenu.vue'
import Menu from '../menus/Menu.vue'
</script>


<template>
  <div>
    <router-link :to="{ path: '/' }">
      <MobileMenu />
      <Menu />
    </router-link>
  </div>
</template>