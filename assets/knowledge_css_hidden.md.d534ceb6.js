import{_ as t,o as e,c as s,R as a}from"./chunks/framework.d45ee533.js";const h=JSON.parse('{"title":"元素的隐藏","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/css/hidden.md"}'),n={name:"knowledge/css/hidden.md"},l=a(`<h1 id="元素的隐藏" tabindex="-1">元素的隐藏 <a class="header-anchor" href="#元素的隐藏" aria-label="Permalink to &quot;元素的隐藏&quot;">​</a></h1><table><thead><tr><th style="text-align:left;">隐藏方式</th><th style="text-align:center;">性能</th><th style="text-align:center;">是否占据空间</th><th style="text-align:center;">能否触发事件</th></tr></thead><tbody><tr><td style="text-align:left;"><code>display: none</code></td><td style="text-align:center;">回流</td><td style="text-align:center;">否</td><td style="text-align:center;">否</td></tr><tr><td style="text-align:left;"><code>visibility: hidden</code></td><td style="text-align:center;">重绘</td><td style="text-align:center;">是</td><td style="text-align:center;">否</td></tr><tr><td style="text-align:left;"><code>opacity: 0</code></td><td style="text-align:center;">不一定</td><td style="text-align:center;">是</td><td style="text-align:center;">是</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>visibility : hidden</code> 不会覆盖子元素 <code>visibility : visible</code></p></div><h2 id="对后代-img-的影响" tabindex="-1">对后代 img 的影响 <a class="header-anchor" href="#对后代-img-的影响" aria-label="Permalink to &quot;对后代 img 的影响&quot;">​</a></h2><p>设置了 <code>display: none</code> 的元素，其背景和后代 img 元素都会产生请求，后代元素的<strong>背景不会产生请求</strong>，这些图片都不会被渲染。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 1、3 发起请求 2 不请求 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">style</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;display: none;background-image: url(1.png)&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">style</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;background-image: url(2.png)&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">img</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;3.png&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="合成层" tabindex="-1">合成层 <a class="header-anchor" href="#合成层" aria-label="Permalink to &quot;合成层&quot;">​</a></h2><p>页面的绘制并不一定为在内存中的单层画面绘制，有时浏览器会将一帧画面绘制为多层画面，然后将若干层画面合并成一张图片显示到屏幕上。 将页面分层可以更好的区分开页面中静态部分和动态部分的绘制。</p><p>在 Blink 和 WebKit 内核的浏览器中，具有 transition 或 animation 的 opacity 元素，渲染层被提升为合成层。 translateZ(0) 或 translate3d(0,0,0)可以人为强制创建合成层。</p><p><strong>而元素提升为合成层后，transform 和 opacity 不会触发 重绘制。如果不是合成层，则会触发重绘。</strong></p><p>因为透明度改变后，GPU 在绘制页面时可以改变之前画好的页面的透明值，而无需整体的重绘。 但是这个被修改的 opacity 必须为一个单独的图层，否则图层中的其他节点也会被重绘。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/xx_yan/article/details/105182572" target="_blank" rel="noreferrer">https://blog.csdn.net/xx_yan/article/details/105182572</a></li></ul>`,13),o=[l];function r(p,c,i,d,y,B){return e(),s("div",null,o)}const u=t(n,[["render",r]]);export{h as __pageData,u as default};
