import { component } from 'picoapp'
import { addVariant } from 'base/scripts/utils/cart.js'
import { qs, qsa, has, on } from 'martha'
import choozy from 'choozy'

export default component((node, ctx) => {
  let { subDetailToggle, subDetail, quantity } = choozy(node)

  const json = JSON.parse(qs('.js-product-json', node).innerHTML)
  const addBtn = qs('.btn-add', node)
  const addText =
    addBtn.innerHTML ||
    `${addBtn.dataset?.preorder == 'true' ? 'Pre-Order' : 'Add To Cart'} | ${
      addBtn.dataset?.price
    }`

  let { selectedOrFirstAvailableVariant, product } = json
  let currentVariant = product.variants.filter(
    (v) => v.id === selectedOrFirstAvailableVariant
  )[0]

  ctx.on('cart:toggle', () => {
    addBtn.innerHTML = addText
  })

  on(addBtn, 'click', (e) => {
    e.preventDefault()

    addBtn.innerHTML = 'Adding...'

    //get addons
    qsa('.js-addon.selected', node).forEach((el) => {
      const addonJson = JSON.parse(qs('.js-addon-json', el).innerHTML)

      let { addonSelectedOrFirstAvailableVariant, addonProduct } = addonJson
      let addonVariant = addonProduct.variants.filter(
        (v) => v.id === addonSelectedOrFirstAvailableVariant
      )[0]

      addVariant(addonVariant, 1, null)
    })
    // addBtn.innerHTML = 'adding...'

    let selectedVariant = qs('select[name="id"]', node).value

    currentVariant = selectedVariant
      ? product.variants.filter(
          (v) => v.id === parseInt(qs('select[name="id"]', node).value)
        )[0]
      : currentVariant

    addVariant(currentVariant, quantity?.value || 1, null)
    console.log(json)
  })

  return () => {}
})
