# jsbridge

用途：构建 Native 和 js 之间的消息通道，实现双向通信。

## js 调用 Native

### 1. 拦截 **URL_SCHEME**

`URL Scheme` 是类 URL 的一种请求格式：`<protocol>://<host>/<path>?<query>#fragment`

一般会约定一种协议格式，例：`weixin://dl/about`

- 如果符合我们自定义的 URL Schema，对 URL 进行解析，拿到相关操作、操作，进而调用原生 Native 的方法
- 如果不符合我们自定义的 URL Schema，我们直接转发，请求真正的服务

:::tip Web 发送 URL 请求的方法

- `使用 iframe.src (常用)`
- a 标签 (需要用户操作)
- location.href (能会引起页面的跳转丢失调用)
- 发送 ajax 请求 (Android 没有相应的拦截方法)

:::

#### 优缺点

优点：兼容性好

缺点：

- 延时高
- URL scheme 长度有限，内容过多可能会丢失字符；
- 不支持同步返回结果，所有信息传送都需要调用 iframe 请求，使用 callback 得到返回的数据。

### 2. 方法拦截

> 该方法的实现方式和 URL_SCHEME 相似，都是通过对 WebView 信息冒泡传递的拦截，从而达到通讯

WebView 中的 prompt/console/alert 拦截，通常使用 prompt ，因为这个方法在前端中使用频率低，比较不会出现冲突

### 3. 注入 API

这个方法会通过 webView 提供的接口，App 将 Native 的相关接口注入到 JS 的 Context（window）的对象中，一般来说这个对象内的方法名与 Native 相关方法名是相同的，Web 端就可以直接在全局 window 下使用这个暴露的全局 JS 对象，进而调用原生端的方法。

```javascript
window.WeixinJSBridge.showDialog('hello');
```

#### 如何实现回调

通过两次单项通信实现：一端调用的时候在参数中加一个 callbackId 标记对应的回调，对端接收到调用请求后，进行实际操作，如果带有 callbackId，对端再进行一次调用，将结果、callbackId 回传回来，这端根据 callbackId 匹配相应的回调，将结果传入执行就可以了。

#### 优缺点

优点：通信时间短，调用方便

缺点：低版本不友好

## Native 调用 js

js 是解释型语言，其特点就是能随时随地执行一段 js 代码
。
Android 4.4 之前只能用 `loadUrl` 来实现，并且无法执行回调：

```java
String jsCode = String.format("window.showWebDialog('%s')", text);
webView.loadUrl("javascript: " + jsCode);
```

Android 4.4 之后提供了 `evaluateJavascript` 来执行 JS 代码，并且可以获取返回值执行回调：

```java
String jsCode = String.format("window.showWebDialog('%s')", text);
webView.evaluateJavascript(jsCode, new ValueCallback<String>() {
@Override
public void onReceiveValue(String value) {

}
});
```

iOS 的 UIWebView 使用 `stringByEvaluatingJavaScriptFromString：`

```objective-c
NSString _jsStr = @"执行的 JS 代码";
[webView stringByEvaluatingJavaScriptFromString:jsStr];
```

iOS 的 WKWebView 使用 `evaluateJavaScript：`

```objective-c
[webView evaluateJavaScript:@"执行的 JS 代码" completionHandler:^(id \_Nullable response, NSError \_ \_Nullable error) {

}];
```
