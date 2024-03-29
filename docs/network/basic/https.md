# HTTPS

HTTPS = HTTP + TLS/SSL

## 对称加密 & 非对称加密

#### 对称加密

加密解密使用 **相同** 的密钥

- 优点：高效，加密、解密速度快
- 缺点：对称加密的算法本身是安全的，但是使用场景不够安全

:::tip
我们通信时候需要把加密后的数据和密钥同时发送给对方(因为加密解密都是同一个密钥)，过程中如果被中间人拦截，中间人完全可以通过发送的密钥解出加密的内容，因此不安全
:::

#### 非对称加密

使用匹配的一对密钥（公钥、私钥）来分别进行加密和解密

- 优点：安全性高
- 缺点：加密解密复杂，效率低、耗时长

:::tip
公钥加密的数据只能用私钥解密，同理私钥加密的数据只能用共钥解密
:::

## 握手过程

1. 服务端生成自己的公钥和私钥
2. CA 机构通过**机构私钥**将服务器的公钥、过期时间、域名等信息存放在证书中
3. 浏览器预请求服务器的认证证书，用系统存储的**机构公钥**进行认证
4. 认证成功后获得服务器的公钥
5. 客户端生成**会话密钥**（对称加密），并将其用服务器的公钥进行加密传输
6. 服务器使用私钥解密被加密的**会话密钥**并保存起来，然后使用会话密钥加密消息响应给客户端，表示自己已经准备就绪
7. 客户端使用会话密钥解密消息，知道了服务器已经准备就绪。
8. 后续客户端和服务器使用会话密钥加密信息传递消息

## 为什么需要 CA 机构对证书签名

CA 机构主要解决了证书可信的问题，如果没有权威的机构对证书签名，客户端就无法知晓证书是否是伪造的，
从而增加了中间人攻击的风险，https 就变得毫无意义。

## 中间人攻击

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202302081349631.png)

#### SSL 劫持攻击

SSL 劫持攻击是指攻击者劫持了客户端和服务器之间的连接，将服务器的合法证书替换为伪造的证书，从而获取客户端和服务器之间传递的信息。这种方式一般容易被用户发现，浏览器会明确的提示证书错误，但某些用户安全意识不强，可能会点击继续浏览，从而达到攻击目的。

#### SSL 剥离攻击

SSL 剥离攻击是指攻击者劫持了客户端和服务器之间的连接，攻击者保持自己和服务器之间的 HTTPS 连接，但发送给客户端普通的 HTTP 连接，由于 HTTP 连接是明文传输的，即可获取客户端传输的所有明文数据。

## 如何劫持 HTTPS

https 有防篡改的特点，只要浏览器证书验证过程是正确的，很难在用户不察觉的情况下进行攻击。但若能够更改浏览器的证书验证过程，便有机会实现 https 中间人攻击。
所以，要劫持 https，首先要伪造一个证书，并且要想办法让用户信任这个证书，可以有多种方式，比如病毒、恶意软件、诱导等。一旦证书被信任后，就可以利用普通中间人攻击的方式，使用伪造的证书进行攻击。

## 参考

- https://juejin.cn/post/7197070078360322109
