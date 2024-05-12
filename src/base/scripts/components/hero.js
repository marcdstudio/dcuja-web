import { component } from "picoapp";
import choozy from "choozy";
import { remove, add, on, qsa } from "@selfaware/martha";

export default component((node, ctx) => {
  let { products, toggle, icon, hero, link } = choozy(node);

  const allProducts = JSON.parse(products?.innerHTML).products;

  const updateTheme = (theme, primary, secondary, tertiary) => {
    document.body.style.setProperty("--primary", `${primary}`);
    document.body.style.setProperty("--secondary", `${secondary}`);
    document.body.style.setProperty("--tertiary", `${tertiary}`);
    document.body.dataset.theme = theme
  }

  updateTheme(node.dataset.theme, node.dataset.primary, node.dataset.secondary, node.dataset.tertiary)

  on(toggle, 'click', (e) => {
    let btn = e.target
    let index = parseInt(btn.dataset.index) - 1
    updateTheme(btn.dataset.theme, btn.dataset.primary, btn.dataset.secondary, btn.dataset.tertiary)

    remove(toggle, 'active')
    add(e.target, 'active')

    hero.src = allProducts[index]?.hero
    icon.src = allProducts[index]?.icon
    link.href = allProducts[index]?.url

    ctx.emit('theme')
  })
});
