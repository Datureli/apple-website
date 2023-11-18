<template>
  <router-link :to="link" class="no-underline text-link hover:underline">
    <div :class="containerClasses">
      <img :src="imageSrc" :alt="imageAlt" class="w-[60px] h-[60px] mb-2" />
      <div class="flex items-center justify-center">
        <span
          class="whitespace-normal mt-1"
          :class="[textClasses, isOdd ? ' md:w-[95%] lg:w-auto' : '']"
          >{{ text }}</span
        >
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps([
  "imageSrc",
  "imageAlt",
  "text",
  "containerClasses",
  "textClasses",
  "link",
]);

const isOdd = ref(false);

watchEffect(() => {
  isOdd.value = props.index % 2 === 1;
});
</script>
