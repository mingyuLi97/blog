import{_ as s,o as l,c as a,d as n}from"./app.a6c30cc3.js";const F=JSON.parse('{"title":"\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"!DOCTYPE","slug":"doctype","link":"#doctype","children":[{"level":3,"title":"\u6587\u6863\u6A21\u5F0F","slug":"\u6587\u6863\u6A21\u5F0F","link":"#\u6587\u6863\u6A21\u5F0F","children":[]}]},{"level":2,"title":"HTML \u8BED\u4E49\u5316","slug":"html-\u8BED\u4E49\u5316","link":"#html-\u8BED\u4E49\u5316","children":[{"level":3,"title":"\u4F18\u52BF","slug":"\u4F18\u52BF","link":"#\u4F18\u52BF","children":[]},{"level":3,"title":"\u5E38\u89C1\u6807\u7B7E","slug":"\u5E38\u89C1\u6807\u7B7E","link":"#\u5E38\u89C1\u6807\u7B7E","children":[]}]},{"level":2,"title":"\u5757\u7EA7\u5143\u7D20\u548C\u884C\u7EA7\u5143\u7D20","slug":"\u5757\u7EA7\u5143\u7D20\u548C\u884C\u7EA7\u5143\u7D20","link":"#\u5757\u7EA7\u5143\u7D20\u548C\u884C\u7EA7\u5143\u7D20","children":[]}],"relativePath":"knowledge/html/basic.md"}'),p={name:"knowledge/html/basic.md"},t=n(`<h1 id="\u57FA\u7840" tabindex="-1">\u57FA\u7840 <a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a></h1><h2 id="doctype" tabindex="-1">!DOCTYPE <a class="header-anchor" href="#doctype" aria-hidden="true">#</a></h2><p>\u7528\u6765\u544A\u8BC9\u6D4F\u89C8\u5668\u5E94\u8BE5\u4EE5\u4EC0\u4E48\u6837\u7684\u6587\u6863\u7C7B\u578B\u6765\u89E3\u6790\u6587\u6863\uFF0C\u5B83\u5FC5\u987B\u58F0\u660E\u5728 <code>HTML</code> \u7684\u7B2C\u4E00\u884C</p><h3 id="\u6587\u6863\u6A21\u5F0F" tabindex="-1">\u6587\u6863\u6A21\u5F0F <a class="header-anchor" href="#\u6587\u6863\u6A21\u5F0F" aria-hidden="true">#</a></h3><ul><li>\u6DF7\u6742\u6A21\u5F0F\uFF1A\u4E0D\u540C\u6D4F\u89C8\u5668\u6709\u4E0D\u540C\u7684\u6807\u51C6</li><li>\u6807\u51C6\u6A21\u5F0F\uFF1AW3C \u9875\u9762\u7684\u6E32\u67D3\u6709\u4E86\u7EDF\u4E00\u6807\u51C6</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u4E0D\u8BBE\u7F6E\u6216\u8005\u683C\u5F0F\u4E0D\u6B63\u786E\u4F1A\u5BFC\u81F4 HTML \u6216 XHTML \u4EE5\u6DF7\u6742\u6A21\u5F0F\u5448\u73B0\uFF0C\u5BFC\u81F4\u9875\u9762\u7684\u5C55\u793A\u5F62\u5F0F\u5B58\u5728\u5DEE\u5F02</p></div><p>\u5E38\u89C1\u7C7B\u578B\uFF1A<a href="https://www.runoob.com/tags/tag-doctype.html" target="_blank" rel="noreferrer">\u83DC\u9E1F\u6559\u7A0B</a></p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#7F848E;">&lt;!-- h5 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#E06C75;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- HTML 4.01 Strict --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#E06C75;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">PUBLIC</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;-//W3C//DTD HTML 4.01//EN&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;http://www.w3.org/TR/html4/strict.dtd&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- HTML 4.01 Transitional --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#E06C75;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">PUBLIC</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;http://www.w3.org/TR/html4/loose.dtd&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- HTML 4.01 Frameset --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#E06C75;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">PUBLIC</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;-//W3C//DTD HTML 4.01 Frameset//EN&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;http://www.w3.org/TR/html4/frameset.dtd&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- XHTML 1.1 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#E06C75;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">PUBLIC</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;-//W3C//DTD XHTML 1.1//EN&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="html-\u8BED\u4E49\u5316" tabindex="-1">HTML \u8BED\u4E49\u5316 <a class="header-anchor" href="#html-\u8BED\u4E49\u5316" aria-hidden="true">#</a></h2><p>\u7528\u5408\u9002\u7684\u6807\u7B7E\u6765\u88C5\u8F7D\u5408\u9002\u7684\u5185\u5BB9\u3002</p><h3 id="\u4F18\u52BF" tabindex="-1">\u4F18\u52BF <a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a></h3><ol><li>\u5BF9\u673A\u5668\u53CB\u597D\uFF0C\u5229\u4E8E\u722C\u866B\u722C\u53D6\u6709\u6548\u4FE1\u606F\u3001\u6709\u5229\u4E8E SEO</li><li>\u5BF9\u5F00\u53D1\u8005\u53CB\u597D\uFF0C\u589E\u52A0\u53EF\u8BFB\u6027\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u4E0E\u7EF4\u62A4</li></ol><h3 id="\u5E38\u89C1\u6807\u7B7E" tabindex="-1">\u5E38\u89C1\u6807\u7B7E <a class="header-anchor" href="#\u5E38\u89C1\u6807\u7B7E" aria-hidden="true">#</a></h3><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#7F848E;">&lt;!-- \u5934\u90E8 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">header</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">header</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- \u5BFC\u822A\u680F --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">nav</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">nav</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- \u533A\u5757\uFF08\u6709\u8BED\u4E49\u5316\u7684div\uFF09 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- \u4E3B\u8981\u533A\u57DF --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">main</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">main</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- \u4E3B\u8981\u5185\u5BB9 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- \u4FA7\u8FB9\u680F --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">aside</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">aside</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- \u5E95\u90E8 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">footer</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">footer</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5757\u7EA7\u5143\u7D20\u548C\u884C\u7EA7\u5143\u7D20" tabindex="-1">\u5757\u7EA7\u5143\u7D20\u548C\u884C\u7EA7\u5143\u7D20 <a class="header-anchor" href="#\u5757\u7EA7\u5143\u7D20\u548C\u884C\u7EA7\u5143\u7D20" aria-hidden="true">#</a></h2><ol><li>\u5757\u7EA7\u5143\u7D20</li></ol><ul><li>display: block</li><li>\u72EC\u5360\u4E00\u884C\uFF0C\u8BC6\u522B\u5BBD\u9AD8\uFF0C\u82E5\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u5BBD\u5EA6\u4E3A\u6574\u884C\u5BBD\u5EA6\uFF0C\u9AD8\u5EA6\u4E3A\u5B9E\u9645\u5185\u5BB9\u9AD8\u5EA6 <ul><li>div, p, h1-h6, ul, ol, pre, table, address...</li></ul></li></ul><ol start="2"><li>\u884C\u7EA7\u5143\u7D20</li></ol><ul><li>display: inline</li><li>\u4E0D\u72EC\u5360\u4E00\u884C\uFF0C\u4E0D\u80FD\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u5BBD\u9AD8\u5747\u4E3A\u5B9E\u9645\u5185\u5BB9\u5BBD\u9AD8 <ul><li>span, a, b, strong, i, em, sup, sub...</li></ul></li></ul><ol start="3"><li>\u884C\u7EA7\u5757\u5143\u7D20</li></ol><ul><li>inline-block <ul><li>img</li></ul></li></ul><ol start="4"><li><p>\u5757\u7EA7\u5143\u7D20\u53EF\u4EE5\u5305\u542B\u884C\u7EA7\u548C\u5757\u7EA7\u5143\u7D20\uFF0C\u4F46\u662F\u884C\u7EA7\u5143\u7D20\u53EA\u80FD\u5305\u542B\u884C\u7EA7\u5143\u7D20</p></li><li><p>p, h1-h6, dt \u6807\u7B7E\u53EA\u80FD\u5305\u542B\u884C\u7EA7\u5143\u7D20</p></li><li><p>\u5757\u7EA7\u5143\u7D20\u4E0E\u5757\u7EA7\u5143\u7D20\u5E76\u5217\uFF0C\u884C\u7EA7\u4E0E\u884C\u7EA7\u5E76\u5217</p></li></ol>`,22),o=[t];function e(c,r,i,B,y,d){return l(),a("div",null,o)}const A=s(p,[["render",e]]);export{F as __pageData,A as default};