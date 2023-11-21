<template>
  <section class="text-black bg-red h-screen">
    <div class="p-3 md:p-5 lg:w-[80%] md:m-auto">
      <div class="flex mb-6 md:w-[100%]">
        <i
          class="fas fa-brands fa-apple left-3 mt-1 text-gray-500 hover:text-black"
        ></i>

        <span class="ml-5">></span>
        <p class="ml-3 custom-font mt-1">Support</p>
        <span class="ml-5">></span>
        <p class="ml-3 custom-font mt-1">Accessibility</p>
      </div>
      <div class="grid md:grid-cols-4">
        <div
          v-for="(dropdown, index) in dropdowns"
          :key="index"
          class="relative w-[95%] h-[40px] md:h-auto pt-1"
          style="border-color: #515154"
          :class="{
            'border-t': !isMdAndAbove,
            'border-b': index === dropdowns.length - 1,
          }"
          @click="toggleDropdown(index)"
        >
          <div class="flex">
            <span
              class="text-white cursor-pointer md:h-[0px]"
              style="font-size: 12px"
            >
              <p class="text-black md:font-semibold mt-2">
                {{ dropdown.mainTitle }}
              </p>
            </span>
            <i
              v-if="!isMdAndAbove"
              class="fas fa-thin fa-xs fa-plus absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
              style="color: grey"
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
              class="block py-1 text-black custom-font"
              :to="link.path"
            >
              {{ link.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="mt-8 pt-2 md:border-t grid grid-row-1 md:flex md:flex-row-reverse md:m-auto custom-font"
      >
        <nuxt-link class="md:text-right lg:w-[20%] ml-auto w-[100%]"
          >United kingdom</nuxt-link
        >
        <div class="flex custom-font texy-center w-[100%] hidden lg:flex">
          <nuxt-link
            v-for="(link, linkIndex) in footerLinks"
            :key="linkIndex"
            :to="link.linkPath"
            class=""
          >
            <span>{{ link.linkName }}</span>
            <span
              v-if="linkIndex !== footerLinks.length - 1"
              class="ml-1 mr-1 md:ml-3 md:mr-3"
              >|</span
            >
          </nuxt-link>
        </div>
        <p class="mt-5 md:mt-0 md:w-[100%] lg:w-[45%]">
          Copyright © 2023 Apple Inc. All rights reserved.
        </p>
      </div>
      <div
        class="flex flex-wrap custom-font md:flex-row md:mt-2 lg:hidden lg:flex"
      >
        <nuxt-link
          v-for="(link, linkIndex) in footerLinks"
          :key="linkIndex"
          :to="link.linkPath"
          class="md:flex"
        >
          <span>{{ link.linkName }}</span
          ><span class="ml-1 mr-1 md:ml-3 md:mr-3">|</span>
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
