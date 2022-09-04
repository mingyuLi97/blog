import { DefaultTheme, UserConfig } from 'vitepress';
import MdItCustomAttrs from 'markdown-it-custom-attrs';

export const PREVIEW_KEY = '__preview__';

export function createPreviewDatasetObj() {
  const obj = {};
  obj[`data-${PREVIEW_KEY}`] = true;
  return obj;
}

export function initImgPreview() {
  let overlay: HTMLDivElement;
  let imgEl: HTMLImageElement;

  function open(url: string) {
    imgEl.src = url;

    overlay.classList.remove('hidden');
    overlay.classList.add('visible');
  }

  function close() {
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');
  }

  // initOverlay
  overlay = document.createElement('div');
  overlay.classList.add('image-overlay', 'hidden');
  overlay.addEventListener('click', close);
  preventScrollPenetration(overlay);

  // initImg
  imgEl = document.createElement('img');
  overlay.appendChild(imgEl);

  document.body.appendChild(overlay);
  document.body.addEventListener('click', e => {
    const el = e.target as HTMLElement;
    if (el.dataset[PREVIEW_KEY]) {
      open((el as HTMLImageElement).src);
    }
  });
}

// 阻止滚动事件穿透（图片滑动到底，触发外层滚动）
function preventScrollPenetration(el: HTMLElement) {
  let targetY: number;

  el.addEventListener('touchstart', e => {
    targetY = e.targetTouches[0].clientY;
  });

  el.addEventListener(
    'touchmove',
    e => {
      const _targetY = e.targetTouches[0].clientY;
      const { scrollHeight, scrollTop, clientHeight } = el;
      // 下滑
      if (_targetY > targetY && scrollTop <= 0) {
        e.preventDefault();
      }

      // 上滑
      if (_targetY < targetY && scrollTop + clientHeight >= scrollHeight) {
        e.preventDefault();
      }
    },
    false
  );
}

export function withImgPreview(config: UserConfig<DefaultTheme.Config>) {
  if (!config.markdown) {
    config.markdown = {};
  }
  const _old = config.markdown?.config;
  config.markdown.config = md => {
    md.use(MdItCustomAttrs, 'image', createPreviewDatasetObj());
    typeof _old === 'function' && _old(md);
  };

  if (!config.head) {
    config.head = [];
  }
  config.head.push(
    ['script', {}, jsCode],
    ['style', { type: 'text/css' }, cssCode]
  );
  return config;
}

const cssCode = `.image-overlay {
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0;
  transition: all 300ms;
  will-change: opacity;
  background-color: #000000;
  text-align: center;
  overflow-y: scroll;
  height: 100%;
  line-height: 100vh;
}

.image-overlay.visible {
  opacity: 1;
}

.image-overlay.hidden {
  opacity: 0;
  visibility: hidden;
}

.image-overlay img {
  display: inline-block;
  width: auto;
  height: auto;
  background-color: #ffffff;
}
`;

const jsCode = `document.addEventListener('DOMContentLoaded', function () {
  var overlay;
  var imgEl;
  function open(url) {
    imgEl.src = url;
    overlay.classList.remove('hidden');
    overlay.classList.add('visible');
  }
  function close() {
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');
  }
  // 阻止滚动事件穿透（图片滑动到底，触发外层滚动）
  function preventScrollPenetration(el) {
    var targetY;
    el.addEventListener('touchstart', function (e) {
      targetY = e.targetTouches[0].clientY;
    });
    el.addEventListener(
      'touchmove',
      function (e) {
        var _targetY = e.targetTouches[0].clientY;
        var scrollHeight = el.scrollHeight,
          scrollTop = el.scrollTop,
          clientHeight = el.clientHeight;
        // 下滑
        if (_targetY > targetY && scrollTop <= 0) {
          e.preventDefault();
        }
        // 上滑
        if (_targetY < targetY && scrollTop + clientHeight >= scrollHeight) {
          e.preventDefault();
        }
      },
      false
    );
  }
  // initOverlay
  overlay = document.createElement('div');
  overlay.classList.add('image-overlay', 'hidden');
  overlay.addEventListener('click', close);
  preventScrollPenetration(overlay);
  // initImg
  imgEl = document.createElement('img');
  overlay.appendChild(imgEl);
  document.body.appendChild(overlay);
  document.body.addEventListener('click', function (e) {
    var el = e.target;
    if (el.dataset['__preview__']) {
      open(el.src);
    }
  });
});
`;
