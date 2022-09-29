import path from 'path';
import glob from 'glob';
import pathToTitle from './pathToTitle.json';
import { DefaultTheme } from 'vitepress';

const DOCS_DIR = path.resolve(process.cwd(), 'docs');

type DocCategory = 'knowledge' | 'interview' | 'design' | 'engineer';

type SidebarGroupConfig = Omit<DefaultTheme.SidebarGroup, 'items'> & {
  subcategory: string;
};

export function getSidebarConfig() {
  return {
    '/knowledge/': sidebarKnowledge(),
    '/interview/': sidebarInterview(),
    '/engineer/': sidebarEngineer(),
    '/design/': sidebarDesign()
  };
}
/**
 * 基础知识
 */
function sidebarKnowledge(): DefaultTheme.SidebarGroup[] {
  return genSideBarGroup('knowledge', [
    { text: 'HTML', subcategory: 'html', collapsible: true, collapsed: false },
    { text: 'CSS', subcategory: 'css' },
    { text: 'JavaScript', subcategory: 'js' },
    { text: 'TypeScript', subcategory: 'ts' },
    { text: 'Vue', subcategory: 'vue' },
    { text: '计算机网络', subcategory: 'network' },
    { text: '浏览器', subcategory: 'browser' }
  ]);
}

/**
 * 面试题
 */
function sidebarInterview(): DefaultTheme.SidebarGroup[] {
  return genSideBarGroup('interview', [
    { text: '基础', subcategory: 'other' },
    { text: 'JavaScript', subcategory: 'js' },
    { text: '手写题', subcategory: 'handwriting' },
    { text: '看输出', subcategory: 'for_output' },
    { text: 'Vue', subcategory: 'vue' }
  ]);
}

/**
 * 工程化
 */
function sidebarEngineer(): DefaultTheme.SidebarGroup[] {
  return genSideBarGroup('engineer', [
    { text: '工具', subcategory: 'packages' },
    { text: '前端标准', subcategory: 'stander' }
  ]);
}

/**
 * 编程思想
 */
function sidebarDesign(): DefaultTheme.SidebarGroup[] {
  return genSideBarGroup('design', [
    { text: '数据结构', subcategory: 'data-structure' },
    { text: '设计模式', subcategory: 'design-pattern' },
    { text: '排序算法', subcategory: 'sort' }
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
