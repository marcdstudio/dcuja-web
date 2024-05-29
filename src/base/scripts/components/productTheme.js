import { component } from "picoapp";
import choozy from "choozy";
import { has } from "@selfaware/martha";
import flickity from "flickity";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default component((node, ctx) => {
  let { carousel, next, prev, thumb } = choozy(node);

  const updateTheme = (theme, primary, secondary, tertiary) => {
    document.body.style.setProperty("--primary", `${primary}`);
    document.body.style.setProperty("--secondary", `${secondary}`);
    document.body.style.setProperty("--tertiary", `${tertiary}`);
    document.body.dataset.theme = theme;
  };

  updateTheme(
    node.dataset.theme,
    node.dataset.primary,
    node.dataset.secondary,
    node.dataset.tertiary
  );
});
