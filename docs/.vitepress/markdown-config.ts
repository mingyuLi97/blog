import { DefaultTheme, UserConfig } from 'vitepress';

export function getMarkDownConfig() {
  return {
    theme: 'one-dark-pro',
    anchor: {
      // permalink: anchor.permalink.headerLink()
    }
    // toc: { level: [2] }
  } as UserConfig<DefaultTheme.Config>['markdown'];
}
