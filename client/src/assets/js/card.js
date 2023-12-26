import React, { useRef } from "react";

import card01Img from "../img/card01.jpg";
import card02Img from "../img/card02.jpg";
import card03Img from "../img/card03.jpg";
import card04Img from "../img/card04.jpg";
import card05Img from "../img/card05.jpg";
import card06Img from "../img/card06.jpg";
import card07Img from "../img/card07.jpg";
import card08Img from "../img/card08.jpg";
import card09Img from "../img/card09.jpg";
import card10Img from "../img/card10.jpg";
import card11Img from "../img/card11.jpg";

function PictureDraggable() {
  const picturesRef = useRef([]);
  const previousTouch = useRef(undefined);

  function updateElementPosition(event, index) {
    const element = picturesRef.current[index];
    const movementX =
      event.type === "touchmove"
        ? previousTouch.current
          ? event.touches[0].clientX - previousTouch.current.clientX
          : 0
        : event.movementX;
    const movementY =
      event.type === "touchmove"
        ? previousTouch.current
          ? event.touches[0].clientY - previousTouch.current.clientY
          : 0
        : event.movementY;

    previousTouch.current =
      event.type === "touchmove" ? event.touches[0] : undefined;

    const elementY = parseInt(element.style.top || 0) + movementY;
    const elementX = parseInt(element.style.left || 0) + movementX;

    element.style.top = elementY + "px";
    element.style.left = elementX + "px";
  }

  function startDrag(event, index) {
    const updateFunction = (event) => updateElementPosition(event, index);
    const stopFunction = () =>
      stopDrag({ update: updateFunction, stop: stopFunction });

    document.addEventListener("mousemove", updateFunction);
    document.addEventListener("touchmove", updateFunction);
    document.addEventListener("mouseup", stopFunction);
    document.addEventListener("touchend", stopFunction);
  }

  function stopDrag(functions) {
    previousTouch.current = undefined;
    document.removeEventListener("mousemove", functions.update);
    document.removeEventListener("touchmove", functions.update);
    document.removeEventListener("mouseup", functions.stop);
    document.removeEventListener("touchend", functions.stop);
  }

  const handleTouchStart = (event, index) => {
    event.preventDefault();
    startDrag(event, index);
  };

  const cardItems = [
    {
      src: card11Img,
      note: "MOON",
    },
    {
      src: card10Img,
      note: "The Wind Blows",
    },
    {
      src: card09Img,
      note: "I like picnics",
    },
    {
      src: card08Img,
      note: "sea ​​breeze",
    },
    {
      src: card07Img,
      note: "popular places",
    },
    {
      src: card06Img,
      note: "flower viewing",
    },
    {
      src: card05Img,
      note: "walk on the sea road",
    },
    {
      src: card04Img,
      note: "soft sandy beach",
    },
    {
      src: card03Img,
      note: "see the forest",
    },
    {
      src: card02Img,
      note: "go to work",
    },
    {
      src: card01Img,
      note: "my daily life",
    },
  ];

  return (
    <div>
      {[...Array(11)].map((_, index) => {
        const range = 100;
        const randomX = Math.random() * (range * 2) - range;
        const randomY = Math.random() * (range * 2) - range;
        const randomRotate = Math.random() * (range / 2) - range / 4;

        return (
          <div
            key={index}
            ref={(ref) => (picturesRef.current[index] = ref)}
            className="Picture"
            style={{
              position: "absolute",
              top: `${randomY}px`,
              left: `${randomX}px`,
              transform: `translate(-50%, -50%) rotate(${randomRotate}deg)`,
              cursor: "move",
            }}
            onMouseDown={(event) => startDrag(event, index)}
            onTouchStart={(event) => handleTouchStart(event, index)}
          >
            <img
              className="Picture-img"
              src={cardItems[index].src}
              alt="card"
            />
            <div className="Picture-note">
              <span>{cardItems[index].note}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PictureDraggable;
