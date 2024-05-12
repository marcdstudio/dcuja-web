import fetch from 'unfetch'
import app from 'base/scripts/app.js'
import { qs } from '@selfaware/martha'

export function addVariant(variant, quantity, selling_plan) {
  const numAvailable =
    variant.inventory_policy === 'deny' &&
    variant.inventory_management === 'shopify'
      ? variant.inventory_quantity
      : null // null means they can add as many as they want

  return fetchCart().then(({ items }) => {
    const existing = items.filter((item) => item.id === variant.id)[0] || {}
    const numRequested = (existing.quantity || 0) + quantity

    if (numAvailable !== null && numRequested > numAvailable) {
      const err = `There are only ${numAvailable} of that product available, requested ${numRequested}.`
      app.emit('error', err)
      throw new Error(err)
    } else {
      return addItemById(variant.id, quantity, selling_plan)
    }
  })
}

// export function updateAddon(id, quantity) {
//   return fetchCart().then(({ items }) => {
//     for (let i = 0; i < items.length; i++) {
//       if (items[i].variant_id === parseInt(id)) {
//         return changeAddon(i + 1, quantity) // shopify cart is a 1-based index
//       }
//     }
//   })
// }

export function updateAddon(id, selling_plan, quantity, link) {
  return fetchCart().then(({ items }) => {
    for (let i = 0; i < items.length; i++) {
      //check if item is recurring
      if (selling_plan != null) {
        if (items[i].selling_plan_allocation) {
          if (
            items[i].variant_id === parseInt(id) &&
            items[i].selling_plan_allocation.selling_plan.id ===
              parseInt(selling_plan)
          ) {
            return changeAddon(i + 1, quantity, link) // shopify cart is a 1-based index
          }
        }
      } else {
        if (items[i].variant_id === parseInt(id)) {
          return changeAddon(i + 1, quantity, link) // shopify cart is a 1-based index
        }
      }
    }
  })
}

// export function removeAddon(id) {
//   return updateAddon(id, 0)
// }

export function removeAddon(id, selling_plan, link) {
  return updateAddon(id, selling_plan, 0, link)
}

function changeAddon(line, quantity, link) {
  app.emit('cart:updating')

  return fetch('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ line, quantity }),
  })
    .then((res) => res.json())
    .then((cart) => {
      app.hydrate({ cart: cart })
      app.emit('cart:updated', { cart: cart })

      if (link) {
        window.location.href = link
      }
      return cart
    })
}

/**
 * Warning: this does not check available products first
 */
export function addItemById(id, quantity, selling_plan) {
  app.emit('cart:updating')

  return fetch('/cart/add.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, quantity, selling_plan }),
  })
    .then((r) => r.json())
    .then((item) => {
      return fetchCart().then((cart) => {
        let pix = qs('.collection-pix')
        app.hydrate({ cart: cart })
        app.emit('cart:updated')
        if (pix == undefined || app.getState().cart.item_count >= 6) {
          app.emit('cart:toggle', (state) => {
            return {
              cartOpen: !state.cartOpen,
            }
          })
        }
        // app.emit('updated', { item, cart })
        return { item, cart }
      })
    })
}

export function fetchCart() {
  return fetch('/cart.js', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json())
}
