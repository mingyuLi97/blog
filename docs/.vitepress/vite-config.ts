import path from 'path';
const COMPONENTS_DIR = path.resolve(process.cwd(), 'components');
import VitePluginAutoSidebar from '@limy-org/vite-plugin-vitepress-auto-sidebar';
import { DefaultTheme, UserConfig } from 'vitepress';

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
        root: path.resolve(process.cwd(), 'docs'),
        ignores: [''],
        sidebarResolved(sidebar) {
          const map: Record<
            string,
            { text: string; sort?: (a: any, b: any) => number } | string
          > = {
            'book-note/vuejs-design': 'Vue.js设计与实现',
            'design/data-structure': '数据结构',
            'design/design-pattern': '设计模式',
            'design/sort': {
              text: '排序算法',
              sort: (a, b) => (a.text === '排序' ? -1 : 1)
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

          for (const key of Object.keys(map)) {
            let value = map[key];
            value = typeof value === 'string' ? { text: value } : value;
            const parts = key.split('/');
            const f1 = '/' + parts[0] + '/';
            for (const idx in sidebar[f1]) {
              if (sidebar[f1][idx].text === parts[1]) {
                if (value.sort) {
                  sidebar[f1][idx].items?.sort(value.sort);
                  delete value.sort;
                }
                sidebar[f1][idx] = {
                  ...sidebar[f1][idx],
                  ...value
                };
              }
            }
          }
        }
      })
    ]
  } as UserConfig<DefaultTheme.Config>['vite'];
}
