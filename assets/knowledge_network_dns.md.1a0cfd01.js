import{_ as e,o as a,c as t,a as r}from"./app.43ff8510.js";const u=JSON.parse('{"title":"DNS","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u6790\u8FC7\u7A0B","slug":"\u89E3\u6790\u8FC7\u7A0B"},{"level":2,"title":"\u4F18\u5316","slug":"\u4F18\u5316"},{"level":3,"title":"1. \u7F13\u5B58","slug":"_1-\u7F13\u5B58"},{"level":3,"title":"2. \u8D1F\u8F7D\u5747\u8861","slug":"_2-\u8D1F\u8F7D\u5747\u8861"}],"relativePath":"knowledge/network/dns.md"}'),l={name:"knowledge/network/dns.md"},o=r('<h1 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-hidden="true">#</a></h1><blockquote><p>\u628A\u7F51\u5740\u8F6C\u6362\u6210 ip \u7684\u8FC7\u7A0B\uFF0C\u4E92\u8054\u7F51\u4E2D\u6BCF\u4E00\u53F0\u673A\u5668\u90FD\u6709\u552F\u4E00\u6807\u8BC6\u7684 IP \u5730\u5740\uFF0C\u4F46\u662F\u8FD9\u4E2A IP \u4E0D\u597D\u8BB0\uFF0C\u6240\u4EE5\u9700\u8981\u4E00\u4E2A\u7F51\u5740\u548C IP \u7684\u8F6C\u6362\uFF0C\u5373 DNS \u89E3\u6790\u3002</p></blockquote><h2 id="\u89E3\u6790\u8FC7\u7A0B" tabindex="-1">\u89E3\u6790\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u6790\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u8F93\u5165www.google.com\u7F51\u5740\u540E\uFF0C\u9996\u5148\u5728\u672C\u5730\u7684\u57DF\u540D\u670D\u52A1\u5668\u4E2D\u67E5\u627E\uFF0C\u6CA1\u627E\u5230\u53BB\u6839\u57DF\u540D\u670D\u52A1\u5668\u67E5\u627E\uFF0C\u6CA1\u6709\u518D\u53BBcom\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u67E5\u627E\uFF0C\uFF0C\u5982\u6B64\u7684\u7C7B\u63A8\u4E0B\u53BB\uFF0C\u76F4\u5230\u627E\u5230IP\u5730\u5740\uFF0C\u7136\u540E\u628A\u5B83\u8BB0\u5F55\u5728\u672C\u5730\uFF0C\u4F9B\u4E0B\u6B21\u4F7F\u7528\u3002\u5927\u81F4\u8FC7\u7A0B\u5C31\u662F. -&gt; .com -&gt; <a href="http://google.com" target="_blank" rel="noreferrer">google.com</a>. -&gt; <a href="http://www.google.com" target="_blank" rel="noreferrer">www.google.com</a>.\u3002 (\u4F60\u53EF\u80FD\u89C9\u5F97\u6211\u591A\u5199 .\uFF0C\u5E76\u6728\u6709\uFF0C\u8FD9\u4E2A.\u5BF9\u5E94\u7684\u5C31\u662F\u6839\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6240\u6709\u7684\u7F51\u5740\u7684\u6700\u540E\u4E00\u4F4D\u90FD\u662F.\uFF0C\u65E2\u7136\u662F\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u7528\u6237\uFF0C\u901A\u5E38\u90FD\u4F1A\u7701\u7565\uFF0C\u6D4F\u89C8\u5668\u5728\u8BF7\u6C42 DNS \u7684\u65F6\u5019\u4F1A\u81EA\u52A8\u52A0\u4E0A)</p><h2 id="\u4F18\u5316" tabindex="-1">\u4F18\u5316 <a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a></h2><h3 id="_1-\u7F13\u5B58" tabindex="-1">1. \u7F13\u5B58 <a class="header-anchor" href="#_1-\u7F13\u5B58" aria-hidden="true">#</a></h3><ul><li>\u6D4F\u89C8\u5668\u7F13\u5B58\uFF08chrome://dns/\uFF09</li><li>\u7CFB\u7EDF\u7F13\u5B58\uFF08/etc/hosts\uFF09</li><li>\u8DEF\u7531\u5668\u7F13\u5B58</li><li>IPS \u670D\u52A1\u5668\u7F13\u5B58</li><li>\u6839\u57DF\u540D\u670D\u52A1\u5668\u7F13\u5B58</li><li>\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u7F13\u5B58</li><li>\u4E3B\u57DF\u540D\u670D\u52A1\u5668\u7F13\u5B58</li></ul><h3 id="_2-\u8D1F\u8F7D\u5747\u8861" tabindex="-1">2. \u8D1F\u8F7D\u5747\u8861 <a class="header-anchor" href="#_2-\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a></h3><p>\u5C06\u670D\u52A1\u90E8\u7F72\u5728\u591A\u4E2A\u670D\u52A1\u5668\u4E0A\uFF0CDNS \u6839\u636E\u670D\u52A1\u5668\u7684\u8D1F\u8F7D\u3001\u8BE5\u673A\u5668\u7684\u8DDD\u79BB\u7B49\u56E0\u7D20\u8FD4\u56DE\u5408\u9002\u7684 ip \u7ED9\u7528\u6237</p>',9),i=[o];function n(d,s,h,c,_,g){return a(),t("div",null,i)}const f=e(l,[["render",n]]);export{u as __pageData,f as default};
