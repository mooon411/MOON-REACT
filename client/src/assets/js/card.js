import React, { useRef } from "react";

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

  return (
    <div>
      {[...Array(5)].map((_, index) => {
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
            Picture {index + 1}
          </div>
        );
      })}
    </div>
  );
}

export default PictureDraggable;
