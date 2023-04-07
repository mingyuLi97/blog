import{_ as e,o as t,c as a,Q as c}from"./chunks/framework.f14b72c3.js";const m=JSON.parse('{"title":"watcher","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/vue/watcher.md"}'),r={name:"knowledge/vue/watcher.md"},o=c('<h1 id="watcher" tabindex="-1">watcher <a class="header-anchor" href="#watcher" aria-label="Permalink to &quot;watcher&quot;">​</a></h1><h2 id="渲染-renderwatcher" tabindex="-1">渲染 - renderWatcher <a class="header-anchor" href="#渲染-renderwatcher" aria-label="Permalink to &quot;渲染 - renderWatcher&quot;">​</a></h2><p>数据更新 -&gt; 调用视图渲染的方法(<code>vm._update(vm._render())</code>)</p><ol><li>renderWatcher 初始化时候传入的 <code>{ lazy: false }</code>, 即初始化时候立即触发 <code>this.get()</code> 方法</li><li>方法调用的时候访问到属性的值，触发属性被劫持的 <code>getter</code> 方法（响应式）</li><li>每个属性的 dep 进行依赖收集，将 watcher 加入到自己的 subs</li><li>当属性发生变换时，触发 <code>setter</code></li><li>执行 <code>dep.notify()</code> 将所有的 watcher 执行更新，从而刷新视图</li></ol><h2 id="计算属性-computedwatcher" tabindex="-1">计算属性 - computedWatcher <a class="header-anchor" href="#计算属性-computedwatcher" aria-label="Permalink to &quot;计算属性 - computedWatcher&quot;">​</a></h2><p>数据更新 -&gt; 触发计算属性变更 -&gt; 触发视图渲染</p><ol><li>初始化计算属性，为每个属性创建一个 watcher, 初始化时候传入的 <code>{ lazy: true, dirty: true }</code>，因为 <code>lazy: true</code>, 不会立即调用 watcher 的 <code>get()</code> 方法</li><li>劫持计算属性的 getter</li><li>当被访问的时候触发，将 computedWatcher 推入到 watcherQueue，然后访问到计算属性中的响应式数据（data 上的 firstName）</li><li>访问到响应式数据，触发其 getter，响应式数据依赖收集，此时会收集到 computedWatcher 和 renderWatcher 两个 watcher</li><li>当计算属性内的状态发生变更触发 set 后，首先通知 computed 需要进行重新计算，然后通知到视图执行渲染，再渲染中会访问到 computed 计算后的值，最后渲染到页面。</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>计算属性每次取的都是缓存的值，如果依赖的响应式数据改变，会先将 computedWatcher 的 dirty 设置为 <code>true</code>, 更新视图的时候发现 <code>dirty === true</code> 就会重新取值</p></div><h2 id="用户-watch-userwatcher" tabindex="-1">用户 Watch - userWatcher <a class="header-anchor" href="#用户-watch-userwatcher" aria-label="Permalink to &quot;用户 Watch - userWatcher&quot;">​</a></h2><p>数据更新 -&gt; 触发用户注册的回调</p><ol><li>初始化计算属性，为每个属性创建一个 watcher, 初始化时候传入的 <code>{ lazy: false, user: true }</code> 并传入回调函数, 即初始化时候立即触发 <code>this.get()</code> 方法</li><li>当 watcher 更新时，执行回调</li></ol>',11),d=[o];function l(h,i,s,u,n,p){return t(),a("div",null,d)}const w=e(r,[["render",l]]);export{m as __pageData,w as default};
