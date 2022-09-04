document.addEventListener('DOMContentLoaded', function () {
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
