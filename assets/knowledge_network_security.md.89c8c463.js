import{_ as e,c as l,o as i,a}from"./app.558ef4b5.js";const u=JSON.parse('{"title":"\u7F51\u7EDC\u5B89\u5168","description":"","frontmatter":{},"headers":[{"level":2,"title":"XSS \u653B\u51FB","slug":"xss-\u653B\u51FB"},{"level":3,"title":"\u9632\u5FA1","slug":"\u9632\u5FA1"},{"level":2,"title":"CSRF \u653B\u51FB","slug":"csrf-\u653B\u51FB"},{"level":3,"title":"\u9632\u5FA1","slug":"\u9632\u5FA1-1"}],"relativePath":"knowledge/network/security.md"}'),r={name:"knowledge/network/security.md"},t=a('<h1 id="\u7F51\u7EDC\u5B89\u5168" tabindex="-1">\u7F51\u7EDC\u5B89\u5168 <a class="header-anchor" href="#\u7F51\u7EDC\u5B89\u5168" aria-hidden="true">#</a></h1><h2 id="xss-\u653B\u51FB" tabindex="-1">XSS \u653B\u51FB <a class="header-anchor" href="#xss-\u653B\u51FB" aria-hidden="true">#</a></h2><p>xss \u662F\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\uFF0C\u653B\u51FB\u8005\u5728\u76EE\u6807\u7F51\u7AD9\u4E0A\u6CE8\u5165\u6076\u610F\u811A\u672C\uFF0C\u5728\u7528\u6237\u8BBF\u95EE\u65F6\u6267\u884C\u811A\u672C\uFF0C\u4ECE\u800C\u5371\u5BB3\u6570\u636E\u5B89\u5168\u3002\u5E38\u89C1\u7684\u653B\u51FB\u65B9\u5F0F\u6709\u4E09\u79CD</p><ol><li>\u5B58\u50A8\u578B XSS\uFF0C\u653B\u51FB\u8005\u5C06\u6076\u610F\u4EE3\u7801\u63D0\u4EA4\u5230\u670D\u52A1\u5668\uFF0C\u6570\u636E\u5E93\uFF0C\u5F53\u7528\u6237\u8BBF\u95EE\u65F6\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u6076\u610F\u4EE3\u7801\uFF0C\u5E38\u89C1\u4E8E\u53D1\u5E16 \u8BC4\u8BBA</li><li>\u53CD\u5C04\u578B XSS\uFF0C\u4FEE\u6539 url \u53C2\u6570 \u52A0\u5165\u653B\u51FB\u4EE3\u7801,\u5E38\u89C1\u4E8E\u641C\u7D22\uFF0C\u8DF3\u8F6C</li><li>DOM \u578B XSS \u524D\u7AEF\u9875\u9762\u4E2D\u53EF\u8F93\u5165\u7684\u5730\u65B9 \u5982\u8F93\u5165\u6846\u52A0\u5165\u653B\u51FB\u4EE3\u7801\uFF0C\u9875\u9762\u6267\u884C\u65F6 \u6076\u610F\u4EE3\u7801\u5B57\u7B26\u901A\u8FC7 innerhtml onload href \u7B49\u6F0F\u6D1E\u6267\u884C</li></ol><h3 id="\u9632\u5FA1" tabindex="-1">\u9632\u5FA1 <a class="header-anchor" href="#\u9632\u5FA1" aria-hidden="true">#</a></h3><ol><li>httpOnly: \u5728 cookie \u4E2D\u8BBE\u7F6E HttpOnly \u5C5E\u6027\u540E\uFF0Cjs \u811A\u672C\u5C06\u65E0\u6CD5\u8BFB\u53D6\u5230 cookie \u4FE1\u606F</li><li>\u5BF9\u7528\u6237\u7684\u8F93\u5165\uFF0C\u670D\u52A1\u5668\u7684\u8F93\u51FA\u8FDB\u884C\u6821\u9A8C\u3001\u8FC7\u6EE4</li><li>\u7279\u6B8A\u5B57\u7B26\u7F16\u7801\u8F6C\u8BD1</li><li>\u9488\u5BF9\u5BCC\u6587\u672C\u7B49\u590D\u6742\u7684\u91C7\u7528\u767D\u540D\u5355\u8FC7\u6EE4</li><li>\u5185\u5BB9\u5B89\u5168\u7B56\u7565\uFF08CSP\uFF09</li></ol><h2 id="csrf-\u653B\u51FB" tabindex="-1">CSRF \u653B\u51FB <a class="header-anchor" href="#csrf-\u653B\u51FB" aria-hidden="true">#</a></h2><p>\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\uFF0C\u76D7\u7528\u7528\u6237\u8EAB\u4EFD\uFF0C\u53D1\u9001\u6076\u610F\u8BF7\u6C42\u3002 <img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/blog/CSRF.png" alt="csrf"></p><ol><li>\u767B\u5F55\u53D7\u4FE1\u4EFB\u7F51\u7AD9 A \uFF0C\u5E76\u5728\u672C\u5730\u751F\u6210\u4FDD\u5B58 Cookie\uFF1B</li><li>\u5728\u4E0D\u767B\u51FA A \u60C5\u51B5\u4E0B\uFF0C\u8BBF\u95EE\u75C5\u6BD2\u7F51\u7AD9 B\uFF1B</li></ol><h3 id="\u9632\u5FA1-1" tabindex="-1">\u9632\u5FA1 <a class="header-anchor" href="#\u9632\u5FA1-1" aria-hidden="true">#</a></h3><ol><li>\u9A8C\u8BC1\u7801\uFF0C\u5F3A\u5236\u7528\u6237\u5FC5\u987B\u4E0E\u5E94\u7528\u4EA4\u4E92\u540E\u624D\u80FD\u5B8C\u6210\u8BF7\u6C42</li><li>\u9650\u5236 referer\uFF0C\u4E25\u683C\u9650\u5236\u6765\u6E90\uFF0C\u4F46\u662F\u4E0D\u80FD 100%\u6709\u9650\uFF0C\u56E0\u4E3A\u670D\u52A1\u5668\u4E0D\u662F\u4EC0\u4E48\u65F6\u5019\u90FD\u80FD\u53D6\u5230 referer \u4F4E\u7248\u672C\u53EF\u4EE5\u4F2A\u9020 referer</li><li>token(\u6700\u4F73)</li></ol>',11),s=[t];function o(n,c,d,h,_,f){return i(),l("div",null,s)}var S=e(r,[["render",o]]);export{u as __pageData,S as default};
