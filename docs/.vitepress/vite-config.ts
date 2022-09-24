import path from 'path';
import { DefaultTheme, UserConfig } from 'vitepress';
const COMPONENTS_DIR = path.resolve(process.cwd(), 'components');

export function getViteConfig() {
  return {
    server: {
      open: true
    },
    resolve: {
      alias: {
        '@components': COMPONENTS_DIR
      }
    }
  } as UserConfig<DefaultTheme.Config>['vite'];
}
