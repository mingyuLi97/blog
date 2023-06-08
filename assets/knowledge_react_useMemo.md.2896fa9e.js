import{_ as s,o as a,c as n,R as l}from"./chunks/framework.d45ee533.js";const C=JSON.parse('{"title":"React.memo & useMemo","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/react/useMemo.md"}'),o={name:"knowledge/react/useMemo.md"},p=l(`<h1 id="react-memo-usememo" tabindex="-1">React.memo &amp; useMemo <a class="header-anchor" href="#react-memo-usememo" aria-label="Permalink to &quot;React.memo &amp; useMemo&quot;">​</a></h1><h2 id="react-memo" tabindex="-1">React.memo <a class="header-anchor" href="#react-memo" aria-label="Permalink to &quot;React.memo&quot;">​</a></h2><p><code>React.memo()</code> 是一个高阶组件 (HOC)，它接收一个组件 A 作为参数并返回一个组件 B，如果组件 B 的 <strong>props</strong>（或其中的值）没有改变，则组件 B 会阻止组件 A 重新渲染 。</p><p>简单来说，<code>memo</code> 就是对传入的组件做了缓存，如果组件的 <strong>props 没有改变</strong>，那么就不会 re-render。值的注意的是对比是否改变是通过 <code>Object.is</code> 来完成的。</p><div class="tip custom-block"><p class="custom-block-title">一些情况下仍然会 re-render：</p><ul><li>组件内部的 state 变更</li><li>组件被外部的 context 影响 <code>Context.Provider</code></li></ul></div><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><p><code>const MemoizedComponent = memo(SomeComponent, arePropsEqual?)</code></p><ul><li><code>SomeComponent</code>：需要 memoization 的组件</li><li><code>arePropsEqual</code>：自定义比较函数</li></ul><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h3><ul><li>如果没有增加 <code>memo()</code>，那么当 name 和 address 任意一个改变时，Greeting 都会渲染。</li><li>而如果加上了 <code>memo()</code>，则只有 name 修改时才会使 Greeting 重新渲染。</li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">memo</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">useState</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;react&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">MyApp</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setName</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">address</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setAddress</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        Name</span><span style="color:#C678DD;">{</span><span style="color:#98C379;">&#39;: &#39;</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">value</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">name</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">onChange</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setName</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        Address</span><span style="color:#C678DD;">{</span><span style="color:#98C379;">&#39;: &#39;</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">value</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">address</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">onChange</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setAddress</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E5C07B;">Greeting</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">name</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">name</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Greeting</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">memo</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Greeting</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;font-style:italic;">name</span><span style="color:#ABB2BF;"> }) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Greeting was rendered at&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Date</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">toLocaleTimeString</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">h3</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      Hello</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;, &#39;</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">name</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">!</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">h3</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre></div><h2 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-label="Permalink to &quot;useMemo&quot;">​</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">count</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setCount</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">userInfo</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;abc&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E5C07B;">UserCard</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">userInfo</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">userInfo</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre></div><p>上面代码在执行时，每次渲染都会创建一个新的 <code>userInfo</code>，即使与 old <code>userInfo</code> 值是一致的。这样 <code>memo()</code> 的优化就会失效。</p><p>因此我们可以得到结论，props 中如果传入的是引用对象，那么 <code>memo()</code> 优化就会失效。</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">count</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setCount</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">userInfo</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useMemo</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;abc&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">count</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}, [</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E5C07B;">UserCard</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">userInfo</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">userInfo</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre></div><p>通过 useMemo 优化后，每次渲染时这个对象是不会改变的，仅依赖的 count 发生变化后，才会创建新的对象。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844904101445124110" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904101445124110</a></li></ul>`,19),e=[p];function t(c,B,r,y,A,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
