import { component } from 'picoapp'
import choozy from 'choozy'
import { remove, add, qs, on, toggle } from '@selfaware/martha'

import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default component((node, ctx) => {
  let { toggleSpecs, toggleCare, toggleSustainability } = choozy(node)
  let sectionDimensions = qs('.product-dimensions')
  let sectionCare = qs('.product-care')
  let sectionSustainability = qs('.product-cards')

  if (sectionDimensions) {
    on(toggleSpecs, 'click', (e) => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: sectionDimensions,
          offsetY: 75,
        },
        ease: 'expo.out',
      })
    })
  } else {
    add(toggleSpecs, 'hidden')
  }

  if (toggleCare) {
    on(toggleCare, 'click', (e) => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: sectionCare,
          offsetY: 75,
        },
        ease: 'expo.out',
      })
    })
  } else {
    add(toggleCare, 'hidden')
  }
  if (toggleSustainability) {
    on(toggleSustainability, 'click', (e) => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: sectionSustainability,
          offsetY: 75,
        },
        ease: 'expo.out',
      })
    })
  } else {
    add(toggleSustainability, 'hidden')
  }
})
