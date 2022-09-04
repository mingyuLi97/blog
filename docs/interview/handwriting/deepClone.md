# 深拷贝

<script setup>
import '@components/deepClone';
</script>

```javascript
function deepClone(obj, hash = new WeakMap()) {
  // 处理 boolean number string undefined null bigint symbol
  if (typeof obj !== 'object' || obj == null) return obj;

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Error) return new Error(obj);

  if (hash.has(obj)) return hash.get(obj);

  const target = new obj.constructor(); // 通过原型创建出实例，可能为 {}、[] 等
  hash.set(obj, target);

  for (let k in obj) {
    if (Object.hasOwnProperty.call(obj, k)) {
      target[k] = deepClone(obj[k], hash);
    }
  }

  return target;
}
```
