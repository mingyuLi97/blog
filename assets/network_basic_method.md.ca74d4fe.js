import{_ as t,o as a,c as e,Q as o}from"./chunks/framework.fa80b722.js";const _=JSON.parse('{"title":"HTTP 请求方法","description":"","frontmatter":{},"headers":[],"relativePath":"network/basic/method.md","filePath":"network/basic/method.md"}'),r={name:"network/basic/method.md"},h=o('<h1 id="http-请求方法" tabindex="-1">HTTP 请求方法 <a class="header-anchor" href="#http-请求方法" aria-label="Permalink to &quot;HTTP 请求方法&quot;">​</a></h1><h2 id="get" tabindex="-1">GET <a class="header-anchor" href="#get" aria-label="Permalink to &quot;GET&quot;">​</a></h2><p>GET 方法用于从服务器获取资源。当客户端发送 GET 请求时，服务器会将请求的资源作为响应返回给客户端。GET 请求可以在 URL 中传递参数，但是对于敏感信息，应该避免使用 GET 请求。</p><h2 id="post" tabindex="-1">POST <a class="header-anchor" href="#post" aria-label="Permalink to &quot;POST&quot;">​</a></h2><p>POST 方法用于向服务器提交数据，数据通常包含在请求的正文中（类型由<a href="./content-type.html">Content-Type</a>决定），而不是像 GET 请求那样作为 URL 参数传递。</p><h2 id="put" tabindex="-1">PUT <a class="header-anchor" href="#put" aria-label="Permalink to &quot;PUT&quot;">​</a></h2><p>PUT 方法用于向服务器提更新资源的请求。做的是整体替换操作，如果客户端未提供某个属性的值，服务器可能会将该属性设置为空值或默认值。</p><h2 id="delete" tabindex="-1">DELETE <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;DELETE&quot;">​</a></h2><p>DELETE 方法用于请求服务器删除指定的资源。</p><h2 id="patch" tabindex="-1">PATCH <a class="header-anchor" href="#patch" aria-label="Permalink to &quot;PATCH&quot;">​</a></h2><p>PATCH 一般是用来局部更新资源。客户端仅提供需要修改的资源，服务器根据请求中的操作来更新资源，没有指定的操作将保持不变。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>PATCH 请求不是幂等的，对数据的修改会因为<strong>请求顺序</strong>而不同。</p><p>假设有一个表示用户的资源，其中包含名称和年龄属性。客户端发送一个 PATCH 请求，将名称属性从 &quot;John&quot; 修改为 &quot;Mike&quot;。然后，客户端再次发送一个 PATCH 请求，将年龄属性从 30 修改为 31。在这种情况下，如果对同一个属性进行多次 PATCH 请求，最终的结果可能会取决于请求的顺序。</p></div>',12),n=[h];function s(i,c,l,d,p,T){return a(),e("div",null,n)}const u=t(r,[["render",s]]);export{_ as __pageData,u as default};