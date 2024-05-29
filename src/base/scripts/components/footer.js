import { component } from 'picoapp'
import choozy from 'choozy'
import { remove, add } from '@selfaware/martha'

import { update } from 'lazim'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default component((node, ctx) => {
  let { images, image, container, footerImage } = choozy(node);

  const allImages = JSON.parse(images?.innerHTML).images;

  const themeImages = () => {
    const currentTheme = document.body.dataset.theme
    const themeImage = allImages.find((img) => img.theme == currentTheme);

    image.src = themeImage.image
    image.dataset.src = themeImage.image

    update()
  }

  setTimeout(() => {
    themeImages()
  }, 500);

  ctx.on('theme', () => {
    themeImages()
  })

  //handle parallax
  gsap.to(footerImage, {
    y: -100,
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true
    }
  });
})
