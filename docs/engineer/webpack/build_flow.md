# 打包流程

## 1. 合并配置项

把配置文件读取到的参数和命令行传入的参数进行合并，得到最终的配置参数

## 2. 初始化编译

1. 初始化 complier 对象
2. 注册编译过程中的钩子
3. 注册 Plugin

## 3. 编译

#### 1. 调用 `complier.run()`, 创建 compilation 对象

#### 2. 编译文件 - build

1. 读取配置里的入口文件
2. 从入口文件开始，借助 loaders 递归的解析文件，并创建出 module 对象

#### 3. 生成文件 - seal

1.  根据入口文件和依赖模块组装 chunks
2.  根据 chunks 生成 assets 文件

## 4. 将生成的 assets 文件写入到文件系统

![webpack 打包流程](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202210032129721.png)
[mini-webpack](https://github.com/mingyuLi97/mini-webpack)

## 参考

- [掘金：Webpack5 核心打包原理全流程解析](https://juejin.cn/post/7031546400034947108)
