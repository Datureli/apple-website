<template>
  <section class="mt-8">
    <h2 class="text-center text-3xl lg:text-4xl font-medium text-black mb-6">
      Build-in features
    </h2>
    <p class="text-center m-auto pl-8 pr-8 mb-5 md:pl-10 md:pr-10 lg:w-[65%]">
      Add the accessibility features that you use the most, and access them
      quickly with the router.<nuxt-link
        class="text-link-500 hover:underline cursor-pointer"
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
        :imageAlt="icon.text + 'image'"
        :text="icon.text"
        :link="icon.link"
        :index="index"
      ></FourIcons>
    </FourIconsLayout>
  </section>
</template>

<script setup>
import { ref } from "vue";
const icons = [
  {
    imageSrc: "/icons/hand.png",
    text: "AssitiveTouch",
    link: "/path/to/icon1",
  },
  {
    imageSrc: "/icons/4-squares.png",
    text: "Switch Control",
    link: "/path/to/icon2",
  },
  {
    imageSrc: "/icons/lock.png",
    text: "Guided Access",
    link: "/path/to/icon3",
  },
  {
    imageSrc: "/icons/message.png",
    text: "Voice Control",
    link: "/path/to/icon4",
  },
];
</script>
