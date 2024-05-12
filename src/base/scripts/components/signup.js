import { component } from 'picoapp'
import choozy from 'choozy'
import { on, qs, add, remove } from '@selfaware/martha'
import { subscribe } from 'klaviyo-subscribe'

export default component((node, ctx) => {
  let { formContent, success, submit } = choozy(node)

  on(submit, 'click', (e) => {
    e.preventDefault()

    let listId = 'WzG72s'
    let email = qs('.js-email', node).value

    subscribe(listId, email, {}).then((response) => {
      remove(success, 'hidden')
      add(formContent, 'hidden')

      if (qs('.js-formTitle')) {
        add(qs('.js-formTitle'), 'hidden')
      }
    })
  })
})
