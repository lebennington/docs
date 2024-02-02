import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/introduction.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/configuration.md',
        '/zh/guide/page.md',
        '/zh/guide/markdown.md',
        '/zh/guide/assets.md',
        '/zh/guide/i18n.md',
        '/zh/guide/deployment.md',
        '/zh/guide/theme.md',
        '/zh/guide/plugin.md',
        '/zh/guide/bundler.md',
        '/zh/guide/migration.md',
        '/zh/guide/troubleshooting.md',
      ],
    },
  ],
  '/zh/advanced/': [
    {
      text: '深入',
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
  '/zh/reference/': [
    {
      text: 'VuePress 参考',
      icon: 'fa6-brands:vuejs',
      collapsible: true,
      children: [
        '/zh/reference/cli',
        '/zh/reference/config',
        '/zh/reference/frontmatter',
        '/zh/reference/components',
        '/zh/reference/plugin-api',
        '/zh/reference/theme-api',
        '/zh/reference/client-api',
        '/zh/reference/node-api',
      ],
    },
    {
      text: '打包工具参考',
      icon: 'fa6-solid:boxes-packing',
      prefix: 'bundler/',
      collapsible: true,
      children: ['vite', 'webpack'],
    },
    {
      text: '官方生态系统',
      link: 'https://ecosystem.vuejs.press/zh/',
    },
    {
      text: 'VuePress 市场',
      icon: 'fa6-solid:cart-shopping',
      link: 'https://marketplace.vuejs.press/zh/',
    },
  ],
})
