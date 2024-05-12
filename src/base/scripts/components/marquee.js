import { component } from 'picoapp'
import { on, remove, add, has, qs, qsa } from 'martha'
import choozy from 'choozy'

export default component((node, ctx) => {
  let { primary } = choozy(node)
  let currentX = 0
  let targetX = 0

  window.setInterval(animationLoop, 15)

  function animationLoop() {
    targetX = currentX > primary.scrollWidth ? 0 : currentX + 1

    node.style.transform = `translateX(-${targetX}px) translateZ(0px)`

    currentX = targetX
  }
})
