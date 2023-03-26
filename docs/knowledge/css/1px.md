# 0.5px

## 线

```html
<style>
  .line {
    height: 1px;
    background-color: black;
  }
  .scale-half {
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
  }
</style>

<p>1px + scaleY(0.5)</p>
<div class="line scale-half"></div>
<p>0.5px</p>
<div class="line" style="height: 0.5px"></div>
<p>1px</p>
<div class="line"></div>
```

## 正方形

```html
<style>
  .box {
    position: relative;
    width: 100px;
    height: 100px;
  }
  .box::after {
    content: '';
    position: absolute;
    border: 1px solid black;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: top left;
    box-sizing: border-box;
  }
</style>

<div class="box"></div>
<div class="box" style="border: 1px solid black;"></div>
```
