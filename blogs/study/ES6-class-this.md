---
title: 深入理解ES6中class的this指向问题
date: 2021-07-14
categories:
 - study
tags:
 -  ES6
 - This
---

> 目标：了解到隐式绑定丢失this问题

## 深入理解ES6中class的this指向问题

在ES6中引入了类似其他语言的类的写法， 即class（类），作为类对象模板。
ES6 的class可以看作一个语法糖，它的绝大部分功能ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

同时在JS里面this理解是一个难点和重点，那么在ES6的class中使用this将会如何理解呢？下面就对class中使用this进行剖析。

class的基本语法
欲要理解class里的this，那么我们先就class的基本语法开始入手，其基本语法如下
class name [extends] { // class body }

// 例子：

```
"use strict";

class Demo {
	constructor(x, y) {
	this.x = x;
	this.y = y;
	}
	sum() {
		let sumVal = this.x + this.y;
		return sumVal;
	}
}

let myDemo = new Demo(2, 3);
console.log(myDemo.sum()); // 打印结果为 5 <== call-site for `sum`
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
```

结果解释： 在例子里面，有两处this， 第一处是constructor里的this.x = x和this.y = y。这里的this，在class的构造函数constructor内部，表示的是对象生效时的执行环境。而对象生效的时候，是对象在实例化的过程（myDemo = new Demo(2, 3)）,所以这里的this是指向对象的实例myDemo。
第二处this是在sum函数里面let sumVal = this.x + this.y，它实际指向的是sum执行时的执行环境，当以myDemo.sum()的方式运行的时候，其实是this的隐式绑定， sum函数里的this实际上是指向的myDemo实例的。所以this能找到x和y，能够得到正确的结果。

class中使用this的指向深入理解
那么我们下面对上面例子进行适当的更改。将对象里面的方法sum作为对象赋值给新变量，然后调用新变量。

```
// demo.js
"use strict";

class Demo {
	constructor(x, y) {
	this.x = x;
	this.y = y;
	}
	sum() {
		let sumVal = this.x + this.y;
		return sumVal;
	}
}

let myDemo = new Demo(2, 3);
// console.log(myDemo.sum()); // ===>更改为
const sum = myDemo.sum; //将sum的引用赋值给新变量sum （// const { sum } = myDemo;）
sum(); //运行环境是全局环境, 所以class 的sum函数里的this就根据是否是严格模式而指向全局环境或者undefined，【重点注意： ES6 的class内部默认就是严格模式】
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
```

执行结果： 当这段代码按照node demo.js执行的时候，会报TypeError: TypeError: Cannot read property 'x' of undefined
结果解释： 这段代码改变点在于class中sum的调用位置发生了变化。首先将myDemo.sum的引用赋值给新的变量sum，然后再调用该方法sum()。这个理解起来是：class里的sum是一个对象内容，而myDemo.sum只是指向该sum的一个变量，将myDemo.sum等号赋值给新变量sum，只是让新变量指向class的sum，新变量sum和原来的myDemo.sum本身是没有关系的。参看下图所以看起来是对myDmo.sum的引用，但实际上只是对sum本身的引用【调用位置是全局环境】。相当于单独使用class中的sum方法一样**【其实就是隐式绑定丢失问题】**。而这个时候sum函数里的this就根据是否是严格模式而指向全局环境或者undefined(严格模式)【重点注意： ES6 的class内部默认就是严格模式】 所以尽管在全局环境里执行sum()，这里的this 就是undefined，而undefined是没有属性x和y的， 所以找不到该属性而抛出TypeError。


解决之法1： 就是在对象每次实例化的时候将sum中的this绑定到每次实例化对象去，所以我们需要在构造函数里添加一条语句this.sum = this.sum.bind(this);实现该功能。constructor改为如下：

```
class Demo {
	constructor(x, y) {
	this.x = x;
	this.y = y;
	this.sum = this.sum.bind(this); // sum中this显式绑定
	}
	sum() {
		let sumVal = this.x + this.y;
		return sumVal;
	}
}

let myDemo = new Demo(2, 3);
const sum = myDemo.sum; 
sum(); // <== 5
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
```

解释： 当对象实例化的时候let myDemo = new Demo(2, 3);，就将sum的this显示的绑定到实例的this。而单独调用sum函数的时候，相当于是默认绑定，然后默认绑定的优先级小于显示绑定，所以就算单独运行sum，那么class的sum中this还是指向对应的实例化对象了。【参看接下来章节：扩展this理解】


解决之法2： ES6里面引入了箭头函数，箭头函数不仅仅是简化了函数的缩写，另外一个很重要的特点就是不会创建自己的this值，他的this值是继承外层作用域链上的this。

其实上面的this理解，关键还是在于this的指向，实际是需要看其所在的函数或对象的实际执行时的调用位置，而不是它的代码书写位置。【参看扩展this理解】

扩展this理解
决定this的指向内容，实际是需要看调用位置，而不是它的写入位置。并且我们需要考虑调用顺序：

是否是new binding， const bar = new Foo()。
是否是显示绑定，比如call，apply，亦或者是bind， const bar = foo.call(obj2)。
是否是隐式绑定，比如函数调用， const bar = obj1.foo()
最后是默认绑定，在严格模式下，this是undefined，否则是全局对象， 比如：const bar = foo()
正常函数隐式绑定丢失问题。
看起来是对obj.foo的引用，但实际上只是对bar本身的引用【调用位置是全局环境】，this就根据是否是严格模式而指向全局环境或者undefined(严格模式)

```
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"
1
2
3
4
5
6
7
8
9
10
11
12
13
14
```

函数作为回调参数传递也有类似问题。

```
function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
```

定时函数执行也存在相同问题

```
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

setTimeout( obj.foo, 100 ); // "oops, global"
1
2
3
4
5
6
7
8
9
10
11
12
```

隐式绑定丢失问题参看：[你不知道的JS-Implicitly Lost章节](https://github.com/changpzh/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch2.md)