import { defineConfig, DefaultTheme } from "vitepress";

export default defineConfig({
  title: "莱米",
  description: "莱米的个人博客",
  themeConfig: {
    siteTitle: "limy-blog",
    logo: "/logo.jpg",
    nav: [
      { text: "知识树", link: "/knowledge/" },
      { text: "我的掘金", link: "https://juejin.cn/user/2383396941081934" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mingyuLi97",
      },
    ],
    sidebar: {
      "/knowledge/": sidebarKnowledge(),
    },
  },
});

function sidebarKnowledge(): DefaultTheme.SidebarGroup[] {
  return [
    {
      // text: "HTML",
      collapsed: true,
      // collapsible: true,
      items: [
        {
          text: "HTML",
          link: "/knowledge/html/",
        },
      ],
    },
    {
      // text: 'CSS',
      items: [
        {
          text: "CSS",
          link: "/knowledge/css/",
        },
      ],
    },
    {
      text: "JavaScript",
      items: [
        { text: "数据类型检测", link: "/knowledge/js/typeof" },
        { text: "this", link: "/knowledge/js/this" },
        { text: "事件冒泡", link: "/knowledge/js/event" },
      ],
    },
    {
      text: "计算机网络",
      items: [
        { text: "ContentType", link: "/knowledge/network/content-type" },
        { text: "http 状态码", link: "/knowledge/network/http-code" },
      ],
    },
  ];
}
