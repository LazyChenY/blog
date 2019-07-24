# 函数柯里化

## 定义
> 函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

## 如何实现
```js
var curry = (fn, ...args) => {
    if (args.length < fn.length) {
        // 参数长度不足时，重新柯里化函数，等待接受新参数
        (...arguments) => curry(fn, ...args, ...arguments)
    } else {
        fn(...args)
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

