import{_ as s,o as n,c as a,a as l}from"./app.71c3c618.js";const E=JSON.parse('{"title":"\u7B2C\u4E03\u7AE0\uFF1A\u6E32\u67D3\u5668\u7684\u8BBE\u8BA1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E32\u67D3\u5668\u7684\u57FA\u672C\u6982\u5FF5","slug":"\u6E32\u67D3\u5668\u7684\u57FA\u672C\u6982\u5FF5","link":"#\u6E32\u67D3\u5668\u7684\u57FA\u672C\u6982\u5FF5","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668","slug":"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668","link":"#\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668","children":[]}],"relativePath":"book-note/vuejs-design/7.md"}'),p={name:"book-note/vuejs-design/7.md"},o=l(`<h1 id="\u7B2C\u4E03\u7AE0\uFF1A\u6E32\u67D3\u5668\u7684\u8BBE\u8BA1" tabindex="-1">\u7B2C\u4E03\u7AE0\uFF1A\u6E32\u67D3\u5668\u7684\u8BBE\u8BA1 <a class="header-anchor" href="#\u7B2C\u4E03\u7AE0\uFF1A\u6E32\u67D3\u5668\u7684\u8BBE\u8BA1" aria-hidden="true">#</a></h1><h2 id="\u6E32\u67D3\u5668\u7684\u57FA\u672C\u6982\u5FF5" tabindex="-1">\u6E32\u67D3\u5668\u7684\u57FA\u672C\u6982\u5FF5 <a class="header-anchor" href="#\u6E32\u67D3\u5668\u7684\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a></h2><ul><li>renderer\uFF1A\u6E32\u67D3\u5668\uFF0C\u5176\u4F5C\u7528\u662F\u628A \u865A\u62DF DOM \u6E32\u67D3\u6210\u7279\u5B9A\u5E73\u53F0\u4E0A\u7684\u771F\u5B9E\u5143\u7D20\u3002</li><li>render\uFF1A\u52A8\u8BCD\uFF0C\u8868\u793A\u6E32\u67D3\u3002</li><li>virtual DOM\uFF1A\u865A\u62DF DOM\uFF0C\u901A\u5E38\u7B80\u5199\u6210 vdom</li><li>virtual Node\uFF1A\u865A\u62DF\u8282\u70B9\uFF0C\u7B80\u5199\u6210 vnode\uFF0C\u662F vdom \u4E0A\u7684\u4EFB\u4F55\u4E00\u4E2A\u5B50\u6811\uFF0C\u56E0\u6B64 vdom \u548C vnode \u53EF\u4EE5\u66FF\u6362\u4F7F\u7528\u3002</li><li>mount\uFF1A\u6E32\u67D3\u5668\u628A vdom \u6E32\u67D3\u6210\u771F\u5B9E\u5143\u7D20\u7684\u8FC7\u7A0B\u79F0\u4E3A <strong>\u6302\u8F7D</strong></li></ul><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createRenderer</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">mountElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">el</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vnode</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">typeof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vnode</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;string&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">el</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">textContent</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vnode</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">container</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">appendChild</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;">/**</span></span>
<span class="line"><span style="color:#7F848E;">   *</span></span>
<span class="line"><span style="color:#7F848E;">   * </span><span style="color:#C678DD;">@param</span><span style="color:#7F848E;"> </span><span style="color:#E06C75;">n1</span><span style="color:#7F848E;"> \u65E7\u7684 vnode</span></span>
<span class="line"><span style="color:#7F848E;">   * </span><span style="color:#C678DD;">@param</span><span style="color:#7F848E;"> </span><span style="color:#E06C75;">n2</span><span style="color:#7F848E;"> \u65B0\u7684 vnode</span></span>
<span class="line"><span style="color:#7F848E;">   * </span><span style="color:#C678DD;">@param</span><span style="color:#7F848E;"> </span><span style="color:#E06C75;">container</span><span style="color:#7F848E;"> \u6302\u8F7D\u7684\u8282\u70B9</span></span>
<span class="line"><span style="color:#7F848E;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">patch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">n2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;">// \u6CA1\u6709 n1 \u8BC1\u660E\u662F\u7B2C\u4E00\u6B21\u6302\u8F7D</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">n1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">mountElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">// TODO\uFF1A\u6253\u8865\u4E01</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">// \u65B0 vnode \u5B58\u5728\uFF0C\u5C06\u5176\u4E0E\u65E7 vnode \u4E00\u8D77\u4F20\u9012\u7ED9 patch \u51FD\u6570\uFF0C\u8FDB\u884C\u6253\u8865\u4E01</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">patch</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">container</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_vnode</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">container</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_vnode</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;">// \u65E7 vnode \u5B58\u5728\uFF0C\u65B0\u7684\u4E0D\u5B58\u5728\uFF0C\u8BF4\u660E\u662F\u5378\u8F7D\u64CD\u4F5C - unmount</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">container</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerHTML</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">container</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_vnode</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">render</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">rendered</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createRenderer</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">rendered</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#renderId&#39;</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"></span></code></pre></div><h2 id="\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668" tabindex="-1">\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5728\u521B\u5EFA\u6E32\u67D3\u5668\u65F6\u5C06\u4E00\u4E9B\u57FA\u7840\u64CD\u4F5C\u4F20\u5165</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createRenderer</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">options</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">createElement</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setElementText</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">insert</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">options</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">mountElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">el</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vnode</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">typeof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vnode</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;string&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">setElementText</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">vnode</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">insert</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">patch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">n2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;">/** */</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;">/** */</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">render</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">rendered</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createRenderer</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">tag</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">tag</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setElementText</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">el</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">textContent</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">insert</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">parent</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">anchor</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">parent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">insertBefore</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">anchor</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function B(c,t,r,y,F,A){return n(),a("div",null,e)}const C=s(p,[["render",B]]);export{E as __pageData,C as default};
