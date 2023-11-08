import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = 'https://deanocean.github.io/vitepress-blog/ja/'
export const META_TITLE = 'Tech Blog'
export const META_DESCRIPTION = 'Web技術ブログ'

export const jaConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
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
      label: '目次',
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/ja/' },
      { text: 'About', link: '/ja/about' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'このサイトについて', link: '/ja/about' },
        ]
      },
      // {
      //   text: 'Nuxt',
      //   items: [
      //     { text: 'Nuxt で TypeScript のglobal interface を使う', link: '/ja/nuxt_ts-global' },
      //   ]
      // },
      {
        text: 'Movable Type',
        items: [
          { text: 'Movable Type 勉強マニュアル', link: '/ja/mt_learn' },
        ]
      }
    ],
    
  },
}