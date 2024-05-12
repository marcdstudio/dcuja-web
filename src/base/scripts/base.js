// import '../styles/index.scss'
// import '@/lib/select.js'
// import lazim from 'lazim'
import { bind, update } from 'lazim'
import app from 'base/scripts/app.js'
import router from 'base/scripts/router.js'
import { fetchCart } from 'base/scripts/utils/cart.js'
import { gsap, ScrollTrigger } from 'gsap/all'
import { qs, remove } from '@selfaware/martha'
import pageSetup from 'base/scripts/utils/pageSetup'

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

/**
 * store binding fn
 */
bind()

/**
 * register scrolltrigger
 */
gsap.registerPlugin(ScrollTrigger)

router.on('after', ({ title, pathname }) => {
  app.unmount()
  app.mount()

  // if (window.location.href.indexOf('products') > -1) {
  //   var api = new Yotpo.API(yotpo)
  //   api.refreshWidgets()
  // }

  /**
   * bind new images
   */

  bind()
  /**
   * hide subnav
   */
  app.emit('menu:close')
  app.emit('transition:complete')

  pageSetup()
})

pageSetup()

/**
 * load any data that your site needs on fist load
 */
Promise.all([fetchCart()]).then(([cart]) => {
  /**
   * add the cart data to the picoapp instance
   */
  app.hydrate({ cart })

  /**
   * mount any components defined on the page
   */
  app.mount()
})
