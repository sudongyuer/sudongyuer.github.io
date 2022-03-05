(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{596:function(t,v,a){"use strict";a.r(v);var _=a(13),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"渲染模式简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染模式简介"}},[t._v("#")]),t._v(" 渲染模式简介")]),t._v(" "),a("blockquote",[a("p",[t._v("现在，在web上渲染内容可以有多种方式。如何以及在何处获取和呈现内容是应用程序性能的关键。可用的框架和库可以用来实现不同的渲染模式，如客户端渲染、静态渲染、水合作用、渐进式渲染和服务器端渲染。在我们决定哪种模式最适合我们的应用程序之前，理解每种模式的含义是很重要的。")])]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("Chrome团队鼓励开发人员考虑静态渲染或服务器端渲染，而不是完全的水合作用方法。随着时间的推移，在使用现代框架时，渐进加载和呈现技术在默认情况下可能有助于在性能和特性交付之间取得良好的平衡")]),t._v(" "),a("h2",{attrs:{id:"一段web渲染的小历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一段web渲染的小历史"}},[t._v("#")]),t._v(" 一段web渲染的小历史")]),t._v(" "),a("ul",[a("li",[t._v("Web技术一直在不断发展，以支持不断变化的应用程序需求。所有网站的构建模块HTML、CSS和JavaScript也随着时间的推移而发展，以支持不断变化的需求和利用浏览器的进步。")]),t._v(" "),a("li",[t._v("在2000年早期，我们有完全由服务器呈现HTML内容的站点。开发人员依靠像PHP和ASP这样的服务器端脚本语言来呈现HTML。所有关键导航都需要页面重新加载，客户端很少使用JavaScript来隐藏/显示或启用/禁用HTML元素。")]),t._v(" "),a("li",[t._v("React于2013年推出，是一个用于构建用户界面和UI组件的灵活框架，为开发单页网页和移动应用提供了基础。")]),t._v(" "),a("li",[t._v("从2015年到2020年，React生态系统已经发展到支持数据流架构库(Redux)、CSS框架(React- bootstrap)、路由库和移动应用框架(React Native)。然而，纯客户端呈现框架有一些缺点。因此，开发人员已经开始探索新的方法，以获得客户端和服务器端呈现世界的最佳效果")])]),t._v(" "),a("h2",{attrs:{id:"渲染-关键性能指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染-关键性能指标"}},[t._v("#")]),t._v(" 渲染-关键性能指标")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("首字母缩略")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("TTFB")]),t._v(" "),a("td",[t._v("时间到第一个字节-从点击一个链接到第一个进入的内容之间的时间。")])]),t._v(" "),a("tr",[a("td",[t._v("FP")]),t._v(" "),a("td",[t._v("第一次绘制——用户第一次看到任何内容，或者第一次在屏幕上绘制前几个像素")])]),t._v(" "),a("tr",[a("td",[t._v("FCP")]),t._v(" "),a("td",[t._v("第一次内容绘制-当所有请求的内容变得可见的时候")])]),t._v(" "),a("tr",[a("td",[t._v("LCP")]),t._v(" "),a("td",[t._v("最大内容绘制-当主页面内容变得可见的时候。这指的是视口中可见的最大图像或文本块。")])]),t._v(" "),a("tr",[a("td",[t._v("TTL")]),t._v(" "),a("td",[t._v("交互时间—页面变成交互的时间，例如，连接事件，等等。")])]),t._v(" "),a("tr",[a("td",[t._v("TBT")]),t._v(" "),a("td",[t._v("总阻塞时间-从FCP到TTI之间的总时间。")])])])]),t._v(" "),a("p",[t._v("关于这些性能参数的一些重要注意事项如下。")]),t._v(" "),a("ul",[a("li",[t._v("一个大型JavaScript包可能会增加页面到达FCP和LCP所需的时间。用户将需要等待一段时间才能从一个几乎是空白的页面切换到一个加载了内容的页面。")]),t._v(" "),a("li",[t._v("更大的JavaScript包也会影响TTI和TBT，因为页面只有在加载了最低要求的JavaScript并连接了事件后才能成为交互式页面。")]),t._v(" "),a("li",[t._v("内容到达浏览器的第一个字节所需的时间(TTFB)取决于服务器处理请求所花费的时间。")]),t._v(" "),a("li",[t._v("预加载、预取和脚本属性等技术会对上述参数产生不同的影响")])]),t._v(" "),a("h2",{attrs:{id:"模式-快速查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式-快速查看"}},[t._v("#")]),t._v(" 模式-快速查看")]),t._v(" "),a("p",[t._v("客户端呈现(CSR)和服务器端呈现(SSR)形成了可供呈现选择的两个极端。下面插图中列出的其他模式使用不同的方法来提供一些从CSR和SSR中借用的特性的组合。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.patterns.dev/img/remote/ZG9jFJ.svg",alt:"rendering on the web comparison of patterns and trade-offs"}})]),t._v(" "),a("h2",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),a("ul",[a("li",[t._v("我们现在已经讨论了四种本质上是SSR变异的模式。")]),t._v(" "),a("li",[t._v("这些变化使用组合技术来降低一个或多个性能参数，如TTFB(静态和增量静态生成)，TTI(渐进水化)和FCP/FP(流式)。")]),t._v(" "),a("li",[t._v("这些模式建立在现有的客户端框架(如React)之上，并允许某种形式的重新组合以达到CSR的交互性水平。因此，我们有多种选择，以实现最终目标，结合SSR和CSR的利益。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1gzqy1o9rdjj213m0lqjsh.jpg",alt:"image-20220226152653717"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("根据应用程序或页面类型的不同，有些模式可能比其他模式更合适。下面的图表回顾、总结和比较了我们在前面讨论的每个模式的重点，并提供了每个模式的用例")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.patterns.dev/img/remote/Z1mbJpL.svg",alt:"img"}})])])}),[],!1,null,null,null);v.default=r.exports}}]);