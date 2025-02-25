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
  ],
};

module.exports = sidebars;
