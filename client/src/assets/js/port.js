import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function port() {
  const portSection = document.getElementById("port");
  const portUl2 = portSection.querySelectorAll(".port_wrap ul")[1];
  const portUl4 = portSection.querySelectorAll(".port_wrap ul")[3];

  gsap.to(portUl2, {
    marginTop: "0",
    scrollTrigger: {
      trigger: "#port",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: ({ progress }) => {
        const offset = 25 - progress * 13;
        portUl2.style.marginTop = `${offset}%`;
      },
    },
  });

  gsap.to(portUl4, {
    marginTop: "0",
    scrollTrigger: {
      trigger: "#port",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: ({ progress }) => {
        const offset = 10 - progress * 15;
        portUl4.style.marginTop = `${offset}%`;
      },
    },
  });

  gsap.to(".circle_link", {
    rotation: 30,
    yoyo: true,
    transformOrigin: "50% 50%",
    ease: "sine.inOut",
    duration: 0.2,
    scrollTrigger: {
      trigger: "#port",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
}
