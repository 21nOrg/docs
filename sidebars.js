/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
      customProps: {
        icon: "BookOpen",
      },
    },
    {
      type: "doc",
      id: "getting-started",
      label: "Getting Started",
      customProps: {
        icon: "RocketLaunch",
      },
    },
    {
      type: "category",
      label: "Features",
      customProps: {
        icon: "Cube",
      },
      items: [
        {
          type: "doc",
          id: "features/collections/typed",
          label: "Typed Collections",
          customProps: {
            icon: "Database",
          },
        },
        {
          type: "doc",
          id: "features/collections/query",
          label: "Querying",
          customProps: {
            icon: "MagnifyingGlass",
          },
        },
      ],
    },
  ],
};

module.exports = sidebars;
