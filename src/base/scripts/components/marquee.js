import { component } from "picoapp";
import { on, remove, add, has, qs, qsa } from "martha";
import choozy from "choozy";

export default component((node, ctx) => {
  let { primary } = choozy(node);
  let currentX;
  let targetX;

  let direction = node.dataset.direction;

  if (direction == "ltr") {
    currentX = -primary.scrollWidth;
    window.setInterval(animationLoopLTR, 15);

    function animationLoopLTR() {
      targetX = currentX >= 0 ? -primary.scrollWidth : currentX + 1;

      node.style.transform = `translateX(${targetX}px) translateZ(0px)`;

      currentX = targetX;
    }
  } else {
    currentX = 0;
    window.setInterval(animationLoopRTL, 15);

    function animationLoopRTL() {
      targetX = currentX > primary.scrollWidth ? 0 : currentX + 1;

      node.style.transform = `translateX(-${targetX}px) translateZ(0px)`;

      currentX = targetX;
    }
  }
});
