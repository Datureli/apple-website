<template>
  <section class="text-black bg-red h-screen">
    <div class="m-auto p-3 lg:w-[80%]">
      <div class="flex mb-10 pt-3  md:w-[80%] m-auto">
        <i class="fas fa-brands fa-apple left-3 mt-2 "></i>
        <p class="ml-3">Support</p>
        <p class="ml-3">Accessibility</p>
      </div>
      <div class="grid md:grid-cols-4">
        <div
          v-for="(dropdown, index) in dropdowns"
          :key="index"
          class="relative w-[95%] h-[40px] md:h-auto pt-1"
          :class="{ 'border-t border-b': !isMdAndAbove }"
          @click="toggleDropdown(index)"
        >
          <div class="flex">
            <span
              class="text-white cursor-pointer md:h-[0px]"
              style="font-size: 12px"
            >
              <p class="text-black md:font-semibold">
                {{ dropdown.mainTitle }}
              </p>
            </span>
            <i
              v-if="!isMdAndAbove"
              class="fas fa-thin fa-xs fa-plus absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
            ></i>
          </div>

          <div
            v-if="getShowLinks(index) || isMdAndAbove"
            class="mt-2 bg-transparent text-black pb-12"
            :style="{
              marginTop: openDropdown === index && !isMdAndAbove ? 0 : '1.5rem',
            }"
          >
            <nuxt-link
              v-for="(link, linkIndex) in dropdown.dropdownLinks"
              :key="linkIndex"
              class="block py-1 text-black"
              style="font-size: 12px"
              :to="link.path"
            >
              {{ link.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="mt-12 pt-2 md:pl-4 border-t grid grid-row-1 md:flex md:m-auto custom-font"
      >
        <nuxt-link to="">United kingdom</nuxt-link>
        <p class="md:ml-5">Copyright © 2023 Apple Inc. All rights reserved.</p>
      </div>
      <div class="flex mt-2 grid grid-cols-3 custom-font">
        <nuxt-link
          v-for="(link, linkIndex) in footerLinks"
          :key="linkIndex"
          :to="link.linkPath"
        >
          <span>{{ link.linkName }}</span> <span class="ml-3">|</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import useDropdownMenu from "@/composables/useDropdownMenu.js";

const {
  footerLinks,
  dropdowns,
  openDropdown,
  isMdAndAbove,
  toggleDropdown,
  getShowLinks,
} = useDropdownMenu();
</script>

<style scoped>
.custom-font {
  font-size: 12px;
}
</style>
