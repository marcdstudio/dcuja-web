import { component } from 'picoapp'
import choozy from 'choozy'
import { on, qs, add, remove } from '@selfaware/martha'
import { subscribe } from 'klaviyo-subscribe'

export default component((node, ctx) => {
  let { formContent, success, submit, error } = choozy(node)

  on(submit, 'click', (e) => {
    e.preventDefault()

    let listId = 'XtGJWW'
    let email = qs('.js-email', node).value

    if (email.includes('@')) {
      subscribe(listId, email, {}).then((response) => {
        remove(success, 'hidden')
        add(formContent, 'hidden')
        add(error, 'hidden')
      })
    } else {
      remove(error, 'hidden')
    }
  })
})
