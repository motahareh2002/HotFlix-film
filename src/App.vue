<script setup lang="ts">
</script>

<template>
    <component :is="$route.meta.layout">
    <router-view />
    </component>
</template>

