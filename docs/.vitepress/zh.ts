import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = 'https://deanocean.github.io/vitepress-blog/ja/'
export const META_TITLE = 'Tech Blog'
export const META_DESCRIPTION = 'Web技術ブログ'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],
  themeConfig: {
    outline: {
      label: '本頁內容',
    },

    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '關於本站', link: '/about' },
        ]
      }
    ],
    
  },
}