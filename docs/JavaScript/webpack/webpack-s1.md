# 论如何成为高级webpack配置师—基础

### webpack是什么？有什么作用
[webpack](https://webpack.js.org/) 是一个模块打包工具。它将一堆文件中的每个文件都作为一个模块，找出它们的依赖关系，将它们打包为可部署的静态资源。它能做的事情包括以下：

- 代码转换：通过各种loader，将我们写的一些浏览器不能直接运行的扩展语言解析打包成合适的格式供浏览器使用; 比如将ES6, CoffeeScript, TypeScript转换为ES5, 将SCSS装换成CSS等;
- 文件处理与优化：处理html或css中引用的图片，将其移动到配置的路径中并使用md5 hash重命名；压缩合并图片，压缩JS,CSS,HTML代码
- 代码分割：提取项目中公共代码；提取首屏不需要执行的代码让其异步加载；不同页面代码按需加载
- 模块合并？？啥意思？？在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件
- 代码校验：在代码提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过，配合eslint，pre-commit
- 自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。
- 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

### webpack核心概念
 - entry: webpack把整个项目当作一个整体，需要根据给定的主文件(常见的main.js)来执行构建的第一步，可以理解为入口文件，每个entry对应最后生成的一个chunk
 - module: 在webpack中，一切皆模块，一个文件就是一个模块，webpack会从entry开始递归找出所有依赖的模块
 - chunk: 代码块，一个代码块由多个模块组成，用于将代码拆分合并
 - loader: 模块转化器，将原模块内容按要求转换为新的内容
 - [plugins] : 插件可以说是webpack的支柱，webpack本身就是一个复杂度较高的插件集合,利用其插件机制构建出来的。
 - output:


[细谈webpack插件](https://zoumiaojiang.com/article/what-is-real-webpack-plugin/)
[FED细说webpack流程篇](http://taobaofed.org/blog/2016/09/09/webpack-flow/)





- [ ] webpack压缩合并图片怎么弄的？
- [ ] 公共代码打包的目的？减少加载次数和量？
- [ ] 怎么让非首屏代码异步加载？
- [ ] 怎么按需加载不同页面代码？
- [ ] pre-commit配合eslint
- [ ] 怎么搞出hot-reload
- [ ] 自动发布，这个了解一下就好了

- [ ] 多个entry之间是异步还是同步执行的？？









































