import { component } from "picoapp";
import choozy from "choozy";
import { add, remove, on, qs, qsa } from "@selfaware/martha";
import EmblaCarousel from "embla-carousel";

export default component((node, ctx) => {
  let { carousel, next, prev, counter, activeIndex } = choozy(node);

  const embla = EmblaCarousel(carousel, {
    loop: true,
    skipSnaps: false,
    trimSnaps: true,
    containScroll: true,
    align: "start",
  });

  embla.on("select", () => {});

  //animated scale
  const steps = document.querySelectorAll('.js-step');
  let currentIndex = 0;

  function animateStep() {
    if (steps.length === 0) return;

    // Remove is-active class from all elements
    steps.forEach(step => step.classList.remove('is-active'));

    // Add is-active class to the current element
    steps[currentIndex].classList.add('is-active');

    // After the delay, scale down the current element and move to the next
    setTimeout(() => {
      steps[currentIndex].classList.remove('is-active');
      currentIndex = (currentIndex + 1) % steps.length;
      animateStep();
    }, 1500); // 0.5s for is-active + 1s delay
  }

  // Start the animation loop
  animateStep();
});
