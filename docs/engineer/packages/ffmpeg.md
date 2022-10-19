# ffmpeg

## 常用参数

| 参数    | 含义                                                                                                           | 例子            |
| :------ | -------------------------------------------------------------------------------------------------------------- | --------------- |
| -y      | 不经过确认，输出时直接覆盖同名文件                                                                             | -y              |
| -i      | 指定输入的文件                                                                                                 | -i input.mp4    |
| -r      | 设定帧速率，默认为 25                                                                                          | -r 25           |
| -b      | 设定视频流量，默认为 200 kbit/s                                                                                | -b 300k         |
| -vcodec | 设置视频编解码器。这是 的别名 `-codec:v`                                                                       | -vcodec libx264 |
| -pass   | 选择处理遍数（1 或者 2）。两遍编码非常有用。第一遍生成统计信息，第二遍生成精确的请求的码率                     | -pass 1         |
| -coder  | xx                                                                                                             | -coder 0        |
| -bf     | 使用 frames B 帧，支持 mpeg1,mpeg2,mpeg4                                                                       | -bf 0           |
| -flags  | xx                                                                                                             | -flags          |
| -bt     | 设置视频码率容忍度 kbit/s                                                                                      | -bt 4M          |
| -loop   | 循环输入流。只工作于图像流，用于 ffserver 测试                                                                 | -loop           |
| -wpredp | [P 帧的预测权重](https://stackoverflow.com/questions/33024821/what-does-wpredp-parameter-do-in-x264-or-ffmpeg) | -wpredp 0       |
| -an     | 去除音频流                                                                                                     | -an             |

:::tip
:a :v 是代表处理哪个流

例如：

- `-c:v`：指定视频编码器
- `-c:a`：指定音频编码器

:::

## 参考

- [ffmpeg 官方文档](https://ffmpeg.org/ffmpeg.html#Video-Options)
- [阮一峰的个人博客](https://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)
- [CSDN：ffmpeg 工具 参数详细解析](https://blog.csdn.net/novice_growth/article/details/65934748)
