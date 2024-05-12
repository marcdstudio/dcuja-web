import { component } from 'picoapp'
import choozy from 'choozy'
import { on, toggle, qsa, qs, remove, add } from '@selfaware/martha'

export default component((node, ctx) => {
  let { faq, body } = choozy(node)

  on(faq, 'click', (e) => {
    let openDrawer = qs('.faq-wrap.active')

    if (openDrawer && openDrawer?.dataset.index != e.target.dataset.index) {
      // console.log('openDrawer', qs('.js-faq', openDrawer));
      remove(openDrawer, 'active')
    }
    toggle(node, 'active')
  })
})
