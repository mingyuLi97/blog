# 搜索引擎优化（SEO）

全称：Search Engine Optimization <br />
简介：通过解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。

## 优化方式

1. title

应该为每个网页创建一个唯一的标题，并且尽量避免与网页内容无关或使用默认或模糊的标题。

```html
<!-- good -->
<title>前端搜索引擎优化的技巧</title>

<!-- bad -->
<title>我的文档</title>
```

2. 设置 meta description

```html
<meta
  name="description"
  content="本文主要介绍搜索引擎优化（SEO）的技巧，如使用title、description、keywords、语义化标签、img的alt属性等。"
/>
```

3. 设置 meta keywords

```html
<meta name="keywords" content="SEO,搜索引擎优化,网页排名优化" />
```

4. img 标签设置 alt 属性
5. 提高首屏加载速度
6. 使用 [SSR](../browser/ssr.md)

:::tip
title、description、keywords 三者的权重依次减小，我们要想网页有好的排名，必须合理使用这三个标签。
:::

## 参考

- [掘金：前端搜索引擎优化（SEO）的技巧](https://juejin.cn/post/6980167371864424456)
