import{_ as t,o as e,c as i,Q as s}from"./chunks/framework.f14b72c3.js";const f=JSON.parse('{"title":"JS 中 this 的五种情况","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/js/this.md"}'),o={name:"knowledge/js/this.md"},a=s('<h1 id="js-中-this-的五种情况" tabindex="-1">JS 中 this 的五种情况 <a class="header-anchor" href="#js-中-this-的五种情况" aria-label="Permalink to &quot;JS 中 this 的五种情况&quot;">​</a></h1><ol><li>元素的事件绑定，事件触发，方法执行，方法中的 <code>this</code> 一般指当前元素</li><li>函数执行，看前面是否有点， 点前面是谁 <code>this</code> 就是谁， 没有点 this 就是 window</li><li>构造函数的 this 是当前类的实例</li><li>箭头函数没有自己的 this， 其 this 指向创建时的上下文</li><li>基于 call / apply / bind 暴力改变 this</li></ol>',2),l=[a];function _(c,h,n,r,d,p){return e(),i("div",null,l)}const S=t(o,[["render",_]]);export{f as __pageData,S as default};
