import{_ as a,o as e,c as t,U as r}from"./chunks/framework.3125349e.js";const m=JSON.parse('{"title":"CDN","description":"","frontmatter":{},"headers":[],"relativePath":"network/basic/cdn.md","filePath":"network/basic/cdn.md"}'),l={name:"network/basic/cdn.md"},o=r('<h1 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-label="Permalink to &quot;CDN&quot;">​</a></h1><p>CDN (内容分发网络)是一种分布式系统，由一系列位于不同地理位置的服务器节点组成。这些节点被称为边缘服务器，它们位于网络的边缘，靠近最终用户。CDN 的基本思想是将内容存储在靠近用户的边缘服务器上，当用户请求访问内容时，由最接近用户的边缘服务器提供内容，而不是从远程的源服务器获取。</p><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><h4 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h4><p>当源服务器首次响应请求时，CDN 会将内容缓存到边缘服务器上。用户在后续请求时(其他用户访问相同资源)CDN 会直接从边缘服务器提供缓存的副本，而不必再次向源服务器发出请求。</p><h4 id="回源" tabindex="-1">回源 <a class="header-anchor" href="#回源" aria-label="Permalink to &quot;回源&quot;">​</a></h4><p>边缘服务器从源服务器获取最新的内容被称为回源，常见的有几种情况</p><ol><li>当边缘服务器上的缓存内容过期或不存在时</li><li>设置回源间隔，定期向源服务器发送请求以检查内容是否有更新</li><li>源服务器的资源更新后，调用 CDN 提供商的 API，是 CDN 服务器回源拉取新资源</li></ol><h2 id="解决了什么问题" tabindex="-1">解决了什么问题 <a class="header-anchor" href="#解决了什么问题" aria-label="Permalink to &quot;解决了什么问题&quot;">​</a></h2><ul><li>降低源服务器的请求压力。</li><li>根据用户 ip 选取较近的边缘服务器，通过减少传输距离，实现降低网络延迟。</li><li>在请求时，浏览器会将域名下的所有 Cookie 携带发起请求，但是一般静态资源是不需要 Cookie 的，因此可以把 CDN 的域名和主站的域名分开，减少请求体积。</li></ul><h2 id="动态加速" tabindex="-1">动态加速 <a class="header-anchor" href="#动态加速" aria-label="Permalink to &quot;动态加速&quot;">​</a></h2><p>传统的 CDN 主要用于加速静态内容，对于动态生成的内容并不适用。这时就需要使用 CDN 中的动态加速功能。</p><h4 id="边缘计算-edge-computing" tabindex="-1">边缘计算（Edge Computing） <a class="header-anchor" href="#边缘计算-edge-computing" aria-label="Permalink to &quot;边缘计算（Edge Computing）&quot;">​</a></h4><p>CDN 提供商在其边缘服务器上部署了计算资源，使得动态内容可以在边缘服务器上进行实时计算和处理。这样可以减少请求的往返时间，并加速内容的生成和响应。</p><h4 id="动态路由" tabindex="-1">动态路由 <a class="header-anchor" href="#动态路由" aria-label="Permalink to &quot;动态路由&quot;">​</a></h4><ul><li>直接连接到源服务器可能会导致网络拥塞和负载不均衡的问题。通过动态路由，CDN 可以根据网络状况和服务器负载情况，将请求分配到合适的服务器上。</li><li>因为服务器的带宽是很高的，因此节点间的传输效率远高于边缘到用户，因此可以通过 CDN 请求服务器从而更高效。</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/CDN" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Glossary/CDN</a></li><li><a href="https://juejin.cn/post/7049324692565393421" target="_blank" rel="noreferrer">https://juejin.cn/post/7049324692565393421</a></li><li><a href="https://www.xinnet.com/knowledge/1619329314.html" target="_blank" rel="noreferrer">https://www.xinnet.com/knowledge/1619329314.html</a></li></ul>',18),i=[o];function n(h,d,s,c,p,u){return e(),t("div",null,i)}const C=a(l,[["render",n]]);export{m as __pageData,C as default};
