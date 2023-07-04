import{_ as e,o as a,c as i,U as t}from"./chunks/framework.3125349e.js";const m=JSON.parse('{"title":"Hybrid","description":"","frontmatter":{},"headers":[],"relativePath":"engineer/hybrid/index.md","filePath":"engineer/hybrid/index.md"}'),r={name:"engineer/hybrid/index.md"},l=t('<h1 id="hybrid" tabindex="-1">Hybrid <a class="header-anchor" href="#hybrid" aria-label="Permalink to &quot;Hybrid&quot;">​</a></h1><h2 id="hybrid-app-webview" tabindex="-1">Hybrid APP（Webview） <a class="header-anchor" href="#hybrid-app-webview" aria-label="Permalink to &quot;Hybrid APP（Webview）&quot;">​</a></h2><p>利用安卓和 iOS 上的 webview 容器，APP 能够执行 html、css 和 js 脚本，展示 web 页面。通过 JSBridge 完成 H5 与 Native 的双向通讯，从而赋予 H5 一定程度的原生能力。</p><h4 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h4><ul><li>跨平台（优）</li><li>开发周期短、成本低</li></ul><h4 id="劣势" tabindex="-1">劣势 <a class="header-anchor" href="#劣势" aria-label="Permalink to &quot;劣势&quot;">​</a></h4><ul><li>性能</li><li>input、video、audio 等安全限制</li><li>不能自定义 input 拉起的键盘</li></ul><h2 id="hybrid-app-native-ui" tabindex="-1">Hybrid APP (Native UI) <a class="header-anchor" href="#hybrid-app-native-ui" aria-label="Permalink to &quot;Hybrid APP (Native UI)&quot;">​</a></h2><p>在赋予 H5 原生 API 能力的基础上，进一步通过 JSBridge 将 js 解析成的虚拟节点树( Virtual DOM )传递到 Native 并使用原生渲染。</p><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202304092228775.png" alt=""></p><h4 id="优势-1" tabindex="-1">优势 <a class="header-anchor" href="#优势-1" aria-label="Permalink to &quot;优势&quot;">​</a></h4><ul><li>性能更高</li><li>突破 webview 安全限制</li><li>拥有更丰富的 native 能力</li></ul><h4 id="劣势-1" tabindex="-1">劣势 <a class="header-anchor" href="#劣势-1" aria-label="Permalink to &quot;劣势&quot;">​</a></h4><ul><li>布局是 css 的子集，会满足不了 Web 开发者日渐增长的需求</li><li>开发组件需要客户端支持，对前端要求高</li></ul><h2 id="小程序" tabindex="-1">小程序 <a class="header-anchor" href="#小程序" aria-label="Permalink to &quot;小程序&quot;">​</a></h2><p>通过更加定制化的 JSBridge，并使用双 WebView 双线程的模式隔离了 JS 逻辑与 UI 渲染，形成了特殊的开发模式，加强了 H5 与 Native 混合程度，提高了页面性能及开发体验。</p><h4 id="运行环境" tabindex="-1">运行环境 <a class="header-anchor" href="#运行环境" aria-label="Permalink to &quot;运行环境&quot;">​</a></h4><table><thead><tr><th>运行环境</th><th>逻辑层</th><th>渲染层</th></tr></thead><tbody><tr><td>iOS</td><td>JavaScriptCore</td><td>WKWebView</td></tr><tr><td>安卓</td><td>V8</td><td>chromium 定制内核</td></tr><tr><td>小程序开发者工具</td><td>NWJS</td><td>Chrome WebView</td></tr></tbody></table><h4 id="小程序双线程模型" tabindex="-1">小程序双线程模型 <a class="header-anchor" href="#小程序双线程模型" aria-label="Permalink to &quot;小程序双线程模型&quot;">​</a></h4><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202304092144292.png" alt=""></p><p>渲染线程：由多个 webview 实现（因为小程序中存在多个页面，即多个渲染线程</p><p>逻辑线程：JavascriptCore(ios) / V8(android)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>逻辑层和视图层不能直接通信必须通过 Native 层通信。</li><li>网络请求也由 Native 发送。</li><li>逻辑层和视图层之间的工作方式为：数据变更通过 setData 驱动视图更新；视图层交互触发事件，然后触发逻辑层的事件响应函数，函数中修改数据再次触发视图更新</li></ul></div><h4 id="优势-2" tabindex="-1">优势 <a class="header-anchor" href="#优势-2" aria-label="Permalink to &quot;优势&quot;">​</a></h4><ul><li><p><strong>提升安全性：</strong> 禁止使用 DOM、BOM，能够限制用户跳转，随意改变 DOM 结构，获取用户敏感信息。</p></li><li><p><strong>提升性能：</strong> 在浏览器中，虽然渲染线程和逻辑线程是两个独立的线程，但是他们是互斥的，其目的为了防止渲染时对 DOM 操作，造成页面错乱。而小程序不允许控制 DOM，所以完全可以独立执行</p></li></ul><h4 id="劣势-2" tabindex="-1">劣势 <a class="header-anchor" href="#劣势-2" aria-label="Permalink to &quot;劣势&quot;">​</a></h4><ul><li>灵活性：不能使用 DOM、BOM</li><li>开发体验：束手束脚</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/W6I0iF2oPSAJARxGVqtq6w" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/W6I0iF2oPSAJARxGVqtq6w</a></li><li><a href="https://juejin.cn/post/6999654431729909767" target="_blank" rel="noreferrer">https://juejin.cn/post/6999654431729909767</a></li><li><a href="https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=0006a2289c8bb0bb0086ee8c056c0a" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=0006a2289c8bb0bb0086ee8c056c0a</a></li></ul>',29),o=[l];function d(h,n,s,c,b,p){return a(),i("div",null,o)}const q=e(r,[["render",d]]);export{m as __pageData,q as default};
