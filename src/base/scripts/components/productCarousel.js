import { component } from "picoapp";
import choozy from "choozy";
import { remove, add, qs, on, qsa } from "@selfaware/martha";
import EmblaCarousel from "embla-carousel";

export default component((node, ctx) => {
  let {
    carousel,
    next,
    prev,
    counter,
    productImages,
    variantTitle,
    btns,
    thumb,
  } = choozy(node);

  let embla;

  const images = JSON.parse(productImages?.innerHTML)?.images;
  images.forEach((el) => {});

  const initEmbla = () => {
    embla = EmblaCarousel(carousel, { loop: true, skipSnaps: false });

    if (next && prev) {
      prev.addEventListener("click", embla.scrollPrev, false);
      next.addEventListener("click", embla.scrollNext, false);
    }

    let variantImages = qsa(".product-img");

    btns.innerHTML = "";

    //render buttons
    variantImages.forEach((img, index) => {
      let btn = document.createElement("button");
      btn.addEventListener("click", (e) => {
        embla.scrollTo(index);
      });
      btn.classList.add("carousel-dot");
      btns.appendChild(btn);
    });

    add(qs(".carousel-dot:first-child"), "is-active");

    embla.on("select", () => {
      remove(qs(".carousel-dot.is-active"), "is-active");
      add(
        qs(`.carousel-dot:nth-child(${embla.selectedScrollSnap() + 1})`, node),
        "is-active"
      );
    });
  };

  initEmbla();

  ctx.on("variant:change", () => {
    let currentVariant = variantTitle.innerHTML;

    carousel.innerHTML = "";

    //render variant images
    carousel.innerHTML = `
        <div class="flex select-none w-full h-[100vw] m:h-hero m:min-h-[calc(100vh-13rem)]">
        ${images
          .map((img) => {
            if (
              img.alt.toLowerCase() == currentVariant ||
              img.alt.toLowerCase() == "all"
            ) {
              return `
              <div class="w-full h-full product-img m:px-0 relative min-w-[100%] overflow-hidden">
                <img class="w-full h-full object-cover absolute left-0 top-0" src="https://cdn.shopify.com/s/files/1/0752/7061/9456/${img.src}" alt="${img.alt}"/>
              </div>
            `;
            }
            // If the condition is not met, return an empty string
            return "";
          })
          .join("")}
        </div>
    `;

    //reset carousel
    if (embla) {
      embla.destroy();
    }

    //initialize carousel
    initEmbla();
  });

  on(thumb, "click", (e) => {
    embla.scrollTo(parseInt(e.target.dataset.index - 1));
  });
});
