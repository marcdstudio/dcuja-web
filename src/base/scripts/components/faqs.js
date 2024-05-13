import { component } from "picoapp";
import choozy from "choozy";
import { on, toggle, qsa, qs, remove, add } from "@selfaware/martha";

export default component((node, ctx) => {
  let { faq, body, inner, plus } = choozy(node);

  console.log('faqs');

  node.style.setProperty('--drawerHeight', `${inner.offsetHeight}px`)

  on(faq, "click", (e) => {
    toggle(body, "open");
    toggle(node, "active");
    toggle(plus, "rotate-45");
  });
});
