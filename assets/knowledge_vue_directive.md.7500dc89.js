import{_ as e,o as r,c as t,U as a}from"./chunks/framework.3125349e.js";const p=JSON.parse('{"title":"指令","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/vue/directive.md","filePath":"knowledge/vue/directive.md"}'),o={name:"knowledge/vue/directive.md"},i=a('<h1 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h1><h2 id="v-if-和-v-for-哪个优先级更高" tabindex="-1">v-if 和 v-for 哪个优先级更高？ <a class="header-anchor" href="#v-if-和-v-for-哪个优先级更高" aria-label="Permalink to &quot;v-if 和 v-for 哪个优先级更高？&quot;">​</a></h2><p>在 <a href="https://github1s.com/vuejs/vue/blob/HEAD/src/compiler/codegen/index.ts#L84-L85" target="_blank" rel="noreferrer">vue2</a> 中 v-for 优先于 v-if，在 <a href="https://github1s.com/vuejs/core/blob/HEAD/packages/compiler-core/src/codegen.ts#L583" target="_blank" rel="noreferrer">vue3</a> 中 v-if 优先于 v-for</p><p>真正项目使用时，一定要避免同时二者，一般的我们可以定义一个计算属性</p>',4),c=[i];function s(n,d,_,l,f,v){return r(),t("div",null,c)}const u=e(o,[["render",s]]);export{p as __pageData,u as default};
