import { component } from "picoapp";
import choozy from "choozy";
import { remove, add, on, qsa } from "@selfaware/martha";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default component((node, ctx) => {
  let { products, toggle, toggles, icon, hero, link, cta, heroImage } =
    choozy(node);

  const allProducts = JSON.parse(products?.innerHTML).products;

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

  const tl = gsap.timeline();

  on(toggle, "click", (e) => {
    add(toggles, "pointer-events-none");
    document.body.style.overflow = "hidden";

    tl.to('.js-themeElement', {
      opacity: 0,
      y: -10,
      duration: 0.5,
      onComplete: () => {
        let btn = e.target;
        let index = parseInt(btn.dataset.index) - 1;
        updateTheme(
          btn.dataset.theme,
          btn.dataset.primary,
          btn.dataset.secondary,
          btn.dataset.tertiary
        );

        remove(toggle, "active");
        add(e.target, "active");

        hero.src = allProducts[index]?.hero;
        icon.src = allProducts[index]?.icon;
        link.href = allProducts[index]?.url;
        cta.innerHTML = allProducts[index]?.title;

        ctx.emit("theme");
      },
    }).to('.js-themeElement', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      onComplete: () => {
        remove(toggles, "pointer-events-none");
        document.body.style.overflow = "";
      },
    });
  });

  //handle parallax
  gsap.to(heroImage, {
    y: -100,
    scrollTrigger: {
      trigger: node,
      start: "top top",
      end: "bottom top",
      scrub: 0.1,
    },
  });
});
