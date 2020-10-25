import { TimelineMax as Timeline, Power1 } from 'gsap';

export const getProjectTimeline = (node) => {
    const timeline = new Timeline({ paused: true });
    const header = node.querySelectorAll('.header-component');
    const promptsFigs = node.querySelectorAll('.prompt,li,.figure-component');
    const content = node.querySelectorAll('p:not(.prompt)');
  
    timeline
        .from(header, 0.3, { autoAlpha: 0, y: -25, ease: Power1.easeInOut })
        .from(promptsFigs, 0.3, { autoAlpha: 0, x: -25, ease: Power1.easeIn })
        .from(content, 0.3, { autoAlpha: 0, delay: 0.30, ease: Power1.easeIn });
  
    return timeline;
}
  
export const getHomeTimeline = (node) => {
    const timeline = new Timeline({ paused: true });
    const header = node.querySelectorAll('.header-component');
    const prompts = node.querySelectorAll('.prompt,li');
    const projects = node.querySelectorAll('.tile-component');

    timeline
        .from(header, 0.3, { autoAlpha: 0, y: -25, ease: Power1.easeInOut })
        .from(prompts, 0.3, { autoAlpha: 0, x: -25, ease: Power1.easeIn })
        .staggerFrom(projects, 0.375, { autoAlpha: 0, delay: 0.30, ease: Power1.easeOut }, 0.125);

    return timeline;
}

/**
 * Not meant to be used in any way, just a reminder of what elements should be added and how
 */
export const getBasicTimeline = (node) => {
    const timeline = new Timeline({ paused: true });
    const header = node.querySelectorAll('.header-component');
    const prompts = node.querySelectorAll('.prompt,li');

    timeline
        .from(header, 0.3, { autoAlpha: 0, y: -25, ease: Power1.easeInOut })
        .from(prompts, 0.3, { autoAlpha: 0, x: -25, ease: Power1.easeIn });

    return timeline;
}
