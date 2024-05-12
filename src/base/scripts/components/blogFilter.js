import { component } from 'picoapp'
import choozy from 'choozy'
import { add, remove, on, qs, qsa, toggle } from '@selfaware/martha'

export default component((node, ctx) => {
  let { filterToggle, clearFilter } = choozy(node)

  if (window.location.href.includes('/tagged/')) {
    let tag = window.location.href.split('tagged/')[1]
    let targetTag = qs(`.js-filter[data-filter="${tag}"]`)

    qsa('.js-filter', node).forEach((el) => {
      remove(el, 'active')
    })

    if (targetTag) {
      add(targetTag, 'active')
    }
  }
})
