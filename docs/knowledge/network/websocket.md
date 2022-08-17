# WebSocket

## what

1. WebSocket 是 HTML5 下的一种新协议，建立在 TCP 协议之上。
2. 一次握手、持久连接、双向通信（主要还是服务端推送）
3. 协议标识符是 ws（如果加密，则为 wss），如 ws://localhost:8888

## 过程

1. 客户端经过 3 次握手建立 TCP 连接，发送 http 请求（http 请求中存放 WebSocket 的一些信息，Upgrade、Connection、WebSocket-Version 等）
2. 服务端接收到请求，同样采用 http 返回数据。
3. 客户端收到连接成功的消息，借助 TCP 通道进行全双工通信。

## websocket 与 http 的关系

**相同点：**

1. 都是基于 TCP，都是可靠性的传输协议。
2. 都是应用层协议。

**不同点：**

1. WebSocket 是双向通信， http 为单向（HTTP/2 也支持服务端推送，但是只能推送静态资源）
2. WebSocket 需要先发送一次 http 请求，服务端和客户端握手一次后才建立连接，而 http 是直接向服务器发送请求。

**联系：**

1. WebSocket 在建立握手时，数据是通过 HTTP 传输的。但是建立之后，在真正传输时候是不需要 HTTP 协议的。

## 参考

- [掘金：WebSocket：5 分钟从入门到精通](https://juejin.cn/post/6844903544978407431)
- [CSDN：WebSocket](https://blog.csdn.net/qq_54773998/article/details/123863493)
- [掘金：一文吃透 WebSocket 原理 刚面试完，趁热赶紧整理](https://juejin.cn/post/7020964728386093093#heading-3)
