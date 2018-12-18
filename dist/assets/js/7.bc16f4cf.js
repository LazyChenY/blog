(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{74:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"关于vue-cli-3-不同环境下打包代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于vue-cli-3-不同环境下打包代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于Vue CLI 3 不同环境下打包代码")]),a("h3",{attrs:{id:"目标："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标：","aria-hidden":"true"}},[t._v("#")]),t._v(" 目标：")]),a("p",[t._v("实现三种环境（production, test, development）下的代码打包结构一致，并根据不同环境打包出的后端数据接口domain有所不同")]),a("h3",{attrs:{id:"问题："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题：","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题：")]),a("ol",[a("li",[a("p",[t._v("在"),a("code",[t._v("test")]),t._v("和"),a("code",[t._v("development")]),t._v("模式下， Vue CLI 3打包出的js代码块是直接位于dist目录下，而 "),a("code",[t._v("production")]),t._v("环境下js代码块则是在一个js文件夹下，也就是说前两者环境打包出的代码与后者的文件目录不一致，虽然影响不大但实际上项目中更期望三种环境下打包出的代码结构一致")])]),a("li",[a("p",[t._v("使得不同环境使用不同的domain")])])]),a("h3",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现")]),a("p",[t._v("查阅"),a("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档")]),t._v("得知， 可以在"),a("code",[t._v("vue-cli-service")]),t._v("构建代码的时候通过参数"),a("code",[t._v("--mode")]),t._v("和"),a("code",[t._v(".env")]),t._v("文件配合来实现我们的目的")]),a("p",[t._v("官方示例如下：")]),a("p",[t._v(".env文件：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("VUE_APP_TITLE")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("My App\n")])]),a("p",[t._v(".env.staging文件：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("production\n"),a("span",{attrs:{class:"token constant"}},[t._v("VUE_APP_TITLE")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("My "),a("span",{attrs:{class:"token function"}},[t._v("App")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("staging"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("blockquote",[a("p",[a("code",[t._v("vue-cli-service build")]),t._v(" 会加载可能存在的 .env、.env.production 和 .env.production.local 文件然后构建出生产环境应用;")]),a("p",[a("code",[t._v("vue-cli-service build --mode staging")]),t._v(" 会在 staging 模式下加载可能存在的 .env、.env.staging 和 .env.staging.local 文件然后构建出生产环境应用;")]),a("p",[t._v("这两种情况下，根据 NODE_ENV，构建出的应用都是生产环境应用，但是在 staging 版本中，process.env.VUE_APP_TITLE 被覆写成了另一个值。")])]),a("p",[t._v("由此可以想到, 想要使Vue CLI三种模式下都构建出与生产环境相同结构的代码，我们可以在build的时候分别传入mode为"),a("code",[t._v("test")]),t._v("或"),a("code",[t._v("development")]),t._v("，同时设置两者环境变量文件中的NODE_ENV变量：")]),a("p",[t._v("传入mode参数：")]),a("p",[t._v("package.json")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"build:dev"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode development"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"build:test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode test"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),a("p",[t._v("修改环境变量文件：")]),a("p",[t._v(".env.test文件：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("production\n")])]),a("p",[t._v(".env.development文件：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("production\n")])]),a("p",[t._v("上述即可实现三种环境均构建出相同结构的应用，且都是生产环境应用；")]),a("p",[t._v("至于不同的domain, 在各自的环境变量文件中分别设置即可：")]),a("p",[t._v(".env.test文件：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("production\n"),a("span",{attrs:{class:"token constant"}},[t._v("VUE_APP_API")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token regex"}},[t._v("/test.com/")]),t._v("\n")])]),a("p",[t._v(".env.development文件：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("production\n"),a("span",{attrs:{class:"token constant"}},[t._v("VUE_APP_API")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token regex"}},[t._v("/dev.com/")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);