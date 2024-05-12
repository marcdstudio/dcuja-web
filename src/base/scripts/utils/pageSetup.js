import { qs, remove, add } from '@selfaware/martha'

export default function pageSetup() {
  let announceBar = qs('.js-announceBar')

  if (announceBar) {
    add(announceBar, 'hidden')
  }

  if (qs(`.js-announceBar[data-page="${window.location.pathname}"]`)) {
    remove(
      qs(`.js-announceBar[data-page="${window.location.pathname}"]`),
      'hidden'
    )
  } else if (qs(`.js-announceBar:not([data-page])`)) {
    remove(qs(`.js-announceBar:not([data-page])`), 'hidden')
  }
}
