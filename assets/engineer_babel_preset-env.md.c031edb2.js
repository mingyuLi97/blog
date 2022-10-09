import{_ as e,o as r,c as t,d as l}from"./app.36c6c98d.js";const _=JSON.parse('{"title":"@babel/preset-env","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E","link":"#\u914D\u7F6E","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"engineer/babel/preset-env.md"}'),a={name:"engineer/babel/preset-env.md"},s=l('<h1 id="babel-preset-env" tabindex="-1">@babel/preset-env <a class="header-anchor" href="#babel-preset-env" aria-hidden="true">#</a></h1><p><code>@babel/preset-env</code> \u662F\u4E00\u5927\u5806\u63D2\u4EF6\u7684\u96C6\u5408\uFF0C\u5305\u542B\u4E86\u5F53\u524D\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\uFF0C\u6240\u6709\u8BED\u8A00\u7279\u6027\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u6839\u636E <a href="https://github.com/browserslist/browserslist" target="_blank" rel="noreferrer">browserList</a> \u7684\u7ED3\u679C\uFF0C\u9009\u62E9\u5408\u9002\u7684\u63D2\u4EF6\u5C06\u65B0\u8BED\u8A00\u7279\u6027\u8F6C\u8BD1\u6210\u65E7\u6D4F\u89C8\u5668\u53EF\u4EE5\u652F\u6301\u7684\u8868\u8FBE\u65B9\u5F0F\u3002</p><p>\u9996\u5148\u6211\u4EEC\u6765\u7406\u6E05\u695A\u8FD9\u4E09\u4E2A\u6982\u5FF5:</p><ul><li>\u6700\u65B0 ES \u8BED\u6CD5\uFF0C\u6BD4\u5982\uFF1A\u7BAD\u5934\u51FD\u6570\uFF0Clet/const\u3002</li><li>\u6700\u65B0 ES Api\uFF0C\u6BD4\u5982 Promise</li><li>\u6700\u65B0 ES \u5B9E\u4F8B/\u9759\u6001\u65B9\u6CD5\uFF0C\u6BD4\u5982 String.prototype.include</li></ul><p>prest-env \u4EC5\u4EC5\u53EA\u4F1A\u8F6C\u5316\u6700\u65B0\u7684 es \u8BED\u6CD5\uFF0C\u5E76\u4E0D\u4F1A\u8F6C\u5316\u5BF9\u5E94\u7684 Api \u548C\u5B9E\u4F8B\u65B9\u6CD5\u3002</p><p>\u6BD4\u5982\u8BF4 ES 6 \u4E2D\u7684 Array.from \u9759\u6001\u65B9\u6CD5\u3002babel \u662F\u4E0D\u4F1A\u8F6C\u8BD1\u8FD9\u4E2A\u65B9\u6CD5\u7684\uFF0C\u5982\u679C\u60F3\u5728\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4E2D\u8BC6\u522B\u5E76\u4E14\u8FD0\u884C Array.from \u65B9\u6CD5\u8FBE\u5230\u6211\u4EEC\u7684\u9884\u671F\u5C31\u9700\u8981\u989D\u5916\u5F15\u5165 polyfill \u8FDB\u884C\u5728 Array \u4E0A\u6DFB\u52A0\u5B9E\u73B0\u8FD9\u4E2A\u65B9\u6CD5\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><h4 id="usebuiltins" tabindex="-1">useBuiltIns <a class="header-anchor" href="#usebuiltins" aria-hidden="true">#</a></h4><ul><li><code>false</code> (\u9ED8\u8BA4)</li></ul><p>\u4EC5\u4F1A\u8F6C\u5316\u6700\u65B0\u7684 ES \u8BED\u6CD5\uFF0C\u5E76\u4E0D\u4F1A\u8F6C\u5316\u4EFB\u4F55 Api \u548C\u65B9\u6CD5\u3002</p><ul><li><code>&#39;entry&#39;</code></li></ul><p>\u5F53\u4F20\u5165 entry \u65F6\uFF0C\u9700\u8981\u6211\u4EEC\u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u4E2D\u624B\u52A8\u5F15\u5165\u4E00\u6B21 core-js\uFF0C\u5B83\u4F1A\u6839\u636E\u6211\u4EEC\u914D\u7F6E\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u5217\u8868<strong>\u5168\u91CF</strong>\u5F15\u5165\u4E0D\u517C\u5BB9\u7684 polyfill\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u{1F6A8} \u4ECE Babel 7.4.0 \u5F00\u59CB\uFF0C\u8FD9\u4E2A\u5305\u5DF2\u7ECF\u88AB\u5F03\u7528\uFF0C\u53D6\u800C\u4EE3\u4E4B\u7684\u662F\u76F4\u63A5\u5305\u542B core-js/stable\uFF08\u4EE5\u586B\u5145 ECMAScript \u7279\u6027\uFF09</p><p>\u5982\u679C\u60A8\u6B63\u5728\u5C06\u751F\u6210\u5668\u6216\u5F02\u6B65\u51FD\u6570\u7F16\u8BD1\u5230 ES5\uFF0C\u5E76\u4E14\u60A8\u4F7F\u7528\u7684\u7248\u672C\u4F4E\u4E8E <code>@babel/core</code> \u6216 <code>@babel/plugin-transform-regenerator</code> \u4F4E\u4E8E 7.18.0\uFF0C\u5219\u8FD8\u5FC5\u987B\u52A0\u8F7D\u8BE5 regenerator runtime \u5305\u3002\u4F7F\u7528<code>@babel/preset-env``useBuiltIns: &quot;usage&quot;</code>\u9009\u9879\u6216\u65F6\u4F1A\u81EA\u52A8\u52A0\u8F7D <code>@babel/plugin-transform-runtime</code>\u3002</p></div><ul><li><code>&#39;usage&#39;</code></li></ul><p>\u6839\u636E\u914D\u7F6E\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\uFF0C\u4EE5\u53CA\u4EE3\u7801\u4E2D\u4F7F\u7528\u5230\u7684 Api \u8FDB\u884C\u5F15\u5165 polyfill <strong>\u6309\u9700\u6DFB\u52A0</strong>\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>entry</code>: \u5165\u53E3\u5904\u5168\u91CF\u5F15\u5165</p><p><code>usage</code>: \u4F7F\u7528\u7684\u5730\u65B9\u6309\u9700\u5F15\u5165</p></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://www.babeljs.cn/docs/babel-preset-env" target="_blank" rel="noreferrer">Babel \u5B98\u7F51</a></li><li><a href="https://juejin.cn/post/7025237833543581732" target="_blank" rel="noreferrer">\u6398\u91D1\uFF1A\u524D\u7AEF\u57FA\u5EFA \u5E26\u4F60\u5728 Babel \u7684\u4E16\u754C\u4E2D\u7545\u6E38</a></li></ul>',18),i=[s];function o(n,c,p,d,b,u){return r(),t("div",null,i)}const f=e(a,[["render",o]]);export{_ as __pageData,f as default};
