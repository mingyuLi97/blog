<template>
  <div id="renderId">12312312</div>
</template>

<script setup lang="ts">
import { effect, onMounted, ref } from 'vue';

const count = ref(0);

onMounted(() => {
  // function rendered(dom: string, container: HTMLDivElement) {
  //   container.innerHTML = dom;
  // }

  function createRenderer(options) {
    function mountElement(vnode, container) {
      const el = document.createElement(vnode.type);

      if (vnode.props) {
        for (const k in vnode.props) {
          // 👇 等同 => el.setAttribute(k, vnode.props[k])
          el[k] = vnode.props[k];
        }
      }

      if (typeof vnode.children === 'string') {
        el.textContent = vnode.children;
      } else if (Array.isArray(vnode.children)) {
        vnode.children.forEach(child => {
          patch(null, child, el);
        });
      }

      container.appendChild(el);
    }

    /**
     *
     * @param n1 旧的 vnode
     * @param n2 新的 vnode
     * @param container 挂载的节点
     */
    function patch(n1, n2, container) {
      // 没有 n1 证明是第一次挂载
      if (!n1) {
        mountElement(n2, container);
      } else {
        // TODO：打补丁
      }
    }

    function render(vnode, container) {
      if (vnode) {
        // 新 vnode 存在，将其与旧 vnode 一起传递给 patch 函数，进行打补丁
        patch(container._vnode, vnode, container);
      } else {
        if (container._vnode) {
          // 旧 vnode 存在，新的不存在，说明是卸载操作 - unmount
          container.innerHTML = '';
        }
      }
      container._vnode = vnode;
    }
    return {
      render
    };
  }

  const rendered = createRenderer();
  rendered.render(vnode, document.querySelector('#renderId'));

  effect(() => {
    rendered(
      `<h1>${count.value}<h1>`,
      document.querySelector('#renderId') as any
    );
  });

  count.value++;
});
</script>

<style lang="scss" scoped></style>
