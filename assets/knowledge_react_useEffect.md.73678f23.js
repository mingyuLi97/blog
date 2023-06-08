import{_ as s,o as a,c as n,R as l}from"./chunks/framework.d45ee533.js";const F=JSON.parse('{"title":"useEffect","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/react/useEffect.md"}'),o={name:"knowledge/react/useEffect.md"},e=l(`<h1 id="useeffect" tabindex="-1">useEffect <a class="header-anchor" href="#useeffect" aria-label="Permalink to &quot;useEffect&quot;">​</a></h1><p>在第一次渲染完成后和每次更新后，都会执行 useEffect 传递的函数（第一个参数）。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>我们可以理解把 useEffect Hook 看做 <code>componentDidMount，componentDidUpdate 和 componentWillUnmount</code> 这三个函数的组合。</p></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">useEffect</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`You clicked </span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">count</span><span style="color:#C678DD;">}</span><span style="color:#98C379;"> times\`</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre></div><h2 id="与某个变量关联" tabindex="-1">与某个变量关联 <a class="header-anchor" href="#与某个变量关联" aria-label="Permalink to &quot;与某个变量关联&quot;">​</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">useEffect</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`You clicked </span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">count</span><span style="color:#C678DD;">}</span><span style="color:#98C379;"> times\`</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}, [</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;">]);</span></span></code></pre></div><h2 id="仅首次渲染完成后更新" tabindex="-1">仅首次渲染完成后更新 <a class="header-anchor" href="#仅首次渲染完成后更新" aria-label="Permalink to &quot;仅首次渲染完成后更新&quot;">​</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">useEffect</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`You clicked </span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">count</span><span style="color:#C678DD;">}</span><span style="color:#98C379;"> times\`</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}, []);</span></span></code></pre></div><h2 id="解决-async-语法" tabindex="-1">解决 async 语法 <a class="header-anchor" href="#解决-async-语法" aria-label="Permalink to &quot;解决 async 语法&quot;">​</a></h2><p>async 函数都会默认返回一个隐式的 promise。但是，useEffect 不应该返回任何内容，因此如我们想使用 async 应该在内部重新创建一个函数。</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">useEffect</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fetchData</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">axios</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;http://localhost/api/v1/search?query=redux&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">setData</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">fetchData</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">}, []);</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://zh-hans.legacy.reactjs.org/docs/hooks-reference.html" target="_blank" rel="noreferrer">https://zh-hans.legacy.reactjs.org/docs/hooks-reference.html</a></li><li><a href="https://juejin.cn/post/6952509261519781918#heading-2" target="_blank" rel="noreferrer">https://juejin.cn/post/6952509261519781918#heading-2</a></li></ul>`,14),p=[e];function t(c,r,B,y,i,d){return a(),n("div",null,p)}const h=s(o,[["render",t]]);export{F as __pageData,h as default};
