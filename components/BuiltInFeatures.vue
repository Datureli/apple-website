<template>
  <section class="mt-8">
    <h2 class="text-center text-3xl lg:text-4xl font-medium text-black mb-6">
      Build-in features
    </h2>
    <p class="text-center m-auto pl-8 pr-8 mb-5 md:pl-10 md:pr-10 lg:w-[65%]">
      Add the accessibility features that you use the most, and access them
      quickly with the router.<nuxt-link
        class="text-link hover:underline cursor-pointer"
        to=""
      >
        Accessibility Shortcut</nuxt-link
      >
    </p>

    <FourIconsLayout>
      <FourIcons
        v-for="(icon, index) in icons"
        :key="index"
        :imageSrc="icon.imageSrc"
        :imageAlt="icon.imageAlt"
        :text="icon.text"
        :containerClasses="icon.containerClasses"
        :textClasses="icon.textClasses"
        :link="icon.link"
        :index="index"
      ></FourIcons>
    </FourIconsLayout>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const icons = [
  {
    imageSrc: "/icons/hand.png",
    imageAlt: "Icon 1",
    text: "AssitiveTouch",
    containerClasses: "flex flex-col items-center ml-3",
    textClasses: "",
    link: "/path/to/icon1",
  },
  {
    imageSrc: "/icons/4-squares.png",
    imageAlt: "Icon 2",
    text: "Switch Control",
    containerClasses: "flex flex-col items-center mr-2 pr-3 mb-4",
    textClasses: "pr-2 text-center",
    link: "/path/to/icon2",
  },
  {
    imageSrc: "/icons/lock.png",
    imageAlt: "Icon 3",
    text: "Guided Access",
    containerClasses: "flex flex-col items-center",
    textClasses: "text-left pr-4 pl-10",
    link: "/path/to/icon3",
  },
  {
    imageSrc: "/icons/message.png",
    imageAlt: "Icon 4",
    text: "Voice Control",
    containerClasses: "flex flex-col items-center mr-3 pr-3 pb-4",
    textClasses: "pr-2 text-center",
    link: "/path/to/icon4",
  },
];
</script>
