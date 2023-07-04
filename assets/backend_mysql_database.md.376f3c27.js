import{_ as a,o as s,c as e,U as n}from"./chunks/framework.3125349e.js";const y=JSON.parse('{"title":"数据库","description":"","frontmatter":{},"headers":[],"relativePath":"backend/mysql/database.md","filePath":"backend/mysql/database.md"}'),o={name:"backend/mysql/database.md"},l=n(`<h1 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库&quot;">​</a></h1><h2 id="创建" tabindex="-1">创建 <a class="header-anchor" href="#创建" aria-label="Permalink to &quot;创建&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">CREATE DATABASE XXXX;</span></span></code></pre></div><h2 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">DROP DATABASE XXXX;</span></span></code></pre></div><h2 id="使用某个表" tabindex="-1">使用某个表 <a class="header-anchor" href="#使用某个表" aria-label="Permalink to &quot;使用某个表&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">USE XXXX;</span></span></code></pre></div><h2 id="查看" tabindex="-1">查看 <a class="header-anchor" href="#查看" aria-label="Permalink to &quot;查看&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 查看有哪些</span></span>
<span class="line"><span style="color:#61AFEF;">SHOW</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">DATABASES</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看当前激活的</span></span>
<span class="line"><span style="color:#61AFEF;">SELECT</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">DATABASE</span><span style="color:#ABB2BF;">();</span></span></code></pre></div><h2 id="连接本地数据库" tabindex="-1">连接本地数据库 <a class="header-anchor" href="#连接本地数据库" aria-label="Permalink to &quot;连接本地数据库&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">mysql -u root -p</span></span></code></pre></div>`,11),t=[l];function c(p,r,i,d,b,h){return s(),e("div",null,t)}const _=a(o,[["render",c]]);export{y as __pageData,_ as default};
