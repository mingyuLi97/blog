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
    let script = document.createElement("script");
    window[callback] = function (data) {
      resolve(data);
      document.body.removeChild(script);
    };
    params = { ...params, callback }; // wd=b&callback=show
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join("&")}`;
    document.body.appendChild(script);
  });
}
jsonp({
  url: "http://localhost:3000/say",
  params: { wd: "Iloveyou" },
  callback: "show",
}).then((data) => {
  console.log(data);
});
```

## CORS

> CORS 是一个 W3C 标准,全称是"跨域资源共享"（Cross-origin resource sharing），他允许浏览器向跨源服务器发送 XMLHttpRequest 请求，从而克服啦 AJAX 只能同源使用的限制

### 简单请求与复杂请求

某些请求不会触发 CORS 预检请求，这样的请求一般称为"简单请求",而会触发预检的请求则成为"复杂请求"。

#### 简单请求

1. 使用下列方法之一

- GET
- HEAD
- POST

2.  规范集合之内的头字段

- Accept
- Accept-Language
- Content-Language
- Content-Type 必须为：
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- DPR
- Downlink
- Save-Data
- Viewport-Width/Width

3. 请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器；
4. 请求中没有使用 ReadableStream 对象。

#### 复杂请求

1. 使用了下面任一 HTTP 方法，PUT/DELETE/CONNECT/OPTIONS/TRACE/PATCH
2. 人为设置了以下集合之外首部字段，即简单请求外的字段
3. Content-Type 的值不属于下列之一，即 application/x-www-form-urlencoded、multipart/form-data、text/plain

## OPTIONS 请求

> options 请求就是预检请求，可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前自动先发起 OPTIONS 请求，即 CORS 预检请求，服务器若接受该跨域请求，浏览器才继续发起正式请求。

### 优化

- 使用 jsonp
- options 请求进行缓存，服务器端设置 Access-Control-Max-Age 字段
