import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/guide/': [
    {
      text: 'Guide',
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
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      icon: 'fa6-solid:gem',
      children: ['architecture', 'plugin', 'theme'],
    },
    {
      text: 'Cookbook',
      icon: 'fa6-solid:signs-post',
      prefix: 'cookbook/',
      children: [
        '',
        'usage-of-client-config',
        'adding-extra-pages',
        'making-a-theme-extendable',
        'passing-data-to-client-code',
        'markdown-and-vue-sfc',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'VuePress Reference',
      icon: 'fa6-brands:vuejs',
      collapsible: true,
      children: [
        'cli',
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
      text: 'Bundlers Reference',
      icon: 'fa6-solid:boxes-packing',
      prefix: 'bundler/',
      collapsible: true,
      children: ['vite', 'webpack'],
    },
    {
      text: 'Official Ecosystem',
      icon: 'fa6-solid:leaf',
      link: 'https://ecosystem.vuejs.press/',
    },
    {
      text: 'VuePress MarketPlace',
      icon: 'fa6-solid:cart-shopping',
      link: 'https://marketplace.vuejs.press',
    },
  ],
})
