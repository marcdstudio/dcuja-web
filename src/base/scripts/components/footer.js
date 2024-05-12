import { component } from 'picoapp'
import choozy from 'choozy'
import { remove, add } from '@selfaware/martha'

import { update } from 'lazim'

export default component((node, ctx) => {
  let { images, image } = choozy(node);

  const allImages = JSON.parse(images?.innerHTML).images;

  const themeImages = () => {
    const currentTheme = document.body.dataset.theme
    const themeImage = allImages.find((img) => img.theme == currentTheme);

    image.src = themeImage.image
    image.dataset.src = themeImage.image

    update()
  }

  themeImages()

  ctx.on('theme', () => {
    themeImages()
  })
})
