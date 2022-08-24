# 浏览器缓存

## 强缓存

通过设置 **过期时间** 来决定是否采用缓存返回 200 状态码

- 未过期：直接从浏览器缓存中读取，无论资源是否过期
- 过期了：从服务器请求

#### Expires - HTTP/1.0

值为一个时间戳，服务器返回该请求结果缓存的到期时间，意思是，再次发送请求时，如果未超过过期时间，直接使用该缓存，如果过期了则重新请求。

**缺点：** 用本地时间来判断是否过期，但是本地时间是可以自己修改的。

HTTP/1.0 可以设置 `pragma: no-cache` 来跳过缓存

#### Cache-Control - HTTP/1.1

- `private`：仅浏览器可以缓存（默认值）；
- `public`：浏览器和代理服务器都可以缓存；
- `max-age=xxx`：过期时间单位秒（解决了 Expires 自己修改本地时间的问题）
- `no-cache`：不进行强缓存；
- `no-store`：不强缓存，也不协商缓存

## 协商缓存

强缓存失效后，浏览器携带缓存标识向服务器发送请求，由服务器根据缓存标识来决定是否使用缓存的过程。

- 协商缓存生效：304

- 协商缓存不生效：200

#### Last-Modified / If-Modified-Since

- `Last-Modified`：服务器响应请求(Response Header)，表示该资源文件在服务器最后被修改的时间.

- `If-Modified-Since`：客户端请求头（Request Header）, 携带上次请求拿到的 `Last-Modified` 若服务器的资源最后被修改时间大于 `If-Modified-Since` 的字段值，则重新返回资源，状态码为 200；否则则返回 304，代表资源无更新，可继续使用缓存文件

#### ETag / If-None-Match

- `ETag`：服务器响应请求(Response Header)，表示当前文件的唯一标识。

- `If-None-Match`：客户端请求头（Request Header）, 携带上次请求拿到的 `ETag` ,若与服务器的资源一致，代表资源无更新，可继续使用缓存文件 返回 304，否则返回 200

:::tip 为什么要有 etag？
ETag 的精度更高，Last-Modified 的时间单位是秒，如果一个文件 1s 内修改了多次，Last-Modified 无法感知到每次的变化
:::

## 缓存方案

目前的项目大多使用这种缓存方案的：

HTML: 协商缓存；

css、js、图片：强缓存，文件名带上 hash。

## 总结

1. Expires 和 Cache-Control 决定了浏览器是否要发送请求到服务器，ETag 和 Last-Modified 决定了服务器是要返回 304+空内容还是新的资源文件
2. Expires 和 Cache-Control 同时存在时，Cache-Control 会覆盖 Expires
3. ETag 和 Last-Modified 同时存在时，两者都要满足才会返回 304

## 参考

- [掘金：前端浏览器缓存知识梳理](https://juejin.cn/post/6947936223126093861)
- [思否：一篇文章理解前端缓存](https://segmentfault.com/a/1190000014669345)
