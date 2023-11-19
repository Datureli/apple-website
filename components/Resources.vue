<template>
  <section class="mx-auto md:w-[95%] lg:w-[85%]">
    <h2 class="text-3xl mt-7 font-semibold text-center">Resources</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 ml-7 mr-3 mt-10 ">
      <ContentCardItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </section>
</template>


<script setup>
const items = [
  {
    imageSrc: "/icons/content-icons/resources.png",
    title: "Braille User Guides",
    description:
      "Download a Unified English Braille user guide file (.BRF) for your device: Mac, iPhone, Apple Watch, Apple TV, or HomePod.",
    linkWords: ["Mac", "iPhone", "Apple Watch", "Apple TV", "HomePod"],
  },
  {
    imageSrc: "/icons/content-icons/resources.png",
    title: "VoiceOver",
    description:
      "With VoiceOver, you can hear what's happening on your screen and navigate with simple gestures. Learn how to use VoiceOver on your iPhone, iPad, or Mac.",
    linkWords: ["iPhone", "iPad", "Mac"],
  },
  {
    imageSrc: "/icons/content-icons/sing-time.png",
    title: "Contact Apple using SignTime",
    description:
      "Get help from Apple Support using sign language. You can start a SignTime session to be connected to an interpreter.",
    link: "/path/to/personal-voice",
    linkTitle: "Start a SignTime session",
  },
];
</script>

<style scoped>
.custom-text-title {
  font-size: 17px;
}
</style>
