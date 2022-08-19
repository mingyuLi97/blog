import { defineConfig, DefaultTheme } from 'vitepress';
import path from 'path';
import glob from 'glob';
import pathToTitle from './pathToTitle.json';

const DOCS_DIR = path.resolve(process.cwd(), 'docs');

type DocCategory = 'knowledge' | 'leetCode';

export default defineConfig({
  markdown: {
    theme: 'one-dark-pro'
  },
  base: '/blog/',
  title: '莱米',
  description: '莱米的个人博客',
  themeConfig: {
    siteTitle: 'limy-blog',
    logo: '/logo.jpg',
    nav: [
      { text: '知识树', link: '/knowledge/html/h5' },
      { text: '我的掘金', link: 'https://juejin.cn/user/2383396941081934' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/mingyuLi97'
      }
    ],
    sidebar: {
      '/knowledge/': sidebarKnowledge()
    }
  }
});

function sidebarKnowledge(): DefaultTheme.SidebarGroup[] {
  const config = [
    { text: 'HTML', target: 'html', collapsible: true, collapsed: false },
    { text: 'CSS', target: 'css' },
    { text: 'JavaScript', target: 'js' },
    { text: '计算机网络', target: 'network' },
    { text: '浏览器', target: 'browser' }
  ];
  return config.map(
    ({ text, target, collapsible = true, collapsed = false }) => {
      return {
        collapsible,
        collapsed,
        text,
        items: genSideBarItems('knowledge', target)
      };
    }
  );
}

function genSideBarItems(
  category: DocCategory,
  target: string
): DefaultTheme.SidebarItem[] {
  const dirPath = path.resolve(DOCS_DIR, category, target);
  return glob.sync(dirPath + '/*.md').map((filePath: string) => {
    const name = filePath.match(/.+\/(.+)\.md/)?.[1];
    const link = `/${category}/${target}/${name}`;
    return {
      text: pathToTitle[link],
      link
    };
  });
}
