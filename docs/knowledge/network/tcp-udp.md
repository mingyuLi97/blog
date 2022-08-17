# 传输协议 TCP 和 UDP

## TCP

### 创建连接

- 标志位
  - ACK - 确认序号的标志，ACK=1 表示确认号有效，ACK=0 表示报文不含确认序号信息
  - SYN - 连接请求序号标志，用于建立连接，SYN=1 表示请求连接
  - FIN - 结束标志，用于释放连接，为 1 表示关闭本方数据流
- 序号 - 表示发送的数据字节流，确保 TCP 传输有序，对每个字节编号
  - seq - x (123123123)
  - ack - x+1 (123123124)

#### 三次握手

![](https://img-blog.csdnimg.cn/20200624102940552.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMTE1NDQ3OTg5Ng==,size_16,color_FFFFFF,t_70#pic_center#crop=0&crop=0&crop=1&crop=1&height=293&id=OskIG&originHeight=409&originWidth=652&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=467)

- 第一次
  - 发送请求建立连接报文, **SYN = 1，seq = x**，等待服务端确认, 客户端进入 **SYN_SENT**状态
  - 白话版 - 我要和你建立连接
- 第二次
  - 服务端收到请求，向客户端发送验证 **ack = x + 1**, 同时自己发送一个验证包 **seq = y**, 服务端进入**SYN_RECV**状态
  - 白话版 - 我收到了，确定要连接吗（还在吗）
- 第三次
  - 客户端收到请求，向服务器发送确认 **ack = y + 1**, 服务端和客户端同时进入**ESTABLISHED**状态，完成连接
  - 白话版 - 我还在，咱们建立连接吧

#### 四次挥手

![](https://img-blog.csdnimg.cn/20200624102940599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMTE1NDQ3OTg5Ng==,size_16,color_FFFFFF,t_70#pic_center#crop=0&crop=0&crop=1&crop=1&id=CHaOf&originHeight=463&originWidth=668&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

- 第一次
  - 客户端发送断开连接请求, **FIN = 1, seq = u**, 客户端进入**FIN-WAIT-1**状态
  - 白话版 - 我的数据传完了，咱们断开吧
- 第二次
  - 服务端收到断开请求， 发送确认 **ACK=1，ack=u+1**, 同时发送一个验证包 **seq = v**，进入 **CLOSE-WAIT**状态
  - 客户端收到请求确认， 进入 **FIN-WAIT-2** 状态，等待服务器发送断开请求
  - 白话版 - 好的，我知道了，我还有数据没传完，请稍等
- 第三次
  - 服务器传输完成，发送断开请求 **FIN = 1, ACK = 1, seq = w, ack = u + 1**,   服务端进入 **LAST-ACK** 状态
  - 白话版 - 我的数据已经传输完了，咱们可以断开了
- 第四次
  - 客户端收到断开请求，向服务端发出确认 **ACK = 1, seq = u + 1, ack = w + 1**， 客户端进入**TIME-WAIT**状态， 服务端立即进入**CLOSED**状态, 客户端在 **TIME-WAIT** 状态结束后(2MSL)，进入 **CLOSED** 状态
  - 白话版 - 我收到了，可以断开了

## UDP

1. 面向无连接，想发送就可以发送
2. 支持一对一，一对多，多对一和多对多交互通信
3. 不会对报文进行任何拆分和拼接操作，发送方的 UDP 对应用程序交下来的报文，在添加首部后就向下交付 IP 层。UDP 对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界。因此，应用程序必须选择合适大小的报文
4. 不可靠

- 主要体现在无连接，想发就发这种情况不可靠
- 没有拥塞控制，一直以一个速率发送，不关心对方是否收到，在网络条件不好时容易丢包

5. 头部开销小，传输高效

## TCP 与 UDP 区别

|              | UDP                                         | TCP                                                                      |
| ------------ | ------------------------------------------- | ------------------------------------------------------------------------ |
| 是否连接     | 无连接                                      | 面向连接                                                                 |
| 是否可靠     | 不可靠传输，不使用流量控制和拥塞控制        | 可靠传输，使用流量控制和拥塞控制                                         |
| 连接对象个数 | 支持一对一，一对多，多对一和多对多交互通信  | 只能是一对一通信                                                         |
| 传输方式     | 面向报文（只能一次发完）                    | 面向字节流（发送数据时以字节为单位，一个数据包可以拆分成若干组进行发送） |
| 首部开销     | 首部开销小，仅 8 字节                       | 首部最小 20 字节，最大 60 字节                                           |
| 适用场景     | 适用于实时应用（IP 电话、视频会议、直播等） | 适用于要求可靠传输的应用，例如文件传输                                   |

## 参考

- [掘金：TCP 和 UDP 比较](https://juejin.cn/post/6844903800336023560#heading-12)
