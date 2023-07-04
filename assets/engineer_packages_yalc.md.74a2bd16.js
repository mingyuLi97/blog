import{_ as a,o as e,c as l,U as s}from"./chunks/framework.3125349e.js";const _=JSON.parse('{"title":"yalc","description":"","frontmatter":{},"headers":[],"relativePath":"engineer/packages/yalc.md","filePath":"engineer/packages/yalc.md"}'),o={name:"engineer/packages/yalc.md"},c=s(`<h1 id="yalc" tabindex="-1">yalc <a class="header-anchor" href="#yalc" aria-label="Permalink to &quot;yalc&quot;">​</a></h1><blockquote><p>Better workflow than <code>npm | yarn link</code> for package authors.</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">yalc</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-g</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">global</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">yalc</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ol><li>发布包 - <code>yalc publish</code></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>该命令会逐一执行 npm 生命周期脚本，如：prepublish、prepare、prepublishOnly、prepack...等。 同时，你也可以通过 <code>--no-script</code> 禁用钩子钩动各种脚本。</p></div><ol start="2"><li><p>更新包 <code>yalc push</code></p></li><li><p>项目中安装 <code>yalc add xxx</code></p></li><li><p>移除依赖 <code>yalc remove xxx</code>, 如果想移除所有，可使用 <code>--all</code></p></li></ol><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://github.com/wclr/yalc" target="_blank" rel="noreferrer">GitHub: https://github.com/wclr/yalc</a></li><li><a href="https://juejin.cn/post/7033400734746066957" target="_blank" rel="noreferrer">掘金：yalc: 可能是最好的前端 link 调试方案</a></li></ul>`,10),n=[c];function t(r,p,i,d,h,y){return e(),l("div",null,n)}const b=a(o,[["render",t]]);export{_ as __pageData,b as default};
