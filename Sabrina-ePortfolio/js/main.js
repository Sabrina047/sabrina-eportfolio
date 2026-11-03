/* 首页轻量翻转效果。导航、内容和折叠面板不依赖此脚本。 */
'use strict';
document.querySelectorAll('.flip-control').forEach(function (button) {
  let pinned = false;
  let hovering = false;
  const front = button.querySelector('.flip-front');
  const back = button.querySelector('.flip-back');
  const subject = button.dataset.subject;
  const frontLabel = button.getAttribute('aria-label');
  const backLabel = subject + ': ' + back.textContent.replace(/\s+/g, ' ').trim() + ' Activate to show the front.';
  function update() {
    const flipped = pinned || hovering;
    button.classList.toggle('is-flipped', flipped);
    button.setAttribute('aria-pressed', String(pinned));
    button.setAttribute('aria-label', flipped ? backLabel : frontLabel);
    front.setAttribute('aria-hidden', String(flipped));
    back.setAttribute('aria-hidden', String(!flipped));
  }
  button.addEventListener('pointerenter', function (event) {
    if (event.pointerType === 'mouse') { hovering = true; update(); }
  });
  button.addEventListener('pointerleave', function () { hovering = false; update(); });
  button.addEventListener('click', function () { pinned = !pinned; hovering = false; update(); });
  button.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') { pinned = false; hovering = false; update(); }
  });
  button.addEventListener('blur', function () { pinned = false; hovering = false; update(); });
  update();
});
