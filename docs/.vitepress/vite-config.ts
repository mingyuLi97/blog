import path from 'path';
import { DefaultTheme, UserConfig } from 'vitepress';
const COMPONENTS_DIR = path.resolve(process.cwd(), 'components');
import VitePluginAutoSidebar, { SidebarGroup } from './auto-sidebar';

export function getViteConfig() {
  return {
    server: {
      open: true,
      hmr: {}
    },
    resolve: {
      alias: {
        '@components': COMPONENTS_DIR
      }
    },
    plugins: [
      VitePluginAutoSidebar({
        resolveSidebarGroup(id) {
          const map: Record<string, SidebarGroup> = {
            'book-note/vuejs-design': { text: 'Vue.js设计与实现' },
            'design/data-structure': { text: '数据结构' },
            'design/design-pattern': { text: '设计模式' },
            'design/sort': {
              text: '排序算法',
              after(config) {
                config.items.sort((a, b) => {
                  return a.text === '排序' ? 1 : -1;
                });
              }
            },
            'design/experience': { text: '思想' },
            'design/leetcode': { text: '力扣' },
            'engineer/packages': { text: '工具' },
            'engineer/stander': { text: '前端标准' },
            'interview/other': { text: '基础' },
            'interview/js': { text: 'JavaScript' },
            'interview/handwriting': { text: '手写题' },
            'interview/for_output': { text: '看输出' },
            'interview/vue': { text: 'Vue' },
            'knowledge/browser': { text: '浏览器' },
            'knowledge/html': { text: 'HTML' },
            'knowledge/css': { text: 'CSS' },
            'knowledge/js': { text: 'JavaScript' },
            'knowledge/ts': { text: 'TypeScript' },
            'knowledge/vue': { text: 'Vue' },
            'knowledge/network': { text: '计算机网络' }
          };
          return map[id];
        }
      })
    ]
  } as UserConfig<DefaultTheme.Config>['vite'];
}
