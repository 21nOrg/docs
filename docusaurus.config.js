// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

function resolveApp() {
  const app = process.env.APP_NAME || "pointron";
  console.log("app", app);
  return app.toLowerCase();
}

function getSidebarPath() {
  const app = resolveApp();
  return require.resolve(`./sidebars/${app}.js`);
}

function getSidebarId() {
  const app = resolveApp();
  return `${app}Sidebar`;
}

function resolveAppUrl() {
  const app = resolveApp();
  return `https://${app}.app`;
}

function resolveNavBarItems() {
  const pagesStr = process.env.PAGES || "docs,faqs,roadmap,changelog";
  const pages = pagesStr.split(",");
  const app = resolveApp();
  let items = [];

  if (pages.includes("docs")) {
    items.push({
      type: "docSidebar",
      position: "left",
      label: "Docs",
      sidebarId: getSidebarId(),
    });
  }

  if (pages.includes("api")) {
    items.push({
      type: "docSidebar",
      docsPluginId: "api",
      position: "left",
      label: "API",
      sidebarId: "apiSidebar",
    });
  }

  if (pages.includes("guides")) {
    items.push({
      type: "docSidebar",
      docsPluginId: "guides",
      position: "left",
      label: "Guides",
      sidebarId: "guidesSidebar",
    });
  }

  if (pages.includes("faqs")) {
    items.push({
      position: "left",
      label: "FAQs",
      to: `${app}/faqs`,
    });
  }

  if (pages.includes("roadmap")) {
    items.push({
      position: "left",
      label: "Roadmap",
      to: `${app}/roadmap`,
    });
  }

  if (pages.includes("changelog")) {
    items.push({
      type: "docSidebar",
      position: "right",
      label: "Changelog",
      docsPluginId: `${app}Changelog`,
      sidebarId: `${app}ChangelogSidebar`,
    });
  }

  return [
    ...items,
    {
      href: resolveAppUrl(),
      label: "Go to app",
      position: "right",
      className: "button button--secondary",
    },
    {
      type: "search",
      position: "right",
    },
  ];
}

const titleConfig = {
  memotron: {
    title: "Memotron",
    tagline: "Your memory atlas",
    favicon: "img/memotron.ico",
    logo: {
      light: "img/memotron-light.png",
      dark: "img/memotron-dark.webp",
    },
  },
  pointron: {
    title: "Pointron",
    tagline: "Your focus haven",
    favicon: "img/pointron.ico",
    logo: {
      light: "img/pointron-light.png",
      dark: "img/pointron-dark.png",
    },
  },
  default: {
    title: "Nucleus",
    tagline: "The everything productivity app",
    favicon: "img/nucleus.ico",
    logo: {
      light: "img/nucleus-light.png",
      dark: "img/nucleus-dark.png",
    },
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: titleConfig[resolveApp()]?.title || titleConfig.default.title,
  tagline: titleConfig[resolveApp()]?.tagline || titleConfig.default.tagline,
  favicon: titleConfig[resolveApp()]?.favicon || titleConfig.default.favicon,

  // Set the production url of your site here
  url: process.env.SITE_URL || "https://docs.memotron.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  onBrokenLinks: "warn",
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

    [require.resolve('docusaurus-lunr-search'), {
      languages: ['en', 'de'], // Add more if needed
      highlightResult: true, // Highlight searched words
      maxHits: 10, // Increase number of search results
    }
    ],
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "memotronChangelog",
        path: "changelog/memotron",
        routeBasePath: "changelog/memotron",
        sidebarPath: require.resolve("./sidebars/memotron-changelog.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "pointronChangelog",
        path: "changelog/pointron",
        routeBasePath: "changelog/pointron",
        sidebarPath: require.resolve("./sidebars/pointron-changelog.js"),
      },
    ],
  ],

  // Custom fields to store runtime data
  customFields: {
    hostname: typeof window !== "undefined" ? window.location.hostname : "",
    app: resolveApp(),
  },

  // themes: [
  //   [
  //     "@docusaurus/theme-search-algolia",
  //     {
  //       type: "local", // Enables built-in local search
  //     },
  //   ],
  // ],

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
        title: "",
        logo: {
          alt: "Logo",
          src:
            titleConfig[resolveApp()]?.logo?.light ||
            titleConfig.default.logo.light,
          srcDark:
            titleConfig[resolveApp()]?.logo?.dark ||
            titleConfig.default.logo.dark,
        },
        items: resolveNavBarItems(),
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
