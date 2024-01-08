import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function log() {
  gsap.to(".log_moment img", {
    y: "-20%",
    ease: "none",
    scrollTrigger: {
      trigger: "#log",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
    },
  });
}
