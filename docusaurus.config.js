// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

function getCurrentApp() {
  const app = process.env.APP_NAME || "memotron";
  return app.toLowerCase();
}

function getSidebarPath() {
  const app = getCurrentApp();
  return require.resolve(`./sidebars/${app}.js`);
}

function getSidebarId() {
  const app = getCurrentApp();
  return `${app}Sidebar`;
}

const titleConfig = {
  memotron: {
    title: "Memotron docs",
    tagline: "Your memory atlas",
  },
  pointron: {
    title: "Pointron docs",
    tagline: "Your focus haven",
  },
  default: {
    title: "Nucleus docs",
    tagline: "The everything productivity app",
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: titleConfig[getCurrentApp()]?.title || titleConfig.default.title,
  tagline: titleConfig[getCurrentApp()]?.tagline || titleConfig.default.tagline,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: process.env.SITE_URL || "https://docs.memotron.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: getSidebarPath(),
          routeBasePath: "/docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: require.resolve("./sidebars/api.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "guides",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars/guides.js"),
      },
    ],
  ],

  // Custom fields to store runtime data
  customFields: {
    hostname: typeof window !== "undefined" ? window.location.hostname : "",
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        style: "primary",
        title: titleConfig[getCurrentApp()]?.title || titleConfig.default.title,
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            label: "Docs",
            sidebarId: getSidebarId(),
          },
          {
            type: "docSidebar",
            docsPluginId: "api",
            position: "left",
            label: "API",
            sidebarId: "apiSidebar",
          },
          {
            type: "docSidebar",
            docsPluginId: "guides",
            position: "left",
            label: "Guides",
            sidebarId: "guidesSidebar",
          },
          {
            href: "https://github.com",
            label: "GitHub",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Getting Started",
                to: "/getting-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/memotron",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/memotronapp",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Memotron. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap",
      },
    },
  ],
  stylesheets: [
    {
      href: "https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css",
      type: "text/css",
    },
  ],
};

module.exports = config;
