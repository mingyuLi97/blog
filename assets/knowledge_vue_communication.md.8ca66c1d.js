import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.fa80b722.js";const d=JSON.parse('{"title":"组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/vue/communication.md","filePath":"knowledge/vue/communication.md"}'),p={name:"knowledge/vue/communication.md"},o=l(`<h1 id="组件通信" tabindex="-1">组件通信 <a class="header-anchor" href="#组件通信" aria-label="Permalink to &quot;组件通信&quot;">​</a></h1><h2 id="props、-emit" tabindex="-1">props、$emit <a class="header-anchor" href="#props、-emit" aria-label="Permalink to &quot;props、$emit&quot;">​</a></h2><p>常用于父子组件通信</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// parent</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Child</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">:name=&quot;name&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// child</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h2 id="eventbus" tabindex="-1">EventBus <a class="header-anchor" href="#eventbus" aria-label="Permalink to &quot;EventBus&quot;">​</a></h2><p>通过一个空的 Vue 实例作为事件总线，用它来触发、监听事件，实现了任何组件间的通信，包括父子、兄弟、跨级。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Event</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Vue</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">Event</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">$emit</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">事件名</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">数据</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">Event</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">$on</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">事件名</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {});</span></span></code></pre></div><h2 id="attrs、-listeners" tabindex="-1">$attrs、$listeners <a class="header-anchor" href="#attrs、-listeners" aria-label="Permalink to &quot;$attrs、$listeners&quot;">​</a></h2><p>主要用于实现隔代通信</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro has-highlighted-lines"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">Sub</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$attrs&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-on</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$listeners&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">/</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">Sub</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./SubChild.vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">inheritAttrs</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">components</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">Sub</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre></div><h4 id="attrs" tabindex="-1">$attrs <a class="header-anchor" href="#attrs" aria-label="Permalink to &quot;$attrs&quot;">​</a></h4><p>包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 <code>v-bind=&quot;$attrs&quot;</code>传入内部组件</p><h4 id="listeners" tabindex="-1">$listeners <a class="header-anchor" href="#listeners" aria-label="Permalink to &quot;$listeners&quot;">​</a></h4><p>包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 <code>v-on=&quot;$listeners&quot;</code> 传入内部组件</p><h4 id="inheritattrs" tabindex="-1">inheritAttrs <a class="header-anchor" href="#inheritattrs" aria-label="Permalink to &quot;inheritAttrs&quot;">​</a></h4><p>用于控制是否启用默认的组件 attribute 透传行为, 默认情况下(<code>inheritAttrs: true</code>)子组件的 props 没有接收的 值会被透传</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// parent</span></span>
<span class="line"><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;limy&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">18</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// child</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">inheritAttrs</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 没有接收 age</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- inheritAttrs: false --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">data-v-5c5c8dbe</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">data-v-fb07bed6</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;ccc&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- inheritAttrs: true --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">data-v-5c5c8dbe</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">data-v-fb07bed6</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">age</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;18&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;ccc&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="provide、inject" tabindex="-1">provide、inject <a class="header-anchor" href="#provide、inject" aria-label="Permalink to &quot;provide、inject&quot;">​</a></h2><p>祖先通过 provide 创建一个变量，子孙组件中通过 inject 来注入变量，主要用来跨级传输</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// parent</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">provide</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;limy&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// child</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">inject</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h3 id="实现响应式" tabindex="-1">实现响应式 <a class="header-anchor" href="#实现响应式" aria-label="Permalink to &quot;实现响应式&quot;">​</a></h3><ol><li>通过传递函数获取</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// parent</span></span>
<span class="line"><span style="color:#61AFEF;">provide</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">reactiveName</span><span style="color:#ABB2BF;">: () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// child</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">inject</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;reactiveName&#39;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">computed</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">_reactiveName</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reactiveName</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div><ol start="2"><li>传递时直接传<strong>响应式对象</strong></li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// parent</span></span>
<span class="line"><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">objName</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;obj limy&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#61AFEF;">provide</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">obj</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// child.vue</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// template</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt; objName: </span><span style="color:#C678DD;">{</span><span style="color:#ABB2BF;">{ obj.</span><span style="color:#E06C75;">objName</span><span style="color:#ABB2BF;"> }</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// script</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">inject</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;obj&#39;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><ol start="3"><li>直接传递父组件实例</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// parent</span></span>
<span class="line"><span style="color:#61AFEF;">provide</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">instance</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// child</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">inject</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;instance&#39;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h2 id="parent、-children、-ref" tabindex="-1">$parent、$children、$ref <a class="header-anchor" href="#parent、-children、-ref" aria-label="Permalink to &quot;$parent、$children、$ref&quot;">​</a></h2><p>都是通过拿父子组件的实例，从而进行通信</p><ul><li>$ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在组件上，引用就指向组件实例</li><li>$parent：访问父实例</li><li>$children：子实例</li></ul><h2 id="vuex" tabindex="-1"><a href="./vuex.html">vuex</a> <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;[vuex](./vuex.md)&quot;">​</a></h2><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844903845642911752" target="_blank" rel="noreferrer">掘金：Vue 组件间通信六种方式（完整版）</a></li></ul>`,34),e=[o];function t(c,r,B,i,y,F){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};