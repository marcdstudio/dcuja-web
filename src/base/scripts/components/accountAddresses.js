import { component } from 'picoapp'
import choozy from 'choozy'
import { qs, qsa, on, add, remove, toggle } from '@selfaware/martha'

export default component((node, ctx) => {
  let { addWrap, toggleAdd, toggleEdit, editWrap } = choozy(node)

  if (toggleAdd != undefined) {
    on(toggleAdd, 'click', () => {
      toggle(addWrap, 'hidden')
    })
  }

  if (toggleEdit != undefined) {
    on(toggleEdit, 'click', () => {
      toggle(editWrap, 'hidden')
    })
  }
})
