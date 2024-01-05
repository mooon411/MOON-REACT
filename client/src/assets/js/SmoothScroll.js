import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const YourComponent = () => {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;

    if (!item) return;

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

    animateReveal(item);
  }, []);

  return (
    <div ref={itemRef} className="reveal_LTR">
      {/* Your content goes here */}
    </div>
  );
};

export default YourComponent;
