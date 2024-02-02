import { navbar } from 'vuepress-theme-hope'
import { version } from '../meta.js'

export const enNavbar = navbar([
  {
    text: 'Guide',
    icon: 'fa6-solid:lightbulb',
    children: [
      '/guide/introduction.md',
      '/guide/getting-started.md',
      '/guide/configuration.md',
      '/guide/page.md',
      '/guide/markdown.md',
      '/guide/assets.md',
      '/guide/i18n.md',
      '/guide/deployment.md',
      '/guide/theme.md',
      '/guide/plugin.md',
      '/guide/bundler.md',
      '/guide/migration.md',
      '/guide/troubleshooting.md',
    ],
  },
  {
    text: 'Reference',
    icon: 'fa6-solid:book',
    prefix: '/reference/',
    children: [
      {
        text: 'VuePress',
        children: [
          {
            text: 'CLI',
            icon: 'bi:terminal-fill',
            link: 'cli.html',
          },
          'config',
          'frontmatter',
          'components',
          'plugin-api',
          'theme-api',
          'client-api',
          'node-api',
        ],
      },
      {
        text: 'Bundlers',
        prefix: 'bundler/',
        children: ['vite', 'webpack'],
      },
    ],
  },

  {
    text: 'Learn More',
    icon: 'fa6-solid:feather',
    children: [
      {
        text: 'Advanced',
        prefix: '/advanced/',
        children: [
          'architecture',
          'plugin',
          'theme',
          {
            text: 'Cookbook',
            link: 'cookbook/',
          },
        ],
      },
      {
        text: 'Resources',
        children: [
          {
            text: 'Official Ecosystem',
            link: 'https://ecosystem.vuejs.press/',
          },
          {
            text: 'VuePress MarketPlace',
            link: 'https://marketplace.vuejs.press',
          },
          {
            text: 'Contributing Guide',
            link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING.md',
          },
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    icon: 'fa6-solid:tag',
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        icon: 'fa6-brands:vuejs',
        link: 'https://v1.vuepress.vuejs.org',
      },
      {
        text: 'v0.x',
        icon: 'fa6-brands:vuejs',
        link: 'https://v0.vuepress.vuejs.org',
      },
    ],
  },
])
