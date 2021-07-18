---
title: javaScript 数组 API 全解析
date: 2021-07-18
categories:
 - study
tags:
 - javaScript
 - 数组
---
## javaScript 数组 API 全解析

以下文章来源于freeCodeCamp ，作者Humilitas

[![freeCodeCamp](http://wx.qlogo.cn/mmhead/Q3auHgzwzM6ichuvXZdAUaOkC1kDlYj52XU1woNXuibqjkVqPnzzt2bQ/0)**freeCodeCamp**非营利组织 freeCodeCamp.org 自 2014 年成立以来，以“帮助人们免费学习编程”为使命，创建了大量免费教程。我们帮助全球数百万人学习编程，希望每个人都有机会获得免费的优质的学习资源，成为开发者或者运用编程去解决问题。](https://mp.weixin.qq.com/s?__biz=MzA5MjQwMzQyNw==&mid=2650754710&idx=1&sn=8f5745ca32a57d6f2a4207d2ca7b2c0a&chksm=88664d1abf11c40cc0780728e002878e4a686f291356ac223faa6407f3cb8753a16fdc447d18&scene=0&xtrack=1&key=00c622ed0e1cf3b67c2a725d08b32f0909fb628a5356cc6fbd53f555deca349e56925286aa85e164dfc62f0cb469b289fcea85d7dbefa87cd2ddb0a6bfecdfec4a8c0e0a3fa16ae2f365f8fba08288d3f638af17c1fac51a0deb39e5243e625c2995e648175d381b3ec33e33b3b688662f784c969370b3b55d91f38fe5e52c74&ascene=1&uin=Mjc2ODI5ODIzNw%3D%3D&devicetype=iMac+MacBookAir10%2C1+OSX+OSX+10.16+build(20F71)&version=13000411&nettype=WIFI&lang=zh_CN&fontScale=100&exportkey=A1SZeQpRkXuqtDPHxzMGeHk%3D&pass_ticket=xWeTicRJ81dmf1QXnujrfnsskqPXZm%2BtXQVOPI%2FNYJk1w4MFo9gsb2wY%2ByzQpNAW&wx_header=0&fontgear=2.000000#)

在编程世界中，`数组`是指元素的集合。数组将数据作为元素进行存储，并在需要时将其取出。

在支持数组的编程语言中广泛地采用了这个数据结构。

这个手册会介绍 JavaScript 数组的所有知识。你将会学到复杂数据处理、解构、常用数组方法等内容。

# 我为什么写这篇文章

网上已经有很多介绍 JavaScript 数组的优秀文章，那我为什么还要写一篇相同主题的文章呢？动机是什么？

多年来，通过和学员的交流，我意识到大多数初学者都需要这样一个教程：通过示例从头到尾彻底地介绍数组。

所以我决定编写这样一篇包含大量示例的文章。如果你是初学者，希望这篇文章对你有所帮助。

不过，这个手册也能帮助有经验的开发者梳理知识。我在写作这篇文章的过程中，也重新学习了相关知识。我们开始吧。

# JavaScript 中的数组是什么

在 JavaScript 中，一对方括号`（[]）` 表示一个数组，其中的所有元素以逗号`（,）` 分隔。

在 JavaScript 中，数组可以是任意类型元素组成的集合。这意味着，创建一个数组，它的元素类型可以是 String、Boolean、Number、Object，甚至是另一个数组。

示例中的数组包含 4 个元素，类型分别是：Number、Boolean、String 和 Object。

```
const mixedTypedArray = [100, true, 'freeCodeCamp', {}];
```

元素在数组中的位置称为`索引（index）`，JavaScript 中的数组索引是从 0 开始计数的，每加入一个新元素，其对应的索引加 1。

例如，上面的数组中，`100` 这个元素的位置是 `索引 0`，`true` 的位置是`索引 1`，`'freeCodeCamp'` 的位置是`索引 2`，以此类推。

数组中的元素数量决定了数组长度（length）。比如说，上面的数组长度是 4。

有趣的是，JavaScript 数组的长度是可变的，你可以随时将它指定为一个非负整数值。我们稍后会学习更多相关知识。

# 如何创建数组

在 JavaScript 中有多种方式可以创建数组，最直接的方式是把数组字面量赋值给一个变量。

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
```

也可以使用 `Array` 构造函数来创建数组。

```
const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
```

> 注意：`new Array(2)` 会创建一个长度为 2 的空数组，然而 `new Array(1,2)` 则会创建一个包含两个元素（1 和 2）的数组。

另外，`Array.of()` 和 `Array.from()` 方法，以及`展开`运算符（`...`）也可以创建数组。我们后面会学习它们。

## 如何访问数组元素

可以使用数组索引来获取数组元素，访问数组元素需要用到方括号 `[]`。

```
const element = array[index];
```

根据使用场景，你可能需要一个一个地访问数组元素或者使用循环来遍历。

可以像这样使用索引来访问数组元素：

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad[0]; // '🍅'
salad[2]; // '🥦'
salad[5]; // '🥕'
```

也可以利用数组长度（length 属性）值，反向遍历访问数组元素。

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const len = salad.length;
salad[len - 1]; // '🥑'
salad[len - 3]; // '🌽'
```

可以使用一般的 `for` 循环或 `forEach` 方法来遍历数组，也可以使用其它方式来遍历。

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

for(let i=0; i<salad.length; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}
```

结果如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNXaRAK8XiaXibJg9E83N9USbibJUcpS8p0pWbKDVibiaFFibTjLPlzTrJa1rg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## 如何向数组中添加元素 

可以使用 `push()` 方法向数组中插入一个元素，它会将元素追加到数组的末尾。我们往沙拉中加入一些花生：

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.push('🥜');
```

现在沙拉数组看起来像这样：

["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🥜"]

注意，`push()` 方法会把元素追加到数组末尾，如果想要在数组头部插入一个元素，需要使用 `unshift()` 方法。

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.unshift('🥜');
```

现在沙拉数组看起来像这样：

["🥜", "🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

## 如何移除数组元素

移除单个数组元素的最简单方式是使用 `pop()` 方法。每次调用 `pop()` 方法，都会移除数组末尾的那个元素。`pop()` 方法的返回值是那个被移除的元素，这个方法会改变原始数组。

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.pop(); // 🥑

console.log(salad); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕']
```

使用 `shift()` 方法可以移除数组头部的一个元素。与 `pop()` 方法类似，`shift()` 方法会返回那个被移除的元素，并且会改变原始数组。

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.shift(); // 🍅

console.log(salad); // ['🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
```

## 如何克隆数组

可以使用 `slice()` 方法来克隆数组。注意，`slice()` 方法不改变原始数组，而是创建一个原始数组的浅拷贝副本。

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCopy = salad.slice();

console.log(saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

salad === saladCopy; // returns false
```

也可以使用`展开`运算符来创建数组副本，我们很快会学到。

## 如何判断某个值是不是数组

可以使用 `Array.isArray(value)` 方法来判断某个值是不是数组，如果传入的值是一个数组的话，它会返回 true。

```
Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // returns true
Array.isArray('🍅'); // returns false
Array.isArray({ 'tomato': '🍅'}); // returns false
Array.isArray([]); // returns true
```

# 数组解构

ECMAScript 6（ES6）提供了一些新语法，可以一次性从数组中获取多个元素并赋值给多个变量。它有助于保持代码简洁明了。这个新语法被称为解构语法。

下面是使用解构语法从数组中获取多个元素的例子：

```
let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
```

现在就可以使用这些变量了：

```
console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕
```

如果不使用解构语法的话，代码会是这样：

```
let vegetables = ['🍅', '🍄', '🥕'];
let tomato = vegetables[0];
let mushroom= vegetables[1];
let carrot= vegetables[2];
```

所以，解构语法能够有助于减少代码量、极大地提高生产力。

## 如何为变量指定默认值

使用解构语法时，可以为变量指定默认值，当数组中没有对应的元素或者元素的值为 `undefined` 时，就会使用默认值。

下面的例子中，我们为 mushroom 变量指定了一个默认值。

```
let [tomato , mushroom = '🍄'] = ['🍅'];
console.log(tomato); // '🍅'
console.log(mushroom ); // '🍄'
```

## 如何跳过某个数组元素

使用解构获取数组元素时，可以跳过某个元素。比如说，你可能只关注数组的部分元素，这时候这个语法就派上用场了。

下面的例子中，我们跳过了“蘑菇”元素。注意表达式左边变量声明中的空格。

```
let [tomato, , carrot] = ['🍅', '🍄', '🥕'];

console.log(tomato); // '🍅'
console.log(carrot); // '🥕'
```

## 嵌套数组解构

JavaScript 中，数组是可以嵌套的。这意味着一个数组的元素可以是另一个数组。数组可以嵌套任意深度。

例如，我们创建一个嵌套数组 `fruits`，其元素包含一些水果和一个“蔬菜”数组。

```
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
```

要如何获取以上数组中的 '🥕' 呢？同样的，不使用解构的话，可以这样做：

```
const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
const carrot = veg[2]; // returns '🥕'
```

或者，也可以使用简写语法：

```
fruits[4][2]; // returns '🥕'
```

还可以使用解构语法：

```
let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
```

# 如何使用展开语法（Spread Syntax）和剩余参数（Rest Parameter）

从 ES6 开始，通过 `...`（连续的三个点）可以在数组解构中使用展开语法和剩余参数。

- 使用剩余参数时，`...` 出现在解构语法表达式的左边。
- 使用展开语法时，`...` 出现在解构语法表达式的右边。

## 如何使用剩余参数

通过`剩余参数`，可以将剩下的元素映射到一个新的数组中。剩余参数必须是解构语法中的最后一个变量。

下面的例子中，我们把数组的前两个参数分别映射到了 tomato 和 mushroom 变量中，剩下的元素则使用 `...` 映射到了 `rest` 变量中。`rest` 是一个新数组，其中包含了剩下的元素。

```
const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

console.log(tomato); // '🍅'
console.log(mushroom); // '🍄'
console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]
```

## 如何使用展开运算符

使用展开运算符，可以这样来克隆现有的数组：

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

const saladCloned = [...salad];
console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

salad === saladCloned // false
```

# 解构的使用场景

我们一起来看看数组解构、展开运算符和剩余参数的一些激动人心的使用场景。

## 使用解构交换变量值

使用数组解构语法可以很轻松地交换两个变量的值。

```
let first = '😔';
let second = '🙂';
[first, second] = [second, first];

console.log(first);  // '🙂'
console.log(second); // '😔'
```

## 合并数组

我们可以通过合并两个数组的所有元素来创建一个新数组（不改变原始数组）。假设现在有两个数组——一个包含一些笑脸，另一个包含一些蔬菜。

```
const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];
```

现在，我们要把它们合并成一个新数组。

```
const emotionalVeggies = [...emotion, ...veggies];
console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]
```

# JavaScript 数组方法

到目前为止，我们已经了解了一些数组属性和方法。我们做一个简单的回顾：

- `push()` – 在数组末尾插入一个元素。
- `unshift()` – 在数组头部插入一个元素。
- `pop()` – 移除数组末尾的最后一个元素。
- `shift()` – 移除数组头部的第一个元素。
- `slice()` – 创建数组的浅拷贝副本。
- `Array.isArray()` – 判断某个值是不是数组。
- `length` – 数组的长度。

现在我们将通过示例来学习其它重要的数组方法。

## 如何创建数组、删除数组元素、更新数组元素以及访问数组元素

这一节，我们要学习用于创建新数组、移除数组元素及清空数组、访问数组元素等操作的方法。

### `concat()` 方法

`concat()` 方法可以将多个数组合并在一起并返回合并后的数组。这是一个不可变方法，意味着它不会改变现有的数组。

拼接两个数组：

```
const first = [1, 2, 3];
const second = [4, 5, 6];

const merged = first.concat(second);

console.log(merged); // [1, 2, 3, 4, 5, 6]
console.log(first); // [1, 2, 3]
console.log(second); // [4, 5, 6]
```

使用 `concat()` 方法也可以拼接两个以上的数组。我们可以这样拼接任意数量的数组：

```
array.concat(arr1, arr2,..,..,..,arrN);
```

示例如下：

```
const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];

const merged = first.concat(second, third);

console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### `join()` 方法

`join()` 方法使用一个分隔符将数组的所有元素拼接成一个字符串，并返回这个字符串。默认的分隔符是逗号（`,`）。

```
const emotions = ['🙂', '😍', '🙄', '😟'];

const joined = emotions.join();
console.log(joined); // "🙂,😍,🙄,😟"
```

可以传入一个自定义分隔符用于拼接数组元素。下面是一个使用自定义分隔符拼接数组元素的例子：

```
const joined = emotions.join('<=>');
console.log(joined); // "🙂<=>😍<=>🙄<=>😟"
```

在空数组上调用 `join()` 方法，返回一个空字符串：

```
[].join() // returns ""
```

### `fill()` 方法

`fill()` 方法使用一个固定值填充数组。可以使用这个固定值填充整个数组，也可以只覆盖选定的元素。注意，`fill()`方法会改变原始数组。

```
const colors = ['red', 'blue', 'green'];

colors.fill('pink');
console.log(colors); // ["pink", "pink", "pink"]
```

下面是一个使用 `fill()` 方法覆盖数组的最后两个元素的例子：

```
const colors = ['red', 'blue', 'green'];

colors.fill('pink', 1,3); // ["red", "pink", "pink"]
```

这个例子中，`fill()` 方法的第一个参数是用来填充数组的值，第二个参数是替换的起始索引（从 `0` 开始计算），最后一个参数是终止索引（最大值可以是 `colors.length`）。

请查看这个 Twitter 主题以了解 `fill()` 方法的实际用法。

你也可以查看这个示例项目：https://github.com/atapas/array-fill-color-cards。

### `includes()` 方法

可以使用 `includes()` 方法来判断一个数组中是否包含某个元素，如果包含则返回 `true`，否则返回 `false`。

```
const names = ['tom', 'alex', 'bob', 'john'];

names.includes('tom'); // returns true
names.includes('july'); // returns false
```

### `indexOf()` 方法

可以使用 `indexOf()` 方法找到某个元素在数组中的索引位置。它返回这个元素在数组中首次出现的索引，如果没有找到这个元素则返回 `-1`。

```
const names = ['tom', 'alex', 'bob', 'john'];

names.indexOf('alex'); // returns 1
names.indexOf('rob'); // returns -1
```

还有一个 `lastIndexOf()` 方法，可以找出某个元素在数组中最后出现的位置。与 `indexOf()` 类似，`lastIndexOf()`在找不到这个元素时也返回 `-1`。

```
const names = ['tom', 'alex', 'bob', 'tom'];

names.indexOf('tom'); // returns 0
names.lastIndexOf('tom'); // returns 3
```

### `reverse()` 方法

顾名思义，`reverse()` 方法将数组中元素的位置颠倒，最后一个元素变成第一个、第一个元素变成最后一个。

```
const names = ['tom', 'alex', 'bob'];

names.reverse(); // returns ["bob", "alex", "tom"]
```

`reverse()` 方法会改变原始数组。

### `sort()` 方法

`sort()` 方法可能是最常用的数组方法之一。`sort()` 方法默认会把元素转换为字符串再对它们进行排序。默认的排序方式是升序排列。`sort()` 方法会改变原始数组。

```
const names = ['tom', 'alex', 'bob'];

names.sort(); // returns ["alex", "bob", "tom"]
```

`sort()` 方法接收一个可选的比较器函数作为参数，可以编写一个比较器函数传入 `sort()` 方法来覆盖默认的排序行为。

假设现在有一个数字数组，我们使用比较器函数将它按升序和降序排序：

```
const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
```

首先，调用 `sort()` 方法，并观察结果：

```
numbers.sort();
```

现在，排序后的数组为 [1, 10, 100, 13, 23, 37, 5, 56, 9]。这并不是我们预期的结果。得到这个结果是因为 `sort()` 方法默认会将元素转换为字符串，再基于字符串诸个字符对应的 `UTF-16` 编码值进行比较。

为了解决这个问题，我们编写一个比较器函数。这是用于升序排序的：

```
function ascendingComp(a, b){
  return (a-b);
}
```

把比较器函数传入 `sort()` 方法：

```
numbers.sort(ascendingComp); // retruns [1, 5, 9, 10, 13, 23, 37, 56, 100]

/* 

也可以使用行内函数：

numbers.sort(function(a, b) {
  return (a-b);
});

或者使用箭头函数的写法：

numbers.sort((a, b) => (a-b));

*/
```

降序排序：

```
numbers.sort((a, b) => (b-a));
```

查看这个 GitHub 仓库以获取更多排序示例和技巧：https://github.com/atapas/js-array-sorting。

### `splice()` 方法

`splice()` 方法可以帮助你向数组中添加元素、更新数组元素以及移除数组元素。刚开始接触这个方法可能会令人困惑，不过只要你理解了它的正确用法，就能够掌握。

`splice()` 方法的主要目标是从数组中移除元素。它会返回由被移除的元素组成的数组，并且会改变原始数组。你也可以用它来向数组中添加元素或者替换数组中的元素。

使用 `splice()` 方法向数组中添加一个元素，需要传入插入的目标位置、从目标位置算起想要删除的元素数量以及要插入的元素。

下面的例子中，我们在索引为 `1` 的位置上插入了一个元素 `zack`，没有删除任何元素。

```
const names = ['tom', 'alex', 'bob'];

names.splice(1, 0, 'zack');

console.log(names); // ["tom", "zack", "alex", "bob"]
```

看看下面的例子，我们移除了索引 `2` 位置之后的一个元素（即第三个元素），并添加了一个元素 `zack`。`splice()` 方法返回一个由移除掉的元素——`bob`——组成的数组。

```
const names = ['tom', 'alex', 'bob'];

const deleted = names.splice(2, 1, 'zack');

console.log(deleted); // ["bob"]
console.log(names); // ["tom", "alex", "zack"]
```

查看这个 Twitter 主题以了解如何使用 `splice()` 方法清空数组。

## 静态数组方法

在 JavaScript 中，数组有三个静态方法。我们已经讨论过 `Array.isArray()`，接下来要探讨其余两个方法。

### `Array.from()` 方法

假设有以下 HTML 代码片段，其中包含一个 div 和一些列表元素：

```
<div id="main">
  <ul>
    <ol type="1">
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ol>
  </ul> 
</div>
```

我们使用 `getElementsByTagName()` 方法获取这些列表元素。

```
document.getElementsByTagName('li');
```

它返回如下 `HTMLCollection` 对象：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNbbK8Fpf3scrUHTfsqLcib3owZicHUXAGjibiciahwonm1e1w4wKRIJGs7Lg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

HTMLCollection 是类数组对象



它和数组类似，我们试着使用 `forEach` 来遍历它：

```
document.getElementsByTagName('li').forEach(() => {
 // Do something here..
})
```

猜猜会输出什么？会报出以下错误：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNq1lGicbrtZFJl0l3xQZjPh2xovCCzxZQfmaXyEZqGmzMiczLX3xsSTqQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在类数组对象上调用 forEach 发生错误


为什么会这样？这是因为 `HTMLCollection` 并不是数组，而是 `类数组` 对象，所以不能使用 `forEach` 来遍历它。

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNtOvIjKYlm2mVPWhdZrkttb6wQLp315ZpREAnk3gdTKh1KD8V8ib7KWA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

其原型（proto）是 Object



这里就需要用到 `Array.from()` 方法了，`Array.from()` 能将类数组对象转换为数组，进而能够在它上面执行所有数组操作。

```
const collection = Array.from(document.getElementsByTagName('li'))
```

这里的 `collection` 是一个数组：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNt6ZyTSOiadvE5LPGET84ICLSWaQmt92oB2qicMp9n8suaicdEib3ibNmx8Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

其原型为 Array

### `Array.of()` 方法

`Array.of()` 可以使用任意数量任意类型的元素创建一个新数组。

```
Array.of(2, false, 'test', {'name': 'Alex'})
```

输出如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNVpXTr2u4EeQSDsffvJ2Kicw3OmBlaicObcCh0fTkzTT9iaujFcicMba0FA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Array.of() 方法的输出结果

## 数组迭代器方法

现在我们要学习数组迭代器方法。这些方法在执行数组迭代、计算、做判断、过滤元素等操作时很有用。

到目前为止，我们还没见过对象数组的示例。在这一节，我们将会使用下面的对象数组来解释和演示这些迭代器方法。

这个数组包含了一些订阅各种付费课程的学生的信息：

```
let students = [
   {
      'id': 001,
      'f_name': 'Alex',
      'l_name': 'B',
      'gender': 'M',
      'married': false,
      'age': 22,
      'paid': 250,  
      'courses': ['JavaScript', 'React']
   },
   {
      'id': 002,
      'f_name': 'Ibrahim',
      'l_name': 'M',
      'gender': 'M',
      'married': true,
      'age': 32,
      'paid': 150,  
      'courses': ['JavaScript', 'PWA']
   },
   {
      'id': 003,
      'f_name': 'Rubi',
      'l_name': 'S',
      'gender': 'F',
      'married': false,
      'age': 27,
      'paid': 350,  
      'courses': ['Blogging', 'React', 'UX']
   },
   {
      'id': 004,
      'f_name': 'Zack',
      'l_name': 'F',
      'gender': 'M',
      'married': true,
      'age': 36,
      'paid': 250,  
      'courses': ['Git', 'React', 'Branding']
   } 
];
```

让我们开始吧。所有数组迭代器方法都接收一个函数作为参数，需要在这个函数中声明迭代逻辑。

### `filter()` 方法

`filter()` 方法用所有满足过滤条件的元素来创建一个新数组。我们要找出女学生，所以过滤条件应该是 `gender === 'F'`。

```
const femaleStudents = students.filter((element, index) => {
  return element.gender === 'F';
})

console.log(femaleStudents);
```

输出如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFND3C3sSREq2mVV7ibGupsbcicT9ObWN4wT4KZz4cophPOBVWeib4ROkpMg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

结果是正确的，名为 `Rubi` 的学生是目前唯一的女学生。

### `map()`方法

`map()` 方法遍历整个数组，依次对数组元素执行回调函数并用这些返回值创建一个新数组。我们将会创建一个由 `students` 数组中所有学生的全名组成的新数组。

```
const fullNames = students.map((element, index) => {
  return {'fullName': element['f_name'] + ' ' + element['l_name']}
});

console.log(fullNames);
```

输出如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNSy4EQ36pr6GHUibrt54FIrczfMu63ZVYdUnibJrtmDEWRHt3qU1xNnkg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这里我们可以看到由包含 `fullName` 属性的对象组成的数组，`fullName` 是由 student 对象的 `f_name` 和 `l_name` 属性计算得到的。

### `reduce()` 方法

`reduce()` 方法对每个数组元素执行 reducer 函数，并将其结果汇总为单个返回值。我们将会在 `students` 数组中应用一个 reducer 函数来计算所有学生支付的总额。

```
const total = students.reduce(
   (accumulator, student, currentIndex, array) => {
      accumulator = accumulator + student.paid;
      return (accumulator);
   }, 
0);

console.log(total); // 1000
```

在上面的代码中，

- 我们将`累加器（accumulator）`初始化为 `0`。
- 我们对每个 student 对象执行 `reduce` 方法，读取 `paid` 属性值并把它累加在累加器上。
- 最后，返回累加器。

### `some()` 方法

`some()` 方法返回一个布尔值（true/false），其返回值取决于数组中是否至少有一个元素符合回调函数中的判断条件。我们来看看是否有学生的年龄小于 30 岁。

```
let hasStudentBelow30 = students.some((element, index) => {
  return element.age < 30;
});

console.log(hasStudentBelow30); // true
```

是的，我们看到至少有一个学生的年龄是小于 30 岁的。

### `find()` 方法

使用 `some()` 方法，我们已经看到有一个 30 岁以下的学生。让我们找出这个学生。

为此，我们会用到 `find()` 方法，它会返回数组中第一个满足判断条件的元素。

还有另一个相关的方法 `findIndex()`，这个方法返回我们使用 `find()` 方法找到的元素的索引，如果没有符合条件的元素则返回 `-1`。

下面的例子中，我们向 `find()` 方法中传入了一个函数用来判断学生的年龄，它会返回满足判断条件的学生。

```
const student = students.find((element, index) => {
  return element.age < 30;
});

console.log(student);
```

输出如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNdNpgn1vicF0EaIa6XQCSCMwQkd9o72ALh3CqJahBh5mhiaAtYGLmH39Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

可以看到，他就是 22 岁的 Alex，我们找到他了。

### `every()` 方法

`every()` 方法检查是否数组的每个元素都满足给定的判断条件。让我们检查一下是不是所有学生都订阅了至少两门课程。

```
const atLeastTwoCourses = students.every((elements, index) => {
  return elements.courses.length >= 2;
});

console.log(atLeastTwoCourses); // true
```

正如预期，我们看到结果为 `true`。

## 提案中的方法

截至 2021 年 5 月，ECMAScript 提案中有一个新的数组方法，即 `at()` 方法。

### `at()` 方法

提案中的 `at()` 方法可以让你使用负数索引来访问数组元素（译注：使用负数索引即从数组末尾开始访问元素，`-1` 表示最后一个元素、`-2` 表示倒数第二个元素……以此类推）。截至目前，这个方法还不可用。现在只能使用正数索引从数组开头访问元素。

目前想从数组末尾开始访问数组元素要借助 length 属性。通过引入 `at()` 方法，就可以在单个方法里面使用正数索引或者负数索引来访问元素。

```
const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
junkFoodILove.at(-5); // 🍕
junkFoodILove.at(-8); // 🥖
junkFoodILove.at(10); // undefined
```

这是一个简单示例：

![图片](https://mmbiz.qpic.cn/mmbiz_gif/KpF7T3OPIQSialW2weBzaIZbvm5nwBbFNtbv1MS3Ak8pfIjmwktgZlSGOoK2rk4s4ZCZicCIfdgdKcWdr69pLoYw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

JavaScript at() 方法示例



在 `at()` 方法加入 JavaScript 语言之前，你可以使用这个 polyfill 来获得它的功能。查看这个 GitHub 仓库以获取 `at()`方法的示例：https://github.com/atapas/js-array-at-method。

# 结束之前......

希望你觉得这篇文章有价值，也希望它能够帮助你更好地理解 JavaScript 数组。请多多练习文中的示例，以便更好地掌握它们。你可以在我的 GitHub 仓库中找到所有代码示例。

保持联系，我平时活跃在 Twitter (@tapasadhikary)，欢迎关注我。

推荐阅读：

- 为什么需要了解类数组对象？
- 关于 JavaScript 排序方法（sort）的 5 个实用技巧
- JavaScript 中清空数组的各种方式及其后果
- 使用 map、reduce、filter 和其它数组迭代器增强你的 JavaScript 水平
- 为什么需要了解 JavaScript 数组的 at() 方法？



------

原文链接：https://www.freecodecamp.org/news/the-javascript-array-handbook/

作者：TAPAS ADHIKARY

译者：Humilitas