export default {
  '/book-note/': [
    {
      collapsible: true,
      collapsed: false,
      text: 'Vue.js设计与实现',
      items: [
        { text: '第一章：权衡的艺术', link: 'book-note/vuejs-design/1' },
        {
          text: '第二章：框架设计的核心要素',
          link: 'book-note/vuejs-design/2'
        },
        { text: '第三章：设计思路', link: 'book-note/vuejs-design/3' },
        {
          text: '第四章：响应系统的作用与实现',
          link: 'book-note/vuejs-design/4'
        },
        {
          text: '第五章：非原始值的响应式方案',
          link: 'book-note/vuejs-design/5'
        },
        {
          text: '第六章：原始值的响应式方案',
          link: 'book-note/vuejs-design/6'
        },
        { text: '第七章：渲染器的设计', link: 'book-note/vuejs-design/7' },
        { text: '第八章：挂载与更新', link: 'book-note/vuejs-design/8' },
        {
          text: '第十二章：组件的实现原理',
          link: 'book-note/vuejs-design/z12'
        },
        { text: '第十四章：内建组件和模块', link: 'book-note/vuejs-design/z14' }
      ]
    }
  ],
  '/design/': [
    {
      collapsible: true,
      collapsed: false,
      text: '数据结构',
      items: [{ text: '链表', link: 'design/data-structure/linked_list' }]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '设计模式',
      items: [
        { text: '观察者模式', link: 'design/design-pattern/observer' },
        {
          text: '发布订阅模式',
          link: 'design/design-pattern/publishers_subscribers'
        },
        { text: '访问者模式', link: 'design/design-pattern/visitor' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '思想',
      items: [{ text: '如何写一个 Vue 组件', link: 'design/experience/comp' }]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '力扣',
      items: [
        { text: '300. 最长递增子序列', link: 'design/leetcode/LIS' },
        { text: 'LRU', link: 'design/leetcode/LRU' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '排序算法',
      items: [
        { text: '选择排序', link: 'design/sort/selectionSort' },
        { text: '归并合并', link: 'design/sort/mergeSort' },
        { text: '插入排序', link: 'design/sort/insertionSort' },
        { text: '堆排序', link: 'design/sort/heapSort' },
        { text: '冒泡排序', link: 'design/sort/bubbleSort' },
        { text: '排序', link: 'design/sort/index' }
      ]
    }
  ],
  '/engineer/': [
    {
      collapsible: true,
      collapsed: false,
      text: 'babel',
      items: [
        { text: 'Babel', link: 'engineer/babel/babel' },
        {
          text: '@babel/plugin-transform-runtime',
          link: 'engineer/babel/plugin-transform-runtime'
        },
        { text: '@babel/preset-env', link: 'engineer/babel/preset-env' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'git',
      items: [{ text: 'git', link: 'engineer/git/index' }]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '工具',
      items: [
        { text: 'Esbuild', link: 'engineer/packages/esbuild' },
        { text: 'ffmpeg', link: 'engineer/packages/ffmpeg' },
        { text: 'yalc', link: 'engineer/packages/yalc' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'rollup',
      items: [{ text: 'rollup', link: 'engineer/rollup/index' }]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '前端标准',
      items: [{ text: '模块化', link: 'engineer/stander/module' }]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'webpack',
      items: [
        { text: '打包流程', link: 'engineer/webpack/build_flow' },
        { text: '配置', link: 'engineer/webpack/index' }
      ]
    }
  ],
  '/interview/': [
    {
      collapsible: true,
      collapsed: false,
      text: '看输出',
      items: [
        { text: '事件循环', link: 'interview/for_output/event-loop' },
        { text: '原型和原型链', link: 'interview/for_output/proto' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '手写题',
      items: [
        {
          text: 'apply、call、bind',
          link: 'interview/handwriting/apply-call-bind'
        },
        { text: '函数柯里化', link: 'interview/handwriting/currying' },
        { text: '防抖、节流', link: 'interview/handwriting/debounce-throttle' },
        { text: '深拷贝', link: 'interview/handwriting/deepClone' }
      ]
    },
    { collapsible: true, collapsed: false, text: 'index.md', items: [] },
    {
      collapsible: true,
      collapsed: false,
      text: 'JavaScript',
      items: [{ text: '事件循环', link: 'interview/js/event-loop' }]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '基础',
      items: [
        { text: '常见问题', link: 'interview/other/index' },
        { text: '前端页面优化', link: 'interview/other/optimize' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'Vue',
      items: [{ text: 'vue 相关面试题', link: 'interview/vue/index' }]
    }
  ],
  '/knowledge/': [
    {
      collapsible: true,
      collapsed: false,
      text: '浏览器',
      items: [
        { text: '浏览器缓存', link: 'knowledge/browser/cache' },
        { text: '跨域', link: 'knowledge/browser/cross-domain' },
        { text: '事件循环 EventLoop', link: 'knowledge/browser/event_loop' },
        { text: '浏览器多进程架构', link: 'knowledge/browser/framework' },
        { text: '垃圾回收机制', link: 'knowledge/browser/gc' },
        { text: 'JsBridge', link: 'knowledge/browser/jsBridge' },
        {
          text: 'preload、prefetch、preconnect、dns-prefetch',
          link: 'knowledge/browser/preload'
        },
        { text: '渲染流程', link: 'knowledge/browser/render' },
        { text: '重绘 - 回流', link: 'knowledge/browser/repaint_reflow' },
        { text: '服务端渲染（SSR）', link: 'knowledge/browser/ssr' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'CSS',
      items: [
        { text: 'BEM', link: 'knowledge/css/bem' },
        { text: 'BFC', link: 'knowledge/css/bfc' },
        { text: '盒模型', link: 'knowledge/css/box' },
        { text: 'flex', link: 'knowledge/css/flex' },
        { text: '移动端布局单位', link: 'knowledge/css/px' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'HTML',
      items: [
        { text: '基础', link: 'knowledge/html/basic' },
        { text: '搜索引擎优化（SEO）', link: 'knowledge/html/seo' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'JavaScript',
      items: [
        { text: '箭头函数', link: 'knowledge/js/arrow_function' },
        { text: 'apply、call、bind', link: 'knowledge/js/call_apply_bind' },
        { text: 'addEventListener', link: 'knowledge/js/event' },
        { text: 'ES6 Generator', link: 'knowledge/js/generator' },
        { text: 'Set 和 Map 数据结构', link: 'knowledge/js/map_set' },
        { text: 'new 操作符', link: 'knowledge/js/new' },
        { text: 'Promise', link: 'knowledge/js/promise' },
        { text: '原型和原型链', link: 'knowledge/js/proto' },
        { text: 'Proxy、Reflect', link: 'knowledge/js/proxy' },
        { text: 'Symbol', link: 'knowledge/js/symbol' },
        { text: 'JS 中 this 的五种情况', link: 'knowledge/js/this' },
        { text: '数据类型检测', link: 'knowledge/js/typeof' },
        { text: 'var、let、const', link: 'knowledge/js/var' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: '计算机网络',
      items: [
        { text: 'Content-Type', link: 'knowledge/network/content-type' },
        {
          text: 'Cookie、Session、Token、JWT',
          link: 'knowledge/network/cookie_session_token'
        },
        { text: 'DNS', link: 'knowledge/network/dns' },
        { text: 'http 状态码', link: 'knowledge/network/http-code' },
        { text: 'HTTP', link: 'knowledge/network/http' },
        { text: 'HTTPS', link: 'knowledge/network/https' },
        { text: '网络安全', link: 'knowledge/network/security' },
        { text: '传输协议 TCP 和 UDP', link: 'knowledge/network/tcp-udp' },
        { text: 'WebSocket', link: 'knowledge/network/websocket' }
      ]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'TypeScript',
      items: [{ text: '类型', link: 'knowledge/ts/index' }]
    },
    {
      collapsible: true,
      collapsed: false,
      text: 'Vue',
      items: [
        { text: '概念', link: 'knowledge/vue/basic' },
        { text: '组件通信', link: 'knowledge/vue/communication' },
        { text: 'diff 算法', link: 'knowledge/vue/diff' },
        { text: '指令', link: 'knowledge/vue/directive' },
        { text: 'keep-alive', link: 'knowledge/vue/keepalive' },
        { text: '生命周期', link: 'knowledge/vue/lifecycle' },
        { text: 'nextTick', link: 'knowledge/vue/nextTick' },
        { text: 'Pinia', link: 'knowledge/vue/pinia' },
        { text: 'Slot', link: 'knowledge/vue/slot' },
        { text: '模版解析', link: 'knowledge/vue/templateCompiler' },
        { text: 'v-model', link: 'knowledge/vue/v-model' },
        { text: 'vuex', link: 'knowledge/vue/vuex' },
        { text: 'watcher', link: 'knowledge/vue/watcher' }
      ]
    }
  ]
};
