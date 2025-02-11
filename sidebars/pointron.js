// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pointronSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "pointron/intro",
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["pointron/quickstart", "pointron/installation"],
    },
    {
      type: "category",
      label: "Product deep dive",
      items: ["pointron/features/tasks", "features/collections"],
    },
  ],
};

module.exports = sidebars;
