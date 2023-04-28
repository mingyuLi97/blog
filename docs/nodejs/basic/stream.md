# Stream

Stream 是 Node.js 中的一个抽象接口，它可以用来处理**流式数据**。

Stream 将数据分成一小块一小块的，然后逐步处理每一块数据。这种处理方式可以**减少内存占用，提高数据传输和处理效率**。

## 类型

- Readable：可读流是一种用于从源中读取数据的流。例如从文件中读取数据或从 HTTP 请求中读取数据。

- Writable：可写流是一种用于向目标中写入数据的流。例如向文件中写入数据或向 HTTP 响应中写入数据。

- Duplex：双工流是一种同时支持读取和写入的流，例如 SSH 会话。

- Transform：转换流是一种双工流，可以在读取和写入数据时对数据进行转换。例如在压缩或加密数据时使用。

## 方法

#### readableStream

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('./template.html', {
  highWaterMark: 100
});

readableStream.on('data', chunk => {
  console.log(chunk.length);
});

readableStream.on('end', () => {
  console.log('读取完成');
});
```

#### pipe()

将一个可读流的数据传输到一个可写流中

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
// 将 input.txt 内容写入到 output.txt，相当于 copy
readableStream.pipe(writableStream);
```
