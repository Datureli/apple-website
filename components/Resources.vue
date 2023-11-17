<template>
  <section class="text-center">
    <h2 class="text-3xl mt-7 font-bold">Resources</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-10 md:w-[85%] m-auto">
      <ContentCardItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup>
import ContentCardItem from "@/components/ContentCardItem.vue";

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
