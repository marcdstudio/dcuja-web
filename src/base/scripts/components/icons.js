import { component } from 'picoapp'
import choozy from 'choozy'
import { add, remove, on, qs, qsa } from '@selfaware/martha'
import EmblaCarousel from 'embla-carousel'

export default component((node, ctx) => {
  let { carousel, next, prev, counter, activeIndex } = choozy(node)

  const embla = EmblaCarousel(carousel, {
    loop: true,
    // skipSnaps: false,
    // trimSnaps: true,
    // containScroll: true,
    align: 'center',
  })

  if (next) {
    next.addEventListener('click', embla.scrollNext, false)
    prev.addEventListener('click', embla.scrollPrev, false)
  }

  if (counter) {
    on(counter, 'click', (e) => {
      embla.scrollTo(e.target.dataset.index)
    })
  }

  embla.on('select', () => {
    if (counter) {
      remove(counter, 'is-active')
      add(
        qs(`.js-counter[data-index="${embla.selectedScrollSnap()}"]`, node),
        'is-active'
      )
    }

    if (activeIndex) {
      activeIndex.innerHTML =
        embla.selectedScrollSnap() < 9
          ? `0${embla.selectedScrollSnap() + 1}`
          : embla.selectedScrollSnap() + 1
    }

    remove(qs(`.icon-slide.active`, node), 'active')
    add(qs(`.icon-content:not(.hidden)`, node), 'hidden')
    add(
      qs(`.icon-slide[data-index="${embla.selectedScrollSnap() + 1}"]`, node),
      'active'
    )
    remove(
      qs(`.icon-content[data-index="${embla.selectedScrollSnap() + 1}"]`, node),
      'hidden'
    )
  })

  // return () => {
  //   if (next) {
  //       next.removeEventListener('click', embla.scrollNext, false)
  //       prev.removeEventListener('click', embla.scrollPrev, false)
  //   }
  // }
})
