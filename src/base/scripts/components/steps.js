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
});
