# 指令

## v-if 和 v-for 哪个优先级更高？

在 [vue2](https://github1s.com/vuejs/vue/blob/HEAD/src/compiler/codegen/index.ts#L84-L85) 中 v-for 优先于 v-if，在 [vue3](https://github1s.com/vuejs/core/blob/HEAD/packages/compiler-core/src/codegen.ts#L583) 中 v-if 优先于 v-for

真正项目使用时，一定要避免同时二者，一般的我们可以定义一个计算属性
