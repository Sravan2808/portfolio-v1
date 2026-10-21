(function oneko() {
  const isReducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  if (isReducedMotion) return;

  const nekoEl = document.createElement('div');
  let nekoPosX = 32, nekoPosY = 32;
  let mousePosX = 0, mousePosY = 0;
  let frameCount = 0, idleTime = 0, idleAnimation = null, idleAnimationFrame = 0;
  let dragging = false, grabDX = 0, grabDY = 0, dragFrame = 0, lastDragX = 0, lastDragY = 0;

  const nekoSpeed = 10;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
    scratchWallN: [[0, 0], [0, -1]],
    scratchWallS: [[-7, -1], [-6, -2]],
    scratchWallE: [[-2, -2], [-2, -3]],
    scratchWallW: [[-4, 0], [-4, -1]],
    tired: [[-3, -2]],
    sleeping: [[-2, 0], [-2, -1]],
    // dangling-by-the-scruff frames, already in oneko-cat.gif
    dragN: [[0, 0], [0, -1]],       // row1 col1, row2 col1
    dragW: [[-4, 0], [-4, -1]],     // row1 col5, row2 col5
    dragE: [[-2, -2], [-2, -3]],    // row3 col3, row4 col3
    dragS: [[-7, -1], [-6, -2]],
    dragStill: [[-3, -3]],          // row4 col4
    N: [[-1, -2], [-1, -3]],
    NE: [[0, -2], [0, -3]],
    E: [[-3, 0], [-3, -1]],
    SE: [[-5, -1], [-5, -2]],
    S: [[-6, -3], [-7, -2]],
    SW: [[-5, -3], [-6, -1]],
    W: [[-4, -2], [-4, -3]],
    NW: [[-1, 0], [-1, -1]],
  };

  function init() {
    nekoEl.id = 'oneko';
    nekoEl.ariaHidden = true;
    nekoEl.style.width = '32px';
    nekoEl.style.height = '32px';
    nekoEl.style.position = 'fixed';
    nekoEl.style.imageRendering = 'pixelated';
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.zIndex = 2147483647;
    nekoEl.style.cursor = 'grab';
    nekoEl.style.userSelect = 'none';

    let nekoFile = './oneko-dog.gif';
    const curScript = document.currentScript;
    if (curScript && curScript.dataset.dog) nekoFile = curScript.dataset.dog;
    nekoEl.style.backgroundImage = `url(${nekoFile})`;
    document.body.appendChild(nekoEl);

    function startDrag(x, y) {
      dragging = true;
      grabDX = x - nekoPosX;
      grabDY = y - nekoPosY;
      lastDragX = nekoPosX;
      lastDragY = nekoPosY;
      resetIdleAnimation();
      nekoEl.style.cursor = 'grabbing';
    }
    function moveDrag(x, y) {
      mousePosX = x;
      mousePosY = y;
      if (dragging) {
        nekoPosX = Math.min(Math.max(16, x - grabDX), window.innerWidth - 16);
        nekoPosY = Math.min(Math.max(16, y - grabDY), window.innerHeight - 16);
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
      }
    }
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      idleTime = 0;
      nekoEl.style.cursor = 'grab';
    }

    // mouse (desktop)
    document.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
    nekoEl.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startDrag(e.clientX, e.clientY);
    });
    document.addEventListener('mouseup', endDrag);

    // touch (mobile): the animal follows your finger, and can be dragged
    nekoEl.style.touchAction = 'none';
    nekoEl.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      e.preventDefault();
      startDrag(t.clientX, t.clientY);
    }, { passive: false });
    document.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      if (!dragging) { mousePosX = t.clientX; mousePosY = t.clientY; }
    }, { passive: true });
    document.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      if (dragging) e.preventDefault();
      moveDrag(t.clientX, t.clientY);
    }, { passive: false });
    document.addEventListener('touchend', endDrag);
    document.addEventListener('touchcancel', endDrag);

    window.requestAnimationFrame(onAnimationFrame);
  }

  let lastFrameTimestamp;
  function onAnimationFrame(timestamp) {
    if (!nekoEl.isConnected) return;
    if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
    if (timestamp - lastFrameTimestamp > 100) {
      lastFrameTimestamp = timestamp;
      frame();
    }
    window.requestAnimationFrame(onAnimationFrame);
  }

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;
    if (idleTime > 10 && Math.floor(Math.random() * 200) == 0 && idleAnimation == null) {
      let avalibleIdleAnimations = ['sleeping', 'scratchSelf'];
      if (nekoPosX < 32) avalibleIdleAnimations.push('scratchWallW');
      if (nekoPosY < 32) avalibleIdleAnimations.push('scratchWallN');
      if (nekoPosX > window.innerWidth - 32) avalibleIdleAnimations.push('scratchWallE');
      if (nekoPosY > window.innerHeight - 32) avalibleIdleAnimations.push('scratchWallS');
      idleAnimation = avalibleIdleAnimations[Math.floor(Math.random() * avalibleIdleAnimations.length)];
    }
    switch (idleAnimation) {
      case 'sleeping':
        if (idleAnimationFrame < 8) { setSprite('tired', 0); break; }
        setSprite('sleeping', Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192) resetIdleAnimation();
        break;
      case 'scratchWallN':
      case 'scratchWallS':
      case 'scratchWallE':
      case 'scratchWallW':
      case 'scratchSelf':
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) resetIdleAnimation();
        break;
      default:
        setSprite('idle', 0);
        return;
    }
    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;

    if (dragging) {
      dragFrame += 1;
      const mx = nekoPosX - lastDragX;
      const my = nekoPosY - lastDragY;
      lastDragX = nekoPosX;
      lastDragY = nekoPosY;
      let set = 'dragStill';
      if (Math.abs(mx) > 2 || Math.abs(my) > 2) {
        if (Math.abs(mx) > Math.abs(my)) set = mx < 0 ? 'dragW' : 'dragE';
        else set = my < 0 ? 'dragN' : 'dragS';
      }
      setSprite(set, dragFrame);
      return;
    }

    const diffX = nekoPosX - mousePosX;
    const diffY = nekoPosY - mousePosY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < nekoSpeed || distance < 48) { idle(); return; }

    idleAnimation = null;
    idleAnimationFrame = 0;

    if (idleTime > 1) {
      setSprite('alert', 0);
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    let direction;
    direction = diffY / distance > 0.5 ? 'N' : '';
    direction += diffY / distance < -0.5 ? 'S' : '';
    direction += diffX / distance > 0.5 ? 'W' : '';
    direction += diffX / distance < -0.5 ? 'E' : '';
    setSprite(direction, frameCount);

    nekoPosX -= (diffX / distance) * nekoSpeed;
    nekoPosY -= (diffY / distance) * nekoSpeed;
    nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
    nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
  }

  init();
})();