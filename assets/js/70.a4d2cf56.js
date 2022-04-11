(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{619:function(t,n,a){"use strict";a.r(n);var i=a(13),o=Object(i.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("h2",{attrs:{id:"什么是负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是负载均衡"}},[t._v("#")]),t._v(" 什么是负载均衡")]),t._v(" "),a("p",[t._v("简评：不想看文字的话，文章里的图片还是挺清晰易懂的。")])]),t._v(" "),a("p",[t._v("负载均衡是高可用网络基础架构的关键组件，通常用于将工作负载分布到多个服务器来提高网站、应用、数据库或其他服务的性能和可靠性。")]),t._v(" "),a("p",[t._v("一个没有负载均衡的 web 架构类似下面这样：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-6a7f624cd5e776a6b0b05a051e65666e_1440w.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("在这里用户是直连到 web 服务器，如果这个服务器宕机了，那么用户自然也就没办法访问了。另外，如果同时有很多用户试图访问服务器，超过了其能处理的极限，就会出现加载速度缓慢或根本无法连接的情况。")]),t._v(" "),a("p",[t._v("而通过在后端引入一个负载均衡器和至少一个额外的 web 服务器，可以缓解这个故障。通常情况下，所有的后端服务器会保证提供相同的内容，以便用户无论哪个服务器响应，都能收到一致的内容。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-6aa2607e04cc9d2f0d448f9fa80b2ae2_1440w.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("从图里可以看到，用户访问负载均衡器，再由负载均衡器将请求转发给后端服务器。在这种情况下，单点故障现在转移到负载均衡器上了。这里又可以通过引入第二个负载均衡器来缓解，但在讨论之前，我们先探讨下负载均衡器的工作方式。")]),t._v(" "),a("p",[a("strong",[t._v("负载均衡器可以处理什么样的请求？")])]),t._v(" "),a("p",[t._v("负载均衡器的管理员能主要为下面四种主要类型的请求设置转发规则：")]),t._v(" "),a("ul",[a("li",[t._v("HTTP")]),t._v(" "),a("li",[t._v("HTTPS")]),t._v(" "),a("li",[t._v("TCP")]),t._v(" "),a("li",[t._v("UDP")])]),t._v(" "),a("p",[a("strong",[t._v("负载均衡器如何选择要转发的后端服务器？")])]),t._v(" "),a("p",[t._v("负载均衡器一般根据两个因素来决定要将请求转发到哪个服务器。首先，确保所选择的服务器能够对请求做出响应，然后根据预先配置的规则从健康服务器池（healthy pool）中进行选择。")]),t._v(" "),a("p",[t._v("因为，负载均衡器应当只选择能正常做出响应的后端服务器，因此就需要有一种判断后端服务器是否「健康」的方法。为了监视后台服务器的运行状况，运行状态检查服务会定期尝试使用转发规则定义的协议和端口去连接后端服务器。如果，服务器无法通过健康检查，就会从池中剔除，保证流量不会被转发到该服务器，直到其再次通过健康检查为止。")]),t._v(" "),a("p",[a("strong",[t._v("负载均衡算法")])]),t._v(" "),a("p",[t._v("负载均衡算法决定了后端的哪些健康服务器会被选中。几个常用的算法：")]),t._v(" "),a("ul",[a("li",[t._v("**Round Robin（轮询）：**为第一个请求选择列表中的第一个服务器，然后按顺序向下移动列表直到结尾，然后循环。")]),t._v(" "),a("li",[t._v("**Least Connections（最小连接）：**优先选择连接数最少的服务器，在普遍会话较长的情况下推荐使用。")]),t._v(" "),a("li",[t._v("**Source：**根据请求源的 IP 的散列（hash）来选择要转发的服务器。这种方式可以一定程度上保证特定用户能连接到相同的服务器。")])]),t._v(" "),a("p",[t._v("如果你的应用需要处理状态而要求用户能连接到和之前相同的服务器。可以通过 Source 算法基于客户端的 IP 信息创建关联，或者使用粘性会话（sticky sessions）。")]),t._v(" "),a("p",[t._v("最后，想要解决负载均衡器的单点故障问题，可以将第二个负载均衡器连接到第一个上，从而形成一个集群。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-b3e69e976b5577457fcefc58f941fb8d_1440w.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("当主负载均衡器发生了故障，就需要将用户请求转到第二个负载均衡器。因为 DNS 更改通常会较长的时间才能生效，因此需要能灵活解决 IP 地址重新映射的方法，比如浮动 IP（floating IP）。这样域名可以保持和相同的 IP 相关联，而 IP 本身则能在服务器之间移动。")]),t._v(" "),a("p",[t._v("一个使用浮动 IP 的负载均衡架构示意图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/v2-3661c2082103036ecb23a3f29be740be_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("以上，大致就是负载均衡的工作原理。更多关于负载均衡技术的信息，可以参阅下面内容：")]),t._v(" "),a("p",[a("strong",[t._v("HAProxy")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts",target:"_blank",rel:"noopener noreferrer"}},[t._v("An Introduction to HAProxy and Load Balancing Concepts"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.digitalocean.com/community/tutorials/how-to-set-up-highly-available-haproxy-servers-with-keepalived-and-floating-ips-on-ubuntu-14-04",target:"_blank",rel:"noopener noreferrer"}},[t._v("How To Set Up Highly Available HAProxy Servers with Keepalived and Floating IPs on Ubuntu 14.04"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.digitalocean.com/community/tutorial_series/load-balancing-wordpress-with-haproxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Load Balancing WordPress with HAProxy"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Nginx")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.digitalocean.com/community/tutorials/understanding-nginx-http-proxying-load-balancing-buffering-and-caching",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding Nginx HTTP Proxying, Load Balancing, Buffering, and Caching"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.digitalocean.com/community/tutorials/how-to-set-up-nginx-load-balancing-with-ssl-termination",target:"_blank",rel:"noopener noreferrer"}},[t._v("How To Set Up Nginx Load Balancing with SSL Termination"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("原文："),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.digitalocean.com/community/tutorials/what-is-load-balancing",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is Load Balancing?"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=o.exports}}]);