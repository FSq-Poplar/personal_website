import { TimelineMax as Timeline, Power1 } from 'gsap';
import { getProjectTimeline, getHomeTimeline } from './Animations'

export const play = (pathname, node, appears) => {
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node);
  else
    timeline = getProjectTimeline(node);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, delay: 0.30, ease: Power1.easeOut });
  timeline.play();
}
