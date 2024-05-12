import { component } from 'picoapp'
import choozy from 'choozy'
import { remove, add, qs, qsa, on, has, toggle } from '@selfaware/martha'
import { gsap, Expo } from 'gsap'

export default component((node, ctx) => {
  let {
    activeFrequency,
    content,
    contentWrap,
    toggleFrequency,
    arrow,
    frequencyOption,
    subOption,
    frequencyWrap,
  } = choozy(node)

  const toggleOptions = () => {
    let contentHeight = content.offsetHeight

    toggle(contentWrap, 'active')
    toggle(arrow, 'rotate-90')
    toggle(arrow, '-rotate-90')

    if (has(contentWrap, 'active')) {
      contentWrap.style.maxHeight = `${contentHeight + 10}px`
    } else {
      contentWrap.style.maxHeight = '0px'
    }
  }

  on(toggleFrequency, 'click', (e) => {
    toggleOptions()
  })

  on(frequencyOption, 'click', (e) => {
    toggleOptions()

    qsa('.js-frequencyOption', node).forEach((opt) => {
      remove(opt, 'active')
    })

    add(e.target, 'active')

    let curOption = e.target.dataset.id

    activeFrequency.innerHTML = e.target.dataset.title
    toggleFrequency.dataset.id = curOption
  })
})
