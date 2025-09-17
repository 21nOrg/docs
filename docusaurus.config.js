// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const cdnUrl = "https://cdn.21n.co";

function resolveApp() {
  const app = process.env.APP_NAME || "pointron";
  console.log("app", app);
  return app.toLowerCase();
}

function isBlogOnlyMode() {
  return process.env.BLOG_ONLY === "true";
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

function getEditUrl() {
  return "https://github.com/21nOrg/nucleus.docs/tree/main/";
}

function resolveNavBarItems() {
  if (isBlogOnlyMode()) {
    return [
      {
        href: "https://21n.org",
        label: "21n.org",
        position: "right",
      },
      {
        href: "https://discord.com/invite/9HJqKYTZKg",
        label: "Join our Discord",
        position: "right",
      },
      {
        href: "/rss.xml",
        label: "RSS feed",
        position: "right",
      },
    ];
  }

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

  if (pages.includes("changelog")) {
    items.push({
      type: "docSidebar",
      position: "left",
      label: "Changelog",
      docsPluginId: `${app}Changelog`,
      sidebarId: `${app}ChangelogSidebar`,
    });
  }

  if (pages.includes("faqs")) {
    items.push({
      position: "left",
      label: "FAQs",
      to: `${app}/faqs`,
    });
  }

  items.push({
    href: "https://blog.21n.org",
    label: "Blog",
    position: "right",
  });

  return [
    ...items,
    {
      href: resolveAppUrl(),
      label: "Web app",
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
  nucleus: {
    title: "Nucleus",
    tagline: "Your digital harmony",
    favicon: "img/nucleus.ico",
    logo: {
      light: "img/nucleus-light.png",
      dark: "img/nucleus-dark.png",
    },
  },
  nativeblog: {
    title: "21n blog",
    tagline: "21st century native",
    favicon: "img/21n.ico",
    logo: {
      light: "img/21n-blog-light.png",
      dark: "img/21n-blog-dark.png",
    },
  },
  default: {
    title: "21n",
    tagline: "21st century native",
    favicon: "img/21n.ico",
    logo: {
      light: "img/21n-light.png",
      dark: "img/21n-dark.png",
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
        ...(isBlogOnlyMode()
          ? {}
          : {
              docs: {
                sidebarPath: getSidebarPath(),
                routeBasePath: "/",
                editUrl: getEditUrl(),
              },
            }),
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 200 } }),
          // editUrl: getEditUrl(),
          routeBasePath: isBlogOnlyMode() ? "/" : "/blog",
          blogTitle: "21n blog",
          blogDescription: "Latest updates and insights from 21n",
          postsPerPage: 10,
          blogSidebarTitle: "Recent posts",
          blogSidebarCount: "ALL",
          authorsMapPath: "authors.yml",
          blogListComponent: "@site/src/components/CustomBlogListPage",
          blogAuthorsPostsComponent:
            "@site/src/components/CustomAuthorPostsPage",
          blogTagsPostsComponent: "@site/src/components/CustomTagPostsPage",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    ...(isBlogOnlyMode()
      ? []
      : [
          [
            require.resolve("docusaurus-lunr-search"),
            {
              languages: ["en", "de"],
              highlightResult: true,
              maxHits: 10,
            },
          ],
          [
            "@docusaurus/plugin-content-docs",
            {
              id: "api",
              path: "api",
              routeBasePath: "api",
              sidebarPath: require.resolve("./sidebars/api.js"),
              editUrl: getEditUrl(),
            },
          ],
          [
            "@docusaurus/plugin-content-docs",
            {
              id: "guides",
              path: "guides",
              routeBasePath: "guides",
              sidebarPath: require.resolve("./sidebars/guides.js"),
              editUrl: getEditUrl(),
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
            "@docusaurus/plugin-content-docs",
            {
              id: "nucleusChangelog",
              path: "changelog/nucleus",
              routeBasePath: "changelog/nucleus",
              sidebarPath: require.resolve("./sidebars/nucleus-changelog.js"),
            },
          ],
          [
            "@docusaurus/plugin-content-docs",
            {
              id: "clipperChangelog",
              path: "changelog/clipper",
              routeBasePath: "changelog/clipper",
              sidebarPath: require.resolve("./sidebars/clipper-changelog.js"),
            },
          ],
          [
            "@docusaurus/plugin-client-redirects",
            {
              redirects: [
                {
                  from: "/changelog/memotron/new",
                  to: "/changelog/memotron/2025/Q3/v0.61.3",
                },
                {
                  from: "/changelog/pointron/new",
                  to: "/changelog/pointron/2025/Q3/v0.83.1",
                },
                {
                  from: "/changelog/nucleus/new",
                  to: "/changelog/nucleus/2025/Q3/v0.3.2",
                },
                {
                  from: "/changelog/clipper/new",
                  to: "/changelog/clipper/2025/v0.58.0",
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
                  /<!--NUCLEUS_START-->[\s\S]*?<!--NUCLEUS_END-->/g,
                  app === "nucleus" ? "$&" : ""
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
                  require("child_process").execSync(
                    "git checkout -- " + filePath
                  );
                }
              },
            };
          },
        ]),
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
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Sen:wght@400..800&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Parkinsans:wght@300..800&family=Sora:wght@100..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Teachers:ital,wght@0,400..800;1,400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: `${cdnUrl}/${resolveApp()}/ogDefault.png`,
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:image",
        content: `${cdnUrl}/${resolveApp()}/ogDefault.png`,
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
