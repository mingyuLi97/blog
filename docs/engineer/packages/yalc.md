# yalc

> Better workflow than `npm | yarn link` for package authors.

## 安装

```sh
npm i yalc -g
# or
yarn global add yalc
```

## 使用

1. 发布包 - `yalc publish`

:::tip
该命令会逐一执行 npm 生命周期脚本，如：prepublish、prepare、prepublishOnly、prepack...等。
同时，你也可以通过 `--no-script` 禁用钩子钩动各种脚本。
:::

2. 更新包 `yalc push`

3. 项目中安装 `yalc add xxx`

4. 移除依赖 `yalc remove xxx`, 如果想移除所有，可使用 `--all`

## 参考

- [GitHub: https://github.com/wclr/yalc](https://github.com/wclr/yalc)
- [掘金：yalc: 可能是最好的前端 link 调试方案](https://juejin.cn/post/7033400734746066957)
