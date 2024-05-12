import { component } from 'picoapp'
import choozy from 'choozy'
import { on, add, remove, qs, qsa } from '@selfaware/martha'

export default component((node, ctx) => {
  let { submit, email } = choozy(node)

  const offEmail = on(email, 'blur', (e) => {
    if (!email.value.includes('@')) {
      add(qs('.form-email', node), 'error')
    } else {
      remove(qs('.form-email', node), 'error')
    }
  })

  qsa('.form-input').forEach((el) => {
    on(el, 'input', () => {
      if (el.value) {
        add(el, 'has-fill')
      } else {
        remove(el, 'has-fill')
      }

      if (qsa('.form-input.has-fill:not(.error)').length == 3) {
        submit.removeAttribute('disabled')
      } else {
        submit.addAttribute('disabled')
      }
    })
  })

  return () => {
    offEmail()
  }
})
