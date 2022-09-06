# Cookie、Session、Token、JWT

## Cookie

http 请求是无状态的，每次请求都是独立存在的。服务端无法分辨当前访问者的身份，无法分辨上一次的请求者和这次的请求者是不是同一个人 因此出现了 Cookie，他可以作为一个状态保存的状态机，用来保存用户的相关信息，当第一次访问验证通过后 服务器可以通过 set cookie 让客户端将自己的 cookie 保存起来，客户端后续的请求会自动携带 cookie ，服务器判断 cookie 一致时 则信任该链接，不再对其进行验证。

#### Name、Value

键值对，设置 Cookie 的名称及相对应的值，都必须是字符串类型 <br />如果值为 Unicode 字符，需要为字符编码。<br />如果值为二进制数据，则需要使用 BASE64 编码。

#### Domain

可以访问该 Cookie 的域名。如果设置为 `.baidu.com`，则所有以 `baidu.com` 结尾的域名都可以访问该 cookie；第一个字符必须为“.”

#### Path

该 Cookie 的使用路径。例如：`Path=/docs`，`/docs/Web/` 下的资源会带 Cookie 首部，`/test` 则不会携带 Cookie 首部。

#### Expires / MaxAge

1. Expires 是过期时间

2. MaxAge 是过期需要的秒数。
   - 正数：则超过 maxAge 秒之后失效。
   - 负数：该 Cookie 为临时 Cookie，关闭浏览器即失效
   - 0：表示立即删除该 Cookie

#### HttpOnly

用来限制非 HTTP 协议程序接口对客户端 Cookie 进行访问，能有效的防止 XSS 攻击

#### Secure

该 Cookie 是否仅被使用安全协议传输。这里的安全协议包括 HTTPS，SSL 等。默认为 `false`

#### SameSite

跨站：`a.sina.cn` 和 `b.sina.cn` 是同站和 `baidu.com` 是跨站

- `Strict` 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。
- `Lax` 允许部分第三方请求携带 Cookie
- `None` 无论是否跨站都会发送 Cookie

:::warning

SameSite 之前默认值是 None，Chrome80 后默认是 Lax。
从下图可以看出，对大部分 web 应用而言，Post 表单，iframe，AJAX，Image 这四种情况从以前的跨站会发送三方 Cookie，变成了不发送。
jsonp 也会收到影响。

:::
![](https://pic2.zhimg.com/80/v2-0af0726423b6710bf8245f54a8505a5d_720w.jpg)

:::tip

上述的这些属性，除了 name 与 value 属性会被提交外，其他的属性对于客户端来说都是不可读的，也是不可被提交的。

:::

## Session

session 是另一种记录服务器和客户端会话状态的机制，是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的 cookie 中

#### 流程

1. 第一次请求服务端时，服务器根据请求的信息创建 session
2. 将此 session 的唯一标识 sessionId 返回给客户端
3. 客户端收到 sessionId 并将其存储到 cookie
4. 下次请求时，服务器从 cookie 中获取 sessionId，再根据 id 获取 session，从而获取会话状态

#### 缺陷

1. 如果服务器做了负载均衡，那么下一个操作请求到了另一台服务器的时候 session 会丢失。

## Token

1. 客户端将用户名和密码发送到服务端
2. 服务端验证，成功后服务端签发一个 token 并把这个 token 返回给客户端
3. 客户端收到后将其存储在 Cookie 或者 LocalStorage 等地方
4. 后续的请求都携带这个 token
5. 服务端解析这个 token，验证成功后将数据返回给客户端

#### 特点

- 基于 token 的用户认证是一种服务端无状态的认证方式，服务端不用存放 token 数据。用解析 token 的计算时间换取 session 的存储空间，从而减轻服务器的压力，减少频繁的查询数据库
- token 完全由应用管理，所以它可以避开同源策略

## JWT

[知乎：五分钟带你了解啥是 JWT](https://zhuanlan.zhihu.com/p/86937325)

## Cookie 和 Session 的区别

- 安全性： Session 比 Cookie 安全，Session 是存储在服务器端的，Cookie 是存储在客户端的。
- 存取值的类型不同：Cookie 只支持存字符串数据，想要设置其他类型的数据，需要将其转换成字符串，Session 可以存任意数据类型。
- 有效期不同： Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭（默认情况下）或者 Session 超时都会失效。
- 存储大小不同： 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie，但是当访问量过多，会占用过多的服务器资源。

## Token 和 Session 的区别

- [Token 特点](#特点)

## 参考

- [掘金：傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861)
- [知乎：预测最近面试会考 Cookie 的 SameSite 属性](https://zhuanlan.zhihu.com/p/114093227)
