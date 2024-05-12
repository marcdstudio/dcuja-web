import { component } from 'picoapp'
import { getSizedImageUrl, imageSize } from 'base/scripts/utils/images.js'
import { formatMoney } from 'base/scripts/utils/currency.js'
import app from 'base/scripts/app.js'
import { gsap, Power4 } from 'gsap'
import { add, qs, qsa, remove } from '@selfaware/martha'

const tl = gsap.timeline()

const X = `<svg width="100%" height="100%" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L17.9706 17.9706" stroke="#000" stroke-width="2"/>
<path d="M1 17.9705L17.9706 0.999897" stroke="#000" stroke-width="2"/>
</svg>`

function createItem({
  variant_id: id,
  product_title: title,
  line_price: price,
  original_line_price: original_price,
  variant_title,
  image,
  url,
  quantity,
  ...item
}) {
  // const img = image
  //   ? getSizedImageUrl(
  //       image.replace('.' + imageSize(image), ''),
  //       '400x' // TODO hacky af
  //     )
  //   : 'https://source.unsplash.com/R9OS29xJb-8/2000x1333'

  return `
<div class='cart-drawer__item' data-component='cartDrawerItem' data-id=${id} ${
    item.selling_plan_allocation
      ? `data-planid='${item.selling_plan_allocation.selling_plan.id}'`
      : ``
  }>
  <div class='relative w-full border-b border-solid p-20'>
    <div class="flex justify-between w-full">
      <div class="flex w-full">
        <a href='${url}' class="cart-image" aria-label="view ${title}">
          <img class="w-full h-full object-cover" src='${image}' alt="product thumbnail"/>
        </a>
        <div class="pl-10 flex items-start flex-col justify-between font-bold flex-grow">
          <div class="w-full flex-grow">
            <div class="w-full flex justify-between">
              <a href='${url}' class='title-small uppercase'>${title}</a>
              <div class='cart-drawer__item--price flex-shrink-0'>
                ${
                  original_price > price
                    ? `<span class="js-price line-through">$${formatMoney(
                        original_price
                      )}</span>
                <span class="js-discount ml-5">$${formatMoney(price)}</span>`
                    : `<span class="js-price">$${formatMoney(price)}</span>`
                }
              </div>
            </div>
            ${
              variant_title
                ? `<div class='item-variant__title cart-item--detail'>${variant_title}</div>`
                : ``
            }
          </div>
          <div class="w-full flex justify-between items-end">
            <div class='cart-item__qty flex justify-between px-10 flex-shrink-0 items-center leading-100 text-14 py-5 border border-solid h-25'>
              <div class='cart-quantity btn-quantity js-remove-single cursor-pointer'><span class="block">&ndash;</span></div>
              <div class='js-single-quantity mx-5'>${quantity}</div>
              <div class='cart-quantity btn-quantity js-add-single cursor-pointer'><span class="block">+</span></div>
            </div>
            <button class='button--reset js-remove-item text-right text-12 cart-item__remove lh100' aria-label="remove item"><span class="block underline">REMOVE</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
}

function renderItems(items) {
  return items.length > 0
    ? items.reduce((markup, item) => {
        markup += createItem(item)
        return markup
      }, '')
    : `<div class='px-20 m:px-40'><p class="py-20 w-full border-b-2 border-solid border-blue">Your cart is empty</p></div>`
}

export default component((node, ctx) => {
  const overlay = node.querySelector('.js-overlay')
  const closeButton = node.querySelector('.js-close')
  const subtotal = node.querySelector('.js-subtotal')
  const itemsRoot = node.querySelector('.js-items')
  const loading = itemsRoot.innerHTML

  const render = (cart) => {
    itemsRoot.innerHTML = renderItems(cart.items, itemsRoot)
    subtotal.innerHTML = `${formatMoney(cart.total_price)}`
  }

  const open = (cart) => {
    node.classList.add('is-active')
    itemsRoot.innerHTML = loading

    setTimeout(render(cart), 10)
    app.mount()

    tl.to('.cart-drawer', {
      x: '0%',
      duration: 0.6,
      ease: Power4.easeOut,
      onComplete: () => {},
    })
  }

  const close = () => {
    node.classList.remove('is-active')

    tl.to('.cart-drawer', {
      x: '100%',
      duration: 0.6,
      ease: Power4.easeOut,
      onComplete: () => {
        app.hydrate({ cartOpen: false })
      },
    })
  }

  render(ctx.getState().cart)

  overlay.addEventListener('click', close)
  closeButton.addEventListener('click', close)

  const checkCart = (cart) => {
    // setTimeout(() => {
    if (cart.items.length < 1) {
      remove(qs('.cart-empty__wrapper'), 'hidden')
      add(qs('.cart-drawer__items'), 'hidden')
      add(qs('.js-cartFooter'), 'hidden')
    } else {
      add(qs('.cart-empty__wrapper'), 'hidden')
      remove(qs('.cart-drawer__items'), 'hidden')
      remove(qs('.js-cartFooter'), 'hidden')
    }
    // }, 100);
  }

  ctx.on('cart:toggle', ({ cart, cartOpen }) => {
    cartOpen && open(cart)

    checkCart(ctx.getState().cart)
  })

  ctx.on('cart:updated', () => {
    render(ctx.getState().cart)
    app.mount()

    checkCart(ctx.getState().cart)
  })
})
