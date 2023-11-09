import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = 'https://deanocean.github.io/vitepress-blog/'
export const META_TITLE = 'Tech Blog'
export const META_DESCRIPTION = '網頁技術分享'

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
      { text: 'Markup', link: '/markup/' },
      { text: 'Front-End', link: '/frontend/' },
      { text: 'WordPress', link: '/wp/' },
      { text: 'Server', link: '/server/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: {
      '/markup/': [
        {
          text: 'Markup',
          items: [
            { text: '前端切版學習資源彙整', link: '/markup/learn' },
            { text: '讓 iframe 可以響應式等比縮放', link: '/markup/iframe-ratio' },
          ]
        },
      ],
      '/frontend/': [
        {
          text: 'Front-End',
          items: [
            // {
            //   text: 'JavaScript',
            //   items: [
            //     // { text: '', link: '/frontend/xxx' },
            //   ]
            // },
            // {
            //   text: 'TypeScript',
            //   items: [
            //     // { text: '', link: '/frontend/xxx' },
            //   ]
            // },
            // {
            //   text: 'Vue.js',
            //   items: [
            //     // { text: '', link: '/frontend/xxx' },
            //   ]
            // },
            // {
            //   text: 'Nuxt.js',
            //   items: [
            //     // { text: 'Nuxt で TypeScript のglobal interface を使う', link: '/frontend/nuxt_ts-global' },
            //   ]
            // },
          ]
        },
      ],
      '/wp/': [
        {
          text: 'WordPress',
          items: [
            // { text: 'Movable Type 勉強マニュアル', link: '/mt/mt_learn' },
          ]
        },
      ],
      '/server/': [
        {
          text: 'Server',
          items: [
            // {
            //   text: 'さくらサーバー',
            //   items: [
            //     { text: 'サブドメインにテストサイトのWordPressを移行する', link: '/server/sakura_subdomain' },
            //   ]
            // },
          ]
        }
      ]
    },
    
  },
}