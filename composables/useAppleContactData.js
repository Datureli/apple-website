import { ref } from 'vue';

export default function getItems() {
  const items = ref([
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
  ]);

  return {
    items,
  };
}
