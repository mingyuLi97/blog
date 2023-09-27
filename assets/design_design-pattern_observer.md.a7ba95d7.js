import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fa80b722.js";const C=JSON.parse('{"title":"观察者模式","description":"","frontmatter":{},"headers":[],"relativePath":"design/design-pattern/observer.md","filePath":"design/design-pattern/observer.md"}'),p={name:"design/design-pattern/observer.md"},o=l(`<h1 id="观察者模式" tabindex="-1">观察者模式 <a class="header-anchor" href="#观察者模式" aria-label="Permalink to &quot;观察者模式&quot;">​</a></h1><p>观察者模式指的是一个对象（Subject）维持一系列依赖于它的对象（Observer），当有关状态发生变更时 Subject 对象则通知一系列 Observer 对象进行更新。</p><p>观察者模式，其实就是为了实现<strong>松耦合</strong>(loosely coupled)。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Subject</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">constructor</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">observers</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">observer</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">observers</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">observer</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">notify</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">observers</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">ob</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ob</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">delete</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">ob</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">observers</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">observers</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">ob</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">observers</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">splice</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Observer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">constructor</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">name</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`[observer] name is\`</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sub</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Subject</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ob1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Observer</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;ob1&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ob2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Observer</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;ob2&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">sub</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ob1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">sub</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ob2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">sub</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">notify</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;">//[observer] name is ob1; [observer] name is ob2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">sub</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">delete</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ob1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">sub</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">notify</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;">//[observer] name is ob2</span></span></code></pre></div>`,4),e=[o];function B(t,c,r,y,F,A){return n(),a("div",null,e)}const E=s(p,[["render",B]]);export{C as __pageData,E as default};