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
      items: ["memotron/quickstart",
        {
          type: "category",
          label: "Installation",
          items: [
            "memotron/installation","memotron/preview-apps"
          ],
        },

      ],
    },
    {
      type: "category",
      label: "Product deep dive",
      items: ["memotron/core", "features/collections"],
    },
  ],
};

module.exports = sidebars;
