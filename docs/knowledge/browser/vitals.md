# Web 性能指标

这也是谷歌指定的 web 性能指标标准, 谷歌认为之前的标准太复杂，指标太多了，在 2020 年重新进行了梳理，简化到了三个。

- 加载性能 LCP
- 交互性 FID
- 视觉稳定性 CLS

## FP（Fist Paint）

记录页面**第一次绘制像素**的时间（**白屏时间**），此时 DOM 内容还没开始绘制，可能需要文件下载、解析等过程

## FCP（​First Contentful Paint）

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202303051553788.png)

​**首次内容绘制**（**首屏时间**），浏览器首次绘制来自 DOM 的内容的时间，内容必须包括文本，图片，非白色的 canvas 或 svg，也包括带有正在加载中的 web 字体文本。这是用户第一次看到的内容。，只有当 DOM 内容发生变化才会触发

| FCP 时间(秒) |  颜色编码  | FPC 分数 |
| :----------: | :--------: | :------: |
|    0 - 2     |  绿色(快)  | 75 - 100 |
|    2 - 4     | 橙色(中等) | 50 - 74  |
|    超过 4    |  红色(慢)  |  0 - 49  |

## LCP (Largest Contentful Paint)

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202303051554563.png)

**最大内容绘制**，可视区域中最大的内容元素呈现到屏幕上的时间，用以估算页面的主要内容对用户的可见时间。img 图片，video 元素的封面，通过 url 加载到的背景，文本节点等。

| LCP 时间(秒) |  颜色编码  |
| :----------: | :--------: |
|   0 - 2.5    |  绿色(快)  |
|   2.5 - 4    | 橙色(中等) |
|    超过 4    |  红色(慢)  |

## FID (First Input Delay)

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202303051605740.png)

**首次输入延迟**，从用户第一次与页面进行交互到浏览器实际能够响应该交互的时间，输入延迟是因为浏览器的主线程正忙于做其他事情，所以不能响应用户，发生这种情况的一个常见原因是浏览器正忙于解析和执行应用程序加载的大量计算的 `JavaScript`。

| FID 时间(毫秒) |  颜色编码  |
| :------------: | :--------: |
|    0 - 100     |  绿色(快)  |
|   100 - 300    | 橙色(中等) |
|    超过 300    |  红色(慢)  |

## TTI (Time to Interactive)

**完全达到可交互**状态的时间点，浏览器已经可以持续的响应用户的输入，完全达到可交互的状态的时间是在最后一个长任务完成的时间，并且在随后的 5s 内网络和主线程是空闲的

| TTI 时间(秒) |  颜色编码  |
| :----------: | :--------: |
|   0 - 3.8    |  绿色(快)  |
|  3.9 - 7.3   | 橙色(中等) |
|   超过 7.3   |  红色(慢)  |

## CLS (Cumulative Layout Shift)

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202303051602919.png)

**累计布局位移**，CLS 会测量在页面整个生命周期中发生的每个意外的布局移位的所有单独布局移位分数的总和，他是一种保证页面的视觉稳定性从而提升用户体验的指标方案。

| CLS 时间(毫秒) |  颜色编码  |
| :------------: | :--------: |
|    0 - 0.1     |  绿色(快)  |
|   0.1 - 0.25   | 橙色(中等) |
|   超过 0.25    |  红色(慢)  |

## 参考

- https://juejin.cn/post/6974565176427151397
- https://juejin.cn/post/6961968596805222407