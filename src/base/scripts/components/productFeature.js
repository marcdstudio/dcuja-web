import { component } from 'picoapp'
import choozy from 'choozy'
import { has } from '@selfaware/martha'
import flickity from 'flickity'

export default component((node, ctx) => {
  let { carousel, next, prev, thumb } = choozy(node)

  const options = {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    lazyLoad: true,
    draggable: true,
    imagesLoaded: true,
  }

  let flkty

  const initFlkty = () => {
    flkty = new flickity(carousel, options)
  }

  if (document.documentElement.clientWidth < 850) {
    initFlkty()

    setTimeout(() => {
      flkty.resize()
    }, 1000)
  }

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 850) {
      initFlkty()
    } else {
      if (has(carousel, 'flickity-enabled')) {
        flkty.destroy()
      }
    }
  })
})
