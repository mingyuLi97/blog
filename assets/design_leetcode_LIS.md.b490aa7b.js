import{_ as e,o as l,c as i,U as t}from"./chunks/framework.3125349e.js";const h=JSON.parse('{"title":"300. 最长递增子序列","description":"","frontmatter":{},"headers":[],"relativePath":"design/leetcode/LIS.md","filePath":"design/leetcode/LIS.md"}'),a={name:"design/leetcode/LIS.md"},o=t('<h1 id="_300-最长递增子序列" tabindex="-1">300. 最长递增子序列 <a class="header-anchor" href="#_300-最长递增子序列" aria-label="Permalink to &quot;300. 最长递增子序列&quot;">​</a></h1><p><a href="https://leetcode.cn/problems/longest-increasing-subsequence/" target="_blank" rel="noreferrer">题目地址</a></p><h2 id="动态规划" tabindex="-1">动态规划 <a class="header-anchor" href="#动态规划" aria-label="Permalink to &quot;动态规划&quot;">​</a></h2><p><img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202301162226512.png" alt=""></p><p>1、5、2、4、7</p><p>f[i] =&gt; i 是下标 f[i] 代表以 nums[i] 为结尾的最大子序列</p><ul><li>f(0) =&gt; [1] =&gt; 1</li><li>f(1) =&gt; [1、5] =&gt; 2</li><li>f(2) =&gt; [1、2] or [1、5] =&gt; 2</li><li>f(3) =&gt; [1、2、4] =&gt; 3</li><li>f(4) =&gt; [1、2、4、7] =&gt; 4</li></ul><p>所以最大是 4</p><p>规律：</p><p>f(0) = 1;</p><ul><li>f(0) + 1 max = 1</li><li>0 + 1</li></ul><p>f(2)</p><ul><li>f(0) + 1 max = 2</li><li>0 + 1</li></ul><p>f(3) =</p><ul><li>f(0) + 1</li><li>f(2) + 1 max = 3</li><li>0 + 1</li></ul><p>f(4)</p><ul><li>f(0) + 1</li><li>f(2) + 1</li><li>f(3) + 1 max = 4</li><li>0 + 1</li></ul><h2 id="动态规划-二分查找" tabindex="-1">动态规划 + 二分查找 <a class="header-anchor" href="#动态规划-二分查找" aria-label="Permalink to &quot;动态规划 + 二分查找&quot;">​</a></h2><p>TODO</p>',19),r=[o];function n(s,p,c,f,d,_){return l(),i("div",null,r)}const m=e(a,[["render",n]]);export{h as __pageData,m as default};
