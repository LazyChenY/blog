# 函数柯里化

## 前言
随着函数式编程的迅速发展，函数柯里化在许多应用程序中已经变得很普遍。 了解它们是什么，它们如何工作以及如何充分利用它们非常重要。

## 定义
> 函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

通俗一点说就是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

## 如何实现
先来看一个简单例子：
```js
var curry = (fn, ...args) => {
    if (args.length < fn.length) {
        // 参数长度不足时，重新柯里化函数，等待接受新参数
        return (...arguments) => curry(fn, ...args, ...arguments)
    } else {
        return fn(...args)
    }
}

function sum(a, b, c) {
    return a + b + c
}

var curryingSum = curry(sum, 2, 3, 5)
curryingSum(2)(3)(5) // 10
curryingSum(2, 3, 5) // 10
curryingSum(2, (3, 5)) // 10
curryingSum((2, 3), 5) // 10
```

## 作用

* 参数复用
* 提前返回 – 返回接受余下的参数且返回结果的新函数
* 延迟执行 – 返回新函数，等待执行

## 使用场景

