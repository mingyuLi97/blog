import type { DefaultTheme } from 'vitepress';

export type SidebarGroup = Omit<DefaultTheme.SidebarGroup, 'items'> & {
  after?: (sidebarGroup: DefaultTheme.SidebarGroup) => void;
};

export interface AutoSidebarOptions {
  resolveSidebarGroup?: (id: string) => SidebarGroup | undefined;
  docsPath?: string;
}
