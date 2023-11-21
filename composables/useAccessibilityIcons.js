import { ref } from 'vue';

export default function useAccessibilityIcons() {
  const icons = ref([
    {
      imageSrc: "/images/icon1.svg",
      text: "Mac shortcuts",
      link: "/path/to/icon1",
    },
    {
      imageSrc: "/images/icon2.svg",
      text: "Magnifier on iPhone",
      link: "/path/to/icon2",
    },
    {
      imageSrc: "/images/icon3.svg",
      text: "LED flash alerts",
      link: "/path/to/icon3",
    },
    {
      imageSrc: "/images/icon4.svg",
      text: "Display and text size",
      link: "/path/to/icon4",
    },
  ]);

  return { icons };
}
