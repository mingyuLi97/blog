# preload、prefetch、preconnect、dns-prefetch

## preload

提高资源加载的优先级，保证资源更早的可用。

```html
<link rel="preload" href="style.css" as="style" />
```

## prefetch

用于提前加载未来可能用到的资源。当页面空闲时会去下载该资源，并将其缓存，使用时在 prefetch cache 中读取该资源

```html
<link rel="prefetch" as="script" href="xxx.min.js" />
```

## preconnect

当页面要访问资源时，首先要建立连接。所以可以设置 preconnect 提前建立连接，资源请求时就可以直接下载。

```html
<link rel="preconnect" href="https://example.com" />
```

## dns-prefetch

提前解析 dns

```html
<link rel="dns-prefetch" href="https://cdn.bootcss.com" />
```

:::tip

1. preconnect 比 dns-prefetch 多了 TCP 和 TLS 的预解析。
2. 如果页面需要建立与许多第三方域的连接，则将它们预先连接会适得其反。 preconnect 最好仅用于最关键的连接。对于其他的，只需使用 dns-prefetch 即可节省第一步的时间-DNS 查找。
3. preconnect 和 dns-prefetch 适用于跨域的网站

:::

## 参考

- [MDN：Preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload)
- [MDN：preconnect 标准](https://html.spec.whatwg.org/multipage/links.html#link-type-preconnect)
