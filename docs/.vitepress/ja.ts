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
            { text: 'HTML でふりがなを付ける（ruby）', link: '/ja/markup/ruby' },
            { text: 'レスポンシブで縦横比を固定する', link: '/ja/markup/responsive-ratio' },
            { text: '文字内にスポットライトが動くアニメーション', link: '/ja/markup/animation-spotlight' },
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
            {
              text: 'JavaScript',
              items: [
                { text: 'サンプルコード - JavaScriptでドロップダウンアニメーションを作る', link: '/ja/frontend/collapse' },
              ]
            },
            {
              text: 'Building Tools',
              items: [
                { text: 'Vite - ビルドされたファイル名にあるハッシュ値を取る', link: '/ja/frontend/vite_hash' },
                { text: 'Vite - ビルドされた assets フォルダーの中身をファイルの種類ごとに分ける', link: '/ja/frontend/vite_output-assets' },
              ]              
            }
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
            { text: 'WordPress - 投稿の新規追加ボタンを非表示する', link: '/ja/wp/disable-create-newpost' },
            { text: 'WordPress - headタグの中身のサンプルコード', link: '/ja/wp/head' },
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
              text: 'サーバー構築',
              items: [
                { text: 'UbuntuでApacheサーバーをローカルで構築する手順', link: '/ja/server/ubuntu-apache-local' },
              ]
            },
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