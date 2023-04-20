import{_ as s,o as n,c as a,R as l}from"./chunks/framework.35669211.js";const C=JSON.parse('{"title":"Pinia","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/vue/pinia.md"}'),o={name:"knowledge/vue/pinia.md"},p=l(`<h1 id="pinia" tabindex="-1">Pinia <a class="header-anchor" href="#pinia" aria-label="Permalink to &quot;Pinia&quot;">​</a></h1><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ol><li>Pinia 的 store 是相互独立的，通过唯一 key 来区分</li><li>Pinia 没有 Mutations，Actions 支持同步和异步</li><li>使用上不需要用 commit、dispatch 这种方式，而是直接调用</li></ol><h2 id="store" tabindex="-1">Store <a class="header-anchor" href="#store" aria-label="Permalink to &quot;Store&quot;">​</a></h2><h4 id="_1-创建-store" tabindex="-1">1. 创建 store <a class="header-anchor" href="#_1-创建-store" aria-label="Permalink to &quot;1. 创建 store&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineStore</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;pinia&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">useStore</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineStore</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;main&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// other options...</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。</li><li>第一个参数是应用程序中 store 的唯一 id</li></ol></div><h4 id="_2-使用-store" tabindex="-1">2. 使用 store <a class="header-anchor" href="#_2-使用-store" aria-label="Permalink to &quot;2. 使用 store&quot;">​</a></h4><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">useStore</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;@/stores/counter&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineComponent</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">store</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useStore</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ❌ 这不起作用，因为它会破坏响应式</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 这和从 props 解构是一样的</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">doubleCount</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">store</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 一直会是 &quot;eduardo&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 一直会是 2</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">doubleCount</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 这将是响应式的</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">doubleValue</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">computed</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">store</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">doubleCount</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre></div><h4 id="_3-storetorefs-可以将数据变成响应式" tabindex="-1">3. <code>storeToRefs</code> 可以将数据变成响应式 <a class="header-anchor" href="#_3-storetorefs-可以将数据变成响应式" aria-label="Permalink to &quot;3. \`storeToRefs\` 可以将数据变成响应式&quot;">​</a></h4><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">storeToRefs</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;pinia&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineComponent</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">store</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useStore</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// \`name\` 和 \`doubleCount\` 是响应式引用</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 这也会为插件添加的属性创建引用</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 但跳过任何 action 或 非响应式（不是 ref/reactive）的属性</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">doubleCount</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">storeToRefs</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">store</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">doubleCount</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre></div><h2 id="getters" tabindex="-1">Getters <a class="header-anchor" href="#getters" aria-label="Permalink to &quot;Getters&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">useStore</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineStore</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;main&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// other options...</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">getters</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;">@example</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * &lt;template&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *    &lt;p&gt;Double count is {{ store.doubleCount }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * &lt;/template&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">doubleCount</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">state</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">counter</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;">@example</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * &lt;template&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *    &lt;p&gt;User 2: {{ getUserById(2) }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * &lt;/template&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * setup() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *  const store = useStore()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *  return { getUserById: store.getUserById }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">getUserById</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;font-style:italic;">state</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">userId</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">users</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">user</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">user</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">userId</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre></div><h2 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-label="Permalink to &quot;Actions&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">useStore</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineStore</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;main&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// other options...</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">actions</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * setup() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *    const main = useMainStore()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *    // Actions 像 methods 一样被调用：</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *    main.randomizeCounter()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *    return {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * },</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">increment</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">counter</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">registerUser</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">login</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">password</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">userData</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">api</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">post</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">login</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">password</span><span style="color:#ABB2BF;"> });</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://pinia.web3doc.top/getting-started.html" target="_blank" rel="noreferrer">pinia 官网</a></li></ul>`,17),e=[p];function t(c,B,r,y,i,F){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};