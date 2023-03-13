import{_ as e,o as a,c as l,a as i}from"./app.bc23776b.js";const B=JSON.parse('{"title":"JS \u9884\u7F16\u8BD1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F16\u8BD1\u5668","slug":"\u7F16\u8BD1\u5668","link":"#\u7F16\u8BD1\u5668","children":[]},{"level":2,"title":"\u5F15\u64CE\u6267\u884C\u903B\u8F91\uFF08V8\uFF09","slug":"\u5F15\u64CE\u6267\u884C\u903B\u8F91\uFF08v8\uFF09","link":"#\u5F15\u64CE\u6267\u884C\u903B\u8F91\uFF08v8\uFF09","children":[]}],"relativePath":"knowledge/browser/complier.md"}'),s={name:"knowledge/browser/complier.md"},n=i(`<h1 id="js-\u9884\u7F16\u8BD1" tabindex="-1">JS \u9884\u7F16\u8BD1 <a class="header-anchor" href="#js-\u9884\u7F16\u8BD1" aria-hidden="true">#</a></h1><h2 id="\u7F16\u8BD1\u5668" tabindex="-1">\u7F16\u8BD1\u5668 <a class="header-anchor" href="#\u7F16\u8BD1\u5668" aria-hidden="true">#</a></h2><p>\u628A\u4EE3\u7801\u89E3\u6790\u6210\u4E3A\u6D4F\u89C8\u5668\u770B\u5F97\u61C2\u7684\u7ED3\u6784</p><ul><li>\u8BCD\u6CD5\u89E3\u6790</li><li>AST \u62BD\u8C61\u8BED\u6CD5\u6811</li><li>\u6784\u5EFA\u51FA\u6D4F\u89C8\u5668\u53EF\u6267\u884C\u7684\u4EE3\u7801</li></ul><p>TODO\uFF1A</p><h2 id="\u5F15\u64CE\u6267\u884C\u903B\u8F91\uFF08v8\uFF09" tabindex="-1">\u5F15\u64CE\u6267\u884C\u903B\u8F91\uFF08V8\uFF09 <a class="header-anchor" href="#\u5F15\u64CE\u6267\u884C\u903B\u8F91\uFF08v8\uFF09" aria-hidden="true">#</a></h2><ul><li><p>\u53D8\u91CF\u63D0\u5347</p></li><li><p>ECStack\uFF1AExecution Context Stack \u6267\u884C\u73AF\u5883\u6808</p></li><li><p>EC: Execution Context \u6267\u884C\u73AF\u5883\uFF08\u6267\u884C\u4E0A\u4E0B\u6587\uFF09</p><ul><li>VO\uFF1AVariable Object \u53D8\u91CF\u5BF9\u8C61</li><li>AO\uFF1AActivation Object \u6D3B\u52A8\u5BF9\u8C61 \uFF08\u51FD\u6570\u7684\u53EB\u505A AO\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A VO \u7684\u5206\u652F\uFF09</li></ul></li><li><p>Scope\uFF1A\u4F5C\u7528\u57DF\uFF0C\u521B\u5EFA\u51FD\u6570\u65F6\u8D4B\u4E88\u7684</p></li><li><p>Scope Chain\uFF1A\u4F5C\u7528\u57DF\u94FE</p></li></ul><h4 id="\u521B\u5EFA\u53D8\u91CF\u4E09\u90E8\u66F2" tabindex="-1">\u521B\u5EFA\u53D8\u91CF\u4E09\u90E8\u66F2 <a class="header-anchor" href="#\u521B\u5EFA\u53D8\u91CF\u4E09\u90E8\u66F2" aria-hidden="true">#</a></h4><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre></div><ol><li>\u521B\u5EFA\u53D8\u91CF \u58F0\u660E declare</li><li>\u521B\u5EFA\u503C <ol><li>\u57FA\u7840\u503C - \u6808\u5185\u5B58</li><li>\u5F15\u7528\u503C - \u5806\u5185\u5B58</li></ol></li><li>\u5173\u8054\uFF08\u8D4B\u503C\uFF09\u5B9A\u4E49 defined</li></ol>`,10),t=[n];function o(r,c,p,d,h,_){return a(),l("div",null,t)}const v=e(s,[["render",o]]);export{B as __pageData,v as default};
