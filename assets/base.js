/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/scripts/app.js":
/*!*********************************!*\
  !*** ./src/base/scripts/app.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var base_scripts_components_accountLogin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base/scripts/components/accountLogin.js */ "./src/base/scripts/components/accountLogin.js");
/* harmony import */ var base_scripts_components_accountAddresses_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base/scripts/components/accountAddresses.js */ "./src/base/scripts/components/accountAddresses.js");
/* harmony import */ var base_scripts_components_lazy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base/scripts/components/lazy.js */ "./src/base/scripts/components/lazy.js");
/* harmony import */ var base_scripts_components_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! base/scripts/components/header.js */ "./src/base/scripts/components/header.js");
/* harmony import */ var base_scripts_components_cartDrawer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! base/scripts/components/cartDrawer.js */ "./src/base/scripts/components/cartDrawer.js");
/* harmony import */ var base_scripts_components_cartDrawerItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! base/scripts/components/cartDrawerItem.js */ "./src/base/scripts/components/cartDrawerItem.js");
/* harmony import */ var base_scripts_components_productCarousel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! base/scripts/components/productCarousel.js */ "./src/base/scripts/components/productCarousel.js");
/* harmony import */ var base_scripts_components_product_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! base/scripts/components/product.js */ "./src/base/scripts/components/product.js");
/* harmony import */ var base_scripts_components_productCounter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! base/scripts/components/productCounter.js */ "./src/base/scripts/components/productCounter.js");
/* harmony import */ var base_scripts_components_productVariant_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! base/scripts/components/productVariant.js */ "./src/base/scripts/components/productVariant.js");
/* harmony import */ var base_scripts_components_productOptions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! base/scripts/components/productOptions.js */ "./src/base/scripts/components/productOptions.js");
/* harmony import */ var base_scripts_components_collection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! base/scripts/components/collection.js */ "./src/base/scripts/components/collection.js");
/* harmony import */ var base_scripts_components_faqs_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! base/scripts/components/faqs.js */ "./src/base/scripts/components/faqs.js");
/* harmony import */ var base_scripts_components_checkout_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! base/scripts/components/checkout.js */ "./src/base/scripts/components/checkout.js");
/* harmony import */ var base_scripts_components_newsletter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! base/scripts/components/newsletter.js */ "./src/base/scripts/components/newsletter.js");
/* harmony import */ var base_scripts_components_carousel_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! base/scripts/components/carousel.js */ "./src/base/scripts/components/carousel.js");
/* harmony import */ var base_scripts_components_footer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! base/scripts/components/footer.js */ "./src/base/scripts/components/footer.js");
/* harmony import */ var base_scripts_components_contact_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! base/scripts/components/contact.js */ "./src/base/scripts/components/contact.js");
/* harmony import */ var base_scripts_components_marquee_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! base/scripts/components/marquee.js */ "./src/base/scripts/components/marquee.js");
/* harmony import */ var base_scripts_components_blogFilter_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! base/scripts/components/blogFilter.js */ "./src/base/scripts/components/blogFilter.js");
/* harmony import */ var base_scripts_components_video_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! base/scripts/components/video.js */ "./src/base/scripts/components/video.js");
/* harmony import */ var base_scripts_components_signup_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! base/scripts/components/signup.js */ "./src/base/scripts/components/signup.js");
/* harmony import */ var base_scripts_components_backinstock_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! base/scripts/components/backinstock.js */ "./src/base/scripts/components/backinstock.js");
/* harmony import */ var base_scripts_components_productSubscriptions_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! base/scripts/components/productSubscriptions.js */ "./src/base/scripts/components/productSubscriptions.js");
/* harmony import */ var base_scripts_components_about_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! base/scripts/components/about.js */ "./src/base/scripts/components/about.js");
/* harmony import */ var base_scripts_components_hero_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! base/scripts/components/hero.js */ "./src/base/scripts/components/hero.js");
/* harmony import */ var base_scripts_components_banner_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! base/scripts/components/banner.js */ "./src/base/scripts/components/banner.js");
/* harmony import */ var base_scripts_components_social_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! base/scripts/components/social.js */ "./src/base/scripts/components/social.js");
/* harmony import */ var base_scripts_components_cards_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! base/scripts/components/cards.js */ "./src/base/scripts/components/cards.js");
/* harmony import */ var base_scripts_components_faqsImage_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! base/scripts/components/faqsImage.js */ "./src/base/scripts/components/faqsImage.js");































var state = {
  cartOpen: false
};
var components = {
  accountLogin: base_scripts_components_accountLogin_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  accountAddresses: base_scripts_components_accountAddresses_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  header: base_scripts_components_header_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  cartDrawer: base_scripts_components_cartDrawer_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  cartDrawerItem: base_scripts_components_cartDrawerItem_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  lazy: base_scripts_components_lazy_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  productCarousel: base_scripts_components_productCarousel_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  product: base_scripts_components_product_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  productCounter: base_scripts_components_productCounter_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  productVariant: base_scripts_components_productVariant_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  productOptions: base_scripts_components_productOptions_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  collection: base_scripts_components_collection_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  faqs: base_scripts_components_faqs_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  checkout: base_scripts_components_checkout_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  newsletter: base_scripts_components_newsletter_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  carousel: base_scripts_components_carousel_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  footer: base_scripts_components_footer_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  contact: base_scripts_components_contact_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  marquee: base_scripts_components_marquee_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  blogFilter: base_scripts_components_blogFilter_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  video: base_scripts_components_video_js__WEBPACK_IMPORTED_MODULE_21__["default"],
  signup: base_scripts_components_signup_js__WEBPACK_IMPORTED_MODULE_22__["default"],
  backinstock: base_scripts_components_backinstock_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  productSubscriptions: base_scripts_components_productSubscriptions_js__WEBPACK_IMPORTED_MODULE_24__["default"],
  about: base_scripts_components_about_js__WEBPACK_IMPORTED_MODULE_25__["default"],
  hero: base_scripts_components_hero_js__WEBPACK_IMPORTED_MODULE_26__["default"],
  banner: base_scripts_components_banner_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  social: base_scripts_components_social_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  cards: base_scripts_components_cards_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  faqsImage: base_scripts_components_faqsImage_js__WEBPACK_IMPORTED_MODULE_30__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.picoapp)(components, state));

/***/ }),

/***/ "./src/base/scripts/base.js":
/*!**********************************!*\
  !*** ./src/base/scripts/base.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lazim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazim */ "./node_modules/lazim/dist/lazim.es.js");
/* harmony import */ var base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base/scripts/app.js */ "./src/base/scripts/app.js");
/* harmony import */ var base_scripts_router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base/scripts/router.js */ "./src/base/scripts/router.js");
/* harmony import */ var base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base/scripts/utils/cart.js */ "./src/base/scripts/utils/cart.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var base_scripts_utils_pageSetup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! base/scripts/utils/pageSetup */ "./src/base/scripts/utils/pageSetup.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import '../styles/index.scss'
// import '@/lib/select.js'
// import lazim from 'lazim'







var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
/**
 * store binding fn
 */

(0,lazim__WEBPACK_IMPORTED_MODULE_0__.bind)();
/**
 * register scrolltrigger
 */

gsap_all__WEBPACK_IMPORTED_MODULE_5__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);
base_scripts_router_js__WEBPACK_IMPORTED_MODULE_2__["default"].on('after', function (_ref) {
  var title = _ref.title,
      pathname = _ref.pathname;
  base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].unmount();
  base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].mount(); // if (window.location.href.indexOf('products') > -1) {
  //   var api = new Yotpo.API(yotpo)
  //   api.refreshWidgets()
  // }

  /**
   * bind new images
   */

  (0,lazim__WEBPACK_IMPORTED_MODULE_0__.bind)();
  /**
   * hide subnav
   */

  base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('menu:close');
  base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('transition:complete');
  (0,base_scripts_utils_pageSetup__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
(0,base_scripts_utils_pageSetup__WEBPACK_IMPORTED_MODULE_4__["default"])();
/**
 * load any data that your site needs on fist load
 */

Promise.all([(0,base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_3__.fetchCart)()]).then(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 1),
      cart = _ref3[0];

  /**
   * add the cart data to the picoapp instance
   */
  base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].hydrate({
    cart: cart
  });
  /**
   * mount any components defined on the page
   */

  base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].mount();
});

/***/ }),

/***/ "./src/base/scripts/components/about.js":
/*!**********************************************!*\
  !*** ./src/base/scripts/components/about.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollToPlugin */ "./node_modules/gsap/dist/ScrollToPlugin.js");
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__);






gsap_all__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);
gsap_all__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__.ScrollToPlugin);
/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      anchors = _choozy.anchors;

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_5__.qsa)('[data-section]').forEach(function (section, index) {
    var anchor = document.createElement('button');
    anchor.innerHTML = section.dataset.title || section.dataset.section;
    anchor.classList.add('js-anchor');

    if (index == 0) {
      anchor.classList.add('active');
    }

    anchor.dataset.section = section.dataset.section;
    anchors.appendChild(anchor);
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_5__.on)(anchor, 'click', function () {
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "[data-title=\"".concat(section.dataset.title, "\"]"),
          offsetY: 75
        },
        ease: 'expo.out'
      });
    });
  });

  var setActive = function setActive(target) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_5__.qsa)('.js-anchor').forEach(function (anchor) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_5__.remove)(anchor, 'active');
    });
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_5__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_5__.qs)(".js-anchor[data-section=\"".concat(target, "\"]")), 'active');
  };

  gsap_all__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.toArray('[data-section]').forEach(function (section) {
    gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
      trigger: section,
      start: 'top top+=150',
      onEnter: function onEnter(self) {
        setActive(self.trigger.dataset.section);
      }
    });
  });
  gsap_all__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.toArray('[data-section]').forEach(function (section) {
    gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
      trigger: section,
      start: 'bottom top',
      onLeaveBack: function onLeaveBack(self) {
        setActive(self.trigger.dataset.section);
      }
    });
  });
  document.querySelectorAll('img').forEach(function (img) {
    img.onload = function () {
      gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.refresh();
      img.onload = null;
    };
  });
  setTimeout(function () {
    gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.refresh();
  }, 1000);
  return function () {
    var triggers = gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.getAll();
    triggers.forEach(function (trigger) {
      trigger.kill();
    });
  };
}));

/***/ }),

/***/ "./src/base/scripts/components/accountAddresses.js":
/*!*********************************************************!*\
  !*** ./src/base/scripts/components/accountAddresses.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      addWrap = _choozy.addWrap,
      toggleAdd = _choozy.toggleAdd,
      toggleEdit = _choozy.toggleEdit,
      editWrap = _choozy.editWrap;

  if (toggleAdd != undefined) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(toggleAdd, 'click', function () {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(addWrap, 'hidden');
    });
  }

  if (toggleEdit != undefined) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(toggleEdit, 'click', function () {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(editWrap, 'hidden');
    });
  }
}));

/***/ }),

/***/ "./src/base/scripts/components/accountLogin.js":
/*!*****************************************************!*\
  !*** ./src/base/scripts/components/accountLogin.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var login = node.querySelector('.js-login-dialog');
  var recover = node.querySelector('.js-recover-dialog');
  var recoverLink = node.querySelector('.js-recover-trigger');
  var cancelRecoverLink = node.querySelector('.js-recover-cancel');
  /* eslint-disable */

  var recoverIsTarget = window.location.hash.match(/\#recover/) ? true : false;
  /* eslint-enable */

  var successMessage = node.querySelector('.js-recover-success') !== null; // console.log('success',successMessage)
  // console.log('test');
  // if (recoverIsTarget || successMessage) {
  //   console.log('test')
  //   login.style.display = 'none'
  //   recover.style.display = 'block'
  // } else {
  //   login.style.display = 'block'
  // }

  recoverLink.addEventListener('click', function (e) {
    e.preventDefault();
    login.style.display = 'none';
    recover.style.display = 'block';
  });
  cancelRecoverLink.addEventListener('click', function (e) {
    e.preventDefault();
    recover.style.display = 'none';
    login.style.display = 'block';
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/backinstock.js":
/*!****************************************************!*\
  !*** ./src/base/scripts/components/backinstock.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      email = _choozy.email,
      bis = _choozy.bis,
      biscontent = _choozy.biscontent,
      _success = _choozy.success,
      biswrap = _choozy.biswrap,
      openbis = _choozy.openbis,
      closebis = _choozy.closebis,
      formbis = _choozy.formbis;

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(bis, 'click', function (e) {
    e.preventDefault();
    var currentVariant = node.dataset.variant;
    $.ajax({
      type: 'POST',
      url: 'https://a.klaviyo.com/onsite/components/back-in-stock/subscribe',
      data: {
        a: 'V7iCjX',
        email: email.value,
        variant: currentVariant,
        platform: 'shopify',
        store: 'drinkmodica'
      },
      success: function success(response) {
        console.log(response);
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(formbis, 'hidden');
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(_success, 'hidden');
      }
    });
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/banner.js":
/*!***********************************************!*\
  !*** ./src/base/scripts/components/banner.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      images = _choozy.images;

  var allImages = JSON.parse(images === null || images === void 0 ? void 0 : images.innerHTML).images;
  var allBlocks = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-image', node);

  var themeImages = function themeImages() {
    var currentTheme = document.body.dataset.theme;
    var themeImages = [];
    allImages.forEach(function (img, index) {
      if (img.theme == currentTheme) {
        themeImages.push(img);
      }
    });
    allBlocks.forEach(function (img) {
      return img.src = '';
    });
    themeImages.forEach(function (img, index) {
      if (img.theme == currentTheme) {
        allBlocks[index].src = img.image;
      }
    });
  };

  themeImages();
  ctx.on('theme', function () {
    themeImages();
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/blogFilter.js":
/*!***************************************************!*\
  !*** ./src/base/scripts/components/blogFilter.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      filterToggle = _choozy.filterToggle,
      clearFilter = _choozy.clearFilter;

  if (window.location.href.includes('/tagged/')) {
    var tag = window.location.href.split('tagged/')[1];
    var targetTag = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)(".js-filter[data-filter=\"".concat(tag, "\"]"));
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-filter', node).forEach(function (el) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(el, 'active');
    });

    if (targetTag) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(targetTag, 'active');
    }
  }
}));

/***/ }),

/***/ "./src/base/scripts/components/cards.js":
/*!**********************************************!*\
  !*** ./src/base/scripts/components/cards.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      carousel = _choozy.carousel,
      next = _choozy.next,
      prev = _choozy.prev,
      counter = _choozy.counter,
      activeIndex = _choozy.activeIndex,
      cards = _choozy.cards;

  var embla = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])(carousel, {
    loop: true,
    skipSnaps: false,
    trimSnaps: true,
    containScroll: true,
    align: 'start'
  });

  if (next) {
    next.addEventListener('click', embla.scrollNext, false);
    prev.addEventListener('click', embla.scrollPrev, false); // on(next, 'click', () => {
    //   embla.scrollNext
    // })
  }

  if (counter) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.on)(counter, 'click', function (e) {
      embla.scrollTo(e.target.dataset.index);
    });
  }

  embla.on('select', function () {
    if (counter) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.remove)(counter, 'is-active');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)(".js-counter[data-index=\"".concat(embla.selectedScrollSnap(), "\"]"), node), 'is-active');
    }

    if (activeIndex) {
      activeIndex.innerHTML = embla.selectedScrollSnap() + 1;
    }
  }); // return () => {
  //   if (next) {
  //       next.removeEventListener('click', embla.scrollNext, false)
  //       prev.removeEventListener('click', embla.scrollPrev, false)
  //   }
  // }
}));

/***/ }),

/***/ "./src/base/scripts/components/carousel.js":
/*!*************************************************!*\
  !*** ./src/base/scripts/components/carousel.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      carousel = _choozy.carousel,
      next = _choozy.next,
      prev = _choozy.prev,
      counter = _choozy.counter,
      activeIndex = _choozy.activeIndex;

  var embla = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])(carousel, {
    loop: node.dataset.loop == 'false' ? false : true,
    skipSnaps: false,
    trimSnaps: true,
    containScroll: true,
    speed: node.dataset.speed ? node.dataset.speed : 10,
    align: node.dataset.start == 'left' ? 'start' : 'center'
  });

  if (next) {
    next.addEventListener('click', embla.scrollNext, false);
    prev.addEventListener('click', embla.scrollPrev, false); // on(next, 'click', () => {
    //   embla.scrollNext
    // })
  }

  if (counter) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.on)(counter, 'click', function (e) {
      embla.scrollTo(e.target.dataset.index);
    });
  }

  embla.on('select', function () {
    if (counter) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.remove)(counter, 'is-active');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)(".js-counter[data-index=\"".concat(embla.selectedScrollSnap(), "\"]"), node), 'is-active');
    }

    if (activeIndex) {
      activeIndex.innerHTML = embla.selectedScrollSnap() + 1;
    }
  }); // return () => {
  //   if (next) {
  //       next.removeEventListener('click', embla.scrollNext, false)
  //       prev.removeEventListener('click', embla.scrollPrev, false)
  //   }
  // }
}));

/***/ }),

/***/ "./src/base/scripts/components/cartDrawer.js":
/*!***************************************************!*\
  !*** ./src/base/scripts/components/cartDrawer.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var base_scripts_utils_images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base/scripts/utils/images.js */ "./src/base/scripts/utils/images.js");
/* harmony import */ var base_scripts_utils_currency_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base/scripts/utils/currency.js */ "./src/base/scripts/utils/currency.js");
/* harmony import */ var base_scripts_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base/scripts/app.js */ "./src/base/scripts/app.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
var _excluded = ["variant_id", "product_title", "line_price", "original_line_price", "variant_title", "image", "url", "quantity"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline();
var X = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M1 1L17.9706 17.9706\" stroke=\"#000\" stroke-width=\"2\"/>\n<path d=\"M1 17.9705L17.9706 0.999897\" stroke=\"#000\" stroke-width=\"2\"/>\n</svg>";

function createItem(_ref) {
  var id = _ref.variant_id,
      title = _ref.product_title,
      price = _ref.line_price,
      original_price = _ref.original_line_price,
      variant_title = _ref.variant_title,
      image = _ref.image,
      url = _ref.url,
      quantity = _ref.quantity,
      item = _objectWithoutProperties(_ref, _excluded);

  // const img = image
  //   ? getSizedImageUrl(
  //       image.replace('.' + imageSize(image), ''),
  //       '400x' // TODO hacky af
  //     )
  //   : 'https://source.unsplash.com/R9OS29xJb-8/2000x1333'
  return "\n<div class='cart-drawer__item' data-component='cartDrawerItem' data-id=".concat(id, " ").concat(item.selling_plan_allocation ? "data-planid='".concat(item.selling_plan_allocation.selling_plan.id, "'") : "", ">\n  <div class='relative w-full border-b border-solid p-20'>\n    <div class=\"flex justify-between w-full\">\n      <div class=\"flex w-full\">\n        <a href='").concat(url, "' class=\"cart-image\" aria-label=\"view ").concat(title, "\">\n          <img class=\"w-full h-full object-cover\" src='").concat(image, "' alt=\"product thumbnail\"/>\n        </a>\n        <div class=\"pl-10 flex items-start flex-col justify-between font-bold flex-grow\">\n          <div class=\"w-full flex-grow\">\n            <div class=\"w-full flex justify-between\">\n              <a href='").concat(url, "' class='title-small uppercase'>").concat(title, "</a>\n              <div class='cart-drawer__item--price flex-shrink-0'>\n                ").concat(original_price > price ? "<span class=\"js-price line-through\">$".concat((0,base_scripts_utils_currency_js__WEBPACK_IMPORTED_MODULE_2__.formatMoney)(original_price), "</span>\n                <span class=\"js-discount ml-5\">$").concat((0,base_scripts_utils_currency_js__WEBPACK_IMPORTED_MODULE_2__.formatMoney)(price), "</span>") : "<span class=\"js-price\">$".concat((0,base_scripts_utils_currency_js__WEBPACK_IMPORTED_MODULE_2__.formatMoney)(price), "</span>"), "\n              </div>\n            </div>\n            ").concat(variant_title ? "<div class='item-variant__title cart-item--detail'>".concat(variant_title, "</div>") : "", "\n          </div>\n          <div class=\"w-full flex justify-between items-end\">\n            <div class='cart-item__qty flex justify-between px-10 flex-shrink-0 items-center leading-100 text-14 py-5 border border-solid h-25'>\n              <div class='cart-quantity btn-quantity js-remove-single cursor-pointer'><span class=\"block\">&ndash;</span></div>\n              <div class='js-single-quantity mx-5'>").concat(quantity, "</div>\n              <div class='cart-quantity btn-quantity js-add-single cursor-pointer'><span class=\"block\">+</span></div>\n            </div>\n            <button class='button--reset js-remove-item text-right text-12 cart-item__remove lh100' aria-label=\"remove item\"><span class=\"block underline\">REMOVE</span></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
}

function renderItems(items) {
  return items.length > 0 ? items.reduce(function (markup, item) {
    markup += createItem(item);
    return markup;
  }, '') : "<div class='px-20 m:px-40'><p class=\"py-20 w-full border-b-2 border-solid border-blue\">Your cart is empty</p></div>";
}

/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var overlay = node.querySelector('.js-overlay');
  var closeButton = node.querySelector('.js-close');
  var subtotal = node.querySelector('.js-subtotal');
  var itemsRoot = node.querySelector('.js-items');
  var loading = itemsRoot.innerHTML;

  var render = function render(cart) {
    itemsRoot.innerHTML = renderItems(cart.items, itemsRoot);
    subtotal.innerHTML = "".concat((0,base_scripts_utils_currency_js__WEBPACK_IMPORTED_MODULE_2__.formatMoney)(cart.total_price));
  };

  var open = function open(cart) {
    node.classList.add('is-active');
    itemsRoot.innerHTML = loading;
    setTimeout(render(cart), 10);
    base_scripts_app_js__WEBPACK_IMPORTED_MODULE_3__["default"].mount();
    tl.to('.cart-drawer', {
      x: '0%',
      duration: 0.6,
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__.Power4.easeOut,
      onComplete: function onComplete() {}
    });
  };

  var close = function close() {
    node.classList.remove('is-active');
    tl.to('.cart-drawer', {
      x: '100%',
      duration: 0.6,
      ease: gsap__WEBPACK_IMPORTED_MODULE_5__.Power4.easeOut,
      onComplete: function onComplete() {
        base_scripts_app_js__WEBPACK_IMPORTED_MODULE_3__["default"].hydrate({
          cartOpen: false
        });
      }
    });
  };

  render(ctx.getState().cart);
  overlay.addEventListener('click', close);
  closeButton.addEventListener('click', close);

  var checkCart = function checkCart(cart) {
    // setTimeout(() => {
    if (cart.items.length < 1) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.remove)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.qs)('.cart-empty__wrapper'), 'hidden');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.qs)('.cart-drawer__items'), 'hidden');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.qs)('.js-cartFooter'), 'hidden');
    } else {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.qs)('.cart-empty__wrapper'), 'hidden');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.remove)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.qs)('.cart-drawer__items'), 'hidden');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.remove)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_6__.qs)('.js-cartFooter'), 'hidden');
    } // }, 100);

  };

  ctx.on('cart:toggle', function (_ref2) {
    var cart = _ref2.cart,
        cartOpen = _ref2.cartOpen;
    cartOpen && open(cart);
    checkCart(ctx.getState().cart);
  });
  ctx.on('cart:updated', function () {
    render(ctx.getState().cart);
    base_scripts_app_js__WEBPACK_IMPORTED_MODULE_3__["default"].mount();
    checkCart(ctx.getState().cart);
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/cartDrawerItem.js":
/*!*******************************************************!*\
  !*** ./src/base/scripts/components/cartDrawerItem.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base/scripts/utils/cart.js */ "./src/base/scripts/utils/cart.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var removers = node.querySelectorAll('.js-remove-item');
  var decrease = node.querySelector('.js-remove-single');
  var increase = node.querySelector('.js-add-single');
  var currentQty = node.querySelector('.js-single-quantity').innerHTML;
  var id = node.getAttribute('data-id');
  var selling_plan = node.getAttribute('data-planid');
  removers.forEach(function (rem) {
    rem.addEventListener('click', function (e) {
      var link = e.target.dataset.link;
      ctx.emit('item:removed');
      e.preventDefault();
      (0,base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_1__.removeAddon)(id, selling_plan, link);
    });
  });
  decrease.addEventListener('click', function (e) {
    e.preventDefault();
    (0,base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_1__.updateAddon)(id, selling_plan, parseInt(currentQty) - 1);
  });
  increase.addEventListener('click', function (e) {
    e.preventDefault();
    (0,base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_1__.updateAddon)(id, selling_plan, parseInt(currentQty) + 1);
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/checkout.js":
/*!*************************************************!*\
  !*** ./src/base/scripts/components/checkout.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node) {
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_1__.on)(node, 'click', function (e) {
    e.preventDefault();
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_1__.qs)('.js-cartForm').submit(); // window.location = '/checkout'
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/collection.js":
/*!***************************************************!*\
  !*** ./src/base/scripts/components/collection.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");


gsap_all__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollToPlugin);
/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  if (window.location.hash) {
    gsap_all__WEBPACK_IMPORTED_MODULE_1__.gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "[data-section=\"".concat(window.location.hash.split('#')[1], "\"]"),
        offsetY: 90
      },
      ease: 'expo.out'
    });
  }
}));

/***/ }),

/***/ "./src/base/scripts/components/contact.js":
/*!************************************************!*\
  !*** ./src/base/scripts/components/contact.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      submit = _choozy.submit,
      email = _choozy.email;

  var offEmail = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(email, 'blur', function (e) {
    if (!email.value.includes('@')) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.form-email', node), 'error');
    } else {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.form-email', node), 'error');
    }
  });
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.form-input').forEach(function (el) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(el, 'input', function () {
      if (el.value) {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(el, 'has-fill');
      } else {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(el, 'has-fill');
      }

      if ((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.form-input.has-fill:not(.error)').length == 3) {
        submit.removeAttribute('disabled');
      } else {
        submit.addAttribute('disabled');
      }
    });
  });
  return function () {
    offEmail();
  };
}));

/***/ }),

/***/ "./src/base/scripts/components/faqs.js":
/*!*********************************************!*\
  !*** ./src/base/scripts/components/faqs.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      faq = _choozy.faq,
      body = _choozy.body,
      inner = _choozy.inner,
      plus = _choozy.plus;

  console.log('faqs');
  node.style.setProperty('--drawerHeight', "".concat(inner.offsetHeight, "px"));
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(faq, "click", function (e) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(body, "open");
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(node, "active");
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(plus, "rotate-45");
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/faqsImage.js":
/*!**************************************************!*\
  !*** ./src/base/scripts/components/faqsImage.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)("main").append(node);
  var sectionContainer = document.createElement('div');
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(sectionContainer, 'faq-container');
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('main').append(sectionContainer);
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('section').forEach(function (section) {
    sectionContainer.append(section);
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/footer.js":
/*!***********************************************!*\
  !*** ./src/base/scripts/components/footer.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var lazim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazim */ "./node_modules/lazim/dist/lazim.es.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      images = _choozy.images,
      image = _choozy.image;

  var allImages = JSON.parse(images === null || images === void 0 ? void 0 : images.innerHTML).images;

  var themeImages = function themeImages() {
    var currentTheme = document.body.dataset.theme;
    var themeImage = allImages.find(function (img) {
      return img.theme == currentTheme;
    });
    image.src = themeImage.image;
    image.dataset.src = themeImage.image;
    (0,lazim__WEBPACK_IMPORTED_MODULE_2__.update)();
  };

  themeImages();
  ctx.on('theme', function () {
    themeImages();
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/header.js":
/*!***********************************************!*\
  !*** ./src/base/scripts/components/header.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/gsap-core.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      cartToggle = _choozy.cartToggle,
      announceBar = _choozy.announceBar,
      announceClose = _choozy.announceClose,
      menu = _choozy.menu,
      anchor = _choozy.anchor,
      nav = _choozy.nav,
      open = _choozy.open,
      close = _choozy.close,
      navToggle = _choozy.navToggle;

  var headerClose = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.header-close');
  var closeZone = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.js-closeZone');
  var cartCount = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-cartCount');

  if (announceClose) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(announceClose, 'click', function () {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(announceBar, 'hidden');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('body').style.setProperty('--announce', "0px");
    });
  }

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(cartToggle, 'click', function () {
    ctx.emit('cart:toggle', function (state) {
      return {
        cartOpen: !state.cartOpen
      };
    });
  }); //define nav sizing

  document.body.style.setProperty('--nav', "".concat(nav.offsetWidth, "px")); // Change to desired color

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', function () {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('body').style.setProperty('--headerHeight', "".concat((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('header').offsetHeight - 2, "px"));
    document.body.style.setProperty('--nav', "".concat(nav.offsetWidth, "px")); // Change to desired color
  });
  setTimeout(function () {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('body').style.setProperty('--headerHeight', "".concat(node.offsetHeight - 2, "px"));
  }, 1000);
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(navToggle, 'click', function () {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(open, 'hidden');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(close, 'hidden');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(menu, 'is-open');
  });
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', function () {
    node.style.setProperty('--menuOffset', "".concat(node.offsetHeight));
  });
  ctx.on('cart:updated', function (state) {
    cartCount.forEach(function (count) {
      return count.innerHTML = state.cart.item_count;
    });
  });
  cartCount.forEach(function (count) {
    return count.innerHTML = ctx.getState().cart.item_count;
  });
  ctx.on('menu:close', function () {
    gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo('.nav-menu-wrap', {
      x: 0
    }, {
      x: '-100%',
      duration: 0.3,
      ease: gsap__WEBPACK_IMPORTED_MODULE_4__.Expo.easeOut
    });
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(menuOpen, 'hidden');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(headerClose, 'hidden');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(closeZone, 'hidden');
  }); //handle header logo

  if (window.location.href == '/') {
    document.body.classList.add('logo');
  } else {
    document.body.classList.remove('logo');
  } //toggle cart if user is pointed to cart page


  if (window.location.href.indexOf('cart') > -1) {
    if (window.location.href.indexOf('#cart') > -1) {
      ctx.emit('cart:toggle', function (state) {
        return {
          cartOpen: !state.cartOpen
        };
      });
    } else {
      window.location.href = '/#cart';
    }
  }
}));

/***/ }),

/***/ "./src/base/scripts/components/hero.js":
/*!*********************************************!*\
  !*** ./src/base/scripts/components/hero.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      products = _choozy.products,
      toggle = _choozy.toggle,
      icon = _choozy.icon,
      hero = _choozy.hero,
      link = _choozy.link;

  var allProducts = JSON.parse(products === null || products === void 0 ? void 0 : products.innerHTML).products;

  var updateTheme = function updateTheme(theme, primary, secondary, tertiary) {
    document.body.style.setProperty("--primary", "".concat(primary));
    document.body.style.setProperty("--secondary", "".concat(secondary));
    document.body.style.setProperty("--tertiary", "".concat(tertiary));
    document.body.dataset.theme = theme;
  };

  updateTheme(node.dataset.theme, node.dataset.primary, node.dataset.secondary, node.dataset.tertiary);
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(toggle, 'click', function (e) {
    var _allProducts$index, _allProducts$index2, _allProducts$index3;

    var btn = e.target;
    var index = parseInt(btn.dataset.index) - 1;
    updateTheme(btn.dataset.theme, btn.dataset.primary, btn.dataset.secondary, btn.dataset.tertiary);
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(toggle, 'active');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(e.target, 'active');
    hero.src = (_allProducts$index = allProducts[index]) === null || _allProducts$index === void 0 ? void 0 : _allProducts$index.hero;
    icon.src = (_allProducts$index2 = allProducts[index]) === null || _allProducts$index2 === void 0 ? void 0 : _allProducts$index2.icon;
    link.href = (_allProducts$index3 = allProducts[index]) === null || _allProducts$index3 === void 0 ? void 0 : _allProducts$index3.url;
    ctx.emit('theme');
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/lazy.js":
/*!*********************************************!*\
  !*** ./src/base/scripts/components/lazy.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      lqip = _choozy.lqip,
      img = _choozy.img;

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(img, 'load', function () {
    img.decode().then(function () {
      requestAnimationFrame(function () {
        ctx.emit('lazy:load', null, {
          id: node.dataset.id
        });
        var off = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(img, 'transitionend', function () {
          off();
          lqip.remove();
        });
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(img, 'opacity-0');
        img.removeAttribute('data-src');
      });
    });
  });
  img.src = img.dataset.src;
  img.srcset = img.dataset.srcset;
}));

/***/ }),

/***/ "./src/base/scripts/components/marquee.js":
/*!************************************************!*\
  !*** ./src/base/scripts/components/marquee.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var martha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! martha */ "./node_modules/martha/dist/martha.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_2__["default"])(node),
      primary = _choozy.primary;

  var currentX = 0;
  var targetX = 0;
  window.setInterval(animationLoop, 15);

  function animationLoop() {
    targetX = currentX > primary.scrollWidth ? 0 : currentX + 1;
    node.style.transform = "translateX(-".concat(targetX, "px) translateZ(0px)");
    currentX = targetX;
  }
}));

/***/ }),

/***/ "./src/base/scripts/components/newsletter.js":
/*!***************************************************!*\
  !*** ./src/base/scripts/components/newsletter.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
/* harmony import */ var klaviyo_subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! klaviyo-subscribe */ "./node_modules/klaviyo-subscribe/dist/klaviyo-subscribe.es.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      formContent = _choozy.formContent,
      success = _choozy.success,
      submit = _choozy.submit,
      error = _choozy.error;

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.on)(submit, 'click', function (e) {
    e.preventDefault();
    var listId = 'XtGJWW';
    var email = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)('.js-email', node).value;

    if (email.includes('@')) {
      (0,klaviyo_subscribe__WEBPACK_IMPORTED_MODULE_2__.subscribe)(listId, email, {}).then(function (response) {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.remove)(success, 'hidden');
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)(formContent, 'hidden');
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)(error, 'hidden');
      });
    } else {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.remove)(error, 'hidden');
    }
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/product.js":
/*!************************************************!*\
  !*** ./src/base/scripts/components/product.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base/scripts/utils/cart.js */ "./src/base/scripts/utils/cart.js");
/* harmony import */ var martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! martha */ "./node_modules/martha/dist/martha.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _addBtn$dataset, _addBtn$dataset2;

  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_3__["default"])(node),
      subDetailToggle = _choozy.subDetailToggle,
      subDetail = _choozy.subDetail,
      quantity = _choozy.quantity;

  var json = JSON.parse((0,martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.js-product-json', node).innerHTML);
  var addBtn = (0,martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.js-add-to-cart', node);
  var addText = addBtn.innerHTML || "".concat(((_addBtn$dataset = addBtn.dataset) === null || _addBtn$dataset === void 0 ? void 0 : _addBtn$dataset.preorder) == 'true' ? 'Pre-Order' : 'Add To Cart', " | ").concat((_addBtn$dataset2 = addBtn.dataset) === null || _addBtn$dataset2 === void 0 ? void 0 : _addBtn$dataset2.price);
  var selectedOrFirstAvailableVariant = json.selectedOrFirstAvailableVariant,
      product = json.product;
  var currentVariant = product.variants.filter(function (v) {
    return v.id === selectedOrFirstAvailableVariant;
  })[0];
  ctx.on('cart:toggle', function () {
    addBtn.innerHTML = addText;
  });
  (0,martha__WEBPACK_IMPORTED_MODULE_2__.on)(addBtn, 'click', function (e) {
    e.preventDefault();
    addBtn.innerHTML = 'Adding...'; //get addons

    (0,martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-addon.selected', node).forEach(function (el) {
      var addonJson = JSON.parse((0,martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.js-addon-json', el).innerHTML);
      var addonSelectedOrFirstAvailableVariant = addonJson.addonSelectedOrFirstAvailableVariant,
          addonProduct = addonJson.addonProduct;
      var addonVariant = addonProduct.variants.filter(function (v) {
        return v.id === addonSelectedOrFirstAvailableVariant;
      })[0];
      (0,base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_1__.addVariant)(addonVariant, 1, null);
    }); // addBtn.innerHTML = 'adding...'

    var selectedVariant = (0,martha__WEBPACK_IMPORTED_MODULE_2__.qs)('select[name="id"]', node).value;
    currentVariant = selectedVariant ? product.variants.filter(function (v) {
      return v.id === parseInt((0,martha__WEBPACK_IMPORTED_MODULE_2__.qs)('select[name="id"]', node).value);
    })[0] : currentVariant;
    (0,base_scripts_utils_cart_js__WEBPACK_IMPORTED_MODULE_1__.addVariant)(currentVariant, (quantity === null || quantity === void 0 ? void 0 : quantity.value) || 1, null);
    console.log(json);
  });
  return function () {};
}));

/***/ }),

/***/ "./src/base/scripts/components/productCarousel.js":
/*!********************************************************!*\
  !*** ./src/base/scripts/components/productCarousel.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _JSON$parse;

  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      carousel = _choozy.carousel,
      next = _choozy.next,
      prev = _choozy.prev,
      counter = _choozy.counter,
      productImages = _choozy.productImages,
      variantTitle = _choozy.variantTitle,
      btns = _choozy.btns,
      thumb = _choozy.thumb;

  var embla;
  var images = (_JSON$parse = JSON.parse(productImages === null || productImages === void 0 ? void 0 : productImages.innerHTML)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.images;
  images.forEach(function (el) {});

  var initEmbla = function initEmbla() {
    embla = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])(carousel, {
      loop: true,
      skipSnaps: false
    });

    if (next && prev) {
      prev.addEventListener('click', embla.scrollPrev, false);
      next.addEventListener('click', embla.scrollNext, false);
    }

    var variantImages = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qsa)('.product-img');
    btns.innerHTML = ''; //render buttons

    variantImages.forEach(function (img, index) {
      var btn = document.createElement('button');
      btn.addEventListener('click', function (e) {
        console.log('clicked', index);
        embla.scrollTo(index);
      });
      btn.classList.add('carousel-dot');
      btns.appendChild(btn);
    });
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)('.carousel-dot:first-child'), 'is-active');
    embla.on('select', function () {
      if (counter) {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.remove)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)('.carousel-dot.is-active'), 'is-active');
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)(".carousel-dot:nth-child(".concat(embla.selectedScrollSnap() + 1, ")"), node), 'is-active');
      }
    });
  };

  initEmbla();
  ctx.on('variant:change', function () {
    var currentVariant = variantTitle.innerHTML;
    carousel.innerHTML = ''; //render variant images

    carousel.innerHTML = "\n        <div class=\"flex select-none w-full h-[100vw] m:h-hero m:min-h-[calc(100vh-13rem)]\">\n        ".concat(images.map(function (img) {
      if (img.alt.toLowerCase() == currentVariant || img.alt.toLowerCase() == 'all') {
        return "\n              <div class=\"w-full h-full product-img m:px-0 relative min-w-[100%] overflow-hidden\">\n                <img class=\"w-full h-full object-cover absolute left-0 top-0\" src=\"https://cdn.shopify.com/s/files/1/0752/7061/9456/".concat(img.src, "\" alt=\"").concat(img.alt, "\"/>\n              </div>\n            ");
      } // If the condition is not met, return an empty string


      return '';
    }).join(''), "\n        </div>\n    "); //reset carousel

    if (embla) {
      embla.destroy();
    } //initialize carousel


    initEmbla();
  });
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.on)(thumb, 'click', function (e) {
    embla.scrollTo(parseInt(e.target.dataset.index - 1));
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/productCounter.js":
/*!*******************************************************!*\
  !*** ./src/base/scripts/components/productCounter.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      quantity = _choozy.quantity,
      remove = _choozy.remove,
      add = _choozy.add;

  var min = 1;
  var max = 1000;
  var count = 1;
  console.log('counter');

  var set = function set(i) {
    count = Math.max(min, Math.min(i, max || 10000));
    quantity.innerHTML = count;
    quantity.value = count;
  };

  remove.addEventListener('click', function (e) {
    e.preventDefault();
    set(--count);
    console.log('remove');
  });
  add.addEventListener('click', function (e) {
    e.preventDefault();
    set(++count);
    console.log('add');
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/productOptions.js":
/*!*******************************************************!*\
  !*** ./src/base/scripts/components/productOptions.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      optionSub = _choozy.optionSub,
      optionOne = _choozy.optionOne,
      optionWrap = _choozy.optionWrap;

  var addPrice = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-addPrice');

  if (optionSub) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(optionSub, 'click', function () {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.product-variant-wrap'), 'is-subscription');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(optionWrap, 'selected-one');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(optionWrap, 'selected-sub');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(optionSub, 'active');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(optionOne, 'active');

      if (addPrice.length > 0) {
        addPrice.forEach(function (price) {
          price.innerHTML = "$".concat(optionSub.dataset.price);
        });
      }
    });
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(optionOne, 'click', function () {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.product-variant-wrap'), 'is-subscription');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(optionWrap, 'selected-one');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(optionWrap, 'selected-sub');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(optionSub, 'active');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(optionOne, 'active');

      if (addPrice.length > 0) {
        addPrice.forEach(function (price) {
          price.innerHTML = "$".concat(optionOne.dataset.price);
        });
      }
    });
  }
}));

/***/ }),

/***/ "./src/base/scripts/components/productSubscriptions.js":
/*!*************************************************************!*\
  !*** ./src/base/scripts/components/productSubscriptions.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      activeFrequency = _choozy.activeFrequency,
      content = _choozy.content,
      contentWrap = _choozy.contentWrap,
      toggleFrequency = _choozy.toggleFrequency,
      arrow = _choozy.arrow,
      frequencyOption = _choozy.frequencyOption,
      subOption = _choozy.subOption,
      frequencyWrap = _choozy.frequencyWrap;

  var toggleOptions = function toggleOptions() {
    var contentHeight = content.offsetHeight;
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(contentWrap, 'active');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(arrow, 'rotate-90');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(arrow, '-rotate-90');

    if ((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.has)(contentWrap, 'active')) {
      contentWrap.style.maxHeight = "".concat(contentHeight + 10, "px");
    } else {
      contentWrap.style.maxHeight = '0px';
    }
  };

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(toggleFrequency, 'click', function (e) {
    toggleOptions();
  });
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(frequencyOption, 'click', function (e) {
    toggleOptions();
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-frequencyOption', node).forEach(function (opt) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(opt, 'active');
    });
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(e.target, 'active');
    var curOption = e.target.dataset.id;
    activeFrequency.innerHTML = e.target.dataset.title;
    toggleFrequency.dataset.id = curOption;
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/productVariant.js":
/*!*******************************************************!*\
  !*** ./src/base/scripts/components/productVariant.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      option = _choozy.option,
      variantTitle = _choozy.variantTitle,
      swatch = _choozy.swatch;

  var addBtn = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-add-to-cart');
  var optionGroups = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-optionGroup');
  var selectedSwatch;
  var options = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-variantOption', node);

  var updateVariant = function updateVariant() {
    var _qs, _qs$dataset;

    if (!(0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.js-swatch')) return;
    selectedSwatch = ((_qs = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.js-swatch.active', node)) === null || _qs === void 0 ? void 0 : (_qs$dataset = _qs.dataset) === null || _qs$dataset === void 0 ? void 0 : _qs$dataset.title) || null; // //find variant that matches title and size

    var newVariant = options.find(function (variant) {
      return variant.dataset.title === selectedSwatch;
    }); //clear all options

    options.forEach(function (selectedVariant) {
      return selectedVariant.removeAttribute('selected');
    }); //select new variant

    if (newVariant) newVariant.setAttribute('selected', 'selected'); //configure button with inventory

    if (!newVariant || newVariant.dataset.inventory < 1) {
      addBtn.forEach(function (btn) {
        btn.setAttribute('disabled', 'disabled');
        btn.innerHTML = 'Out Of Stock';
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(btn, 'oos');
      });
    } else {
      addBtn.forEach(function (btn) {
        btn.removeAttribute('disabled');
        btn.innerHTML = "".concat(btn.dataset.preorder == 'true' ? 'Pre-Order' : 'Add To Cart', " | ").concat(btn.dataset.price);
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(btn, 'oos');
      });
    }
  };

  var variantSelect = function variantSelect(curTitle) {
    //clear swatches
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-swatch').forEach(function (swatch) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(swatch, 'active');
      swatch.setAttribute('aria-checked', false);
    }); //select new swatch

    var selectedSwatch = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)(".js-swatch[data-title=\"".concat(curTitle, "\"]"), node);
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(selectedSwatch, 'active');
    selectedSwatch.setAttribute('aria-checked', true);
    variantTitle.innerHTML = curTitle;
    ctx.emit('variant:change');
  };

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(swatch, 'click', function (e) {
    if ((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.has)(e.target, 'active')) {
      return;
    }

    var curTitle = e.target.getAttribute('data-title');
    variantSelect(curTitle);
    updateVariant();
  }); //update variant on first load

  if (options.length > 1) updateVariant();
  ctx.on('variant:update', function () {
    updateVariant();
  }); //nav bar selector
  // qsa('.js-navOptions[data-group]').forEach((group) => {
  //   let swatchToggle = qs('.js-menuSwatch', group)
  //   on(swatchToggle, 'click', (e) => {
  //     let curGroup = e.target.closest('.js-navOptions')
  //     toggle(qs('.js-navOptionGroup', curGroup), 'hidden')
  //     toggle(qs('.js-chevronNav', curGroup), 'rotate-180')
  //   })
  // })
  // qsa('.js-swatchNav').forEach((navSwatch) => {
  //   on(navSwatch, 'click', (e) => {
  //     let curTitle = e.target.getAttribute('data-title')
  //     let container = e.target.closest('.js-navOptions[data-group]')
  //     let curGroup = container.dataset?.group
  //     toggle(e.target.closest('.js-navOptionGroup'), 'hidden')
  //     toggle(qs('.js-chevronNav', container), 'rotate-180')
  //     //hide selected from list
  //     qsa('.js-swatchNav', container).forEach((item) => {
  //       if (item.dataset.title === e.target.dataset.title) {
  //         add(item, 'hidden')
  //         qs('.js-selectedNavOption', container).innerHTML = item.dataset.title
  //       } else {
  //         remove(item, 'hidden')
  //       }
  //     })
  //     variantSelect(curTitle, curGroup)
  //     updateVariant()
  //   })
  // })
}));

/***/ }),

/***/ "./src/base/scripts/components/signup.js":
/*!***********************************************!*\
  !*** ./src/base/scripts/components/signup.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
/* harmony import */ var klaviyo_subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! klaviyo-subscribe */ "./node_modules/klaviyo-subscribe/dist/klaviyo-subscribe.es.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      formContent = _choozy.formContent,
      success = _choozy.success,
      submit = _choozy.submit;

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.on)(submit, 'click', function (e) {
    e.preventDefault();
    var listId = 'WzG72s';
    var email = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)('.js-email', node).value;
    (0,klaviyo_subscribe__WEBPACK_IMPORTED_MODULE_2__.subscribe)(listId, email, {}).then(function (response) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.remove)(success, 'hidden');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)(formContent, 'hidden');

      if ((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)('.js-formTitle')) {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)('.js-formTitle'), 'hidden');
      }
    });
  });
}));

/***/ }),

/***/ "./src/base/scripts/components/social.js":
/*!***********************************************!*\
  !*** ./src/base/scripts/components/social.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");
/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");




/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  var _choozy = (0,choozy__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
      carousel = _choozy.carousel,
      next = _choozy.next,
      prev = _choozy.prev,
      counter = _choozy.counter,
      activeIndex = _choozy.activeIndex;

  var embla = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])(carousel, {
    loop: true,
    skipSnaps: false,
    trimSnaps: true,
    containScroll: true,
    align: 'center'
  });

  if (next) {
    next.addEventListener('click', embla.scrollNext, false);
    prev.addEventListener('click', embla.scrollPrev, false); // on(next, 'click', () => {
    //   embla.scrollNext
    // })
  }

  if (counter) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.on)(counter, 'click', function (e) {
      embla.scrollTo(e.target.dataset.index);
    });
  }

  embla.on('select', function () {
    if (counter) {
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.remove)(counter, 'is-active');
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.add)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_3__.qs)(".js-counter[data-index=\"".concat(embla.selectedScrollSnap(), "\"]"), node), 'is-active');
    }

    if (activeIndex) {
      activeIndex.innerHTML = embla.selectedScrollSnap() + 1;
    }
  }); // return () => {
  //   if (next) {
  //       next.removeEventListener('click', embla.scrollNext, false)
  //       prev.removeEventListener('click', embla.scrollPrev, false)
  //   }
  // }
}));

/***/ }),

/***/ "./src/base/scripts/components/video.js":
/*!**********************************************!*\
  !*** ./src/base/scripts/components/video.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.component)(function (node, ctx) {
  // Options for the Intersection Observer
  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0 // Adjust as needed, 0.5 means at least 50% of the video must be in view

  }; // Callback function when the video comes into view

  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Load the video
        node.src = node.dataset.video;
        node.autoplay = true;
        node.loop = true; // Unobserve to prevent further unnecessary checks

        observer.unobserve(node);
      } else {
        // Pause the video when it goes out of view
        var video = document.querySelector('video');

        if (video) {
          video.pause();
        }
      }
    });
  } // Create the Intersection Observer with the callback and options


  var observer = new IntersectionObserver(handleIntersection, options); // Observe the video placeholder

  observer.observe(node);
}));

/***/ }),

/***/ "./src/base/scripts/router.js":
/*!************************************!*\
  !*** ./src/base/scripts/router.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! operator */ "./node_modules/operator/dist/operator.es.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


/**
 * operator is a tiny "PJAX" library, please have a look at the docs for
 * more info
 *
 * @see https://github.com/estrattonbailey/operator
 */

var router = (0,operator__WEBPACK_IMPORTED_MODULE_0__["default"])('#MainContent', [
/**
 * creates a page transition
 * @see https://github.com/estrattonbailey/operator#transition-animation
 */
function () {
  return new Promise(function (res) {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();

    var enter = function enter() {
      res();
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    };

    tl.to('main', {
      opacity: 0,
      duration: 0.5,
      onComplete: enter
    }).to('main', {
      opacity: 1,
      duration: 0.5
    });
  });
}, // {
//   path: '/account/*',
//   ignore: true,
// },
// {
//   path: '/account/',
//   ignore: true,
// },
// {
//   path: '/blogs/*',
//   ignore: true,
// },
{
  path: '*',
  ignore: true
}]);
router.on('after', function (_ref) {
  var pathname = _ref.pathname;
  window.history.pushState({}, '', pathname);

  if (document.querySelector('[data-pagetitle]') != undefined) {
    var pageTitle = document.querySelector('[data-pagetitle]').dataset.pagetitle;
    var shopTitle = document.querySelector('[data-shoptitle]').dataset.shoptitle;
    document.title = "".concat(pageTitle);
  } else {
    document.title = 'Promised Grounds';
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/base/scripts/utils/cart.js":
/*!****************************************!*\
  !*** ./src/base/scripts/utils/cart.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemById: function() { return /* binding */ addItemById; },
/* harmony export */   addVariant: function() { return /* binding */ addVariant; },
/* harmony export */   fetchCart: function() { return /* binding */ fetchCart; },
/* harmony export */   removeAddon: function() { return /* binding */ removeAddon; },
/* harmony export */   updateAddon: function() { return /* binding */ updateAddon; }
/* harmony export */ });
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.module.js");
/* harmony import */ var base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base/scripts/app.js */ "./src/base/scripts/app.js");
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");



function addVariant(variant, quantity, selling_plan) {
  var numAvailable = variant.inventory_policy === 'deny' && variant.inventory_management === 'shopify' ? variant.inventory_quantity : null; // null means they can add as many as they want

  return fetchCart().then(function (_ref) {
    var items = _ref.items;
    var existing = items.filter(function (item) {
      return item.id === variant.id;
    })[0] || {};
    var numRequested = (existing.quantity || 0) + quantity;

    if (numAvailable !== null && numRequested > numAvailable) {
      var err = "There are only ".concat(numAvailable, " of that product available, requested ").concat(numRequested, ".");
      base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('error', err);
      throw new Error(err);
    } else {
      return addItemById(variant.id, quantity, selling_plan);
    }
  });
} // export function updateAddon(id, quantity) {
//   return fetchCart().then(({ items }) => {
//     for (let i = 0; i < items.length; i++) {
//       if (items[i].variant_id === parseInt(id)) {
//         return changeAddon(i + 1, quantity) // shopify cart is a 1-based index
//       }
//     }
//   })
// }

function updateAddon(id, selling_plan, quantity, link) {
  return fetchCart().then(function (_ref2) {
    var items = _ref2.items;

    for (var i = 0; i < items.length; i++) {
      //check if item is recurring
      if (selling_plan != null) {
        if (items[i].selling_plan_allocation) {
          if (items[i].variant_id === parseInt(id) && items[i].selling_plan_allocation.selling_plan.id === parseInt(selling_plan)) {
            return changeAddon(i + 1, quantity, link); // shopify cart is a 1-based index
          }
        }
      } else {
        if (items[i].variant_id === parseInt(id)) {
          return changeAddon(i + 1, quantity, link); // shopify cart is a 1-based index
        }
      }
    }
  });
} // export function removeAddon(id) {
//   return updateAddon(id, 0)
// }

function removeAddon(id, selling_plan, link) {
  return updateAddon(id, selling_plan, 0, link);
}

function changeAddon(line, quantity, link) {
  base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updating');
  return (0,unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      line: line,
      quantity: quantity
    })
  }).then(function (res) {
    return res.json();
  }).then(function (cart) {
    base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].hydrate({
      cart: cart
    });
    base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updated', {
      cart: cart
    });

    if (link) {
      window.location.href = link;
    }

    return cart;
  });
}
/**
 * Warning: this does not check available products first
 */


function addItemById(id, quantity, selling_plan) {
  base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updating');
  return (0,unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart/add.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      quantity: quantity,
      selling_plan: selling_plan
    })
  }).then(function (r) {
    return r.json();
  }).then(function (item) {
    return fetchCart().then(function (cart) {
      var pix = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.collection-pix');
      base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].hydrate({
        cart: cart
      });
      base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updated');

      if (pix == undefined || base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].getState().cart.item_count >= 6) {
        base_scripts_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:toggle', function (state) {
          return {
            cartOpen: !state.cartOpen
          };
        });
      } // app.emit('updated', { item, cart })


      return {
        item: item,
        cart: cart
      };
    });
  });
}
function fetchCart() {
  return (0,unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart.js', {
    method: 'GET',
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  });
}

/***/ }),

/***/ "./src/base/scripts/utils/currency.js":
/*!********************************************!*\
  !*** ./src/base/scripts/utils/currency.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatMoney: function() { return /* binding */ formatMoney; }
/* harmony export */ });
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */

/* eslint-disable */
function formatMoney(cents) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '{{amount}}';

  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = precision || 2;
    thousands = thousands || ',';
    decimal = decimal || '.';

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);
    var parts = number.split('.');
    var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    var centsAmount = parts[1] ? decimal + parts[1] : '';

    if (centsAmount > 0) {
      return dollarsAmount + centsAmount;
    } else {
      return dollarsAmount;
    }
  }

  switch (format.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;

    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;

    case 'amount_with_space_separator':
      value = formatWithDelimiters(cents, 2, ' ', '.');
      break;

    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, ',', '.');
      break;

    case 'amount_no_decimals_with_space_separator':
      value = formatWithDelimiters(cents, 0, ' ');
      break;
  }

  return format.replace(placeholderRegex, value);
}

/***/ }),

/***/ "./src/base/scripts/utils/images.js":
/*!******************************************!*\
  !*** ./src/base/scripts/utils/images.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSizedImageUrl: function() { return /* binding */ getSizedImageUrl; },
/* harmony export */   imageSize: function() { return /* binding */ imageSize; },
/* harmony export */   loadImage: function() { return /* binding */ loadImage; },
/* harmony export */   preload: function() { return /* binding */ preload; },
/* harmony export */   removeProtocol: function() { return /* binding */ removeProtocol; }
/* harmony export */ });
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */
function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}
/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */

function loadImage(path) {
  /* eslint-disable */
  new Image().src = path;
  /* eslint-enable */
}
/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */

function imageSize(src) {
  /* eslint-disable */
  var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
  /* esling-enable */

  if (match) {
    return match[1];
  } else {
    return null;
  }
}
/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */

function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    var prefix = src.split(match[0]);
    var suffix = match[0];
    return removeProtocol(prefix[0] + '_' + size + suffix);
  } else {
    return null;
  }
}
function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}

/***/ }),

/***/ "./src/base/scripts/utils/pageSetup.js":
/*!*********************************************!*\
  !*** ./src/base/scripts/utils/pageSetup.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pageSetup; }
/* harmony export */ });
/* harmony import */ var _selfaware_martha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @selfaware/martha */ "./node_modules/@selfaware/martha/dist/martha.modern.js");

function pageSetup() {
  var announceBar = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_0__.qs)('.js-announceBar');

  if (announceBar) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_0__.add)(announceBar, 'hidden');
  }

  if ((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_0__.qs)(".js-announceBar[data-page=\"".concat(window.location.pathname, "\"]"))) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_0__.remove)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_0__.qs)(".js-announceBar[data-page=\"".concat(window.location.pathname, "\"]")), 'hidden');
  } else if ((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_0__.qs)(".js-announceBar:not([data-page])")) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_0__.remove)((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_0__.qs)(".js-announceBar:not([data-page])"), 'hidden');
  }
}

/***/ }),

/***/ "./src/base/styles/base.scss":
/*!***********************************!*\
  !*** ./src/base/styles/base.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"base": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkworkflow"] = self["webpackChunkworkflow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/base/scripts/base.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/base/styles/base.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLDJEQUEyRCwyREFBMkQ7VUFDdEgscUZBQXFGLDREQUE0RDtVQUNqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudEFkZHJlc3Nlcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvdW50TG9naW4uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYmFja2luc3RvY2suanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYmFubmVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Jsb2dGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FydERyYXdlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jYXJ0RHJhd2VySXRlbS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jaGVja291dC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZmFxcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9mYXFzSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2xhenkuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvbWFycXVlZS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdENhcm91c2VsLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RDb3VudGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RPcHRpb25zLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RTdWJzY3JpcHRpb25zLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RWYXJpYW50LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9zb2NpYWwuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvY2FydC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3V0aWxzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvcGFnZVNldHVwLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc3R5bGVzL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBpY29hcHAgfSBmcm9tICdwaWNvYXBwJ1xuXG5pbXBvcnQgYWNjb3VudExvZ2luIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2FjY291bnRMb2dpbi5qcydcbmltcG9ydCBhY2NvdW50QWRkcmVzc2VzIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2FjY291bnRBZGRyZXNzZXMuanMnXG5pbXBvcnQgbGF6eSBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5LmpzJ1xuaW1wb3J0IGhlYWRlciBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXIuanMnXG5pbXBvcnQgY2FydERyYXdlciBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jYXJ0RHJhd2VyLmpzJ1xuaW1wb3J0IGNhcnREcmF3ZXJJdGVtIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NhcnREcmF3ZXJJdGVtLmpzJ1xuaW1wb3J0IHByb2R1Y3RDYXJvdXNlbCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0Q2Fyb3VzZWwuanMnXG5pbXBvcnQgcHJvZHVjdCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0LmpzJ1xuaW1wb3J0IHByb2R1Y3RDb3VudGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RDb3VudGVyLmpzJ1xuaW1wb3J0IHByb2R1Y3RWYXJpYW50IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RWYXJpYW50LmpzJ1xuaW1wb3J0IHByb2R1Y3RPcHRpb25zIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RPcHRpb25zLmpzJ1xuaW1wb3J0IGNvbGxlY3Rpb24gZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY29sbGVjdGlvbi5qcydcbmltcG9ydCBmYXFzIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2ZhcXMuanMnXG5pbXBvcnQgY2hlY2tvdXQgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2hlY2tvdXQuanMnXG5pbXBvcnQgbmV3c2xldHRlciBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9uZXdzbGV0dGVyLmpzJ1xuaW1wb3J0IGNhcm91c2VsIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Nhcm91c2VsLmpzJ1xuaW1wb3J0IGZvb3RlciBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9mb290ZXIuanMnXG5pbXBvcnQgY29udGFjdCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jb250YWN0LmpzJ1xuaW1wb3J0IG1hcnF1ZWUgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvbWFycXVlZS5qcydcbmltcG9ydCBibG9nRmlsdGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Jsb2dGaWx0ZXIuanMnXG5pbXBvcnQgdmlkZW8gZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvdmlkZW8uanMnXG5pbXBvcnQgc2lnbnVwIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3NpZ251cC5qcydcbmltcG9ydCBiYWNraW5zdG9jayBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9iYWNraW5zdG9jay5qcydcbmltcG9ydCBwcm9kdWN0U3Vic2NyaXB0aW9ucyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0U3Vic2NyaXB0aW9ucy5qcydcbmltcG9ydCBhYm91dCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9hYm91dC5qcydcblxuaW1wb3J0IGhlcm8gZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvaGVyby5qcydcbmltcG9ydCBiYW5uZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYmFubmVyLmpzJ1xuaW1wb3J0IHNvY2lhbCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9zb2NpYWwuanMnXG5pbXBvcnQgY2FyZHMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZHMuanMnXG5pbXBvcnQgZmFxc0ltYWdlIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2ZhcXNJbWFnZS5qcydcblxuY29uc3Qgc3RhdGUgPSB7XG4gIGNhcnRPcGVuOiBmYWxzZSxcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgYWNjb3VudExvZ2luLFxuICBhY2NvdW50QWRkcmVzc2VzLFxuICBoZWFkZXIsXG4gIGNhcnREcmF3ZXIsXG4gIGNhcnREcmF3ZXJJdGVtLFxuICBsYXp5LFxuICBwcm9kdWN0Q2Fyb3VzZWwsXG4gIHByb2R1Y3QsXG4gIHByb2R1Y3RDb3VudGVyLFxuICBwcm9kdWN0VmFyaWFudCxcbiAgcHJvZHVjdE9wdGlvbnMsXG4gIGNvbGxlY3Rpb24sXG4gIGZhcXMsXG4gIGNoZWNrb3V0LFxuICBuZXdzbGV0dGVyLFxuICBjYXJvdXNlbCxcbiAgZm9vdGVyLFxuICBjb250YWN0LFxuICBtYXJxdWVlLFxuICBibG9nRmlsdGVyLFxuICB2aWRlbyxcbiAgc2lnbnVwLFxuICBiYWNraW5zdG9jayxcbiAgcHJvZHVjdFN1YnNjcmlwdGlvbnMsXG4gIGFib3V0LFxuXG4gIGhlcm8sXG4gIGJhbm5lcixcbiAgc29jaWFsLFxuICBjYXJkcyxcbiAgZmFxc0ltYWdlLFxufVxuXG5leHBvcnQgZGVmYXVsdCBwaWNvYXBwKGNvbXBvbmVudHMsIHN0YXRlKVxuIiwiLy8gaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Nzcydcbi8vIGltcG9ydCAnQC9saWIvc2VsZWN0LmpzJ1xuLy8gaW1wb3J0IGxhemltIGZyb20gJ2xhemltJ1xuaW1wb3J0IHsgYmluZCwgdXBkYXRlIH0gZnJvbSAnbGF6aW0nXG5pbXBvcnQgYXBwIGZyb20gJ2Jhc2Uvc2NyaXB0cy9hcHAuanMnXG5pbXBvcnQgcm91dGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9yb3V0ZXIuanMnXG5pbXBvcnQgeyBmZXRjaENhcnQgfSBmcm9tICdiYXNlL3NjcmlwdHMvdXRpbHMvY2FydC5qcydcbmltcG9ydCB7IGdzYXAsIFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL2FsbCdcbmltcG9ydCB7IHFzLCByZW1vdmUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCBwYWdlU2V0dXAgZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL3BhZ2VTZXR1cCdcblxubGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMVxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YClcbn0pXG5cbi8qKlxuICogc3RvcmUgYmluZGluZyBmblxuICovXG5iaW5kKClcblxuLyoqXG4gKiByZWdpc3RlciBzY3JvbGx0cmlnZ2VyXG4gKi9cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcblxucm91dGVyLm9uKCdhZnRlcicsICh7IHRpdGxlLCBwYXRobmFtZSB9KSA9PiB7XG4gIGFwcC51bm1vdW50KClcbiAgYXBwLm1vdW50KClcblxuICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigncHJvZHVjdHMnKSA+IC0xKSB7XG4gIC8vICAgdmFyIGFwaSA9IG5ldyBZb3Rwby5BUEkoeW90cG8pXG4gIC8vICAgYXBpLnJlZnJlc2hXaWRnZXRzKClcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBiaW5kIG5ldyBpbWFnZXNcbiAgICovXG5cbiAgYmluZCgpXG4gIC8qKlxuICAgKiBoaWRlIHN1Ym5hdlxuICAgKi9cbiAgYXBwLmVtaXQoJ21lbnU6Y2xvc2UnKVxuICBhcHAuZW1pdCgndHJhbnNpdGlvbjpjb21wbGV0ZScpXG5cbiAgcGFnZVNldHVwKClcbn0pXG5cbnBhZ2VTZXR1cCgpXG5cbi8qKlxuICogbG9hZCBhbnkgZGF0YSB0aGF0IHlvdXIgc2l0ZSBuZWVkcyBvbiBmaXN0IGxvYWRcbiAqL1xuUHJvbWlzZS5hbGwoW2ZldGNoQ2FydCgpXSkudGhlbigoW2NhcnRdKSA9PiB7XG4gIC8qKlxuICAgKiBhZGQgdGhlIGNhcnQgZGF0YSB0byB0aGUgcGljb2FwcCBpbnN0YW5jZVxuICAgKi9cbiAgYXBwLmh5ZHJhdGUoeyBjYXJ0IH0pXG5cbiAgLyoqXG4gICAqIG1vdW50IGFueSBjb21wb25lbnRzIGRlZmluZWQgb24gdGhlIHBhZ2VcbiAgICovXG4gIGFwcC5tb3VudCgpXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwL2FsbCdcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlcidcbmltcG9ydCB7IFNjcm9sbFRvUGx1Z2luIH0gZnJvbSAnZ3NhcC9kaXN0L1Njcm9sbFRvUGx1Z2luJ1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUb1BsdWdpbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgYW5jaG9ycyB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgcXNhKCdbZGF0YS1zZWN0aW9uXScpLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYW5jaG9yLmlubmVySFRNTCA9IHNlY3Rpb24uZGF0YXNldC50aXRsZSB8fCBzZWN0aW9uLmRhdGFzZXQuc2VjdGlvblxuICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdqcy1hbmNob3InKVxuICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gICAgYW5jaG9yLmRhdGFzZXQuc2VjdGlvbiA9IHNlY3Rpb24uZGF0YXNldC5zZWN0aW9uXG4gICAgYW5jaG9ycy5hcHBlbmRDaGlsZChhbmNob3IpXG5cbiAgICBvbihhbmNob3IsICdjbGljaycsICgpID0+IHtcbiAgICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBzY3JvbGxUbzoge1xuICAgICAgICAgIHk6IGBbZGF0YS10aXRsZT1cIiR7c2VjdGlvbi5kYXRhc2V0LnRpdGxlfVwiXWAsXG4gICAgICAgICAgb2Zmc2V0WTogNzUsXG4gICAgICAgIH0sXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc2V0QWN0aXZlID0gKHRhcmdldCkgPT4ge1xuICAgIHFzYSgnLmpzLWFuY2hvcicpLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgcmVtb3ZlKGFuY2hvciwgJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIGFkZChxcyhgLmpzLWFuY2hvcltkYXRhLXNlY3Rpb249XCIke3RhcmdldH1cIl1gKSwgJ2FjdGl2ZScpXG4gIH1cblxuICBnc2FwLnV0aWxzLnRvQXJyYXkoJ1tkYXRhLXNlY3Rpb25dJykuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICBzdGFydDogJ3RvcCB0b3ArPTE1MCcsXG4gICAgICBvbkVudGVyOiAoc2VsZikgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoc2VsZi50cmlnZ2VyLmRhdGFzZXQuc2VjdGlvbilcbiAgICAgIH0sXG4gICAgfSlcbiAgfSlcblxuICBnc2FwLnV0aWxzLnRvQXJyYXkoJ1tkYXRhLXNlY3Rpb25dJykuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICBzdGFydDogJ2JvdHRvbSB0b3AnLFxuICAgICAgb25MZWF2ZUJhY2s6IChzZWxmKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShzZWxmLnRyaWdnZXIuZGF0YXNldC5zZWN0aW9uKVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmZvckVhY2goKGltZykgPT4ge1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKVxuICAgICAgaW1nLm9ubG9hZCA9IG51bGxcbiAgICB9XG4gIH0pXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgU2Nyb2xsVHJpZ2dlci5yZWZyZXNoKClcbiAgfSwgMTAwMClcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCB0cmlnZ2VycyA9IFNjcm9sbFRyaWdnZXIuZ2V0QWxsKClcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICB0cmlnZ2VyLmtpbGwoKVxuICAgIH0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBxcywgcXNhLCBvbiwgYWRkLCByZW1vdmUsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBhZGRXcmFwLCB0b2dnbGVBZGQsIHRvZ2dsZUVkaXQsIGVkaXRXcmFwIH0gPSBjaG9venkobm9kZSlcblxuICBpZiAodG9nZ2xlQWRkICE9IHVuZGVmaW5lZCkge1xuICAgIG9uKHRvZ2dsZUFkZCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlKGFkZFdyYXAsICdoaWRkZW4nKVxuICAgIH0pXG4gIH1cblxuICBpZiAodG9nZ2xlRWRpdCAhPSB1bmRlZmluZWQpIHtcbiAgICBvbih0b2dnbGVFZGl0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGUoZWRpdFdyYXAsICdoaWRkZW4nKVxuICAgIH0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBsb2dpbiA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWxvZ2luLWRpYWxvZycpXG4gIGNvbnN0IHJlY292ZXIgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLWRpYWxvZycpXG4gIGNvbnN0IHJlY292ZXJMaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjb3Zlci10cmlnZ2VyJylcbiAgY29uc3QgY2FuY2VsUmVjb3ZlckxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLWNhbmNlbCcpXG5cbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgY29uc3QgcmVjb3ZlcklzVGFyZ2V0ID0gd2luZG93LmxvY2F0aW9uLmhhc2gubWF0Y2goL1xcI3JlY292ZXIvKSA/IHRydWUgOiBmYWxzZVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG4gIGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjb3Zlci1zdWNjZXNzJykgIT09IG51bGxcblxuICAvLyBjb25zb2xlLmxvZygnc3VjY2Vzcycsc3VjY2Vzc01lc3NhZ2UpXG4gIC8vIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG5cbiAgLy8gaWYgKHJlY292ZXJJc1RhcmdldCB8fCBzdWNjZXNzTWVzc2FnZSkge1xuICAvLyAgIGNvbnNvbGUubG9nKCd0ZXN0JylcbiAgLy8gICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIC8vICAgcmVjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIC8vIH1cblxuICByZWNvdmVyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHJlY292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSlcblxuICBjYW5jZWxSZWNvdmVyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmVjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBlbWFpbCwgYmlzLCBiaXNjb250ZW50LCBzdWNjZXNzLCBiaXN3cmFwLCBvcGVuYmlzLCBjbG9zZWJpcywgZm9ybWJpcyB9ID1cbiAgICBjaG9venkobm9kZSlcblxuICBvbihiaXMsICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgY3VycmVudFZhcmlhbnQgPSBub2RlLmRhdGFzZXQudmFyaWFudFxuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYS5rbGF2aXlvLmNvbS9vbnNpdGUvY29tcG9uZW50cy9iYWNrLWluLXN0b2NrL3N1YnNjcmliZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGE6ICdWN2lDalgnLFxuICAgICAgICBlbWFpbDogZW1haWwudmFsdWUsXG4gICAgICAgIHZhcmlhbnQ6IGN1cnJlbnRWYXJpYW50LFxuICAgICAgICBwbGF0Zm9ybTogJ3Nob3BpZnknLFxuICAgICAgICBzdG9yZTogJ2RyaW5rbW9kaWNhJyxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGFkZChmb3JtYmlzLCAnaGlkZGVuJylcbiAgICAgICAgcmVtb3ZlKHN1Y2Nlc3MsICdoaWRkZW4nKVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCJwaWNvYXBwXCI7XG5pbXBvcnQgY2hvb3p5IGZyb20gXCJjaG9venlcIjtcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBvbiwgcXNhIH0gZnJvbSBcIkBzZWxmYXdhcmUvbWFydGhhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGltYWdlcyB9ID0gY2hvb3p5KG5vZGUpO1xuXG4gIGNvbnN0IGFsbEltYWdlcyA9IEpTT04ucGFyc2UoaW1hZ2VzPy5pbm5lckhUTUwpLmltYWdlcztcbiAgY29uc3QgYWxsQmxvY2tzID0gcXNhKCcuanMtaW1hZ2UnLCBub2RlKVxuXG4gIGNvbnN0IHRoZW1lSW1hZ2VzID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5ib2R5LmRhdGFzZXQudGhlbWVcbiAgICBsZXQgdGhlbWVJbWFnZXMgPSBbXVxuXG4gICAgYWxsSW1hZ2VzLmZvckVhY2goKGltZywgaW5kZXgpID0+IHtcbiAgICAgIGlmKGltZy50aGVtZSA9PSBjdXJyZW50VGhlbWUpe1xuICAgICAgICB0aGVtZUltYWdlcy5wdXNoKGltZylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFsbEJsb2Nrcy5mb3JFYWNoKGltZyA9PiBpbWcuc3JjID0gJycpO1xuXG4gICAgdGhlbWVJbWFnZXMuZm9yRWFjaCgoaW1nLCBpbmRleCkgPT4ge1xuICAgICAgaWYoaW1nLnRoZW1lID09IGN1cnJlbnRUaGVtZSl7XG4gICAgICAgIGFsbEJsb2Nrc1tpbmRleF0uc3JjID0gaW1nLmltYWdlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGVtZUltYWdlcygpXG5cbiAgY3R4Lm9uKCd0aGVtZScsICgpID0+IHtcbiAgICB0aGVtZUltYWdlcygpXG4gIH0pXG59KTtcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IGFkZCwgcmVtb3ZlLCBvbiwgcXMsIHFzYSwgdG9nZ2xlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGZpbHRlclRvZ2dsZSwgY2xlYXJGaWx0ZXIgfSA9IGNob296eShub2RlKVxuXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnL3RhZ2dlZC8nKSkge1xuICAgIGxldCB0YWcgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgndGFnZ2VkLycpWzFdXG4gICAgbGV0IHRhcmdldFRhZyA9IHFzKGAuanMtZmlsdGVyW2RhdGEtZmlsdGVyPVwiJHt0YWd9XCJdYClcblxuICAgIHFzYSgnLmpzLWZpbHRlcicsIG5vZGUpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICByZW1vdmUoZWwsICdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICBpZiAodGFyZ2V0VGFnKSB7XG4gICAgICBhZGQodGFyZ2V0VGFnLCAnYWN0aXZlJylcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJvdXNlbCwgbmV4dCwgcHJldiwgY291bnRlciwgYWN0aXZlSW5kZXgsIGNhcmRzIH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgdHJpbVNuYXBzOiB0cnVlLFxuICAgIGNvbnRhaW5TY3JvbGw6IHRydWUsXG4gICAgYWxpZ246ICdzdGFydCcsXG4gIH0pXG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuXG4gICAgLy8gb24obmV4dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgZW1ibGEuc2Nyb2xsTmV4dFxuICAgIC8vIH0pXG4gIH1cblxuICBpZiAoY291bnRlcikge1xuICAgIG9uKGNvdW50ZXIsICdjbGljaycsIChlKSA9PiB7XG4gICAgICBlbWJsYS5zY3JvbGxUbyhlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgIH0pXG4gIH1cblxuICBlbWJsYS5vbignc2VsZWN0JywgKCkgPT4ge1xuICAgIGlmIChjb3VudGVyKSB7XG4gICAgICByZW1vdmUoY291bnRlciwgJ2lzLWFjdGl2ZScpXG4gICAgICBhZGQoXG4gICAgICAgIHFzKGAuanMtY291bnRlcltkYXRhLWluZGV4PVwiJHtlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKX1cIl1gLCBub2RlKSxcbiAgICAgICAgJ2lzLWFjdGl2ZSdcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXgpIHtcbiAgICAgIGFjdGl2ZUluZGV4LmlubmVySFRNTCA9IGVtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpICsgMVxuICAgIH1cbiAgfSlcblxuICAvLyByZXR1cm4gKCkgPT4ge1xuICAvLyAgIGlmIChuZXh0KSB7XG4gIC8vICAgICAgIG5leHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgLy8gICAgICAgcHJldi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuICAvLyAgIH1cbiAgLy8gfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IGFkZCwgcmVtb3ZlLCBvbiwgcXMsIHFzYSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnZW1ibGEtY2Fyb3VzZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGNhcm91c2VsLCBuZXh0LCBwcmV2LCBjb3VudGVyLCBhY3RpdmVJbmRleCB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QgZW1ibGEgPSBFbWJsYUNhcm91c2VsKGNhcm91c2VsLCB7XG4gICAgbG9vcDogbm9kZS5kYXRhc2V0Lmxvb3AgPT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZSxcbiAgICBza2lwU25hcHM6IGZhbHNlLFxuICAgIHRyaW1TbmFwczogdHJ1ZSxcbiAgICBjb250YWluU2Nyb2xsOiB0cnVlLFxuICAgIHNwZWVkOiBub2RlLmRhdGFzZXQuc3BlZWQgPyBub2RlLmRhdGFzZXQuc3BlZWQgOiAxMCxcbiAgICBhbGlnbjogbm9kZS5kYXRhc2V0LnN0YXJ0ID09ICdsZWZ0JyA/ICdzdGFydCcgOiAnY2VudGVyJyxcbiAgfSlcblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG5cbiAgICAvLyBvbihuZXh0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICBlbWJsYS5zY3JvbGxOZXh0XG4gICAgLy8gfSlcbiAgfVxuXG4gIGlmIChjb3VudGVyKSB7XG4gICAgb24oY291bnRlciwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGVtYmxhLnNjcm9sbFRvKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgfSlcbiAgfVxuXG4gIGVtYmxhLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgIHJlbW92ZShjb3VudGVyLCAnaXMtYWN0aXZlJylcbiAgICAgIGFkZChcbiAgICAgICAgcXMoYC5qcy1jb3VudGVyW2RhdGEtaW5kZXg9XCIke2VtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpfVwiXWAsIG5vZGUpLFxuICAgICAgICAnaXMtYWN0aXZlJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCkge1xuICAgICAgYWN0aXZlSW5kZXguaW5uZXJIVE1MID0gZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCkgKyAxXG4gICAgfVxuICB9KVxuXG4gIC8vIHJldHVybiAoKSA9PiB7XG4gIC8vICAgaWYgKG5leHQpIHtcbiAgLy8gICAgICAgbmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAvLyAgICAgICBwcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG4gIC8vICAgfVxuICAvLyB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IGdldFNpemVkSW1hZ2VVcmwsIGltYWdlU2l6ZSB9IGZyb20gJ2Jhc2Uvc2NyaXB0cy91dGlscy9pbWFnZXMuanMnXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gJ2Jhc2Uvc2NyaXB0cy91dGlscy9jdXJyZW5jeS5qcydcbmltcG9ydCBhcHAgZnJvbSAnYmFzZS9zY3JpcHRzL2FwcC5qcydcbmltcG9ydCB7IGdzYXAsIFBvd2VyNCB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBhZGQsIHFzLCBxc2EsIHJlbW92ZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5jb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKVxuXG5jb25zdCBYID0gYDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTkgMTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMSAxTDE3Ljk3MDYgMTcuOTcwNlwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuPHBhdGggZD1cIk0xIDE3Ljk3MDVMMTcuOTcwNiAwLjk5OTg5N1wiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuPC9zdmc+YFxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKHtcbiAgdmFyaWFudF9pZDogaWQsXG4gIHByb2R1Y3RfdGl0bGU6IHRpdGxlLFxuICBsaW5lX3ByaWNlOiBwcmljZSxcbiAgb3JpZ2luYWxfbGluZV9wcmljZTogb3JpZ2luYWxfcHJpY2UsXG4gIHZhcmlhbnRfdGl0bGUsXG4gIGltYWdlLFxuICB1cmwsXG4gIHF1YW50aXR5LFxuICAuLi5pdGVtXG59KSB7XG4gIC8vIGNvbnN0IGltZyA9IGltYWdlXG4gIC8vICAgPyBnZXRTaXplZEltYWdlVXJsKFxuICAvLyAgICAgICBpbWFnZS5yZXBsYWNlKCcuJyArIGltYWdlU2l6ZShpbWFnZSksICcnKSxcbiAgLy8gICAgICAgJzQwMHgnIC8vIFRPRE8gaGFja3kgYWZcbiAgLy8gICAgIClcbiAgLy8gICA6ICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vUjlPUzI5eEpiLTgvMjAwMHgxMzMzJ1xuXG4gIHJldHVybiBgXG48ZGl2IGNsYXNzPSdjYXJ0LWRyYXdlcl9faXRlbScgZGF0YS1jb21wb25lbnQ9J2NhcnREcmF3ZXJJdGVtJyBkYXRhLWlkPSR7aWR9ICR7XG4gICAgaXRlbS5zZWxsaW5nX3BsYW5fYWxsb2NhdGlvblxuICAgICAgPyBgZGF0YS1wbGFuaWQ9JyR7aXRlbS5zZWxsaW5nX3BsYW5fYWxsb2NhdGlvbi5zZWxsaW5nX3BsYW4uaWR9J2BcbiAgICAgIDogYGBcbiAgfT5cbiAgPGRpdiBjbGFzcz0ncmVsYXRpdmUgdy1mdWxsIGJvcmRlci1iIGJvcmRlci1zb2xpZCBwLTIwJz5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgPGEgaHJlZj0nJHt1cmx9JyBjbGFzcz1cImNhcnQtaW1hZ2VcIiBhcmlhLWxhYmVsPVwidmlldyAke3RpdGxlfVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIHNyYz0nJHtpbWFnZX0nIGFsdD1cInByb2R1Y3QgdGh1bWJuYWlsXCIvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbC0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBmb250LWJvbGQgZmxleC1ncm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nJHt1cmx9JyBjbGFzcz0ndGl0bGUtc21hbGwgdXBwZXJjYXNlJz4ke3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1kcmF3ZXJfX2l0ZW0tLXByaWNlIGZsZXgtc2hyaW5rLTAnPlxuICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICBvcmlnaW5hbF9wcmljZSA+IHByaWNlXG4gICAgICAgICAgICAgICAgICAgID8gYDxzcGFuIGNsYXNzPVwianMtcHJpY2UgbGluZS10aHJvdWdoXCI+JCR7Zm9ybWF0TW9uZXkoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwianMtZGlzY291bnQgbWwtNVwiPiQke2Zvcm1hdE1vbmV5KHByaWNlKX08L3NwYW4+YFxuICAgICAgICAgICAgICAgICAgICA6IGA8c3BhbiBjbGFzcz1cImpzLXByaWNlXCI+JCR7Zm9ybWF0TW9uZXkocHJpY2UpfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgdmFyaWFudF90aXRsZVxuICAgICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9J2l0ZW0tdmFyaWFudF9fdGl0bGUgY2FydC1pdGVtLS1kZXRhaWwnPiR7dmFyaWFudF90aXRsZX08L2Rpdj5gXG4gICAgICAgICAgICAgICAgOiBgYFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJ0LWl0ZW1fX3F0eSBmbGV4IGp1c3RpZnktYmV0d2VlbiBweC0xMCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBsZWFkaW5nLTEwMCB0ZXh0LTE0IHB5LTUgYm9yZGVyIGJvcmRlci1zb2xpZCBoLTI1Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1xdWFudGl0eSBidG4tcXVhbnRpdHkganMtcmVtb3ZlLXNpbmdsZSBjdXJzb3ItcG9pbnRlcic+PHNwYW4gY2xhc3M9XCJibG9ja1wiPiZuZGFzaDs8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2pzLXNpbmdsZS1xdWFudGl0eSBteC01Jz4ke3F1YW50aXR5fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJ0LXF1YW50aXR5IGJ0bi1xdWFudGl0eSBqcy1hZGQtc2luZ2xlIGN1cnNvci1wb2ludGVyJz48c3BhbiBjbGFzcz1cImJsb2NrXCI+Kzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uLS1yZXNldCBqcy1yZW1vdmUtaXRlbSB0ZXh0LXJpZ2h0IHRleHQtMTIgY2FydC1pdGVtX19yZW1vdmUgbGgxMDAnIGFyaWEtbGFiZWw9XCJyZW1vdmUgaXRlbVwiPjxzcGFuIGNsYXNzPVwiYmxvY2sgdW5kZXJsaW5lXCI+UkVNT1ZFPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYFxufVxuXG5mdW5jdGlvbiByZW5kZXJJdGVtcyhpdGVtcykge1xuICByZXR1cm4gaXRlbXMubGVuZ3RoID4gMFxuICAgID8gaXRlbXMucmVkdWNlKChtYXJrdXAsIGl0ZW0pID0+IHtcbiAgICAgICAgbWFya3VwICs9IGNyZWF0ZUl0ZW0oaXRlbSlcbiAgICAgICAgcmV0dXJuIG1hcmt1cFxuICAgICAgfSwgJycpXG4gICAgOiBgPGRpdiBjbGFzcz0ncHgtMjAgbTpweC00MCc+PHAgY2xhc3M9XCJweS0yMCB3LWZ1bGwgYm9yZGVyLWItMiBib3JkZXItc29saWQgYm9yZGVyLWJsdWVcIj5Zb3VyIGNhcnQgaXMgZW1wdHk8L3A+PC9kaXY+YFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtb3ZlcmxheScpXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtY2xvc2UnKVxuICBjb25zdCBzdWJ0b3RhbCA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXN1YnRvdGFsJylcbiAgY29uc3QgaXRlbXNSb290ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtaXRlbXMnKVxuICBjb25zdCBsb2FkaW5nID0gaXRlbXNSb290LmlubmVySFRNTFxuXG4gIGNvbnN0IHJlbmRlciA9IChjYXJ0KSA9PiB7XG4gICAgaXRlbXNSb290LmlubmVySFRNTCA9IHJlbmRlckl0ZW1zKGNhcnQuaXRlbXMsIGl0ZW1zUm9vdClcbiAgICBzdWJ0b3RhbC5pbm5lckhUTUwgPSBgJHtmb3JtYXRNb25leShjYXJ0LnRvdGFsX3ByaWNlKX1gXG4gIH1cblxuICBjb25zdCBvcGVuID0gKGNhcnQpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXG4gICAgaXRlbXNSb290LmlubmVySFRNTCA9IGxvYWRpbmdcblxuICAgIHNldFRpbWVvdXQocmVuZGVyKGNhcnQpLCAxMClcbiAgICBhcHAubW91bnQoKVxuXG4gICAgdGwudG8oJy5jYXJ0LWRyYXdlcicsIHtcbiAgICAgIHg6ICcwJScsXG4gICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxuXG4gICAgdGwudG8oJy5jYXJ0LWRyYXdlcicsIHtcbiAgICAgIHg6ICcxMDAlJyxcbiAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgYXBwLmh5ZHJhdGUoeyBjYXJ0T3BlbjogZmFsc2UgfSlcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcihjdHguZ2V0U3RhdGUoKS5jYXJ0KVxuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSlcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSlcblxuICBjb25zdCBjaGVja0NhcnQgPSAoY2FydCkgPT4ge1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChjYXJ0Lml0ZW1zLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJlbW92ZShxcygnLmNhcnQtZW1wdHlfX3dyYXBwZXInKSwgJ2hpZGRlbicpXG4gICAgICBhZGQocXMoJy5jYXJ0LWRyYXdlcl9faXRlbXMnKSwgJ2hpZGRlbicpXG4gICAgICBhZGQocXMoJy5qcy1jYXJ0Rm9vdGVyJyksICdoaWRkZW4nKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGQocXMoJy5jYXJ0LWVtcHR5X193cmFwcGVyJyksICdoaWRkZW4nKVxuICAgICAgcmVtb3ZlKHFzKCcuY2FydC1kcmF3ZXJfX2l0ZW1zJyksICdoaWRkZW4nKVxuICAgICAgcmVtb3ZlKHFzKCcuanMtY2FydEZvb3RlcicpLCAnaGlkZGVuJylcbiAgICB9XG4gICAgLy8gfSwgMTAwKTtcbiAgfVxuXG4gIGN0eC5vbignY2FydDp0b2dnbGUnLCAoeyBjYXJ0LCBjYXJ0T3BlbiB9KSA9PiB7XG4gICAgY2FydE9wZW4gJiYgb3BlbihjYXJ0KVxuXG4gICAgY2hlY2tDYXJ0KGN0eC5nZXRTdGF0ZSgpLmNhcnQpXG4gIH0pXG5cbiAgY3R4Lm9uKCdjYXJ0OnVwZGF0ZWQnLCAoKSA9PiB7XG4gICAgcmVuZGVyKGN0eC5nZXRTdGF0ZSgpLmNhcnQpXG4gICAgYXBwLm1vdW50KClcblxuICAgIGNoZWNrQ2FydChjdHguZ2V0U3RhdGUoKS5jYXJ0KVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyByZW1vdmVBZGRvbiwgdXBkYXRlQWRkb24gfSBmcm9tICdiYXNlL3NjcmlwdHMvdXRpbHMvY2FydC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgY29uc3QgcmVtb3ZlcnMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1yZW1vdmUtaXRlbScpXG4gIGNvbnN0IGRlY3JlYXNlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVtb3ZlLXNpbmdsZScpXG4gIGNvbnN0IGluY3JlYXNlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtYWRkLXNpbmdsZScpXG4gIGNvbnN0IGN1cnJlbnRRdHkgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zaW5nbGUtcXVhbnRpdHknKS5pbm5lckhUTUxcbiAgY29uc3QgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gIGNvbnN0IHNlbGxpbmdfcGxhbiA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXBsYW5pZCcpXG5cbiAgcmVtb3ZlcnMuZm9yRWFjaCgocmVtKSA9PiB7XG4gICAgcmVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGxldCBsaW5rID0gZS50YXJnZXQuZGF0YXNldC5saW5rXG4gICAgICBjdHguZW1pdCgnaXRlbTpyZW1vdmVkJylcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmVtb3ZlQWRkb24oaWQsIHNlbGxpbmdfcGxhbiwgbGluaylcbiAgICB9KVxuICB9KVxuXG4gIGRlY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCBwYXJzZUludChjdXJyZW50UXR5KSAtIDEpXG4gIH0pXG5cbiAgaW5jcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZUFkZG9uKGlkLCBzZWxsaW5nX3BsYW4sIHBhcnNlSW50KGN1cnJlbnRRdHkpICsgMSlcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IHsgb24sIHFzIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSkgPT4ge1xuICBvbihub2RlLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgcXMoJy5qcy1jYXJ0Rm9ybScpLnN1Ym1pdCgpXG5cbiAgICAvLyB3aW5kb3cubG9jYXRpb24gPSAnL2NoZWNrb3V0J1xuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBnc2FwLCBTY3JvbGxUb1BsdWdpbiB9IGZyb20gJ2dzYXAvYWxsJ1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUb1BsdWdpbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgc2Nyb2xsVG86IHtcbiAgICAgICAgeTogYFtkYXRhLXNlY3Rpb249XCIke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV19XCJdYCxcbiAgICAgICAgb2Zmc2V0WTogOTAsXG4gICAgICB9LFxuICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICB9KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgb24sIGFkZCwgcmVtb3ZlLCBxcywgcXNhIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHN1Ym1pdCwgZW1haWwgfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IG9mZkVtYWlsID0gb24oZW1haWwsICdibHVyJywgKGUpID0+IHtcbiAgICBpZiAoIWVtYWlsLnZhbHVlLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgIGFkZChxcygnLmZvcm0tZW1haWwnLCBub2RlKSwgJ2Vycm9yJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKHFzKCcuZm9ybS1lbWFpbCcsIG5vZGUpLCAnZXJyb3InKVxuICAgIH1cbiAgfSlcblxuICBxc2EoJy5mb3JtLWlucHV0JykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBvbihlbCwgJ2lucHV0JywgKCkgPT4ge1xuICAgICAgaWYgKGVsLnZhbHVlKSB7XG4gICAgICAgIGFkZChlbCwgJ2hhcy1maWxsJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZShlbCwgJ2hhcy1maWxsJylcbiAgICAgIH1cblxuICAgICAgaWYgKHFzYSgnLmZvcm0taW5wdXQuaGFzLWZpbGw6bm90KC5lcnJvciknKS5sZW5ndGggPT0gMykge1xuICAgICAgICBzdWJtaXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJtaXQuYWRkQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIG9mZkVtYWlsKClcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCJwaWNvYXBwXCI7XG5pbXBvcnQgY2hvb3p5IGZyb20gXCJjaG9venlcIjtcbmltcG9ydCB7IG9uLCB0b2dnbGUsIHFzYSwgcXMsIHJlbW92ZSwgYWRkIH0gZnJvbSBcIkBzZWxmYXdhcmUvbWFydGhhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGZhcSwgYm9keSwgaW5uZXIsIHBsdXMgfSA9IGNob296eShub2RlKTtcblxuICBjb25zb2xlLmxvZygnZmFxcycpO1xuXG4gIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoJy0tZHJhd2VySGVpZ2h0JywgYCR7aW5uZXIub2Zmc2V0SGVpZ2h0fXB4YClcblxuICBvbihmYXEsIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGUoYm9keSwgXCJvcGVuXCIpO1xuICAgIHRvZ2dsZShub2RlLCBcImFjdGl2ZVwiKTtcbiAgICB0b2dnbGUocGx1cywgXCJyb3RhdGUtNDVcIik7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwicGljb2FwcFwiO1xuaW1wb3J0IGNob296eSBmcm9tIFwiY2hvb3p5XCI7XG5pbXBvcnQgeyBvbiwgdG9nZ2xlLCBxc2EsIHFzLCByZW1vdmUsIGFkZCB9IGZyb20gXCJAc2VsZmF3YXJlL21hcnRoYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBxcyhcIm1haW5cIikuYXBwZW5kKG5vZGUpO1xuXG4gIGxldCBzZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYWRkKHNlY3Rpb25Db250YWluZXIsICdmYXEtY29udGFpbmVyJylcblxuICBxcygnbWFpbicpLmFwcGVuZChzZWN0aW9uQ29udGFpbmVyKVxuXG4gIHFzYSgnc2VjdGlvbicpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoc2VjdGlvbilcbiAgfSk7XG59KTtcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmltcG9ydCB7IHVwZGF0ZSB9IGZyb20gJ2xhemltJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBpbWFnZXMsIGltYWdlIH0gPSBjaG9venkobm9kZSk7XG5cbiAgY29uc3QgYWxsSW1hZ2VzID0gSlNPTi5wYXJzZShpbWFnZXM/LmlubmVySFRNTCkuaW1hZ2VzO1xuXG4gIGNvbnN0IHRoZW1lSW1hZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGRvY3VtZW50LmJvZHkuZGF0YXNldC50aGVtZVxuICAgIGNvbnN0IHRoZW1lSW1hZ2UgPSBhbGxJbWFnZXMuZmluZCgoaW1nKSA9PiBpbWcudGhlbWUgPT0gY3VycmVudFRoZW1lKTtcblxuICAgIGltYWdlLnNyYyA9IHRoZW1lSW1hZ2UuaW1hZ2VcbiAgICBpbWFnZS5kYXRhc2V0LnNyYyA9IHRoZW1lSW1hZ2UuaW1hZ2VcblxuICAgIHVwZGF0ZSgpXG4gIH1cblxuICB0aGVtZUltYWdlcygpXG5cbiAgY3R4Lm9uKCd0aGVtZScsICgpID0+IHtcbiAgICB0aGVtZUltYWdlcygpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCB7IGdzYXAsIEV4cG8gfSBmcm9tICdnc2FwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJ0VG9nZ2xlLCBhbm5vdW5jZUJhciwgYW5ub3VuY2VDbG9zZSwgbWVudSwgYW5jaG9yLCBuYXYsIG9wZW4sIGNsb3NlLCBuYXZUb2dnbGUgfSA9XG4gICAgY2hvb3p5KG5vZGUpXG5cbiAgbGV0IGhlYWRlckNsb3NlID0gcXMoJy5oZWFkZXItY2xvc2UnKVxuICBsZXQgY2xvc2Vab25lID0gcXMoJy5qcy1jbG9zZVpvbmUnKVxuICBsZXQgY2FydENvdW50ID0gcXNhKCcuanMtY2FydENvdW50JylcblxuICBpZiAoYW5ub3VuY2VDbG9zZSkge1xuICAgIG9uKGFubm91bmNlQ2xvc2UsICdjbGljaycsICgpID0+IHtcbiAgICAgIGFkZChhbm5vdW5jZUJhciwgJ2hpZGRlbicpXG4gICAgICBxcygnYm9keScpLnN0eWxlLnNldFByb3BlcnR5KCctLWFubm91bmNlJywgYDBweGApXG4gICAgfSlcbiAgfVxuXG4gIG9uKGNhcnRUb2dnbGUsICdjbGljaycsICgpID0+IHtcbiAgICBjdHguZW1pdCgnY2FydDp0b2dnbGUnLCAoc3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNhcnRPcGVuOiAhc3RhdGUuY2FydE9wZW4sXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvL2RlZmluZSBuYXYgc2l6aW5nXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tbmF2JywgYCR7bmF2Lm9mZnNldFdpZHRofXB4YCk7IC8vIENoYW5nZSB0byBkZXNpcmVkIGNvbG9yXG5cbiAgb24od2luZG93LCAncmVzaXplJywgKCkgPT4ge1xuICAgIHFzKCdib2R5Jykuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1oZWFkZXJIZWlnaHQnLFxuICAgICAgYCR7cXMoJ2hlYWRlcicpLm9mZnNldEhlaWdodCAtIDJ9cHhgXG4gICAgKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1uYXYnLCBgJHtuYXYub2Zmc2V0V2lkdGh9cHhgKTsgLy8gQ2hhbmdlIHRvIGRlc2lyZWQgY29sb3JcbiAgfSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBxcygnYm9keScpLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgJy0taGVhZGVySGVpZ2h0JyxcbiAgICAgIGAke25vZGUub2Zmc2V0SGVpZ2h0IC0gMn1weGBcbiAgICApXG4gIH0sIDEwMDApXG5cbiAgb24obmF2VG9nZ2xlLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlKG9wZW4sICdoaWRkZW4nKVxuICAgIHRvZ2dsZShjbG9zZSwgJ2hpZGRlbicpXG5cbiAgICB0b2dnbGUobWVudSwgJ2lzLW9wZW4nKVxuICB9KVxuXG4gIG9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KCctLW1lbnVPZmZzZXQnLCBgJHtub2RlLm9mZnNldEhlaWdodH1gKVxuICB9KVxuXG4gIGN0eC5vbignY2FydDp1cGRhdGVkJywgKHN0YXRlKSA9PiB7XG4gICAgY2FydENvdW50LmZvckVhY2goKGNvdW50KSA9PiAoY291bnQuaW5uZXJIVE1MID0gc3RhdGUuY2FydC5pdGVtX2NvdW50KSlcbiAgfSlcblxuICBjYXJ0Q291bnQuZm9yRWFjaChcbiAgICAoY291bnQpID0+IChjb3VudC5pbm5lckhUTUwgPSBjdHguZ2V0U3RhdGUoKS5jYXJ0Lml0ZW1fY291bnQpXG4gIClcblxuICBjdHgub24oJ21lbnU6Y2xvc2UnLCAoKSA9PiB7XG4gICAgZ3NhcC5mcm9tVG8oXG4gICAgICAnLm5hdi1tZW51LXdyYXAnLFxuICAgICAgeyB4OiAwIH0sXG4gICAgICB7IHg6ICctMTAwJScsIGR1cmF0aW9uOiAwLjMsIGVhc2U6IEV4cG8uZWFzZU91dCB9XG4gICAgKVxuXG4gICAgcmVtb3ZlKG1lbnVPcGVuLCAnaGlkZGVuJylcbiAgICBhZGQoaGVhZGVyQ2xvc2UsICdoaWRkZW4nKVxuICAgIGFkZChjbG9zZVpvbmUsICdoaWRkZW4nKVxuICB9KVxuXG4gIC8vaGFuZGxlIGhlYWRlciBsb2dvXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiA9PSAnLycpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICB9IGVsc2V7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2dvJylcbiAgfVxuXG4gIC8vdG9nZ2xlIGNhcnQgaWYgdXNlciBpcyBwb2ludGVkIHRvIGNhcnQgcGFnZVxuICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY2FydCcpID4gLTEpIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignI2NhcnQnKSA+IC0xKSB7XG4gICAgICBjdHguZW1pdCgnY2FydDp0b2dnbGUnLCAoc3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0T3BlbjogIXN0YXRlLmNhcnRPcGVuLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvI2NhcnQnXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSBcInBpY29hcHBcIjtcbmltcG9ydCBjaG9venkgZnJvbSBcImNob296eVwiO1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIG9uLCBxc2EgfSBmcm9tIFwiQHNlbGZhd2FyZS9tYXJ0aGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgcHJvZHVjdHMsIHRvZ2dsZSwgaWNvbiwgaGVybywgbGluayB9ID0gY2hvb3p5KG5vZGUpO1xuXG4gIGNvbnN0IGFsbFByb2R1Y3RzID0gSlNPTi5wYXJzZShwcm9kdWN0cz8uaW5uZXJIVE1MKS5wcm9kdWN0cztcblxuICBjb25zdCB1cGRhdGVUaGVtZSA9ICh0aGVtZSwgcHJpbWFyeSwgc2Vjb25kYXJ5LCB0ZXJ0aWFyeSkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXByaW1hcnlcIiwgYCR7cHJpbWFyeX1gKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zZWNvbmRhcnlcIiwgYCR7c2Vjb25kYXJ5fWApO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRlcnRpYXJ5XCIsIGAke3RlcnRpYXJ5fWApO1xuICAgIGRvY3VtZW50LmJvZHkuZGF0YXNldC50aGVtZSA9IHRoZW1lXG4gIH1cblxuICB1cGRhdGVUaGVtZShub2RlLmRhdGFzZXQudGhlbWUsIG5vZGUuZGF0YXNldC5wcmltYXJ5LCBub2RlLmRhdGFzZXQuc2Vjb25kYXJ5LCBub2RlLmRhdGFzZXQudGVydGlhcnkpXG5cbiAgb24odG9nZ2xlLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGxldCBidG4gPSBlLnRhcmdldFxuICAgIGxldCBpbmRleCA9IHBhcnNlSW50KGJ0bi5kYXRhc2V0LmluZGV4KSAtIDFcbiAgICB1cGRhdGVUaGVtZShidG4uZGF0YXNldC50aGVtZSwgYnRuLmRhdGFzZXQucHJpbWFyeSwgYnRuLmRhdGFzZXQuc2Vjb25kYXJ5LCBidG4uZGF0YXNldC50ZXJ0aWFyeSlcblxuICAgIHJlbW92ZSh0b2dnbGUsICdhY3RpdmUnKVxuICAgIGFkZChlLnRhcmdldCwgJ2FjdGl2ZScpXG5cbiAgICBoZXJvLnNyYyA9IGFsbFByb2R1Y3RzW2luZGV4XT8uaGVyb1xuICAgIGljb24uc3JjID0gYWxsUHJvZHVjdHNbaW5kZXhdPy5pY29uXG4gICAgbGluay5ocmVmID0gYWxsUHJvZHVjdHNbaW5kZXhdPy51cmxcblxuICAgIGN0eC5lbWl0KCd0aGVtZScpXG4gIH0pXG59KTtcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IG9uLCByZW1vdmUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgbHFpcCwgaW1nIH0gPSBjaG9venkobm9kZSlcblxuICBvbihpbWcsICdsb2FkJywgKCkgPT4ge1xuICAgIGltZy5kZWNvZGUoKS50aGVuKCgpID0+IHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGN0eC5lbWl0KCdsYXp5OmxvYWQnLCBudWxsLCB7IGlkOiBub2RlLmRhdGFzZXQuaWQgfSlcbiAgICAgICAgbGV0IG9mZiA9IG9uKGltZywgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgb2ZmKClcbiAgICAgICAgICBscWlwLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIHJlbW92ZShpbWcsICdvcGFjaXR5LTAnKVxuICAgICAgICBpbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgaW1nLnNyYyA9IGltZy5kYXRhc2V0LnNyY1xuICBpbWcuc3Jjc2V0ID0gaW1nLmRhdGFzZXQuc3Jjc2V0XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IG9uLCByZW1vdmUsIGFkZCwgaGFzLCBxcywgcXNhIH0gZnJvbSAnbWFydGhhJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHByaW1hcnkgfSA9IGNob296eShub2RlKVxuICBsZXQgY3VycmVudFggPSAwXG4gIGxldCB0YXJnZXRYID0gMFxuXG4gIHdpbmRvdy5zZXRJbnRlcnZhbChhbmltYXRpb25Mb29wLCAxNSlcblxuICBmdW5jdGlvbiBhbmltYXRpb25Mb29wKCkge1xuICAgIHRhcmdldFggPSBjdXJyZW50WCA+IHByaW1hcnkuc2Nyb2xsV2lkdGggPyAwIDogY3VycmVudFggKyAxXG5cbiAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RhcmdldFh9cHgpIHRyYW5zbGF0ZVooMHB4KWBcblxuICAgIGN1cnJlbnRYID0gdGFyZ2V0WFxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgb24sIHFzLCBhZGQsIHJlbW92ZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAna2xhdml5by1zdWJzY3JpYmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGZvcm1Db250ZW50LCBzdWNjZXNzLCBzdWJtaXQsIGVycm9yIH0gPSBjaG9venkobm9kZSlcblxuICBvbihzdWJtaXQsICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgbGlzdElkID0gJ1h0R0pXVydcbiAgICBsZXQgZW1haWwgPSBxcygnLmpzLWVtYWlsJywgbm9kZSkudmFsdWVcblxuICAgIGlmIChlbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICBzdWJzY3JpYmUobGlzdElkLCBlbWFpbCwge30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlbW92ZShzdWNjZXNzLCAnaGlkZGVuJylcbiAgICAgICAgYWRkKGZvcm1Db250ZW50LCAnaGlkZGVuJylcbiAgICAgICAgYWRkKGVycm9yLCAnaGlkZGVuJylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZShlcnJvciwgJ2hpZGRlbicpXG4gICAgfVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBhZGRWYXJpYW50IH0gZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL2NhcnQuanMnXG5pbXBvcnQgeyBxcywgcXNhLCBoYXMsIG9uIH0gZnJvbSAnbWFydGhhJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHN1YkRldGFpbFRvZ2dsZSwgc3ViRGV0YWlsLCBxdWFudGl0eSB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocXMoJy5qcy1wcm9kdWN0LWpzb24nLCBub2RlKS5pbm5lckhUTUwpXG4gIGNvbnN0IGFkZEJ0biA9IHFzKCcuanMtYWRkLXRvLWNhcnQnLCBub2RlKVxuICBjb25zdCBhZGRUZXh0ID1cbiAgICBhZGRCdG4uaW5uZXJIVE1MIHx8XG4gICAgYCR7YWRkQnRuLmRhdGFzZXQ/LnByZW9yZGVyID09ICd0cnVlJyA/ICdQcmUtT3JkZXInIDogJ0FkZCBUbyBDYXJ0J30gfCAke1xuICAgICAgYWRkQnRuLmRhdGFzZXQ/LnByaWNlXG4gICAgfWBcblxuICBsZXQgeyBzZWxlY3RlZE9yRmlyc3RBdmFpbGFibGVWYXJpYW50LCBwcm9kdWN0IH0gPSBqc29uXG4gIGxldCBjdXJyZW50VmFyaWFudCA9IHByb2R1Y3QudmFyaWFudHMuZmlsdGVyKFxuICAgICh2KSA9PiB2LmlkID09PSBzZWxlY3RlZE9yRmlyc3RBdmFpbGFibGVWYXJpYW50XG4gIClbMF1cblxuICBjdHgub24oJ2NhcnQ6dG9nZ2xlJywgKCkgPT4ge1xuICAgIGFkZEJ0bi5pbm5lckhUTUwgPSBhZGRUZXh0XG4gIH0pXG5cbiAgb24oYWRkQnRuLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgYWRkQnRuLmlubmVySFRNTCA9ICdBZGRpbmcuLi4nXG5cbiAgICAvL2dldCBhZGRvbnNcbiAgICBxc2EoJy5qcy1hZGRvbi5zZWxlY3RlZCcsIG5vZGUpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBhZGRvbkpzb24gPSBKU09OLnBhcnNlKHFzKCcuanMtYWRkb24tanNvbicsIGVsKS5pbm5lckhUTUwpXG5cbiAgICAgIGxldCB7IGFkZG9uU2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudCwgYWRkb25Qcm9kdWN0IH0gPSBhZGRvbkpzb25cbiAgICAgIGxldCBhZGRvblZhcmlhbnQgPSBhZGRvblByb2R1Y3QudmFyaWFudHMuZmlsdGVyKFxuICAgICAgICAodikgPT4gdi5pZCA9PT0gYWRkb25TZWxlY3RlZE9yRmlyc3RBdmFpbGFibGVWYXJpYW50XG4gICAgICApWzBdXG5cbiAgICAgIGFkZFZhcmlhbnQoYWRkb25WYXJpYW50LCAxLCBudWxsKVxuICAgIH0pXG4gICAgLy8gYWRkQnRuLmlubmVySFRNTCA9ICdhZGRpbmcuLi4nXG5cbiAgICBsZXQgc2VsZWN0ZWRWYXJpYW50ID0gcXMoJ3NlbGVjdFtuYW1lPVwiaWRcIl0nLCBub2RlKS52YWx1ZVxuXG4gICAgY3VycmVudFZhcmlhbnQgPSBzZWxlY3RlZFZhcmlhbnRcbiAgICAgID8gcHJvZHVjdC52YXJpYW50cy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgPT09IHBhcnNlSW50KHFzKCdzZWxlY3RbbmFtZT1cImlkXCJdJywgbm9kZSkudmFsdWUpXG4gICAgICAgIClbMF1cbiAgICAgIDogY3VycmVudFZhcmlhbnRcblxuICAgIGFkZFZhcmlhbnQoY3VycmVudFZhcmlhbnQsIHF1YW50aXR5Py52YWx1ZSB8fCAxLCBudWxsKVxuICAgIGNvbnNvbGUubG9nKGpzb24pXG4gIH0pXG5cbiAgcmV0dXJuICgpID0+IHt9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIHFzLCBvbiwgcXNhIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICdlbWJsYS1jYXJvdXNlbCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgY2Fyb3VzZWwsIG5leHQsIHByZXYsIGNvdW50ZXIsIHByb2R1Y3RJbWFnZXMsIHZhcmlhbnRUaXRsZSwgYnRucywgdGh1bWIgfSA9XG4gICAgY2hvb3p5KG5vZGUpXG5cbiAgbGV0IGVtYmxhXG5cbiAgY29uc3QgaW1hZ2VzID0gSlNPTi5wYXJzZShwcm9kdWN0SW1hZ2VzPy5pbm5lckhUTUwpPy5pbWFnZXNcbiAgaW1hZ2VzLmZvckVhY2goKGVsKSA9PiB7fSlcblxuICBjb25zdCBpbml0RW1ibGEgPSAoKSA9PiB7XG4gICAgZW1ibGEgPSBFbWJsYUNhcm91c2VsKGNhcm91c2VsLCB7IGxvb3A6IHRydWUsIHNraXBTbmFwczogZmFsc2UgfSlcblxuICAgIGlmIChuZXh0ICYmIHByZXYpIHtcbiAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcbiAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgICB9XG5cbiAgICBsZXQgdmFyaWFudEltYWdlcyA9IHFzYSgnLnByb2R1Y3QtaW1nJylcblxuICAgIGJ0bnMuaW5uZXJIVE1MID0gJydcblxuICAgIC8vcmVuZGVyIGJ1dHRvbnNcbiAgICB2YXJpYW50SW1hZ2VzLmZvckVhY2goKGltZywgaW5kZXgpID0+IHtcbiAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnLCBpbmRleClcbiAgICAgICAgZW1ibGEuc2Nyb2xsVG8oaW5kZXgpXG4gICAgICB9KVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsLWRvdCcpXG4gICAgICBidG5zLmFwcGVuZENoaWxkKGJ0bilcbiAgICB9KVxuXG4gICAgYWRkKHFzKCcuY2Fyb3VzZWwtZG90OmZpcnN0LWNoaWxkJyksICdpcy1hY3RpdmUnKVxuXG4gICAgZW1ibGEub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgIGlmIChjb3VudGVyKSB7XG4gICAgICAgIHJlbW92ZShxcygnLmNhcm91c2VsLWRvdC5pcy1hY3RpdmUnKSwgJ2lzLWFjdGl2ZScpXG4gICAgICAgIGFkZChcbiAgICAgICAgICBxcyhcbiAgICAgICAgICAgIGAuY2Fyb3VzZWwtZG90Om50aC1jaGlsZCgke2VtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpICsgMX0pYCxcbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICApLFxuICAgICAgICAgICdpcy1hY3RpdmUnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaW5pdEVtYmxhKClcblxuICBjdHgub24oJ3ZhcmlhbnQ6Y2hhbmdlJywgKCkgPT4ge1xuICAgIGxldCBjdXJyZW50VmFyaWFudCA9IHZhcmlhbnRUaXRsZS5pbm5lckhUTUxcblxuICAgIGNhcm91c2VsLmlubmVySFRNTCA9ICcnXG5cbiAgICAvL3JlbmRlciB2YXJpYW50IGltYWdlc1xuICAgIGNhcm91c2VsLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggc2VsZWN0LW5vbmUgdy1mdWxsIGgtWzEwMHZ3XSBtOmgtaGVybyBtOm1pbi1oLVtjYWxjKDEwMHZoLTEzcmVtKV1cIj5cbiAgICAgICAgJHtpbWFnZXNcbiAgICAgICAgICAubWFwKChpbWcpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaW1nLmFsdC50b0xvd2VyQ2FzZSgpID09IGN1cnJlbnRWYXJpYW50IHx8XG4gICAgICAgICAgICAgIGltZy5hbHQudG9Mb3dlckNhc2UoKSA9PSAnYWxsJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIHByb2R1Y3QtaW1nIG06cHgtMCByZWxhdGl2ZSBtaW4tdy1bMTAwJV0gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGFic29sdXRlIGxlZnQtMCB0b3AtMFwiIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzUyLzcwNjEvOTQ1Ni8ke2ltZy5zcmN9XCIgYWx0PVwiJHtpbWcuYWx0fVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQsIHJldHVybiBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG5cbiAgICAvL3Jlc2V0IGNhcm91c2VsXG4gICAgaWYgKGVtYmxhKSB7XG4gICAgICBlbWJsYS5kZXN0cm95KClcbiAgICB9XG5cbiAgICAvL2luaXRpYWxpemUgY2Fyb3VzZWxcbiAgICBpbml0RW1ibGEoKVxuICB9KVxuXG4gIG9uKHRodW1iLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGVtYmxhLnNjcm9sbFRvKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXggLSAxKSlcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyByZW1vdmUsIGFkZCwgcXMsIG9uLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgcXVhbnRpdHksIHJlbW92ZSwgYWRkIH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCBtaW4gPSAxXG4gIGNvbnN0IG1heCA9IDEwMDBcblxuICBsZXQgY291bnQgPSAxXG5cbiAgY29uc29sZS5sb2coJ2NvdW50ZXInKVxuXG4gIGNvbnN0IHNldCA9IChpKSA9PiB7XG4gICAgY291bnQgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKGksIG1heCB8fCAxMDAwMCkpXG5cbiAgICBxdWFudGl0eS5pbm5lckhUTUwgPSBjb3VudFxuICAgIHF1YW50aXR5LnZhbHVlID0gY291bnRcbiAgfVxuXG4gIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0KC0tY291bnQpXG5cbiAgICBjb25zb2xlLmxvZygncmVtb3ZlJylcbiAgfSlcblxuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldCgrK2NvdW50KVxuXG4gICAgY29uc29sZS5sb2coJ2FkZCcpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIG9uLCBxcywgcXNhIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IG9wdGlvblN1Yiwgb3B0aW9uT25lLCBvcHRpb25XcmFwIH0gPSBjaG9venkobm9kZSlcblxuICBsZXQgYWRkUHJpY2UgPSBxc2EoJy5qcy1hZGRQcmljZScpXG5cbiAgaWYgKG9wdGlvblN1Yikge1xuICAgIG9uKG9wdGlvblN1YiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWRkKHFzKCcucHJvZHVjdC12YXJpYW50LXdyYXAnKSwgJ2lzLXN1YnNjcmlwdGlvbicpXG4gICAgICByZW1vdmUob3B0aW9uV3JhcCwgJ3NlbGVjdGVkLW9uZScpXG4gICAgICBhZGQob3B0aW9uV3JhcCwgJ3NlbGVjdGVkLXN1YicpXG4gICAgICBhZGQob3B0aW9uU3ViLCAnYWN0aXZlJylcbiAgICAgIHJlbW92ZShvcHRpb25PbmUsICdhY3RpdmUnKVxuXG4gICAgICBpZiAoYWRkUHJpY2UubGVuZ3RoID4gMCkge1xuICAgICAgICBhZGRQcmljZS5mb3JFYWNoKChwcmljZSkgPT4ge1xuICAgICAgICAgIHByaWNlLmlubmVySFRNTCA9IGAkJHtvcHRpb25TdWIuZGF0YXNldC5wcmljZX1gXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uKG9wdGlvbk9uZSwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlKHFzKCcucHJvZHVjdC12YXJpYW50LXdyYXAnKSwgJ2lzLXN1YnNjcmlwdGlvbicpXG4gICAgICBhZGQob3B0aW9uV3JhcCwgJ3NlbGVjdGVkLW9uZScpXG4gICAgICByZW1vdmUob3B0aW9uV3JhcCwgJ3NlbGVjdGVkLXN1YicpXG4gICAgICByZW1vdmUob3B0aW9uU3ViLCAnYWN0aXZlJylcbiAgICAgIGFkZChvcHRpb25PbmUsICdhY3RpdmUnKVxuXG4gICAgICBpZiAoYWRkUHJpY2UubGVuZ3RoID4gMCkge1xuICAgICAgICBhZGRQcmljZS5mb3JFYWNoKChwcmljZSkgPT4ge1xuICAgICAgICAgIHByaWNlLmlubmVySFRNTCA9IGAkJHtvcHRpb25PbmUuZGF0YXNldC5wcmljZX1gXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBxcywgcXNhLCBvbiwgaGFzLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCB7IGdzYXAsIEV4cG8gfSBmcm9tICdnc2FwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQge1xuICAgIGFjdGl2ZUZyZXF1ZW5jeSxcbiAgICBjb250ZW50LFxuICAgIGNvbnRlbnRXcmFwLFxuICAgIHRvZ2dsZUZyZXF1ZW5jeSxcbiAgICBhcnJvdyxcbiAgICBmcmVxdWVuY3lPcHRpb24sXG4gICAgc3ViT3B0aW9uLFxuICAgIGZyZXF1ZW5jeVdyYXAsXG4gIH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCB0b2dnbGVPcHRpb25zID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50SGVpZ2h0ID0gY29udGVudC5vZmZzZXRIZWlnaHRcblxuICAgIHRvZ2dsZShjb250ZW50V3JhcCwgJ2FjdGl2ZScpXG4gICAgdG9nZ2xlKGFycm93LCAncm90YXRlLTkwJylcbiAgICB0b2dnbGUoYXJyb3csICctcm90YXRlLTkwJylcblxuICAgIGlmIChoYXMoY29udGVudFdyYXAsICdhY3RpdmUnKSkge1xuICAgICAgY29udGVudFdyYXAuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudEhlaWdodCArIDEwfXB4YFxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50V3JhcC5zdHlsZS5tYXhIZWlnaHQgPSAnMHB4J1xuICAgIH1cbiAgfVxuXG4gIG9uKHRvZ2dsZUZyZXF1ZW5jeSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0b2dnbGVPcHRpb25zKClcbiAgfSlcblxuICBvbihmcmVxdWVuY3lPcHRpb24sICdjbGljaycsIChlKSA9PiB7XG4gICAgdG9nZ2xlT3B0aW9ucygpXG5cbiAgICBxc2EoJy5qcy1mcmVxdWVuY3lPcHRpb24nLCBub2RlKS5mb3JFYWNoKChvcHQpID0+IHtcbiAgICAgIHJlbW92ZShvcHQsICdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICBhZGQoZS50YXJnZXQsICdhY3RpdmUnKVxuXG4gICAgbGV0IGN1ck9wdGlvbiA9IGUudGFyZ2V0LmRhdGFzZXQuaWRcblxuICAgIGFjdGl2ZUZyZXF1ZW5jeS5pbm5lckhUTUwgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXG4gICAgdG9nZ2xlRnJlcXVlbmN5LmRhdGFzZXQuaWQgPSBjdXJPcHRpb25cbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyByZW1vdmUsIGFkZCwgcXMsIHFzYSwgb24sIGhhcywgdG9nZ2xlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IG9wdGlvbiwgdmFyaWFudFRpdGxlLCBzd2F0Y2ggfSA9IGNob296eShub2RlKVxuICBsZXQgYWRkQnRuID0gcXNhKCcuanMtYWRkLXRvLWNhcnQnKVxuICBsZXQgb3B0aW9uR3JvdXBzID0gcXNhKCcuanMtb3B0aW9uR3JvdXAnKVxuXG4gIGxldCBzZWxlY3RlZFN3YXRjaFxuICBsZXQgb3B0aW9ucyA9IHFzYSgnLmpzLXZhcmlhbnRPcHRpb24nLCBub2RlKVxuXG4gIGNvbnN0IHVwZGF0ZVZhcmlhbnQgPSAoKSA9PiB7XG4gICAgaWYgKCFxcygnLmpzLXN3YXRjaCcpKSByZXR1cm5cblxuICAgIHNlbGVjdGVkU3dhdGNoID0gcXMoJy5qcy1zd2F0Y2guYWN0aXZlJywgbm9kZSk/LmRhdGFzZXQ/LnRpdGxlIHx8IG51bGxcblxuICAgIC8vIC8vZmluZCB2YXJpYW50IHRoYXQgbWF0Y2hlcyB0aXRsZSBhbmQgc2l6ZVxuICAgIGNvbnN0IG5ld1ZhcmlhbnQgPSBvcHRpb25zLmZpbmQoXG4gICAgICAodmFyaWFudCkgPT4gdmFyaWFudC5kYXRhc2V0LnRpdGxlID09PSBzZWxlY3RlZFN3YXRjaFxuICAgIClcblxuICAgIC8vY2xlYXIgYWxsIG9wdGlvbnNcbiAgICBvcHRpb25zLmZvckVhY2goKHNlbGVjdGVkVmFyaWFudCkgPT5cbiAgICAgIHNlbGVjdGVkVmFyaWFudC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJylcbiAgICApXG5cbiAgICAvL3NlbGVjdCBuZXcgdmFyaWFudFxuICAgIGlmIChuZXdWYXJpYW50KSBuZXdWYXJpYW50LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKVxuXG4gICAgLy9jb25maWd1cmUgYnV0dG9uIHdpdGggaW52ZW50b3J5XG4gICAgaWYgKCFuZXdWYXJpYW50IHx8IG5ld1ZhcmlhbnQuZGF0YXNldC5pbnZlbnRvcnkgPCAxKSB7XG4gICAgICBhZGRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgYnRuLmlubmVySFRNTCA9ICdPdXQgT2YgU3RvY2snXG4gICAgICAgIGFkZChidG4sICdvb3MnKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBgJHtcbiAgICAgICAgICBidG4uZGF0YXNldC5wcmVvcmRlciA9PSAndHJ1ZScgPyAnUHJlLU9yZGVyJyA6ICdBZGQgVG8gQ2FydCdcbiAgICAgICAgfSB8ICR7YnRuLmRhdGFzZXQucHJpY2V9YFxuICAgICAgICByZW1vdmUoYnRuLCAnb29zJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFyaWFudFNlbGVjdCA9IChjdXJUaXRsZSkgPT4ge1xuICAgIC8vY2xlYXIgc3dhdGNoZXNcbiAgICBxc2EoJy5qcy1zd2F0Y2gnKS5mb3JFYWNoKChzd2F0Y2gpID0+IHtcbiAgICAgIHJlbW92ZShzd2F0Y2gsICdhY3RpdmUnKVxuICAgICAgc3dhdGNoLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgZmFsc2UpXG4gICAgfSlcblxuICAgIC8vc2VsZWN0IG5ldyBzd2F0Y2hcbiAgICBsZXQgc2VsZWN0ZWRTd2F0Y2ggPSBxcyhgLmpzLXN3YXRjaFtkYXRhLXRpdGxlPVwiJHtjdXJUaXRsZX1cIl1gLCBub2RlKVxuICAgIGFkZChzZWxlY3RlZFN3YXRjaCwgJ2FjdGl2ZScpXG4gICAgc2VsZWN0ZWRTd2F0Y2guc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCB0cnVlKVxuXG4gICAgdmFyaWFudFRpdGxlLmlubmVySFRNTCA9IGN1clRpdGxlXG5cbiAgICBjdHguZW1pdCgndmFyaWFudDpjaGFuZ2UnKVxuICB9XG5cbiAgb24oc3dhdGNoLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChoYXMoZS50YXJnZXQsICdhY3RpdmUnKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGN1clRpdGxlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJylcblxuICAgIHZhcmlhbnRTZWxlY3QoY3VyVGl0bGUpXG4gICAgdXBkYXRlVmFyaWFudCgpXG4gIH0pXG5cbiAgLy91cGRhdGUgdmFyaWFudCBvbiBmaXJzdCBsb2FkXG4gIGlmIChvcHRpb25zLmxlbmd0aCA+IDEpIHVwZGF0ZVZhcmlhbnQoKVxuXG4gIGN0eC5vbigndmFyaWFudDp1cGRhdGUnLCAoKSA9PiB7XG4gICAgdXBkYXRlVmFyaWFudCgpXG4gIH0pXG5cbiAgLy9uYXYgYmFyIHNlbGVjdG9yXG4gIC8vIHFzYSgnLmpzLW5hdk9wdGlvbnNbZGF0YS1ncm91cF0nKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAvLyAgIGxldCBzd2F0Y2hUb2dnbGUgPSBxcygnLmpzLW1lbnVTd2F0Y2gnLCBncm91cClcblxuICAvLyAgIG9uKHN3YXRjaFRvZ2dsZSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgIGxldCBjdXJHcm91cCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1uYXZPcHRpb25zJylcblxuICAvLyAgICAgdG9nZ2xlKHFzKCcuanMtbmF2T3B0aW9uR3JvdXAnLCBjdXJHcm91cCksICdoaWRkZW4nKVxuICAvLyAgICAgdG9nZ2xlKHFzKCcuanMtY2hldnJvbk5hdicsIGN1ckdyb3VwKSwgJ3JvdGF0ZS0xODAnKVxuICAvLyAgIH0pXG4gIC8vIH0pXG5cbiAgLy8gcXNhKCcuanMtc3dhdGNoTmF2JykuZm9yRWFjaCgobmF2U3dhdGNoKSA9PiB7XG4gIC8vICAgb24obmF2U3dhdGNoLCAnY2xpY2snLCAoZSkgPT4ge1xuICAvLyAgICAgbGV0IGN1clRpdGxlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJylcbiAgLy8gICAgIGxldCBjb250YWluZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcuanMtbmF2T3B0aW9uc1tkYXRhLWdyb3VwXScpXG4gIC8vICAgICBsZXQgY3VyR3JvdXAgPSBjb250YWluZXIuZGF0YXNldD8uZ3JvdXBcblxuICAvLyAgICAgdG9nZ2xlKGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1uYXZPcHRpb25Hcm91cCcpLCAnaGlkZGVuJylcbiAgLy8gICAgIHRvZ2dsZShxcygnLmpzLWNoZXZyb25OYXYnLCBjb250YWluZXIpLCAncm90YXRlLTE4MCcpXG5cbiAgLy8gICAgIC8vaGlkZSBzZWxlY3RlZCBmcm9tIGxpc3RcbiAgLy8gICAgIHFzYSgnLmpzLXN3YXRjaE5hdicsIGNvbnRhaW5lcikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAvLyAgICAgICBpZiAoaXRlbS5kYXRhc2V0LnRpdGxlID09PSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlKSB7XG4gIC8vICAgICAgICAgYWRkKGl0ZW0sICdoaWRkZW4nKVxuICAvLyAgICAgICAgIHFzKCcuanMtc2VsZWN0ZWROYXZPcHRpb24nLCBjb250YWluZXIpLmlubmVySFRNTCA9IGl0ZW0uZGF0YXNldC50aXRsZVxuICAvLyAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIHJlbW92ZShpdGVtLCAnaGlkZGVuJylcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcblxuICAvLyAgICAgdmFyaWFudFNlbGVjdChjdXJUaXRsZSwgY3VyR3JvdXApXG4gIC8vICAgICB1cGRhdGVWYXJpYW50KClcbiAgLy8gICB9KVxuICAvLyB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IG9uLCBxcywgYWRkLCByZW1vdmUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJ2tsYXZpeW8tc3Vic2NyaWJlJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBmb3JtQ29udGVudCwgc3VjY2Vzcywgc3VibWl0IH0gPSBjaG9venkobm9kZSlcblxuICBvbihzdWJtaXQsICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgbGlzdElkID0gJ1d6RzcycydcbiAgICBsZXQgZW1haWwgPSBxcygnLmpzLWVtYWlsJywgbm9kZSkudmFsdWVcblxuICAgIHN1YnNjcmliZShsaXN0SWQsIGVtYWlsLCB7fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJlbW92ZShzdWNjZXNzLCAnaGlkZGVuJylcbiAgICAgIGFkZChmb3JtQ29udGVudCwgJ2hpZGRlbicpXG5cbiAgICAgIGlmIChxcygnLmpzLWZvcm1UaXRsZScpKSB7XG4gICAgICAgIGFkZChxcygnLmpzLWZvcm1UaXRsZScpLCAnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IGFkZCwgcmVtb3ZlLCBvbiwgcXMsIHFzYSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnZW1ibGEtY2Fyb3VzZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGNhcm91c2VsLCBuZXh0LCBwcmV2LCBjb3VudGVyLCBhY3RpdmVJbmRleCB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QgZW1ibGEgPSBFbWJsYUNhcm91c2VsKGNhcm91c2VsLCB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBza2lwU25hcHM6IGZhbHNlLFxuICAgIHRyaW1TbmFwczogdHJ1ZSxcbiAgICBjb250YWluU2Nyb2xsOiB0cnVlLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgfSlcblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG5cbiAgICAvLyBvbihuZXh0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICBlbWJsYS5zY3JvbGxOZXh0XG4gICAgLy8gfSlcbiAgfVxuXG4gIGlmIChjb3VudGVyKSB7XG4gICAgb24oY291bnRlciwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGVtYmxhLnNjcm9sbFRvKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgfSlcbiAgfVxuXG4gIGVtYmxhLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgIHJlbW92ZShjb3VudGVyLCAnaXMtYWN0aXZlJylcbiAgICAgIGFkZChcbiAgICAgICAgcXMoYC5qcy1jb3VudGVyW2RhdGEtaW5kZXg9XCIke2VtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpfVwiXWAsIG5vZGUpLFxuICAgICAgICAnaXMtYWN0aXZlJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCkge1xuICAgICAgYWN0aXZlSW5kZXguaW5uZXJIVE1MID0gZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCkgKyAxXG4gICAgfVxuICB9KVxuXG4gIC8vIHJldHVybiAoKSA9PiB7XG4gIC8vICAgaWYgKG5leHQpIHtcbiAgLy8gICAgICAgbmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAvLyAgICAgICBwcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG4gIC8vICAgfVxuICAvLyB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgLy8gT3B0aW9ucyBmb3IgdGhlIEludGVyc2VjdGlvbiBPYnNlcnZlclxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJvb3Q6IG51bGwsXG4gICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgdGhyZXNob2xkOiAwLCAvLyBBZGp1c3QgYXMgbmVlZGVkLCAwLjUgbWVhbnMgYXQgbGVhc3QgNTAlIG9mIHRoZSB2aWRlbyBtdXN0IGJlIGluIHZpZXdcbiAgfVxuXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gdGhlIHZpZGVvIGNvbWVzIGludG8gdmlld1xuICBmdW5jdGlvbiBoYW5kbGVJbnRlcnNlY3Rpb24oZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgLy8gTG9hZCB0aGUgdmlkZW9cbiAgICAgICAgbm9kZS5zcmMgPSBub2RlLmRhdGFzZXQudmlkZW9cbiAgICAgICAgbm9kZS5hdXRvcGxheSA9IHRydWVcbiAgICAgICAgbm9kZS5sb29wID0gdHJ1ZVxuXG4gICAgICAgIC8vIFVub2JzZXJ2ZSB0byBwcmV2ZW50IGZ1cnRoZXIgdW5uZWNlc3NhcnkgY2hlY2tzXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShub2RlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUGF1c2UgdGhlIHZpZGVvIHdoZW4gaXQgZ29lcyBvdXQgb2Ygdmlld1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJylcbiAgICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgICAgdmlkZW8ucGF1c2UoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgSW50ZXJzZWN0aW9uIE9ic2VydmVyIHdpdGggdGhlIGNhbGxiYWNrIGFuZCBvcHRpb25zXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZUludGVyc2VjdGlvbiwgb3B0aW9ucylcblxuICAvLyBPYnNlcnZlIHRoZSB2aWRlbyBwbGFjZWhvbGRlclxuICBvYnNlcnZlci5vYnNlcnZlKG5vZGUpXG59KVxuIiwiaW1wb3J0IG9wZXJhdG9yIGZyb20gJ29wZXJhdG9yJ1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcblxuLyoqXG4gKiBvcGVyYXRvciBpcyBhIHRpbnkgXCJQSkFYXCIgbGlicmFyeSwgcGxlYXNlIGhhdmUgYSBsb29rIGF0IHRoZSBkb2NzIGZvclxuICogbW9yZSBpbmZvXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXN0cmF0dG9uYmFpbGV5L29wZXJhdG9yXG4gKi9cbmNvbnN0IHJvdXRlciA9IG9wZXJhdG9yKCcjTWFpbkNvbnRlbnQnLCBbXG4gIC8qKlxuICAgKiBjcmVhdGVzIGEgcGFnZSB0cmFuc2l0aW9uXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzdHJhdHRvbmJhaWxleS9vcGVyYXRvciN0cmFuc2l0aW9uLWFuaW1hdGlvblxuICAgKi9cbiAgKCkgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcblxuICAgICAgY29uc3QgZW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJlcygpXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcbiAgICAgIH1cblxuICAgICAgdGwudG8oJ21haW4nLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIG9uQ29tcGxldGU6IGVudGVyIH0pLnRvKFxuICAgICAgICAnbWFpbicsXG4gICAgICAgIHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9KSxcbiAgLy8ge1xuICAvLyAgIHBhdGg6ICcvYWNjb3VudC8qJyxcbiAgLy8gICBpZ25vcmU6IHRydWUsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBwYXRoOiAnL2FjY291bnQvJyxcbiAgLy8gICBpZ25vcmU6IHRydWUsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBwYXRoOiAnL2Jsb2dzLyonLFxuICAvLyAgIGlnbm9yZTogdHJ1ZSxcbiAgLy8gfSxcbiAge1xuICAgIHBhdGg6ICcqJyxcbiAgICBpZ25vcmU6IHRydWUsXG4gIH0sXG5dKVxuXG5yb3V0ZXIub24oJ2FmdGVyJywgKHsgcGF0aG5hbWUgfSkgPT4ge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwYXRobmFtZSlcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBhZ2V0aXRsZV0nKSAhPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcGFnZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGFnZXRpdGxlXScpLmRhdGFzZXQucGFnZXRpdGxlXG4gICAgbGV0IHNob3BUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNob3B0aXRsZV0nKS5kYXRhc2V0LnNob3B0aXRsZVxuICAgIGRvY3VtZW50LnRpdGxlID0gYCR7cGFnZVRpdGxlfWBcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC50aXRsZSA9ICdQcm9taXNlZCBHcm91bmRzJ1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcbiIsImltcG9ydCBmZXRjaCBmcm9tICd1bmZldGNoJ1xuaW1wb3J0IGFwcCBmcm9tICdiYXNlL3NjcmlwdHMvYXBwLmpzJ1xuaW1wb3J0IHsgcXMgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFZhcmlhbnQodmFyaWFudCwgcXVhbnRpdHksIHNlbGxpbmdfcGxhbikge1xuICBjb25zdCBudW1BdmFpbGFibGUgPVxuICAgIHZhcmlhbnQuaW52ZW50b3J5X3BvbGljeSA9PT0gJ2RlbnknICYmXG4gICAgdmFyaWFudC5pbnZlbnRvcnlfbWFuYWdlbWVudCA9PT0gJ3Nob3BpZnknXG4gICAgICA/IHZhcmlhbnQuaW52ZW50b3J5X3F1YW50aXR5XG4gICAgICA6IG51bGwgLy8gbnVsbCBtZWFucyB0aGV5IGNhbiBhZGQgYXMgbWFueSBhcyB0aGV5IHdhbnRcblxuICByZXR1cm4gZmV0Y2hDYXJ0KCkudGhlbigoeyBpdGVtcyB9KSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHZhcmlhbnQuaWQpWzBdIHx8IHt9XG4gICAgY29uc3QgbnVtUmVxdWVzdGVkID0gKGV4aXN0aW5nLnF1YW50aXR5IHx8IDApICsgcXVhbnRpdHlcblxuICAgIGlmIChudW1BdmFpbGFibGUgIT09IG51bGwgJiYgbnVtUmVxdWVzdGVkID4gbnVtQXZhaWxhYmxlKSB7XG4gICAgICBjb25zdCBlcnIgPSBgVGhlcmUgYXJlIG9ubHkgJHtudW1BdmFpbGFibGV9IG9mIHRoYXQgcHJvZHVjdCBhdmFpbGFibGUsIHJlcXVlc3RlZCAke251bVJlcXVlc3RlZH0uYFxuICAgICAgYXBwLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFkZEl0ZW1CeUlkKHZhcmlhbnQuaWQsIHF1YW50aXR5LCBzZWxsaW5nX3BsYW4pXG4gICAgfVxuICB9KVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gdXBkYXRlQWRkb24oaWQsIHF1YW50aXR5KSB7XG4vLyAgIHJldHVybiBmZXRjaENhcnQoKS50aGVuKCh7IGl0ZW1zIH0pID0+IHtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBpZiAoaXRlbXNbaV0udmFyaWFudF9pZCA9PT0gcGFyc2VJbnQoaWQpKSB7XG4vLyAgICAgICAgIHJldHVybiBjaGFuZ2VBZGRvbihpICsgMSwgcXVhbnRpdHkpIC8vIHNob3BpZnkgY2FydCBpcyBhIDEtYmFzZWQgaW5kZXhcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0pXG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCBxdWFudGl0eSwgbGluaykge1xuICByZXR1cm4gZmV0Y2hDYXJ0KCkudGhlbigoeyBpdGVtcyB9KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy9jaGVjayBpZiBpdGVtIGlzIHJlY3VycmluZ1xuICAgICAgaWYgKHNlbGxpbmdfcGxhbiAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpdGVtc1tpXS5zZWxsaW5nX3BsYW5fYWxsb2NhdGlvbikge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGl0ZW1zW2ldLnZhcmlhbnRfaWQgPT09IHBhcnNlSW50KGlkKSAmJlxuICAgICAgICAgICAgaXRlbXNbaV0uc2VsbGluZ19wbGFuX2FsbG9jYXRpb24uc2VsbGluZ19wbGFuLmlkID09PVxuICAgICAgICAgICAgICBwYXJzZUludChzZWxsaW5nX3BsYW4pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlQWRkb24oaSArIDEsIHF1YW50aXR5LCBsaW5rKSAvLyBzaG9waWZ5IGNhcnQgaXMgYSAxLWJhc2VkIGluZGV4XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXRlbXNbaV0udmFyaWFudF9pZCA9PT0gcGFyc2VJbnQoaWQpKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZUFkZG9uKGkgKyAxLCBxdWFudGl0eSwgbGluaykgLy8gc2hvcGlmeSBjYXJ0IGlzIGEgMS1iYXNlZCBpbmRleFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWRkb24oaWQpIHtcbi8vICAgcmV0dXJuIHVwZGF0ZUFkZG9uKGlkLCAwKVxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWRkb24oaWQsIHNlbGxpbmdfcGxhbiwgbGluaykge1xuICByZXR1cm4gdXBkYXRlQWRkb24oaWQsIHNlbGxpbmdfcGxhbiwgMCwgbGluaylcbn1cblxuZnVuY3Rpb24gY2hhbmdlQWRkb24obGluZSwgcXVhbnRpdHksIGxpbmspIHtcbiAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRpbmcnKVxuXG4gIHJldHVybiBmZXRjaCgnL2NhcnQvY2hhbmdlLmpzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGluZSwgcXVhbnRpdHkgfSksXG4gIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoY2FydCkgPT4ge1xuICAgICAgYXBwLmh5ZHJhdGUoeyBjYXJ0OiBjYXJ0IH0pXG4gICAgICBhcHAuZW1pdCgnY2FydDp1cGRhdGVkJywgeyBjYXJ0OiBjYXJ0IH0pXG5cbiAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGlua1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcnRcbiAgICB9KVxufVxuXG4vKipcbiAqIFdhcm5pbmc6IHRoaXMgZG9lcyBub3QgY2hlY2sgYXZhaWxhYmxlIHByb2R1Y3RzIGZpcnN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtQnlJZChpZCwgcXVhbnRpdHksIHNlbGxpbmdfcGxhbikge1xuICBhcHAuZW1pdCgnY2FydDp1cGRhdGluZycpXG5cbiAgcmV0dXJuIGZldGNoKCcvY2FydC9hZGQuanMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCwgcXVhbnRpdHksIHNlbGxpbmdfcGxhbiB9KSxcbiAgfSlcbiAgICAudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBmZXRjaENhcnQoKS50aGVuKChjYXJ0KSA9PiB7XG4gICAgICAgIGxldCBwaXggPSBxcygnLmNvbGxlY3Rpb24tcGl4JylcbiAgICAgICAgYXBwLmh5ZHJhdGUoeyBjYXJ0OiBjYXJ0IH0pXG4gICAgICAgIGFwcC5lbWl0KCdjYXJ0OnVwZGF0ZWQnKVxuICAgICAgICBpZiAocGl4ID09IHVuZGVmaW5lZCB8fCBhcHAuZ2V0U3RhdGUoKS5jYXJ0Lml0ZW1fY291bnQgPj0gNikge1xuICAgICAgICAgIGFwcC5lbWl0KCdjYXJ0OnRvZ2dsZScsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY2FydE9wZW46ICFzdGF0ZS5jYXJ0T3BlbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIGFwcC5lbWl0KCd1cGRhdGVkJywgeyBpdGVtLCBjYXJ0IH0pXG4gICAgICAgIHJldHVybiB7IGl0ZW0sIGNhcnQgfVxuICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDYXJ0KCkge1xuICByZXR1cm4gZmV0Y2goJy9jYXJ0LmpzJywge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxufVxuIiwiLyoqXG4gKiBDdXJyZW5jeSBIZWxwZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQSBjb2xsZWN0aW9uIG9mIHVzZWZ1bCBmdW5jdGlvbnMgdGhhdCBoZWxwIHdpdGggY3VycmVuY3kgZm9ybWF0dGluZ1xuICpcbiAqIEN1cnJlbnQgY29udGVudHNcbiAqIC0gZm9ybWF0TW9uZXkgLSBUYWtlcyBhbiBhbW91bnQgaW4gY2VudHMgYW5kIHJldHVybnMgaXQgYXMgYSBmb3JtYXR0ZWQgZG9sbGFyIHZhbHVlLlxuICpcbiAqL1xuXG4vKipcbiAqIEZvcm1hdCBtb25leSB2YWx1ZXMgYmFzZWQgb24geW91ciBzaG9wIGN1cnJlbmN5IHNldHRpbmdzXG4gKiBAcGFyYW0gIHtOdW1iZXJ8c3RyaW5nfSBjZW50cyAtIHZhbHVlIGluIGNlbnRzIG9yIGRvbGxhciBhbW91bnQgZS5nLiAzMDAgY2VudHNcbiAqIG9yIDMuMDAgZG9sbGFyc1xuICogQHBhcmFtICB7U3RyaW5nfSBmb3JtYXQgLSBzaG9wIG1vbmV5X2Zvcm1hdCBzZXR0aW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHZhbHVlIC0gZm9ybWF0dGVkIHZhbHVlXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbmV5KGNlbnRzLCBmb3JtYXQgPSAne3thbW91bnR9fScpIHtcbiAgaWYgKHR5cGVvZiBjZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICBjZW50cyA9IGNlbnRzLnJlcGxhY2UoJy4nLCAnJylcbiAgfVxuXG4gIGxldCB2YWx1ZSA9ICcnXG4gIGNvbnN0IHBsYWNlaG9sZGVyUmVnZXggPSAvXFx7XFx7XFxzKihcXHcrKVxccypcXH1cXH0vXG5cbiAgZnVuY3Rpb24gZm9ybWF0V2l0aERlbGltaXRlcnMobnVtYmVyLCBwcmVjaXNpb24sIHRob3VzYW5kcywgZGVjaW1hbCkge1xuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCAyXG4gICAgdGhvdXNhbmRzID0gdGhvdXNhbmRzIHx8ICcsJ1xuICAgIGRlY2ltYWwgPSBkZWNpbWFsIHx8ICcuJ1xuXG4gICAgaWYgKGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgbnVtYmVyID0gKG51bWJlciAvIDEwMC4wKS50b0ZpeGVkKHByZWNpc2lvbilcblxuICAgIGNvbnN0IHBhcnRzID0gbnVtYmVyLnNwbGl0KCcuJylcbiAgICBjb25zdCBkb2xsYXJzQW1vdW50ID0gcGFydHNbMF0ucmVwbGFjZShcbiAgICAgIC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csXG4gICAgICAnJDEnICsgdGhvdXNhbmRzXG4gICAgKVxuICAgIGNvbnN0IGNlbnRzQW1vdW50ID0gcGFydHNbMV0gPyBkZWNpbWFsICsgcGFydHNbMV0gOiAnJ1xuXG4gICAgaWYgKGNlbnRzQW1vdW50ID4gMCkge1xuICAgICAgcmV0dXJuIGRvbGxhcnNBbW91bnQgKyBjZW50c0Ftb3VudFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZG9sbGFyc0Ftb3VudFxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAoZm9ybWF0Lm1hdGNoKHBsYWNlaG9sZGVyUmVnZXgpWzFdKSB7XG4gICAgY2FzZSAnYW1vdW50JzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFscyc6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhbW91bnRfd2l0aF9zcGFjZV9zZXBhcmF0b3InOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMiwgJyAnLCAnLicpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFsc193aXRoX2NvbW1hX3NlcGFyYXRvcic6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwLCAnLCcsICcuJylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYW1vdW50X25vX2RlY2ltYWxzX3dpdGhfc3BhY2Vfc2VwYXJhdG9yJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDAsICcgJylcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UocGxhY2Vob2xkZXJSZWdleCwgdmFsdWUpXG59XG4iLCIvKipcbiAqIEltYWdlIEhlbHBlciBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIHRoYXQgaGVscCB3aXRoIGJhc2ljIGltYWdlIG9wZXJhdGlvbnMuXG4gKlxuICovXG5cbi8qKlxuICogUHJlbG9hZHMgYW4gaW1hZ2UgaW4gbWVtb3J5IGFuZCB1c2VzIHRoZSBicm93c2VycyBjYWNoZSB0byBzdG9yZSBpdCB1bnRpbCBuZWVkZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaW1hZ2VzIC0gQSBsaXN0IG9mIGltYWdlIHVybHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gQSBzaG9waWZ5IGltYWdlIHNpemUgYXR0cmlidXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKGltYWdlcywgc2l6ZSkge1xuICBpZiAodHlwZW9mIGltYWdlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBpbWFnZXMgPSBbaW1hZ2VzXVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW1hZ2UgPSBpbWFnZXNbaV1cbiAgICBsb2FkSW1hZ2UoZ2V0U2l6ZWRJbWFnZVVybChpbWFnZSwgc2l6ZSkpXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhbmQgY2FjaGVzIGFuIGltYWdlIGluIHRoZSBicm93c2VycyBjYWNoZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gQW4gaW1hZ2UgdXJsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2UocGF0aCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBuZXcgSW1hZ2UoKS5zcmMgPSBwYXRoXG4gIC8qIGVzbGludC1lbmFibGUgKi9cbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBTaG9waWZ5IGltYWdlIGF0dHJpYnV0ZSBzaXplXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNyY1xuICogQHJldHVybnMge251bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZVNpemUoc3JjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIHZhciBtYXRjaCA9IHNyYy5tYXRjaChcbiAgICAvLitfKCg/OnBpY298aWNvbnx0aHVtYnxzbWFsbHxjb21wYWN0fG1lZGl1bXxsYXJnZXxncmFuZGUpfFxcZHsxLDR9eFxcZHswLDR9fHhcXGR7MSw0fSlbX1xcLkBdL1xuICApXG4gIC8qIGVzbGluZy1lbmFibGUgKi9cblxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2hbMV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIFNob3BpZnkgc2l6ZSBhdHRyaWJ1dGUgdG8gYSBVUkxcbiAqXG4gKiBAcGFyYW0gc3JjXG4gKiBAcGFyYW0gc2l6ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplZEltYWdlVXJsKHNyYywgc2l6ZSkge1xuICBpZiAoc2l6ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzcmNcbiAgfVxuXG4gIGlmIChzaXplID09PSAnbWFzdGVyJykge1xuICAgIHJldHVybiByZW1vdmVQcm90b2NvbChzcmMpXG4gIH1cblxuICB2YXIgbWF0Y2ggPSBzcmMubWF0Y2goL1xcLihqcGd8anBlZ3xnaWZ8cG5nfGJtcHxiaXRtYXB8dGlmZnx0aWYpKFxcP3Y9XFxkKyk/JC9pKVxuXG4gIGlmIChtYXRjaCkge1xuICAgIHZhciBwcmVmaXggPSBzcmMuc3BsaXQobWF0Y2hbMF0pXG4gICAgdmFyIHN1ZmZpeCA9IG1hdGNoWzBdXG5cbiAgICByZXR1cm4gcmVtb3ZlUHJvdG9jb2wocHJlZml4WzBdICsgJ18nICsgc2l6ZSArIHN1ZmZpeClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm90b2NvbChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL2h0dHAocyk/Oi8sICcnKVxufVxuIiwiaW1wb3J0IHsgcXMsIHJlbW92ZSwgYWRkIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VTZXR1cCgpIHtcbiAgbGV0IGFubm91bmNlQmFyID0gcXMoJy5qcy1hbm5vdW5jZUJhcicpXG5cbiAgaWYgKGFubm91bmNlQmFyKSB7XG4gICAgYWRkKGFubm91bmNlQmFyLCAnaGlkZGVuJylcbiAgfVxuXG4gIGlmIChxcyhgLmpzLWFubm91bmNlQmFyW2RhdGEtcGFnZT1cIiR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfVwiXWApKSB7XG4gICAgcmVtb3ZlKFxuICAgICAgcXMoYC5qcy1hbm5vdW5jZUJhcltkYXRhLXBhZ2U9XCIke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1cIl1gKSxcbiAgICAgICdoaWRkZW4nXG4gICAgKVxuICB9IGVsc2UgaWYgKHFzKGAuanMtYW5ub3VuY2VCYXI6bm90KFtkYXRhLXBhZ2VdKWApKSB7XG4gICAgcmVtb3ZlKHFzKGAuanMtYW5ub3VuY2VCYXI6bm90KFtkYXRhLXBhZ2VdKWApLCAnaGlkZGVuJylcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYmFzZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd29ya2Zsb3dcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd29ya2Zsb3dcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9iYXNlL3NjcmlwdHMvYmFzZS5qc1wiKTsgfSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYmFzZS9zdHlsZXMvYmFzZS5zY3NzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJwaWNvYXBwIiwiYWNjb3VudExvZ2luIiwiYWNjb3VudEFkZHJlc3NlcyIsImxhenkiLCJoZWFkZXIiLCJjYXJ0RHJhd2VyIiwiY2FydERyYXdlckl0ZW0iLCJwcm9kdWN0Q2Fyb3VzZWwiLCJwcm9kdWN0IiwicHJvZHVjdENvdW50ZXIiLCJwcm9kdWN0VmFyaWFudCIsInByb2R1Y3RPcHRpb25zIiwiY29sbGVjdGlvbiIsImZhcXMiLCJjaGVja291dCIsIm5ld3NsZXR0ZXIiLCJjYXJvdXNlbCIsImZvb3RlciIsImNvbnRhY3QiLCJtYXJxdWVlIiwiYmxvZ0ZpbHRlciIsInZpZGVvIiwic2lnbnVwIiwiYmFja2luc3RvY2siLCJwcm9kdWN0U3Vic2NyaXB0aW9ucyIsImFib3V0IiwiaGVybyIsImJhbm5lciIsInNvY2lhbCIsImNhcmRzIiwiZmFxc0ltYWdlIiwic3RhdGUiLCJjYXJ0T3BlbiIsImNvbXBvbmVudHMiLCJiaW5kIiwidXBkYXRlIiwiYXBwIiwicm91dGVyIiwiZmV0Y2hDYXJ0IiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJxcyIsInJlbW92ZSIsInBhZ2VTZXR1cCIsInZoIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVnaXN0ZXJQbHVnaW4iLCJvbiIsInRpdGxlIiwicGF0aG5hbWUiLCJ1bm1vdW50IiwibW91bnQiLCJlbWl0IiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJjYXJ0IiwiaHlkcmF0ZSIsImNvbXBvbmVudCIsImNob296eSIsImFkZCIsInFzYSIsInRvZ2dsZSIsIlNjcm9sbFRvUGx1Z2luIiwibm9kZSIsImN0eCIsImFuY2hvcnMiLCJmb3JFYWNoIiwic2VjdGlvbiIsImluZGV4IiwiYW5jaG9yIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJjbGFzc0xpc3QiLCJhcHBlbmRDaGlsZCIsInRvIiwiZHVyYXRpb24iLCJzY3JvbGxUbyIsInkiLCJvZmZzZXRZIiwiZWFzZSIsInNldEFjdGl2ZSIsInRhcmdldCIsInV0aWxzIiwidG9BcnJheSIsImNyZWF0ZSIsInRyaWdnZXIiLCJzdGFydCIsIm9uRW50ZXIiLCJzZWxmIiwib25MZWF2ZUJhY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW1nIiwib25sb2FkIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJ0cmlnZ2VycyIsImdldEFsbCIsImtpbGwiLCJhZGRXcmFwIiwidG9nZ2xlQWRkIiwidG9nZ2xlRWRpdCIsImVkaXRXcmFwIiwidW5kZWZpbmVkIiwibG9naW4iLCJxdWVyeVNlbGVjdG9yIiwicmVjb3ZlciIsInJlY292ZXJMaW5rIiwiY2FuY2VsUmVjb3ZlckxpbmsiLCJyZWNvdmVySXNUYXJnZXQiLCJsb2NhdGlvbiIsImhhc2giLCJtYXRjaCIsInN1Y2Nlc3NNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGlzcGxheSIsImVtYWlsIiwiYmlzIiwiYmlzY29udGVudCIsInN1Y2Nlc3MiLCJiaXN3cmFwIiwib3BlbmJpcyIsImNsb3NlYmlzIiwiZm9ybWJpcyIsImN1cnJlbnRWYXJpYW50IiwidmFyaWFudCIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJhIiwidmFsdWUiLCJwbGF0Zm9ybSIsInN0b3JlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzIiwiYWxsSW1hZ2VzIiwiSlNPTiIsInBhcnNlIiwiYWxsQmxvY2tzIiwidGhlbWVJbWFnZXMiLCJjdXJyZW50VGhlbWUiLCJib2R5IiwidGhlbWUiLCJwdXNoIiwic3JjIiwiaW1hZ2UiLCJmaWx0ZXJUb2dnbGUiLCJjbGVhckZpbHRlciIsImhyZWYiLCJpbmNsdWRlcyIsInRhZyIsInNwbGl0IiwidGFyZ2V0VGFnIiwiZWwiLCJFbWJsYUNhcm91c2VsIiwibmV4dCIsInByZXYiLCJjb3VudGVyIiwiYWN0aXZlSW5kZXgiLCJlbWJsYSIsImxvb3AiLCJza2lwU25hcHMiLCJ0cmltU25hcHMiLCJjb250YWluU2Nyb2xsIiwiYWxpZ24iLCJzY3JvbGxOZXh0Iiwic2Nyb2xsUHJldiIsInNlbGVjdGVkU2Nyb2xsU25hcCIsInNwZWVkIiwiZ2V0U2l6ZWRJbWFnZVVybCIsImltYWdlU2l6ZSIsImZvcm1hdE1vbmV5IiwiUG93ZXI0IiwidGwiLCJ0aW1lbGluZSIsIlgiLCJjcmVhdGVJdGVtIiwiaWQiLCJ2YXJpYW50X2lkIiwicHJvZHVjdF90aXRsZSIsInByaWNlIiwibGluZV9wcmljZSIsIm9yaWdpbmFsX3ByaWNlIiwib3JpZ2luYWxfbGluZV9wcmljZSIsInZhcmlhbnRfdGl0bGUiLCJxdWFudGl0eSIsIml0ZW0iLCJzZWxsaW5nX3BsYW5fYWxsb2NhdGlvbiIsInNlbGxpbmdfcGxhbiIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJsZW5ndGgiLCJyZWR1Y2UiLCJtYXJrdXAiLCJvdmVybGF5IiwiY2xvc2VCdXR0b24iLCJzdWJ0b3RhbCIsIml0ZW1zUm9vdCIsImxvYWRpbmciLCJyZW5kZXIiLCJ0b3RhbF9wcmljZSIsIm9wZW4iLCJ4IiwiZWFzZU91dCIsIm9uQ29tcGxldGUiLCJjbG9zZSIsImdldFN0YXRlIiwiY2hlY2tDYXJ0IiwicmVtb3ZlQWRkb24iLCJ1cGRhdGVBZGRvbiIsInJlbW92ZXJzIiwiZGVjcmVhc2UiLCJpbmNyZWFzZSIsImN1cnJlbnRRdHkiLCJnZXRBdHRyaWJ1dGUiLCJyZW0iLCJsaW5rIiwicGFyc2VJbnQiLCJzdWJtaXQiLCJvZmZFbWFpbCIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsImZhcSIsImlubmVyIiwicGx1cyIsIm9mZnNldEhlaWdodCIsImFwcGVuZCIsInNlY3Rpb25Db250YWluZXIiLCJ0aGVtZUltYWdlIiwiZmluZCIsIkV4cG8iLCJjYXJ0VG9nZ2xlIiwiYW5ub3VuY2VCYXIiLCJhbm5vdW5jZUNsb3NlIiwibWVudSIsIm5hdiIsIm5hdlRvZ2dsZSIsImhlYWRlckNsb3NlIiwiY2xvc2Vab25lIiwiY2FydENvdW50Iiwib2Zmc2V0V2lkdGgiLCJjb3VudCIsIml0ZW1fY291bnQiLCJmcm9tVG8iLCJtZW51T3BlbiIsImluZGV4T2YiLCJwcm9kdWN0cyIsImljb24iLCJhbGxQcm9kdWN0cyIsInVwZGF0ZVRoZW1lIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwiYnRuIiwibHFpcCIsImRlY29kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9mZiIsInNyY3NldCIsImhhcyIsImN1cnJlbnRYIiwidGFyZ2V0WCIsInNldEludGVydmFsIiwiYW5pbWF0aW9uTG9vcCIsInNjcm9sbFdpZHRoIiwidHJhbnNmb3JtIiwic3Vic2NyaWJlIiwiZm9ybUNvbnRlbnQiLCJlcnJvciIsImxpc3RJZCIsImFkZFZhcmlhbnQiLCJzdWJEZXRhaWxUb2dnbGUiLCJzdWJEZXRhaWwiLCJqc29uIiwiYWRkQnRuIiwiYWRkVGV4dCIsInByZW9yZGVyIiwic2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudCIsInZhcmlhbnRzIiwiZmlsdGVyIiwidiIsImFkZG9uSnNvbiIsImFkZG9uU2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudCIsImFkZG9uUHJvZHVjdCIsImFkZG9uVmFyaWFudCIsInNlbGVjdGVkVmFyaWFudCIsInByb2R1Y3RJbWFnZXMiLCJ2YXJpYW50VGl0bGUiLCJidG5zIiwidGh1bWIiLCJpbml0RW1ibGEiLCJ2YXJpYW50SW1hZ2VzIiwibWFwIiwiYWx0IiwidG9Mb3dlckNhc2UiLCJqb2luIiwiZGVzdHJveSIsIm1pbiIsIm1heCIsInNldCIsImkiLCJNYXRoIiwib3B0aW9uU3ViIiwib3B0aW9uT25lIiwib3B0aW9uV3JhcCIsImFkZFByaWNlIiwiYWN0aXZlRnJlcXVlbmN5IiwiY29udGVudCIsImNvbnRlbnRXcmFwIiwidG9nZ2xlRnJlcXVlbmN5IiwiYXJyb3ciLCJmcmVxdWVuY3lPcHRpb24iLCJzdWJPcHRpb24iLCJmcmVxdWVuY3lXcmFwIiwidG9nZ2xlT3B0aW9ucyIsImNvbnRlbnRIZWlnaHQiLCJtYXhIZWlnaHQiLCJvcHQiLCJjdXJPcHRpb24iLCJvcHRpb24iLCJzd2F0Y2giLCJvcHRpb25Hcm91cHMiLCJzZWxlY3RlZFN3YXRjaCIsIm9wdGlvbnMiLCJ1cGRhdGVWYXJpYW50IiwibmV3VmFyaWFudCIsInNldEF0dHJpYnV0ZSIsImludmVudG9yeSIsInZhcmlhbnRTZWxlY3QiLCJjdXJUaXRsZSIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiaGFuZGxlSW50ZXJzZWN0aW9uIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImF1dG9wbGF5IiwidW5vYnNlcnZlIiwicGF1c2UiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJvcGVyYXRvciIsInJlcyIsImVudGVyIiwic2Nyb2xsVG9wIiwib3BhY2l0eSIsInBhdGgiLCJpZ25vcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicGFnZVRpdGxlIiwicGFnZXRpdGxlIiwic2hvcFRpdGxlIiwic2hvcHRpdGxlIiwiZmV0Y2giLCJudW1BdmFpbGFibGUiLCJpbnZlbnRvcnlfcG9saWN5IiwiaW52ZW50b3J5X21hbmFnZW1lbnQiLCJpbnZlbnRvcnlfcXVhbnRpdHkiLCJleGlzdGluZyIsIm51bVJlcXVlc3RlZCIsImVyciIsIkVycm9yIiwiYWRkSXRlbUJ5SWQiLCJjaGFuZ2VBZGRvbiIsImxpbmUiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJzdHJpbmdpZnkiLCJyIiwicGl4IiwiY2VudHMiLCJmb3JtYXQiLCJyZXBsYWNlIiwicGxhY2Vob2xkZXJSZWdleCIsImZvcm1hdFdpdGhEZWxpbWl0ZXJzIiwibnVtYmVyIiwicHJlY2lzaW9uIiwidGhvdXNhbmRzIiwiZGVjaW1hbCIsImlzTmFOIiwidG9GaXhlZCIsInBhcnRzIiwiZG9sbGFyc0Ftb3VudCIsImNlbnRzQW1vdW50IiwicHJlbG9hZCIsInNpemUiLCJsb2FkSW1hZ2UiLCJJbWFnZSIsInJlbW92ZVByb3RvY29sIiwicHJlZml4Iiwic3VmZml4Il0sInNvdXJjZVJvb3QiOiIifQ==