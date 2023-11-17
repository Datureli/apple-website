<template>
  <section class="text-center ">
    <div class="grid grid-cols-1 md:grid-cols-3 mt-10 md:w-[85%] m-auto">
      <ContentCardItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
      <h2 class="text-1xl mt-7 text-left pl-15 ">
        * Personal Voice is available in English.
      </h2>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    imageSrc: "/icons/apple-contact/message.png",
    title: "Braille User Guides",
    description:
      "Download a Unified English Braille user guide file (.BRF) for your device: Mac, iPhone, Apple Watch, Apple TV, or HomePod.",
    linkTitle: "Start a SignTime session",
  },
  {
    imageSrc: "/icons/apple-contact/users.png",
    title: "VoiceOver",
    description:
      "With VoiceOver, you can hear what's happening on your screen and navigate with simple gestures. Learn how to use VoiceOver on your iPhone, iPad, or Mac.",
    linkTitle: "Start a SignTime session",
  },
  {
    imageSrc: "/icons/apple-contact/apple.png",
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
