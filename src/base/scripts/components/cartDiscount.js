import { component } from 'picoapp'
import choozy from 'choozy'
import { qs, on, qsa, add, remove } from '@selfaware/martha'

export default component((node, ctx) => {
  let { progress, remainder, goalText, goalSuccess, discount } = choozy(node)

  const calcProgress = () => {
    let threshold = parseInt(node.dataset.threshold)
    let cartTotal = parseInt(ctx.getState().cart.total_price) / 100

    if (cartTotal >= threshold) {
      remove(goalSuccess, 'hidden')
      add(goalText, 'hidden')

      progress.style.width = '100%'
    } else {
      let amtLeft = threshold - cartTotal

      add(goalSuccess, 'hidden')
      remove(goalText, 'hidden')

      remainder.innerHTML = amtLeft

      progress.style.width = `${(cartTotal / threshold) * 100}%`
    }
  }

  ctx.on('cart:updated', () => {
    calcProgress()
  })

  ctx.on('cart:toggle', () => {
    calcProgress()
  })
})
