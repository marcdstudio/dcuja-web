import { component } from 'picoapp'
import choozy from 'choozy'
import { add, remove, on, qs, qsa, toggle } from '@selfaware/martha'
import { gsap, Expo } from 'gsap'

export default component((node, ctx) => {
  let { cartToggle, announceBar, announceClose, menu, anchor, nav, open, close, navToggle } =
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

  const initHeader = () => {
    if(window.location.pathname == '/'){
      if(window.pageYOffset > 50){
        remove(document.body, 'logo')
      } else{
        add(document.body, 'logo')
      }
    }
  }

  initHeader()

  on(window, 'scroll', () => {
    if(window.location.pathname == '/'){
      if(window.pageYOffset > 50){
        remove(document.body, 'logo')
      } else{
        add(document.body, 'logo')
      }
    }
  })

  on(cartToggle, 'click', () => {
    ctx.emit('cart:toggle', (state) => {
      return {
        cartOpen: !state.cartOpen,
      }
    })
  })

  //define nav sizing
  document.body.style.setProperty('--nav', `${nav.offsetWidth}px`); // Change to desired color

  on(window, 'resize', () => {
    qs('body').style.setProperty(
      '--headerHeight',
      `${qs('header').offsetHeight - 2}px`
    )

    document.body.style.setProperty('--nav', `${nav.offsetWidth}px`); // Change to desired color
  })

  setTimeout(() => {
    qs('body').style.setProperty(
      '--headerHeight',
      `${node.offsetHeight - 2}px`
    )
  }, 1000)

  on(navToggle, 'click', () => {
    toggle(open, 'hidden')
    toggle(close, 'hidden')

    toggle(menu, 'is-open')
  })

  on(window, 'resize', () => {
    node.style.setProperty('--menuOffset', `${node.offsetHeight}`)
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
  if (window.location.pathname == '/') {
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
})
