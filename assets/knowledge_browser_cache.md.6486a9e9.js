import{_ as e,o as a,c as o,Q as r}from"./chunks/framework.f14b72c3.js";const m=JSON.parse('{"title":"浏览器缓存","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/browser/cache.md"}'),i={name:"knowledge/browser/cache.md"},t=r('<h1 id="浏览器缓存" tabindex="-1">浏览器缓存 <a class="header-anchor" href="#浏览器缓存" aria-label="Permalink to &quot;浏览器缓存&quot;">​</a></h1><h2 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-label="Permalink to &quot;强缓存&quot;">​</a></h2><p>通过设置 <strong>过期时间</strong> 来决定是否采用缓存返回 200 状态码</p><ul><li>未过期：直接从浏览器缓存中读取，无论资源是否过期</li><li>过期了：从服务器请求</li></ul><h4 id="expires-http-1-0" tabindex="-1">Expires - HTTP/1.0 <a class="header-anchor" href="#expires-http-1-0" aria-label="Permalink to &quot;Expires - HTTP/1.0&quot;">​</a></h4><p>值为一个时间戳，服务器返回该请求结果缓存的到期时间，意思是，再次发送请求时，如果未超过过期时间，直接使用该缓存，如果过期了则重新请求。</p><p><strong>缺点：</strong> 用本地时间来判断是否过期，但是本地时间是可以自己修改的。</p><p>HTTP/1.0 可以设置 <code>pragma: no-cache</code> 来跳过缓存</p><h4 id="cache-control-http-1-1" tabindex="-1">Cache-Control - HTTP/1.1 <a class="header-anchor" href="#cache-control-http-1-1" aria-label="Permalink to &quot;Cache-Control - HTTP/1.1&quot;">​</a></h4><ul><li><code>private</code>：仅浏览器可以缓存（默认值）；</li><li><code>public</code>：浏览器和代理服务器都可以缓存；</li><li><code>max-age=xxx</code>：过期时间单位秒（解决了 Expires 自己修改本地时间的问题）</li><li><code>no-cache</code>：不进行强缓存；</li><li><code>no-store</code>：不强缓存，也不协商缓存</li><li><code>no-transform</code>：不对传输的内容做任何转码（常见的地方为 proxy 或 browser 为了减少传输内容及流量，会对传输的图片等进行格式转换，此配置可以避免转换）</li></ul><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202211201401042.webp" alt="" data-__preview__="true"></p><h2 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h2><p>强缓存失效后，浏览器携带缓存标识向服务器发送请求，由服务器根据缓存标识来决定是否使用缓存的过程。</p><ul><li><p>协商缓存生效：304</p></li><li><p>协商缓存不生效：200</p></li></ul><h4 id="last-modified-if-modified-since" tabindex="-1">Last-Modified / If-Modified-Since <a class="header-anchor" href="#last-modified-if-modified-since" aria-label="Permalink to &quot;Last-Modified / If-Modified-Since&quot;">​</a></h4><ul><li><p><code>Last-Modified</code>：服务器响应请求(Response Header)，表示该资源文件在服务器最后被修改的时间.</p></li><li><p><code>If-Modified-Since</code>：客户端请求头（Request Header）, 携带上次请求拿到的 <code>Last-Modified</code> 若服务器的资源最后被修改时间大于 <code>If-Modified-Since</code> 的字段值，则重新返回资源，状态码为 200；否则则返回 304，代表资源无更新，可继续使用缓存文件</p></li></ul><h4 id="etag-if-none-match" tabindex="-1">ETag / If-None-Match <a class="header-anchor" href="#etag-if-none-match" aria-label="Permalink to &quot;ETag / If-None-Match&quot;">​</a></h4><ul><li><p><code>ETag</code>：服务器响应请求(Response Header)，表示当前文件的唯一标识。</p></li><li><p><code>If-None-Match</code>：客户端请求头（Request Header）, 携带上次请求拿到的 <code>ETag</code> ,若与服务器的资源一致，代表资源无更新，可继续使用缓存文件 返回 304，否则返回 200</p></li></ul><div class="tip custom-block"><p class="custom-block-title">为什么要有 etag？</p><p>ETag 的精度更高，Last-Modified 的时间单位是秒，如果一个文件 1s 内修改了多次，Last-Modified 无法感知到每次的变化</p></div><h2 id="缓存位置" tabindex="-1">缓存位置 <a class="header-anchor" href="#缓存位置" aria-label="Permalink to &quot;缓存位置&quot;">​</a></h2><p>它们的优先级是：(由上到下寻找，找到即返回；找不到则继续)</p><h4 id="_1-service-worker" tabindex="-1">1. Service Worker <a class="header-anchor" href="#_1-service-worker" aria-label="Permalink to &quot;1. Service Worker&quot;">​</a></h4><ol><li>Memory Cache、Disk Cache 都是由浏览器根据响应头判断的，而 Service Worker 是可以通过代码来控制的，更加灵活</li><li>Service Worker 不是服务于某个特定页面的，而是服务于多个页面的。（按照同源策略）</li><li>Service Worker 会常驻在浏览器中，即便注册它的页面已经关闭，Service Worker 也不会停止。本质上它是一个后台线程，只有你主动终结，或者浏览器回收，这个线程才会结束。</li></ol><p>应用场景：<a href="https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/" target="_blank" rel="noreferrer">借助 Service Worker 和 cacheStorage 缓存及离线开发</a></p><h4 id="_2-memory-cache" tabindex="-1">2. Memory Cache <a class="header-anchor" href="#_2-memory-cache" aria-label="Permalink to &quot;2. Memory Cache&quot;">​</a></h4><h4 id="_3-disk-cache" tabindex="-1">3. Disk Cache <a class="header-anchor" href="#_3-disk-cache" aria-label="Permalink to &quot;3. Disk Cache&quot;">​</a></h4><h2 id="浏览器刷新" tabindex="-1">浏览器刷新 <a class="header-anchor" href="#浏览器刷新" aria-label="Permalink to &quot;浏览器刷新&quot;">​</a></h2><p>打开网页，地址栏输入地址： 查找 disk cache 中是否有匹配。如有则使用；如没有则发送网络请求。 普通刷新 (F5)：因为 TAB 并没有关闭，因此 memory cache 是可用的，会被优先使用(如果匹配的话)。其次才是 disk cache。 强制刷新 (Ctrl + F5)：浏览器不使用缓存，因此发送的请求头部均带有 <code>Cache-control: no-cache</code>(为了兼容，还带了 <code>Pragma: no-cache</code>),服务器直接返回 200 和最新内容。</p><h2 id="缓存方案" tabindex="-1">缓存方案 <a class="header-anchor" href="#缓存方案" aria-label="Permalink to &quot;缓存方案&quot;">​</a></h2><p>目前的项目大多使用这种缓存方案的：</p><p>HTML: 协商缓存；</p><p>css、js、图片：强缓存，文件名带上 hash。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ol><li>Expires 和 Cache-Control 决定了浏览器是否要发送请求到服务器，ETag 和 Last-Modified 决定了服务器是要返回 304+空内容还是新的资源文件</li><li>Expires 和 Cache-Control 同时存在时，Cache-Control 会覆盖 Expires</li><li>ETag 和 Last-Modified 同时存在时，两者都要满足才会返回 304</li></ol><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6947936223126093861" target="_blank" rel="noreferrer">掘金：前端浏览器缓存知识梳理</a></li><li><a href="https://segmentfault.com/a/1190000014669345" target="_blank" rel="noreferrer">思否：一篇文章理解前端缓存</a></li><li><a href="https://juejin.cn/post/6844903764566999054" target="_blank" rel="noreferrer">掘金：实践这一次,彻底搞懂浏览器缓存机制</a></li><li><a href="https://blog.camel2243.com/2018/09/23/http-http-header%EF%BC%8C-cache-control-expires-%E7%94%A8%E6%B3%95%E8%AA%AA%E6%98%8E/" target="_blank" rel="noreferrer">blog</a></li></ul>',36),c=[t];function l(d,h,s,n,p,f){return a(),o("div",null,c)}const b=e(i,[["render",l]]);export{m as __pageData,b as default};
