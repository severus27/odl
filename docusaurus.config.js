import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpenDeepLearning",
  tagline: "Deep Learning is cool",
  favicon: "img/favicon.png",

  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  organizationName: "Open-DeepLearning", // Usually your GitHub org/user name.
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
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      }),
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
  themes: ["@docusaurus/theme-live-codeblock"],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
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
          src: "img/logo.png",
          srcDark: "img/logo.png",
        },
        hideOnScroll: true,
        items: [
          { to: "/courses", label: "Courses", position: "left" },
          { to: "/resources", label: "Resources", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            label: "Community",
            items: [
              {
                to: "/about",
                label: "About Us",
              },
              {
                to: "#",
                label: "Events",
              },
              {
                to: "#",
                label: "Competitions",
              },
              {
                to: "#",
                label: "Contributing",
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
            href: "https://discord.gg/QWYF9nVy",
            className: "header-link header-discord-link",
            "aria-label": "Discord",
            position: "right",
          },
          // {
          //   href: "https://twitter.com/Open_DL_AI",
          //   className: "header-link header-twitter-link",
          //   "aria-label": "Twitter",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Learn",
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
                label: "Reddit",
                href: "https://www.reddit.com/r/opendeeplearning/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/QWYF9nVy",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@Open_DeepLearning",
              },
              {
                label: "Hugging Face",
                href: "https://huggingface.co/OpenDeepLearning",
              },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/open-deeplearning",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/opendeeplearning",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/opendeeplearning/",
              },
              {
                label: "X (Twitter)",
                href: "https://twitter.com/Open_DL_AI",
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
          '<a target="_blank" class="banner" rel="noopener noreferrer" href="https://github.com/open-deeplearning/opendeeplearning">Go give a ⭐ to OpenDeepLearning on GitHub!</a>',
        backgroundColor: "#24C19F",
        textColor: "#000",
        isCloseable: true,
      },
    }),
};

export default config;
