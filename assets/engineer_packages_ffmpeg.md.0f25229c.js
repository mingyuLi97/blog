import{_ as t,o as e,c as d,d as r}from"./app.af415ca3.js";const m=JSON.parse('{"title":"ffmpeg","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u53C2\u6570","slug":"\u5E38\u7528\u53C2\u6570","link":"#\u5E38\u7528\u53C2\u6570","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"engineer/packages/ffmpeg.md"}'),l={name:"engineer/packages/ffmpeg.md"},a=r('<h1 id="ffmpeg" tabindex="-1">ffmpeg <a class="header-anchor" href="#ffmpeg" aria-hidden="true">#</a></h1><h2 id="\u5E38\u7528\u53C2\u6570" tabindex="-1">\u5E38\u7528\u53C2\u6570 <a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th>\u542B\u4E49</th><th>\u4F8B\u5B50</th></tr></thead><tbody><tr><td style="text-align:left;">-y</td><td>\u4E0D\u7ECF\u8FC7\u786E\u8BA4\uFF0C\u8F93\u51FA\u65F6\u76F4\u63A5\u8986\u76D6\u540C\u540D\u6587\u4EF6</td><td>-y</td></tr><tr><td style="text-align:left;">-i</td><td>\u6307\u5B9A\u8F93\u5165\u7684\u6587\u4EF6</td><td>-i input.mp4</td></tr><tr><td style="text-align:left;">-r</td><td>\u8BBE\u5B9A\u5E27\u901F\u7387\uFF0C\u9ED8\u8BA4\u4E3A 25</td><td>-r 25</td></tr><tr><td style="text-align:left;">-b</td><td>\u8BBE\u5B9A\u89C6\u9891\u6D41\u91CF\uFF0C\u9ED8\u8BA4\u4E3A 200 kbit/s</td><td>-b 300k</td></tr><tr><td style="text-align:left;">-vcodec</td><td>\u8BBE\u7F6E\u89C6\u9891\u7F16\u89E3\u7801\u5668\u3002\u8FD9\u662F \u7684\u522B\u540D <code>-codec:v</code></td><td>-vcodec libx264</td></tr><tr><td style="text-align:left;">-pass</td><td>\u9009\u62E9\u5904\u7406\u904D\u6570\uFF081 \u6216\u8005 2\uFF09\u3002\u4E24\u904D\u7F16\u7801\u975E\u5E38\u6709\u7528\u3002\u7B2C\u4E00\u904D\u751F\u6210\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u7B2C\u4E8C\u904D\u751F\u6210\u7CBE\u786E\u7684\u8BF7\u6C42\u7684\u7801\u7387</td><td>-pass 1</td></tr><tr><td style="text-align:left;">-coder</td><td>xx</td><td>-coder 0</td></tr><tr><td style="text-align:left;">-bf</td><td>\u4F7F\u7528 frames B \u5E27\uFF0C\u652F\u6301 mpeg1,mpeg2,mpeg4</td><td>-bf 0</td></tr><tr><td style="text-align:left;">-flags</td><td>xx</td><td>-flags</td></tr><tr><td style="text-align:left;">-bt</td><td>\u8BBE\u7F6E\u89C6\u9891\u7801\u7387\u5BB9\u5FCD\u5EA6 kbit/s</td><td>-bt 4M</td></tr><tr><td style="text-align:left;">-loop</td><td>\u5FAA\u73AF\u8F93\u5165\u6D41\u3002\u53EA\u5DE5\u4F5C\u4E8E\u56FE\u50CF\u6D41\uFF0C\u7528\u4E8E ffserver \u6D4B\u8BD5</td><td>-loop</td></tr><tr><td style="text-align:left;">-wpredp</td><td><a href="https://stackoverflow.com/questions/33024821/what-does-wpredp-parameter-do-in-x264-or-ffmpeg" target="_blank" rel="noreferrer">P \u5E27\u7684\u9884\u6D4B\u6743\u91CD</a></td><td>-wpredp 0</td></tr><tr><td style="text-align:left;">-an</td><td>\u53BB\u9664\u97F3\u9891\u6D41</td><td>-an</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>:a :v \u662F\u4EE3\u8868\u5904\u7406\u54EA\u4E2A\u6D41</p><p>\u4F8B\u5982\uFF1A</p><ul><li><code>-c:v</code>\uFF1A\u6307\u5B9A\u89C6\u9891\u7F16\u7801\u5668</li><li><code>-c:a</code>\uFF1A\u6307\u5B9A\u97F3\u9891\u7F16\u7801\u5668</li></ul></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://ffmpeg.org/ffmpeg.html#Video-Options" target="_blank" rel="noreferrer">ffmpeg \u5B98\u65B9\u6587\u6863</a></li><li><a href="https://www.ruanyifeng.com/blog/2020/01/ffmpeg.html" target="_blank" rel="noreferrer">\u962E\u4E00\u5CF0\u7684\u4E2A\u4EBA\u535A\u5BA2</a></li><li><a href="https://blog.csdn.net/novice_growth/article/details/65934748" target="_blank" rel="noreferrer">CSDN\uFF1Affmpeg \u5DE5\u5177 \u53C2\u6570\u8BE6\u7EC6\u89E3\u6790</a></li></ul>',6),i=[a];function s(n,f,o,c,p,g){return e(),d("div",null,i)}const _=t(l,[["render",s]]);export{m as __pageData,_ as default};
