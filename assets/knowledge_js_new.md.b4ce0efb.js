import{_ as s,o as a,c as n,R as o}from"./chunks/framework.35669211.js";const d=JSON.parse('{"title":"new 操作符","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/js/new.md"}'),l={name:"knowledge/js/new.md"},p=o(`<h1 id="new-操作符" tabindex="-1">new 操作符 <a class="header-anchor" href="#new-操作符" aria-label="Permalink to &quot;new 操作符&quot;">​</a></h1><h2 id="new-的实现" tabindex="-1">new 的实现 <a class="header-anchor" href="#new-的实现" aria-label="Permalink to &quot;new 的实现&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_new</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">constructor</span><span style="color:#ABB2BF;">, ...</span><span style="color:#E06C75;font-style:italic;">args</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 1. 创建一个空对象</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 2. 改变 this 指向，执行构造函数</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">constructor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">apply</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">args</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 3. 将新对象的隐式原型指向构造函数的显式原型</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">__proto__</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">constructor</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h2 id="new-target" tabindex="-1">new.target <a class="header-anchor" href="#new-target" aria-label="Permalink to &quot;new.target&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Foo</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">throw</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;Foo() must be called with new&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Foo instantiated with new&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Foo</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;">// throws &quot;Foo() must be called with new&quot;</span></span>
<span class="line"><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Foo</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;">// logs &quot;Foo instantiated with new&quot;</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target" target="_blank" rel="noreferrer">mdn: new</a></li></ul>`,7),e=[p];function t(c,r,B,y,i,F){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{d as __pageData,C as default};