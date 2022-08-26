import { defineConfig, DefaultTheme } from 'vitepress';
import path from 'path';
import glob from 'glob';
import pathToTitle from './pathToTitle.json';

const DOCS_DIR = path.resolve(process.cwd(), 'docs');
const COMPONENTS_DIR = path.resolve(process.cwd(), 'components');

type DocCategory = 'knowledge' | 'interview' | 'leetCode' | 'engineer';

type SidebarGroupConfig = Omit<DefaultTheme.SidebarGroup, 'items'> & {
  subcategory: string;
};

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': COMPONENTS_DIR
      }
    }
  },
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
      { text: '基础知识', link: '/knowledge/html/basic' },
      { text: '工程化', link: '/engineer/packages/yalc' },
      { text: '面试题', link: '/interview/js/event-loop' },
      { text: '我的掘金', link: 'https://juejin.cn/user/2383396941081934' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/mingyuLi97'
      }
    ],
    sidebar: {
      '/knowledge/': sidebarKnowledge(),
      '/interview/': sidebarInterview(),
      '/engineer/': sidebarEngineer()
    }
  }
});

function sidebarKnowledge(): DefaultTheme.SidebarGroup[] {
  return genSideBarGroup('knowledge', [
    { text: 'HTML', subcategory: 'html', collapsible: true, collapsed: false },
    { text: 'CSS', subcategory: 'css' },
    { text: 'JavaScript', subcategory: 'js' },
    { text: 'Vue', subcategory: 'vue' },
    { text: '计算机网络', subcategory: 'network' },
    { text: '浏览器', subcategory: 'browser' }
  ]);
}

function sidebarInterview(): DefaultTheme.SidebarGroup[] {
  return genSideBarGroup('interview', [
    { text: '基础', subcategory: 'other' },
    { text: 'JavaScript', subcategory: 'js' },
    { text: '手写题', subcategory: 'handwriting' },
    { text: '看输出', subcategory: 'for_output' }
  ]);
}

function sidebarEngineer(): DefaultTheme.SidebarGroup[] {
  return genSideBarGroup('engineer', [
    { text: '工具', subcategory: 'packages' }
  ]);
}

function genSideBarGroup(category: DocCategory, config: SidebarGroupConfig[]) {
  return config.map(
    ({ text, subcategory, collapsible = true, collapsed = false }) => {
      return {
        collapsible,
        collapsed,
        text,
        items: genSideBarItems(category, subcategory)
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
