import { component } from "picoapp";
import choozy from "choozy";
import { on, toggle, qsa, qs, remove, add } from "@selfaware/martha";

export default component((node, ctx) => {
  qs("main").append(node);

  let sectionContainer = document.createElement('div')
  add(sectionContainer, 'faq-container')

  qs('main').append(sectionContainer)

  qsa('section').forEach(section => {
    sectionContainer.append(section)
  });
});
