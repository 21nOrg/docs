// @ts-check
import { docs } from "./docs";
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nucleusSidebar: [
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
      id: "nucleus/quickstart",
    },
    {
      type: "html",
      value: "Product deep dive",
      className: "sidebar-section",
    },
    {
      type: "doc",
      label: "Core concepts",
      id: "nucleus/core",
    },
    {
      type: "category",
      label: "Features",
      link: {
        type: "doc",
        id: "nucleus/features",
      },
      items: [
        {
          type: "category",
          label: "Focus",
          items: ["features/goals", "features/tasks"],
        },
        {
          type: "category",
          label: "Memory",
          items: [
            docs.nodes,
            "memotron/features/relations",
            "memotron/features/capture",
            "memotron/features/bird-view",
            "memotron/features/search",
          ],
        },
        docs.collections,
        "features/combinations",
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
    "nucleus/best-practices",
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
