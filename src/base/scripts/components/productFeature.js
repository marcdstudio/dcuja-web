import { component } from "picoapp";
import choozy from "choozy";
import { has } from "@selfaware/martha";
import flickity from "flickity";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default component((node, ctx) => {
  let { carousel, next, prev, thumb } = choozy(node);

  // scroll animation

  // Create a gsap.timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: node,
      start: "top bottom", // Start the animation when the container is at the top of the viewport
      end: "center center", // End the animation when the container is at the bottom of the viewport
      scrub: .2, // Smoothly animate as you scroll
    }
  });

  // Add rotation animations for each element to the timeline
  gsap.utils.toArray('.js-vign').forEach(element => {
    tl.to(element, { rotation: "+=20", duration: 1 }, "-=0.5"); // Adjust the timing overlap as needed
  });
});
