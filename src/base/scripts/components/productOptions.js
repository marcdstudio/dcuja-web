import { component } from 'picoapp'
import choozy from 'choozy'
import { remove, add, on, qs, qsa } from '@selfaware/martha'

export default component((node, ctx) => {
  let { optionSub, optionOne, optionWrap } = choozy(node)

  let addPrice = qsa('.js-addPrice')

  if (optionSub) {
    on(optionSub, 'click', () => {
      add(qs('.product-variant-wrap'), 'is-subscription')
      remove(optionWrap, 'selected-one')
      add(optionWrap, 'selected-sub')
      add(optionSub, 'active')
      remove(optionOne, 'active')

      if (addPrice.length > 0) {
        addPrice.forEach((price) => {
          price.innerHTML = `$${optionSub.dataset.price}`
        })
      }
    })

    on(optionOne, 'click', () => {
      remove(qs('.product-variant-wrap'), 'is-subscription')
      add(optionWrap, 'selected-one')
      remove(optionWrap, 'selected-sub')
      remove(optionSub, 'active')
      add(optionOne, 'active')

      if (addPrice.length > 0) {
        addPrice.forEach((price) => {
          price.innerHTML = `$${optionOne.dataset.price}`
        })
      }
    })
  }
})
