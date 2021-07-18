---
title: 保姆级教程，如何发现 GitHub 上的优质项目？
date: 2021-07-18
categories:
 - study
tags:
 -  github优秀项目
---
![img](https://user-gold-cdn.xitu.io/2020/7/29/17398427abecae3b?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1)

# 保姆级教程，如何发现 GitHub 上的优质项目？

> 文章转载 请先看再点赞，给自己一点思考的时间，微信搜索【**沉默王二**】关注这个靠才华苟且的程序员。
> 本文 **GitHub** [github.com/itwanger](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fqinggee%2Fitwanger.github.io) 已收录，里面还有一线大厂整理的面试题，以及我的系列文章。

前几天，看到一位朋友程序员小浩在文章里分享他的开源项目，上了 GitHub 的趋势日榜单，并且成功排名第一。我表示很酸，因为我也想有一个上千 star 的开源项目，到时候就可以肆无忌惮地吹牛逼了。

对于优秀的程序员来说，搜索引擎就该用 Google，找开源项目就该用 GitHub，找答案就该用 Stack Overflow，对吧？

如果能够拥有一个 star 数上万的 GitHub 仓库，那简直就是偶像级的开源作者。出去找工作的时候，在简历上就那么一晒，面试官就哑口无言了。

不过现实往往比较骨干，来看看我的 GitHub 仓库就能感受到了。

![img](https://user-gold-cdn.xitu.io/2020/7/29/173984252f66592a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

最多 star 的还是多年前写的一个二维码分享海报的仓库，仅仅 48 个，惨不忍睹啊，可怜得我一把鼻涕一把泪啊。可能有些读者看到这幅图后会觉得不舒服，“二哥，你可是我的偶像啊，怎么 GitHub 这么弱！”

但在我看来，挺正常的，一个人的精力是有限的，做到全方面优秀的都是屈指可数。况且，我看到了巨大的潜力，对，我的 GitHub 上升空间很大，只要我能拼一拼，超过 48 个 star 的仓库应该能实现吧？！

对于大多数普通的程序员来说，包括我，虽然不能成为优秀的开源作者，但利用 GitHub 找到一些优质的开源项目还是很有必要的。造轮子咱不行，“拿来主义”还不行？那怎么找到这些优质的开源项目呢？

### 01、GitHub 上直接搜项目

GitHub 主页上会有一个搜索框，直接在里面搜项目的关键字就行了，比如说微信支付这个关键字。

![img](https://user-gold-cdn.xitu.io/2020/7/29/17398425322fc619?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

目前能搜到 2754 个仓库，比较多。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842534e3db13?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

这种搜索的方式等同于在搜索框中加了一个 `in:description` 或者 `in:about`。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842532d33fbf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842534f7795f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

那这个 description 和 about 又是什么意思呢？指的是仓库的简介，见下图的红色框区域。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842539f63648?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

那 in 后的关键字还有没有别的呢？有，可以是 `in:readme`。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842555ea01fc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

对于大部分中文的仓库来说，readme 部分是最详细的。区分一个仓库优质不优质，就看 readme 部分写得够不够认真。

我的个人博客用的 GitHub Pages， 地址如下：

[github.com/itwanger/it…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fitwanger%2Fitwanger.github.io)

我昨天刚把这个仓库的 readme 整了整，比之前看起来高大上多了。自我感觉良好，以后我要花点精力好好维护下，读者朋友们敬请期待啊，我敢肯定，在不久的将来，star 数肯定会超过 48，我敢赌 100 块！

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842556a35861?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

那通过 `in:readme` 后的仓库数量有点多，达到了 16432 个，也太多了，怎么能精选一下呢？

一个仓库之所以优质，就在于它的 star 数是否足够多，因此可以在后面加上 `stars>2000`，这样过滤后的结果就少了很多。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842566e2de81?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 02、GitHub 上直接搜作者

重要的参数有下面这 4 个，location 是所在的国家，language 是编程语言，followers 是关注人数，fullname 是作者名。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842556b31a74?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

比如我搜 `location:china followers:>4000`，注意左侧选中「Users」，排名比较靠前的两位是阮一峰和尤雨溪大佬。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842575a47d60?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

查看一下尤雨溪大佬的主页，头像真的非常清秀帅气，我第一印象知道想到了谁吗？徐志摩。前端框架 Vue.js 的作者， 真的非常牛逼了。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842575d29bcb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

作者牛逼，那自然他的项目也就优质——基本上是个不可推翻的定理。

### 03、Google 直接搜

还拿之前“微信支付”这个关键字，百度搜到的结果如下所示：

![img](https://user-gold-cdn.xitu.io/2020/7/29/173984257c7e1223?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

换成 Google 呢？

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842584e8e626?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

对，第一个就是我想要的。

![img](https://user-gold-cdn.xitu.io/2020/7/29/1739842586a72eca?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

star 数高达 20k，可以说非常优质的项目了。我在做商城的时候就用的这个，微信开发的 Java SDK，支持包括微信支付、开放平台、公众号、企业微信/企业号、小程序等微信功能的后端开发。

### 04、GitHub Trend

对，就是文章开头提到的 GitHub 趋势榜，地址如下：

[github.com/trending](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftrending)

就如宣传语里说的，了解 GitHub 社区今天最激动人心的仓库或者作者。下图中第四位就是小浩的，牛逼牛逼。

![img](https://user-gold-cdn.xitu.io/2020/7/29/173984258ec86a24?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

可以选择编程语言，也可以选择日榜、周榜、月榜。

选择作者的话，可以看到一些优质的项目。

![img](https://user-gold-cdn.xitu.io/2020/7/29/173984259b512700?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 05、GitHub Topics

GitHub Topics 展示了最新和最流行的讨论主题，在这里不仅能够看到开源项目，还能看到更多非开发技术的讨论主题。地址如下：

[github.com/topics](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftopics)

不过，主题这块有个缺点，就是它的排序是按照首字母从 A 到 Z 的排列，这就导致如果我想看 Java 的话，就需要 load more 再 load more，再 load more，嗯，还是看不到。

![img](https://user-gold-cdn.xitu.io/2020/7/29/17398425b4aa0696?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

希望 GitHub 在这方面改进一下，最起码可以选择一下。幸好幸好，load more 下面有一个 popular，里面有 Java 的标签。

![img](https://user-gold-cdn.xitu.io/2020/7/29/173984259eb121d5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

点击标签就可以跳转到 Java 的主题了，排名第二的竟然是我的好朋友 guide 哥的仓库，star 已经 84k+ 了，牛逼牛逼。

![img](https://user-gold-cdn.xitu.io/2020/7/29/17398425b4d713ed?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 06、GitHub Explore

Explore 就是探索的意思，它会根据你的喜欢智能化地推荐一些项目。地址如下所示：

[github.com/explore](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fexplore)

我不知道这个探索算法是怎么算的，感觉给我推荐的项目还不够优秀，可能是我自己的 GitHub 还不够优秀吧。

![img](https://user-gold-cdn.xitu.io/2020/7/29/17398425b7ddc7b9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 07、牛人推荐

很多大学生读者问我，“二哥，听说现在公司招聘的时候非常看重项目经验，可我在大学的时候没有项目经验啊！怎么办？”

看 GitHub 上那些大牛们的开源项目，就是增加项目经验的一个很好的办法。把开源项目 down 到本地，然后看源码自己研究，顺带在原有的基础上补充一些功能，是不是就有项目经验了？

本身这些开源项目都是非常优质的，但功能并不会非常全面，毕竟作者的精力和时间有限。

虽然我不是 GitHub 上牛逼的作者，但摸着良心讲，开发经验还是非常充足的，所以我推荐的项目还是非常值得去学习的。

第一个，微人事（vhr），我的好朋友江南一点雨的。

![img](https://user-gold-cdn.xitu.io/2020/7/29/17398425ba81eda8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

推荐很多次了，我觉得有必要找他要一个贡献者的角色，以后我也可以出去吹牛逼了。

第二个，电商系统（mall），我的好朋友 macrozheng 的。

![img](https://user-gold-cdn.xitu.io/2020/7/29/17398425ca35eb65?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

我们公司的商城系统升级的时候，就用了他这个作为地基，真的是非常给力的一个开源项目。

### 08、最后

发现了优质项目，不只是要去 star 它，最好 fork 到自己名下，去研究研究源码。

如果可以的话，可以尝试去解决几个 issue，提几个 pull Request，如果能混到一个贡献者的名额，就开心了哈，毕竟自己头像出现在 readme 里也是非常骄傲的一件事。

最后，希望读者朋友们都能够玩的开心，毕竟 GitHub 是全球最大的同性交友社区（狗头）。

------

我是沉默王二，一枚有颜值却靠才华苟且的程序员。**关注即可提升学习效率，别忘了三连啊，点赞、收藏、留言，我不挑，奥利给**。

最近，有很多读者问我，有没有大厂的面经？那问二哥就对了，微信搜索「沉默王二」，回复「**面试**」就有三份我精心为你准备的刷题宝藏，本文 **GitHub** [github.com/itwanger](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fqinggee%2Fitwanger.github.io) 已收录，欢迎 star。