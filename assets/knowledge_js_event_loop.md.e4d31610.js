import{_ as t,o as e,c as l,a}from"./app.a77ad1ea.js";const x=JSON.parse('{"title":"\u4E8B\u4EF6\u5FAA\u73AF EventLoop","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1","slug":"\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1","link":"#\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1","children":[]},{"level":2,"title":"\u5B8F\u4EFB\u52A1 macro task","slug":"\u5B8F\u4EFB\u52A1-macro-task","link":"#\u5B8F\u4EFB\u52A1-macro-task","children":[]},{"level":2,"title":"\u5FAE\u4EFB\u52A1 micro task","slug":"\u5FAE\u4EFB\u52A1-micro-task","link":"#\u5FAE\u4EFB\u52A1-micro-task","children":[]},{"level":2,"title":"\u6267\u884C\u6D41\u7A0B","slug":"\u6267\u884C\u6D41\u7A0B","link":"#\u6267\u884C\u6D41\u7A0B","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"knowledge/js/event_loop.md"}'),r={name:"knowledge/js/event_loop.md"},n=a('<h1 id="\u4E8B\u4EF6\u5FAA\u73AF-eventloop" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF EventLoop <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF-eventloop" aria-hidden="true">#</a></h1><p><code>Event Loop</code> \u5373\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u662F\u6D4F\u89C8\u5668(\u6216 Node)\u9632\u6B62 <strong>js \u5355\u7EBF\u7A0B</strong> \u8FD0\u884C\u65F6\u963B\u585E\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528<strong>\u5F02\u6B65</strong>\u7684\u539F\u7406\u3002</p><h2 id="\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1" tabindex="-1">\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1 <a class="header-anchor" href="#\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1" aria-hidden="true">#</a></h2><p><strong>\u540C\u6B65\u4EFB\u52A1\uFF1A</strong> \u540C\u6B65\u4EFB\u52A1\u4F1A\u5728\u8C03\u7528\u6808\u4E2D\u6309\u7167\u987A\u5E8F\u7B49\u5F85\u4E3B\u7EBF\u7A0B\u4F9D\u6B21\u6267\u884C</p><p><strong>\u5F02\u6B65\u4EFB\u52A1\uFF1A</strong> \u5F02\u6B65\u4EFB\u52A1\u4F1A\u5728\u5F02\u6B65\u4EFB\u52A1\u6709\u4E86\u7ED3\u679C\u540E\uFF0C\u5C06\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5165\u4EFB\u52A1\u961F\u5217\u4E2D\u7B49\u5F85\u4E3B\u7EBF\u7A0B\u7A7A\u95F2\u7684\u65F6\u5019\uFF08\u8C03\u7528\u6808\u88AB\u6E05\u7A7A\uFF09\uFF0C\u88AB\u8BFB\u53D6\u5230\u6808\u5185\u7B49\u5F85\u4E3B\u7EBF\u7A0B\u7684\u6267\u884C\u3002</p><h2 id="\u5B8F\u4EFB\u52A1-macro-task" tabindex="-1">\u5B8F\u4EFB\u52A1 macro task <a class="header-anchor" href="#\u5B8F\u4EFB\u52A1-macro-task" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:center;">\u6D4F\u89C8\u5668</th><th style="text-align:center;">Node</th></tr></thead><tbody><tr><td style="text-align:left;">I/O</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td></tr><tr><td style="text-align:left;">setTimeout</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td></tr><tr><td style="text-align:left;">setInterval</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td></tr><tr><td style="text-align:left;">setImmediate</td><td style="text-align:center;">\u274C (\u4EC5 IE10 \u652F\u6301)</td><td style="text-align:center;">\u2705</td></tr></tbody></table><h2 id="\u5FAE\u4EFB\u52A1-micro-task" tabindex="-1">\u5FAE\u4EFB\u52A1 micro task <a class="header-anchor" href="#\u5FAE\u4EFB\u52A1-micro-task" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:center;">\u6D4F\u89C8\u5668</th><th style="text-align:center;">Node</th></tr></thead><tbody><tr><td style="text-align:left;">process.nextTick</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td></tr><tr><td style="text-align:left;">MutationObserver</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:left;">Promise</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td></tr></tbody></table><h2 id="\u6267\u884C\u6D41\u7A0B" tabindex="-1">\u6267\u884C\u6D41\u7A0B <a class="header-anchor" href="#\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a></h2><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209181703122-event_loop.png" alt="EventLoop" data-__preview__="true"></p><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209181756737-event_loop.gif" alt="" data-__preview__="true"></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ol><li>js \u9047\u5230\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1\u540E\u4E0D\u4F1A\u7B49\u5F85\u5176\u8FD4\u56DE\u7ED3\u679C\uFF0C\u800C\u662F\u5C06\u5176\u6302\u8D77\uFF0C\u7EE7\u7EED\u6267\u884C\u6267\u884C\u6808\u4E2D\u7684\u540C\u6B65\u4EFB\u52A1</li><li>\u5F53\u5F02\u6B65\u8FD4\u56DE\u7ED3\u679C\u540E\uFF0C\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u800C\u662F\u5C06\u7ED3\u679C\u6DFB\u52A0\u5230<strong>\u4EFB\u52A1\u961F\u5217</strong>\u4E2D</li><li>\u5F53\u4E3B\u7EBF\u7A0B\u7A7A\u95F2\uFF08\u4EFB\u52A1\u90FD\u6267\u884C\u5B8C\uFF09\u65F6\uFF0C\u4F1A\u67E5\u770B\u4EFB\u52A1\u961F\u5217\u4E2D\u662F\u5426\u6709\u4EFB\u52A1\uFF0C\u5982\u679C\u6709\u5C06\u5176\u53D6\u51FA\u5E76\u653E\u5165\u5230\u6267\u884C\u6808\uFF0C\u7136\u540E\u6267\u884C\u5176\u4E2D\u7684\u540C\u6B65\u4EE3\u7801</li><li>\u5982\u6B64\u5F80\u590D\uFF0C\u5F62\u6210\u4E86\u4E00\u4E2A\u73AF\uFF08\u4E8B\u4EF6\u5FAA\u73AF\uFF09</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5F53\u524D\u6267\u884C\u6808\u6267\u884C\u5B8C\u6BD5\u65F6\u4F1A\u7ACB\u523B\u5148\u5904\u7406\u6240\u6709\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u4E8B\u4EF6\uFF0C\u7136\u540E\u518D\u53BB\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA\u4E00\u4E2A\u4E8B\u4EF6\u3002\u540C\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\uFF0C\u5FAE\u4EFB\u52A1\u6C38\u8FDC\u5728\u5B8F\u4EFB\u52A1\u4E4B\u524D\u6267\u884C\u3002</p></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844903764202094606" target="_blank" rel="noreferrer">\u6398\u91D1\uFF1A\u4E00\u6B21\u5F04\u61C2 Event Loop\uFF08\u5F7B\u5E95\u89E3\u51B3\u6B64\u7C7B\u9762\u8BD5\u95EE\u9898\uFF09</a></li></ul>',17),i=[n];function d(s,o,c,h,g,p){return e(),l("div",null,i)}const y=t(r,[["render",d]]);export{x as __pageData,y as default};
