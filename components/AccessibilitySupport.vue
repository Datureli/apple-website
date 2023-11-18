<template>
  <div class="pb-5">
    <h1
      class="text-4xl md:text-4xl lg:text-6xl mt-8 font-sans font-sf-pro-display text-little-black text-center font-semibold mb-4 p-5"
    >
    Accessibility Support
    </h1>
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
  </div>
</template>

<script setup>
const icons = [
  {
    imageSrc: "/images/icon1.svg",
    imageAlt: "Icon 1",
    text: "Mac shortcuts",
    containerClasses: "flex flex-col items-center ml-3",
    link: "/path/to/icon1",
  },
  {
    imageSrc: "/images/icon2.svg",
    imageAlt: "Icon 2",
    text: "Magnifier on iPhone",
    containerClasses: "flex flex-col items-center mb-4 ",
    textClasses: "text-center m-auto pr-6",
    link: "/path/to/icon2",
  },
  {
    imageSrc: "/images/icon3.svg",
    imageAlt: "Icon 3",
    text: "LED flash alerts",
    containerClasses: "flex flex-col items-center",
    textClasses: "text-center m-auto",
    link: "/path/to/icon3",
  },
  {
    imageSrc: "/images/icon4.svg",
    imageAlt: "Icon 4",
    text: "Display and text size",
    containerClasses: "flex flex-col items-center mr-3 pr-3 pb-4",
    textClasses: "text-center",
    link: "/path/to/icon4",
  },
];
</script>
