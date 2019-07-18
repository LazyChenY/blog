## 二十道面试题
[原地址](https://juejin.im/post/5d124a12f265da1b9163a28d)

### 1. `new`的实现原理是什么？

<br/>
<details><summary><b>查看解析</b></summary>
<p>

`new`的过程分为四步：
1. 创建一个空对象
2. 建立原型连接(`__propto__`)
3. 执行构造函数，让构造函数中的this指向实例，实例继承构造函数的属性或方法
4. 判断构造函数的返回值，确定返回对象

```js
function imitateNew () {
    let [constructor, ...args] = [...arguments]
    let instance = {}
    instance.__proto__ = constructor.prototype
    let result = constructor.apply(instance, args)
    if (result && (/object|function/.test(typeof result))) {
        return result
    }
    return instance
}
```
使用上述模仿的`new`方式，测试如下：
```js
function Super(age) {
    this.name = 'lazy'
    this.age = age
    this.sayHi = function () {
        console.log('hi')
    }
}
Super.prototype.smile = function () {
    console.log(':)')
}
let instance = imitateNew(Super, 10)

console.log(instance.name) // 'lazy'
console.log(instance.age) // 10
instance.sayHi() // 'hi'
instance.smile() //':)'

instance.constructor === Super // true
instance.hasOwnProperty('constructor') // false
Super.prototype.hasOwnProperty('constructor') //true
```
</p>

</details>

### 2. 如何判断`this`的指向？

<br/>

<details><summary><b>查看解析</b></summary>

大致分为以下五种情况，每种情况中是否为严格模式`this`的指向又各有不同结果：
1. 全局环境中的`this`
2. 默认绑定
3. 隐式绑定与显式绑定
4. 是否箭头函数
5. 构造函数／new

#### 1.全局环境下的`this`
| 在全局执行环境中 | 严格模式 | 非严格模式 |
| --- | --- | --- |
| 浏览器环境 | `window` | `window` |
| node环境| `{}` | `{}` |

#### 2.默认绑定
在不能应用其它绑定规则时使用的默认规则，通常是独立函数调用：
```js
'use strict';
var age = 18
function howOld() {
    console.log(this.age)
}
howOld()
```
运行上述代码，情况如下
| 在全局执行环境中 | 严格模式 | 非严格模式 |
| --- | --- | --- |
| 浏览器环境 | 抛出错误`TypeError` | `18` |
| node环境| 抛出错误`TypeError` | `undefined` |

非严格模式下的node环境打印出`undeifned`是因为全局`age`不会挂载在`global`下

#### 3.隐式绑定与显式绑定
隐式绑定很常见，即函数的调用是在某个对象上触发的，即调用位置上存在上下文对象，典型的隐式调用为: `xxx.fn()`

而通过`apply`, `call`, `bind`方法则是显式绑定对象的，此时`this`指向的就是该对象

如下：
```js
var age = 16
var person = {
    age: 18,
    howOld
}
function howOld() {
    console.log(this.age)
}
person.howOld() // 18  隐式绑定，谁调用指向谁
var sayAge = person.howOld
var beautofulPerson = {
    age: 17
}
sayAge.call(beautofulPerson) // 17
sayAge.apply(beautofulPerson) // 17
sayAge.bind(beautofulPerson)() // 17

```
这里需要注意一种特殊情况，如果 `call`,`apply` 或者 `bind` 传入的第一个参数值是 `undefined` 或者 `null`,

严格模式下 `this` 的值为传入的值 `null` /`undefined`, `sayAge.call(null)`将抛出错误

非严格模式下，实际应用的是默认绑定规则，`this` 指向全局对象(node环境为`global`，浏览器环境为`window`)：
```js
sayAge.call(null) // 16
```
#### 4.箭头函数
箭头函数没有自己的this，继承外层上下文绑定的this:
```js
let obj = {
    age: 18,
    howOld: function () {
        return () => {
            console.log(this.age)
        }
    }
}
let sayAge = obj.howOld()
sayAge() // 18
```
#### 5.构造函数／new
1⃣️静态方法中的`this`指向的是当前类，普通方法中的`this`指向的是实例对象
```js
class Foo {
    constructor(age) {
        this.age = age
    }
    static baz () {
        this.bar()
    }
    static bar () {
        console.log(1)
    }
    bar () {
        console.log(2)
    }
    sayAge () {
        console.log(this.age)
    }
}
Foo.baz() // 1
let f = new Foo(18)
f.sayAge() //18
```

</details>

<!-- ---
### n. 问题？

<br/>

```javascript
//
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>查看解析</b></summary>
<p>
详情
</p>
</details> -->

---