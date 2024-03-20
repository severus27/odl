import { themes as prismThemes } from "prism-react-renderer";
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpenDeepLearning",
  tagline: "Deep Learning is cool",
  favicon: "img/favicon.png",

  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  organizationName: "OpenDeepLearning", // Usually your GitHub org/user name.
  projectName: "OpenDeepLearning", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
      },
      algolia: {
        appId: "O5MB1VTLJI",
        apiKey: "6cc4ab582a75be521c8b5ade303820ed",
        indexName: "openmlguide",
        contextualSearch: true,
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "OpenDeepLearning",
        logo: {
          alt: "Logo",
          src: "img/logo-light.png",
          srcDark: "img/logo-dark.png",
        },
        hideOnScroll: true,
        items: [
          { to: "#", label: "Courses", position: "left" },
          { to: "#", label: "Resources", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            label: "Company",
            items: [
              {
                to: "/about",
                label: "About",
              },
              {
                to: "#",
                label: "Contribute",
              },
              {
                href: "emailto:teamopendeeplearning@gmail.com",
                label: "Contact Us",
              },
            ],
          },
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: "#",
                label: "Help Us Translate",
              },
            ],
          },
          {
            href: "https://github.com/open-deeplearning/opendeeplearning",
            className: "header-link header-github-link",
            "aria-label": "GitHub",
            position: "right",
          },
          {
            href: "https://discord.com/invite/QgZHExcssR",
            className: "header-link header-discord-link",
            "aria-label": "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Cources",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/open-deeplearning",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/opendeeplearning/",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/QgZHExcssR",
              },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                label: "YouTube",
                href: "https://www.youtube.com/@Open_DeepLearning",
              },
              {
                label: "X",
                href: "https://twitter.com/Open_DL_AI",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/opendeeplearning",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/opendeeplearning/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Contribute",
                to: "#",
              },
              {
                label: "Contact Us",
                href: "emailto:teamopendeeplearning@gmail.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenDeepLearning`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      announcementBar: {
        id: "banner",
        content:
          '<a target="_blank" class="banner" rel="noopener noreferrer" href="https://github.com/open-deeplearning/OpenML-Guide">Go give a ⭐ to OpenDeepLearning on GitHub!</a>',
        backgroundColor: "#0BA37F",
        textColor: "#000",
        isCloseable: true,
      },
    }),
};

export default config;
