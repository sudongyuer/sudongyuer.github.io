(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{600:function(e,t,s){"use strict";s.r(t);var a=s(13),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"这一次彻底搞定-usereducer-基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#这一次彻底搞定-usereducer-基础概念"}},[e._v("#")]),e._v(" 这一次彻底搞定 useReducer - 基础概念")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/6844903869437181960",target:"_blank",rel:"noopener noreferrer"}},[e._v("useReducer-基础概念篇"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/6844903869604986888",target:"_blank",rel:"noopener noreferrer"}},[e._v("useReducer-使用篇"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/6844903869609148430",target:"_blank",rel:"noopener noreferrer"}},[e._v("useReducer-配合useContext使用"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("code",[e._v("useReducer")]),e._v("是React提供的一个高级Hook，它不像useEffect、useState、useRef等必须hook一样，没有它我们也可以正常完成需求的开发，但useReducer可以使我们的代码具有更好的可读性、可维护性、可预测性。")]),e._v(" "),s("p",[e._v("下面我们会分三篇文章详细介绍如何在项目中使用"),s("code",[e._v("useReducer")]),e._v("：")]),e._v(" "),s("ul",[s("li",[e._v("第一篇：主要介绍JavaScript中"),s("code",[e._v("reducer")]),e._v("的概念以及它的特点，对reducer、redux等比较熟悉的小伙伴可以跳过本篇")]),e._v(" "),s("li",[e._v("第二篇：主要介绍"),s("code",[e._v("useReducer")]),e._v("的使用方式和它的场景，以及useReducer带来的好处")]),e._v(" "),s("li",[e._v("第三篇：会进一步介绍复杂项目、复杂页面中的useReducer使用")])]),e._v(" "),s("h3",{attrs:{id:"什么是reducer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是reducer"}},[e._v("#")]),e._v(" 什么是reducer")]),e._v(" "),s("p",[s("code",[e._v("reducer")]),e._v("的概念是伴随着Redux的出现逐渐在JavaScript中流行起来。但我们并不需要学习Redux去了解Reducer。简单来说 reducer是一个函数"),s("code",[e._v("(state, action) => newState")]),e._v("：接收当前应用的state和触发的动作action，计算并返回最新的state。下面是一段伪代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    // 举个栗子 计算器reducer，根据state（当前状态）和action（触发的动作加、减）参数，计算返回newState\n    function countReducer(state, action) {\n        switch(action.type) {\n            case 'add':\n                return state + 1;\n            case 'sub':\n                return state - 1;\n            default: \n                return state;\n        }\n    }\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("上面例子：state是一个number类型的数值，reducer根据action的类型（加、减）对应的修改state，并返回最终的state。为了刚接触到"),s("code",[e._v("reducer")]),e._v("概念的小伙伴更容易理解,可以将state改为count，但请始终牢记count仍然是"),s("strong",[e._v("state")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    function countReducer(count, action) {\n        switch(action.type) {\n            case 'add':\n                return count + 1;\n            case 'sub':\n                return count - 1;\n            default: \n                return count;\n        }\n    }\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("h3",{attrs:{id:"reducer-的幂等性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reducer-的幂等性"}},[e._v("#")]),e._v(" reducer 的幂等性")]),e._v(" "),s("p",[e._v("从上面的示例可以看到"),s("code",[e._v("reducer")]),e._v("本质是一个纯函数，没有任何UI和副作用。这意味着相同的输入（state、action），reducer函数无论执行多少遍始终会返回相同的输出（newState）。因此通过reducer函数很容易推测state的变化，并且也更加容易单元测试。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    expect(countReducer(1, { type: 'add' })).equal(2); // 成功\n    expect(countReducer(1, { type: 'add' })).equal(2); // 成功\n    expect(countReducer(1, { type: 'sub' })).equal(0); // 成功\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"state-和-newstate-的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-和-newstate-的理解"}},[e._v("#")]),e._v(" state 和 newState 的理解")]),e._v(" "),s("p",[s("code",[e._v("state")]),e._v("是当前应用状态对象，可以理解就是我们熟知的React里面的state。")]),e._v(" "),s("p",[e._v("在上面的例子中state是一个基础数据类型，但很多时候state可能会是一个复杂的JavaScript对象，如上例中count有可能只是 state中的一个属性。针对这种场景我们可以使用ES6的结构赋值：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    // 返回一个 newState (newObject)\n    function countReducer(state, action) {\n        switch(action.type) {\n            case 'add':\n                return { ...state, count: state.count + 1; }\n            case 'sub':\n                return { ...state, count: state.count - 1; }\n            default: \n                return count;\n        }\n    }\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("关于上面这段代码有两个重要的点需要我们记住：")]),e._v(" "),s("ol",[s("li",[e._v("reducer处理的state对象必须是"),s("code",[e._v("immutable")]),e._v("，这意味着永远不要直接修改参数中的state对象，reducer函数应该每次都返回一个新的state object")]),e._v(" "),s("li",[e._v("既然reducer要求每次都返回一个新的对象，我们可以使用ES6中的"),s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FSpread_syntax",target:"_blank",rel:"noopener noreferrer"}},[e._v("解构赋值方式"),s("OutboundLink")],1),e._v("去创建一个新对象，并复写我们需要改变的state属性，如上例。")])]),e._v(" "),s("p",[e._v("看上去很完美，但如果我们的state是多层嵌套，解构赋值实现就非常复杂：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    function bookReducer(state, action) {\n        switch(action.type) {\n            // 添加一本书\n            case 'addBook':\n                return {\n                    ...state,\n                    books: {\n                        ...state.books,\n                        [bookId]: book,\n                    }\n                };\n            case 'sub':\n                // ....\n            default: \n                return state;\n        }\n    }\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])]),s("p",[e._v("对于这种复杂state的场景推荐使用"),s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fimmerjs%2Fimmer",target:"_blank",rel:"noopener noreferrer"}},[e._v("immer"),s("OutboundLink")],1),e._v("等immutable库解决。")]),e._v(" "),s("h3",{attrs:{id:"state为什么需要immutable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state为什么需要immutable"}},[e._v("#")]),e._v(" state为什么需要immutable？")]),e._v(" "),s("ul",[s("li",[e._v("reducer的幂等性")])]),e._v(" "),s("p",[e._v("我们上文提到过reducer需要保持幂等性，更加可预测、可测试。如果每次返回同一个state，就无法保证无论执行多少次都是相同的结果")]),e._v(" "),s("ul",[s("li",[e._v("React中的state比较方案")])]),e._v(" "),s("p",[e._v("React在比较"),s("code",[e._v("oldState")]),e._v("和"),s("code",[e._v("newState")]),e._v("的时候是使用Object.is函数，如果是同一个对象则不会出发组件的rerender。 可以参考官方文档"),s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Freactjs.org%2Fdocs%2Fhooks-reference.html%23bailing-out-of-a-dispatch",target:"_blank",rel:"noopener noreferrer"}},[e._v("bailing-out-of-a-dispatch"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("h3",{attrs:{id:"action-理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action-理解"}},[e._v("#")]),e._v(" action 理解")]),e._v(" "),s("p",[e._v("action：用来表示触发的行为。")]),e._v(" "),s("ol",[s("li",[e._v("用type来表示具体的行为类型(登录、登出、添加用户、删除用户等)")]),e._v(" "),s("li",[e._v("用payload携带的数据（如增加书籍，可以携带具体的book信息），我们用上面addBook的action为例：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    const action = {\n        type: 'addBook',\n        payload: {\n            book: {\n                bookId,\n                bookName,\n                author,\n            }\n        }\n    }\n    function bookReducer(state, action) {\n        switch(action.type) {\n            // 添加一本书\n            case 'addBook':\n                const { book } = action.payload;\n                return {\n                    ...state,\n                    books: {\n                        ...state.books,\n                        [book.bookId]: book,\n                    }\n                };\n            case 'sub':\n                // ....\n            default: \n                return state;\n        }\n    }\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("至此基本介绍完了reducer相关的内容，简单总结一下："),s("code",[e._v("reducer")]),e._v("是一个利用"),s("code",[e._v("action")]),e._v("提供的信息，将"),s("code",[e._v("state")]),e._v("从A转换到B的一个纯函数，具有一下几个特点：")]),e._v(" "),s("ul",[s("li",[e._v("语法：(state, action) => newState")]),e._v(" "),s("li",[e._v("Immutable：每次都返回一个newState， 永远不要直接修改state对象")]),e._v(" "),s("li",[e._v("Action：一个常规的Action对象通常有type和payload（可选）组成\n"),s("ul",[s("li",[e._v("type： 本次操作的类型，也是 reducer 条件判断的依据")]),e._v(" "),s("li",[e._v("payload： 提供操作附带的数据信息")])])])]),e._v(" "),s("p",[e._v("下篇文章我们会进入正题：如何使用useReducer简化我们的state管理。")]),e._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fimmerjs%2Fimmer",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/immerjs/imm…"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Freactjs.org%2Fdocs%2Fcontext.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("reactjs.org/docs/contex…"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Freactjs.org%2Fdocs%2Fhooks-faq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("reactjs.org/docs/hooks-…"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.robinwieruch.de%2Freact-usereducer-vs-usestate%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.robinwieruch.de/react-usere…"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.robinwieruch.de%2Freact-state-usereducer-usestate-usecontext%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.robinwieruch.de/react-state…"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fkentcdodds.com%2Fblog%2Fapplication-state-management-with-react",target:"_blank",rel:"noopener noreferrer"}},[e._v("kentcdodds.com/blog/applic…"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);