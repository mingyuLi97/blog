import{_ as a,o as e,c as l,Q as o}from"./chunks/framework.f14b72c3.js";const m=JSON.parse('{"title":"DNS","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/network/dns.md"}'),t={name:"knowledge/network/dns.md"},i=o('<h1 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-label="Permalink to &quot;DNS&quot;">​</a></h1><blockquote><p>把网址转换成 ip 的过程，互联网中每一台机器都有唯一标识的 IP 地址，但是这个 IP 不好记，所以需要一个网址和 IP 的转换，即 DNS 解析。</p></blockquote><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202208261411994_dns.webp" alt="" data-__preview__="true"></p><p>顶级域（一级域名）: .com、.cn、.org 等</p><p>二级域名: zhihu.com、baidu.com、sina.cn 等</p><p>子域名（三级及以下）: dev.sina.cn、zhuanlan.zhihu.com</p><h2 id="解析过程" tabindex="-1">解析过程 <a class="header-anchor" href="#解析过程" aria-label="Permalink to &quot;解析过程&quot;">​</a></h2><h4 id="递归查询" tabindex="-1">递归查询 <a class="header-anchor" href="#递归查询" aria-label="Permalink to &quot;递归查询&quot;">​</a></h4><ol><li>主机向本地域名服务器(ldns)的查询一般都是采用递归查询。</li><li>递归查询只会返回两种信息：要么是所要查询的 IP 地址，要么是查询失败。</li></ol><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202208261436083_dns_recursion.png" alt="" data-__preview__="true"></p><h4 id="迭代查询" tabindex="-1">迭代查询 <a class="header-anchor" href="#迭代查询" aria-label="Permalink to &quot;迭代查询&quot;">​</a></h4><ol><li>本地域名服务器向根域名服务器的查询是迭代查询。</li></ol><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202208261438740_dns_iteration.jpeg" alt="" data-__preview__="true"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>举个 🌰 来描述递归查询和迭代查询，有两位同学 A 和 B，A 遇到了一个问题</p><p><strong>递归</strong>: A 请教 B，B 去问老师，得到结果后再告诉 A；<br><strong>迭代</strong>: B 说我不会，但是老师会，你去问下老师。 A 去问老师 得到结果;</p></div><h4 id="为什么要有两种查询方式" tabindex="-1">为什么要有两种查询方式 <a class="header-anchor" href="#为什么要有两种查询方式" aria-label="Permalink to &quot;为什么要有两种查询方式&quot;">​</a></h4><ol><li>递归查询会一直向下查找，直到找到答案，减少了客户端的网络延迟，但增加了服务器的负担；</li><li>迭代查询则是客户端一步步向下查找，分摊了服务器的负担，但需要进行多次查询</li></ol><h2 id="整体流程" tabindex="-1">整体流程 <a class="header-anchor" href="#整体流程" aria-label="Permalink to &quot;整体流程&quot;">​</a></h2><p>输入www.google.com网址后，首先在本地的域名服务器中查找，没找到去根域名服务器查找，没有再去com顶级域名服务器查找，，如此的类推下去，直到找到IP地址，然后把它记录在本地，供下次使用。大致过程就是. -&gt; .com -&gt; google.com. -&gt; www.google.com.。 (你可能觉得我多写 .，并木有，这个.对应的就是根域名服务器，默认情况下所有的网址的最后一位都是.，既然是默认情况下，为了方便用户，通常都会省略，浏览器在请求 DNS 的时候会自动加上)</p><h2 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h2><h4 id="_1-减少-dns-解析次数" tabindex="-1">1. 减少 DNS 解析次数 <a class="header-anchor" href="#_1-减少-dns-解析次数" aria-label="Permalink to &quot;1. 减少 DNS 解析次数&quot;">​</a></h4><ul><li>合并页面中的 CSS、JS、图片等资源文件</li><li>将资源放到同一个域名下</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>HTTP /1.1 中每个域只有一定数量的并发限制，如果过多请求，那么就会出现下载资源排队现象，这样就会降低性能。 因此 HTTP /1.1 时：一个网站里面使用至少 2 个域，但不多于 4 个域</p></div><h4 id="_2-dns-预解析" tabindex="-1">2. <a href="./../browser/preload.html#dns-prefetch">DNS 预解析</a> <a class="header-anchor" href="#_2-dns-预解析" aria-label="Permalink to &quot;2. [DNS 预解析](./../browser/preload.md#dns-prefetch)&quot;">​</a></h4><p>提前解析出页面中要使用的域名，以减少后续的 DNS 解析时间</p><h4 id="_3-dns-缓存" tabindex="-1">3. DNS 缓存 <a class="header-anchor" href="#_3-dns-缓存" aria-label="Permalink to &quot;3. DNS 缓存&quot;">​</a></h4><p>浏览器和操作系统会对 DNS 解析结果进行缓存，可以减少 DNS 解析次数和时间。缓存时间根据 DNS 服务器返回的 TTL（Time to Live）来确定，一般为数分钟到数小时不等。</p><ul><li>浏览器缓存（chrome://dns/）</li><li>系统缓存（/etc/hosts）</li><li>路由器缓存</li><li>互联网服务供应商(ISP) 服务器缓存</li><li>根域名服务器缓存</li><li>顶级域名服务器缓存</li><li>主域名服务器缓存</li></ul><h4 id="_4-使用-cdn" tabindex="-1">4. 使用 CDN <a class="header-anchor" href="#_4-使用-cdn" aria-label="Permalink to &quot;4. 使用 CDN&quot;">​</a></h4><p>CDN（内容分发网络）可以将内容分发到全球各地的节点，提高访问速度和稳定性。CDN 中会缓存 DNS 解析结果，因此可以减少 DNS 解析次数和时间。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7132799176332541966" target="_blank" rel="noreferrer">掘金：DNS 域名解析</a></li><li><a href="https://www.zhihu.com/question/23042131" target="_blank" rel="noreferrer">知乎：DNS 解析的过程是什么，求详细的？</a></li></ul>',32),r=[i];function n(s,c,h,d,p,u){return e(),l("div",null,r)}const b=a(t,[["render",n]]);export{m as __pageData,b as default};
