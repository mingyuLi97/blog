# flex

## 1.原理

- 给父盒子指定 `display:flex` 控制子盒子的位置和排列方式

## 2.父项属性

- **flex-direction**：设置主轴的方向

  `row` ：x 轴正方向（默认）

  `row-reverse`：x 轴负方向

  `column`：y 轴正方向

  `column-reverse`：y 轴负方向

- **justify-content**：设置主轴上的子元素的排列方式（使用时要确定主轴方向）

  `flex-start`：从头开始排列（默认）

  `flex-end`：从尾部开始排列

  `center`：在主轴中心对齐（如果主轴是 x 轴 水平居中）

  `space-around`：平均分配剩余空间（相当于给每个盒子加上一个相同的 margin）

  `space-between`：先两边贴边再分配剩余空间

- **flex-wrap**：设置子元素是否换行

  默认情况下，项目都排在一条线上，如果排不开将缩小每一个的宽度

  `nowrap`：不换行（默认）

  `wrap`：换行

- **align-items**：设置侧轴上的子元素排列方式（单行）

  `flex-start`：从头开始排列（默认）

  `flex-end`：从尾部开始排列

  `center`：居中对齐（如果主轴是 x 轴 垂直居中）

  `stretch`：拉伸（子盒子不要给高度，将子盒子拉伸充满父盒子）

- **align-content**：设置侧轴上的子元素排列方式（多行 - 必须存在换行）

  `flex-start`：从头开始排列

  `flex-end`：从尾部开始排列

  `center`：居中对齐

  `space-around`：平均分配剩余空间

  `space-between`：先两边贴边再分配剩余空间

  `stretch`：拉伸

- **flex-flow**：flex-direction 和 flex-wrap 的复合写方法

  ```css
  flex-direction: row;
  flex-wrap: wrap;
  /* 等价 */
  flex-flow: row wrap;
  ```

## 3.子项属性

- **flex**：属性定义子项目分配**剩余空间**，用 `flex` 来表示所占的**份数**

  ```css
  .item {
    flex: <number>; /* default 0*/
  }
  ```

- **align-self**：控制自己在侧轴的排列方式

  ```css
  span:nth-child(2) {
    /*只让第2个盒子下降到底部*/
    align-self: flex-end;
  }
  ```

- **order**：定义盒子的排列顺序（默认为 0）

## 参考

- [pink 老师视频教程](https://space.bilibili.com/415434293?from=search&seid=7794536082102280588)
