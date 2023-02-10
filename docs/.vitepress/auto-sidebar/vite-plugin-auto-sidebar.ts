import glob from 'glob';
import fs from 'fs';
import path from 'path';

import type { ViteDevServer, Plugin } from 'vite';
import type { DefaultTheme } from 'vitepress';
import type { AutoSidebarOptions, SidebarGroup } from './types';

const context = process.cwd();
const DOCS_DIR = path.resolve(context, 'docs');
const SIDEBAR_PATH = path.resolve(__dirname, 'sidebar.ts');
const titleCache: Record<string, string> = {};

export default function VitePluginAutoSidebar(
  options: AutoSidebarOptions = {}
) {
  const updateSidebar = () => {
    const content = `export default function() {
    return ${JSON.stringify(getSidebarConfig(options))};
  }`;
    fs.writeFileSync(SIDEBAR_PATH, content + '\n');
  };

  return <Plugin>{
    name: 'VitePluginAutoSidebar',
    configureServer: ({ watcher }: ViteDevServer) => {
      const fsWatcher = watcher.add('*.md');
      fsWatcher.on('all', (event, path) => {
        if (event === 'addDir') return;
        if (event === 'unlinkDir') return;
        if (event == 'add') return;
        if (event === 'unlink') {
          updateSidebar();
          return;
        }
        if (event === 'change') {
          const k = matchPath(path);
          const title = matchTitle(path);
          if (!k || !title) return;
          // 未更新 title
          if (title === titleCache[k]) return;
          updateSidebar();
          return;
        }
      });
    },
    buildStart() {
      updateSidebar();
    }
  };
}

function getPathTree(): Record<string, any> {
  const paths = glob.sync('**/*.md', {
    cwd: DOCS_DIR,
    ignore: ['public/**.md', 'index.md']
  });
  const tree = {};
  paths.forEach(p => {
    let node = tree;
    p.split(path.sep).forEach((k, index) => {
      if (!node[k]) {
        node[k] = {};
      }
      node = node[k];
    });
  });
  return tree;
}

function getSidebarConfig(options: AutoSidebarOptions) {
  const { resolveSidebarGroup = () => ({} as SidebarGroup) } = options;

  const tree = getPathTree();
  const sidebar: DefaultTheme.SidebarMulti = {};

  for (const level_1 of Object.keys(tree)) {
    const sidebarGroups: DefaultTheme.SidebarGroup[] = [];
    // 第一级目录的 key 需要特殊处理
    sidebar[`/${level_1}/`] = sidebarGroups;
    // 处理二级目录
    for (const level_2 of Object.keys(tree[level_1])) {
      // 因为第二级目录有一些配置参数，所以允许用户自定义配置
      // 相对路径 knowledge/css
      const userConfig = resolveSidebarGroup(`${level_1}/${level_2}`) || {};
      const config = {
        collapsible: true,
        collapsed: false,
        text: level_2,
        items: genSideBarItems(level_1, level_2),
        ...userConfig
      };
      if (typeof userConfig.after === 'function') {
        userConfig.after(config);
      }
      delete config.after;
      sidebarGroups.push(config);
    }
  }
  return sidebar;
}

function genSideBarItems(
  category: string,
  target: string
): DefaultTheme.SidebarItem[] {
  const dirPath = path.resolve(DOCS_DIR, category, target);
  return glob.sync(dirPath + '/*.md').map((filePath: string) => {
    const name = filePath.match(/.+\/(.+)\.md/)?.[1];
    const link = `/${category}/${target}/${name}`;
    const text = matchTitle(filePath);
    titleCache[link] = text;
    return {
      text,
      link
    };
  });
}

function matchPath(p: string) {
  const m = p.match(/blog\/docs(.*).md/);
  return m ? m[1] : null;
}

function matchTitle(p: string) {
  const content = fs.readFileSync(p, 'utf-8');
  return ((content.match(/^#(.*)\n?/) || [])[1] || '').trim();
}
