// DropdownMenuComposition.js
import { ref, onMounted } from "vue";

export default function useDropdownMenu() {
  const footerLinks = [
    {
      linkName: "Privacy policy",
      linkPath: "",
    },
    {
      linkName: "Use of Cookies",
      linkPath: "",
    },
    {
      linkName: "Terms of Use",
      linkPath: "",
    },
    {
      linkName: "Sales and Refunds",
      linkPath: "",
    },
    {
      linkName: "Legal",
      linkPath: "",
    },
    {
      linkName: "Site Map",
      linkPath: "",
    },
  ];

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
        { title: "Apple Repair Options", path: "" },
        { title: "Service and Repair Information", path: "" },
        { title: "AppleCare Products", path: "" },
        { title: "Hardware Warranties", path: "" },
        { title: "Software License Agreements", path: "" },
        { title: "Complimentary Support", path: "" },
      ],
      showLinks: ref(false),
    },
    {
      mainTitle: "Resources",
      dropdownLinks: [
        { title: "My Support", path: "" },
        { title: "Downloads", path: "" },
        { title: "Manuals", path: "" },
        { title: "Tech Specs", path: "" },
        { title: "Accessibility", path: "" },
      ],
      showLinks: ref(false),
    },
    {
      mainTitle: "Connect",
      dropdownLinks: [
        { title: "Contact Us", path: "" },
        { title: "Phone Numbers", path: "" },
        { title: "Support app", path: "" },
        { title: "Apple Communities", path: "" },
        { title: "Apple Support Videos", path: "" },
        { title: "@AppleSupport", path: "" },
      ],
      showLinks: ref(false),
    },
  ];

  const openDropdown = ref(null);
  const isMdAndAbove = ref(false);

  onMounted(() => {
    const mdMediaQuery = window.matchMedia("(min-width: 48em)");
    isMdAndAbove.value = mdMediaQuery.matches;
    mdMediaQuery.addEventListener("change", (event) => {
      isMdAndAbove.value = event.matches;
    });
  });

  const toggleDropdown = (index) => {
    dropdowns[index].showLinks.value = !dropdowns[index].showLinks.value;
  };

  const getShowLinks = (index) => {
    return dropdowns[index].showLinks.value;
  };

  return {
    dropdowns,
    openDropdown,
    isMdAndAbove,
    toggleDropdown,
    getShowLinks,
    footerLinks
  };
}
