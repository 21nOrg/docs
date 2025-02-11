// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  memotronSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "memotron/intro",
    },
    {
      type: "category",
      label: "Getting Started",
      items: ["memotron/quickstart", "memotron/installation"],
    },
    {
      type: "category",
      label: "Product deep dive",
      items: ["memotron/core", "common/collections"],
    },
  ],
};

module.exports = sidebars;
