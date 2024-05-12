import { component } from 'picoapp'
import { gsap, ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

export default component((node, ctx) => {
  if (window.location.hash) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `[data-section="${window.location.hash.split('#')[1]}"]`,
        offsetY: 90,
      },
      ease: 'expo.out',
    })
  }
})
