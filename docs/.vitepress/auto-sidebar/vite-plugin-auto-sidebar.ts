import glob from 'glob';
import fs from 'fs';
import path from 'path';

import type { ViteDevServer, Plugin } from 'vite';
import type { DefaultTheme } from 'vitepress';
import type { AutoSidebarOptions, SidebarGroup } from './types';

const context = process.cwd();
const ROOT = path.resolve(context, 'docs');
const SIDEBAR_PATH = path.resolve(__dirname, 'sidebar.ts');
const titleCache: Record<string, string> = {};

/**
 * 获取基于 ROOT 的全路径
 */
function getFullPath(...args: string[]) {
  return path.resolve(ROOT, ...args);
}

function getRelativePath(p: string) {
  return path.relative(ROOT, p);
}

function pathToRoute(p: string) {
  return getRelativePath(p).replace('.md', '');
}

export default function VitePluginAutoSidebar(
  options: AutoSidebarOptions = {}
) {
  const updateSidebar = () => {
    const config = getSidebarConfig(options);
    fs.writeFileSync(SIDEBAR_PATH, `export default ${JSON.stringify(config)};`);
  };
  updateSidebar();

  return <Plugin>{
    name: 'VitePluginAutoSidebar',
    configureServer: ({ watcher }: ViteDevServer) => {
      const fsWatcher = watcher.add('*.md');
      fsWatcher.on('all', (event, filePath) => {
        if (event === 'addDir') return;
        if (event === 'unlinkDir') return;
        if (event == 'add') return;
        if (event === 'unlink') {
          updateSidebar();
          return;
        }
        if (event === 'change') {
          const route = pathToRoute(filePath);
          const title = matchTitle(filePath);
          if (!route || !title) return;
          // 未更新 title
          if (title === titleCache[route]) return;
          updateSidebar();
          return;
        }
      });
    }
  };
}

function getPathTree(): Record<string, any> {
  const paths = glob.sync('**/*.md', {
    cwd: ROOT,
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
      const res = resolveSidebarGroup(`${level_1}/${level_2}`);
      let userConfig: SidebarGroup = {};
      if (res) {
        userConfig = typeof res === 'string' ? { text: res } : res;
      }

      const config = {
        collapsible: true,
        collapsed: false,
        text: level_2,
        items: genSideBarItems(getFullPath(level_1, level_2)),
        ...userConfig
      };
      if (typeof userConfig.after === 'function') {
        userConfig.after(config);
      }
      delete config.after;
      sidebarGroups.push(config);
    }
  }
  console.log(`[vite-plugin-auto-sidebar] `, titleCache);
  return sidebar;
}

function genSideBarItems(dirPath: string): DefaultTheme.SidebarItem[] {
  return glob.sync(dirPath + '/*.md').map((filePath: string) => {
    const route = pathToRoute(filePath);
    const text = matchTitle(filePath);
    titleCache[route] = text;
    return {
      text,
      link: route
    };
  });
}

function matchTitle(p: string) {
  const content = fs.readFileSync(p, 'utf-8');
  return ((content.match(/^#(.*)\n?/) || [])[1] || '').trim();
}
