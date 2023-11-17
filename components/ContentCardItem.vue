<template>
  <div class="w-[280px] h-auto text-left items-center pb-5 text-black m-auto pl-5 mb-8 lg:w-[75%]" style="border: 2px solid red;">
    <img class="w-[78px] h-[78px] mb-auto" :src="item.imageSrc" alt="" />
    <h3 class="text-2xl mb-3">{{ item.title }}</h3>
    <p class="pr-3 custom-text-title text-1xl mb-3">{{ item.description }}</p>
    <nuxt-link class="text-link hover:underline" :to="item.link">{{ item.linkTitle }}</nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps(['item']);
</script>
