<template>
  <section class="bg-black grid-cols-1" style="height: 100vh">
    <div class="bg-red grid grid-cols-3 text-white mb-10 pt-3 ml-2">
      <i
        class="fas fa-thin fa-magnifying-glass left-3 mt-2 ml-2 text-gray-500"
      ></i>
      <p>Support</p>
      <p>Accessibility</p>
    </div>

    <div
      v-for="(dropdown, index) in dropdowns"
      :key="index"
      class="relative w-[90%] border-t border-b h-[40px] pt-1 ml-4"
      @click="toggleDropdown(index)"
    >
      <span class="text-white cursor-pointer">
        {{ dropdown.mainTitle }}
      </span>
      <i
        class="fas fa-thin fa-plus absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
      ></i>
      <div
        v-if="getShowLinks(index)"
        class="mt-2 bg-white text-black shadow-lg"
        :style="{ marginTop: openDropdown === index ? 0 : '2rem' }"
      >
        <nuxt-link
          v-for="(link, linkIndex) in dropdown.dropdownLinks"
          :key="linkIndex"
          class="block px-4 py-2 text-black"
          :to="link.path"
        >
          {{ link.title }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const dropdowns = [
  {
    mainTitle: "Products Support",
    dropdownLinks: [
      { title: "iPhone", path: "/iphone" },
      { title: "Mac", path: "/mac" },
      { title: "iPad", path: "/ipad" },
      { title: "Watch", path: "/watch" },
      { title: "AirPods", path: "/airpods" },
      { title: "Music", path: "/music" },
      { title: "TV", path: "/tv" },
      { title: "Support site map", path: "/support-site-map" },
    ],
    showLinks: ref(false),
  },
  {
    mainTitle: "Service and Repair",
    dropdownLinks: [
      { title: "Service Overview", path: "/service-overview" },
      { title: "Repair Status", path: "/repair-status" },
      { title: "Battery Service", path: "/battery-service" },
      { title: "AppleCare", path: "/applecare" },
    ],
    showLinks: ref(false),
  },
  {
    mainTitle: "Resources",
    dropdownLinks: [
      { title: "User Guides", path: "/user-guides" },
      { title: "Technical Specifications", path: "/technical-specs" },
      { title: "Apple Store", path: "/apple-store" },
    ],
    showLinks: ref(false),
  },
  {
    mainTitle: "Connect",
    dropdownLinks: [
      { title: "Contact Us", path: "/contact" },
      { title: "Chat Support", path: "/chat-support" },
      { title: "Feedback", path: "/feedback" },
    ],
    showLinks: ref(false),
  },
];

const toggleDropdown = (index) => {
  dropdowns[index].showLinks.value = !dropdowns[index].showLinks.value;
};

const getShowLinks = (index) => {
  return dropdowns[index].showLinks.value;
};
</script>
