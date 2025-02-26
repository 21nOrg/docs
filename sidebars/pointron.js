// @ts-check
import { docs } from "./docs";
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pointronSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "intro",
    },
    {
      type: "html",
      value: "Getting Started",
      className: "sidebar-section",
    },
    {
      type: "category",
      label: "Installation",
      link: {
        type: "doc",
        id: "pointron/installation",
      },
      items: ["pointron/preview-apps"],
    },
    {
      type: "html",
      value: "Product deep dive",
      className: "sidebar-section",
    },
    {
      type: "doc",
      label: "Core concepts",
      id: "pointron/core",
    },
    {
      type: "category",
      label: "Features",
      link: {
        type: "doc",
        id: "pointron/features",
      },
      items: [
        "features/goals",
        "features/tasks",
        "features/habits",
        docs.collections,
        "features/combinations",
        "features/opening-behaviour",
      ],
    },
    docs.customization,
    {
      type: "html",
      value: "More",
      className: "sidebar-section",
    },
    "pointron/best-practices",
    "delete-account",
    "offline-use",
    "credits-and-appreciation",
    {
      type: "html",
      value: "Links",
      className: "sidebar-section",
    },
    {
      type: "link",
      label: "Join our discord",
      href: "https://discord.com/invite/9HJqKYTZKg",
    },
  ],
};

module.exports = sidebars;
