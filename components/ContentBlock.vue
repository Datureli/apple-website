<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 mt-10 pt-10 pl-0 pr-0 w-[85%] lg:w-[75%]  m-auto"
  >
    <ContentCardItem v-for="(item, index) in items" :key="index" :item="item" />
  </section>
</template>

<script setup>
const { items } = useContentBlock();
</script>
