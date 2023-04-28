import { defineConfig, DefaultTheme } from 'vitepress';
import { withImgPreview } from './img-overlay';
import anchor from 'markdown-it-anchor';
import { getViteConfig } from './vite-config';
import { getMarkDownConfig } from './markdown-config';

const config = defineConfig({
  vite: getViteConfig(),
  markdown: getMarkDownConfig(),
  base: '/blog/',
  title: '莱米',
  lang: 'zh-CN',
  description: '莱米的个人博客',
  themeConfig: {
    siteTitle: 'limy-blog',
    logo: '/logo.jpg',
    nav: [
      { text: '基础知识', link: '/knowledge/html/basic' },
      { text: '编程思想', link: '/design/design-pattern/observer' },
      {
        text: 'Node.js',
        items: [
          {
            text: '工程化',
            link: '/engineer/packages/yalc'
          },
          {
            text: '基础',
            link: '/nodejs/basic/stream.md'
          }
        ]
      },
      { text: '读书笔记', link: '/book-note/vuejs-design/1' },
      {
        text: '手写题',
        link: 'https://mingyuli97.github.io/fe-code-challenges/'
      },
      // { text: '面试题', link: '/interview/index' },
      { text: '我的掘金', link: 'https://juejin.cn/user/2383396941081934' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/mingyuLi97'
      }
    ],
    algolia: {
      appId: 'H6NWHVLNUL',
      apiKey: 'a7233c5dfa7ed655817ff82d5e8dfa5c',
      indexName: 'vitepress-blog'
    }
  }
});

export default withImgPreview(config);
