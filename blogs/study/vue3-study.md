---
title: vue3前置
date: 2021-07-08
categories:
 - study
tags:
 -  vue3
---
# vue3前置

## 01-为什么学vue3

> 目标：了解vue3现状，以及它的优点，展望它的未来

Vue3现状：

- [vue-next (opens new window)](https://github.com/vuejs/vue-next/)2020年09月18日，正式发布vue3.0版本。但是由于刚发布周边生态不支持，大多数开发者处于观望。
- 现在主流组件库都已经发布了支持vue3.0的版本，其他生态也在不断地完善中，这是趋势。
  - [element-plus (opens new window)](https://element-plus.org/#/zh-CN)基于 Vue 3.0 的桌面端组件库
  - [vant (opens new window)](https://vant-contrib.gitee.io/vant/v3/#/zh-CN)vant3.0版本，有赞前端团队开源移动端组件库
  - [ant-design-vue (opens new window)](https://2x.antdv.com/components/overview/)Ant Design Vue 2.0版本，社区根据蚂蚁 ant design 开发

Vue3优点：

- 最火框架，它是国内最火的前端框架之一，[官方文档 (opens new window)](https://v3.vuejs.org/)[中文文档(opens new window)](https://v3.cn.vuejs.org/)
- 性能提升，运行速度事vue2.x的1.5倍左右
- 体积更小，按需编译体积比vue2.x要更小
- 类型推断，更好的支持Ts（typescript）这个也是趋势
- 高级给予，暴露了更底层的API和提供更先进的内置组件
- **★组合API (composition api)** ，能够更好的组织逻辑，封装逻辑，复用逻辑

Vue3展望：

- 这是趋势，越来越多的企业将来肯定会升级到Vue3.0
- 大型项目，由于对Ts的友好越来越多大型项目可以用Vue3.0

**总结：** 为什么要学 vue3 ?

- 适应市场学习流行的技术提高提升自己竞争力，给自己加薪。

## 02-vite基本使用

> 目标：了解vite是什么，使用vite创建vue项目，用来学习vue3知识

vite是什么：[官方文档(opens new window)](https://cn.vitejs.dev/)

- 它是一个更加轻量（热更新速度快，打包构建速度快）的vue项目脚手架工具。
- 相对于vue-cli它默认安装的插件非常少，随着开发过程依赖增多，需要自己额外配置。
- **所以：** 在单纯学习vue3语法会使用它，后面做项目的时候我们还是使用vue-cli

vite基本使用：

- 创建项目 `npm init vite-app 项目名称` 或者 `yarn create vite-app 项目名称`
- 安装依赖 `npm i` 或者 `yarn`
- 启动项目 `npm run dev` 或者 `yarn dev`

**总结：** vite是什么？

- 使用vite创建项目学习vue3语法，使用vue-cli创建项目正式开发。

## 03-创建vue应用

> 目标：掌握如何创建vue3应用实例

基本步骤：

- 在main.js中导入createApp函数
- 定义App.vue组件，导入main.js
- 使用createApp函数基于App.vue组件创建应用实例
- 挂载至index.html的#app容器

落地代码：

```
App.vue
<template>
  <div class="container">
    我是根组件
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
main.js
// 创建一个vue应用
// 1. 导入createApp函数
// 2. 编写一个根组件App.vue，导入进来
// 3. 基于根组件创建应用实例
// 4. 挂载到index.html的#app容器

import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')
```

**总结：** 如何创建vue应用实例？

- 通过createApp创建应用实例--->扩展功能将来都是在app上进行。

## 04-选项API和组合API

> 目标：理解什么是选项API写法，什么是组合API写法。

![1619278203339](https://zhoushugang.gitee.io/erabbit-client-pc-document/assets/img/1619277945556.271ddbaf.png)

什么是选项API写法：`Options ApI`

- 咱们在vue2.x项目中使用的就是

   

  ```
  选项API
  ```

   

  写法

  - 代码风格：data选项写数据，methods选项写函数...，一个功能逻辑的代码分散。

- 优点：易于学习和使用，写代码的位置已经约定好

- 缺点：代码组织性差，相似的逻辑代码不便于复用，逻辑复杂代码多了不好阅读。

- 补充：虽然提供mixins用来封装逻辑，但是出现数据函数覆盖的概率很大，不好维护。

```vue
<template>
  <div class="container">
    <div>鼠标位置：</div>
    <div>X轴：{{x}}</div>
    <div>Y轴：{{y}}</div>
    <hr>
    <div>{{count}} <button @click="add()">自增</button></div>  
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      x: 0,
      y: 0,
      count: 0
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.move)
  },
  methods: {
    move(e) {
      this.x = e.pageX
      this.y = e.pageY
    },
    add () {
        this.count++
    }    
  },
  destroyed() {
    document.removeEventListener('mousemove', this.move)
  }
}
</script>
```

什么是组合API写法：`Compositon API`

- 咱们在vue3.0项目中将会使用

   

  ```
  组合API
  ```

   

  写法

  - 代码风格：一个功能逻辑的代码组织在一起（包含数据，函数...）

- 优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护

- 缺点：需要有良好的代码组织能力和拆分逻辑能力，PS：大家没问题。

- 补充：为了能让大家较好的过渡到vue3.0的版本来，`也支持vue2.x选项API写法`

```vue
<template>
  <div class="container">
    <div>鼠标位置：</div>
    <div>X轴：{{x}}</div>
    <div>Y轴：{{y}}</div>
    <hr>
    <div>{{count}} <button @click="add()">自增</button></div>  
  </div>
</template>
<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue'
export default {
  name: 'App',
  setup () {
    // 鼠标移动逻辑
    const mouse = reactive({
      x: 0,
      y: 0
    })
    const move = e => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    onMounted(()=>{
      document.addEventListener('mousemove',move)
    })
    onUnmounted(()=>{
      document.removeEventListener('mousemove',move)
    })

    // 累加逻辑
    const count = ref(0)
    const add = () => {
      count.value ++ 
    }

    // 返回数据
    return {
      ...toRefs(mouse),
      count,
      add
    }
  }
}
</script>
```

**总结：**

- 知道选项API和组合API的写法区别，建议大家使用组合API在vue3.0项目中。

## 05-组合API-setup函数

> 目标：掌握setup函数的基本使用

使用细节：

- `setup` 是一个新的组件选项，作为组件中使用组合API的起点。
- 从组件生命周期来看，它的执行在组件实例创建之前`vue2.x的beforeCreate`执行。
- 这就意味着在`setup`函数中 `this` 还不是组件实例，`this` 此时是 `undefined`
- 在模版中需要使用的数据和函数，需要在 `setup` 返回。

演示代码：

```vue
<template>
  <div class="container">
    <h1 @click="say()">{{msg}}</h1>
  </div>
</template>
<script>
export default {
  setup () {
    console.log('setup执行了')
    console.log(this)
    // 定义数据和函数
    const msg = 'hi vue3'
    const say = () => {
      console.log(msg)
    }

    return { msg , say}
  },
  beforeCreate() {
    console.log('beforeCreate执行了')
    console.log(this)
  }
}
</script>
```

**总结：** `setup` 组件初始化之前执行，它返回的数据和函数可在模版使用。

## 06-组合API-生命周期

> 目标：掌握使用组合API写法的生命周期钩子函数

回顾vue2.x生命周期钩子函数：

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

认识vue3.0生命周期钩子函数

- `setup` 创建实例前
- `onBeforeMount` 挂载DOM前
- `onMounted` 挂载DOM后
- `onBeforeUpdate` 更新组件前
- `onUpdated` 更新组件后
- `onBeforeUnmount` 卸载销毁前
- `onUnmounted` 卸载销毁后

演示代码：

```vue
<template>
  <div class="container">
    container
  </div>
</template>
<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
  setup () {
    onBeforeMount(()=>{
      console.log('DOM渲染前',document.querySelector('.container'))
    })
    onMounted(()=>{
      console.log('DOM渲染后1',document.querySelector('.container'))
    })
    onMounted(()=>{
      console.log('DOM渲染后2',document.querySelector('.container'))
    })
  },
}
</script>
```

![1619283131573](data:image/png;base64,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)

**总结：** 组合API的生命周期钩子有7个，可以多次使用同一个钩子，执行顺序和书写顺序相同。

## 07-组合API-reactive函数

> 目标：掌握使用reactive函数定义响应式数据

定义响应式数据：

- reactive是一个函数，它可以定义一个复杂数据类型，成为响应式数据。

演示代码：

```vue
<template>
  <div class="container">
    <div>{{obj.name}}</div>
    <div>{{obj.age}}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup () {
    // 普通数据
    // const obj = {
    //   name: 'ls',
    //   age: 18
    // }
    const obj = reactive({
      name: 'ls',
      age: 18
    })

    // 修改名字
    const updateName = () => {
      console.log('updateName')
      obj.name = 'zs'
    }

    return { obj ,updateName}
  }
}
</script>
```

**总结：** 通常是用来定义响应式**对象数据**

## 08-组合API-toRef函数

> 目标：掌握使用toRef函数转换响应式对象中**某个**属性为单独响应式数据，并且值是关联的。

定义响应式数据：

- toRef是函数，转换**响应式对象**中**某个**属性为单独响应式数据，并且**值是关联的**。

演示代码：

```vue
<template>
  <div class="container">
    {{name}} <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive, toRef } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 响应式数据对象
    const obj = reactive({
      name: 'ls',
      age: 10
    })
    console.log(obj)
    // 2. 模板中只需要使用name数据
    // 注意：从响应式数据对象中解构出的属性数据，不再是响应式数据
    // let { name } = obj 不能直接解构，出来的是一个普通数据
    const name = toRef(obj, 'name')
    // console.log(name)
    const updateName = () => {
      console.log('updateName')
      // toRef转换响应式数据包装成对象，value存放值的位置
      name.value = 'zs'
    }

    return {name, updateName}
  }
}
</script>
<style scoped lang="less"></style>
```

使用场景：有一个响应式对象数据，但是模版中只需要使用其中一项数据。

## 09-组合API-toRefs函数

> 目标：掌握使用toRefs函数定义转换响应式中**所有**属性为响应式数据，通常用于解构|展开reactive定义对象。

定义响应式数据：

- toRefs是函数，转换**响应式对象**中所有属性为单独响应式数据，对象成为普通对象，并且**值是关联的**

演示代码：

```vue
<template>
  <div class="container">
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 响应式数据对象
    const obj = reactive({
      name: 'ls',
      age: 10
    })
    console.log(obj)
    // 2. 解构或者展开响应式数据对象
    // const {name,age} = obj
    // console.log(name,age)
    // const obj2 = {...obj}
    // console.log(obj2)
    // 以上方式导致数据就不是响应式数据了
    const obj3 = toRefs(obj)
    console.log(obj3)

    const updateName = () => {
      // obj3.name.value = 'zs'
      obj.name = 'zs'
    }

    return {...obj3, updateName}
  }
}
</script>
<style scoped lang="less"></style>
```

使用场景：剥离响应式对象（解构|展开），想使用响应式对象中的多个或者所有属性做为响应式数据。

## 10-组合API-ref函数

> 目标：掌握使用ref函数定义响应式数据，一般用于简单类型数据

定义响应式数据：

- ref函数，常用于简单数据类型定义为响应式数据
  - 再修改值，获取值的时候，需要.value
  - 在模板中使用ref申明的响应式数据，可以省略.value

演示代码：

```vue
<template>
  <div class="container">
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. name数据
    const name = ref('ls')
    console.log(name)
    const updateName = () => {
      name.value = 'zs'
    }
    // 2. age数据
    const age = ref(10)

    // ref常用定义简单数据类型的响应式数据
    // 其实也可以定义复杂数据类型的响应式数据
    // 对于数据未之的情况下 ref 是最适用的
    // const data = ref(null)
    // setTimeout(()=>{
    //   data.value = res.data
    // },1000)

    return {name, age, updateName}
  }
}
</script>
```

**使用场景：**

- **当你明确知道需要的是一个响应式数据 \*对象\* 那么就使用 reactive 即可**
- **其他情况使用ref**

## 11-知识运用案例

> 目标：利用所学知识完成组合API实例

基本步骤：

- 记录鼠标坐标
  - 定义一个响应式数据对象，包含x和y属性。
  - 在组件渲染完毕后，监听document的鼠标移动事件
  - 指定move函数为事件对应方法，在函数中修改坐标
  - 在setup返回数据，模版中使用
- 累加1功能
  - 定义一个简单数据类型的响应式数据
  - 定义一个修改数字的方法
  - 在setup返回数据和函数，模板中使用

落的代码：

```vue
<template>
  <div class="container">
    <div>坐标</div>
    <div>x: {{x}}</div>
    <div>y: {{y}}</div>
    <hr>
    <div>{{count}} <button @click="add">累加1</button></div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, reactive , ref, toRefs} from 'vue'
const useMouse = () => {
    // 1. 记录鼠标坐标
    // 1.1 申明一个响应式数据，他是一个对象，包含x y
    const mouse = reactive({
      x: 0,
      y: 0
    })
    // 1.3 修改响应式数据
    const move = (e) => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    // 1.2 等dom渲染完毕。去监听事件
    onMounted(()=>{
      document.addEventListener('mousemove', move)
    })
    // 1.4 组件消耗，删除事件
    onUnmounted(()=>{
      document.removeEventListener('mousemove', move)
    })

    return mouse
}
export default {
  name: 'App',
  setup () {

    const mouse = useMouse()

    // 2. 数字累加
    const count = ref(0) 
    const add = () => {
      count.value ++
    }



    return { ...toRefs(mouse), count, add }
  }
}
</script>
<style scoped lang="less"></style>
```

**总结：** 体会组合API的写法，尝试组织可读性高的代码。

## 12-组合API-computed函数

> 目标：掌握使用computed函数定义计算属性

定义计算属性：

- computed函数，是用来定义计算属性的，计算属性不能修改。

基本使用：

```vue
<template>
  <div class="container">
    <div>今年：{{age}}岁</div>
    <div>后年：{{newAge}}岁</div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据。
    const age = ref(16)
    // 得到后年的年龄
    const newAge = computed(()=>{
      // 该函数的返回值就是计算属性的值
      return age.value + 2
    })

    return {age, newAge}
  }
}
</script>
```

高级用法：

```vue
<template>
  <div class="container">
    <div>今年：{{age}}岁</div>
    <div>后年：{{newAge}}岁</div>
    <!-- 使用v-model绑定计算属性 -->
    <input type="text" v-model="newAge">
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据。
    const age = ref(16)
    // 得到后年的年龄
    // const newAge = computed(()=>{
    //   // 该函数的返回值就是计算属性的值
    //   return age.value + 2
    // })

    // 计算属性高级用法，传人对象
    const newAge = computed({
      // get函数，获取计算属性的值
      get(){
        return age.value + 2
      },
      // set函数，当你给计算属性设置值的时候触发
      set (value) {
        age.value = value - 2
      }
    })


    return {age, newAge}
  }
}
</script>
```

目的：让计算属性支持双向数据绑定。

总结：计算属性两种用法

- 给computed传入函数，返回值就是计算属性的值
- 给computed传入对象，get获取计算属性的值，set监听计算属性改变。

## 13-组合API-watch函数

> 目标：掌握使用watch函数定义侦听器

定义计算属性：

- watch函数，是用来定义侦听器的

监听ref定义的响应式数据

监听多个响应式数据数据

监听reactive定义的响应式数据

监听reactive定义的响应式数据，某一个属性

深度监听

默认执行

```js
<template>
  <div class="container">
    <div>
      <p>count的值：{{count}}</p>
      <button @click="add">改数据</button>
    </div>
    <hr>
    <div>
      <p>{{obj.name}}</p>
      <p>{{obj.age}}</p>
      <p>{{obj.brand.name}}</p>
      <button @click="updateName">改名字</button>
      <button @click="updateBrandName">改品牌名字</button>
    </div>
  </div>
</template>
<script>
import { reactive, ref, watch } from 'vue'
export default {
  name: 'App',
  setup () {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    // 当你需要监听数据的变化就可以使用watch
    // 1. 监听一个ref数据
    // 1.1 第一个参数  需要监听的目标
    // 1.2 第二个参数  改变后触发的函数
    // watch(count, (newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })


    const obj = reactive({
      name: 'ls',
      age: 10,
      brand: {
        id: 1,
        name: '宝马'
      }
    })
    const updateName = () => {
      obj.name = 'zs'
    }
    const updateBrandName = () => {
      obj.brand.name = '奔驰'
    }
    // 2. 监听一个reactive数据
    watch(obj, ()=>{
      console.log('数据改变了')
    })

    watch(()=>obj.brand, ()=>{
      console.log('brand数据改变了')
    },{
      // 5. 需要深度监听
      deep: true,
      // 6. 想默认触发
      immediate: true
    })

    // 3. 监听多个数据的变化
    // watch([count, obj], ()=>{
    //   console.log('监听多个数据改变了')
    // }) 


    // 4. 此时监听对象中某一个属性的变化 例如：obj.name 
    // 需要写成函数返回该属性的方式才能监听到
    // watch(()=>obj.name,()=>{
    //   console.log('监听obj.name改变了')
    // })

    return {count, add, obj, updateName, updateBrandName}
  }
}
</script>
```

**总结：** 掌握watch的各种用法。

## 14-组合API-ref属性

> 目标：掌握使用ref属性绑定DOM或组件

获取DOM或者组件实例可以使用ref属性，写法和vue2.0需要区分开

获取单个DOM或者组件

```vue
<template>
  <div class="container">
    <!-- vue2.0 获取单个元素 -->
    <!-- 1. 通过ref属性绑定该元素 -->
    <!-- 2. 通过this.$refs.box获取元素 -->
    <!-- <div ref="box">我是box</div> -->
    <!-- vue2.0 获取v-for遍历的多个元素 -->
    <!-- 1. 通过ref属性绑定被遍历元素 -->
    <!-- 2. 通过this.$refs.li 获取所有遍历元素  -->
    <!-- <ul>
      <li v-for="i in 4" :key="i" ref="li">{{i}}</li>
    </ul> -->

    <!-- 单个元素 -->
    <div ref="dom">我是box</div>
    <!-- 被遍历的元素 -->
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">第{{i}}LI</li>
    </ul>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 获取单个元素
    // 1.1 先定义一个空的响应式数据ref定义的
    // 1.2 setup中返回该数据，你想获取那个dom元素，在该元素上使用ref属性绑定该数据即可。
    const dom = ref(null)
    onMounted(()=>{
       console.log(dom.value)
    })
  }
}
</script>
<style scoped lang="less"></style>
```

获取v-for遍历的DOM或者组件

```js
    // 2. 获取v-for遍历的元素
    // 2.1 定义一个空数组，接收所有的LI
    // 2.2 定义一个函数，往空数组push DOM
    const domList = []
    const setDom = (el) => {
      domList.push(el)
    }
    onMounted(()=>{
      console.log(domList)
    })
    return {dom, setDom}
```

**总结：**

- 单个元素：先申明ref响应式数据，返回给模版使用，通过ref绑定数据
- 遍历的元素：先定义一个空数组，定一个函数获取元素，返回给模版使用，通过ref绑定这个函数

## 15-组合API-父子通讯

> 目标：掌握使用props选项和emits选项完成父子组件通讯

父传子：

```vue
<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr>
    <Son :money="money" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递给子组件
  setup () {
    const money = ref(100)
    return { money }
  }
}
</script>
<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{money}}</p>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'Son',
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    // 获取父组件数据money
    console.log(props.money)
  }
}
</script>
```

子传父：

```diff
<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr>
+    <Son :money="money" @change-money="updateMoney" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递给子组件
  setup () {
    const money = ref(100)
+    const updateMoney = (newMoney) => {
+      money.value = newMoney
+    }
+    return { money , updateMoney}
  }
}
</script>
<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{money}}</p>
+    <button @click="changeMoney">花50元</button>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'Son',
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  // props 父组件数据
  // emit 触发自定义事件的函数
+  setup (props, {emit}) {
    // 获取父组件数据money
    console.log(props.money)
    // 向父组件传值
+    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money需要变成50
+      emit('change-money', 50)
+    }
+    return {changeMoney}
  }
}
</script>
```

扩展：

- 在vue2.x的时候 `.sync` 除去v-model实现双向数据绑定的另一种方式

```vue
<!-- <Son :money='money' @update:money="fn"  /> -->
<Son :money.sync='money'  />
```

- 在vue3.0的时候，使用 `v-model:money="money"` 即可

```vue
    <!-- <Son :money="money" @update:money="updateMoney" /> -->
    <Son v-model:money="money" />
```

**总结：**

- 父传子：在setup种使用props数据 `setup(props){ // props就是父组件数据 }`
- 子传父：触发自定义事件的时候emit来自 `setup(props,{emit}){ // emit 就是触发事件函数 }`
- 在vue3.0中 `v-model` 和 `.sync` 已经合并成 `v-model` 指令

## 16-组合API-依赖注入

> 目标：掌握使用provide函数和inject函数完成后代组件数据通讯

使用场景：有一个父组件，里头有子组件，有孙组件，有很多后代组件，共享父组件数据。

演示代码：

```vue
<template>
  <div class="container">
    <h1>父组件 {{money}} <button @click="money=1000">发钱</button></h1>
    <hr>
    <Son />
  </div>
</template>
<script>
import { provide, ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  setup () {
    const money = ref(100)
    const changeMoney = (saleMoney) => {
      console.log('changeMoney',saleMoney)
      money.value = money.value - saleMoney
    }
    // 将数据提供给后代组件 provide
    provide('money', money)
    // 将函数提供给后代组件 provide
    provide('changeMoney', changeMoney)

    return { money }
  }
}
</script>
<style scoped lang="less"></style>
<template>
  <div class="container">
    <h2>子组件 {{money}}</h2>
    <hr>
    <GrandSon />
  </div>
</template>
<script>
import { inject } from 'vue'
import GrandSon from './GrandSon.vue'
export default {
  name: 'Son',
  components: {
    GrandSon
  },
  setup () {
    // 接收祖先组件提供的数据
    const money = inject('money')
    return { money }
  }
}
</script>
<style scoped lang="less"></style>
<template>
  <div class="container">
    <h3>孙组件 {{money}} <button @click="fn">消费20</button></h3>
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'GrandSon',
  setup () {
    const money = inject('money')
    // 孙组件，消费50，通知父组件App.vue组件，进行修改
    // 不能自己修改数据，遵循单选数据流原则，大白话：数据谁定义谁修改
    const changeMoney = inject('changeMoney')
    const fn = () => {
      changeMoney(20)
    }
    return {money, fn}
  }
}
</script>
<style scoped lang="less"></style>
```

**总结：**

- provide函数提供数据和函数给后代组件使用
- inject函数给当前组件注入provide提供的数据和函数

## 17-补充-v-model语法糖

> 目标：掌握vue3.0的v-model语法糖原理

在vue2.0中v-mode语法糖简写的代码 `<Son :value="msg" @input="msg=$event" />`

在vue3.0中v-model语法糖有所调整：`<Son :modelValue="msg" @update:modelValue="msg=$event" />`

演示代码：

```vue
<template>
  <div class="container">
    <!-- 如果你想获取原生事件事件对象 -->
    <!-- 如果绑定事函数 fn fn(e){ // e 就是事件对象 } -->
    <!-- 如果绑定的是js表达式  此时提供一个默认的变量 $event -->
    <h1 @click="$event.target.style.color='red'">父组件 {{count}}</h1>
    <hr>
    <!-- 如果你想获取自定义事件  -->
    <!-- 如果绑定事函数 fn fn(data){ // data 触发自定义事件的传参 } -->
    <!-- 如果绑定的是js表达式  此时 $event代表触发自定义事件的传参 -->
    <!-- <Son :modelValue="count" @update:modelValue="count=$event" /> -->
    <Son v-model="count" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  setup () {
    const count = ref(10)
    return { count }
  }
}
</script>
<template>
  <div class="container">
    <h2>子组件 {{modelValue}} <button @click="fn">改变数据</button></h2>
  </div>
</template>
<script>
export default {
  name: 'Son',
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup (props, {emit}) {
    const fn = () => {
      // 改变数据
      emit('update:modelValue', 100)
    }
    return { fn }
  }
}
</script>
```

**总结：** vue3.0封装组件支持v-model的时候，父传子`:modelValue` 子传父 `@update:modelValue`

**补充：** vue2.0的 `xxx.sync` 语法糖解析 父传子 `:xxx` 子传父 `@update:xxx` 在vue3.0 使用 `v-model:xxx` 代替。

## 18-补充-mixins语法

> 目标：掌握mixins语法的基本使用，vue2.x封装逻辑的方式，vue3.0建议使用组合API

官方话术：

- 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

理解全局混入：所有组件混入了这些逻辑代码

```js
// 全局混入 全局mixin
// vue2.0 写法  Vue.mixin({})
app.mixin({
  methods: {
    say () {
      console.log(this.$el,'在mounted中调用say函数')
    }
  },
  mounted () {
    this.say()
  }
})
<template>
  <div class="container1">
    <h1> 作者：周杰伦  <a href="javascript:;">关注</a> </h1>
    <hr>
    <Son />
  </div>
</template>
<script>
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  }
}
</script>
<template>
  <div class="container2">
    <h2> 作者：周杰伦  <button>关注</button> </h2>
  </div>
</template>
<script>
export default {
  name: 'Son'
}
</script>
<style scoped lang="less"></style>
```

理解局部混入：通过mixins选项进行混入

```js
// 配置对象
export const followMixin =  {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    followFn () {
      this.loading = true
      // 模拟请求
      setTimeout(()=>{
        // 省略请求代码
        this.loading = false
      },2000)
    }
  }
}
<template>
  <div class="container1">
    <h1> 作者：周杰伦  <a href="javascript:;" @click="followFn">{{loading?'请求中...':'关注'}}</a> </h1>
    <hr>
    <Son />
  </div>
</template>
<script>
import Son from './Son.vue'
import {followMixin} from './mixins'
export default {
  name: 'App',
  components: {
    Son
  },
  mixins: [followMixin]
}
</script>
<template>
  <div class="container2">
    <h2> 作者：周杰伦  <button @click="followFn">{{loading?'loading...':'关注'}}</button> </h2>
  </div>
</template>
<script>
import {followMixin} from './mixins'
export default {
  name: 'Son',
  mixins: [followMixin]
}
</script>
<style scoped lang="less"></style>
```

**总结：** 在vue2.0中一些可复用的逻辑可以使用mixins来封装，当是需要考虑逻辑代码冲突问题。vue3.0的组合API很好的解决了这个问题，就不在推荐使用mixins了。

