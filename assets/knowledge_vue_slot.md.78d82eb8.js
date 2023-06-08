import{_ as s,o as n,c as a,R as l}from"./chunks/framework.d45ee533.js";const d=JSON.parse('{"title":"Slot","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/vue/slot.md"}'),p={name:"knowledge/vue/slot.md"},o=l(`<h1 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-label="Permalink to &quot;Slot&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>插槽是组件中用来占位的标签，允许传递外部自定义的结构，从而更好的复用组件。 可以这么理解，与 Props 类似，props 传递的是数据，插槽传递的是的结构。</p><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h2><ul><li>默认插槽</li><li>具名插槽</li><li>作用域插槽</li></ul><h2 id="代码展示" tabindex="-1">代码展示 <a class="header-anchor" href="#代码展示" aria-label="Permalink to &quot;代码展示&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">layout</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 具名插槽 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#header</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;in header&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 默认插槽 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;{{ msg }}&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 作用域插槽 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#footer</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;slotProps&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;in footer {{ slotProps }}&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">layout</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../dist/vue.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Vue</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#app&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;default slot&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">        };</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">components</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">layout</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">                      &lt;header&gt;</span></span>
<span class="line"><span style="color:#98C379;">                        &lt;!-- 具名插槽 --&gt;</span></span>
<span class="line"><span style="color:#98C379;">                        &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#98C379;">                      &lt;/header&gt;</span></span>
<span class="line"><span style="color:#98C379;">                      &lt;main&gt;</span></span>
<span class="line"><span style="color:#98C379;">                        &lt;!-- 默认插槽 --&gt;</span></span>
<span class="line"><span style="color:#98C379;">                        &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#98C379;">                      &lt;/main&gt;</span></span>
<span class="line"><span style="color:#98C379;">                      &lt;footer&gt;</span></span>
<span class="line"><span style="color:#98C379;">                        &lt;!-- 作用域插槽 --&gt;</span></span>
<span class="line"><span style="color:#98C379;">                        &lt;slot name=&quot;footer&quot; :data1=&quot;innerMsg&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#98C379;">                      &lt;/footer&gt;</span></span>
<span class="line"><span style="color:#98C379;">                    &lt;/div&gt;\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">innerMsg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;innerMsg&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            };</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>工具函数介绍</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">_c: createElement</span></span>
<span class="line"><span style="color:#abb2bf;">_u: resolveScopedSlots</span></span>
<span class="line"><span style="color:#abb2bf;">_v: createTextVNode</span></span>
<span class="line"><span style="color:#abb2bf;">_s: toString</span></span>
<span class="line"><span style="color:#abb2bf;">_t: renderSlot</span></span></code></pre></div><p>父组件的 render 函数</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&#39;section&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">attrs</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;app&#39;</span><span style="color:#ABB2BF;"> } },</span></span>
<span class="line"><span style="color:#ABB2BF;">  [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">&#39;layout&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">scopedSlots</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">_u</span><span style="color:#ABB2BF;">([</span></span>
<span class="line"><span style="color:#ABB2BF;">          {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;header&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> [</span><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;p&#39;</span><span style="color:#ABB2BF;">, [</span><span style="color:#61AFEF;">_v</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;in header&#39;</span><span style="color:#ABB2BF;">)])];</span></span>
<span class="line"><span style="color:#ABB2BF;">            },</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">proxy</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">          },</span></span>
<span class="line"><span style="color:#ABB2BF;">          {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;footer&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">slotProps</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> [</span><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;p&#39;</span><span style="color:#ABB2BF;">, [</span><span style="color:#61AFEF;">_v</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;in footer &#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_s</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">slotProps</span><span style="color:#ABB2BF;">))])];</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        ])</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      [</span><span style="color:#61AFEF;">_v</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39; &#39;</span><span style="color:#ABB2BF;">), </span><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;div&#39;</span><span style="color:#ABB2BF;">, [</span><span style="color:#61AFEF;">_v</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">_s</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">))])]</span></span>
<span class="line"><span style="color:#ABB2BF;">    )</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span></code></pre></div><p>子组件（layout）的 render</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;div&#39;</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">staticClass</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;container&#39;</span><span style="color:#ABB2BF;"> }, [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;header&#39;</span><span style="color:#ABB2BF;">, [</span><span style="color:#61AFEF;">_t</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;header&#39;</span><span style="color:#ABB2BF;">)], </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">_v</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39; &#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;main&#39;</span><span style="color:#ABB2BF;">, [</span><span style="color:#61AFEF;">_t</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;default&#39;</span><span style="color:#ABB2BF;">)], </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">_v</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39; &#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">_c</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;footer&#39;</span><span style="color:#ABB2BF;">, [</span><span style="color:#61AFEF;">_t</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;footer&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">data1</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">innerMsg</span><span style="color:#ABB2BF;"> })], </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">]);</span></span></code></pre></div><ol><li>执行<code>vm._init</code></li><li>执行 <code>vm._render</code><ol><li>执行 <code>_u: resolveScopedSlots</code>，解析出作用域插槽</li><li>执行 <code>_c(&#39;div&#39;, [_v(_s(msg))])</code>，创建出默认插槽的 vnode</li><li>执行 <code>_c(&#39;layout&#39;, ...</code> ，创建组件 vnode <ol><li>此时 <code>vnode.componentOptions.children</code> 存储了默认插槽</li><li><code>vnode.data.scopedSlots</code> 存储了作用域插槽 header、footer</li></ol></li></ol></li><li>得到父组件 vnode</li><li>调用 <code>vm._update</code> 即调用 <code>patch</code></li><li>第一次调用 patch，会执行创建，创建 section =&gt; 创建 layout（layout 是组件所以调用 <code>createComponent</code>）</li><li>创建组件，调用组件（layout）的 <code>vm._init</code><ol><li>调用 <code>initInternalComponent</code>，将 <code>vnode.componentOptions.children</code> 放到 <code>vm.$options._renderChildren</code></li><li>调用 <code>initRender</code>, 将默认插槽放置到 <code>vm.$slots</code></li></ol></li><li>组件挂载，执行 <code>vm._render</code><ol><li>执行 <code>normalizeScopedSlots</code>，将所有插槽转换成作用域插槽挂载到 <code>vm.$scopedSlots</code></li></ol></li><li>调用 render 函数 <ol><li>调用 <code>_t: renderSlot</code>, 在 $scopedSlots 中通过 name 匹配出对应的函数并执行,得到插槽的 vnode 插入到当前子组件</li></ol></li></ol><h4 id="原理总结" tabindex="-1">原理总结 <a class="header-anchor" href="#原理总结" aria-label="Permalink to &quot;原理总结&quot;">​</a></h4><p>在模版编译时，如果发现组件中存在子组件，那么就会将它们当作插槽，根据名称将其分为两类、默认插槽和作用域插槽，默认插槽放置在 children 中， 作用域插槽放在 scopedSlots 中。render 执行时，默认插槽会被编译成 vnode，scopedSlots 编译成函数。子组件 init 时，将父组件传递的 children 转换成 $slot, 并与父组件上的 scopedSlots 合并，生成 $scopedSlots。子组件 render 函数执行时，根据插槽的 name 在 $scopedSlots 取出对应的值，如果是 vnode 就直接使用，如果是函数就将数据传递并调用返回 vnode.</p>`,17),e=[o];function t(c,B,r,y,i,F){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};