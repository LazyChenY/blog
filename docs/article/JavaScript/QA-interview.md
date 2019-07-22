## Basic knowledge
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

---

### 2. 如何判断`this`的指向？

<br/>

<details><summary><b>查看解析</b></summary>

大致分为以下五种情况，每种情况中是否为严格模式`this`的指向又各有不同结果：
1. 全局环境中的`this`
2. 默认绑定
3. 隐式绑定与显式绑定
4. 是否箭头函数
5. 类／构造函数 `new`

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
#### 5. 类／构造函数 `new`
在类当中，静态方法中的`this`指向的是当前类，普通方法中的`this`指向的是实例对象
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
通过构造函数生成实例时，构造函数的`this`是否指向实例本身取决的其返回的是否为`function`或`object`

构造函数返回的不为`function`或`object`，那么`this`指向的是实例：
```js
function Super(age) {
    this.age = age
}
var instance = new Super(18)
console.log(instance.age) // 18
```
构造函数返回`function`或`object`，那么`this`指向的是返回的对象：
```js
function Super(age) {
    this.age = age
    return {name: 'lazy'}
}
var instance = new Super(18)
console.log(instance.age) // undefined
console.log(instance.name) // lazy
```

</details>

---

### 3. 深拷贝和浅拷贝的区别是什么，如何实现一个深拷贝？

<br/>

<details><summary><b>查看解析</b></summary>
<br/>
浅拷贝和深拷贝是针对复杂数据类型来说的，浅拷贝只拷贝一层，而深拷贝是层层拷贝。

浅拷贝

>浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。

深拷贝

>深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。 深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。

<b>实现浅拷贝：</b>

可以用`for in`、 `Object.assign`、 扩展运算符 `...` 、`Array.prototype.slice()`、`Array.prototype.concat()` 等，例如:
```js
var obj = {
    name: 'lazy',
    age: 16,
    feature: ['beauty', 'smart']
}
var obj2 = Object.assign({}, obj)
var obj3 = {...obj}

obj.name = 'chen'
obj.feature.push('rich')

console.log(obj) // {name: "chen", age: 16, feature: ["beauty", "smart", "rich"]
console.log(obj2) // {name: "lazy", age: 16, feature: ["beauty", "smart", "rich"]
console.log(obj3) // {name: "lazy", age: 16, feature: ["beauty", "smart", "rich"]
```
可以看出浅拷贝只最第一层属性进行了拷贝，当第一层的属性值是基本数据类型时，新的对象和原对象互不影响，但是如果第一层的属性值是复杂数据类型，那么新对象和原对象的属性值其指向的是同一块内存地址。

<b>实现深拷贝：</b>
1. 简易版的深拷贝实现如下: `JSON.parse(JSON.stringify(obj))`,但该方法有诸多缺陷
2. 实现一个`deepClone`函数

方法一：
```js
var obj = {
    name: 'lazy',
    age: 16,
    feature: ['beauty', 'smart'],
    sayHi: function () {
        console.log('hi')
    },
    time: new Date(),
    myReg: /\d{5}/,
    flag: Symbol('foo'),
    boyfriend: undefined
}
var obj2 = JSON.parse(JSON.stringify(obj))

obj.name = 'chen'
obj.feature.push('rich')

console.log(obj) // { age: 16, boyfriend: undefined, feature: ["beauty", "smart", "rich"], flag: Symbol(foo), myReg: /\d{5}/, name: "chen", sayHi: ƒ (), time: Mon Jul 22 2019 17:00:07 GMT+0800 (中国标准时间) }

console.log(obj2) // {name: "lazy", age: 16, feature: ["beauty", "smart"], time: "2019-07-22T09:00:07.099Z", myReg:  {} }


```
综上可以看出该方法有如下缺陷：
1. 对象的属性值是函数时，无法拷贝
2. 原型链上的属性无法被拷贝
3. 不能正确的处理 `Date` 类型的数据
4. 不能处理 `RegExp`
5. 会忽略 `symbol`
6. 会忽略 `undefined`

方法二：实现一个`deepClone`函数
1. 如果是基本数据类型，直接返回
2. 如果是 `RegExp` 或者 `Date` 类型，返回对应类型
3. 如果是复杂数据类型，递归。
4. 考虑循环引用的问题

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