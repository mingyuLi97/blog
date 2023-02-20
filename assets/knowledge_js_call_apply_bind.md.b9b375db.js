import{_ as s,o as a,c as n,a as l}from"./app.b16e6973.js";const C=JSON.parse('{"title":"apply\u3001call\u3001bind","description":"","frontmatter":{},"headers":[{"level":2,"title":"call","slug":"call","link":"#call","children":[]},{"level":2,"title":"apply","slug":"apply","link":"#apply","children":[]},{"level":2,"title":"bind","slug":"bind","link":"#bind","children":[]}],"relativePath":"knowledge/js/call_apply_bind.md"}'),p={name:"knowledge/js/call_apply_bind.md"},o=l(`<h1 id="apply\u3001call\u3001bind" tabindex="-1">apply\u3001call\u3001bind <a class="header-anchor" href="#apply\u3001call\u3001bind" aria-hidden="true">#</a></h1><h2 id="call" tabindex="-1">call <a class="header-anchor" href="#call" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">Function</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">_call</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, ...</span><span style="color:#E06C75;">args</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">window</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">](...</span><span style="color:#E06C75;">args</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div><h2 id="apply" tabindex="-1">apply <a class="header-anchor" href="#apply" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">Function</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">_apply</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">args</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">window</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">](...</span><span style="color:#E06C75;">args</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div><h2 id="bind" tabindex="-1">bind <a class="header-anchor" href="#bind" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">Function</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">_bind</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, ...</span><span style="color:#E06C75;">args</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">window</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (...</span><span style="color:#E06C75;">innerArgs</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">](...</span><span style="color:#E06C75;">args</span><span style="color:#ABB2BF;">, ...</span><span style="color:#E06C75;">innerArgs</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;">// delete target[key]; // \u4E0D\u80FD\u5220\u9664\uFF0C\u5426\u5219\u7B2C\u4E8C\u6B21\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u51FA\u73B0\u95EE\u9898\u3002</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div>`,7),B=[o];function e(t,c,r,y,F,A){return a(),n("div",null,B)}const d=s(p,[["render",e]]);export{C as __pageData,d as default};