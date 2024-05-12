import { component } from 'picoapp'
import choozy from 'choozy'
import { remove, add, qs, on, toggle } from '@selfaware/martha'

export default component((node, ctx) => {
  let { quantity, remove, add } = choozy(node)

  const min = 1
  const max = 1000

  let count = 1

  console.log('counter')

  const set = (i) => {
    count = Math.max(min, Math.min(i, max || 10000))

    quantity.innerHTML = count
    quantity.value = count
  }

  remove.addEventListener('click', (e) => {
    e.preventDefault()
    set(--count)

    console.log('remove')
  })

  add.addEventListener('click', (e) => {
    e.preventDefault()
    set(++count)

    console.log('add')
  })
})
