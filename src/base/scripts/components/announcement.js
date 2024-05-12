import { component } from 'picoapp'
import choozy from 'choozy'
import { add, remove, on, qs, qsa, toggle } from '@selfaware/martha'

export default component((node, ctx) => {
  let { announceContent } = choozy(node)

  //   on(document, 'scroll', () => {
  //     if (window.pageYOffset > 20){
  //         node.style.maxHeight = 0
  //     } else{
  //         node.style.maxHeight = `${announceContent.offsetHeight}px`
  //     }
  //   })
})
