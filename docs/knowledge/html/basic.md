# 基础

## !DOCTYPE

用来告诉浏览器应该以什么样的文档类型来解析文档，它必须声明在 `HTML` 的第一行

### 文档模式

- 混杂模式：不同浏览器有不同的标准
- 标准模式：W3C 页面的渲染有了统一标准

:::warning
不设置或者格式不正确会导致 HTML 或 XHTML 以混杂模式呈现，导致页面的展示形式存在差异
:::

常见类型：[菜鸟教程](https://www.runoob.com/tags/tag-doctype.html)

```html
<!-- h5 -->
<!DOCTYPE html>

<!-- HTML 4.01 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- HTML 4.01 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- HTML 4.01 Frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

<!-- XHTML 1.1 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

## HTML 语义化

用合适的标签来装载合适的内容。

### 优势

1. 对机器友好，利于爬虫爬取有效信息、有利于 SEO
2. 对开发者友好，增加可读性，便于开发与维护

### 常见标签

```html
<!-- 头部 -->
<header></header>

<!-- 导航栏 -->
<nav></nav>

<!-- 区块（有语义化的div） -->
<section></section>

<!-- 主要区域 -->
<main></main>

<!-- 主要内容 -->
<article></article>

<!-- 侧边栏 -->
<aside></aside>

<!-- 底部 -->
<footer></footer>
```
