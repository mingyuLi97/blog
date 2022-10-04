# 配置

## Plugins

#### [UglifyJsWebpackPlugin](<(https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin/)>)

此插件使用 uglify-js 压缩的 JavaScript，减少文件体积

#### [CssMinimizerWebpackPlugin](https://webpack.docschina.org/plugins/css-minimizer-webpack-plugin/)

压缩 css 文件体积

webpack4 使用 [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

#### [MiniCssExtractPlugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)

此插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。

#### [HtmlWebpackPlugin](https://webpack.docschina.org/plugins/html-webpack-plugin/)

可以根据模板自动生成 html 代码，并自动引用 css 和 js 文件

#### [CompressionWebpackPlugin](https://www.webpackjs.com/plugins/compression-webpack-plugin/)

项目整体压缩（gzip）

#### [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

对打包出的 bundle 分析，可视化的了解项目的体积

#### [SpeedMeasurePlugin](https://github.com/stephencookdev/speed-measure-webpack-plugin#readme)

查看 webpack 打包过程中每一步花费的时常，方便查看打包速度

## Loaders

#### [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader#usage)

压缩图片体积

#### [thread-loader](https://webpack.docschina.org/loaders/thread-loader/#getting-started)

对耗时的 loader 开启多线程加速

#### [url-loader](https://www.webpackjs.com/loaders/url-loader/)

处理图片等静态资源
