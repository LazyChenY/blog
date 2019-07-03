(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{203:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"关于vue-cli-3-不同环境下打包代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于vue-cli-3-不同环境下打包代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 关于Vue CLI 3 不同环境下打包代码")]),s._v(" "),a("h2",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标","aria-hidden":"true"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),a("p",[s._v("实现三种环境（production, test, development）下的代码打包结构一致，并根据不同环境打包出的后端数据接口domain有所不同")]),s._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在"),a("code",[s._v("test")]),s._v("和"),a("code",[s._v("development")]),s._v("模式下， Vue CLI 3打包出的js代码块是直接位于dist目录下，而 "),a("code",[s._v("production")]),s._v("环境下js代码块则是在一个js文件夹下，也就是说前两者环境打包出的代码与后者的文件目录不一致，虽然影响不大但实际上项目中更期望三种环境下打包出的代码结构一致")])]),s._v(" "),a("li",[a("p",[s._v("使得不同环境使用不同的domain")])])]),s._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),a("p",[s._v("查阅"),a("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1),s._v("得知， 可以在"),a("code",[s._v("vue-cli-service")]),s._v("构建代码的时候通过参数"),a("code",[s._v("--mode")]),s._v("和"),a("code",[s._v(".env")]),s._v("文件配合来实现我们的目的")]),s._v(" "),a("p",[s._v("官方示例如下：")]),s._v(" "),a("p",[s._v(".env文件：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VUE_APP_TITLE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("My App\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v(".env.staging文件：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VUE_APP_TITLE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("My "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("staging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("vue-cli-service build")]),s._v(" 会加载可能存在的 .env、.env.production 和 .env.production.local 文件然后构建出生产环境应用;")]),s._v(" "),a("p",[a("code",[s._v("vue-cli-service build --mode staging")]),s._v(" 会在 staging 模式下加载可能存在的 .env、.env.staging 和 .env.staging.local 文件然后构建出生产环境应用;")]),s._v(" "),a("p",[s._v("这两种情况下，根据 NODE_ENV，构建出的应用都是生产环境应用，但是在 staging 版本中，process.env.VUE_APP_TITLE 被覆写成了另一个值。")])]),s._v(" "),a("p",[s._v("由此可以想到, 想要使Vue CLI三种模式下都构建出与生产环境相同结构的代码，我们可以在build的时候分别传入mode为"),a("code",[s._v("test")]),s._v("或"),a("code",[s._v("development")]),s._v("，同时设置两者环境变量文件中的NODE_ENV变量：")]),s._v(" "),a("p",[s._v("传入mode参数：")]),s._v(" "),a("p",[s._v("package.json")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service build --mode development"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service build --mode test"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("修改环境变量文件：")]),s._v(" "),a("p",[s._v(".env.test文件：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v(".env.development文件：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上述即可实现三种环境均构建出相同结构的应用，且都是生产环境应用；")]),s._v(" "),a("p",[s._v("至于不同的domain, 在各自的环境变量文件中分别设置即可(注：只有"),a("code",[s._v("VUE_APP_")]),s._v("开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中)：")]),s._v(" "),a("p",[s._v(".env.test文件：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VUE_APP_API")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/test.com/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v(".env.development文件：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VUE_APP_API")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/dev.com/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])},[],!1,null,null,null);t.default=n.exports}}]);