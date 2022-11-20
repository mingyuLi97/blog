# 跨域

## 同源策略

> 协议+域名+端口 完全相同，则为同源。

限制：

- Cookie、LocalStorage、IndexedDB 等存储性内容
- DOM 节点
- AJAX 请求发送后，结果被浏览器拦截了

但是有三个标签是允许跨域加载资源：

- `<img src=XXX>`
- `<link href=XXX>`
- `<script src=XXX>`

## jsonp

> 利用 `<script>` 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP 请求一定需要服务器做支持才可以。

```javascript
// index.html
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    window[callback] = function (data) {
      resolve(data);
      document.body.removeChild(script);
    };
    params = { ...params, callback }; // wd=b&callback=show
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join('&')}`;
    document.body.appendChild(script);
  });
}
jsonp({
  url: 'http://localhost:3000/say',
  params: { wd: 'Iloveyou' },
  callback: 'show'
}).then(data => {
  console.log(data);
});
```

## CORS

> CORS 是一个 W3C 标准,全称是"跨域资源共享"（Cross-origin resource sharing），他允许浏览器向跨源服务器发送 XMLHttpRequest 请求，从而克服啦 AJAX 只能同源使用的限制

### 简单请求

符合简单请求的配置(粗略), 详细的见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#%E7%AE%80%E5%8D%95%E8%AF%B7%E6%B1%82)

1. 请求方法为 GET、HEAD、POST 之一
2. 没有自定义 Headers
3. Content-Type 必须为 `application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain` 之一
4. 给定一个 XMLHttpRequest 实例 xhr，没有调用 `xhr.upload.addEventListener()`，以监听该上传请求。
5. 请求中没有使用 [ReadableStream](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream) 对象。

### 复杂请求

不符合简单请求的便是复杂请求，复杂请求会先发出预检请求

#### 预检请求 （OPTIONS）

options 请求就是预检请求，可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前自动先发起 OPTIONS 请求，即 CORS 预检请求，服务器若接受该跨域请求，浏览器才继续发起正式请求。

优化：将 options 请求进行缓存，服务器端设置 Access-Control-Max-Age 字段

### HTTP 请求首部字段

:::tip
这些首部字段无须手动设置。 当开发者使用 XMLHttpRequest 对象发起跨源请求时，它们已经被设置就绪。
:::

- `Origin` 首部字段表明预检请求或实际请求的源站。它不包含任何路径信息，只是服务器名称。
- `Access-Control-Request-Method` 首部字段用于预检请求。其作用是，将实际请求所使用的 HTTP 方法告诉服务器。
- `Access-Control-Request-Headers` 首部字段用于预检请求。其作用是，将实际请求所携带的首部字段告诉服务器。

### HTTP 响应首部字段

- `Access-Control-Allow-Origin` 表示允许请求的域
- `Access-Control-Expose-Headers` 服务器把允许浏览器访问的头放入白名单

:::tip
在跨源访问时，XMLHttpRequest 对象的 [getResponseHeader()](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getResponseHeader) 方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。
:::

- `Access-Control-Allow-Credentials` 表示允许携带 Cookie
- `Access-Control-Allow-Methods` 表示允许的请求方法
- `Access-Control-Allow-Headers` 表示允许携带的请求头

## 参考

- [MDN：CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
