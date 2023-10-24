import { defineConfig } from 'vitepress'
import { zhConfig } from './zh'
import { jaConfig } from './ja'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blog/',
  title: "Tech Blog",
  description: "Knowledge for Web, Front-End, Back-End, Server...",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Examples', link: '/examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/deanocean' }
    ],
    
    search: {
      provider: 'local'
    },
  },
  locales: {
    root: {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/',
      ...zhConfig
    },
    ja: {
      label: '日本語',
      lang: 'ja', // optional, will be added  as `lang` attribute on `html` tag
      link: '/ja/', // default /ja/ -- shows on navbar translations menu, can be external
      ...jaConfig
    }
  }
})
