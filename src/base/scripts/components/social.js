import { component } from "picoapp";
import choozy from "choozy";
import { add, remove, on, qs, qsa } from "@selfaware/martha";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

export default component((node, ctx) => {
  let { carousel, next, prev, counter, activeIndex } = choozy(node);

  const options = {
    loop: node.dataset.loop == "false" ? false : true,
    skipSnaps: false,
    trimSnaps: true,
    containScroll: true,
    speed: node.dataset.speed ? node.dataset.speed : 10,
    align: node.dataset.start == "left" ? "start" : "center",
  };

  const autoplay = Autoplay({ playOnInit: true, delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false });

  const embla = EmblaCarousel(carousel, options, [autoplay]);

  if (next) {
    next.addEventListener("click", () => {
      embla.scrollNext();
      autoplay.stop();
    }, false);
    prev.addEventListener("click", () => {
      embla.scrollPrev();
      autoplay.stop();
    }, false);
  }
});
