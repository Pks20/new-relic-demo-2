<template>
  <div>
    page 1
    <nuxt-link :to="randomRoute" @click.native="generateNewRoute">
      Go to random route
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
const randomRoute = ref(generateRandomPath());

function generateRandomPath() {
  // Generate 9-digit random number path
  return `/${Math.random().toString().slice(2, 11)}`;
}
function generateNewRoute() {
  randomRoute.value = generateRandomPath();
}
</script>
