import { component } from "picoapp";
import choozy from "choozy";
import { remove, add, on, qsa } from "@selfaware/martha";

export default component((node, ctx) => {
  let { images } = choozy(node);

  const allImages = JSON.parse(images?.innerHTML).images;
  const allBlocks = qsa('.js-image', node)

  const themeImages = () => {
    let currentTheme = document.body.dataset.theme
    let themeImages = []

    allImages.forEach((img, index) => {
      if(img.theme == currentTheme){
        themeImages.push(img)
      }
    });

    allBlocks.forEach(img => img.src = '');

    themeImages.forEach((img, index) => {
      if(img.theme == currentTheme){
        allBlocks[index].src = img.image
      }
    });
  }

  themeImages()

  ctx.on('theme', () => {
    themeImages()
  })
});
