<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl md:text-4xl font-sans font-sf-pro-display text-little-black text-center font-medium mb-4 mt-5 p-5">
      Accessibility Support
    </h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <router-link v-for="(icon, index) in icons" :key="index" :to="icon.link" class="no-underline text-link hover:underline">
        <div :class="icon.containerClasses">
          <img :src="icon.imageSrc" :alt="icon.imageAlt" class="h-12 w-12 mb-2" />
          <span :class="[icon.textClasses, index % 2 === 1 ? 'md:w-[95%] lg:w-auto' : '']">{{ icon.text + '>' }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const icons = [
  {
    imageSrc: "/images/icon1.svg",
    imageAlt: "Icon 1",
    text: "Mac shortcuts",
    containerClasses: "flex flex-col items-center ml-3",
    textClasses: "",
    link: "/path/to/icon1",
  },
  {
    imageSrc: "/images/icon2.svg",
    imageAlt: "Icon 2",
    text: "Magnifier on iPhone",
    containerClasses: "flex flex-col items-center mr-2 pr-3 mb-4",
    textClasses: "pr-2 text-center",
    link: "/path/to/icon2",
  },
  {
    imageSrc: "/images/icon3.svg",
    imageAlt: "Icon 3",
    text: "LED flash alerts",
    containerClasses: "flex flex-col items-center",
    textClasses: "text-left pr-4 pl-10",
    link: "/path/to/icon3",
  },
  {
    imageSrc: "/images/icon4.svg",
    imageAlt: "Icon 4",
    text: "Display and text size",
    containerClasses: "flex flex-col items-center mr-3 pr-3 pb-4",
    textClasses: "pr-2 text-center",
    link: "/path/to/icon4",
  },
];
</script>
