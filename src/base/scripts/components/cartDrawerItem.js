import { component } from 'picoapp'
import { removeAddon, updateAddon } from 'base/scripts/utils/cart.js'

export default component((node, ctx) => {
  const removers = node.querySelectorAll('.js-remove-item')
  const decrease = node.querySelector('.js-remove-single')
  const increase = node.querySelector('.js-add-single')
  const currentQty = node.querySelector('.js-single-quantity').innerHTML
  const id = node.getAttribute('data-id')
  const selling_plan = node.getAttribute('data-planid')

  removers.forEach((rem) => {
    rem.addEventListener('click', (e) => {
      let link = e.target.dataset.link
      ctx.emit('item:removed')
      e.preventDefault()
      removeAddon(id, selling_plan, link)
    })
  })

  decrease.addEventListener('click', (e) => {
    e.preventDefault()
    updateAddon(id, selling_plan, parseInt(currentQty) - 1)
  })

  increase.addEventListener('click', (e) => {
    e.preventDefault()
    updateAddon(id, selling_plan, parseInt(currentQty) + 1)
  })
})
