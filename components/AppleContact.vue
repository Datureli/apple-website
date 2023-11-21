<template>
  <section class="m-auto pb-[100px] lg:w-[75%] ml-5 lg:ml-auto">
    <div
      class="m-auto grid grid-cols-1 mr-3 md:grid-cols-2 lg:grid-cols-3 mt-10 space-x-6"
    >
      <ContentCardItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
    <h2 class="text-1xl mt-7 text-left md-text-0 lg:pr-7 custom-title">
      * Personal Voice is available in English.
    </h2>
  </section>
</template>

<script setup>
const { items } = useAppleContactData();
</script>

<style scoped>
.custom-text-title {
  font-size: 17px;
}
.custom-title {
  font-size: 12px;
}
</style>
