import { picoapp } from 'picoapp'

import accountLogin from 'base/scripts/components/accountLogin.js'
import accountAddresses from 'base/scripts/components/accountAddresses.js'
import lazy from 'base/scripts/components/lazy.js'
import header from 'base/scripts/components/header.js'
import cartDrawer from 'base/scripts/components/cartDrawer.js'
import cartDrawerItem from 'base/scripts/components/cartDrawerItem.js'
import productCarousel from 'base/scripts/components/productCarousel.js'
import product from 'base/scripts/components/product.js'
import productCounter from 'base/scripts/components/productCounter.js'
import productVariant from 'base/scripts/components/productVariant.js'
import productOptions from 'base/scripts/components/productOptions.js'
import collection from 'base/scripts/components/collection.js'
import faqs from 'base/scripts/components/faqs.js'
import checkout from 'base/scripts/components/checkout.js'
import newsletter from 'base/scripts/components/newsletter.js'
import carousel from 'base/scripts/components/carousel.js'
import footer from 'base/scripts/components/footer.js'
import contact from 'base/scripts/components/contact.js'
import marquee from 'base/scripts/components/marquee.js'
import blogFilter from 'base/scripts/components/blogFilter.js'
import video from 'base/scripts/components/video.js'
import signup from 'base/scripts/components/signup.js'
import backinstock from 'base/scripts/components/backinstock.js'
import productSubscriptions from 'base/scripts/components/productSubscriptions.js'
import about from 'base/scripts/components/about.js'

import hero from 'base/scripts/components/hero.js'
import banner from 'base/scripts/components/banner.js'
import social from 'base/scripts/components/social.js'
import cards from 'base/scripts/components/cards.js'
import faqsImage from 'base/scripts/components/faqsImage.js'
import steps from 'base/scripts/components/steps.js'

const state = {
  cartOpen: false,
}

const components = {
  accountLogin,
  accountAddresses,
  header,
  cartDrawer,
  cartDrawerItem,
  lazy,
  productCarousel,
  product,
  productCounter,
  productVariant,
  productOptions,
  collection,
  faqs,
  checkout,
  newsletter,
  carousel,
  footer,
  contact,
  marquee,
  blogFilter,
  video,
  signup,
  backinstock,
  productSubscriptions,
  about,

  hero,
  banner,
  social,
  cards,
  faqsImage,
  steps,
}

export default picoapp(components, state)
