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
      type: "doc",
      label: "Quick start",
      id: "pointron/quickstart",
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
        docs.collections,
        "features/opening-behaviour",
      ],
    },
    docs.customization,
    // {
    //   type: "html",
    //   value: "Use cases",
    //   className: "sidebar-section",
    // },
    // "pointron/use-cases/focus",
    // "pointron/use-cases/timetracking",
    // "pointron/use-cases/goalmanagement",
    // "pointron/use-cases/supertasking",
    // {
    //   type: "category",
    //   label: "By profession",
    //   link: {
    //     type: "doc",
    //     id: "pointron/use-cases/by-profession",
    //   },
    //   items: [
    //     "pointron/use-cases/by-profession/student",
    //     "pointron/use-cases/by-profession/freelancer",
    //     "pointron/use-cases/by-profession/founder",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "By method",
    //   link: {
    //     type: "doc",
    //     id: "pointron/use-cases/by-method",
    //   },
    //   items: [
    //     "pointron/use-cases/by-method/para",
    //     "pointron/use-cases/by-method/timeboxing",
    //   ],
    // },
    {
      type: "html",
      value: "More",
      className: "sidebar-section",
    },
    // {
    //   type: "category",
    //   label: "Switch from other tools",
    //   link: {
    //     type: "doc",
    //     id: "pointron/switch-from-other-tools",
    //   },
    //   items: [
    //     "pointron/switch-from/todoist",
    //     "pointron/switch-from/sunsama",
    //     "pointron/switch-from/ticktick",
    //     "pointron/switch-from/atracker",
    //     "pointron/switch-from/session",
    //     "pointron/switch-from/toggl",
    //   ],
    // },
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
