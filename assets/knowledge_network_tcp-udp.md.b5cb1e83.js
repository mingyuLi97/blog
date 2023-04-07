import{_ as t,o as a,c as i,Q as l}from"./chunks/framework.f14b72c3.js";const m=JSON.parse('{"title":"传输协议 TCP 和 UDP","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/network/tcp-udp.md"}'),r={name:"knowledge/network/tcp-udp.md"},e=l('<h1 id="传输协议-tcp-和-udp" tabindex="-1">传输协议 TCP 和 UDP <a class="header-anchor" href="#传输协议-tcp-和-udp" aria-label="Permalink to &quot;传输协议 TCP 和 UDP&quot;">​</a></h1><h2 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h2><h3 id="创建连接" tabindex="-1">创建连接 <a class="header-anchor" href="#创建连接" aria-label="Permalink to &quot;创建连接&quot;">​</a></h3><ul><li>标志位 <ul><li>ACK - 确认序号的标志，ACK=1 表示确认号有效，ACK=0 表示报文不含确认序号信息</li><li>SYN - 连接请求序号标志，用于建立连接，SYN=1 表示请求连接</li><li>FIN - 结束标志，用于释放连接，为 1 表示关闭本方数据流</li></ul></li><li>序号 - 表示发送的数据字节流，确保 TCP 传输有序，对每个字节编号 <ul><li>seq - x (123123123)</li><li>ack - x+1 (123123124)</li></ul></li></ul><h4 id="三次握手" tabindex="-1">三次握手 <a class="header-anchor" href="#三次握手" aria-label="Permalink to &quot;三次握手&quot;">​</a></h4><p><img src="https://img-blog.csdnimg.cn/20200624102940552.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMTE1NDQ3OTg5Ng==,size_16,color_FFFFFF,t_70#pic_center#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;height=293&amp;id=OskIG&amp;originHeight=409&amp;originWidth=652&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=&amp;width=467" alt="" data-__preview__="true"></p><ul><li>第一次 <ul><li>发送请求建立连接报文, <strong>SYN = 1，seq = x</strong>，等待服务端确认, 客户端进入 <strong>SYN_SENT</strong>状态</li><li>白话版 - 我要和你建立连接</li></ul></li><li>第二次 <ul><li>服务端收到请求，向客户端发送验证 <strong>ack = x + 1</strong>, 同时自己发送一个验证包 <strong>seq = y</strong>, 服务端进入<strong>SYN_RECV</strong>状态</li><li>白话版 - 我收到了，确定要连接吗（还在吗）</li></ul></li><li>第三次 <ul><li>客户端收到请求，向服务器发送确认 <strong>ack = y + 1</strong>, 服务端和客户端同时进入<strong>ESTABLISHED</strong>状态，完成连接</li><li>白话版 - 我还在，咱们建立连接吧</li></ul></li></ul><h4 id="四次挥手" tabindex="-1">四次挥手 <a class="header-anchor" href="#四次挥手" aria-label="Permalink to &quot;四次挥手&quot;">​</a></h4><p><img src="https://img-blog.csdnimg.cn/20200624102940599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMTE1NDQ3OTg5Ng==,size_16,color_FFFFFF,t_70#pic_center#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=CHaOf&amp;originHeight=463&amp;originWidth=668&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt="" data-__preview__="true"></p><ul><li>第一次 <ul><li>客户端发送断开连接请求, <strong>FIN = 1, seq = u</strong>, 客户端进入<strong>FIN-WAIT-1</strong>状态</li><li>白话版 - 我的数据传完了，咱们断开吧</li></ul></li><li>第二次 <ul><li>服务端收到断开请求， 发送确认 <strong>ACK=1，ack=u+1</strong>, 同时发送一个验证包 <strong>seq = v</strong>，进入 <strong>CLOSE-WAIT</strong>状态</li><li>客户端收到请求确认， 进入 <strong>FIN-WAIT-2</strong> 状态，等待服务器发送断开请求</li><li>白话版 - 好的，我知道了，我还有数据没传完，请稍等</li></ul></li><li>第三次 <ul><li>服务器传输完成，发送断开请求 <strong>FIN = 1, ACK = 1, seq = w, ack = u + 1</strong>,   服务端进入 <strong>LAST-ACK</strong> 状态</li><li>白话版 - 我的数据已经传输完了，咱们可以断开了</li></ul></li><li>第四次 <ul><li>客户端收到断开请求，向服务端发出确认 <strong>ACK = 1, seq = u + 1, ack = w + 1</strong>， 客户端进入<strong>TIME-WAIT</strong>状态， 服务端立即进入<strong>CLOSED</strong>状态, 客户端在 <strong>TIME-WAIT</strong> 状态结束后(2MSL)，进入 <strong>CLOSED</strong> 状态</li><li>白话版 - 我收到了，可以断开了</li></ul></li></ul><h3 id="保证可靠性" tabindex="-1">保证可靠性 <a class="header-anchor" href="#保证可靠性" aria-label="Permalink to &quot;保证可靠性&quot;">​</a></h3><p>使用了 <strong>序号+确认号</strong> 机制来实现，一旦带有 <code>synchronize sequence number</code> 的包发送到服务器，服务器都会在一定时间内进行响应，如果过了这段时间没有响应，客户端就会重传这个包，直到服务器收到数据包并作出响应为止。</p><h2 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-label="Permalink to &quot;UDP&quot;">​</a></h2><ol><li>面向无连接，想发送就可以发送</li><li>支持一对一，一对多，多对一和多对多交互通信</li><li>不会对报文进行任何拆分和拼接操作，发送方的 UDP 对应用程序交下来的报文，在添加首部后就向下交付 IP 层。UDP 对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界。因此，应用程序必须选择合适大小的报文</li><li>不可靠</li></ol><ul><li>主要体现在无连接，想发就发这种情况不可靠</li><li>没有拥塞控制，一直以一个速率发送，不关心对方是否收到，在网络条件不好时容易丢包</li><li>丢失的包、错误的包会被丢弃，不会触发重传</li></ul><ol start="5"><li>头部开销小，传输高效</li></ol><h2 id="tcp-与-udp-区别" tabindex="-1">TCP 与 UDP 区别 <a class="header-anchor" href="#tcp-与-udp-区别" aria-label="Permalink to &quot;TCP 与 UDP 区别&quot;">​</a></h2><table><thead><tr><th></th><th>UDP</th><th>TCP</th></tr></thead><tbody><tr><td>是否连接</td><td>无连接</td><td>面向连接</td></tr><tr><td>是否可靠</td><td>不可靠传输，不使用流量控制和拥塞控制</td><td>可靠传输，使用流量控制和拥塞控制</td></tr><tr><td>连接对象个数</td><td>支持一对一，一对多，多对一和多对多交互通信</td><td>只能是一对一通信</td></tr><tr><td>传输方式</td><td>面向报文（只能一次发完）</td><td>面向字节流（发送数据时以字节为单位，一个数据包可以拆分成若干组进行发送）</td></tr><tr><td>首部开销</td><td>首部开销小，仅 8 字节</td><td>首部最小 20 字节，最大 60 字节</td></tr><tr><td>适用场景</td><td>适用于实时应用（IP 电话、视频会议、直播等）</td><td>适用于要求可靠传输的应用，例如文件传输</td></tr></tbody></table><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844903800336023560#heading-12" target="_blank" rel="noreferrer">掘金：TCP 和 UDP 比较</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=MzI0ODk2NDIyMQ==&amp;mid=2247491621&amp;idx=1&amp;sn=78a182f89093ef1cc807bdef21cdcb4d&amp;chksm=e99a1537deed9c2169257574c17877933b68fadd061f371c2f53a50e7f640d52f5f1667c895c&amp;token=2108481110&amp;lang=zh_CN#rd" target="_blank" rel="noreferrer">微信：TCP 基础知识</a></li></ul>',20),o=[e];function n(s,d,p,c,h,g){return a(),i("div",null,o)}const _=t(r,[["render",n]]);export{m as __pageData,_ as default};
