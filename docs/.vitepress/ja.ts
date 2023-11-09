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
      { text: 'Markup', link: '/ja/markup/' },
      { text: 'Front-End', link: '/ja/frontend/' },
      { text: 'WordPress', link: '/ja/wp/' },
      { text: 'MovableType', link: '/ja/mt/' },
      { text: 'Server', link: '/ja/server/' },
      { text: 'About', link: '/ja/about' }
    ],

    sidebar: {
      '/ja/markup/': [
        {
          text: 'Markup',
          items: [
            // {
            //   text: 'HTML',
            //   items: [
            //     // { text: '', link: '/ja/markup/xxx' },
            //   ]
            // },
            // {
            //   text: 'CSS',
            //   items: [
            //     // { text: '', link: '/ja/markup/xxx' },
            //   ]
            // },
          ]
        },
      ],
      '/ja/frontend/': [
        {
          text: 'Front-End',
          items: [
            // {
            //   text: 'JavaScript',
            //   items: [
            //     // { text: '', link: '/ja/frontend/xxx' },
            //   ]
            // },
            // {
            //   text: 'TypeScript',
            //   items: [
            //     // { text: '', link: '/ja/frontend/xxx' },
            //   ]
            // },
            // {
            //   text: 'Vue.js',
            //   items: [
            //     // { text: '', link: '/ja/frontend/xxx' },
            //   ]
            // },
            // {
            //   text: 'Nuxt.js',
            //   items: [
            //     // { text: 'Nuxt で TypeScript のglobal interface を使う', link: '/ja/frontend/nuxt_ts-global' },
            //   ]
            // },
          ]
        },
      ],
      '/ja/wp/': [
        {
          text: 'WordPress',
          items: [
            // { text: 'Movable Type 勉強マニュアル', link: '/ja/mt/mt_learn' },
          ]
        },
      ],
      '/ja/mt/': [
        {
          text: 'MovableType',
          items: [
            { text: 'Movable Type 勉強マニュアル', link: '/ja/mt/mt_learn' },
          ]
        },
      ],
      '/ja/server/': [
        {
          text: 'Server',
          items: [
            {
              text: 'さくらサーバー',
              items: [
                { text: 'サブドメインにテストサイトのWordPressを移行する', link: '/ja/server/sakura_subdomain' },
              ]
            },
          ]
        }
      ]
    },
    
  },
}