(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{62:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"原生js实现粘贴到剪贴板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生js实现粘贴到剪贴板","aria-hidden":"true"}},[t._v("#")]),t._v(" 原生JS实现粘贴到剪贴板")]),s("p",[t._v("本文主要讨论原生方法，有时候项目一个小地方需要用到，直接上第三方库显得不够优雅")]),s("p",[t._v("目前常见的实现粘贴到剪贴板主要有以下两种方法：")]),s("ul",[s("li",[t._v("第三方库 "),s("a",{attrs:{href:"https://github.com/zenorocha/clipboard.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("clipboard")])]),s("li",[t._v("原生JS, 主要是 "),s("code",[t._v("document.execCommand")]),t._v("方法")])]),s("p",[t._v("第一种方法按照文档说明，设置触发元素的"),s("code",[t._v("data-clipboard-text")]),t._v(" 或者 "),s("code",[t._v("data-clipboard-target")]),t._v("即可，不做说明，"),s("a",{attrs:{href:"https://github.com/zenorocha/clipboard.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详见文档")])]),s("p",[t._v("第二种方法：\n"),s("code",[t._v("document.execCommand")])]),s("p",[t._v("这个方法的兼容性其实不算很好，特别是移动端，具体"),s("a",{attrs:{href:"https://caniuse.com/#search=execCommand",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v("有, 但clipboard针对部分机型也有问题，所以具体使用还是得看情况， 因此使用该方法前检查浏览器是否支持很有必要"),s("code",[t._v("bool = document.execCommand('copy')")])]),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN")]),t._v("对上述方法的解释如下：")]),s("blockquote",[s("p",[t._v("当一个HTML文档切换到"),s("strong",[t._v("设计模式")]),t._v(" designMode时，文档对象暴露 execCommand 方法，该方法允许运行命令来操纵"),s("strong",[t._v("可编辑区域")]),t._v("的内容。")])]),s("p",[t._v("注意加粗部分，"),s("em",[t._v("设计模式")]),t._v(" ，即：使用前我们需切换文档模式为设计模式")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("designMode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'on'")]),t._v("\n")])]),s("p",[t._v("完成运行命令之后再设置值为"),s("code",[t._v("off")])]),s("p",[t._v("还有个加粗部分，"),s("em",[t._v("可编辑区域")]),t._v(" ，默认的input和textarea元素是可编辑(设置一个元素的"),s("code",[t._v('contenteditable="true"')]),t._v("也可激活元素的编辑模式)")]),s("p",[t._v("先来看表单元素如何实现")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ele"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'click'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("designMode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'on'")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bool "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("execCommand")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'copy'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("bool"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'sorry, 手动复制吧'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" val "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'something'")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" inputEle "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'input'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputEle"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        inputEle"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'value'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        inputEle"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'readonly'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'readonly'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        inputEle"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("select")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("execCommand")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'copy'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputEle"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'copied'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("designMode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'off'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("为避免出现光标或者拉起输入法，需要给元素设置"),s("code",[t._v("readonly")]),t._v("属性")]),s("p",[t._v("inputEle.select()方法在一些浏览器中有时不能选中所有内容，这时需要利用inputeElement的"),s("code",[t._v("setSelectionRange")]),t._v("方法：")]),s("blockquote",[s("p",[t._v("HTMLInputElement.setSelectionRange 方法可以从一个被 focused 的 input\n元素中选中特定范围的内容。")])]),s("p",[t._v("综上加两行：")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\ninputEle"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("focus")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninputEle"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setSelectionRange")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inputEle"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("execCommand")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'copy'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),s("p",[t._v("如果不是"),s("code",[t._v("input")]),t._v("等表单元素，不能使用"),s("code",[t._v("select")]),t._v("和"),s("code",[t._v("setSelectRange")]),t._v("的话，那么我们可以使用"),s("code",[t._v("getSelection")]),t._v("和"),s("code",[t._v("createRange")]),t._v("方法来模拟这个过程了，"),s("code",[t._v("Selection")]),t._v("对象表示用户选择的文本范围或光标的当前位置，满足执行execComman命令的可编辑活动区域，如下")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" range "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createRange")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tar "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'#code'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("selectNodeContents")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tar"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" selection "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getSelection")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nselection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeAllRanges")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nselection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addRange")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("range"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("execCommand")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'copy'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nselection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeAllRanges")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("上述针对非input，textarea等表单元素也能实现了")])])}],!1,null,null,null);n.default=e.exports}}]);