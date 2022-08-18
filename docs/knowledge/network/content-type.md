# Content-Type

在 HTML 表单中，请求头的 `ContentType` 由 `form` 元素上的 `enctype` 属性决定。

## application/x-www-form-urlencoded (默认)

提交的表单数据会转换为键值对并按照 `key1=val1&key2=val2` 的方式进行编码，`key` 和 `val` 都进行 URL 转码, 不支持文件，一般用于普通表单。

![alt](https://limy-1309594960.cos.ap-beijing.myqcloud.com/blog/www-form-urlencoded.png)

## multipart/form-data

这种方式数据有多个部分，每部分用 boundary（分隔符）分开，既可以上传键值对也可以上传 **文件**（可多个）。

![alt](https://limy-1309594960.cos.ap-beijing.myqcloud.com/blog/multipart_form-data.png)

## application/json

JSON 是一种轻量级的数据格式，以“键-值”对的方式组织的数据。这个使用这个类型，需要参数本身就是 json 格式的数据，参数会被直接放到请求实体里，不进行任何处理。服务端/客户端会按 json 格式解析数据（约定好的情况下）。
