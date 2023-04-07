import{o as E,c as m,x as r,b as c,Q as B}from"./chunks/framework.f14b72c3.js";Promise.all=o=>{const n=[];let a=0;return new Promise((l,p)=>{o.forEach((s,e)=>{Promise.resolve(s).then(t=>{n[e]=t,++a===o.length&&l(n)}).catch(p)})})};Promise.race=o=>new Promise((n,a)=>{o.forEach(l=>Promise.resolve(l).then(n,a))});Promise.any=o=>{const n=[];let a=0;return new Promise((l,p)=>{o.forEach((s,e)=>{Promise.resolve(s).then(l,t=>{n[e]=t,++a===o.length&&p(new AggregateError(n))})})})};Promise.allSettled=o=>{const n=[];let a=0;return new Promise((l,p)=>{o.forEach((s,e)=>{Promise.resolve(s).then(t=>{n.push({status:"fulfilled",value:t})}).catch(t=>{n.push({status:"rejected",reason:t})}).finally(t=>{++a===o.length&&l(n)})})})};function y(){const o=Promise.resolve("p1"),n=new Promise((s,e)=>{setTimeout(()=>{s("p2 延时一秒")},1e3)}),a=new Promise((s,e)=>{setTimeout(()=>{s("p3 延时两秒")},2e3)}),l=Promise.reject("p4 rejected"),p=new Promise((s,e)=>{setTimeout(()=>{e("p5 rejected 延时1.5秒")},1500)});return[o,n,a,l,p]}function i(){console.log("---------------- Promise.all ---------------------");const[o,n,a,l,p]=y();Promise.all([o,n,a]).then(s=>{console.log(s)}).catch(s=>console.log(s)),Promise.all([o,n,l]).then(s=>{console.log(s)}).catch(s=>console.log(s)),Promise.all([o,n,p]).then(s=>{console.log(s)}).catch(s=>console.log(s)),Promise.all([o,l,p]).then(s=>{console.log(s)}).catch(s=>console.log(s))}function F(){console.log("---------------- Promise.race ---------------------");const[o,n,a,l,p]=y();Promise.race([o,n,a]).then(s=>console.log(s)).catch(s=>console.log(s)),Promise.race([l,n,a]).then(s=>console.log(s)).catch(s=>console.log(s)),Promise.race([p,n,a]).then(s=>console.log(s)).catch(s=>console.log(s))}function A(){console.log("---------------- Promise.any ---------------------");const[o,n,a,l,p]=y();Promise.any([o,n,a]).then(s=>console.log(s)).catch(s=>console.log(s)),Promise.any([o,n,l]).then(s=>console.log(s)).catch(s=>console.log(s)),Promise.any([n,l,p]).then(s=>console.log(s)).catch(s=>console.log(s)),Promise.any([l,p]).then(s=>console.log(s)).catch(s=>console.log(s))}function C(){console.log("---------------- Promise.allSettled ---------------------");const[o,n,a,l,p]=y();Promise.allSettled([o,n,a]).then(s=>console.log(s)).catch(s=>console.log(s)),Promise.allSettled([o,n,l]).then(s=>console.log(s)).catch(s=>console.log(s)),Promise.allSettled([l,p]).then(s=>console.log(s)).catch(s=>console.log(s))}const d=B('<h1 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;Promise&quot;">​</a></h1><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ol><li><p>Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行</p></li><li><p>Promise 会有三种状态</p><ul><li>Pending 等待</li><li>Fulfilled 完成</li><li>Rejected 失败</li></ul></li><li><p>状态只能由 Pending --&gt; Fulfilled 或者 Pending --&gt; Rejected，且一但发生改变便不可二次修改；</p></li><li><p>Promise 中使用 resolve 和 reject 两个函数来更改状态；</p></li><li><p>then 方法内部做但事情就是状态判断</p><ul><li>如果状态是成功，调用成功回调函数</li><li>如果状态是失败，调用失败回调函数</li></ul></li></ol><h2 id="promise-resolve" tabindex="-1">Promise.resolve <a class="header-anchor" href="#promise-resolve" aria-label="Permalink to &quot;Promise.resolve&quot;">​</a></h2><ol><li><code>Promise.resolve(42)</code> 相当于 <code>new Promise(function(resolve){ resolve(42); });</code></li><li>将 thenable 对象转换为 Promise 对象</li></ol><h2 id="promise-all" tabindex="-1">Promise.all <a class="header-anchor" href="#promise-all" aria-label="Permalink to &quot;Promise.all&quot;">​</a></h2><ol><li>参数为 <code>Promise&lt;any&gt;[]</code></li><li>返回值还是一个 Promise 对象</li><li>只要有一个失败，Promise.all 就会执行 <code>reject()</code></li></ol>',7),u=B(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@param</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E5C07B;font-style:italic;">{Promise[]}</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">promises</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">all</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">promises</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">reject</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">promises</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">p</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">idx</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">//</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">idx</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">++</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">promises</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        })</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">reject</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div><h2 id="promise-race" tabindex="-1">Promise.race <a class="header-anchor" href="#promise-race" aria-label="Permalink to &quot;Promise.race&quot;">​</a></h2><ol><li>参数为 <code>Promise&lt;any&gt;[]</code></li><li>采用第一个完成了的(resolve or reject) Promise 的值</li></ol>`,3),P=B(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">race</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">promises</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">reject</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">promises</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">p</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">reject</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div><h2 id="promise-any" tabindex="-1">Promise.any <a class="header-anchor" href="#promise-any" aria-label="Permalink to &quot;Promise.any&quot;">​</a></h2><p>与 Promise.all 可以看做是相反的。Promise.any 中只要有一个 Promise 实例成功就成功，只有当所有的 Promise 实例失败时 Promise.any 才失败，此时 Promise.any 会把所有的失败/错误集合在一起，返回一个失败的  promise  和 AggregateError 类型的实例</p>`,3),h=B(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">any</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">promises</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">errs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">reject</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">promises</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">p</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">idx</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">err</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">errs</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">idx</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">++</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">promises</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#61AFEF;">reject</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">AggregateError</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">errs</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      });</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div><h2 id="promise-allsettled" tabindex="-1">Promise.allSettled <a class="header-anchor" href="#promise-allsettled" aria-label="Permalink to &quot;Promise.allSettled&quot;">​</a></h2><ol><li>参数为 <code>Promise&lt;any&gt;[]</code></li><li>返回所有 Promise 执行后的返回结果，对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。如果值为 rejected，则存在一个 reason 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值。</li></ol>`,3),g=B(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">allSettled</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">promises</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@type</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E5C07B;font-style:italic;">{{status: &#39;fulfilled&#39; | &#39;rejected&#39;, reason?: any, value?:any}[]}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">reject</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">promises</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">p</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">idx</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;fulfilled&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">res</span></span>
<span class="line"><span style="color:#ABB2BF;">          });</span></span>
<span class="line"><span style="color:#ABB2BF;">        })</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">err</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;rejected&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">reason</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">err</span></span>
<span class="line"><span style="color:#ABB2BF;">          });</span></span>
<span class="line"><span style="color:#ABB2BF;">        })</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">finally</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">++</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">promises</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        });</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7069805387490263047" target="_blank" rel="noreferrer">掘金：字节飞书面试——请实现 promise.all</a></li></ul>`,3),_=JSON.parse('{"title":"Promise","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/js/promise.md"}'),f={name:"knowledge/js/promise.md"},v=Object.assign(f,{setup(o){return(n,a)=>(E(),m("div",null,[d,r("p",null,[r("button",{class:"brand-c-button",onClick:a[0]||(a[0]=(...l)=>c(i)&&c(i)(...l))},"runPromiseAll")]),u,r("p",null,[r("button",{class:"brand-c-button",onClick:a[1]||(a[1]=(...l)=>c(F)&&c(F)(...l))},"runPromiseRace")]),P,r("p",null,[r("button",{class:"brand-c-button",onClick:a[2]||(a[2]=(...l)=>c(A)&&c(A)(...l))},"runPromiseAny")]),h,r("p",null,[r("button",{class:"brand-c-button",onClick:a[3]||(a[3]=(...l)=>c(C)&&c(C)(...l))},"runPromiseAllSettled")]),g]))}});export{_ as __pageData,v as default};
