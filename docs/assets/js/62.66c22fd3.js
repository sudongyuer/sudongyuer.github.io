(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{615:function(s,n,a){"use strict";a.r(n);var t=a(13),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("目标：了解到隐式绑定丢失this问题")])]),s._v(" "),a("h2",{attrs:{id:"深入理解es6中class的this指向问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入理解es6中class的this指向问题"}},[s._v("#")]),s._v(" 深入理解ES6中class的this指向问题")]),s._v(" "),a("p",[s._v("在ES6中引入了类似其他语言的类的写法， 即class（类），作为类对象模板。\nES6 的class可以看作一个语法糖，它的绝大部分功能ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。")]),s._v(" "),a("p",[s._v("同时在JS里面this理解是一个难点和重点，那么在ES6的class中使用this将会如何理解呢？下面就对class中使用this进行剖析。")]),s._v(" "),a("p",[s._v("class的基本语法\n欲要理解class里的this，那么我们先就class的基本语法开始入手，其基本语法如下\nclass name [extends] { // class body }")]),s._v(" "),a("p",[s._v("// 例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('"use strict";\n\nclass Demo {\n\tconstructor(x, y) {\n\tthis.x = x;\n\tthis.y = y;\n\t}\n\tsum() {\n\t\tlet sumVal = this.x + this.y;\n\t\treturn sumVal;\n\t}\n}\n\nlet myDemo = new Demo(2, 3);\nconsole.log(myDemo.sum()); // 打印结果为 5 <== call-site for `sum`\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("结果解释： 在例子里面，有两处this， 第一处是constructor里的this.x = x和this.y = y。这里的this，在class的构造函数constructor内部，表示的是对象生效时的执行环境。而对象生效的时候，是对象在实例化的过程（myDemo = new Demo(2, 3)）,所以这里的this是指向对象的实例myDemo。\n第二处this是在sum函数里面let sumVal = this.x + this.y，它实际指向的是sum执行时的执行环境，当以myDemo.sum()的方式运行的时候，其实是this的隐式绑定， sum函数里的this实际上是指向的myDemo实例的。所以this能找到x和y，能够得到正确的结果。")]),s._v(" "),a("p",[s._v("class中使用this的指向深入理解\n那么我们下面对上面例子进行适当的更改。将对象里面的方法sum作为对象赋值给新变量，然后调用新变量。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// demo.js\n"use strict";\n\nclass Demo {\n\tconstructor(x, y) {\n\tthis.x = x;\n\tthis.y = y;\n\t}\n\tsum() {\n\t\tlet sumVal = this.x + this.y;\n\t\treturn sumVal;\n\t}\n}\n\nlet myDemo = new Demo(2, 3);\n// console.log(myDemo.sum()); // ===>更改为\nconst sum = myDemo.sum; //将sum的引用赋值给新变量sum （// const { sum } = myDemo;）\nsum(); //运行环境是全局环境, 所以class 的sum函数里的this就根据是否是严格模式而指向全局环境或者undefined，【重点注意： ES6 的class内部默认就是严格模式】\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("执行结果： 当这段代码按照node demo.js执行的时候，会报TypeError: TypeError: Cannot read property 'x' of undefined\n结果解释： 这段代码改变点在于class中sum的调用位置发生了变化。首先将myDemo.sum的引用赋值给新的变量sum，然后再调用该方法sum()。这个理解起来是：class里的sum是一个对象内容，而myDemo.sum只是指向该sum的一个变量，将myDemo.sum等号赋值给新变量sum，只是让新变量指向class的sum，新变量sum和原来的myDemo.sum本身是没有关系的。参看下图所以看起来是对myDmo.sum的引用，但实际上只是对sum本身的引用【调用位置是全局环境】。相当于单独使用class中的sum方法一样**【其实就是隐式绑定丢失问题】**。而这个时候sum函数里的this就根据是否是严格模式而指向全局环境或者undefined(严格模式)【重点注意： ES6 的class内部默认就是严格模式】 所以尽管在全局环境里执行sum()，这里的this 就是undefined，而undefined是没有属性x和y的， 所以找不到该属性而抛出TypeError。")]),s._v(" "),a("p",[s._v("解决之法1： 就是在对象每次实例化的时候将sum中的this绑定到每次实例化对象去，所以我们需要在构造函数里添加一条语句this.sum = this.sum.bind(this);实现该功能。constructor改为如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Demo {\n\tconstructor(x, y) {\n\tthis.x = x;\n\tthis.y = y;\n\tthis.sum = this.sum.bind(this); // sum中this显式绑定\n\t}\n\tsum() {\n\t\tlet sumVal = this.x + this.y;\n\t\treturn sumVal;\n\t}\n}\n\nlet myDemo = new Demo(2, 3);\nconst sum = myDemo.sum; \nsum(); // <== 5\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("解释： 当对象实例化的时候let myDemo = new Demo(2, 3);，就将sum的this显示的绑定到实例的this。而单独调用sum函数的时候，相当于是默认绑定，然后默认绑定的优先级小于显示绑定，所以就算单独运行sum，那么class的sum中this还是指向对应的实例化对象了。【参看接下来章节：扩展this理解】")]),s._v(" "),a("p",[s._v("解决之法2： ES6里面引入了箭头函数，箭头函数不仅仅是简化了函数的缩写，另外一个很重要的特点就是不会创建自己的this值，他的this值是继承外层作用域链上的this。")]),s._v(" "),a("p",[s._v("其实上面的this理解，关键还是在于this的指向，实际是需要看其所在的函数或对象的实际执行时的调用位置，而不是它的代码书写位置。【参看扩展this理解】")]),s._v(" "),a("p",[s._v("扩展this理解\n决定this的指向内容，实际是需要看调用位置，而不是它的写入位置。并且我们需要考虑调用顺序：")]),s._v(" "),a("p",[s._v("是否是new binding， const bar = new Foo()。\n是否是显示绑定，比如call，apply，亦或者是bind， const bar = foo.call(obj2)。\n是否是隐式绑定，比如函数调用， const bar = obj1.foo()\n最后是默认绑定，在严格模式下，this是undefined，否则是全局对象， 比如：const bar = foo()\n正常函数隐式绑定丢失问题。\n看起来是对obj.foo的引用，但实际上只是对bar本身的引用【调用位置是全局环境】，this就根据是否是严格模式而指向全局环境或者undefined(严格模式)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function foo() {\n\tconsole.log( this.a );\n}\n\nvar obj = {\n\ta: 2,\n\tfoo: foo\n};\n\nvar bar = obj.foo; // function reference/alias!\n\nvar a = "oops, global"; // `a` also property on global object\n\nbar(); // "oops, global"\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("函数作为回调参数传递也有类似问题。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function foo() {\n\tconsole.log( this.a );\n}\n\nfunction doFoo(fn) {\n\t// `fn` is just another reference to `foo`\n\n\tfn(); // <-- call-site!\n}\n\nvar obj = {\n\ta: 2,\n\tfoo: foo\n};\n\nvar a = "oops, global"; // `a` also property on global object\n\ndoFoo( obj.foo ); // "oops, global"\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("定时函数执行也存在相同问题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function foo() {\n\tconsole.log( this.a );\n}\n\nvar obj = {\n\ta: 2,\n\tfoo: foo\n};\n\nvar a = "oops, global"; // `a` also property on global object\n\nsetTimeout( obj.foo, 100 ); // "oops, global"\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("隐式绑定丢失问题参看："),a("a",{attrs:{href:"https://github.com/changpzh/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch2.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("你不知道的JS-Implicitly Lost章节"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);