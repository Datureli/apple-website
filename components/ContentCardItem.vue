<template>
  <div class="text-left items-center text-black m-auto pl-5 mb-8 lg:w-[75%]">
    <img class="w-[78px] h-[78px] mb-4" :src="item.imageSrc" alt="" />
    <h3 class="text-2xl mb-3">{{ item.title }}</h3>
    <p class="pr-3 custom-text-title text-1xl mb-3">{{ item.description }}</p>
    <nuxt-link class="text-link hover:underline" :to="item.link">{{ item.linkTitle }}</nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps(['item']);
</script>
