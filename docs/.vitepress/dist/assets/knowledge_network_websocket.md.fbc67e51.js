import{_ as e,c as t,o as a,d as l}from"./app.388a77d7.js";const _=JSON.parse('{"title":"WebSocket","description":"","frontmatter":{},"headers":[{"level":2,"title":"what","slug":"what"},{"level":2,"title":"\u8FC7\u7A0B","slug":"\u8FC7\u7A0B"},{"level":2,"title":"\u5FC3\u8DF3\u5305\u7528\u9014","slug":"\u5FC3\u8DF3\u5305\u7528\u9014"},{"level":2,"title":"WebSocket \u4E0E http \u7684\u5173\u7CFB","slug":"websocket-\u4E0E-http-\u7684\u5173\u7CFB"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"knowledge/network/websocket.md"}'),o={name:"knowledge/network/websocket.md"},r=l('<h1 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h1><h2 id="what" tabindex="-1">what <a class="header-anchor" href="#what" aria-hidden="true">#</a></h2><ol><li>WebSocket \u662F HTML5 \u4E0B\u7684\u4E00\u79CD\u65B0\u534F\u8BAE\uFF0C\u5EFA\u7ACB\u5728 TCP \u534F\u8BAE\u4E4B\u4E0A\u3002</li><li>\u4E00\u6B21\u63E1\u624B\u3001\u6301\u4E45\u8FDE\u63A5\u3001\u53CC\u5411\u901A\u4FE1\uFF08\u4E3B\u8981\u8FD8\u662F\u670D\u52A1\u7AEF\u63A8\u9001\uFF09</li><li>\u534F\u8BAE\u6807\u8BC6\u7B26\u662F ws\uFF08\u5982\u679C\u52A0\u5BC6\uFF0C\u5219\u4E3A wss\uFF09\uFF0C\u5982 ws://localhost:8888</li></ol><h2 id="\u8FC7\u7A0B" tabindex="-1">\u8FC7\u7A0B <a class="header-anchor" href="#\u8FC7\u7A0B" aria-hidden="true">#</a></h2><ol><li>\u5BA2\u6237\u7AEF\u7ECF\u8FC7 3 \u6B21\u63E1\u624B\u5EFA\u7ACB TCP \u8FDE\u63A5\uFF0C\u53D1\u9001 http \u8BF7\u6C42\uFF08http \u8BF7\u6C42\u4E2D\u5B58\u653E WebSocket \u7684\u4E00\u4E9B\u4FE1\u606F\uFF0CUpgrade\u3001Connection\u3001WebSocket-Version \u7B49\uFF09</li><li>\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u8BF7\u6C42\uFF0C\u540C\u6837\u91C7\u7528 http \u8FD4\u56DE\u6570\u636E\u3002</li><li>\u5BA2\u6237\u7AEF\u6536\u5230\u8FDE\u63A5\u6210\u529F\u7684\u6D88\u606F\uFF0C\u501F\u52A9 TCP \u901A\u9053\u8FDB\u884C\u5168\u53CC\u5DE5\u901A\u4FE1\u3002</li></ol><p>\u8BF4\u660E\uFF1A<code>Upgrade: websocket;Connection: Upgrade;</code> \u544A\u8BC9\u670D\u52A1\u5668\u6211\u662F\u4E00\u4E2A WebSocket \u534F\u8BAE\uFF0C\u800C\u4E0D\u662F http</p><h2 id="\u5FC3\u8DF3\u5305\u7528\u9014" tabindex="-1">\u5FC3\u8DF3\u5305\u7528\u9014 <a class="header-anchor" href="#\u5FC3\u8DF3\u5305\u7528\u9014" aria-hidden="true">#</a></h2><ol><li>\u5B9A\u65F6\u53D1\u9001\u6D88\u606F\uFF0C\u9632\u6B62\u670D\u52A1\u7AEF\u8D85\u65F6\u81EA\u52A8\u65AD\u7EBF\u3002</li><li>\u68C0\u6D4B\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF0C\u5982\u679C\u53D1\u9001\u4E00\u4E2A\u6D88\u606F\u540E\u670D\u52A1\u7AEF\u6CA1\u6709\u54CD\u5E94\uFF0C\u5E94\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u3002</li></ol><h2 id="websocket-\u4E0E-http-\u7684\u5173\u7CFB" tabindex="-1">WebSocket \u4E0E http \u7684\u5173\u7CFB <a class="header-anchor" href="#websocket-\u4E0E-http-\u7684\u5173\u7CFB" aria-hidden="true">#</a></h2><p><strong>\u76F8\u540C\u70B9\uFF1A</strong></p><ol><li>\u90FD\u662F\u57FA\u4E8E TCP\uFF0C\u90FD\u662F\u53EF\u9760\u6027\u7684\u4F20\u8F93\u534F\u8BAE\u3002</li><li>\u90FD\u662F\u5E94\u7528\u5C42\u534F\u8BAE\u3002</li></ol><p><strong>\u4E0D\u540C\u70B9\uFF1A</strong></p><ol><li>WebSocket \u662F\u53CC\u5411\u901A\u4FE1\uFF0C http \u4E3A\u5355\u5411\uFF08HTTP/2 \u4E5F\u652F\u6301\u670D\u52A1\u7AEF\u63A8\u9001\uFF0C\u4F46\u662F\u53EA\u80FD\u63A8\u9001\u9759\u6001\u8D44\u6E90\uFF09</li><li>WebSocket \u9700\u8981\u5148\u53D1\u9001\u4E00\u6B21 http \u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u63E1\u624B\u4E00\u6B21\u540E\u624D\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u800C http \u662F\u76F4\u63A5\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u3002</li></ol><p><strong>\u8054\u7CFB\uFF1A</strong></p><ol><li>WebSocket \u5728\u5EFA\u7ACB\u63E1\u624B\u65F6\uFF0C\u6570\u636E\u662F\u901A\u8FC7 HTTP \u4F20\u8F93\u7684\u3002\u4F46\u662F\u5EFA\u7ACB\u4E4B\u540E\uFF0C\u5728\u771F\u6B63\u4F20\u8F93\u65F6\u5019\u662F\u4E0D\u9700\u8981 HTTP \u534F\u8BAE\u7684\u3002</li></ol><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844903544978407431" target="_blank" rel="noopener noreferrer">\u6398\u91D1\uFF1AWebSocket\uFF1A5 \u5206\u949F\u4ECE\u5165\u95E8\u5230\u7CBE\u901A</a></li><li><a href="https://blog.csdn.net/qq_54773998/article/details/123863493" target="_blank" rel="noopener noreferrer">CSDN\uFF1AWebSocket</a></li><li><a href="https://juejin.cn/post/7020964728386093093#heading-3" target="_blank" rel="noopener noreferrer">\u6398\u91D1\uFF1A\u4E00\u6587\u5403\u900F WebSocket \u539F\u7406 \u521A\u9762\u8BD5\u5B8C\uFF0C\u8D81\u70ED\u8D76\u7D27\u6574\u7406</a></li></ul>',17),i=[r];function n(h,s,c,d,p,b){return a(),t("div",null,i)}var g=e(o,[["render",n]]);export{_ as __pageData,g as default};
