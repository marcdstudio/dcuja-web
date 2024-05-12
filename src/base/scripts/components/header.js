import { component } from 'picoapp'
import choozy from 'choozy'
import { add, remove, on, qs, qsa, toggle } from '@selfaware/martha'
import { gsap, Expo } from 'gsap'

export default component((node, ctx) => {
  let { cartToggle, menuOpen, announceBar, announceClose, anchor, nav } =
    choozy(node)

  let headerClose = qs('.header-close')
  let closeZone = qs('.js-closeZone')
  let cartCount = qsa('.js-cartCount')

  if (announceClose) {
    on(announceClose, 'click', () => {
      add(announceBar, 'hidden')
      qs('body').style.setProperty('--announce', `0px`)
    })
  }

  on(cartToggle, 'click', () => {
    ctx.emit('cart:toggle', (state) => {
      return {
        cartOpen: !state.cartOpen,
      }
    })
  })

  //define nav sizing
  qs('body').style.setProperty(
    '--headerHeight',
    `${qs('header').offsetHeight}px`
  )

  document.body.style.setProperty('--nav', `${nav.offsetWidth}px`); // Change to desired color

  on(window, 'resize', () => {
    qs('body').style.setProperty(
      '--headerHeight',
      `${qs('header').offsetHeight}px`
    )

    document.body.style.setProperty('--nav', `${nav.offsetWidth}px`); // Change to desired color
  })

  setTimeout(() => {
    qs('body').style.setProperty(
      '--headerHeight',
      `${qs('header').offsetHeight}px`
    )
  }, 1000)

  on(menuOpen, 'click', () => {
    gsap.fromTo(
      '.nav-menu-wrap',
      { x: '-100%' },
      { x: 0, duration: 0.5, ease: Expo.easeOut }
    )

    add(menuOpen, 'hidden')
    remove(headerClose, 'hidden')
    remove(closeZone, 'hidden')
  })

  qsa('.js-menuClose').forEach((btn) => {
    on(btn, 'click', () => {
      ctx.emit('menu:close')
    })
  })

  ctx.on('cart:updated', (state) => {
    cartCount.forEach((count) => (count.innerHTML = state.cart.item_count))
  })

  cartCount.forEach(
    (count) => (count.innerHTML = ctx.getState().cart.item_count)
  )

  ctx.on('menu:close', () => {
    gsap.fromTo(
      '.nav-menu-wrap',
      { x: 0 },
      { x: '-100%', duration: 0.3, ease: Expo.easeOut }
    )

    remove(menuOpen, 'hidden')
    add(headerClose, 'hidden')
    add(closeZone, 'hidden')
  })

  //handle header logo
  if (window.location.href == '/') {
    document.body.classList.add('logo')
  } else{
    document.body.classList.remove('logo')
  }

  //toggle cart if user is pointed to cart page
  if (window.location.href.indexOf('cart') > -1) {
    if (window.location.href.indexOf('#cart') > -1) {
      ctx.emit('cart:toggle', (state) => {
        return {
          cartOpen: !state.cartOpen,
        }
      })
    } else {
      window.location.href = '/#cart'
    }
  }

  if (anchor) {
    on(anchor, 'click', (e) => {
      window.location.href = e.target.dataset.link
    })
  }

})
