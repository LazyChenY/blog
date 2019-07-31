# Grid了解一波:eyes:

## 一. 概述

网格布局（Grid）是非常强大的 CSS 布局方案，它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别：Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

## 二. 基本概念
在学习网格布局之前，有必要搞明白一些基本概念：
### 1. 容器和项目
采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。
```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```
上面代码中，最外层的`<div>`元素就是容器，内层的三个`<div>`元素就是项目。

注意：只有容器的顶层子元素才是项目，项目的子元素并不是，比如上面代码的`<p>`元素就不是项目。Grid 布局只对项目生效。

### 2. 行和列

容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。

### 3. 单元格

行和列的交叉区域，称为"单元格"（cell）。正常情况下，n行和m列会产生n x m个单元格。比如，3行3列会产生9个单元格。

### 4.网格线

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。正常情况下，n行有n + 1根水平网格线，m列有m + 1根垂直网格线，比如三行就有四根水平网格线。

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

上述即一个4行*5列的图例，包含20个单元格，水平网格线有5条，垂直网格线有6条

## 三. 容器属性

Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。首先介绍容器属性

### 1. `display`

通过`display: grid`指定一个容器采用网格布局。`display: inline-grid`指定容器是一个行内元素，且内部采用网格布局，二者的区别类似于`block`和`inline-block`。

[display示例](https://codepen.io/LazyChen/pen/pMRWbO)

注意，设为网格布局以后，容器子元素（项目）的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`等设置都将失效。

### 2. `grid-template-columns` / `grid-template-rows`

容器指定了网格布局以后，接着就要划分行和列。`grid-template-columns`属性定义每一列的列宽，`grid-template-rows`属性定义每一行的行高。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```
上述定义了一个三行三列的网格，且列宽和行高都是`100px`

同样，也可以使用百分比：
```css
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
```

#### (1). repeat()
`repeat()`用于解决当网格很多且一样时需要写很多遍重复值的问题，上面的例子用`repeat`简化就是：
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```
`repeat()`接受两个参数，第一个参数是重复的次数（上例是`3`），第二个参数是所要重复的值, 或者是要重复的模式。

`grid-template-columns: repeat(2, 20px 40px 60px);`即重复模式，定义了6列，第一列和第四列的宽度为`20px`，第二列和第五列为`40px`，第三列和第六列为`60px`。[repeat示例](https://codepen.io/LazyChen/pen/pMRWbO)

#### (2). auto-fill
有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用`auto-fill`关键字表示自动填充。
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```
上面代码表示每列宽度100px，然后自动填充，直到容器不能放置更多的列。[auto-fill示例](https://codepen.io/LazyChen/pen/pMRWbO)

#### (3). fr
为了方便表示比例关系，网格布局提供了`fr`关键字（fraction 的缩写，意为"片段"）。比如两列的宽度分别为`1fr`和`2fr`，就表示后者是前者的两倍。
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
}
```
上述指定了三列的比例分别为1:2:3，[fr示例一](https://codepen.io/LazyChen/pen/pMRWbO)

`fr`如果与绝对长度的单位结合使用，会非常方便地实现定宽与自适应填充。
```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 1fr;
}
```
上述指定了第一列为定宽`150px`，剩下两列相同，平分剩下的容器。[fr示例二](https://codepen.io/LazyChen/pen/pMRWbO)
#### (4). minmax()
`minmax()`函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

比如：`grid-template-columns: 1fr 1fr minmax(100px, 1fr);`

其中`minmax(100px, 1fr)`表示列宽不小于100px，不大于1fr。[minman示例](https://codepen.io/LazyChen/pen/pMRWbO)

#### (5). auto
`auto`关键字表示由浏览器自己决定长度。

`grid-template-columns: 100px auto 100px;`

上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了`min-width`，且这个值大于最大宽度。

#### (6). 网格线名称
`grid-template-columns`属性和`grid-template-rows`属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```
上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。

#### (7). 应用实例
`grid-template-columns`属性对于网页布局非常有用。两栏式布局只需要一行代码。
```css
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
}
```
上面代码将左边栏设为70%，右边栏设为30%。

传统的十二网格布局，写起来也很容易: `grid-template-columns: repeat(12, 1fr);`

### 3.grid-row-gap,grid-column-gap,grid-gap
### 4.grid-template-areas
### 5.grid-auto-flow
### 6.justify-items，align-items，place-items
### 7.justify-content，align-content，place-content
### 8.grid-auto-columns，grid-auto-rows
### 8.grid-template，grid

## 四. 项目属性

## 五. 结语

### 兼容性

### 参考引用
