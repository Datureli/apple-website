<template>
  <router-link :to="link" class="no-underline text-link hover:underline">
    <div :class="containerClasses">
      <img :src="imageSrc" :alt="imageAlt" class="h-12 w-12 mb-2" />
      <span :class="[textClasses, isOdd ? 'md:w-[95%] lg:w-auto' : '']">{{ text + '>' }}</span>
    </div>
  </router-link>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["imageSrc", "imageAlt", "text", "containerClasses", "textClasses", "link"]);

const isOdd = ref(false);

watchEffect(() => {
  isOdd.value = props.index % 2 === 1;
});
</script>
