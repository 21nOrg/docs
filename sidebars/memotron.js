// @ts-check
import { docs } from "./docs";

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  memotronSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "intro",
      // customProps: { icon: "GameController" },
    },
    {
      type: "html",
      value: "Getting Started",
      className: "sidebar-section",
    },
    {
      type: "doc",
      label: "Quick Start",
      id: "memotron/quickstart",
    },
    {
      type: "category",
      label: "Installation",
      link: {
        type: "doc",
        id: "memotron/installation",
      },
      items: ["memotron/preview-apps"],
    },
    {
      type: "html",
      value: "Product deep dive",
      className: "sidebar-section",
    },
    {
      type: "doc",
      label: "Core concepts",
      id: "memotron/core",
    },
    {
      type: "category",
      label: "Features",
      link: {
        type: "doc",
        id: "memotron/features",
      },
      items: [
        docs.nodes,
        docs.collections,
        "features/combinations",
        "memotron/features/relations",
        "memotron/features/capture",
        "memotron/features/bird-view",
        "memotron/features/search",
        "memotron/features/local-ai",
        "features/opening-behaviour",
      ],
    },
    docs.customization,
    {
      type: "category",
      label: "Web Clipper",
      link: {
        type: "doc",
        id: "memotron/web-clipper",
      },
      items: [
        "memotron/web-clipper/text-clipping",
        "memotron/web-clipper/social-clipping",
        "memotron/web-clipper/kindle-sync",
      ],
    },
    {
      type: "category",
      label: "A̶n̶t̶i̶ productivity",
      link: {
        type: "doc",
        id: "memotron/anti-productivity",
      },
      items: [
        "memotron/anti-productivity/digital-hoarding",
        "memotron/anti-productivity/perfecting-the-setup",
        "memotron/anti-productivity/round-trip-capture",
      ],
    },
    {
      type: "html",
      value: "Use cases",
      className: "sidebar-section",
    },
    "memotron/use-cases/learning",
    "memotron/use-cases/research",
    "memotron/use-cases/journaling",
    "memotron/use-cases/pkm",
    {
      type: "category",
      label: "By profession",
      link: {
        type: "doc",
        id: "memotron/use-cases/by-profession",
      },
      items: [
        "memotron/use-cases/by-profession/student",
        "memotron/use-cases/by-profession/writer",
        "memotron/use-cases/by-profession/founder",
        "memotron/use-cases/by-profession/designer",
        "memotron/use-cases/by-profession/executive",
        "memotron/use-cases/by-profession/lawyer",
      ],
    },
    {
      type: "category",
      label: "By method",
      link: {
        type: "doc",
        id: "memotron/use-cases/by-method",
      },
      items: [
        "memotron/use-cases/by-method/zettelkasten",
        "memotron/use-cases/by-method/cornell",
        "memotron/use-cases/by-method/outlining",
      ],
    },
    {
      type: "html",
      value: "More",
      className: "sidebar-section",
    },
    {
      type: "category",
      label: "Switch from other tools",
      link: {
        type: "doc",
        id: "memotron/switch-from-other-tools",
      },
      items: [
        "memotron/switch-from-other-tools/notion",
        "memotron/switch-from-other-tools/obsidian",
        "memotron/switch-from-other-tools/capacities",
        "memotron/switch-from-other-tools/pocket",
      ],
    },
    "memotron/best-practices",
    "delete-account",
    "offline-use",
    // "memotron/green-use",
    "credits-and-appreciation",
    {
      type: "html",
      value: "Useful links",
      className: "sidebar-section",
    },
    {
      type: "link",
      label: "Install chrome extension",
      href: "https://chromewebstore.google.com/detail/memotron-web-clipper/fgghopffkfdhckbcghodnlbplkagokcn",
    },
    {
      type: "link",
      label: "Join our discord",
      href: "https://discord.com/invite/9HJqKYTZKg",
    },
  ],
};

module.exports = sidebars;
