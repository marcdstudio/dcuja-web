import { component } from 'picoapp'
import choozy from 'choozy'
import { add, remove, on, qs, qsa, toggle } from '@selfaware/martha'

export default component((node, ctx) => {
  let { email, bis, biscontent, success, biswrap, openbis, closebis, formbis } =
    choozy(node)

  on(bis, 'click', (e) => {
    e.preventDefault()

    let currentVariant = node.dataset.variant

    $.ajax({
      type: 'POST',
      url: 'https://a.klaviyo.com/onsite/components/back-in-stock/subscribe',
      data: {
        a: 'V7iCjX',
        email: email.value,
        variant: currentVariant,
        platform: 'shopify',
        store: 'drinkmodica',
      },
      success: function (response) {
        console.log(response)
        add(formbis, 'hidden')
        remove(success, 'hidden')
      },
    })
  })
})
