import operator from 'operator'
import gsap from 'gsap'

/**
 * operator is a tiny "PJAX" library, please have a look at the docs for
 * more info
 *
 * @see https://github.com/estrattonbailey/operator
 */
const router = operator('#MainContent', [
  /**
   * creates a page transition
   * @see https://github.com/estrattonbailey/operator#transition-animation
   */
  () =>
    new Promise((res) => {
      let tl = gsap.timeline()

      const enter = () => {
        res()
        window.scrollTo(0, 0)
        document.body.scrollTop = 0
      }

      tl.to('main', { opacity: 0, duration: 0.5, onComplete: enter }).to(
        'main',
        {
          opacity: 1,
          duration: 0.5,
        }
      )
    }),
  // {
  //   path: '/account/*',
  //   ignore: true,
  // },
  // {
  //   path: '/account/',
  //   ignore: true,
  // },
  // {
  //   path: '/blogs/*',
  //   ignore: true,
  // },
  {
    path: '*',
    ignore: true,
  },
])

router.on('after', ({ pathname }) => {
  window.history.pushState({}, '', pathname)
  if (document.querySelector('[data-pagetitle]') != undefined) {
    let pageTitle = document.querySelector('[data-pagetitle]').dataset.pagetitle
    let shopTitle = document.querySelector('[data-shoptitle]').dataset.shoptitle
    document.title = `${pageTitle}`
  } else {
    document.title = 'Promised Grounds'
  }
})

export default router
