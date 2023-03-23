# HTTP 请求头

```
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0

```

## Host

指明了请求将要发送到的服务器主机名和端口号。

## [User-Agent](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent)

浏览器信息

## [Accept](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)

告知服务器客户端所能够接受的响应格式及其优先级，常用于指定可以接受的内容类型（Content-Type）

```
Accept: */*

Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

## [Accept-Language](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language)

允许客户端声明它可以理解的自然语言，以及优先选择的区域方言。

## [Accept-Encoding](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding)

告知服务器能够接受的压缩格式及其优先级，从前到后表示客户端对压缩格式的优先级。

```
Accept-Encoding: gzip, deflate, br
```

## Referer

标识页面的来源

## Connection

通用标头控制网络连接在当前会话完成后是否仍然保持打开状态。如果发送的值是 keep-alive，则连接是持久的，不会关闭，允许对同一服务器进行后续请求。

```
Connection: keep-alive
# HTTP/1.0 请求的默认值
Connection: close
```

## [Upgrade-Insecure-Requests](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests)

请求服务器将所有不安全的请求（例如 HTTP）升级为安全的请求（例如 HTTPS）。设置该字段后，浏览器在向网站发送 HTTP 请求时，会先尝试将请求升级为 HTTPS 请求，从而保证安全性。

## If-Modified-Since

协商缓存标识

## If-None-Match

协商缓存标识，优先级高于 `If-Modified-Since`

## Cache-Control

- `private`：仅浏览器可以缓存（默认值）；
- `public`：浏览器和代理服务器都可以缓存；
- `max-age=xxx`：过期时间单位秒（解决了 Expires 自己修改本地时间的问题）
- `no-cache`：不进行强缓存；
- `no-store`：不强缓存，也不协商缓存
- `no-transform`：不对传输的内容做任何转码（常见的地方为 proxy 或 browser 为了减少传输内容及流量，会对传输的图片等进行格式转换，此配置可以避免转换）

```
Cache-Control:public, max-age=31536000
```
