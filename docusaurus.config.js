import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Open DeepLearning",
  tagline: "Deep Learning is cool",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

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
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Open DeepLearning",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        hideOnScroll: true,
        items: [
          { to: "/blog", label: "Courses", position: "left" },
          {
            label: "Resources",
            items: [
              {
                to: "#",
                label: "Machine Learning",
              },
              {
                to: "#",
                label: "LLM Training",
              },
            ],
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            label: "More",
            items: [
              {
                to: "#",
                label: "Machine Learning",
              },
              {
                to: "#",
                label: "LLM Training",
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
            href: "https://github.com/dynamoose/dynamoose",
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
            title: "Cources",
            items: [
              {
                label: "LLM Training ",
                to: "/docs/intro",
              },
              {
                label: "Machine Learning ",
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
            title: "Follow Us",
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
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Contact Us",
                href: "https://twitter.com/docusaurus",
              },
              {
                label: "Contribute",
                to: "#",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open DeepLearning`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      announcementBar: {
        id: "banner",
        content:
          '<a target="_blank" class="banner" rel="noopener noreferrer" href="https://github.com/open-deeplearning/OpenML-Guide">Go give a ⭐ to Open DeepLearning on GitHub!</a>',
        backgroundColor: "#0BA37F",
        textColor: "#000",
        isCloseable: true,
      },
    }),
};

export default config;
