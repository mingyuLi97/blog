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
