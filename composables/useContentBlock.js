import { ref } from "vue";

export default function useContentBlock() {
  const items = ref([
    {
      imageSrc: "/icons/content-icons/personal-voice.png",
      title: "Create a Personal Voice",
      description:
        "You can create a synthesised voice that sounds like you, then use it to type to speak in FaceTime and phone calls, assistive communication apps and in-person conversations.*",
      link: "/path/to/personal-voice",
      linkTitle: "Find out about Personal Voice",
    },
    {
      imageSrc: "/icons/content-icons/live-speech.png",
      title: "Communicate with Live Speech",
      description:
        "With Live Speech, you can type what you want to say and have it spoken out loud in FaceTime and other supported apps, or from your device's speakers for in-person conversations.",
      link: "/path/to/personal-voice",
      linkTitle: "Find out about Live Speech",
    },
  ]);

  return {
    items,
  };
}
