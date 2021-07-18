---
title: vue动画
date: 2021-07-18
categories:
 - study
tags:
 -  vue动画
---
## vue动画

> **目标：** 知道vue中如何使用动画，知道Transition组件使用。

当vue中，显示隐藏，创建移除，一个元素或者一个组件的时候，可以通过transition实现动画。

![1616576876892](http://zhoushugang.gitee.io/erabbit-client-pc-document/assets/img/1616576876892.c417f529.png)

如果元素或组件离开，完成一个淡出效果：

```vue
<transition name="fade">
  <p v-if="show">100</p>
</transition>
.fade-leave {
    opacity: 1
}
.fade-leave-active {
    transition: all 1s;
}
.fade-leave-to {
    opcaity: 0
}
```

* 进入（显示，创建）

- v-enter 进入前 （vue3.0 v-enter-from）
- v-enter-active 进入中
- v-enter-to 进入后

- 离开（隐藏，移除）
  - v-leave 进入前 （vue3.0 v-leave-from）
  - v-leave-active 进入中
  - v-leave-to 进入后

多个transition使用不同动画，可以添加nam属性，name属性的值替换v即可。