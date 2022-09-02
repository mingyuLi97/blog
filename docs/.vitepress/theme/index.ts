import DefaultTheme from 'vitepress/theme';
import { initImgPreview } from './img-overlay';
import './img-overlay/index.css';

initImgPreview();
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    // app.component('MyGlobalComponent' /* ... */);
  }
};
