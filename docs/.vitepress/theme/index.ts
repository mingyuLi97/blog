import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, watch } from 'vue';
import mediumZoom from 'medium-zoom';
import './global.css';
import { useRoute } from 'vitepress';

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(initZoom)
    );
  }
};
