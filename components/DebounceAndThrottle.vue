<template>
  <div style="flex-direction: column">
    <div v-if="props.type === 'debounce'">
      <button @click="debounceAdd('a')">debounce add num</button>
      <pre>debounce: {{ numA }}</pre>
    </div>
    <div v-if="props.type === 'throttle'">
      <button @click="throttleAdd('b')">throttleAdd add num</button>
      <pre>throttleAdd: {{ numB }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ type: 'debounce' | 'throttle' }>();

const numA = ref(0);
const numB = ref(0);

const debounceAdd = debounce(addNum);
const throttleAdd = throttle(addNum);

function addNum(target: 'a' | 'b') {
  console.log(`[DebounceAndThrottle] `, numA);
  target === 'a' ? numA.value++ : numB.value++;
}

function throttle(fn, time = 1000) {
  let prev = +new Date();
  let cur = 0;

  return function (...args) {
    const context = this;
    cur = +new Date();
    if (cur - prev >= time) {
      prev = cur;
      fn.apply(context, args);
    }
  };
}

function debounce(fn, wait = 500, immediate = true) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);

    if (immediate && !timer) {
      fn.apply(this, args);
      timer = setTimeout(function () {}, 0);
      return;
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
</script>

<style scoped>
div {
  display: flex;
}
button {
  margin-right: 20px;
  background: var(--vp-c-brand);
  border-radius: 5px;
  line-height: 30px;
  padding: 10px;
}
</style>
