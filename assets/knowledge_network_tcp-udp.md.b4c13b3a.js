import{_ as t,o as i,c as l,a}from"./app.169502ad.js";const m=JSON.parse('{"title":"\u4F20\u8F93\u534F\u8BAE TCP \u548C UDP","description":"","frontmatter":{},"headers":[{"level":2,"title":"TCP","slug":"tcp"},{"level":3,"title":"\u521B\u5EFA\u8FDE\u63A5","slug":"\u521B\u5EFA\u8FDE\u63A5"},{"level":2,"title":"UDP","slug":"udp"},{"level":2,"title":"TCP \u4E0E UDP \u533A\u522B","slug":"tcp-\u4E0E-udp-\u533A\u522B"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"knowledge/network/tcp-udp.md"}'),r={name:"knowledge/network/tcp-udp.md"},e=a('<h1 id="\u4F20\u8F93\u534F\u8BAE-tcp-\u548C-udp" tabindex="-1">\u4F20\u8F93\u534F\u8BAE TCP \u548C UDP <a class="header-anchor" href="#\u4F20\u8F93\u534F\u8BAE-tcp-\u548C-udp" aria-hidden="true">#</a></h1><h2 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFA\u8FDE\u63A5" tabindex="-1">\u521B\u5EFA\u8FDE\u63A5 <a class="header-anchor" href="#\u521B\u5EFA\u8FDE\u63A5" aria-hidden="true">#</a></h3><ul><li>\u6807\u5FD7\u4F4D <ul><li>ACK - \u786E\u8BA4\u5E8F\u53F7\u7684\u6807\u5FD7\uFF0CACK=1 \u8868\u793A\u786E\u8BA4\u53F7\u6709\u6548\uFF0CACK=0 \u8868\u793A\u62A5\u6587\u4E0D\u542B\u786E\u8BA4\u5E8F\u53F7\u4FE1\u606F</li><li>SYN - \u8FDE\u63A5\u8BF7\u6C42\u5E8F\u53F7\u6807\u5FD7\uFF0C\u7528\u4E8E\u5EFA\u7ACB\u8FDE\u63A5\uFF0CSYN=1 \u8868\u793A\u8BF7\u6C42\u8FDE\u63A5</li><li>FIN - \u7ED3\u675F\u6807\u5FD7\uFF0C\u7528\u4E8E\u91CA\u653E\u8FDE\u63A5\uFF0C\u4E3A 1 \u8868\u793A\u5173\u95ED\u672C\u65B9\u6570\u636E\u6D41</li></ul></li><li>\u5E8F\u53F7 - \u8868\u793A\u53D1\u9001\u7684\u6570\u636E\u5B57\u8282\u6D41\uFF0C\u786E\u4FDD TCP \u4F20\u8F93\u6709\u5E8F\uFF0C\u5BF9\u6BCF\u4E2A\u5B57\u8282\u7F16\u53F7 <ul><li>seq - x (123123123)</li><li>ack - x+1 (123123124)</li></ul></li></ul><h4 id="\u4E09\u6B21\u63E1\u624B" tabindex="-1">\u4E09\u6B21\u63E1\u624B <a class="header-anchor" href="#\u4E09\u6B21\u63E1\u624B" aria-hidden="true">#</a></h4><p><img src="https://img-blog.csdnimg.cn/20200624102940552.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMTE1NDQ3OTg5Ng==,size_16,color_FFFFFF,t_70#pic_center#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;height=293&amp;id=OskIG&amp;originHeight=409&amp;originWidth=652&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=&amp;width=467" alt=""></p><ul><li>\u7B2C\u4E00\u6B21 <ul><li>\u53D1\u9001\u8BF7\u6C42\u5EFA\u7ACB\u8FDE\u63A5\u62A5\u6587, <strong>SYN = 1\uFF0Cseq = x</strong>\uFF0C\u7B49\u5F85\u670D\u52A1\u7AEF\u786E\u8BA4, \u5BA2\u6237\u7AEF\u8FDB\u5165 <strong>SYN_SENT</strong>\u72B6\u6001</li><li>\u767D\u8BDD\u7248 - \u6211\u8981\u548C\u4F60\u5EFA\u7ACB\u8FDE\u63A5</li></ul></li><li>\u7B2C\u4E8C\u6B21 <ul><li>\u670D\u52A1\u7AEF\u6536\u5230\u8BF7\u6C42\uFF0C\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u9A8C\u8BC1 <strong>ack = x + 1</strong>, \u540C\u65F6\u81EA\u5DF1\u53D1\u9001\u4E00\u4E2A\u9A8C\u8BC1\u5305 <strong>seq = y</strong>, \u670D\u52A1\u7AEF\u8FDB\u5165<strong>SYN_RECV</strong>\u72B6\u6001</li><li>\u767D\u8BDD\u7248 - \u6211\u6536\u5230\u4E86\uFF0C\u786E\u5B9A\u8981\u8FDE\u63A5\u5417\uFF08\u8FD8\u5728\u5417\uFF09</li></ul></li><li>\u7B2C\u4E09\u6B21 <ul><li>\u5BA2\u6237\u7AEF\u6536\u5230\u8BF7\u6C42\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001\u786E\u8BA4 <strong>ack = y + 1</strong>, \u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u540C\u65F6\u8FDB\u5165<strong>ESTABLISHED</strong>\u72B6\u6001\uFF0C\u5B8C\u6210\u8FDE\u63A5</li><li>\u767D\u8BDD\u7248 - \u6211\u8FD8\u5728\uFF0C\u54B1\u4EEC\u5EFA\u7ACB\u8FDE\u63A5\u5427</li></ul></li></ul><h4 id="\u56DB\u6B21\u6325\u624B" tabindex="-1">\u56DB\u6B21\u6325\u624B <a class="header-anchor" href="#\u56DB\u6B21\u6325\u624B" aria-hidden="true">#</a></h4><p><img src="https://img-blog.csdnimg.cn/20200624102940599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMTE1NDQ3OTg5Ng==,size_16,color_FFFFFF,t_70#pic_center#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=CHaOf&amp;originHeight=463&amp;originWidth=668&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><ul><li>\u7B2C\u4E00\u6B21 <ul><li>\u5BA2\u6237\u7AEF\u53D1\u9001\u65AD\u5F00\u8FDE\u63A5\u8BF7\u6C42, <strong>FIN = 1, seq = u</strong>, \u5BA2\u6237\u7AEF\u8FDB\u5165<strong>FIN-WAIT-1</strong>\u72B6\u6001</li><li>\u767D\u8BDD\u7248 - \u6211\u7684\u6570\u636E\u4F20\u5B8C\u4E86\uFF0C\u54B1\u4EEC\u65AD\u5F00\u5427</li></ul></li><li>\u7B2C\u4E8C\u6B21 <ul><li>\u670D\u52A1\u7AEF\u6536\u5230\u65AD\u5F00\u8BF7\u6C42\uFF0C \u53D1\u9001\u786E\u8BA4 <strong>ACK=1\uFF0Cack=u+1</strong>, \u540C\u65F6\u53D1\u9001\u4E00\u4E2A\u9A8C\u8BC1\u5305 <strong>seq = v</strong>\uFF0C\u8FDB\u5165 <strong>CLOSE-WAIT</strong>\u72B6\u6001</li><li>\u5BA2\u6237\u7AEF\u6536\u5230\u8BF7\u6C42\u786E\u8BA4\uFF0C \u8FDB\u5165 <strong>FIN-WAIT-2</strong> \u72B6\u6001\uFF0C\u7B49\u5F85\u670D\u52A1\u5668\u53D1\u9001\u65AD\u5F00\u8BF7\u6C42</li><li>\u767D\u8BDD\u7248 - \u597D\u7684\uFF0C\u6211\u77E5\u9053\u4E86\uFF0C\u6211\u8FD8\u6709\u6570\u636E\u6CA1\u4F20\u5B8C\uFF0C\u8BF7\u7A0D\u7B49</li></ul></li><li>\u7B2C\u4E09\u6B21 <ul><li>\u670D\u52A1\u5668\u4F20\u8F93\u5B8C\u6210\uFF0C\u53D1\u9001\u65AD\u5F00\u8BF7\u6C42 <strong>FIN = 1, ACK = 1, seq = w, ack = u + 1</strong>, \xA0 \u670D\u52A1\u7AEF\u8FDB\u5165 <strong>LAST-ACK</strong> \u72B6\u6001</li><li>\u767D\u8BDD\u7248 - \u6211\u7684\u6570\u636E\u5DF2\u7ECF\u4F20\u8F93\u5B8C\u4E86\uFF0C\u54B1\u4EEC\u53EF\u4EE5\u65AD\u5F00\u4E86</li></ul></li><li>\u7B2C\u56DB\u6B21 <ul><li>\u5BA2\u6237\u7AEF\u6536\u5230\u65AD\u5F00\u8BF7\u6C42\uFF0C\u5411\u670D\u52A1\u7AEF\u53D1\u51FA\u786E\u8BA4 <strong>ACK = 1, seq = u + 1, ack = w + 1</strong>\uFF0C \u5BA2\u6237\u7AEF\u8FDB\u5165<strong>TIME-WAIT</strong>\u72B6\u6001\uFF0C \u670D\u52A1\u7AEF\u7ACB\u5373\u8FDB\u5165<strong>CLOSED</strong>\u72B6\u6001, \u5BA2\u6237\u7AEF\u5728 <strong>TIME-WAIT</strong> \u72B6\u6001\u7ED3\u675F\u540E(2MSL)\uFF0C\u8FDB\u5165 <strong>CLOSED</strong> \u72B6\u6001</li><li>\u767D\u8BDD\u7248 - \u6211\u6536\u5230\u4E86\uFF0C\u53EF\u4EE5\u65AD\u5F00\u4E86</li></ul></li></ul><h2 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-hidden="true">#</a></h2><ol><li>\u9762\u5411\u65E0\u8FDE\u63A5\uFF0C\u60F3\u53D1\u9001\u5C31\u53EF\u4EE5\u53D1\u9001</li><li>\u652F\u6301\u4E00\u5BF9\u4E00\uFF0C\u4E00\u5BF9\u591A\uFF0C\u591A\u5BF9\u4E00\u548C\u591A\u5BF9\u591A\u4EA4\u4E92\u901A\u4FE1</li><li>\u4E0D\u4F1A\u5BF9\u62A5\u6587\u8FDB\u884C\u4EFB\u4F55\u62C6\u5206\u548C\u62FC\u63A5\u64CD\u4F5C\uFF0C\u53D1\u9001\u65B9\u7684 UDP \u5BF9\u5E94\u7528\u7A0B\u5E8F\u4EA4\u4E0B\u6765\u7684\u62A5\u6587\uFF0C\u5728\u6DFB\u52A0\u9996\u90E8\u540E\u5C31\u5411\u4E0B\u4EA4\u4ED8 IP \u5C42\u3002UDP \u5BF9\u5E94\u7528\u5C42\u4EA4\u4E0B\u6765\u7684\u62A5\u6587\uFF0C\u65E2\u4E0D\u5408\u5E76\uFF0C\u4E5F\u4E0D\u62C6\u5206\uFF0C\u800C\u662F\u4FDD\u7559\u8FD9\u4E9B\u62A5\u6587\u7684\u8FB9\u754C\u3002\u56E0\u6B64\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5FC5\u987B\u9009\u62E9\u5408\u9002\u5927\u5C0F\u7684\u62A5\u6587</li><li>\u4E0D\u53EF\u9760</li></ol><ul><li>\u4E3B\u8981\u4F53\u73B0\u5728\u65E0\u8FDE\u63A5\uFF0C\u60F3\u53D1\u5C31\u53D1\u8FD9\u79CD\u60C5\u51B5\u4E0D\u53EF\u9760</li><li>\u6CA1\u6709\u62E5\u585E\u63A7\u5236\uFF0C\u4E00\u76F4\u4EE5\u4E00\u4E2A\u901F\u7387\u53D1\u9001\uFF0C\u4E0D\u5173\u5FC3\u5BF9\u65B9\u662F\u5426\u6536\u5230\uFF0C\u5728\u7F51\u7EDC\u6761\u4EF6\u4E0D\u597D\u65F6\u5BB9\u6613\u4E22\u5305</li></ul><ol start="5"><li>\u5934\u90E8\u5F00\u9500\u5C0F\uFF0C\u4F20\u8F93\u9AD8\u6548</li></ol><h2 id="tcp-\u4E0E-udp-\u533A\u522B" tabindex="-1">TCP \u4E0E UDP \u533A\u522B <a class="header-anchor" href="#tcp-\u4E0E-udp-\u533A\u522B" aria-hidden="true">#</a></h2><table><thead><tr><th></th><th>UDP</th><th>TCP</th></tr></thead><tbody><tr><td>\u662F\u5426\u8FDE\u63A5</td><td>\u65E0\u8FDE\u63A5</td><td>\u9762\u5411\u8FDE\u63A5</td></tr><tr><td>\u662F\u5426\u53EF\u9760</td><td>\u4E0D\u53EF\u9760\u4F20\u8F93\uFF0C\u4E0D\u4F7F\u7528\u6D41\u91CF\u63A7\u5236\u548C\u62E5\u585E\u63A7\u5236</td><td>\u53EF\u9760\u4F20\u8F93\uFF0C\u4F7F\u7528\u6D41\u91CF\u63A7\u5236\u548C\u62E5\u585E\u63A7\u5236</td></tr><tr><td>\u8FDE\u63A5\u5BF9\u8C61\u4E2A\u6570</td><td>\u652F\u6301\u4E00\u5BF9\u4E00\uFF0C\u4E00\u5BF9\u591A\uFF0C\u591A\u5BF9\u4E00\u548C\u591A\u5BF9\u591A\u4EA4\u4E92\u901A\u4FE1</td><td>\u53EA\u80FD\u662F\u4E00\u5BF9\u4E00\u901A\u4FE1</td></tr><tr><td>\u4F20\u8F93\u65B9\u5F0F</td><td>\u9762\u5411\u62A5\u6587\uFF08\u53EA\u80FD\u4E00\u6B21\u53D1\u5B8C\uFF09</td><td>\u9762\u5411\u5B57\u8282\u6D41\uFF08\u53D1\u9001\u6570\u636E\u65F6\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF0C\u4E00\u4E2A\u6570\u636E\u5305\u53EF\u4EE5\u62C6\u5206\u6210\u82E5\u5E72\u7EC4\u8FDB\u884C\u53D1\u9001\uFF09</td></tr><tr><td>\u9996\u90E8\u5F00\u9500</td><td>\u9996\u90E8\u5F00\u9500\u5C0F\uFF0C\u4EC5 8 \u5B57\u8282</td><td>\u9996\u90E8\u6700\u5C0F 20 \u5B57\u8282\uFF0C\u6700\u5927 60 \u5B57\u8282</td></tr><tr><td>\u9002\u7528\u573A\u666F</td><td>\u9002\u7528\u4E8E\u5B9E\u65F6\u5E94\u7528\uFF08IP \u7535\u8BDD\u3001\u89C6\u9891\u4F1A\u8BAE\u3001\u76F4\u64AD\u7B49\uFF09</td><td>\u9002\u7528\u4E8E\u8981\u6C42\u53EF\u9760\u4F20\u8F93\u7684\u5E94\u7528\uFF0C\u4F8B\u5982\u6587\u4EF6\u4F20\u8F93</td></tr></tbody></table><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844903800336023560#heading-12" target="_blank" rel="noopener noreferrer">\u6398\u91D1\uFF1ATCP \u548C UDP \u6BD4\u8F83</a></li></ul>',18),o=[e];function n(s,d,p,h,c,g){return i(),l("div",null,o)}var _=t(r,[["render",n]]);export{m as __pageData,_ as default};