import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.f14b72c3.js";const A=JSON.parse('{"title":"any、never、void、unknown","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/ts/any-void.md"}'),o={name:"knowledge/ts/any-void.md"},p=l(`<h1 id="any、never、void、unknown" tabindex="-1">any、never、void、unknown <a class="header-anchor" href="#any、never、void、unknown" aria-label="Permalink to &quot;any、never、void、unknown&quot;">​</a></h1><h2 id="any" tabindex="-1">any <a class="header-anchor" href="#any" aria-label="Permalink to &quot;any&quot;">​</a></h2><p>任意类型，如果设置了 any，那么 ts 不会对该变量进行类型检查，该变量可以被任何值赋值，也可以访问任何属性。</p><h4 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h4><ol><li>重构时，可以快速避开类型错误（不推荐）</li><li>当我们调用 <code>console.log</code> 时，其可以接受任何的类型</li></ol><h2 id="never" tabindex="-1">never <a class="header-anchor" href="#never" aria-label="Permalink to &quot;never&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 因为这个是无限循环，我们可以使用never作为返回值表示它永远不会返回</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">foreverLoop</span><span style="color:#ABB2BF;">(): </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">) {}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 因为这个函数会抛出异常，所以也是不会返回的</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">crashFunc</span><span style="color:#ABB2BF;">(): </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">throw</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Error</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;this function will crash&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h4 id="场景-1" tabindex="-1">场景 <a class="header-anchor" href="#场景-1" aria-label="Permalink to &quot;场景&quot;">​</a></h4><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">v</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;"> | </span><span style="color:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">random</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">switch</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">v</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 这里永远走不到，如果传入的值类型出现了这个分支，那么会出现类型报错</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">check</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">v</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h2 id="void" tabindex="-1">void <a class="header-anchor" href="#void" aria-label="Permalink to &quot;void&quot;">​</a></h2><p>不返回任何值，仅可以由 <code>null</code> <code>undefined</code> 赋值</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7151926103324983304" target="_blank" rel="noreferrer">https://juejin.cn/post/7151926103324983304</a></li></ul>`,13),e=[p];function t(c,r,B,y,i,d){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{A as __pageData,h as default};
