import{_ as s,o as a,c as l,d as n}from"./app.02308d28.js";const F=JSON.parse('{"title":"\u8DE8\u57DF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u540C\u6E90\u7B56\u7565","slug":"\u540C\u6E90\u7B56\u7565","link":"#\u540C\u6E90\u7B56\u7565","children":[]},{"level":2,"title":"jsonp","slug":"jsonp","link":"#jsonp","children":[]},{"level":2,"title":"CORS","slug":"cors","link":"#cors","children":[{"level":3,"title":"\u7B80\u5355\u8BF7\u6C42","slug":"\u7B80\u5355\u8BF7\u6C42","link":"#\u7B80\u5355\u8BF7\u6C42","children":[]},{"level":3,"title":"\u590D\u6742\u8BF7\u6C42","slug":"\u590D\u6742\u8BF7\u6C42","link":"#\u590D\u6742\u8BF7\u6C42","children":[]},{"level":3,"title":"HTTP \u8BF7\u6C42\u9996\u90E8\u5B57\u6BB5","slug":"http-\u8BF7\u6C42\u9996\u90E8\u5B57\u6BB5","link":"#http-\u8BF7\u6C42\u9996\u90E8\u5B57\u6BB5","children":[]},{"level":3,"title":"HTTP \u54CD\u5E94\u9996\u90E8\u5B57\u6BB5","slug":"http-\u54CD\u5E94\u9996\u90E8\u5B57\u6BB5","link":"#http-\u54CD\u5E94\u9996\u90E8\u5B57\u6BB5","children":[]}]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"knowledge/browser/cross-domain.md"}'),o={name:"knowledge/browser/cross-domain.md"},p=n(`<h1 id="\u8DE8\u57DF" tabindex="-1">\u8DE8\u57DF <a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a></h1><h2 id="\u540C\u6E90\u7B56\u7565" tabindex="-1">\u540C\u6E90\u7B56\u7565 <a class="header-anchor" href="#\u540C\u6E90\u7B56\u7565" aria-hidden="true">#</a></h2><blockquote><p>\u534F\u8BAE+\u57DF\u540D+\u7AEF\u53E3 \u5B8C\u5168\u76F8\u540C\uFF0C\u5219\u4E3A\u540C\u6E90\u3002</p></blockquote><p>\u9650\u5236\uFF1A</p><ul><li>Cookie\u3001LocalStorage\u3001IndexedDB \u7B49\u5B58\u50A8\u6027\u5185\u5BB9</li><li>DOM \u8282\u70B9</li><li>AJAX \u8BF7\u6C42\u53D1\u9001\u540E\uFF0C\u7ED3\u679C\u88AB\u6D4F\u89C8\u5668\u62E6\u622A\u4E86</li></ul><p>\u4F46\u662F\u6709\u4E09\u4E2A\u6807\u7B7E\u662F\u5141\u8BB8\u8DE8\u57DF\u52A0\u8F7D\u8D44\u6E90\uFF1A</p><ul><li><code>&lt;img src=XXX&gt;</code></li><li><code>&lt;link href=XXX&gt;</code></li><li><code>&lt;script src=XXX&gt;</code></li></ul><h2 id="jsonp" tabindex="-1">jsonp <a class="header-anchor" href="#jsonp" aria-hidden="true">#</a></h2><blockquote><p>\u5229\u7528 <code>&lt;script&gt;</code> \u6807\u7B7E\u6CA1\u6709\u8DE8\u57DF\u9650\u5236\u7684\u6F0F\u6D1E\uFF0C\u7F51\u9875\u53EF\u4EE5\u5F97\u5230\u4ECE\u5176\u4ED6\u6765\u6E90\u52A8\u6001\u4EA7\u751F\u7684 JSON \u6570\u636E\u3002JSONP \u8BF7\u6C42\u4E00\u5B9A\u9700\u8981\u670D\u52A1\u5668\u505A\u652F\u6301\u624D\u53EF\u4EE5\u3002</p></blockquote><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#7F848E;">// index.html</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">jsonp</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">callback</span><span style="color:#ABB2BF;"> }) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">reject</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;script&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">window</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">callback</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">body</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">removeChild</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { ...</span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">callback</span><span style="color:#ABB2BF;"> }; </span><span style="color:#7F848E;">// wd=b&amp;callback=show</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arrs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">arrs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">key</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">=</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">]</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">script</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">src</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">url</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">?</span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">arrs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;&amp;&#39;</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">body</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">appendChild</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;">jsonp</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;http://localhost:3000/say&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">wd</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Iloveyou&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">callback</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;show&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">}).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre></div><h2 id="cors" tabindex="-1">CORS <a class="header-anchor" href="#cors" aria-hidden="true">#</a></h2><blockquote><p>CORS \u662F\u4E00\u4E2A W3C \u6807\u51C6,\u5168\u79F0\u662F&quot;\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB&quot;\uFF08Cross-origin resource sharing\uFF09\uFF0C\u4ED6\u5141\u8BB8\u6D4F\u89C8\u5668\u5411\u8DE8\u6E90\u670D\u52A1\u5668\u53D1\u9001 XMLHttpRequest \u8BF7\u6C42\uFF0C\u4ECE\u800C\u514B\u670D\u5566 AJAX \u53EA\u80FD\u540C\u6E90\u4F7F\u7528\u7684\u9650\u5236</p></blockquote><h3 id="\u7B80\u5355\u8BF7\u6C42" tabindex="-1">\u7B80\u5355\u8BF7\u6C42 <a class="header-anchor" href="#\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a></h3><p>\u7B26\u5408\u7B80\u5355\u8BF7\u6C42\u7684\u914D\u7F6E(\u7C97\u7565), \u8BE6\u7EC6\u7684\u89C1 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#%E7%AE%80%E5%8D%95%E8%AF%B7%E6%B1%82" target="_blank" rel="noreferrer">MDN</a></p><ol><li>\u8BF7\u6C42\u65B9\u6CD5\u4E3A <code>GET\u3001HEAD\u3001POST</code> \u4E4B\u4E00</li><li>\u6CA1\u6709\u81EA\u5B9A\u4E49 Headers</li><li>Content-Type \u5FC5\u987B\u4E3A <code>application/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain</code> \u4E4B\u4E00</li><li>\u8BF7\u6C42\u4E2D\u7684\u4EFB\u610F XMLHttpRequestUpload \u5BF9\u8C61\u5747\u6CA1\u6709\u6CE8\u518C\u4EFB\u4F55\u4E8B\u4EF6\u76D1\u542C\u5668\uFF1B</li><li>\u8BF7\u6C42\u4E2D\u6CA1\u6709\u4F7F\u7528 ReadableStream \u5BF9\u8C61\u3002</li></ol><h3 id="\u590D\u6742\u8BF7\u6C42" tabindex="-1">\u590D\u6742\u8BF7\u6C42 <a class="header-anchor" href="#\u590D\u6742\u8BF7\u6C42" aria-hidden="true">#</a></h3><p>\u4E0D\u7B26\u5408\u7B80\u5355\u8BF7\u6C42\u7684\u4FBF\u662F\u590D\u6742\u8BF7\u6C42\uFF0C\u590D\u6742\u8BF7\u6C42\u4F1A\u5148\u53D1\u51FA\u9884\u68C0\u8BF7\u6C42</p><h4 id="\u9884\u68C0\u8BF7\u6C42-\uFF08options\uFF09" tabindex="-1">\u9884\u68C0\u8BF7\u6C42 \uFF08OPTIONS\uFF09 <a class="header-anchor" href="#\u9884\u68C0\u8BF7\u6C42-\uFF08options\uFF09" aria-hidden="true">#</a></h4><p>options \u8BF7\u6C42\u5C31\u662F\u9884\u68C0\u8BF7\u6C42\uFF0C\u53EF\u7528\u4E8E\u68C0\u6D4B\u670D\u52A1\u5668\u5141\u8BB8\u7684 http \u65B9\u6CD5\u3002\u5F53\u53D1\u8D77\u8DE8\u57DF\u8BF7\u6C42\u65F6\uFF0C\u7531\u4E8E\u5B89\u5168\u539F\u56E0\uFF0C\u89E6\u53D1\u4E00\u5B9A\u6761\u4EF6\u65F6\u6D4F\u89C8\u5668\u4F1A\u5728\u6B63\u5F0F\u8BF7\u6C42\u4E4B\u524D\u81EA\u52A8\u5148\u53D1\u8D77 OPTIONS \u8BF7\u6C42\uFF0C\u5373 CORS \u9884\u68C0\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u82E5\u63A5\u53D7\u8BE5\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u624D\u7EE7\u7EED\u53D1\u8D77\u6B63\u5F0F\u8BF7\u6C42\u3002</p><p>\u4F18\u5316\uFF1A\u5C06 options \u8BF7\u6C42\u8FDB\u884C\u7F13\u5B58\uFF0C\u670D\u52A1\u5668\u7AEF\u8BBE\u7F6E Access-Control-Max-Age \u5B57\u6BB5</p><h3 id="http-\u8BF7\u6C42\u9996\u90E8\u5B57\u6BB5" tabindex="-1">HTTP \u8BF7\u6C42\u9996\u90E8\u5B57\u6BB5 <a class="header-anchor" href="#http-\u8BF7\u6C42\u9996\u90E8\u5B57\u6BB5" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8FD9\u4E9B\u9996\u90E8\u5B57\u6BB5\u65E0\u987B\u624B\u52A8\u8BBE\u7F6E\u3002 \u5F53\u5F00\u53D1\u8005\u4F7F\u7528 XMLHttpRequest \u5BF9\u8C61\u53D1\u8D77\u8DE8\u6E90\u8BF7\u6C42\u65F6\uFF0C\u5B83\u4EEC\u5DF2\u7ECF\u88AB\u8BBE\u7F6E\u5C31\u7EEA\u3002</p></div><ul><li><code>Origin</code> \u9996\u90E8\u5B57\u6BB5\u8868\u660E\u9884\u68C0\u8BF7\u6C42\u6216\u5B9E\u9645\u8BF7\u6C42\u7684\u6E90\u7AD9\u3002\u5B83\u4E0D\u5305\u542B\u4EFB\u4F55\u8DEF\u5F84\u4FE1\u606F\uFF0C\u53EA\u662F\u670D\u52A1\u5668\u540D\u79F0\u3002</li><li><code>Access-Control-Request-Method</code> \u9996\u90E8\u5B57\u6BB5\u7528\u4E8E\u9884\u68C0\u8BF7\u6C42\u3002\u5176\u4F5C\u7528\u662F\uFF0C\u5C06\u5B9E\u9645\u8BF7\u6C42\u6240\u4F7F\u7528\u7684 HTTP \u65B9\u6CD5\u544A\u8BC9\u670D\u52A1\u5668\u3002</li><li><code>Access-Control-Request-Headers</code> \u9996\u90E8\u5B57\u6BB5\u7528\u4E8E\u9884\u68C0\u8BF7\u6C42\u3002\u5176\u4F5C\u7528\u662F\uFF0C\u5C06\u5B9E\u9645\u8BF7\u6C42\u6240\u643A\u5E26\u7684\u9996\u90E8\u5B57\u6BB5\u544A\u8BC9\u670D\u52A1\u5668\u3002</li></ul><h3 id="http-\u54CD\u5E94\u9996\u90E8\u5B57\u6BB5" tabindex="-1">HTTP \u54CD\u5E94\u9996\u90E8\u5B57\u6BB5 <a class="header-anchor" href="#http-\u54CD\u5E94\u9996\u90E8\u5B57\u6BB5" aria-hidden="true">#</a></h3><ul><li><code>Access-Control-Allow-Origin</code> \u8868\u793A\u5141\u8BB8\u8BF7\u6C42\u7684\u57DF</li><li><code>Access-Control-Expose-Headers</code> \u670D\u52A1\u5668\u628A\u5141\u8BB8\u6D4F\u89C8\u5668\u8BBF\u95EE\u7684\u5934\u653E\u5165\u767D\u540D\u5355</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5728\u8DE8\u6E90\u8BBF\u95EE\u65F6\uFF0CXMLHttpRequest \u5BF9\u8C61\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getResponseHeader" target="_blank" rel="noreferrer">getResponseHeader()</a> \u65B9\u6CD5\u53EA\u80FD\u62FF\u5230\u4E00\u4E9B\u6700\u57FA\u672C\u7684\u54CD\u5E94\u5934\uFF0CCache-Control\u3001Content-Language\u3001Content-Type\u3001Expires\u3001Last-Modified\u3001Pragma\uFF0C\u5982\u679C\u8981\u8BBF\u95EE\u5176\u4ED6\u5934\uFF0C\u5219\u9700\u8981\u670D\u52A1\u5668\u8BBE\u7F6E\u672C\u54CD\u5E94\u5934\u3002</p></div><ul><li><code>Access-Control-Allow-Credentials</code> \u8868\u793A\u5141\u8BB8\u643A\u5E26 Cookie</li><li><code>Access-Control-Allow-Methods</code> \u8868\u793A\u5141\u8BB8\u7684\u8BF7\u6C42\u65B9\u6CD5</li><li><code>Access-Control-Allow-Headers</code> \u8868\u793A\u5141\u8BB8\u643A\u5E26\u7684\u8BF7\u6C42\u5934</li></ul><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS" target="_blank" rel="noreferrer">MDN\uFF1ACORS</a></li></ul>`,29),e=[p];function t(c,r,B,i,y,d){return a(),l("div",null,e)}const C=s(o,[["render",t]]);export{F as __pageData,C as default};
