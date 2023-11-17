<template>
  <section class="text-center pb-[100px]">
    <div
      class="grid grid-cols-1 ml-7 mr-3 md:grid-cols-3 mt-10 md:w-[85%] m-auto"
    >
      <ContentCardItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
      <h2 class="text-1xl mt-7 text-left pl-15">
        * Personal Voice is available in English.
      </h2>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    imageSrc: "/icons/apple-contact/message.png",
    title: "Apple Communities",
    description:
      "Find answers, ask questions and connect with other Apple users.",
    linkTitle: "Ask or search now",
  },
  {
    imageSrc: "/icons/apple-contact/users.png",
    title: "Get Support",
    description: "We can help you find the best support options.",
    linkTitle: "Start now",
  },
  {
    imageSrc: "/icons/apple-contact/apple.png",
    title: "Support app",
    description:
      "Get personalised access to solutions for your Apple products.",
    link: "/path/to/personal-voice",
    linkTitle: "Download the Apple Support app",
  },
];
</script>

<style scoped>
.custom-text-title {
  font-size: 17px;
}
</style>
