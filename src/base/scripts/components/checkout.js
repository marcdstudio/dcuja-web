import { component } from 'picoapp'
import { on, qs } from '@selfaware/martha'

export default component((node) => {
  on(node, 'click', (e) => {
    e.preventDefault()

    qs('.js-cartForm').submit()

    // window.location = '/checkout'
  })
})
