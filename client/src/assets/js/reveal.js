import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function hide(item) {
  gsap.set(item, { autoAlpha: 0 });
}

export function animate(item) {
  let x = 0;
  let y = 0;
  let delay = item.dataset.delay || 0;

  if (item.classList.contains("reveal_LTR")) {
    x = -300;
    y = 0;
  } else if (item.classList.contains("reveal_BTT")) {
    x = 0;
    y = 100;
  } else if (item.classList.contains("reveal_TTB")) {
    x = 0;
    y = -100;
  } else {
    x = 300;
    y = 0;
  }

  gsap.fromTo(
    item,
    {
      autoAlpha: 0,
      x: x,
      y: y,
    },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      delay: delay,
      duration: 2,
      overwrite: "auto",
      ease: "expo",
    }
  );
}

export function reveal() {
  gsap.utils.toArray(".reveal").forEach((item) => {
    hide(item);

    ScrollTrigger.create({
      trigger: item,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        animate(item);
      },
    });
  });
}
