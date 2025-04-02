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

  if (pages.includes("roadmap")) {
    items.push({
      position: "left",
      label: "Roadmap",
      to: `${app}/roadmap`,
    });
  }

  if (pages.includes("faqs")) {
    items.push({
      position: "left",
      label: "FAQs",
      to: `${app}/faqs`,
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
      // className: "button button--secondary",
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
      dark: "img/memotron-dark.png",
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

  // Add client modules for Vercel Analytics
  clientModules: [require.resolve("./src/vercel-analytics.js")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: getSidebarPath(),
          routeBasePath: "/",
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
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en", "de"], // Add more if needed
        highlightResult: true, // Highlight searched words
        maxHits: 10, // Increase number of search results
      },
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
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/changelog/memotron/new",
            to: "/changelog/memotron/2025/Q1/v0.59.0",
          },
          {
            from: "/changelog/pointron/new",
            to: "/changelog/pointron/2025/Q1/v0.82.0",
          },
        ],
      },
    ],
    function (context, options) {
      return {
        name: "process-conditional-content",
        async loadContent() {
          if (process.env.NODE_ENV !== "production") {
            return;
          }
          const fs = require("fs");
          const path = require("path");
          const app = process.env.APP_NAME || "default";
          const filePath = path.join(__dirname, "docs/intro.md");
          let content = fs.readFileSync(filePath, "utf8");
          content = content.replace(
            /<!--MEMOTRON_START-->[\s\S]*?<!--MEMOTRON_END-->/g,
            app === "memotron" ? "$&" : ""
          );
          content = content.replace(
            /<!--POINTRON_START-->[\s\S]*?<!--POINTRON_END-->/g,
            app === "pointron" ? "$&" : ""
          );
          content = content.replace(
            /<!--DEFAULT_START-->[\s\S]*?<!--DEFAULT_END-->/g,
            app === "default" ? "$&" : ""
          );

          content = content.replace(
            /<!--[A-Z_]+_START-->|<!--[A-Z_]+_END-->/g,
            ""
          );

          fs.writeFileSync(filePath, content);
        },
        async postBuild() {
          if (process.env.NODE_ENV === "production") {
            const path = require("path");
            const filePath = path.join(__dirname, "docs/intro.md");
            require("child_process").execSync("git checkout -- " + filePath);
          }
        },
      };
    },
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
