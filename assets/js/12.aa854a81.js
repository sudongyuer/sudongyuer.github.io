(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{562:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"计算机网络趣谈-210731"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络趣谈-210731"}},[s._v("#")]),s._v(" 计算机网络趣谈 210731")]),s._v(" "),a("h3",{attrs:{id:"总结一下今天的内容-理解网络协议的工作模式-有两个小窍门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结一下今天的内容-理解网络协议的工作模式-有两个小窍门"}},[s._v("#")]),s._v(" 总结一下今天的内容，理解网络协议的工作模式，有两个小窍门：")]),s._v(" "),a("ul",[a("li",[s._v("始终想象自己是一个处理网络包的程序：如何拿到网络包，如何根据规则进行处理，如何发出去；")]),s._v(" "),a("li",[s._v("始终牢记一个原则：只要是在网络上跑的包，都是完整的。可以有下层没上层，绝对不可能有上层没下层。")])]),s._v(" "),a("h3",{attrs:{id:"ip地址和mac地址的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip地址和mac地址的区别"}},[s._v("#")]),s._v(" IP地址和MAC地址的区别")]),s._v(" "),a("ul",[a("li",[s._v("ip是地址，有定位功能，mac是身份证号，没有定位功能")]),s._v(" "),a("li",[s._v("CIDR可以用来区分是否是不同网段的主机（是否是本地人）")]),s._v(" "),a("li",[s._v("IP分公有IP和私有IP")])]),s._v(" "),a("h3",{attrs:{id:"如何配置ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配置ip地址"}},[s._v("#")]),s._v(" 如何配置IP地址")]),s._v(" "),a("h4",{attrs:{id:"_1-手动分配ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-手动分配ip地址"}},[s._v("#")]),s._v(" 1.手动分配ip地址")]),s._v(" "),a("p",[s._v("使用net-tools：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1/24\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth1 up\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用 iproute2:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1/24 dev eth1\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" up eth1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("em",[a("strong",[s._v("配置IP要点")])]),s._v("：")]),s._v(" "),a("p",[a("em",[a("strong",[s._v("不同系统的配置文件格式不同，但是无非就是CIDR、子网掩码、广播地址、网管地址（网管地址要和网卡是同一个网段的）")])])]),s._v(" "),a("h4",{attrs:{id:"_2-动态主机配置协议-dhcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-动态主机配置协议-dhcp"}},[s._v("#")]),s._v(" 2.动态主机配置协议（DHCP）")]),s._v(" "),a("p",[s._v("DHCP叫做动态主机配置协议（Dynamic Host Configuration Protocol）")]),s._v(" "),a("p",[s._v("如果是数据中心里面的服务器，IP 一旦配置好，基本不会变，这就相当于买房自己装修。DHCP 的方式就相当于租房。你不用装修，都是帮你配置好的。你暂时用一下，用完退租就可以了")]),s._v(" "),a("h3",{attrs:{id:"小结1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结1"}},[s._v("#")]),s._v(" 小结1")]),s._v(" "),a("p",[s._v("DHCP 协议主要是用来给客户租用 IP 地址，和房产中介很像，要商谈、签约、续租，广播还不能“抢单”；DHCP 协议能给客户推荐“装修队”PXE，能够安装操作系统，这个在云计算领域大有用处。")]),s._v(" "),a("h3",{attrs:{id:"小结2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结2"}},[s._v("#")]),s._v(" 小结2")]),s._v(" "),a("p",[s._v("第一，MAC 层是用来解决多路访问的堵车问题的；")]),s._v(" "),a("p",[s._v("第二，ARP 是通过吼的方式来寻找目标 MAC 地址的，吼完之后记住一段时间，这个叫作缓存；")]),s._v(" "),a("p",[s._v("第三，交换机是有 MAC 地址学习能力的，学完了它就知道谁在哪儿了，不用广播了。")]),s._v(" "),a("h3",{attrs:{id:"小结3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结3"}},[s._v("#")]),s._v(" 小结3")]),s._v(" "),a("p",[s._v("当交换机的数目越来越多的时候，会遭遇环路问题，让网络包迷路，这就需要使用 STP 协议，通过华山论剑比武的方式，将有环路的图变成没有环路的树，从而解决环路问题。")]),s._v(" "),a("p",[s._v("交换机数目多会面临隔离问题，可以通过 VLAN 形成虚拟局域网，从而解决广播问题和安全问题。")]),s._v(" "),a("p",[s._v("交换机是连接同一局域网的二层网络设备")]),s._v(" "),a("p",[s._v("路由器是连接不同网段的网络设备")]),s._v(" "),a("p",[s._v("ping traceroute 来调试一个较大的网络中两台机器不通")])])}),[],!1,null,null,null);t.default=r.exports}}]);