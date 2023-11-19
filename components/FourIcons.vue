<template>
  <router-link
    :to="link"
    class="no-underline text-link hover:underline mt-5"
  >
    <div :class="[containerClasses, 'flex flex-col items-center']">
      <img :src="imageSrc" :alt="imageAlt" class="w-[60px] h-[60px] mb-2" />

      <span :class="[textClasses, isOdd ? 'md:w-[95%] lg:w-auto' : '']">{{
        text
      }}</span>
    </div>
  </router-link>
</template>

<script setup>
import { ref, watchEffect } from "vue";

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
