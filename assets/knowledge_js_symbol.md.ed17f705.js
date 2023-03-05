import{_ as s,o as n,c as a,a as l}from"./app.f6cf37cd.js";const C=JSON.parse('{"title":"Symbol","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5","link":"#\u7528\u6CD5","children":[]},{"level":2,"title":"\u7B80\u6613\u5B9E\u73B0","slug":"\u7B80\u6613\u5B9E\u73B0","link":"#\u7B80\u6613\u5B9E\u73B0","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"knowledge/js/symbol.md"}'),p={name:"knowledge/js/symbol.md"},o=l(`<h1 id="symbol" tabindex="-1">Symbol <a class="header-anchor" href="#symbol" aria-hidden="true">#</a></h1><p>Symbol \u662F\u4E00\u4E2A\u539F\u59CB\u503C\u7C7B\u578B\uFF0C<code>Symbol()</code> \u51FD\u6570\u4F1A\u8FD4\u56DE <strong>symbol</strong> \u7C7B\u578B\u7684\u503C\uFF0C\u521B\u5EFA\u7684\u503C\u662F<strong>\u552F\u4E00\u7684</strong>\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><p>Symbol()\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8868\u793A\u5BF9 Symbol \u5B9E\u4F8B\u7684\u63CF\u8FF0\u3002\u8FD9\u4E3B\u8981\u662F\u4E3A\u4E86\u5728\u63A7\u5236\u53F0\u663E\u793A\uFF0C\u6216\u8005\u8F6C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u6BD4\u8F83\u5BB9\u6613\u533A\u5206\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sym1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sym2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;foo&#39;</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// Symbol(foo)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;foo&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;foo&#39;</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u4E0D\u652F\u6301 new \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sym</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;">// TypeError</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u4E0D\u652F\u6301\u4E0E\u5176\u4ED6\u7C7B\u578B\u76F4\u63A5\u8BA1\u7B97</span></span>
<span class="line"><span style="color:#98C379;">&#39;your symbol is &#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sym</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// TypeError: can&#39;t convert symbol to string</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u5F53\u4F7F\u7528 JSON.stringify() \u65F6\uFF0C\u4EE5 symbol \u503C\u4F5C\u4E3A\u952E\u7684\u5C5E\u6027\u4F1A\u88AB\u5B8C\u5168\u5FFD\u7565\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">({ [</span><span style="color:#61AFEF;">Symbol</span><span style="color:#E06C75;">(</span><span style="color:#98C379;">&#39;foo&#39;</span><span style="color:#E06C75;">)</span><span style="color:#ABB2BF;">]: </span><span style="color:#98C379;">&#39;foo&#39;</span><span style="color:#ABB2BF;"> });</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;{}&#39;</span></span>
<span class="line"></span></code></pre></div></div><p>\u83B7\u53D6 Symbol</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;Hello&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;World&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">objectSymbols</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getOwnPropertySymbols</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">objectSymbols</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// [Symbol(a), Symbol(b)]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7B80\u6613\u5B9E\u73B0" tabindex="-1">\u7B80\u6613\u5B9E\u73B0 <a class="header-anchor" href="#\u7B80\u6613\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">genUniqueName</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">description</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;@@&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">description</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;_&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">id</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">})();</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">SymbolPolyfill</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">description</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Symbol</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">throw</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">TypeError</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Symbol is not a constructor&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">__Name__</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">defineProperties</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">symbol</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">__Name__</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">genUniqueName</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">description</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">writable</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">configurable</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">enumerable</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">__Description__</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">description</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">writable</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">configurable</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">enumerable</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">symbol</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">SymbolPolyfill</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;foo&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">SymbolPolyfill</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;foo&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">o</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#E06C75;">o</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;hello&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">o</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;hi&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">o</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// Object { &quot;@@foo_1&quot;: &quot;hello&quot;, &quot;@@foo_2&quot;: &quot;hi&quot; }</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol" target="_blank" rel="noreferrer">MDN</a></li><li><a href="https://juejin.cn/post/6844903619544760328" target="_blank" rel="noreferrer">\u6398\u91D1\uFF1AES6 \u7CFB\u5217\u4E4B\u6A21\u62DF\u5B9E\u73B0 Symbol \u7C7B\u578B</a></li></ul>`,12),e=[o];function B(c,t,r,y,F,A){return n(),a("div",null,e)}const E=s(p,[["render",B]]);export{C as __pageData,E as default};