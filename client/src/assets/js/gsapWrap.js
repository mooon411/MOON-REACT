import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsapWrap = () => {
  const portfolioMovementEffectRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis 또는 다른 스크롤 로직을 초기화할 수 있습니다.
    // ...

    // 부드러운 스크롤 효과를 위한 함수
    const handleSmoothScroll = (linkST, link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 0.5,
          scrollTo: { y: linkST.start },
          overwrite: "auto",
        });
      });
    };

    // Reveal 효과를 위한 함수
    const animateReveal = (item) => {
      let x = 0,
        y = 0,
        delay = item.dataset.delay || 0;

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
    };

    // LinkSmoothScrollEffect 로직
    let links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      let targetId = link.getAttribute("href").substring(1);
      let element = document.getElementById(targetId);

      if (element) {
        let linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onToggle: () => handleSmoothScroll(linkST, link),
        });
      }
    });

    // RevealEffect 로직
    gsap.utils.toArray(".reveal").forEach((item) => {
      gsap.set(item, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => animateReveal(item),
      });
    });
    return () => {
      // 컴포넌트가 언마운트될 때 정리 작업을 할 수 있습니다.
    };
  }, []);

  return (
    <div>
      <div ref={portfolioMovementEffectRef}></div>
      {/* 나머지 JSX 요소들 추가 */}
    </div>
  );
};

export default gsapWrap;
