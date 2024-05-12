import { component } from 'picoapp'
import choozy from 'choozy'
import { add, remove, on, qs, qsa, toggle } from '@selfaware/martha'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default component((node, ctx) => {
  let { anchors } = choozy(node)

  qsa('[data-section]').forEach((section, index) => {
    let anchor = document.createElement('button')
    anchor.innerHTML = section.dataset.title || section.dataset.section
    anchor.classList.add('js-anchor')
    if (index == 0) {
      anchor.classList.add('active')
    }
    anchor.dataset.section = section.dataset.section
    anchors.appendChild(anchor)

    on(anchor, 'click', () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: `[data-title="${section.dataset.title}"]`,
          offsetY: 75,
        },
        ease: 'expo.out',
      })
    })
  })

  const setActive = (target) => {
    qsa('.js-anchor').forEach((anchor) => {
      remove(anchor, 'active')
    })

    add(qs(`.js-anchor[data-section="${target}"]`), 'active')
  }

  gsap.utils.toArray('[data-section]').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top+=150',
      onEnter: (self) => {
        setActive(self.trigger.dataset.section)
      },
    })
  })

  gsap.utils.toArray('[data-section]').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'bottom top',
      onLeaveBack: (self) => {
        setActive(self.trigger.dataset.section)
      },
    })
  })

  document.querySelectorAll('img').forEach((img) => {
    img.onload = () => {
      ScrollTrigger.refresh()
      img.onload = null
    }
  })

  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1000)

  return () => {
    let triggers = ScrollTrigger.getAll()
    triggers.forEach((trigger) => {
      trigger.kill()
    })
  }
})
