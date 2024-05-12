import { component } from 'picoapp'
import choozy from 'choozy'
import { remove, add, qs, qsa, on, has, toggle } from '@selfaware/martha'

export default component((node, ctx) => {
  let { option, variantTitle, swatch } = choozy(node)
  let addBtn = qsa('.js-add-to-cart')
  let optionGroups = qsa('.js-optionGroup')

  let selectedSwatch
  let options = qsa('.js-variantOption', node)

  const updateVariant = () => {
    if (!qs('.js-swatch')) return

    selectedSwatch = qs('.js-swatch.active', node)?.dataset?.title || null

    // //find variant that matches title and size
    const newVariant = options.find(
      (variant) => variant.dataset.title === selectedSwatch
    )

    //clear all options
    options.forEach((selectedVariant) =>
      selectedVariant.removeAttribute('selected')
    )

    //select new variant
    if (newVariant) newVariant.setAttribute('selected', 'selected')

    //configure button with inventory
    if (!newVariant || newVariant.dataset.inventory < 1) {
      addBtn.forEach((btn) => {
        btn.setAttribute('disabled', 'disabled')
        btn.innerHTML = 'Out Of Stock'
        add(btn, 'oos')
      })
    } else {
      addBtn.forEach((btn) => {
        btn.removeAttribute('disabled')
        btn.innerHTML = `${
          btn.dataset.preorder == 'true' ? 'Pre-Order' : 'Add To Cart'
        } | ${btn.dataset.price}`
        remove(btn, 'oos')
      })
    }
  }

  const variantSelect = (curTitle) => {
    //clear swatches
    qsa('.js-swatch').forEach((swatch) => {
      remove(swatch, 'active')
      swatch.setAttribute('aria-checked', false)
    })

    //select new swatch
    let selectedSwatch = qs(`.js-swatch[data-title="${curTitle}"]`, node)
    add(selectedSwatch, 'active')
    selectedSwatch.setAttribute('aria-checked', true)

    variantTitle.innerHTML = curTitle

    ctx.emit('variant:change')
  }

  on(swatch, 'click', (e) => {
    if (has(e.target, 'active')) {
      return
    }

    let curTitle = e.target.getAttribute('data-title')

    variantSelect(curTitle)
    updateVariant()
  })

  //update variant on first load
  if (options.length > 1) updateVariant()

  ctx.on('variant:update', () => {
    updateVariant()
  })

  //nav bar selector
  // qsa('.js-navOptions[data-group]').forEach((group) => {
  //   let swatchToggle = qs('.js-menuSwatch', group)

  //   on(swatchToggle, 'click', (e) => {
  //     let curGroup = e.target.closest('.js-navOptions')

  //     toggle(qs('.js-navOptionGroup', curGroup), 'hidden')
  //     toggle(qs('.js-chevronNav', curGroup), 'rotate-180')
  //   })
  // })

  // qsa('.js-swatchNav').forEach((navSwatch) => {
  //   on(navSwatch, 'click', (e) => {
  //     let curTitle = e.target.getAttribute('data-title')
  //     let container = e.target.closest('.js-navOptions[data-group]')
  //     let curGroup = container.dataset?.group

  //     toggle(e.target.closest('.js-navOptionGroup'), 'hidden')
  //     toggle(qs('.js-chevronNav', container), 'rotate-180')

  //     //hide selected from list
  //     qsa('.js-swatchNav', container).forEach((item) => {
  //       if (item.dataset.title === e.target.dataset.title) {
  //         add(item, 'hidden')
  //         qs('.js-selectedNavOption', container).innerHTML = item.dataset.title
  //       } else {
  //         remove(item, 'hidden')
  //       }
  //     })

  //     variantSelect(curTitle, curGroup)
  //     updateVariant()
  //   })
  // })
})
