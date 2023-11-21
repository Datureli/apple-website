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
        :link="icon.link"
        :index="index"
      ></FourIcons>
    </FourIconsLayout>
  </div>
</template>

<script setup>
const { icons } = useAccessibilityIcons();
</script>
