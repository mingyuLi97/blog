import{_ as s,o as a,c as n,R as l}from"./chunks/framework.35669211.js";const A=JSON.parse('{"title":"Tree Shaking","description":"","frontmatter":{},"headers":[],"relativePath":"engineer/webpack/tree-shaking.md"}'),o={name:"engineer/webpack/tree-shaking.md"},e=l(`<h1 id="tree-shaking" tabindex="-1">Tree Shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree Shaking&quot;">​</a></h1><p>Tree Shanking 依赖于 ES6 import 和 export 静态分析能力，可以在编译阶段将 不会被执行，执行的结果不会被用到，代码只会影响死变量（只写不读）的代码移除。</p><h2 id="deadcode" tabindex="-1">DeadCode <a class="header-anchor" href="#deadcode" aria-label="Permalink to &quot;DeadCode&quot;">​</a></h2><ol><li>代码永远不会被执行</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">foo</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;条件永远是 false 的&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;在 return 语句后面的代码&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><ol start="2"><li>只声明没有使用的</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">foo</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 只赋值没有使用的变量</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 只声明没有使用的函数</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">unusedFn</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">foo</span><span style="color:#ABB2BF;">();</span></span></code></pre></div><h2 id="为什么只有-esm-才能-treeshaking" tabindex="-1">为什么只有 ESM 才能 TreeShaking <a class="header-anchor" href="#为什么只有-esm-才能-treeshaking" aria-label="Permalink to &quot;为什么只有 ESM 才能 TreeShaking&quot;">​</a></h2><p>ESM 具有静态分析的能力，意味着我们在编译时就能确定模块间的依赖关系，而不用等运行时动态解析。因此在编译时 我们就能确定哪些模块是被引用的，哪些是未使用的，从而 TreeShaking。</p><h2 id="失效" tabindex="-1">失效 <a class="header-anchor" href="#失效" aria-label="Permalink to &quot;失效&quot;">​</a></h2><h4 id="export-default" tabindex="-1"><code>export default</code> <a class="header-anchor" href="#export-default" aria-label="Permalink to &quot;\`export default\`&quot;">​</a></h4><p><code>export default</code> 打包后会作为一个对象整体。Webpack 会分析顶层对象的使用情况，并不会分析对象中的属性，所以 <code>export default</code> 要么就是整体引入，要么就是整体删除。</p><h4 id="函数存在副作用" tabindex="-1">函数存在副作用 <a class="header-anchor" href="#函数存在副作用" aria-label="Permalink to &quot;函数存在副作用&quot;">​</a></h4><blockquote><p>副作用，当我们调用某个函数时，该函数除了返回值之外，还产生附加的影响，例如修改全局变量，函数外的变量或修改参数等，称为存在副作用。</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>/*#__PURE__*/</code> 可以标记后面的函数不会产生副作用，这样就能被 TreeShaking</p></div>`,15),p=[e];function t(c,r,B,i,y,d){return a(),n("div",null,p)}const h=s(o,[["render",t]]);export{A as __pageData,h as default};
