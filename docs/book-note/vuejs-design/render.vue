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
          // ð ç­å => el.setAttribute(k, vnode.props[k])
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
     * @param n1 æ§ç vnode
     * @param n2 æ°ç vnode
     * @param container æè½½çèç¹
     */
    function patch(n1, n2, container) {
      // æ²¡æ n1 è¯ææ¯ç¬¬ä¸æ¬¡æè½½
      if (!n1) {
        mountElement(n2, container);
      } else {
        // TODOï¼æè¡¥ä¸
      }
    }

    function render(vnode, container) {
      if (vnode) {
        // æ° vnode å­å¨ï¼å°å¶ä¸æ§ vnode ä¸èµ·ä¼ éç» patch å½æ°ï¼è¿è¡æè¡¥ä¸
        patch(container._vnode, vnode, container);
      } else {
        if (container._vnode) {
          // æ§ vnode å­å¨ï¼æ°çä¸å­å¨ï¼è¯´ææ¯å¸è½½æä½ - unmount
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
