import{_ as e,o as i,c as l,a as t}from"./app.02789e8f.js";const u=JSON.parse('{"title":"300. \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u52A8\u6001\u89C4\u5212","slug":"\u52A8\u6001\u89C4\u5212","link":"#\u52A8\u6001\u89C4\u5212","children":[]},{"level":2,"title":"\u52A8\u6001\u89C4\u5212 + \u4E8C\u5206\u67E5\u627E","slug":"\u52A8\u6001\u89C4\u5212-\u4E8C\u5206\u67E5\u627E","link":"#\u52A8\u6001\u89C4\u5212-\u4E8C\u5206\u67E5\u627E","children":[]}],"relativePath":"design/leetcode/LIS.md"}'),a={name:"design/leetcode/LIS.md"},r=t('<h1 id="_300-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" tabindex="-1">300. \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217 <a class="header-anchor" href="#_300-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" aria-hidden="true">#</a></h1><p><a href="https://leetcode.cn/problems/longest-increasing-subsequence/" target="_blank" rel="noreferrer">\u9898\u76EE\u5730\u5740</a></p><h2 id="\u52A8\u6001\u89C4\u5212" tabindex="-1">\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h2><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202301162226512.png" alt="" data-__preview__="true"></p><p>1\u30015\u30012\u30014\u30017</p><p>f[i] =&gt; i \u662F\u4E0B\u6807 f[i] \u4EE3\u8868\u4EE5 nums[i] \u4E3A\u7ED3\u5C3E\u7684\u6700\u5927\u5B50\u5E8F\u5217</p><ul><li>f(0) =&gt; [1] =&gt; 1</li><li>f(1) =&gt; [1\u30015] =&gt; 2</li><li>f(2) =&gt; [1\u30012] or [1\u30015] =&gt; 2</li><li>f(3) =&gt; [1\u30012\u30014] =&gt; 3</li><li>f(4) =&gt; [1\u30012\u30014\u30017] =&gt; 4</li></ul><p>\u6240\u4EE5\u6700\u5927\u662F 4</p><p>\u89C4\u5F8B\uFF1A</p><p>f(0) = 1;</p><ul><li>f(0) + 1 max = 1</li><li>0 + 1</li></ul><p>f(2)</p><ul><li>f(0) + 1 max = 2</li><li>0 + 1</li></ul><p>f(3) =</p><ul><li>f(0) + 1</li><li>f(2) + 1 max = 3</li><li>0 + 1</li></ul><p>f(4)</p><ul><li>f(0) + 1</li><li>f(2) + 1</li><li>f(3) + 1 max = 4</li><li>0 + 1</li></ul><h2 id="\u52A8\u6001\u89C4\u5212-\u4E8C\u5206\u67E5\u627E" tabindex="-1">\u52A8\u6001\u89C4\u5212 + \u4E8C\u5206\u67E5\u627E <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212-\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a></h2><p>TODO</p>',19),n=[r];function s(p,c,d,o,_,f){return i(),l("div",null,n)}const g=e(a,[["render",s]]);export{u as __pageData,g as default};
