# 生命周期

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202210032141073.png)

## Vue3 setup

setup 选项是在组件创建之前, props 被解析之后执行，是组合式 API 的入口。

:::warning
在 setup 中你应该避免使用 this，因为它不会找到组件实例。setup 的调用发生在 data property、computed property 或 methods 被解析之前，所以它们无法在 setup 中被获取。
:::

## Vue2 vs Vue3

| Vue2          | Vue3            |
| ------------- | --------------- |
| beforeCreate  | setup           |
| created       | setup           |
| beforeMount   | onBeforeMount   |
| mounted       | onMounted       |
| beforeUpdate  | onBeforeUpdate  |
| updated       | onUpdated       |
| activated     | onActivated     |
| deactivated   | onDeactivated   |
| beforeDestroy | onBeforeUnmount |
| destroyed     | onUnmounted     |

## 父子组件生命周期执行顺序

父创建 **->** 子创建 **->** 子挂载 **->** 父挂载

#### 加载渲染过程

父 beforeCreate **->** 父 created **->** 父 beforeMount **->** 子 beforeCreate **->** 子 created **->** 子 beforeMount **->** 子 mounted **->** 父 mounted

#### 更新过程

父 beforeUpdate **->** 子 beforeUpdate **->** 子 updated **->** 父 updated

#### 销毁过程

父 beforeDestroy **->** 子 beforeDestroy **->** 子 destroyed **->** 父 destroyed
