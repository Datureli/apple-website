<template>
  <div class="pb-4">
    <h1
      class="text-4xl md:text-4xl lg:text-6xl mt-8 font-sans font-sf-pro-display text-s2condPurple text-center font-semibold mb-4 p-5"
    >
      Accessibility Support
    </h1>
    <FourIconsLayout>
      <FourIcons
        v-for="(icon, index) in icons"
        :key="index"
        :imageSrc="icon.imageSrc"
        :imageAlt="icon.text + 'image'"
        :text="icon.text"
        :containerClasses="icon.containerClasses"
        :textClasses="icon.textClasses"
        :link="icon.link"
        :index="index"
      ></FourIcons>
    </FourIconsLayout>
  </div>
</template>

<script setup>
const icons = [
  {
    imageSrc: "/images/icon1.svg",
    text: "Mac shortcuts",
    link: "/path/to/icon1",
  },
  {
    imageSrc: "/images/icon2.svg",
    text: "Magnifier on iPhone",
    textClasses: "text-center m-auto pr-6",
    link: "/path/to/icon2",
  },
  {
    imageSrc: "/images/icon3.svg",
    text: "LED flash alerts",
    textClasses: "text-center m-auto",
    link: "/path/to/icon3",
  },
  {
    imageSrc: "/images/icon4.svg",
    text: "Display and text size",
    textClasses: "text-center",
    link: "/path/to/icon4",
  },
];
</script>

