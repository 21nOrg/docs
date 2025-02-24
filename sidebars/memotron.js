// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  memotronSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "memotron/intro",
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
        {
          type: "category",
          label: "Nodes",
          link: {
            type: "doc",
            id: "memotron/features/nodes",
          },
          items: ["memotron/features/nodes/markdown"],
        },
        {
          type: "category",
          label: "Collections",
          link: {
            type: "doc",
            id: "memotron/features/collections",
          },
          items: [
            "memotron/features/collections/simple",
            "memotron/features/collections/typed",
            "memotron/features/collections/query",
            "memotron/features/collections/views",
            "memotron/features/collections/play-modes",
          ],
        },
        "memotron/features/combinations",
        "memotron/features/link-tags",
        "memotron/features/capture",
        "memotron/features/bird-view",
        "memotron/features/search",
        "memotron/features/local-ai",
        "memotron/features/offline-use",
        {
          type: "category",
          label: "Customization",
          link: {
            type: "doc",
            id: "memotron/features/customization",
          },
          items: [
            "memotron/features/customization/mode-of-interaction",
            "memotron/features/customization/appearance",
            "memotron/features/customization/date-and-time",
          ],
        },
        "memotron/features/opening-behaviour",
      ],
    },
    {
      type: "category",
      label: "Web Clipper",
      link: {
        type: "doc",
        id: "memotron/web-clipper",
      },
      items: [
        "memotron/web-clipper/text-clipping",
        "memotron/web-clipper/tweet-clipping",
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
      value: "More",
      className: "sidebar-section",
    },
    {
      type: "category",
      label: "Roadmap",
      link: {
        type: "doc",
        id: "memotron/roadmap",
      },
      items: ["memotron/roadmap/everything-planned"],
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
      ],
    },
    {
      type: "doc",
      label: "Best practices",
      id: "memotron/best-practices",
    },
    {
      type: "doc",
      label: "Delete Account",
      id: "memotron/delete-account",
    },
    {
      type: "doc",
      label: "Green use",
      id: "memotron/green-use",
    },
    {
      type: "doc",
      label: "Credits and appriciation",
      id: "memotron/credits-and-appreciation",
    },
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
