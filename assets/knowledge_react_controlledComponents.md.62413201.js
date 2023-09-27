import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fa80b722.js";const C=JSON.parse('{"title":"受控组件 & 非受控组件","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/react/controlledComponents.md","filePath":"knowledge/react/controlledComponents.md"}'),o={name:"knowledge/react/controlledComponents.md"},p=l(`<h1 id="受控组件-非受控组件" tabindex="-1">受控组件 &amp; 非受控组件 <a class="header-anchor" href="#受控组件-非受控组件" aria-label="Permalink to &quot;受控组件 &amp; 非受控组件&quot;">​</a></h1><h2 id="受控组件" tabindex="-1">受控组件 <a class="header-anchor" href="#受控组件" aria-label="Permalink to &quot;受控组件&quot;">​</a></h2><p>在 HTML 的表单元素中，（如<code>&lt;input&gt;</code>、 <code>&lt;textarea&gt;</code> 和 <code>&lt;select</code>&gt;），它们通常自己维护一套 state，并随着用户的输入自己进行 UI 上的更新，这种行为是不被我们程序所管控的。而如果将 React 里的 state 属性和表单元素的值建立依赖关系，再通过 <code>onChange</code> 事件与 <code>setState()</code> 结合更新 state 属性，就能达到控制用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做受控组件。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">App</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setState</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;text&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">value</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">state</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">onChange</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setState</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h2 id="非受控组件" tabindex="-1">非受控组件 <a class="header-anchor" href="#非受控组件" aria-label="Permalink to &quot;非受控组件&quot;">​</a></h2><p>我们仅仅是想要获取某个表单元素的值，而不关心它是如何改变的，表单数据将交由 DOM 节点来处理。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">App</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">inputRef</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useRef</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">HTMLInputElement</span><span style="color:#ABB2BF;">&gt;(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">handleSubmit</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">FormEvent</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">HTMLFormElement</span><span style="color:#ABB2BF;">&gt;) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">inputRef</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">current</span><span style="color:#ABB2BF;">?.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">preventDefault</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">form</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">onSubmit</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">handleSubmit</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">input</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;font-style:italic;">defaultValue</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;123&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;font-style:italic;">ref</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">inputRef</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;font-style:italic;">onChange</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">      /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;submit&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">value</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;提交&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">form</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,7),t=[p];function e(c,B,r,y,A,i){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{C as __pageData,d as default};
