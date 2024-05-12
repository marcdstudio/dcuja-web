import app from 'base/scripts/app.js'
import { remove, add, qs, qsa } from '@selfaware/martha'

export default function variantSelect(curTitle, collection) {
  let carousel = qs('.js-carousel')
  let bank = qs('.product-image-bank')
  let thumbWrap = qs('.product-thumb-wrap')

  if (!collection) {
    remove(qs('.js-swatch.active'), 'active')
    add(qs(`.js-swatch[data-title="${curTitle}"]`), 'active')
  }
  let prevImages = carousel.querySelectorAll('.product-img')
  let curImages = bank.querySelectorAll(
    `.product-img[data-title='${curTitle}']`
  )
  let curThumbs = thumbWrap.querySelectorAll(
    `.product-thumb[data-title='${curTitle}']`
  )
  prevImages.forEach((img) => {
    remove(img, 'is-selected')
    img.style = null
    bank.append(img)
  })
  curImages.forEach((img) => {
    carousel.append(img)
  })
  qsa('.product-thumb').forEach((thumb) => {
    add(thumb, 'hidden')
  })
  curThumbs.forEach((thumb) => {
    remove(thumb, 'hidden')
  })
  app.emit('variant:change')
}
