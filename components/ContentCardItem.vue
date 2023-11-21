<template>
  <div class="pb-5 mb-8 lg:w-[87%]">
    <img class="w-[78px] h-[78px] mb-4" :src="item.imageSrc" alt="Card image" />
    <h3 class="custom-text-title mb-3 font-semibold">{{ item.title }}</h3>
    <p class="pr-3 text-1xl mb-3">{{ item.description }}</p>
    <nuxt-link class="text-link hover:underline" :to="item.link">{{
      item.linkTitle
    }}</nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
</script>

<style scoped>
.custom-text-title {
  font-size: 21px;
}
</style>
