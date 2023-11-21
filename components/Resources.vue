<template>
  <section class="mx-auto md:w-[95%] lg:w-[75%]">
    <h2 class="text-3xl mt-7 font-semibold text-center">Resources</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 ml-7 mr-3 mt-10">
      <ContentCardItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup>
const { items } = useResourcesData();
</script>

<style scoped>
.custom-text-title {
  font-size: 17px;
}
</style>
