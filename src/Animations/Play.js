import { TimelineMax as Timeline, Power1 } from 'gsap';
import { getProjectTimeline, getHomeTimeline } from './Animations'

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  else
    timeline = getProjectTimeline(node, delay);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
