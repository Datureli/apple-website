<template>
  <section class="mx-auto pb-[100px] md:w-[85%] ml-5  lg:ml-auto">
    <div
      class="text-left m-auto grid grid-cols-1 mr-3 md:grid-cols-2 lg:grid-cols-3 mt-10"
    >
      <ContentCardItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
    <h2 class="text-1xl mt-7 text-left md-text-0 lg:pr-7">
      * Personal Voice is available in English.
    </h2>
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
