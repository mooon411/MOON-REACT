import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Lenis } from "Lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// 필요한 다른 라이브러리 import 등...

// 부드럽게 스크롤
function SmoothScrollComponent() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return null;
}

function LinkSmoothScrollEffect() {
  const setActive = (activeLink) => {};

  useEffect(() => {
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
          onToggle: (self) => setActive(link),
        });

        link.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, {
            duration: 0.5,
            scrollTo: { y: linkST.start },
            overwrite: "auto",
          });
        });
      }
    });
  }, []);

  return null;
}

function RevealEffect() {
  useEffect(() => {
    const hide = (item) => {
      gsap.set(item, { autoAlpha: 0 });
    };

    const animate = (item) => {
      let x = 0;
      let y = 0;
      let delay = item.dataset.delay;

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

      // 전 위치 현 위치 두가지 작성
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
  }, []);

  return null;
}

// function PortfolioMovementEffect() {
//   useEffect(() => {
//     const portSection = document.getElementById("port");
//     const portUl2 = portSection.querySelectorAll(".port_wrap ul")[1];
//     const portUl4 = portSection.querySelectorAll(".port_wrap ul")[3];
//     // ... 이하 생략
//   }, []);

//   return null;
// }

function App() {
  return (
    <div>
      <SmoothScrollComponent />
      <LinkSmoothScrollEffect />
      <RevealEffect />
      {/* <PortfolioMovementEffect /> */}
      {/* 이외에 다른 컴포넌트들도 추가할 수 있음 */}
    </div>
  );
}

export default App;
