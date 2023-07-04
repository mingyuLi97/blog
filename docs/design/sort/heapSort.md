# 堆排序

![](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209261913319.gif)

## 大顶堆

![大顶堆](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202304102235422.png)

下标为 i 的节点：

- 其父节点的坐标为 `(i - 1) >> 1`
- 左孩子 `i * 2 + 1`
- 右孩子 `i * 2 + 2`

## 小顶堆

![小顶堆](https://limy-1309594960.cos.ap-beijing.myqcloud.com/202304102240871.png)

<<< ./snippets/heapSort.js#code
