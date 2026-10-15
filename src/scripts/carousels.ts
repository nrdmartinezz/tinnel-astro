/** Scroll-snap carousels. Each root needs a track plus previous and next buttons. */
export function initCarousels(): void {
  for (const root of document.querySelectorAll<HTMLElement>('[data-carousel]')) {
    const track = root.querySelector<HTMLElement>('[data-carousel-track]');
    const prev = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
    if (!track || !prev || !next) continue;

    track.style.scrollBehavior = 'auto';

    const metrics = () => {
      const card = track.querySelector<HTMLElement>(':scope > *');
      const styles = getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;
      const step = (card?.offsetWidth ?? track.clientWidth) + gap;
      const max = Math.max(0, track.scrollWidth - track.clientWidth);
      const pages = step > 0 ? Math.round(max / step) + 1 : 1;
      return { step, pages };
    };

    const dots = root.querySelector<HTMLElement>('[data-carousel-dots]');
    let page = 0;
    let frame = 0;

    const placeIndicator = (progress: number) => {
      if (!dots) return;
      const buttons = [...dots.querySelectorAll('button')];
      const indicator = dots.querySelector<HTMLElement>('[data-carousel-indicator]');
      if (!buttons.length || !indicator) return;

      const clamped = Math.min(buttons.length - 1, Math.max(0, progress));
      const from = buttons[Math.floor(clamped)];
      const to = buttons[Math.min(buttons.length - 1, Math.ceil(clamped))];
      const blend = clamped - Math.floor(clamped);
      const xFor = (button: HTMLButtonElement) =>
        button.offsetLeft + (button.offsetWidth - indicator.offsetWidth) / 2;
      const yFor = (button: HTMLButtonElement) =>
        button.offsetTop + (button.offsetHeight - indicator.offsetHeight) / 2;
      const x = xFor(from) + (xFor(to) - xFor(from)) * blend;
      const y = yFor(from) + (yFor(to) - yFor(from)) * blend;
      indicator.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      const index = Math.round(clamped);
      for (const [dotIndex, dot] of buttons.entries()) {
        if (dotIndex === index) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      }
    };

    const goTo = (index: number) => {
      const { step, pages } = metrics();
      const target = Math.min(pages - 1, Math.max(0, index));
      const startLeft = track.scrollLeft;
      const endLeft = Math.min(target * step, track.scrollWidth - track.clientWidth);
      const startPage = step > 0 ? startLeft / step : 0;
      const distance = Math.abs(target - startPage);
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const duration = reduced ? 0 : Math.min(720, 420 + distance * 70);
      const start = performance.now();
      cancelAnimationFrame(frame);
      track.style.scrollSnapType = 'none';

      const tick = (now: number) => {
        const t = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
        const eased = t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
        track.scrollLeft = startLeft + (endLeft - startLeft) * eased;
        page = startPage + (target - startPage) * eased;
        placeIndicator(page);
        if (t < 1) {
          frame = requestAnimationFrame(tick);
          return;
        }
        page = target;
        track.style.scrollSnapType = '';
        placeIndicator(page);
      };

      frame = requestAnimationFrame(tick);
    };

    prev.addEventListener('click', () => goTo(Math.round(page) - 1));
    next.addEventListener('click', () => goTo(Math.round(page) + 1));

    track.classList.add('cursor-grab', 'touch-pan-y', 'select-none');
    for (const child of track.querySelectorAll<HTMLElement>('a, img')) child.draggable = false;

    let dragging = false;
    let moved = false;
    let suppressClick = false;
    let pointerId = -1;
    let startX = 0;
    let startScroll = 0;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;

    const stopAnimation = () => {
      cancelAnimationFrame(frame);
      track.style.scrollSnapType = '';
    };

    track.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || dragging) return;
      stopAnimation();
      dragging = true;
      moved = false;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      lastX = event.clientX;
      lastTime = performance.now();
      velocity = 0;
      track.style.scrollSnapType = 'none';
    });

    track.addEventListener(
      'pointermove',
      (event) => {
        if (!dragging || event.pointerId !== pointerId) return;
        const dx = event.clientX - startX;
        if (!moved) {
          if (Math.abs(dx) < 8) return;
          moved = true;
          track.classList.add('cursor-grabbing');
          try {
            track.setPointerCapture(event.pointerId);
          } catch {
            // Capture is only available for a real pointer. Dragging still tracks the move.
          }
        }
        const now = performance.now();
        const dt = now - lastTime;
        if (dt > 0) velocity = (event.clientX - lastX) / dt;
        lastX = event.clientX;
        lastTime = now;
        const limit = Math.max(0, track.scrollWidth - track.clientWidth);
        track.scrollLeft = Math.min(limit, Math.max(0, startScroll - dx));
        const { step } = metrics();
        page = step > 0 ? track.scrollLeft / step : 0;
        placeIndicator(page);
      },
      { passive: true },
    );

    const finishDrag = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== pointerId) return;
      dragging = false;
      track.classList.remove('cursor-grabbing');
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
      if (!moved) {
        track.style.scrollSnapType = '';
        return;
      }
      suppressClick = true;
      const { step, pages } = metrics();
      const position = step > 0 ? track.scrollLeft / step : 0;
      let target = Math.round(position);
      if (velocity <= -0.45) target = Math.floor(position) + 1;
      else if (velocity >= 0.45) target = Math.ceil(position) - 1;
      goTo(Math.min(pages - 1, Math.max(0, target)));
    };

    track.addEventListener('pointerup', finishDrag);
    track.addEventListener('pointercancel', finishDrag);
    track.addEventListener('dragstart', (event) => event.preventDefault());
    track.addEventListener(
      'click',
      (event) => {
        if (!suppressClick) return;
        suppressClick = false;
        event.preventDefault();
        event.stopPropagation();
      },
      true,
    );

    if (!dots) continue;

    dots.classList.add('relative');

    const renderDots = () => {
      const { pages } = metrics();
      dots.replaceChildren();

      for (let index = 0; index < pages; index += 1) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'inline-flex size-11 items-center justify-center rounded-full';
        button.setAttribute('aria-label', `Team page ${index + 1} of ${pages}`);
        const mark = document.createElement('span');
        mark.className = 'bg-navy-200 block h-2.5 w-2.5 rounded-full';
        mark.setAttribute('aria-hidden', 'true');
        button.append(mark);
        button.addEventListener('click', () => goTo(index));
        dots.append(button);
      }

      const indicator = document.createElement('span');
      indicator.dataset.carouselIndicator = '';
      indicator.className =
        'bg-brand-500 pointer-events-none absolute top-0 left-0 h-2.5 w-6 rounded-full';
      indicator.setAttribute('aria-hidden', 'true');
      dots.append(indicator);
      placeIndicator(page);
    };

    renderDots();
    window.addEventListener('resize', () => {
      const { step } = metrics();
      page = step > 0 ? track.scrollLeft / step : 0;
      renderDots();
    });
  }
}
