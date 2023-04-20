import{_ as a,o as l,c as e,R as o}from"./chunks/framework.35669211.js";const b=JSON.parse('{"title":"JS 预编译","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/browser/complier.md"}'),i={name:"knowledge/browser/complier.md"},t=o('<h1 id="js-预编译" tabindex="-1">JS 预编译 <a class="header-anchor" href="#js-预编译" aria-label="Permalink to &quot;JS 预编译&quot;">​</a></h1><h2 id="编译器" tabindex="-1">编译器 <a class="header-anchor" href="#编译器" aria-label="Permalink to &quot;编译器&quot;">​</a></h2><p>把代码解析成为浏览器看得懂的结构</p><ul><li>词法解析</li><li>AST 抽象语法树</li><li>构建出浏览器可执行的代码</li></ul><p>TODO：</p><h2 id="引擎执行逻辑-v8" tabindex="-1">引擎执行逻辑（V8） <a class="header-anchor" href="#引擎执行逻辑-v8" aria-label="Permalink to &quot;引擎执行逻辑（V8）&quot;">​</a></h2><ul><li><p>变量提升</p></li><li><p>ECStack：Execution Context Stack 执行环境栈</p></li><li><p>EC: Execution Context 执行环境（执行上下文）</p><ul><li>VO：Variable Object 变量对象</li><li>AO：Activation Object 活动对象 （函数的叫做 AO，可以理解为 VO 的分支）</li></ul></li><li><p>Scope：作用域，创建函数时赋予的</p></li><li><p>Scope Chain：作用域链</p></li></ul><h4 id="创建变量三部曲" tabindex="-1">创建变量三部曲 <a class="header-anchor" href="#创建变量三部曲" aria-label="Permalink to &quot;创建变量三部曲&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span></code></pre></div><ol><li>创建变量 声明 declare</li><li>创建值 <ol><li>基础值 - 栈内存</li><li>引用值 - 堆内存</li></ol></li><li>关联（赋值）定义 defined</li></ol>',10),s=[t];function n(r,c,p,d,h,_){return l(),e("div",null,s)}const m=a(i,[["render",n]]);export{b as __pageData,m as default};