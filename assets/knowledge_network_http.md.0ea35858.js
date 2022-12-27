import{_ as e,o as t,c as i,a as l}from"./app.0e2bb78b.js";const P=JSON.parse('{"title":"HTTP","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u961F\u5934\u963B\u585E (Head-Of-Line Blocking)","slug":"\u961F\u5934\u963B\u585E-head-of-line-blocking","link":"#\u961F\u5934\u963B\u585E-head-of-line-blocking","children":[{"level":3,"title":"\u89E3\u51B3\uFF1A","slug":"\u89E3\u51B3\uFF1A","link":"#\u89E3\u51B3\uFF1A","children":[]}]},{"level":2,"title":"HTTP1.1 \u7684\u6539\u8FDB","slug":"http1-1-\u7684\u6539\u8FDB","link":"#http1-1-\u7684\u6539\u8FDB","children":[]},{"level":2,"title":"HTTP1.1 - \u7F3A\u9677","slug":"http1-1-\u7F3A\u9677","link":"#http1-1-\u7F3A\u9677","children":[]},{"level":2,"title":"HTTP2 \u7684\u6539\u8FDB","slug":"http2-\u7684\u6539\u8FDB","link":"#http2-\u7684\u6539\u8FDB","children":[]},{"level":2,"title":"HTTP2 - \u7F3A\u9677","slug":"http2-\u7F3A\u9677","link":"#http2-\u7F3A\u9677","children":[]},{"level":2,"title":"HTTP3","slug":"http3","link":"#http3","children":[{"level":3,"title":"1. \u4F7F\u7528 QUIC\uFF08Quick udp internet connection\uFF09 \u534F\u8BAE","slug":"_1-\u4F7F\u7528-quic\uFF08quick-udp-internet-connection\uFF09-\u534F\u8BAE","link":"#_1-\u4F7F\u7528-quic\uFF08quick-udp-internet-connection\uFF09-\u534F\u8BAE","children":[]},{"level":3,"title":"QUIC \u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u9760\u6027","slug":"quic-\u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u9760\u6027","link":"#quic-\u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u9760\u6027","children":[]}]},{"level":2,"title":"HTTPS","slug":"https","link":"#https","children":[{"level":3,"title":"\u5BF9\u79F0\u52A0\u5BC6 & \u975E\u5BF9\u79F0\u52A0\u5BC6","slug":"\u5BF9\u79F0\u52A0\u5BC6-\u975E\u5BF9\u79F0\u52A0\u5BC6","link":"#\u5BF9\u79F0\u52A0\u5BC6-\u975E\u5BF9\u79F0\u52A0\u5BC6","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"knowledge/network/http.md"}'),r={name:"knowledge/network/http.md"},a=l('<h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-hidden="true">#</a></h1><h2 id="\u961F\u5934\u963B\u585E-head-of-line-blocking" tabindex="-1"><a href="https://juejin.cn/post/7049296242924322830" target="_blank" rel="noreferrer">\u961F\u5934\u963B\u585E</a> (Head-Of-Line Blocking) <a class="header-anchor" href="#\u961F\u5934\u963B\u585E-head-of-line-blocking" aria-hidden="true">#</a></h2><p>\u961F\u5934\u963B\u585E\u4E3B\u8981\u662F TCP \u534F\u8BAE\u7684\u53EF\u9760\u6027\u673A\u5236\u5F15\u5165\u7684\u3002TCP \u4F7F\u7528\u5E8F\u5217\u53F7\u6765\u6807\u8BC6\u6570\u636E\u7684\u987A\u5E8F\uFF0C\u6570\u636E\u5FC5\u987B\u6309\u7167\u987A\u5E8F\u5904\u7406\uFF0C\u5982\u679C\u524D\u9762\u7684\u6570\u636E\u4E22\u5931\uFF0C\u540E\u9762\u7684\u6570\u636E\u5C31\u7B97\u5230\u8FBE\u4E86\u4E5F\u4E0D\u4F1A\u901A\u77E5\u5E94\u7528\u5C42\u6765\u5904\u7406\u3002</p><ul><li>\u5355\u4E2A\u6570\u636E\u6D41\u7684\u53D1\u9001\uFF1A\u9047\u5230\u9519\u8BEF\u7684\u3001\u4E22\u5931\u7684\u5305\u4F1A\u51FA\u53D1\u91CD\u4F20\uFF0C\u963B\u585E\u7A97\u53E3\u79FB\u52A8</li><li>\u591A\u4E2A\u6570\u636E\u6D41\u7684\u53D1\u9001\uFF1ATCP \u901A\u9053\u91CC\u7684\u6D41\u662F\u6DF7\u5408\u7684\uFF0C\u4E0D\u80FD\u72EC\u7ACB\u7684\u5206\u5272\uFF0C\u6240\u4EE5\u5F53\u4E00\u4E2A\u6D41\u963B\u585E\u65F6\uFF0C\u5176\u6240\u6709\u6D41\u90FD\u4F1A\u88AB\u963B\u585E</li></ul><h3 id="\u89E3\u51B3\uFF1A" tabindex="-1">\u89E3\u51B3\uFF1A <a class="header-anchor" href="#\u89E3\u51B3\uFF1A" aria-hidden="true">#</a></h3><ul><li>\u5C06\u540C\u4E00\u9875\u9762\u7684\u8D44\u6E90\u5206\u6563\u5230\u4E0D\u540C\u57DF\u540D\u4E0B\uFF0C\u63D0\u5347\u8FDE\u63A5\u4E0A\u9650\u3002 <strong>Chrome \u6709\u4E2A\u673A\u5236\uFF0C\u5BF9\u4E8E\u540C\u4E00\u4E2A\u57DF\u540D\uFF0C\u9ED8\u8BA4\u5141\u8BB8\u540C\u65F6\u5EFA\u7ACB 6 \u4E2A TCP \u6301\u4E45\u8FDE\u63A5</strong>\uFF0C\u4F7F\u7528\u6301\u4E45\u8FDE\u63A5\u65F6\uFF0C\u867D\u7136\u80FD\u516C\u7528\u4E00\u4E2A TCP \u7BA1\u9053\uFF0C<strong>\u4F46\u662F\u5728\u4E00\u4E2A\u7BA1\u9053\u4E2D\u540C\u4E00\u65F6\u523B\u53EA\u80FD\u5904\u7406\u4E00\u4E2A\u8BF7\u6C42</strong>\uFF0C\u5728\u5F53\u524D\u7684\u8BF7\u6C42\u6CA1\u6709\u7ED3\u675F\u4E4B\u524D\uFF0C\u5176\u4ED6\u7684\u8BF7\u6C42\u53EA\u80FD\u5904\u4E8E\u963B\u585E\u72B6\u6001\u3002\u53E6\u5916\u5982\u679C\u5728\u540C\u4E00\u4E2A\u57DF\u540D\u4E0B\u540C\u65F6\u6709 10 \u4E2A\u8BF7\u6C42\u53D1\u751F\uFF0C\u90A3\u4E48\u5176\u4E2D 4 \u4E2A\u8BF7\u6C42\u4F1A\u8FDB\u5165\u6392\u961F\u7B49\u5F85\u72B6\u6001\uFF0C\u76F4\u81F3\u8FDB\u884C\u4E2D\u7684\u8BF7\u6C42\u5B8C\u6210\u3002</li><li>\u51CF\u5C11\u8BF7\u6C42\u6B21\u6570 <ul><li>\u7CBE\u7075\u56FE</li><li>\u56FE\u7247\u8F6C\u6210 base64 \u5D4C\u5165\u5230 css \u6587\u4EF6\u4E2D</li><li>webpack \u6253\u5305\u65F6\u5C06\u591A\u4E2A\u6587\u4EF6 \u5408\u5E76\u6210\u4E00\u4E2A\u4F53\u79EF\u66F4\u5927\u7684</li></ul></li></ul><h2 id="http1-1-\u7684\u6539\u8FDB" tabindex="-1">HTTP1.1 \u7684\u6539\u8FDB <a class="header-anchor" href="#http1-1-\u7684\u6539\u8FDB" aria-hidden="true">#</a></h2><ol><li><strong>\u6539\u8FDB\u6301\u4E45\u8FDE\u63A5</strong></li></ol><p>\u957F\u94FE\u63A5\u80FD\u591F\u6709\u6548\u7684\u51CF\u5C11 3 \u6B21\u63E1\u624B\u548C 4 \u6B21\u6325\u624B\u8FC7\u591A\u5BFC\u81F4\u7684\u4E0D\u5FC5\u8981\u5F00\u9500 HTTP1.0 \u9700\u8981\u4F7F\u7528 <code>Connection: keep-alive</code> \u53C2\u6570\u6765\u544A\u8BC9\u670D\u52A1\u5668\u9700\u8981\u5EFA\u7ACB\u957F\u94FE\u63A5\uFF0CHTTP1.1 \u9ED8\u8BA4\u5F00\u542F</p><ol start="2"><li><strong>\u4E0D\u6210\u719F\u7684\u7BA1\u7EBF\u5316\u6280\u672F</strong></li></ol><p>\u4E3A\u4E86\u89E3\u51B3\u5BF9\u961F\u5934\u963B\u585E\uFF0C\u5141\u8BB8\u5728\u7B2C\u4E00\u4E2A\u5E94\u7B54\u88AB\u5B8C\u5168\u53D1\u9001\u4E4B\u524D\u5C31\u53D1\u9001\u7B2C\u4E8C\u4E2A\u8BF7\u6C42\uFF0C\u4EE5\u964D\u4F4E\u901A\u4FE1\u5EF6\u8FDF\uFF0C\u4F46\u662F\u670D\u52A1\u5668\u4F9D\u7136\u9700\u8981\u6839\u636E\u8BF7\u6C42\u7684\u987A\u5E8F\u6765\u6062\u590D\u6D4F\u89C8\u5668\u7684\u8BF7\u6C42\uFF0C\u6240\u4EE5\u5E76\u4E0D\u80FD\u5F7B\u5E95\u7684\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C</p><ol start="3"><li><strong>\u63D0\u4F9B\u865A\u62DF\u4E3B\u673A\u652F\u6301</strong></li></ol><p>\u5728 HTTP/1.0 \u4E2D\uFF0C\u6BCF\u4E2A\u57DF\u540D\u7ED1\u5B9A\u4E86\u4E00\u4E2A\u552F\u4E00\u7684 IP \u5730\u5740\uFF0C\u56E0\u6B64\u4E00\u4E2A\u670D\u52A1\u5668\u53EA\u80FD\u652F\u6301\u4E00\u4E2A\u57DF\u540D\u3002\u4F46\u662F\u968F\u7740\u865A\u62DF\u4E3B\u673A\u6280\u672F\u7684\u53D1\u5C55\uFF0C\u9700\u8981\u5B9E\u73B0\u5728\u4E00\u53F0\u7269\u7406\u4E3B\u673A\u4E0A\u7ED1\u5B9A\u591A\u4E2A\u865A\u62DF\u4E3B\u673A\uFF0C\u6BCF\u4E2A\u865A\u62DF\u4E3B\u673A\u90FD\u6709\u81EA\u5DF1\u7684\u5355\u72EC\u7684\u57DF\u540D\uFF0C\u8FD9\u4E9B\u5355\u72EC\u7684\u57DF\u540D\u90FD\u516C\u7528\u540C\u4E00\u4E2A IP \u5730\u5740\u3002 \u56E0\u6B64\uFF0CHTTP/1.1 \u7684\u8BF7\u6C42\u5934\u4E2D\u589E\u52A0\u4E86 Host \u5B57\u6BB5\uFF0C\u7528\u6765\u8868\u793A\u5F53\u524D\u7684\u57DF\u540D\u5730\u5740\uFF0C\u8FD9\u6837\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684 Host \u503C\u505A\u4E0D\u540C\u7684\u5904\u7406\u3002</p><ol start="4"><li><strong>\u6539\u8FDB\u7F13\u5B58\u673A\u5236</strong></li></ol><p>\u5728 HTTP1.0 \u4E2D\u4E3B\u8981\u4F7F\u7528 header \u91CC\u7684 <code>If-Modified-Since</code>\uFF08\u6BD4\u8F83\u8D44\u6E90\u6700\u540E\u7684\u66F4\u65B0\u65F6\u95F4\u662F\u5426\u4E00\u81F4\uFF09,<code>Expires</code>\uFF08\u8D44\u6E90\u7684\u8FC7\u671F\u65F6\u95F4\uFF08\u53D6\u51B3\u4E8E\u5BA2\u6237\u7AEF\u672C\u5730\u65F6\u95F4\uFF09\uFF09 \u6765\u505A\u4E3A\u7F13\u5B58\u5224\u65AD\u7684\u6807\u51C6\u3002 HTTP1.1 \u5219\u5F15\u5165\u4E86\u66F4\u591A\u7684 <a href="./../browser/cache.html">\u7F13\u5B58\u63A7\u5236</a> \u7B56\u7565\uFF1A</p><ul><li><code>Entity tag</code>\uFF1A\u8D44\u6E90\u7684\u5339\u914D\u4FE1\u606F</li><li><code>If-Unmodified-Since</code>\uFF1A\u6BD4\u8F83\u8D44\u6E90\u6700\u540E\u7684\u66F4\u65B0\u65F6\u95F4\u662F\u5426\u4E0D\u4E00\u81F4</li><li><code>If-Match</code>\uFF1A\u6BD4\u8F83 ETag \u662F\u5426\u4E00\u81F4</li><li><code>If-None-Match</code>\uFF1A\u6BD4\u8F83 ETag \u662F\u5426\u4E0D\u4E00\u81F4</li></ul><p>\u7B49\u66F4\u591A\u53EF\u4F9B\u9009\u62E9\u7684\u7F13\u5B58\u5934\u6765\u63A7\u5236\u7F13\u5B58\u7B56\u7565\u3002</p><h2 id="http1-1-\u7F3A\u9677" tabindex="-1">HTTP1.1 - \u7F3A\u9677 <a class="header-anchor" href="#http1-1-\u7F3A\u9677" aria-hidden="true">#</a></h2><ul><li><p><strong>\u9AD8\u5EF6\u8FDF \u2014 \u961F\u5934\u963B\u585E</strong></p></li><li><p><strong>\u65E0\u72B6\u6001\uFF0C\u534F\u8BAE\u5F00\u9500\u5927</strong></p><p>\u6CA1\u6709\u76F8\u5E94\u7684\u538B\u7F29\u4F20\u8F93\u4F18\u5316\u65B9\u6848\u3002 HTTP/1.1 \u5728\u4F7F\u7528\u65F6\uFF0Cheader \u91CC\u643A\u5E26\u7684\u5185\u5BB9\u8FC7\u5927\uFF0C\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u589E\u52A0\u4E86\u4F20\u8F93\u7684\u6210\u672C\uFF0C\u5E76\u4E14\u6BCF\u6B21\u8BF7\u6C42 header \u57FA\u672C\u4E0D\u600E\u4E48\u53D8\u5316\uFF0C\u5C24\u5176\u5728\u79FB\u52A8\u7AEF\u589E\u52A0\u7528\u6237\u6D41\u91CF\u3002</p></li><li><p><strong>\u660E\u6587\u4F20\u8F93 \u2014 \u4E0D\u5B89\u5168\u6027</strong></p></li><li><p><strong>\u4E0D\u652F\u6301\u670D\u52A1\u7AEF\u63A8\u9001</strong></p></li></ul><h2 id="http2-\u7684\u6539\u8FDB" tabindex="-1">HTTP2 \u7684\u6539\u8FDB <a class="header-anchor" href="#http2-\u7684\u6539\u8FDB" aria-hidden="true">#</a></h2><ul><li><p><strong>\u4E8C\u8FDB\u5236\u4F20\u8F93</strong></p></li><li><p><strong>Header \u538B\u7F29</strong></p><ul><li>\u51CF\u5C0F header \u7684\u4F53\u79EF</li><li>\u5728\u5BA2\u6237\u7AEF\u670D\u52A1\u7AEF\u5EFA\u7ACB\u5B57\u5178\uFF0C\u901A\u8FC7 \u201C\u9996\u90E8\u8868\u201D \u8DDF\u8E2A\u4E4B\u524D\u7684\u6570\u636E\uFF0C\u5BF9\u4E8E\u76F8\u540C\u7684\u6570\u636E\u4E0D\u518D\u53D1\u9001</li></ul></li><li><p><strong>\u591A\u8DEF\u590D\u7528</strong></p><p>HTTP2.0 \u4E2D\uFF0C\u6709\u4E24\u4E2A\u6982\u5FF5\u975E\u5E38\u91CD\u8981\uFF1A\u5E27\uFF08frame\uFF09\u548C\u6D41\uFF08stream\uFF09\u3002 \u5E27\u662F\u6700\u5C0F\u7684\u6570\u636E\u5355\u4F4D\uFF0C\u6BCF\u4E2A\u5E27\u4F1A\u6807\u8BC6\u51FA\u8BE5\u5E27\u5C5E\u4E8E\u54EA\u4E2A\u6D41\uFF0C\u6D41\u662F\u591A\u4E2A\u5E27\u7EC4\u6210\u7684\u6570\u636E\u6D41\u3002 \u6240\u8C13\u591A\u8DEF\u590D\u7528\uFF0C\u5373\u5728\u4E00\u4E2A TCP \u8FDE\u63A5\u4E2D\u5B58\u5728\u591A\u4E2A\u6D41\uFF0C\u5373\u53EF\u4EE5\u540C\u65F6\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42\uFF0C\u5BF9\u7AEF\u53EF\u4EE5\u901A\u8FC7\u5E27\u4E2D\u7684\u8868\u793A\u77E5\u9053\u8BE5\u5E27\u5C5E\u4E8E\u54EA\u4E2A\u8BF7\u6C42\u3002\u5728\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u4E9B\u5E27\u4E71\u5E8F\u53D1\u9001\uFF0C\u5230\u5BF9\u7AEF\u540E\u518D\u6839\u636E\u6BCF\u4E2A\u5E27\u9996\u90E8\u7684\u6D41\u6807\u8BC6\u7B26\u91CD\u65B0\u7EC4\u88C5\u3002\u901A\u8FC7\u8BE5\u6280\u672F\uFF0C\u53EF\u4EE5\u907F\u514D HTTP \u65E7\u7248\u672C\u7684\u961F\u5934\u963B\u585E\u95EE\u9898\uFF0C\u6781\u5927\u63D0\u9AD8\u4F20\u8F93\u6027\u80FD\u3002</p></li><li><p><strong>\u670D\u52A1\u7AEF\u63A8\u9001</strong></p><p>\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6D88\u606F\u3002\u6BD4\u5982\uFF0C\u5728\u6D4F\u89C8\u5668\u521A\u8BF7\u6C42 HTML \u7684\u65F6\u5019\u5C31\u63D0\u524D\u628A\u53EF\u80FD\u4F1A\u7528\u5230\u7684 JS\u3001CSS \u6587\u4EF6\u53D1\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u51CF\u5C11\u7B49\u5F85\u7684\u5EF6\u8FDF</p></li><li><p><strong>\u66F4\u5B89\u5168</strong></p><p>HTTP2.0 \u4F7F\u7528\u4E86 TLS \u7684\u62D3\u5C55 ALPN \u505A\u4E3A\u534F\u8BAE\u5347\u7EA7\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0CHTTP2.0 \u5BF9 tls \u7684\u5B89\u5168\u6027\u505A\u4E86\u8FD1\u4E00\u6B65\u52A0\u5F3A\uFF0C\u901A\u8FC7\u9ED1\u540D\u5355\u673A\u5236\u7981\u7528\u4E86\u51E0\u767E\u79CD\u4E0D\u518D\u5B89\u5168\u7684\u52A0\u5BC6\u7B97\u6CD5\u3002</p></li></ul><h2 id="http2-\u7F3A\u9677" tabindex="-1">HTTP2 - \u7F3A\u9677 <a class="header-anchor" href="#http2-\u7F3A\u9677" aria-hidden="true">#</a></h2><ul><li><p><strong>\u4E22\u5305\u4E0B\u6027\u80FD\u5DEE</strong></p><p>TCP \u4E3A\u4E86\u4FDD\u8BC1\u4F20\u8F93\u7684\u53EF\u9760\u6027\uFF0C\u6709\u4E2A <strong>\u4E22\u5305\u91CD\u4F20</strong> \u7684\u673A\u5236\uFF0C\u4E5F\u5C31\u662F\u4E22\u5305\u540E\u6574\u4E2A TCP \u901A\u9053\u7684\u8BF7\u6C42\u90FD\u9700\u8981\u91CD\u65B0\u8BF7\u6C42\u3002HTTP1.1 \u65F6\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A TCP \u901A\u9053\uFF0C\u4E00\u4E2A\u6709\u95EE\u9898\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u7684\uFF0C\u4F46\u662F HTTP2.0 \u6240\u6709\u7684\u8BF7\u6C42\u90FD\u5728\u4E00\u4E2A\u901A\u9053\uFF0C\u6240\u4EE5\u4E22\u5305\u4E0B\u6027\u80FD\u4F1A\u5DEE</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5728 TCP \u91CC\uFF0C\u5982\u679C\u4E00\u4E2A segment \u4F20\u9012\u4E22\u5931\uFF0C\u90A3\u4E48\u540E\u7EED segment \u4E71\u5E8F\u5230\u8FBE\uFF0C\u4E5F\u4E0D\u4F1A\u88AB\u5E94\u7528\u5C42\u4F7F\u7528\uFF0C\u53EA\u5230\u4E22\u5931\u7684 segment \u91CD\u4F20\u6210\u529F\u4E3A\u6B62\uFF0C\u56E0\u6B64 TCP \u5B9E\u73B0\u7684 HTTP2 \u7684\u591A\u8DEF\u590D\u7528\u80FD\u529B\u53D7\u5230\u5236\u7EA6</p></div><ul><li><p><strong>\u591A\u8DEF\u590D\u7528\u5BFC\u81F4\u670D\u52A1\u5668\u538B\u529B\u53D8\u5927</strong></p><p>\u591A\u8DEF\u590D\u7528\u4F1A\u8BA9\u6240\u6709\u8BF7\u6C42\u540C\u65F6\u53D1\u9001\uFF0C\u6240\u4EE5\u4F1A\u9020\u6210\u8BF7\u6C42\u7684\u77ED\u6682\u7206\u53D1\uFF0C\u5BFC\u81F4\u670D\u52A1\u5668\u538B\u529B\u589E\u52A0</p></li><li><p><strong>\u591A\u8DEF\u590D\u7528\u5BB9\u6613 timeout</strong></p></li></ul><h2 id="http3" tabindex="-1">HTTP3 <a class="header-anchor" href="#http3" aria-hidden="true">#</a></h2><h3 id="_1-\u4F7F\u7528-quic\uFF08quick-udp-internet-connection\uFF09-\u534F\u8BAE" tabindex="-1">1. \u4F7F\u7528 <code>QUIC\uFF08Quick udp internet connection\uFF09</code> \u534F\u8BAE <a class="header-anchor" href="#_1-\u4F7F\u7528-quic\uFF08quick-udp-internet-connection\uFF09-\u534F\u8BAE" aria-hidden="true">#</a></h3><ul><li>\u5E95\u5C42\u4F7F\u7528 UDP \u4F20\u8F93\uFF0C UDP \u662F \u201C\u65E0\u8FDE\u63A5\u201D \u7684\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981 \u201C\u63E1\u624B\u3001\u6325\u624B\u201D\uFF0C\u6545\u901F\u5EA6\u5F88\u5FEB</li><li>\u867D\u7136 UDP \u4E0D\u63D0\u4F9B\u53EF\u9760\u6027\u7684\u4F20\u8F93\uFF0C\u4F46 QUIC \u5728 UDP \u7684\u57FA\u7840\u4E4B\u4E0A\u589E\u52A0\u4E86\u4E00\u5C42\u6765\u4FDD\u8BC1\u6570\u636E\u53EF\u9760\u6027\u4F20\u8F93\u3002\u5B83\u63D0\u4F9B\u4E86\u6570\u636E\u5305\u91CD\u4F20\u3001\u62E5\u585E\u63A7\u5236\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B TCP \u4E2D\u5B58\u5728\u7684\u7279\u6027\u3002</li><li>\u96C6\u6210\u4E86 TLS \u52A0\u5BC6\u529F\u80FD\u3002</li><li>\u591A\u8DEF\u590D\u7528\uFF0C\u5F7B\u5E95\u89E3\u51B3 TCP \u4E2D\u961F\u5934\u963B\u585E\u7684\u95EE\u9898\uFF08QUIC \u5B9E\u73B0\u4E86\u5728\u540C\u4E00\u7269\u7406\u8FDE\u63A5\u4E0A\u53EF\u4EE5\u6709\u591A\u4E2A\u72EC\u7ACB\u7684\u903B\u8F91\u6570\u636E\u6D41\uFF0C\u5B9E\u73B0\u4E86\u6570\u636E\u6D41\u7684\u72EC\u7ACB\u4F20\u8F93\uFF09\u3002</li><li>\u5B9E\u73B0\u52A8\u6001\u53EF\u63D2\u62D4\uFF0C\u5728\u5E94\u7528\u5C42\u5B9E\u73B0\u4E86\u62E5\u585E\u63A7\u5236\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u3002\u5E94\u7528\u7A0B\u5E8F\u5C42\u9762\u5C31\u80FD\u5B9E\u73B0\u4E0D\u540C\u7684\u62E5\u585E\u63A7\u5236\u7B97\u6CD5\uFF0C\u4E0D\u9700\u8981\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4E0D\u9700\u8981\u5185\u6838\u652F\u6301\u3002\u8FD9\u662F\u4E00\u4E2A\u98DE\u8DC3\uFF0C\u56E0\u4E3A\u4F20\u7EDF\u7684 TCP \u62E5\u585E\u63A7\u5236\uFF0C\u5FC5\u987B\u8981\u7AEF\u5230\u7AEF\u7684\u7F51\u7EDC\u534F\u8BAE\u6808\u652F\u6301\uFF0C\u624D\u80FD\u5B9E\u73B0\u63A7\u5236\u6548\u679C\u3002\u800C\u5185\u6838\u548C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u90E8\u7F72\u6210\u672C\u975E\u5E38\u9AD8\uFF0C\u5347\u7EA7\u5468\u671F\u5F88\u957F\uFF0C\u8FD9\u5728\u4EA7\u54C1\u5FEB\u901F\u8FED\u4EE3\uFF0C\u7F51\u7EDC\u7206\u70B8\u5F0F\u589E\u957F\u7684\u4ECA\u5929\uFF0C\u663E\u7136\u6709\u70B9\u6EE1\u8DB3\u4E0D\u4E86\u9700\u6C42\u3002</li><li>\u62A5\u6587\u5934\u548C\u62A5\u6587\u4F53\u5206\u522B\u8FDB\u884C\u8BA4\u8BC1\u548C\u52A0\u5BC6\u5904\u7406\uFF0C\u4FDD\u969C\u5B89\u5168\u6027\u3002</li></ul><h3 id="quic-\u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u9760\u6027" tabindex="-1">QUIC \u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u9760\u6027 <a class="header-anchor" href="#quic-\u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u9760\u6027" aria-hidden="true">#</a></h3><p>QUIC \u4F7F\u7528\u7684 <code>Packet Number</code> \u5355\u8C03\u9012\u589E\u7684\u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u8BA9\u6570\u636E\u5305\u4E0D\u518D\u50CF TCP \u90A3\u6837\u5FC5\u987B\u6709\u5E8F\u786E\u8BA4\uFF0CQUIC \u652F\u6301\u4E71\u5E8F\u786E\u8BA4\uFF0C\u5F53\u6570\u636E\u5305 <code>Packet N</code> \u4E22\u5931\u540E\uFF0C\u53EA\u8981\u6709\u65B0\u7684\u5DF2\u63A5\u6536\u6570\u636E\u5305\u786E\u8BA4\uFF0C\u5F53\u524D\u7A97\u53E3\u5C31\u4F1A\u7EE7\u7EED\u5411\u53F3\u6ED1\u52A8\u3002\u5F85\u53D1\u9001\u7AEF\u83B7\u77E5\u6570\u636E\u5305 <code>Packet N</code> \u4E22\u5931\u540E\uFF0C\u4F1A\u5C06\u9700\u8981\u91CD\u4F20\u7684\u6570\u636E\u5305\u653E\u5230\u5F85\u53D1\u9001\u961F\u5217\uFF0C\u91CD\u65B0\u7F16\u53F7\u6BD4\u5982\u6570\u636E\u5305 <code>Packet N+M</code> \u540E\u91CD\u65B0\u53D1\u9001\u7ED9\u63A5\u6536\u7AEF\uFF0C\u5BF9\u91CD\u4F20\u6570\u636E\u5305\u7684\u5904\u7406\u8DDF\u53D1\u9001\u65B0\u7684\u6570\u636E\u5305\u7C7B\u4F3C\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u56E0\u4E3A\u4E22\u5305\u91CD\u4F20\u5C06\u5F53\u524D\u7A97\u53E3\u963B\u585E\u5728\u539F\u5730\uFF0C\u4ECE\u800C\u89E3\u51B3\u4E86\u961F\u5934\u963B\u585E\u95EE\u9898\u3002\u90A3\u4E48\uFF0C\u65E2\u7136\u91CD\u4F20\u6570\u636E\u5305\u7684 <code>Packet N+M</code> \u4E0E\u4E22\u5931\u6570\u636E\u5305\u7684 <code>Packet N</code> \u7F16\u53F7\u5E76\u4E0D\u4E00\u81F4\uFF0C\u6211\u4EEC\u600E\u4E48\u786E\u5B9A\u8FD9\u4E24\u4E2A\u6570\u636E\u5305\u7684\u5185\u5BB9\u4E00\u6837\u5462\uFF1F</p><p>QUIC \u4F7F\u7528 <code>Stream ID</code> \u6765\u6807\u8BC6\u5F53\u524D\u6570\u636E\u6D41\u5C5E\u4E8E\u54EA\u4E2A\u8D44\u6E90\u8BF7\u6C42\uFF0C\u8FD9\u540C\u65F6\u4E5F\u662F\u6570\u636E\u5305\u591A\u8DEF\u590D\u7528\u4F20\u8F93\u5230\u63A5\u6536\u7AEF\u540E\u80FD\u6B63\u5E38\u7EC4\u88C5\u7684\u4F9D\u636E\u3002\u91CD\u4F20\u7684\u6570\u636E\u5305 <code>Packet N+M</code> \u548C\u4E22\u5931\u7684\u6570\u636E\u5305 <code>Packet N</code> \u5355\u9760 <code>Stream ID</code> \u7684\u6BD4\u5BF9\u4E00\u81F4\u4ECD\u7136\u4E0D\u80FD\u5224\u65AD\u4E24\u4E2A\u6570\u636E\u5305\u5185\u5BB9\u4E00\u81F4\uFF0C\u8FD8\u9700\u8981\u518D\u65B0\u589E\u4E00\u4E2A\u5B57\u6BB5 <code>Stream Offset</code>\uFF0C\u6807\u8BC6\u5F53\u524D\u6570\u636E\u5305\u5728\u5F53\u524D <code>Stream ID</code> \u4E2D\u7684\u5B57\u8282\u504F\u79FB\u91CF\u3002</p><p>\u6709\u4E86 <code>Stream Offset</code> \u5B57\u6BB5\u4FE1\u606F\uFF0C\u5C5E\u4E8E\u540C\u4E00\u4E2A <code>Stream ID</code> \u7684\u6570\u636E\u5305\u4E5F\u53EF\u4EE5\u4E71\u5E8F\u4F20\u8F93\u4E86\uFF08HTTP/2 \u4E2D\u4EC5\u9760 <code>Stream ID</code> \u6807\u8BC6\uFF0C\u8981\u6C42\u540C\u5C5E\u4E8E\u4E00\u4E2A <code>Stream ID</code> \u7684\u6570\u636E\u5E27\u5FC5\u987B\u6709\u5E8F\u4F20\u8F93\uFF09\uFF0C\u901A\u8FC7\u4E24\u4E2A\u6570\u636E\u5305\u7684 <code>Stream ID</code> \u4E0E <code>Stream Offset</code> \u90FD\u4E00\u81F4\uFF0C\u5C31\u8BF4\u660E\u8FD9\u4E24\u4E2A\u6570\u636E\u5305\u7684\u5185\u5BB9\u4E00\u81F4\u3002</p><h2 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-hidden="true">#</a></h2><p>HTTPS = HTTP + TLS/SSL</p><h3 id="\u5BF9\u79F0\u52A0\u5BC6-\u975E\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1">\u5BF9\u79F0\u52A0\u5BC6 &amp; \u975E\u5BF9\u79F0\u52A0\u5BC6 <a class="header-anchor" href="#\u5BF9\u79F0\u52A0\u5BC6-\u975E\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a></h3><h4 id="\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1">\u5BF9\u79F0\u52A0\u5BC6 <a class="header-anchor" href="#\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a></h4><p>\u52A0\u5BC6\u89E3\u5BC6\u4F7F\u7528 <strong>\u76F8\u540C</strong> \u7684\u5BC6\u94A5</p><ul><li>\u4F18\u70B9\uFF1A\u9AD8\u6548\uFF0C\u52A0\u5BC6\u3001\u89E3\u5BC6\u901F\u5EA6\u5FEB</li><li>\u7F3A\u70B9\uFF1A\u5BF9\u79F0\u52A0\u5BC6\u7684\u7B97\u6CD5\u672C\u8EAB\u662F\u5B89\u5168\u7684\uFF0C\u4F46\u662F\u4F7F\u7528\u573A\u666F\u4E0D\u591F\u5B89\u5168</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6211\u4EEC\u901A\u4FE1\u65F6\u5019\u9700\u8981\u628A\u52A0\u5BC6\u540E\u7684\u6570\u636E\u548C\u5BC6\u94A5\u540C\u65F6\u53D1\u9001\u7ED9\u5BF9\u65B9(\u56E0\u4E3A\u52A0\u5BC6\u89E3\u5BC6\u90FD\u662F\u540C\u4E00\u4E2A\u5BC6\u94A5)\uFF0C\u8FC7\u7A0B\u4E2D\u5982\u679C\u88AB\u4E2D\u95F4\u4EBA\u62E6\u622A\uFF0C\u4E2D\u95F4\u4EBA\u5B8C\u5168\u53EF\u4EE5\u901A\u8FC7\u53D1\u9001\u7684\u5BC6\u94A5\u89E3\u51FA\u52A0\u5BC6\u7684\u5185\u5BB9\uFF0C\u56E0\u6B64\u4E0D\u5B89\u5168</p></div><h4 id="\u975E\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1">\u975E\u5BF9\u79F0\u52A0\u5BC6 <a class="header-anchor" href="#\u975E\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a></h4><p>\u4F7F\u7528\u5339\u914D\u7684\u4E00\u5BF9\u5BC6\u94A5\uFF08\u516C\u94A5\u3001\u79C1\u94A5\uFF09\u6765\u5206\u522B\u8FDB\u884C\u52A0\u5BC6\u548C\u89E3\u5BC6</p><ul><li>\u4F18\u70B9\uFF1A\u5B89\u5168\u6027\u9AD8</li><li>\u7F3A\u70B9\uFF1A\u52A0\u5BC6\u89E3\u5BC6\u590D\u6742\uFF0C\u6548\u7387\u4F4E\u3001\u8017\u65F6\u957F</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u516C\u94A5\u52A0\u5BC6\u7684\u6570\u636E\u53EA\u80FD\u7528\u79C1\u94A5\u89E3\u5BC6\uFF0C\u540C\u7406\u79C1\u94A5\u52A0\u5BC6\u7684\u6570\u636E\u53EA\u80FD\u7528\u5171\u94A5\u89E3\u5BC6</p></div><h4 id="\u6D41\u7A0B" tabindex="-1">\u6D41\u7A0B <a class="header-anchor" href="#\u6D41\u7A0B" aria-hidden="true">#</a></h4><ol><li>\u670D\u52A1\u7AEF\u751F\u6210\u81EA\u5DF1\u7684\u516C\u94A5\u548C\u79C1\u94A5\u3002</li><li>CA \u673A\u6784\u901A\u8FC7 <strong>\u673A\u6784\u79C1\u94A5</strong> \u5C06\u670D\u52A1\u5668\u7684\u516C\u94A5\u3001\u8FC7\u671F\u65F6\u95F4\u3001\u57DF\u540D\u7B49\u4FE1\u606F\u5B58\u653E\u5728\u8BC1\u4E66\u4E2D\u3002</li><li>\u6D4F\u89C8\u5668\u9884\u8BF7\u6C42\u670D\u52A1\u5668\u7684\u8BA4\u8BC1\u8BC1\u4E66\uFF0C\u7528\u7CFB\u7EDF\u5B58\u50A8\u7684<strong>\u673A\u6784\u516C\u94A5</strong>\u8FDB\u884C\u8BA4\u8BC1</li><li>\u8BA4\u8BC1\u6210\u529F\u540E\u83B7\u5F97\u670D\u52A1\u5668\u7684\u516C\u94A5</li><li>\u5BA2\u6237\u7AEF\u751F\u6210<strong>\u4F1A\u8BDD\u5BC6\u94A5</strong>\uFF08\u5BF9\u79F0\u52A0\u5BC6\uFF09\uFF0C\u5E76\u5C06\u5176\u7528\u670D\u52A1\u5668\u7684\u516C\u94A5\u8FDB\u884C\u52A0\u5BC6\u4F20\u8F93</li><li>\u670D\u52A1\u7AEF\u901A\u8FC7\u81EA\u5DF1\u7684\u79C1\u94A5\u8FDB\u884C\u89E3\u5BC6\uFF0C\u7136\u540E\u5C06\u8981\u4F20\u8F93\u7684\u660E\u6587\u901A\u8FC7\u4F1A\u8BDD\u5BC6\u94A5\u52A0\u5BC6\u4F20\u8F93</li></ol><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>HTTP/1.1 \u6709\u4E24\u4E2A\u4E3B\u8981\u7684\u7F3A\u70B9\uFF1A\u5B89\u5168\u4E0D\u8DB3\u548C\u6027\u80FD\u4E0D\u9AD8\u3002</li><li>HTTP/2 \u5B8C\u5168\u517C\u5BB9 HTTP/1\uFF0C\u662F\u201C\u66F4\u5B89\u5168\u7684 HTTP\u3001\u66F4\u5FEB\u7684 HTTPS&quot;\uFF0C\u5934\u90E8\u538B\u7F29\u3001\u591A\u8DEF\u590D\u7528\u7B49\u6280\u672F\u53EF\u4EE5\u5145\u5206\u5229\u7528\u5E26\u5BBD\uFF0C\u964D\u4F4E\u5EF6\u8FDF\uFF0C\u4ECE\u800C\u5927\u5E45\u5EA6\u63D0\u9AD8\u4E0A\u7F51\u4F53\u9A8C\u3002</li><li>QUIC \u57FA\u4E8E UDP \u5B9E\u73B0\uFF0C\u662F HTTP/3 \u4E2D\u7684\u5E95\u5C42\u652F\u6491\u534F\u8BAE\u3002\u8BE5\u534F\u8BAE\u57FA\u4E8E UDP\uFF0C\u53C8\u6C72\u53D6\u4E86 TCP \u4E2D\u7684\u7CBE\u534E\uFF0C\u5B9E\u73B0\u4E86\u65E2\u5FEB\u53C8\u53EF\u9760\u7684\u534F\u8BAE\u3002</li></ul><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844904001528397837" target="_blank" rel="noreferrer">\u6398\u91D1\uFF1Ahttp \u53D1\u5C55\u53F2(http0.9\u3001http1.0\u3001http1.1\u3001http2\u3001http3)\u68B3\u7406\u7B14\u8BB0</a></li><li><a href="https://juejin.cn/post/6995109407545622542" target="_blank" rel="noreferrer">\u6398\u91D1\uFF1A\u89E3\u8BFB HTTP1/HTTP2/HTTP3</a></li><li><a href="https://juejin.cn/post/6904423377499324423" target="_blank" rel="noreferrer">\u6398\u91D1\uFF1A\u56DE\u987E HTTP1.0\uFF0CHTTP1.1\uFF0CHTTP2.0 \u7684\u533A\u522B</a></li><li><a href="https://juejin.cn/post/7077439753993322510" target="_blank" rel="noreferrer">\u6398\u91D1\uFF1A10 \u5206\u949F\u8BB2\u5B8C QUIC \u534F\u8BAE</a></li><li><a href="https://zhuanlan.zhihu.com/p/32553477" target="_blank" rel="noreferrer">\u77E5\u4E4E\uFF1A\u79D1\u666E\uFF1AQUIC \u534F\u8BAE\u539F\u7406\u5206\u6790</a></li><li><a href="https://www.biaodianfu.com/quic.html#Stream%E5%B1%82" target="_blank" rel="noreferrer">\u7F51\u9875\uFF1A\u7F51\u7EDC\u901A\u8BAF\u534F\u8BAE\u53EA QUIC - \u6807\u70B9\u7B26</a></li></ul>',49),n=[a];function o(c,d,h,s,p,T){return t(),i("div",null,n)}const g=e(r,[["render",o]]);export{P as __pageData,g as default};
