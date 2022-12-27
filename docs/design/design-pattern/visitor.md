# 访问者模式

## 定义

> 对于一组对象，在不改变数据结构的前提下增加作用于这些结构元素新的功能。

## 使用场景

1. 对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作
2. 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作"污染"这些对象的类，也不希望在增加新操作时修改这些类。

<<< docs/design/design-pattern/code/visitor.ts