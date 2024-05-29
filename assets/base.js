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
/* harmony import */ var base_scripts_components_steps_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! base/scripts/components/steps.js */ "./src/base/scripts/components/steps.js");
































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
  faqsImage: base_scripts_components_faqsImage_js__WEBPACK_IMPORTED_MODULE_30__["default"],
  steps: base_scripts_components_steps_js__WEBPACK_IMPORTED_MODULE_31__["default"]
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
  return "\n<div class='cart-drawer__item' data-component='cartDrawerItem' data-id=".concat(id, " ").concat(item.selling_plan_allocation ? "data-planid='".concat(item.selling_plan_allocation.selling_plan.id, "'") : "", ">\n  <div class='relative w-full border-b border-solid p-15 m:p-20'>\n    <div class=\"flex justify-between w-full\">\n      <div class=\"flex w-full\">\n        <a href='").concat(url, "' class=\"cart-image\" aria-label=\"view ").concat(title, "\">\n          <img class=\"w-full h-full object-cover\" src='").concat(image, "' alt=\"product thumbnail\"/>\n        </a>\n        <div class=\"pl-10 flex items-start flex-col justify-between font-bold flex-grow\">\n          <div class=\"w-full flex-grow\">\n            <div class=\"w-full flex justify-between\">\n              <a href='").concat(url, "' class='title-cart uppercase'>").concat(title, "</a>\n              <div class='cart-drawer__item--price flex-shrink-0 text-20'>\n                ").concat(original_price > price ? "<span class=\"js-price line-through\">$".concat((0,base_scripts_utils_currency_js__WEBPACK_IMPORTED_MODULE_2__.formatMoney)(original_price), "</span>\n                <span class=\"js-discount ml-5\">$").concat((0,base_scripts_utils_currency_js__WEBPACK_IMPORTED_MODULE_2__.formatMoney)(price), "</span>") : "<span class=\"js-price\">$".concat((0,base_scripts_utils_currency_js__WEBPACK_IMPORTED_MODULE_2__.formatMoney)(price), "</span>"), "\n              </div>\n            </div>\n            ").concat(variant_title ? "<div class='item-variant__title cart-item--detail'>".concat(variant_title, "</div>") : "", "\n          </div>\n          <div class=\"w-full flex justify-between items-end\">\n            <div class='cart-item__qty flex justify-between px-10 flex-shrink-0 items-center leading-100 text-20 py-5 border border-solid h-25'>\n              <div class='cart-quantity btn-quantity js-remove-single cursor-pointer'><span class=\"block\">&ndash;</span></div>\n              <div class='js-single-quantity mx-5'>").concat(quantity, "</div>\n              <div class='cart-quantity btn-quantity js-add-single cursor-pointer'><span class=\"block\">+</span></div>\n            </div>\n            <button class='button--reset js-remove-item text-right text-14 cart-item__remove lh100' aria-label=\"remove item\"><span class=\"block underline\">REMOVE</span></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
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
  node.style.setProperty('--drawerHeight', "".concat(inner.offsetHeight, "px")); //jank

  setTimeout(function () {
    node.style.setProperty('--drawerHeight', "".concat(inner.offsetHeight, "px"));
  }, 500);
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', function () {
    node.style.setProperty('--drawerHeight', "".concat(inner.offsetHeight, "px"));
  });
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

  var initHeader = function initHeader() {
    if (window.location.pathname == '/') {
      if (window.pageYOffset > 50) {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(document.body, 'logo');
      } else {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(document.body, 'logo');
      }
    }
  };

  initHeader();
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'scroll', function () {
    if (window.location.pathname == '/') {
      if (window.pageYOffset > 50) {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(document.body, 'logo');
      } else {
        (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(document.body, 'logo');
      }
    }
  });
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

  if (window.location.pathname == '/') {
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

  var currentX;
  var targetX;
  var direction = node.dataset.direction;

  if (direction == "ltr") {
    currentX = -primary.scrollWidth;
    window.setInterval(animationLoopLTR, 15);

    function animationLoopLTR() {
      targetX = currentX >= 0 ? -primary.scrollWidth : currentX + 1;
      node.style.transform = "translateX(".concat(targetX, "px) translateZ(0px)");
      currentX = targetX;
    }
  } else {
    currentX = 0;
    window.setInterval(animationLoopRTL, 15);

    function animationLoopRTL() {
      targetX = currentX > primary.scrollWidth ? 0 : currentX + 1;
      node.style.transform = "translateX(-".concat(targetX, "px) translateZ(0px)");
      currentX = targetX;
    }
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
  var addBtn = (0,martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.btn-add', node);
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

/***/ "./src/base/scripts/components/steps.js":
/*!**********************************************!*\
  !*** ./src/base/scripts/components/steps.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choozy */ "./node_modules/choozy/dist/choozy.mjs");
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
    align: "start"
  });
  embla.on("select", function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBOztXQUVBOztXQUVBOztXQUVBLDhDQUE4Qzs7V0FFOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxtQ0FBbUM7V0FDcEU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQSwyREFBMkQsMkRBQTJEO1VBQ3RILHFGQUFxRiw0REFBNEQ7VUFDakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9iYXNlLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Fib3V0LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2FjY291bnRBZGRyZXNzZXMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudExvZ2luLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2JhY2tpbnN0b2NrLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9ibG9nRmlsdGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NhcmRzLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NhcnREcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FydERyYXdlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2ZhcXMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZmFxc0ltYWdlLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvaGVyby5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL21hcnF1ZWUuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0Q291bnRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0U3Vic2NyaXB0aW9ucy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0VmFyaWFudC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvc29jaWFsLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3N0ZXBzLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3ZpZGVvLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3V0aWxzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3V0aWxzL2N1cnJlbmN5LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy91dGlscy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3V0aWxzL3BhZ2VTZXR1cC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3N0eWxlcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwaWNvYXBwIH0gZnJvbSAncGljb2FwcCdcblxuaW1wb3J0IGFjY291bnRMb2dpbiBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvdW50TG9naW4uanMnXG5pbXBvcnQgYWNjb3VudEFkZHJlc3NlcyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvdW50QWRkcmVzc2VzLmpzJ1xuaW1wb3J0IGxhenkgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eS5qcydcbmltcG9ydCBoZWFkZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvaGVhZGVyLmpzJ1xuaW1wb3J0IGNhcnREcmF3ZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FydERyYXdlci5qcydcbmltcG9ydCBjYXJ0RHJhd2VySXRlbSBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jYXJ0RHJhd2VySXRlbS5qcydcbmltcG9ydCBwcm9kdWN0Q2Fyb3VzZWwgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdENhcm91c2VsLmpzJ1xuaW1wb3J0IHByb2R1Y3QgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdC5qcydcbmltcG9ydCBwcm9kdWN0Q291bnRlciBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0Q291bnRlci5qcydcbmltcG9ydCBwcm9kdWN0VmFyaWFudCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0VmFyaWFudC5qcydcbmltcG9ydCBwcm9kdWN0T3B0aW9ucyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0T3B0aW9ucy5qcydcbmltcG9ydCBjb2xsZWN0aW9uIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NvbGxlY3Rpb24uanMnXG5pbXBvcnQgZmFxcyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9mYXFzLmpzJ1xuaW1wb3J0IGNoZWNrb3V0IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NoZWNrb3V0LmpzJ1xuaW1wb3J0IG5ld3NsZXR0ZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvbmV3c2xldHRlci5qcydcbmltcG9ydCBjYXJvdXNlbCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jYXJvdXNlbC5qcydcbmltcG9ydCBmb290ZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZm9vdGVyLmpzJ1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY29udGFjdC5qcydcbmltcG9ydCBtYXJxdWVlIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL21hcnF1ZWUuanMnXG5pbXBvcnQgYmxvZ0ZpbHRlciBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9ibG9nRmlsdGVyLmpzJ1xuaW1wb3J0IHZpZGVvIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3ZpZGVvLmpzJ1xuaW1wb3J0IHNpZ251cCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9zaWdudXAuanMnXG5pbXBvcnQgYmFja2luc3RvY2sgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYmFja2luc3RvY2suanMnXG5pbXBvcnQgcHJvZHVjdFN1YnNjcmlwdGlvbnMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFN1YnNjcmlwdGlvbnMuanMnXG5pbXBvcnQgYWJvdXQgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWJvdXQuanMnXG5cbmltcG9ydCBoZXJvIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2hlcm8uanMnXG5pbXBvcnQgYmFubmVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Jhbm5lci5qcydcbmltcG9ydCBzb2NpYWwgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvc29jaWFsLmpzJ1xuaW1wb3J0IGNhcmRzIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NhcmRzLmpzJ1xuaW1wb3J0IGZhcXNJbWFnZSBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9mYXFzSW1hZ2UuanMnXG5pbXBvcnQgc3RlcHMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvc3RlcHMuanMnXG5cbmNvbnN0IHN0YXRlID0ge1xuICBjYXJ0T3BlbjogZmFsc2UsXG59XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIGFjY291bnRMb2dpbixcbiAgYWNjb3VudEFkZHJlc3NlcyxcbiAgaGVhZGVyLFxuICBjYXJ0RHJhd2VyLFxuICBjYXJ0RHJhd2VySXRlbSxcbiAgbGF6eSxcbiAgcHJvZHVjdENhcm91c2VsLFxuICBwcm9kdWN0LFxuICBwcm9kdWN0Q291bnRlcixcbiAgcHJvZHVjdFZhcmlhbnQsXG4gIHByb2R1Y3RPcHRpb25zLFxuICBjb2xsZWN0aW9uLFxuICBmYXFzLFxuICBjaGVja291dCxcbiAgbmV3c2xldHRlcixcbiAgY2Fyb3VzZWwsXG4gIGZvb3RlcixcbiAgY29udGFjdCxcbiAgbWFycXVlZSxcbiAgYmxvZ0ZpbHRlcixcbiAgdmlkZW8sXG4gIHNpZ251cCxcbiAgYmFja2luc3RvY2ssXG4gIHByb2R1Y3RTdWJzY3JpcHRpb25zLFxuICBhYm91dCxcblxuICBoZXJvLFxuICBiYW5uZXIsXG4gIHNvY2lhbCxcbiAgY2FyZHMsXG4gIGZhcXNJbWFnZSxcbiAgc3RlcHMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBpY29hcHAoY29tcG9uZW50cywgc3RhdGUpXG4iLCIvLyBpbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJ1xuLy8gaW1wb3J0ICdAL2xpYi9zZWxlY3QuanMnXG4vLyBpbXBvcnQgbGF6aW0gZnJvbSAnbGF6aW0nXG5pbXBvcnQgeyBiaW5kLCB1cGRhdGUgfSBmcm9tICdsYXppbSdcbmltcG9ydCBhcHAgZnJvbSAnYmFzZS9zY3JpcHRzL2FwcC5qcydcbmltcG9ydCByb3V0ZXIgZnJvbSAnYmFzZS9zY3JpcHRzL3JvdXRlci5qcydcbmltcG9ydCB7IGZldGNoQ2FydCB9IGZyb20gJ2Jhc2Uvc2NyaXB0cy91dGlscy9jYXJ0LmpzJ1xuaW1wb3J0IHsgZ3NhcCwgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvYWxsJ1xuaW1wb3J0IHsgcXMsIHJlbW92ZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHBhZ2VTZXR1cCBmcm9tICdiYXNlL3NjcmlwdHMvdXRpbHMvcGFnZVNldHVwJ1xuXG5sZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxXG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDFcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKVxufSlcblxuLyoqXG4gKiBzdG9yZSBiaW5kaW5nIGZuXG4gKi9cbmJpbmQoKVxuXG4vKipcbiAqIHJlZ2lzdGVyIHNjcm9sbHRyaWdnZXJcbiAqL1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuXG5yb3V0ZXIub24oJ2FmdGVyJywgKHsgdGl0bGUsIHBhdGhuYW1lIH0pID0+IHtcbiAgYXBwLnVubW91bnQoKVxuICBhcHAubW91bnQoKVxuXG4gIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdwcm9kdWN0cycpID4gLTEpIHtcbiAgLy8gICB2YXIgYXBpID0gbmV3IFlvdHBvLkFQSSh5b3RwbylcbiAgLy8gICBhcGkucmVmcmVzaFdpZGdldHMoKVxuICAvLyB9XG5cbiAgLyoqXG4gICAqIGJpbmQgbmV3IGltYWdlc1xuICAgKi9cblxuICBiaW5kKClcbiAgLyoqXG4gICAqIGhpZGUgc3VibmF2XG4gICAqL1xuICBhcHAuZW1pdCgnbWVudTpjbG9zZScpXG4gIGFwcC5lbWl0KCd0cmFuc2l0aW9uOmNvbXBsZXRlJylcblxuICBwYWdlU2V0dXAoKVxufSlcblxucGFnZVNldHVwKClcblxuLyoqXG4gKiBsb2FkIGFueSBkYXRhIHRoYXQgeW91ciBzaXRlIG5lZWRzIG9uIGZpc3QgbG9hZFxuICovXG5Qcm9taXNlLmFsbChbZmV0Y2hDYXJ0KCldKS50aGVuKChbY2FydF0pID0+IHtcbiAgLyoqXG4gICAqIGFkZCB0aGUgY2FydCBkYXRhIHRvIHRoZSBwaWNvYXBwIGluc3RhbmNlXG4gICAqL1xuICBhcHAuaHlkcmF0ZSh7IGNhcnQgfSlcblxuICAvKipcbiAgICogbW91bnQgYW55IGNvbXBvbmVudHMgZGVmaW5lZCBvbiB0aGUgcGFnZVxuICAgKi9cbiAgYXBwLm1vdW50KClcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAvYWxsJ1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyJ1xuaW1wb3J0IHsgU2Nyb2xsVG9QbHVnaW4gfSBmcm9tICdnc2FwL2Rpc3QvU2Nyb2xsVG9QbHVnaW4nXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBhbmNob3JzIH0gPSBjaG9venkobm9kZSlcblxuICBxc2EoJ1tkYXRhLXNlY3Rpb25dJykuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhbmNob3IuaW5uZXJIVE1MID0gc2VjdGlvbi5kYXRhc2V0LnRpdGxlIHx8IHNlY3Rpb24uZGF0YXNldC5zZWN0aW9uXG4gICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2pzLWFuY2hvcicpXG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgICBhbmNob3IuZGF0YXNldC5zZWN0aW9uID0gc2VjdGlvbi5kYXRhc2V0LnNlY3Rpb25cbiAgICBhbmNob3JzLmFwcGVuZENoaWxkKGFuY2hvcilcblxuICAgIG9uKGFuY2hvciwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIHNjcm9sbFRvOiB7XG4gICAgICAgICAgeTogYFtkYXRhLXRpdGxlPVwiJHtzZWN0aW9uLmRhdGFzZXQudGl0bGV9XCJdYCxcbiAgICAgICAgICBvZmZzZXRZOiA3NSxcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBzZXRBY3RpdmUgPSAodGFyZ2V0KSA9PiB7XG4gICAgcXNhKCcuanMtYW5jaG9yJykuZm9yRWFjaCgoYW5jaG9yKSA9PiB7XG4gICAgICByZW1vdmUoYW5jaG9yLCAnYWN0aXZlJylcbiAgICB9KVxuXG4gICAgYWRkKHFzKGAuanMtYW5jaG9yW2RhdGEtc2VjdGlvbj1cIiR7dGFyZ2V0fVwiXWApLCAnYWN0aXZlJylcbiAgfVxuXG4gIGdzYXAudXRpbHMudG9BcnJheSgnW2RhdGEtc2VjdGlvbl0nKS5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogc2VjdGlvbixcbiAgICAgIHN0YXJ0OiAndG9wIHRvcCs9MTUwJyxcbiAgICAgIG9uRW50ZXI6IChzZWxmKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShzZWxmLnRyaWdnZXIuZGF0YXNldC5zZWN0aW9uKVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxuXG4gIGdzYXAudXRpbHMudG9BcnJheSgnW2RhdGEtc2VjdGlvbl0nKS5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogc2VjdGlvbixcbiAgICAgIHN0YXJ0OiAnYm90dG9tIHRvcCcsXG4gICAgICBvbkxlYXZlQmFjazogKHNlbGYpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKHNlbGYudHJpZ2dlci5kYXRhc2V0LnNlY3Rpb24pXG4gICAgICB9LFxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpXG4gICAgICBpbWcub25sb2FkID0gbnVsbFxuICAgIH1cbiAgfSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKVxuICB9LCAxMDAwKVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IHRyaWdnZXJzID0gU2Nyb2xsVHJpZ2dlci5nZXRBbGwoKVxuICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgIHRyaWdnZXIua2lsbCgpXG4gICAgfSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHFzLCBxc2EsIG9uLCBhZGQsIHJlbW92ZSwgdG9nZ2xlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGFkZFdyYXAsIHRvZ2dsZUFkZCwgdG9nZ2xlRWRpdCwgZWRpdFdyYXAgfSA9IGNob296eShub2RlKVxuXG4gIGlmICh0b2dnbGVBZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgb24odG9nZ2xlQWRkLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGUoYWRkV3JhcCwgJ2hpZGRlbicpXG4gICAgfSlcbiAgfVxuXG4gIGlmICh0b2dnbGVFZGl0ICE9IHVuZGVmaW5lZCkge1xuICAgIG9uKHRvZ2dsZUVkaXQsICdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZ2dsZShlZGl0V3JhcCwgJ2hpZGRlbicpXG4gICAgfSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGNvbnN0IGxvZ2luID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtbG9naW4tZGlhbG9nJylcbiAgY29uc3QgcmVjb3ZlciA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY292ZXItZGlhbG9nJylcbiAgY29uc3QgcmVjb3ZlckxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLXRyaWdnZXInKVxuICBjb25zdCBjYW5jZWxSZWNvdmVyTGluayA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY292ZXItY2FuY2VsJylcblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBjb25zdCByZWNvdmVySXNUYXJnZXQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5tYXRjaCgvXFwjcmVjb3Zlci8pID8gdHJ1ZSA6IGZhbHNlXG4gIC8qIGVzbGludC1lbmFibGUgKi9cbiAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLXN1Y2Nlc3MnKSAhPT0gbnVsbFxuXG4gIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxzdWNjZXNzTWVzc2FnZSlcbiAgLy8gY29uc29sZS5sb2coJ3Rlc3QnKTtcblxuICAvLyBpZiAocmVjb3ZlcklzVGFyZ2V0IHx8IHN1Y2Nlc3NNZXNzYWdlKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuICAvLyAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgLy8gICByZWNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgLy8gfVxuXG4gIHJlY292ZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgcmVjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICB9KVxuXG4gIGNhbmNlbFJlY292ZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZWNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IGFkZCwgcmVtb3ZlLCBvbiwgcXMsIHFzYSwgdG9nZ2xlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGVtYWlsLCBiaXMsIGJpc2NvbnRlbnQsIHN1Y2Nlc3MsIGJpc3dyYXAsIG9wZW5iaXMsIGNsb3NlYmlzLCBmb3JtYmlzIH0gPVxuICAgIGNob296eShub2RlKVxuXG4gIG9uKGJpcywgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBjdXJyZW50VmFyaWFudCA9IG5vZGUuZGF0YXNldC52YXJpYW50XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hLmtsYXZpeW8uY29tL29uc2l0ZS9jb21wb25lbnRzL2JhY2staW4tc3RvY2svc3Vic2NyaWJlJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYTogJ1Y3aUNqWCcsXG4gICAgICAgIGVtYWlsOiBlbWFpbC52YWx1ZSxcbiAgICAgICAgdmFyaWFudDogY3VycmVudFZhcmlhbnQsXG4gICAgICAgIHBsYXRmb3JtOiAnc2hvcGlmeScsXG4gICAgICAgIHN0b3JlOiAnZHJpbmttb2RpY2EnLFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgYWRkKGZvcm1iaXMsICdoaWRkZW4nKVxuICAgICAgICByZW1vdmUoc3VjY2VzcywgJ2hpZGRlbicpXG4gICAgICB9LFxuICAgIH0pXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSBcInBpY29hcHBcIjtcbmltcG9ydCBjaG9venkgZnJvbSBcImNob296eVwiO1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIG9uLCBxc2EgfSBmcm9tIFwiQHNlbGZhd2FyZS9tYXJ0aGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgaW1hZ2VzIH0gPSBjaG9venkobm9kZSk7XG5cbiAgY29uc3QgYWxsSW1hZ2VzID0gSlNPTi5wYXJzZShpbWFnZXM/LmlubmVySFRNTCkuaW1hZ2VzO1xuICBjb25zdCBhbGxCbG9ja3MgPSBxc2EoJy5qcy1pbWFnZScsIG5vZGUpXG5cbiAgY29uc3QgdGhlbWVJbWFnZXMgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRUaGVtZSA9IGRvY3VtZW50LmJvZHkuZGF0YXNldC50aGVtZVxuICAgIGxldCB0aGVtZUltYWdlcyA9IFtdXG5cbiAgICBhbGxJbWFnZXMuZm9yRWFjaCgoaW1nLCBpbmRleCkgPT4ge1xuICAgICAgaWYoaW1nLnRoZW1lID09IGN1cnJlbnRUaGVtZSl7XG4gICAgICAgIHRoZW1lSW1hZ2VzLnB1c2goaW1nKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWxsQmxvY2tzLmZvckVhY2goaW1nID0+IGltZy5zcmMgPSAnJyk7XG5cbiAgICB0aGVtZUltYWdlcy5mb3JFYWNoKChpbWcsIGluZGV4KSA9PiB7XG4gICAgICBpZihpbWcudGhlbWUgPT0gY3VycmVudFRoZW1lKXtcbiAgICAgICAgYWxsQmxvY2tzW2luZGV4XS5zcmMgPSBpbWcuaW1hZ2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRoZW1lSW1hZ2VzKClcblxuICBjdHgub24oJ3RoZW1lJywgKCkgPT4ge1xuICAgIHRoZW1lSW1hZ2VzKClcbiAgfSlcbn0pO1xuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgZmlsdGVyVG9nZ2xlLCBjbGVhckZpbHRlciB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCcvdGFnZ2VkLycpKSB7XG4gICAgbGV0IHRhZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCd0YWdnZWQvJylbMV1cbiAgICBsZXQgdGFyZ2V0VGFnID0gcXMoYC5qcy1maWx0ZXJbZGF0YS1maWx0ZXI9XCIke3RhZ31cIl1gKVxuXG4gICAgcXNhKCcuanMtZmlsdGVyJywgbm9kZSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHJlbW92ZShlbCwgJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIGlmICh0YXJnZXRUYWcpIHtcbiAgICAgIGFkZCh0YXJnZXRUYWcsICdhY3RpdmUnKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IGFkZCwgcmVtb3ZlLCBvbiwgcXMsIHFzYSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnZW1ibGEtY2Fyb3VzZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGNhcm91c2VsLCBuZXh0LCBwcmV2LCBjb3VudGVyLCBhY3RpdmVJbmRleCwgY2FyZHMgfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IGVtYmxhID0gRW1ibGFDYXJvdXNlbChjYXJvdXNlbCwge1xuICAgIGxvb3A6IHRydWUsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgICB0cmltU25hcHM6IHRydWUsXG4gICAgY29udGFpblNjcm9sbDogdHJ1ZSxcbiAgICBhbGlnbjogJ3N0YXJ0JyxcbiAgfSlcblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG5cbiAgICAvLyBvbihuZXh0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICBlbWJsYS5zY3JvbGxOZXh0XG4gICAgLy8gfSlcbiAgfVxuXG4gIGlmIChjb3VudGVyKSB7XG4gICAgb24oY291bnRlciwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGVtYmxhLnNjcm9sbFRvKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgfSlcbiAgfVxuXG4gIGVtYmxhLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgIHJlbW92ZShjb3VudGVyLCAnaXMtYWN0aXZlJylcbiAgICAgIGFkZChcbiAgICAgICAgcXMoYC5qcy1jb3VudGVyW2RhdGEtaW5kZXg9XCIke2VtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpfVwiXWAsIG5vZGUpLFxuICAgICAgICAnaXMtYWN0aXZlJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCkge1xuICAgICAgYWN0aXZlSW5kZXguaW5uZXJIVE1MID0gZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCkgKyAxXG4gICAgfVxuICB9KVxuXG4gIC8vIHJldHVybiAoKSA9PiB7XG4gIC8vICAgaWYgKG5leHQpIHtcbiAgLy8gICAgICAgbmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAvLyAgICAgICBwcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG4gIC8vICAgfVxuICAvLyB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICdlbWJsYS1jYXJvdXNlbCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgY2Fyb3VzZWwsIG5leHQsIHByZXYsIGNvdW50ZXIsIGFjdGl2ZUluZGV4IH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHtcbiAgICBsb29wOiBub2RlLmRhdGFzZXQubG9vcCA9PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgdHJpbVNuYXBzOiB0cnVlLFxuICAgIGNvbnRhaW5TY3JvbGw6IHRydWUsXG4gICAgc3BlZWQ6IG5vZGUuZGF0YXNldC5zcGVlZCA/IG5vZGUuZGF0YXNldC5zcGVlZCA6IDEwLFxuICAgIGFsaWduOiBub2RlLmRhdGFzZXQuc3RhcnQgPT0gJ2xlZnQnID8gJ3N0YXJ0JyA6ICdjZW50ZXInLFxuICB9KVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcblxuICAgIC8vIG9uKG5leHQsICdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGVtYmxhLnNjcm9sbE5leHRcbiAgICAvLyB9KVxuICB9XG5cbiAgaWYgKGNvdW50ZXIpIHtcbiAgICBvbihjb3VudGVyLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZW1ibGEuc2Nyb2xsVG8oZS50YXJnZXQuZGF0YXNldC5pbmRleClcbiAgICB9KVxuICB9XG5cbiAgZW1ibGEub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICBpZiAoY291bnRlcikge1xuICAgICAgcmVtb3ZlKGNvdW50ZXIsICdpcy1hY3RpdmUnKVxuICAgICAgYWRkKFxuICAgICAgICBxcyhgLmpzLWNvdW50ZXJbZGF0YS1pbmRleD1cIiR7ZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCl9XCJdYCwgbm9kZSksXG4gICAgICAgICdpcy1hY3RpdmUnXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4KSB7XG4gICAgICBhY3RpdmVJbmRleC5pbm5lckhUTUwgPSBlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKSArIDFcbiAgICB9XG4gIH0pXG5cbiAgLy8gcmV0dXJuICgpID0+IHtcbiAgLy8gICBpZiAobmV4dCkge1xuICAvLyAgICAgICBuZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gIC8vICAgICAgIHByZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcbiAgLy8gICB9XG4gIC8vIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IHsgZ2V0U2l6ZWRJbWFnZVVybCwgaW1hZ2VTaXplIH0gZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL2ltYWdlcy5qcydcbmltcG9ydCB7IGZvcm1hdE1vbmV5IH0gZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL2N1cnJlbmN5LmpzJ1xuaW1wb3J0IGFwcCBmcm9tICdiYXNlL3NjcmlwdHMvYXBwLmpzJ1xuaW1wb3J0IHsgZ3NhcCwgUG93ZXI0IH0gZnJvbSAnZ3NhcCdcbmltcG9ydCB7IGFkZCwgcXMsIHFzYSwgcmVtb3ZlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpXG5cbmNvbnN0IFggPSBgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxOSAxOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk0xIDFMMTcuOTcwNiAxNy45NzA2XCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG48cGF0aCBkPVwiTTEgMTcuOTcwNUwxNy45NzA2IDAuOTk5ODk3XCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG48L3N2Zz5gXG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oe1xuICB2YXJpYW50X2lkOiBpZCxcbiAgcHJvZHVjdF90aXRsZTogdGl0bGUsXG4gIGxpbmVfcHJpY2U6IHByaWNlLFxuICBvcmlnaW5hbF9saW5lX3ByaWNlOiBvcmlnaW5hbF9wcmljZSxcbiAgdmFyaWFudF90aXRsZSxcbiAgaW1hZ2UsXG4gIHVybCxcbiAgcXVhbnRpdHksXG4gIC4uLml0ZW1cbn0pIHtcbiAgLy8gY29uc3QgaW1nID0gaW1hZ2VcbiAgLy8gICA/IGdldFNpemVkSW1hZ2VVcmwoXG4gIC8vICAgICAgIGltYWdlLnJlcGxhY2UoJy4nICsgaW1hZ2VTaXplKGltYWdlKSwgJycpLFxuICAvLyAgICAgICAnNDAweCcgLy8gVE9ETyBoYWNreSBhZlxuICAvLyAgICAgKVxuICAvLyAgIDogJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9SOU9TMjl4SmItOC8yMDAweDEzMzMnXG5cbiAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9J2NhcnQtZHJhd2VyX19pdGVtJyBkYXRhLWNvbXBvbmVudD0nY2FydERyYXdlckl0ZW0nIGRhdGEtaWQ9JHtpZH0gJHtcbiAgICBpdGVtLnNlbGxpbmdfcGxhbl9hbGxvY2F0aW9uXG4gICAgICA/IGBkYXRhLXBsYW5pZD0nJHtpdGVtLnNlbGxpbmdfcGxhbl9hbGxvY2F0aW9uLnNlbGxpbmdfcGxhbi5pZH0nYFxuICAgICAgOiBgYFxuICB9PlxuICA8ZGl2IGNsYXNzPSdyZWxhdGl2ZSB3LWZ1bGwgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIHAtMTUgbTpwLTIwJz5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgPGEgaHJlZj0nJHt1cmx9JyBjbGFzcz1cImNhcnQtaW1hZ2VcIiBhcmlhLWxhYmVsPVwidmlldyAke3RpdGxlfVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIHNyYz0nJHtpbWFnZX0nIGFsdD1cInByb2R1Y3QgdGh1bWJuYWlsXCIvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbC0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBmb250LWJvbGQgZmxleC1ncm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nJHt1cmx9JyBjbGFzcz0ndGl0bGUtY2FydCB1cHBlcmNhc2UnPiR7dGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJ0LWRyYXdlcl9faXRlbS0tcHJpY2UgZmxleC1zaHJpbmstMCB0ZXh0LTIwJz5cbiAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfcHJpY2UgPiBwcmljZVxuICAgICAgICAgICAgICAgICAgICA/IGA8c3BhbiBjbGFzcz1cImpzLXByaWNlIGxpbmUtdGhyb3VnaFwiPiQke2Zvcm1hdE1vbmV5KFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImpzLWRpc2NvdW50IG1sLTVcIj4kJHtmb3JtYXRNb25leShwcmljZSl9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICAgICAgOiBgPHNwYW4gY2xhc3M9XCJqcy1wcmljZVwiPiQke2Zvcm1hdE1vbmV5KHByaWNlKX08L3NwYW4+YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIHZhcmlhbnRfdGl0bGVcbiAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPSdpdGVtLXZhcmlhbnRfX3RpdGxlIGNhcnQtaXRlbS0tZGV0YWlsJz4ke3ZhcmlhbnRfdGl0bGV9PC9kaXY+YFxuICAgICAgICAgICAgICAgIDogYGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1pdGVtX19xdHkgZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtMTAgZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgbGVhZGluZy0xMDAgdGV4dC0yMCBweS01IGJvcmRlciBib3JkZXItc29saWQgaC0yNSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcnQtcXVhbnRpdHkgYnRuLXF1YW50aXR5IGpzLXJlbW92ZS1zaW5nbGUgY3Vyc29yLXBvaW50ZXInPjxzcGFuIGNsYXNzPVwiYmxvY2tcIj4mbmRhc2g7PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdqcy1zaW5nbGUtcXVhbnRpdHkgbXgtNSc+JHtxdWFudGl0eX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1xdWFudGl0eSBidG4tcXVhbnRpdHkganMtYWRkLXNpbmdsZSBjdXJzb3ItcG9pbnRlcic+PHNwYW4gY2xhc3M9XCJibG9ja1wiPis8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbi0tcmVzZXQganMtcmVtb3ZlLWl0ZW0gdGV4dC1yaWdodCB0ZXh0LTE0IGNhcnQtaXRlbV9fcmVtb3ZlIGxoMTAwJyBhcmlhLWxhYmVsPVwicmVtb3ZlIGl0ZW1cIj48c3BhbiBjbGFzcz1cImJsb2NrIHVuZGVybGluZVwiPlJFTU9WRTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmBcbn1cblxuZnVuY3Rpb24gcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDBcbiAgICA/IGl0ZW1zLnJlZHVjZSgobWFya3VwLCBpdGVtKSA9PiB7XG4gICAgICAgIG1hcmt1cCArPSBjcmVhdGVJdGVtKGl0ZW0pXG4gICAgICAgIHJldHVybiBtYXJrdXBcbiAgICAgIH0sICcnKVxuICAgIDogYDxkaXYgY2xhc3M9J3B4LTIwIG06cHgtNDAnPjxwIGNsYXNzPVwicHktMjAgdy1mdWxsIGJvcmRlci1iLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibHVlXCI+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPjwvZGl2PmBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLW92ZXJsYXknKVxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWNsb3NlJylcbiAgY29uc3Qgc3VidG90YWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zdWJ0b3RhbCcpXG4gIGNvbnN0IGl0ZW1zUm9vdCA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWl0ZW1zJylcbiAgY29uc3QgbG9hZGluZyA9IGl0ZW1zUm9vdC5pbm5lckhUTUxcblxuICBjb25zdCByZW5kZXIgPSAoY2FydCkgPT4ge1xuICAgIGl0ZW1zUm9vdC5pbm5lckhUTUwgPSByZW5kZXJJdGVtcyhjYXJ0Lml0ZW1zLCBpdGVtc1Jvb3QpXG4gICAgc3VidG90YWwuaW5uZXJIVE1MID0gYCR7Zm9ybWF0TW9uZXkoY2FydC50b3RhbF9wcmljZSl9YFxuICB9XG5cbiAgY29uc3Qgb3BlbiA9IChjYXJ0KSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxuICAgIGl0ZW1zUm9vdC5pbm5lckhUTUwgPSBsb2FkaW5nXG5cbiAgICBzZXRUaW1lb3V0KHJlbmRlcihjYXJ0KSwgMTApXG4gICAgYXBwLm1vdW50KClcblxuICAgIHRsLnRvKCcuY2FydC1kcmF3ZXInLCB7XG4gICAgICB4OiAnMCUnLFxuICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge30sXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcblxuICAgIHRsLnRvKCcuY2FydC1kcmF3ZXInLCB7XG4gICAgICB4OiAnMTAwJScsXG4gICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIGFwcC5oeWRyYXRlKHsgY2FydE9wZW46IGZhbHNlIH0pXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoY3R4LmdldFN0YXRlKCkuY2FydClcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpXG5cbiAgY29uc3QgY2hlY2tDYXJ0ID0gKGNhcnQpID0+IHtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPCAxKSB7XG4gICAgICByZW1vdmUocXMoJy5jYXJ0LWVtcHR5X193cmFwcGVyJyksICdoaWRkZW4nKVxuICAgICAgYWRkKHFzKCcuY2FydC1kcmF3ZXJfX2l0ZW1zJyksICdoaWRkZW4nKVxuICAgICAgYWRkKHFzKCcuanMtY2FydEZvb3RlcicpLCAnaGlkZGVuJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkKHFzKCcuY2FydC1lbXB0eV9fd3JhcHBlcicpLCAnaGlkZGVuJylcbiAgICAgIHJlbW92ZShxcygnLmNhcnQtZHJhd2VyX19pdGVtcycpLCAnaGlkZGVuJylcbiAgICAgIHJlbW92ZShxcygnLmpzLWNhcnRGb290ZXInKSwgJ2hpZGRlbicpXG4gICAgfVxuICAgIC8vIH0sIDEwMCk7XG4gIH1cblxuICBjdHgub24oJ2NhcnQ6dG9nZ2xlJywgKHsgY2FydCwgY2FydE9wZW4gfSkgPT4ge1xuICAgIGNhcnRPcGVuICYmIG9wZW4oY2FydClcblxuICAgIGNoZWNrQ2FydChjdHguZ2V0U3RhdGUoKS5jYXJ0KVxuICB9KVxuXG4gIGN0eC5vbignY2FydDp1cGRhdGVkJywgKCkgPT4ge1xuICAgIHJlbmRlcihjdHguZ2V0U3RhdGUoKS5jYXJ0KVxuICAgIGFwcC5tb3VudCgpXG5cbiAgICBjaGVja0NhcnQoY3R4LmdldFN0YXRlKCkuY2FydClcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IHsgcmVtb3ZlQWRkb24sIHVwZGF0ZUFkZG9uIH0gZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL2NhcnQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGNvbnN0IHJlbW92ZXJzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcmVtb3ZlLWl0ZW0nKVxuICBjb25zdCBkZWNyZWFzZSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlbW92ZS1zaW5nbGUnKVxuICBjb25zdCBpbmNyZWFzZSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWFkZC1zaW5nbGUnKVxuICBjb25zdCBjdXJyZW50UXR5ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtc2luZ2xlLXF1YW50aXR5JykuaW5uZXJIVE1MXG4gIGNvbnN0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuICBjb25zdCBzZWxsaW5nX3BsYW4gPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFuaWQnKVxuXG4gIHJlbW92ZXJzLmZvckVhY2goKHJlbSkgPT4ge1xuICAgIHJlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBsZXQgbGluayA9IGUudGFyZ2V0LmRhdGFzZXQubGlua1xuICAgICAgY3R4LmVtaXQoJ2l0ZW06cmVtb3ZlZCcpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJlbW92ZUFkZG9uKGlkLCBzZWxsaW5nX3BsYW4sIGxpbmspXG4gICAgfSlcbiAgfSlcblxuICBkZWNyZWFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlQWRkb24oaWQsIHNlbGxpbmdfcGxhbiwgcGFyc2VJbnQoY3VycmVudFF0eSkgLSAxKVxuICB9KVxuXG4gIGluY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCBwYXJzZUludChjdXJyZW50UXR5KSArIDEpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IG9uLCBxcyB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUpID0+IHtcbiAgb24obm9kZSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHFzKCcuanMtY2FydEZvcm0nKS5zdWJtaXQoKVxuXG4gICAgLy8gd2luZG93LmxvY2F0aW9uID0gJy9jaGVja291dCdcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IHsgZ3NhcCwgU2Nyb2xsVG9QbHVnaW4gfSBmcm9tICdnc2FwL2FsbCdcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICBkdXJhdGlvbjogMSxcbiAgICAgIHNjcm9sbFRvOiB7XG4gICAgICAgIHk6IGBbZGF0YS1zZWN0aW9uPVwiJHt3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnIycpWzFdfVwiXWAsXG4gICAgICAgIG9mZnNldFk6IDkwLFxuICAgICAgfSxcbiAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgfSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IG9uLCBhZGQsIHJlbW92ZSwgcXMsIHFzYSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBzdWJtaXQsIGVtYWlsIH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCBvZmZFbWFpbCA9IG9uKGVtYWlsLCAnYmx1cicsIChlKSA9PiB7XG4gICAgaWYgKCFlbWFpbC52YWx1ZS5pbmNsdWRlcygnQCcpKSB7XG4gICAgICBhZGQocXMoJy5mb3JtLWVtYWlsJywgbm9kZSksICdlcnJvcicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZShxcygnLmZvcm0tZW1haWwnLCBub2RlKSwgJ2Vycm9yJylcbiAgICB9XG4gIH0pXG5cbiAgcXNhKCcuZm9ybS1pbnB1dCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgb24oZWwsICdpbnB1dCcsICgpID0+IHtcbiAgICAgIGlmIChlbC52YWx1ZSkge1xuICAgICAgICBhZGQoZWwsICdoYXMtZmlsbCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmUoZWwsICdoYXMtZmlsbCcpXG4gICAgICB9XG5cbiAgICAgIGlmIChxc2EoJy5mb3JtLWlucHV0Lmhhcy1maWxsOm5vdCguZXJyb3IpJykubGVuZ3RoID09IDMpIHtcbiAgICAgICAgc3VibWl0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VibWl0LmFkZEF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBvZmZFbWFpbCgpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwicGljb2FwcFwiO1xuaW1wb3J0IGNob296eSBmcm9tIFwiY2hvb3p5XCI7XG5pbXBvcnQgeyBvbiwgdG9nZ2xlLCBxc2EsIHFzLCByZW1vdmUsIGFkZCB9IGZyb20gXCJAc2VsZmF3YXJlL21hcnRoYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBmYXEsIGJvZHksIGlubmVyLCBwbHVzIH0gPSBjaG9venkobm9kZSk7XG5cbiAgY29uc29sZS5sb2coJ2ZhcXMnKTtcblxuICBub2RlLnN0eWxlLnNldFByb3BlcnR5KCctLWRyYXdlckhlaWdodCcsIGAke2lubmVyLm9mZnNldEhlaWdodH1weGApXG5cbiAgLy9qYW5rXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoJy0tZHJhd2VySGVpZ2h0JywgYCR7aW5uZXIub2Zmc2V0SGVpZ2h0fXB4YClcbiAgfSwgNTAwKTtcblxuICBvbih3aW5kb3csICdyZXNpemUnLCAoKSA9PiB7XG4gICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kcmF3ZXJIZWlnaHQnLCBgJHtpbm5lci5vZmZzZXRIZWlnaHR9cHhgKVxuICB9KVxuXG4gIG9uKGZhcSwgXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZShib2R5LCBcIm9wZW5cIik7XG4gICAgdG9nZ2xlKG5vZGUsIFwiYWN0aXZlXCIpO1xuICAgIHRvZ2dsZShwbHVzLCBcInJvdGF0ZS00NVwiKTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCJwaWNvYXBwXCI7XG5pbXBvcnQgY2hvb3p5IGZyb20gXCJjaG9venlcIjtcbmltcG9ydCB7IG9uLCB0b2dnbGUsIHFzYSwgcXMsIHJlbW92ZSwgYWRkIH0gZnJvbSBcIkBzZWxmYXdhcmUvbWFydGhhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIHFzKFwibWFpblwiKS5hcHBlbmQobm9kZSk7XG5cbiAgbGV0IHNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBhZGQoc2VjdGlvbkNvbnRhaW5lciwgJ2ZhcS1jb250YWluZXInKVxuXG4gIHFzKCdtYWluJykuYXBwZW5kKHNlY3Rpb25Db250YWluZXIpXG5cbiAgcXNhKCdzZWN0aW9uJykuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uQ29udGFpbmVyLmFwcGVuZChzZWN0aW9uKVxuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuaW1wb3J0IHsgdXBkYXRlIH0gZnJvbSAnbGF6aW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGltYWdlcywgaW1hZ2UgfSA9IGNob296eShub2RlKTtcblxuICBjb25zdCBhbGxJbWFnZXMgPSBKU09OLnBhcnNlKGltYWdlcz8uaW5uZXJIVE1MKS5pbWFnZXM7XG5cbiAgY29uc3QgdGhlbWVJbWFnZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gZG9jdW1lbnQuYm9keS5kYXRhc2V0LnRoZW1lXG4gICAgY29uc3QgdGhlbWVJbWFnZSA9IGFsbEltYWdlcy5maW5kKChpbWcpID0+IGltZy50aGVtZSA9PSBjdXJyZW50VGhlbWUpO1xuXG4gICAgaW1hZ2Uuc3JjID0gdGhlbWVJbWFnZS5pbWFnZVxuICAgIGltYWdlLmRhdGFzZXQuc3JjID0gdGhlbWVJbWFnZS5pbWFnZVxuXG4gICAgdXBkYXRlKClcbiAgfVxuXG4gIHRoZW1lSW1hZ2VzKClcblxuICBjdHgub24oJ3RoZW1lJywgKCkgPT4ge1xuICAgIHRoZW1lSW1hZ2VzKClcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgZ3NhcCwgRXhwbyB9IGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGNhcnRUb2dnbGUsIGFubm91bmNlQmFyLCBhbm5vdW5jZUNsb3NlLCBtZW51LCBhbmNob3IsIG5hdiwgb3BlbiwgY2xvc2UsIG5hdlRvZ2dsZSB9ID1cbiAgICBjaG9venkobm9kZSlcblxuICBsZXQgaGVhZGVyQ2xvc2UgPSBxcygnLmhlYWRlci1jbG9zZScpXG4gIGxldCBjbG9zZVpvbmUgPSBxcygnLmpzLWNsb3NlWm9uZScpXG4gIGxldCBjYXJ0Q291bnQgPSBxc2EoJy5qcy1jYXJ0Q291bnQnKVxuXG4gIGlmIChhbm5vdW5jZUNsb3NlKSB7XG4gICAgb24oYW5ub3VuY2VDbG9zZSwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWRkKGFubm91bmNlQmFyLCAnaGlkZGVuJylcbiAgICAgIHFzKCdib2R5Jykuc3R5bGUuc2V0UHJvcGVydHkoJy0tYW5ub3VuY2UnLCBgMHB4YClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaW5pdEhlYWRlciA9ICgpID0+IHtcbiAgICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKXtcbiAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IDUwKXtcbiAgICAgICAgcmVtb3ZlKGRvY3VtZW50LmJvZHksICdsb2dvJylcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgYWRkKGRvY3VtZW50LmJvZHksICdsb2dvJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0SGVhZGVyKClcblxuICBvbih3aW5kb3csICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvJyl7XG4gICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiA1MCl7XG4gICAgICAgIHJlbW92ZShkb2N1bWVudC5ib2R5LCAnbG9nbycpXG4gICAgICB9IGVsc2V7XG4gICAgICAgIGFkZChkb2N1bWVudC5ib2R5LCAnbG9nbycpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIG9uKGNhcnRUb2dnbGUsICdjbGljaycsICgpID0+IHtcbiAgICBjdHguZW1pdCgnY2FydDp0b2dnbGUnLCAoc3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNhcnRPcGVuOiAhc3RhdGUuY2FydE9wZW4sXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvL2RlZmluZSBuYXYgc2l6aW5nXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tbmF2JywgYCR7bmF2Lm9mZnNldFdpZHRofXB4YCk7IC8vIENoYW5nZSB0byBkZXNpcmVkIGNvbG9yXG5cbiAgb24od2luZG93LCAncmVzaXplJywgKCkgPT4ge1xuICAgIHFzKCdib2R5Jykuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1oZWFkZXJIZWlnaHQnLFxuICAgICAgYCR7cXMoJ2hlYWRlcicpLm9mZnNldEhlaWdodCAtIDJ9cHhgXG4gICAgKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1uYXYnLCBgJHtuYXYub2Zmc2V0V2lkdGh9cHhgKTsgLy8gQ2hhbmdlIHRvIGRlc2lyZWQgY29sb3JcbiAgfSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBxcygnYm9keScpLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgJy0taGVhZGVySGVpZ2h0JyxcbiAgICAgIGAke25vZGUub2Zmc2V0SGVpZ2h0IC0gMn1weGBcbiAgICApXG4gIH0sIDEwMDApXG5cbiAgb24obmF2VG9nZ2xlLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlKG9wZW4sICdoaWRkZW4nKVxuICAgIHRvZ2dsZShjbG9zZSwgJ2hpZGRlbicpXG5cbiAgICB0b2dnbGUobWVudSwgJ2lzLW9wZW4nKVxuICB9KVxuXG4gIG9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KCctLW1lbnVPZmZzZXQnLCBgJHtub2RlLm9mZnNldEhlaWdodH1gKVxuICB9KVxuXG4gIGN0eC5vbignY2FydDp1cGRhdGVkJywgKHN0YXRlKSA9PiB7XG4gICAgY2FydENvdW50LmZvckVhY2goKGNvdW50KSA9PiAoY291bnQuaW5uZXJIVE1MID0gc3RhdGUuY2FydC5pdGVtX2NvdW50KSlcbiAgfSlcblxuICBjYXJ0Q291bnQuZm9yRWFjaChcbiAgICAoY291bnQpID0+IChjb3VudC5pbm5lckhUTUwgPSBjdHguZ2V0U3RhdGUoKS5jYXJ0Lml0ZW1fY291bnQpXG4gIClcblxuICBjdHgub24oJ21lbnU6Y2xvc2UnLCAoKSA9PiB7XG4gICAgZ3NhcC5mcm9tVG8oXG4gICAgICAnLm5hdi1tZW51LXdyYXAnLFxuICAgICAgeyB4OiAwIH0sXG4gICAgICB7IHg6ICctMTAwJScsIGR1cmF0aW9uOiAwLjMsIGVhc2U6IEV4cG8uZWFzZU91dCB9XG4gICAgKVxuXG4gICAgcmVtb3ZlKG1lbnVPcGVuLCAnaGlkZGVuJylcbiAgICBhZGQoaGVhZGVyQ2xvc2UsICdoaWRkZW4nKVxuICAgIGFkZChjbG9zZVpvbmUsICdoaWRkZW4nKVxuICB9KVxuXG4gIC8vaGFuZGxlIGhlYWRlciBsb2dvXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2dvJylcbiAgfSBlbHNle1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9nbycpXG4gIH1cblxuICAvL3RvZ2dsZSBjYXJ0IGlmIHVzZXIgaXMgcG9pbnRlZCB0byBjYXJ0IHBhZ2VcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NhcnQnKSA+IC0xKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyNjYXJ0JykgPiAtMSkge1xuICAgICAgY3R4LmVtaXQoJ2NhcnQ6dG9nZ2xlJywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2FydE9wZW46ICFzdGF0ZS5jYXJ0T3BlbixcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyNjYXJ0J1xuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCJwaWNvYXBwXCI7XG5pbXBvcnQgY2hvb3p5IGZyb20gXCJjaG9venlcIjtcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBvbiwgcXNhIH0gZnJvbSBcIkBzZWxmYXdhcmUvbWFydGhhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHByb2R1Y3RzLCB0b2dnbGUsIGljb24sIGhlcm8sIGxpbmsgfSA9IGNob296eShub2RlKTtcblxuICBjb25zdCBhbGxQcm9kdWN0cyA9IEpTT04ucGFyc2UocHJvZHVjdHM/LmlubmVySFRNTCkucHJvZHVjdHM7XG5cbiAgY29uc3QgdXBkYXRlVGhlbWUgPSAodGhlbWUsIHByaW1hcnksIHNlY29uZGFyeSwgdGVydGlhcnkpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1wcmltYXJ5XCIsIGAke3ByaW1hcnl9YCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Vjb25kYXJ5XCIsIGAke3NlY29uZGFyeX1gKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXJ0aWFyeVwiLCBgJHt0ZXJ0aWFyeX1gKTtcbiAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQudGhlbWUgPSB0aGVtZVxuICB9XG5cbiAgdXBkYXRlVGhlbWUobm9kZS5kYXRhc2V0LnRoZW1lLCBub2RlLmRhdGFzZXQucHJpbWFyeSwgbm9kZS5kYXRhc2V0LnNlY29uZGFyeSwgbm9kZS5kYXRhc2V0LnRlcnRpYXJ5KVxuXG4gIG9uKHRvZ2dsZSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQgYnRuID0gZS50YXJnZXRcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludChidG4uZGF0YXNldC5pbmRleCkgLSAxXG4gICAgdXBkYXRlVGhlbWUoYnRuLmRhdGFzZXQudGhlbWUsIGJ0bi5kYXRhc2V0LnByaW1hcnksIGJ0bi5kYXRhc2V0LnNlY29uZGFyeSwgYnRuLmRhdGFzZXQudGVydGlhcnkpXG5cbiAgICByZW1vdmUodG9nZ2xlLCAnYWN0aXZlJylcbiAgICBhZGQoZS50YXJnZXQsICdhY3RpdmUnKVxuXG4gICAgaGVyby5zcmMgPSBhbGxQcm9kdWN0c1tpbmRleF0/Lmhlcm9cbiAgICBpY29uLnNyYyA9IGFsbFByb2R1Y3RzW2luZGV4XT8uaWNvblxuICAgIGxpbmsuaHJlZiA9IGFsbFByb2R1Y3RzW2luZGV4XT8udXJsXG5cbiAgICBjdHguZW1pdCgndGhlbWUnKVxuICB9KVxufSk7XG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBvbiwgcmVtb3ZlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGxxaXAsIGltZyB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgb24oaW1nLCAnbG9hZCcsICgpID0+IHtcbiAgICBpbWcuZGVjb2RlKCkudGhlbigoKSA9PiB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjdHguZW1pdCgnbGF6eTpsb2FkJywgbnVsbCwgeyBpZDogbm9kZS5kYXRhc2V0LmlkIH0pXG4gICAgICAgIGxldCBvZmYgPSBvbihpbWcsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgIG9mZigpXG4gICAgICAgICAgbHFpcC5yZW1vdmUoKVxuICAgICAgICB9KVxuICAgICAgICByZW1vdmUoaW1nLCAnb3BhY2l0eS0wJylcbiAgICAgICAgaW1nLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGltZy5zcmMgPSBpbWcuZGF0YXNldC5zcmNcbiAgaW1nLnNyY3NldCA9IGltZy5kYXRhc2V0LnNyY3NldFxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCJwaWNvYXBwXCI7XG5pbXBvcnQgeyBvbiwgcmVtb3ZlLCBhZGQsIGhhcywgcXMsIHFzYSB9IGZyb20gXCJtYXJ0aGFcIjtcbmltcG9ydCBjaG9venkgZnJvbSBcImNob296eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBwcmltYXJ5IH0gPSBjaG9venkobm9kZSk7XG4gIGxldCBjdXJyZW50WDtcbiAgbGV0IHRhcmdldFg7XG5cbiAgbGV0IGRpcmVjdGlvbiA9IG5vZGUuZGF0YXNldC5kaXJlY3Rpb247XG5cbiAgaWYgKGRpcmVjdGlvbiA9PSBcImx0clwiKSB7XG4gICAgY3VycmVudFggPSAtcHJpbWFyeS5zY3JvbGxXaWR0aDtcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoYW5pbWF0aW9uTG9vcExUUiwgMTUpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0aW9uTG9vcExUUigpIHtcbiAgICAgIHRhcmdldFggPSBjdXJyZW50WCA+PSAwID8gLXByaW1hcnkuc2Nyb2xsV2lkdGggOiBjdXJyZW50WCArIDE7XG5cbiAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0YXJnZXRYfXB4KSB0cmFuc2xhdGVaKDBweClgO1xuXG4gICAgICBjdXJyZW50WCA9IHRhcmdldFg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRYID0gMDtcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoYW5pbWF0aW9uTG9vcFJUTCwgMTUpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0aW9uTG9vcFJUTCgpIHtcbiAgICAgIHRhcmdldFggPSBjdXJyZW50WCA+IHByaW1hcnkuc2Nyb2xsV2lkdGggPyAwIDogY3VycmVudFggKyAxO1xuXG4gICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RhcmdldFh9cHgpIHRyYW5zbGF0ZVooMHB4KWA7XG5cbiAgICAgIGN1cnJlbnRYID0gdGFyZ2V0WDtcbiAgICB9XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgb24sIHFzLCBhZGQsIHJlbW92ZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAna2xhdml5by1zdWJzY3JpYmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGZvcm1Db250ZW50LCBzdWNjZXNzLCBzdWJtaXQsIGVycm9yIH0gPSBjaG9venkobm9kZSlcblxuICBvbihzdWJtaXQsICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgbGlzdElkID0gJ1h0R0pXVydcbiAgICBsZXQgZW1haWwgPSBxcygnLmpzLWVtYWlsJywgbm9kZSkudmFsdWVcblxuICAgIGlmIChlbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICBzdWJzY3JpYmUobGlzdElkLCBlbWFpbCwge30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlbW92ZShzdWNjZXNzLCAnaGlkZGVuJylcbiAgICAgICAgYWRkKGZvcm1Db250ZW50LCAnaGlkZGVuJylcbiAgICAgICAgYWRkKGVycm9yLCAnaGlkZGVuJylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZShlcnJvciwgJ2hpZGRlbicpXG4gICAgfVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBhZGRWYXJpYW50IH0gZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL2NhcnQuanMnXG5pbXBvcnQgeyBxcywgcXNhLCBoYXMsIG9uIH0gZnJvbSAnbWFydGhhJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHN1YkRldGFpbFRvZ2dsZSwgc3ViRGV0YWlsLCBxdWFudGl0eSB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocXMoJy5qcy1wcm9kdWN0LWpzb24nLCBub2RlKS5pbm5lckhUTUwpXG4gIGNvbnN0IGFkZEJ0biA9IHFzKCcuYnRuLWFkZCcsIG5vZGUpXG4gIGNvbnN0IGFkZFRleHQgPVxuICAgIGFkZEJ0bi5pbm5lckhUTUwgfHxcbiAgICBgJHthZGRCdG4uZGF0YXNldD8ucHJlb3JkZXIgPT0gJ3RydWUnID8gJ1ByZS1PcmRlcicgOiAnQWRkIFRvIENhcnQnfSB8ICR7XG4gICAgICBhZGRCdG4uZGF0YXNldD8ucHJpY2VcbiAgICB9YFxuXG4gIGxldCB7IHNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnQsIHByb2R1Y3QgfSA9IGpzb25cbiAgbGV0IGN1cnJlbnRWYXJpYW50ID0gcHJvZHVjdC52YXJpYW50cy5maWx0ZXIoXG4gICAgKHYpID0+IHYuaWQgPT09IHNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnRcbiAgKVswXVxuXG4gIGN0eC5vbignY2FydDp0b2dnbGUnLCAoKSA9PiB7XG4gICAgYWRkQnRuLmlubmVySFRNTCA9IGFkZFRleHRcbiAgfSlcblxuICBvbihhZGRCdG4sICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBhZGRCdG4uaW5uZXJIVE1MID0gJ0FkZGluZy4uLidcblxuICAgIC8vZ2V0IGFkZG9uc1xuICAgIHFzYSgnLmpzLWFkZG9uLnNlbGVjdGVkJywgbm9kZSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGFkZG9uSnNvbiA9IEpTT04ucGFyc2UocXMoJy5qcy1hZGRvbi1qc29uJywgZWwpLmlubmVySFRNTClcblxuICAgICAgbGV0IHsgYWRkb25TZWxlY3RlZE9yRmlyc3RBdmFpbGFibGVWYXJpYW50LCBhZGRvblByb2R1Y3QgfSA9IGFkZG9uSnNvblxuICAgICAgbGV0IGFkZG9uVmFyaWFudCA9IGFkZG9uUHJvZHVjdC52YXJpYW50cy5maWx0ZXIoXG4gICAgICAgICh2KSA9PiB2LmlkID09PSBhZGRvblNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnRcbiAgICAgIClbMF1cblxuICAgICAgYWRkVmFyaWFudChhZGRvblZhcmlhbnQsIDEsIG51bGwpXG4gICAgfSlcbiAgICAvLyBhZGRCdG4uaW5uZXJIVE1MID0gJ2FkZGluZy4uLidcblxuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSBxcygnc2VsZWN0W25hbWU9XCJpZFwiXScsIG5vZGUpLnZhbHVlXG5cbiAgICBjdXJyZW50VmFyaWFudCA9IHNlbGVjdGVkVmFyaWFudFxuICAgICAgPyBwcm9kdWN0LnZhcmlhbnRzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCA9PT0gcGFyc2VJbnQocXMoJ3NlbGVjdFtuYW1lPVwiaWRcIl0nLCBub2RlKS52YWx1ZSlcbiAgICAgICAgKVswXVxuICAgICAgOiBjdXJyZW50VmFyaWFudFxuXG4gICAgYWRkVmFyaWFudChjdXJyZW50VmFyaWFudCwgcXVhbnRpdHk/LnZhbHVlIHx8IDEsIG51bGwpXG4gICAgY29uc29sZS5sb2coanNvbilcbiAgfSlcblxuICByZXR1cm4gKCkgPT4ge31cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyByZW1vdmUsIGFkZCwgcXMsIG9uLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJvdXNlbCwgbmV4dCwgcHJldiwgY291bnRlciwgcHJvZHVjdEltYWdlcywgdmFyaWFudFRpdGxlLCBidG5zLCB0aHVtYiB9ID1cbiAgICBjaG9venkobm9kZSlcblxuICBsZXQgZW1ibGFcblxuICBjb25zdCBpbWFnZXMgPSBKU09OLnBhcnNlKHByb2R1Y3RJbWFnZXM/LmlubmVySFRNTCk/LmltYWdlc1xuICBpbWFnZXMuZm9yRWFjaCgoZWwpID0+IHt9KVxuXG4gIGNvbnN0IGluaXRFbWJsYSA9ICgpID0+IHtcbiAgICBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHsgbG9vcDogdHJ1ZSwgc2tpcFNuYXBzOiBmYWxzZSB9KVxuXG4gICAgaWYgKG5leHQgJiYgcHJldikge1xuICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAgIH1cblxuICAgIGxldCB2YXJpYW50SW1hZ2VzID0gcXNhKCcucHJvZHVjdC1pbWcnKVxuXG4gICAgYnRucy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgLy9yZW5kZXIgYnV0dG9uc1xuICAgIHZhcmlhbnRJbWFnZXMuZm9yRWFjaCgoaW1nLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcsIGluZGV4KVxuICAgICAgICBlbWJsYS5zY3JvbGxUbyhpbmRleClcbiAgICAgIH0pXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWwtZG90JylcbiAgICAgIGJ0bnMuYXBwZW5kQ2hpbGQoYnRuKVxuICAgIH0pXG5cbiAgICBhZGQocXMoJy5jYXJvdXNlbC1kb3Q6Zmlyc3QtY2hpbGQnKSwgJ2lzLWFjdGl2ZScpXG5cbiAgICBlbWJsYS5vbignc2VsZWN0JywgKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgICAgcmVtb3ZlKHFzKCcuY2Fyb3VzZWwtZG90LmlzLWFjdGl2ZScpLCAnaXMtYWN0aXZlJylcbiAgICAgICAgYWRkKFxuICAgICAgICAgIHFzKFxuICAgICAgICAgICAgYC5jYXJvdXNlbC1kb3Q6bnRoLWNoaWxkKCR7ZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCkgKyAxfSlgLFxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICksXG4gICAgICAgICAgJ2lzLWFjdGl2ZSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0RW1ibGEoKVxuXG4gIGN0eC5vbigndmFyaWFudDpjaGFuZ2UnLCAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRWYXJpYW50ID0gdmFyaWFudFRpdGxlLmlubmVySFRNTFxuXG4gICAgY2Fyb3VzZWwuaW5uZXJIVE1MID0gJydcblxuICAgIC8vcmVuZGVyIHZhcmlhbnQgaW1hZ2VzXG4gICAgY2Fyb3VzZWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBzZWxlY3Qtbm9uZSB3LWZ1bGwgaC1bMTAwdnddIG06aC1oZXJvIG06bWluLWgtW2NhbGMoMTAwdmgtMTNyZW0pXVwiPlxuICAgICAgICAke2ltYWdlc1xuICAgICAgICAgIC5tYXAoKGltZykgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpbWcuYWx0LnRvTG93ZXJDYXNlKCkgPT0gY3VycmVudFZhcmlhbnQgfHxcbiAgICAgICAgICAgICAgaW1nLmFsdC50b0xvd2VyQ2FzZSgpID09ICdhbGwnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgcHJvZHVjdC1pbWcgbTpweC0wIHJlbGF0aXZlIG1pbi13LVsxMDAlXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgYWJzb2x1dGUgbGVmdC0wIHRvcC0wXCIgc3JjPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTIvNzA2MS85NDU2LyR7aW1nLnNyY31cIiBhbHQ9XCIke2ltZy5hbHR9XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldCwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgIC8vcmVzZXQgY2Fyb3VzZWxcbiAgICBpZiAoZW1ibGEpIHtcbiAgICAgIGVtYmxhLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIC8vaW5pdGlhbGl6ZSBjYXJvdXNlbFxuICAgIGluaXRFbWJsYSgpXG4gIH0pXG5cbiAgb24odGh1bWIsICdjbGljaycsIChlKSA9PiB7XG4gICAgZW1ibGEuc2Nyb2xsVG8ocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCAtIDEpKVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBxcywgb24sIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBxdWFudGl0eSwgcmVtb3ZlLCBhZGQgfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IG1pbiA9IDFcbiAgY29uc3QgbWF4ID0gMTAwMFxuXG4gIGxldCBjb3VudCA9IDFcblxuICBjb25zb2xlLmxvZygnY291bnRlcicpXG5cbiAgY29uc3Qgc2V0ID0gKGkpID0+IHtcbiAgICBjb3VudCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4oaSwgbWF4IHx8IDEwMDAwKSlcblxuICAgIHF1YW50aXR5LmlubmVySFRNTCA9IGNvdW50XG4gICAgcXVhbnRpdHkudmFsdWUgPSBjb3VudFxuICB9XG5cbiAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXQoLS1jb3VudClcblxuICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKVxuICB9KVxuXG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0KCsrY291bnQpXG5cbiAgICBjb25zb2xlLmxvZygnYWRkJylcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyByZW1vdmUsIGFkZCwgb24sIHFzLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgb3B0aW9uU3ViLCBvcHRpb25PbmUsIG9wdGlvbldyYXAgfSA9IGNob296eShub2RlKVxuXG4gIGxldCBhZGRQcmljZSA9IHFzYSgnLmpzLWFkZFByaWNlJylcblxuICBpZiAob3B0aW9uU3ViKSB7XG4gICAgb24ob3B0aW9uU3ViLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICBhZGQocXMoJy5wcm9kdWN0LXZhcmlhbnQtd3JhcCcpLCAnaXMtc3Vic2NyaXB0aW9uJylcbiAgICAgIHJlbW92ZShvcHRpb25XcmFwLCAnc2VsZWN0ZWQtb25lJylcbiAgICAgIGFkZChvcHRpb25XcmFwLCAnc2VsZWN0ZWQtc3ViJylcbiAgICAgIGFkZChvcHRpb25TdWIsICdhY3RpdmUnKVxuICAgICAgcmVtb3ZlKG9wdGlvbk9uZSwgJ2FjdGl2ZScpXG5cbiAgICAgIGlmIChhZGRQcmljZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFkZFByaWNlLmZvckVhY2goKHByaWNlKSA9PiB7XG4gICAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gYCQke29wdGlvblN1Yi5kYXRhc2V0LnByaWNlfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb24ob3B0aW9uT25lLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmUocXMoJy5wcm9kdWN0LXZhcmlhbnQtd3JhcCcpLCAnaXMtc3Vic2NyaXB0aW9uJylcbiAgICAgIGFkZChvcHRpb25XcmFwLCAnc2VsZWN0ZWQtb25lJylcbiAgICAgIHJlbW92ZShvcHRpb25XcmFwLCAnc2VsZWN0ZWQtc3ViJylcbiAgICAgIHJlbW92ZShvcHRpb25TdWIsICdhY3RpdmUnKVxuICAgICAgYWRkKG9wdGlvbk9uZSwgJ2FjdGl2ZScpXG5cbiAgICAgIGlmIChhZGRQcmljZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFkZFByaWNlLmZvckVhY2goKHByaWNlKSA9PiB7XG4gICAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gYCQke29wdGlvbk9uZS5kYXRhc2V0LnByaWNlfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIHFzLCBxc2EsIG9uLCBoYXMsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgZ3NhcCwgRXhwbyB9IGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7XG4gICAgYWN0aXZlRnJlcXVlbmN5LFxuICAgIGNvbnRlbnQsXG4gICAgY29udGVudFdyYXAsXG4gICAgdG9nZ2xlRnJlcXVlbmN5LFxuICAgIGFycm93LFxuICAgIGZyZXF1ZW5jeU9wdGlvbixcbiAgICBzdWJPcHRpb24sXG4gICAgZnJlcXVlbmN5V3JhcCxcbiAgfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IHRvZ2dsZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50Lm9mZnNldEhlaWdodFxuXG4gICAgdG9nZ2xlKGNvbnRlbnRXcmFwLCAnYWN0aXZlJylcbiAgICB0b2dnbGUoYXJyb3csICdyb3RhdGUtOTAnKVxuICAgIHRvZ2dsZShhcnJvdywgJy1yb3RhdGUtOTAnKVxuXG4gICAgaWYgKGhhcyhjb250ZW50V3JhcCwgJ2FjdGl2ZScpKSB7XG4gICAgICBjb250ZW50V3JhcC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50SGVpZ2h0ICsgMTB9cHhgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnRXcmFwLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnXG4gICAgfVxuICB9XG5cbiAgb24odG9nZ2xlRnJlcXVlbmN5LCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIHRvZ2dsZU9wdGlvbnMoKVxuICB9KVxuXG4gIG9uKGZyZXF1ZW5jeU9wdGlvbiwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0b2dnbGVPcHRpb25zKClcblxuICAgIHFzYSgnLmpzLWZyZXF1ZW5jeU9wdGlvbicsIG5vZGUpLmZvckVhY2goKG9wdCkgPT4ge1xuICAgICAgcmVtb3ZlKG9wdCwgJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIGFkZChlLnRhcmdldCwgJ2FjdGl2ZScpXG5cbiAgICBsZXQgY3VyT3B0aW9uID0gZS50YXJnZXQuZGF0YXNldC5pZFxuXG4gICAgYWN0aXZlRnJlcXVlbmN5LmlubmVySFRNTCA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcbiAgICB0b2dnbGVGcmVxdWVuY3kuZGF0YXNldC5pZCA9IGN1ck9wdGlvblxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBxcywgcXNhLCBvbiwgaGFzLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgb3B0aW9uLCB2YXJpYW50VGl0bGUsIHN3YXRjaCB9ID0gY2hvb3p5KG5vZGUpXG4gIGxldCBhZGRCdG4gPSBxc2EoJy5qcy1hZGQtdG8tY2FydCcpXG4gIGxldCBvcHRpb25Hcm91cHMgPSBxc2EoJy5qcy1vcHRpb25Hcm91cCcpXG5cbiAgbGV0IHNlbGVjdGVkU3dhdGNoXG4gIGxldCBvcHRpb25zID0gcXNhKCcuanMtdmFyaWFudE9wdGlvbicsIG5vZGUpXG5cbiAgY29uc3QgdXBkYXRlVmFyaWFudCA9ICgpID0+IHtcbiAgICBpZiAoIXFzKCcuanMtc3dhdGNoJykpIHJldHVyblxuXG4gICAgc2VsZWN0ZWRTd2F0Y2ggPSBxcygnLmpzLXN3YXRjaC5hY3RpdmUnLCBub2RlKT8uZGF0YXNldD8udGl0bGUgfHwgbnVsbFxuXG4gICAgLy8gLy9maW5kIHZhcmlhbnQgdGhhdCBtYXRjaGVzIHRpdGxlIGFuZCBzaXplXG4gICAgY29uc3QgbmV3VmFyaWFudCA9IG9wdGlvbnMuZmluZChcbiAgICAgICh2YXJpYW50KSA9PiB2YXJpYW50LmRhdGFzZXQudGl0bGUgPT09IHNlbGVjdGVkU3dhdGNoXG4gICAgKVxuXG4gICAgLy9jbGVhciBhbGwgb3B0aW9uc1xuICAgIG9wdGlvbnMuZm9yRWFjaCgoc2VsZWN0ZWRWYXJpYW50KSA9PlxuICAgICAgc2VsZWN0ZWRWYXJpYW50LnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKVxuICAgIClcblxuICAgIC8vc2VsZWN0IG5ldyB2YXJpYW50XG4gICAgaWYgKG5ld1ZhcmlhbnQpIG5ld1ZhcmlhbnQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG5cbiAgICAvL2NvbmZpZ3VyZSBidXR0b24gd2l0aCBpbnZlbnRvcnlcbiAgICBpZiAoIW5ld1ZhcmlhbnQgfHwgbmV3VmFyaWFudC5kYXRhc2V0LmludmVudG9yeSA8IDEpIHtcbiAgICAgIGFkZEJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICBidG4uaW5uZXJIVE1MID0gJ091dCBPZiBTdG9jaydcbiAgICAgICAgYWRkKGJ0biwgJ29vcycpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGAke1xuICAgICAgICAgIGJ0bi5kYXRhc2V0LnByZW9yZGVyID09ICd0cnVlJyA/ICdQcmUtT3JkZXInIDogJ0FkZCBUbyBDYXJ0J1xuICAgICAgICB9IHwgJHtidG4uZGF0YXNldC5wcmljZX1gXG4gICAgICAgIHJlbW92ZShidG4sICdvb3MnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YXJpYW50U2VsZWN0ID0gKGN1clRpdGxlKSA9PiB7XG4gICAgLy9jbGVhciBzd2F0Y2hlc1xuICAgIHFzYSgnLmpzLXN3YXRjaCcpLmZvckVhY2goKHN3YXRjaCkgPT4ge1xuICAgICAgcmVtb3ZlKHN3YXRjaCwgJ2FjdGl2ZScpXG4gICAgICBzd2F0Y2guc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBmYWxzZSlcbiAgICB9KVxuXG4gICAgLy9zZWxlY3QgbmV3IHN3YXRjaFxuICAgIGxldCBzZWxlY3RlZFN3YXRjaCA9IHFzKGAuanMtc3dhdGNoW2RhdGEtdGl0bGU9XCIke2N1clRpdGxlfVwiXWAsIG5vZGUpXG4gICAgYWRkKHNlbGVjdGVkU3dhdGNoLCAnYWN0aXZlJylcbiAgICBzZWxlY3RlZFN3YXRjaC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsIHRydWUpXG5cbiAgICB2YXJpYW50VGl0bGUuaW5uZXJIVE1MID0gY3VyVGl0bGVcblxuICAgIGN0eC5lbWl0KCd2YXJpYW50OmNoYW5nZScpXG4gIH1cblxuICBvbihzd2F0Y2gsICdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGhhcyhlLnRhcmdldCwgJ2FjdGl2ZScpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgY3VyVGl0bGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKVxuXG4gICAgdmFyaWFudFNlbGVjdChjdXJUaXRsZSlcbiAgICB1cGRhdGVWYXJpYW50KClcbiAgfSlcblxuICAvL3VwZGF0ZSB2YXJpYW50IG9uIGZpcnN0IGxvYWRcbiAgaWYgKG9wdGlvbnMubGVuZ3RoID4gMSkgdXBkYXRlVmFyaWFudCgpXG5cbiAgY3R4Lm9uKCd2YXJpYW50OnVwZGF0ZScsICgpID0+IHtcbiAgICB1cGRhdGVWYXJpYW50KClcbiAgfSlcblxuICAvL25hdiBiYXIgc2VsZWN0b3JcbiAgLy8gcXNhKCcuanMtbmF2T3B0aW9uc1tkYXRhLWdyb3VwXScpLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gIC8vICAgbGV0IHN3YXRjaFRvZ2dsZSA9IHFzKCcuanMtbWVudVN3YXRjaCcsIGdyb3VwKVxuXG4gIC8vICAgb24oc3dhdGNoVG9nZ2xlLCAnY2xpY2snLCAoZSkgPT4ge1xuICAvLyAgICAgbGV0IGN1ckdyb3VwID0gZS50YXJnZXQuY2xvc2VzdCgnLmpzLW5hdk9wdGlvbnMnKVxuXG4gIC8vICAgICB0b2dnbGUocXMoJy5qcy1uYXZPcHRpb25Hcm91cCcsIGN1ckdyb3VwKSwgJ2hpZGRlbicpXG4gIC8vICAgICB0b2dnbGUocXMoJy5qcy1jaGV2cm9uTmF2JywgY3VyR3JvdXApLCAncm90YXRlLTE4MCcpXG4gIC8vICAgfSlcbiAgLy8gfSlcblxuICAvLyBxc2EoJy5qcy1zd2F0Y2hOYXYnKS5mb3JFYWNoKChuYXZTd2F0Y2gpID0+IHtcbiAgLy8gICBvbihuYXZTd2F0Y2gsICdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICBsZXQgY3VyVGl0bGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKVxuICAvLyAgICAgbGV0IGNvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1uYXZPcHRpb25zW2RhdGEtZ3JvdXBdJylcbiAgLy8gICAgIGxldCBjdXJHcm91cCA9IGNvbnRhaW5lci5kYXRhc2V0Py5ncm91cFxuXG4gIC8vICAgICB0b2dnbGUoZS50YXJnZXQuY2xvc2VzdCgnLmpzLW5hdk9wdGlvbkdyb3VwJyksICdoaWRkZW4nKVxuICAvLyAgICAgdG9nZ2xlKHFzKCcuanMtY2hldnJvbk5hdicsIGNvbnRhaW5lciksICdyb3RhdGUtMTgwJylcblxuICAvLyAgICAgLy9oaWRlIHNlbGVjdGVkIGZyb20gbGlzdFxuICAvLyAgICAgcXNhKCcuanMtc3dhdGNoTmF2JywgY29udGFpbmVyKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIC8vICAgICAgIGlmIChpdGVtLmRhdGFzZXQudGl0bGUgPT09IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpIHtcbiAgLy8gICAgICAgICBhZGQoaXRlbSwgJ2hpZGRlbicpXG4gIC8vICAgICAgICAgcXMoJy5qcy1zZWxlY3RlZE5hdk9wdGlvbicsIGNvbnRhaW5lcikuaW5uZXJIVE1MID0gaXRlbS5kYXRhc2V0LnRpdGxlXG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgcmVtb3ZlKGl0ZW0sICdoaWRkZW4nKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuXG4gIC8vICAgICB2YXJpYW50U2VsZWN0KGN1clRpdGxlLCBjdXJHcm91cClcbiAgLy8gICAgIHVwZGF0ZVZhcmlhbnQoKVxuICAvLyAgIH0pXG4gIC8vIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgb24sIHFzLCBhZGQsIHJlbW92ZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAna2xhdml5by1zdWJzY3JpYmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGZvcm1Db250ZW50LCBzdWNjZXNzLCBzdWJtaXQgfSA9IGNob296eShub2RlKVxuXG4gIG9uKHN1Ym1pdCwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBsaXN0SWQgPSAnV3pHNzJzJ1xuICAgIGxldCBlbWFpbCA9IHFzKCcuanMtZW1haWwnLCBub2RlKS52YWx1ZVxuXG4gICAgc3Vic2NyaWJlKGxpc3RJZCwgZW1haWwsIHt9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmVtb3ZlKHN1Y2Nlc3MsICdoaWRkZW4nKVxuICAgICAgYWRkKGZvcm1Db250ZW50LCAnaGlkZGVuJylcblxuICAgICAgaWYgKHFzKCcuanMtZm9ybVRpdGxlJykpIHtcbiAgICAgICAgYWRkKHFzKCcuanMtZm9ybVRpdGxlJyksICdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICdlbWJsYS1jYXJvdXNlbCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgY2Fyb3VzZWwsIG5leHQsIHByZXYsIGNvdW50ZXIsIGFjdGl2ZUluZGV4IH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgdHJpbVNuYXBzOiB0cnVlLFxuICAgIGNvbnRhaW5TY3JvbGw6IHRydWUsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICB9KVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcblxuICAgIC8vIG9uKG5leHQsICdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGVtYmxhLnNjcm9sbE5leHRcbiAgICAvLyB9KVxuICB9XG5cbiAgaWYgKGNvdW50ZXIpIHtcbiAgICBvbihjb3VudGVyLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZW1ibGEuc2Nyb2xsVG8oZS50YXJnZXQuZGF0YXNldC5pbmRleClcbiAgICB9KVxuICB9XG5cbiAgZW1ibGEub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICBpZiAoY291bnRlcikge1xuICAgICAgcmVtb3ZlKGNvdW50ZXIsICdpcy1hY3RpdmUnKVxuICAgICAgYWRkKFxuICAgICAgICBxcyhgLmpzLWNvdW50ZXJbZGF0YS1pbmRleD1cIiR7ZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCl9XCJdYCwgbm9kZSksXG4gICAgICAgICdpcy1hY3RpdmUnXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4KSB7XG4gICAgICBhY3RpdmVJbmRleC5pbm5lckhUTUwgPSBlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKSArIDFcbiAgICB9XG4gIH0pXG5cbiAgLy8gcmV0dXJuICgpID0+IHtcbiAgLy8gICBpZiAobmV4dCkge1xuICAvLyAgICAgICBuZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gIC8vICAgICAgIHByZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcbiAgLy8gICB9XG4gIC8vIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwicGljb2FwcFwiO1xuaW1wb3J0IGNob296eSBmcm9tIFwiY2hvb3p5XCI7XG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EgfSBmcm9tIFwiQHNlbGZhd2FyZS9tYXJ0aGFcIjtcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gXCJlbWJsYS1jYXJvdXNlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJvdXNlbCwgbmV4dCwgcHJldiwgY291bnRlciwgYWN0aXZlSW5kZXggfSA9IGNob296eShub2RlKTtcblxuICBjb25zdCBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgdHJpbVNuYXBzOiB0cnVlLFxuICAgIGNvbnRhaW5TY3JvbGw6IHRydWUsXG4gICAgYWxpZ246IFwic3RhcnRcIixcbiAgfSk7XG5cbiAgZW1ibGEub24oXCJzZWxlY3RcIiwgKCkgPT4ge30pO1xufSk7XG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICAvLyBPcHRpb25zIGZvciB0aGUgSW50ZXJzZWN0aW9uIE9ic2VydmVyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcm9vdDogbnVsbCxcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IDAsIC8vIEFkanVzdCBhcyBuZWVkZWQsIDAuNSBtZWFucyBhdCBsZWFzdCA1MCUgb2YgdGhlIHZpZGVvIG11c3QgYmUgaW4gdmlld1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgdmlkZW8gY29tZXMgaW50byB2aWV3XG4gIGZ1bmN0aW9uIGhhbmRsZUludGVyc2VjdGlvbihlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAvLyBMb2FkIHRoZSB2aWRlb1xuICAgICAgICBub2RlLnNyYyA9IG5vZGUuZGF0YXNldC52aWRlb1xuICAgICAgICBub2RlLmF1dG9wbGF5ID0gdHJ1ZVxuICAgICAgICBub2RlLmxvb3AgPSB0cnVlXG5cbiAgICAgICAgLy8gVW5vYnNlcnZlIHRvIHByZXZlbnQgZnVydGhlciB1bm5lY2Vzc2FyeSBjaGVja3NcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKG5vZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXVzZSB0aGUgdmlkZW8gd2hlbiBpdCBnb2VzIG91dCBvZiB2aWV3XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKVxuICAgICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5wYXVzZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXIgd2l0aCB0aGUgY2FsbGJhY2sgYW5kIG9wdGlvbnNcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlSW50ZXJzZWN0aW9uLCBvcHRpb25zKVxuXG4gIC8vIE9ic2VydmUgdGhlIHZpZGVvIHBsYWNlaG9sZGVyXG4gIG9ic2VydmVyLm9ic2VydmUobm9kZSlcbn0pXG4iLCJpbXBvcnQgb3BlcmF0b3IgZnJvbSAnb3BlcmF0b3InXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG4vKipcbiAqIG9wZXJhdG9yIGlzIGEgdGlueSBcIlBKQVhcIiBsaWJyYXJ5LCBwbGVhc2UgaGF2ZSBhIGxvb2sgYXQgdGhlIGRvY3MgZm9yXG4gKiBtb3JlIGluZm9cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc3RyYXR0b25iYWlsZXkvb3BlcmF0b3JcbiAqL1xuY29uc3Qgcm91dGVyID0gb3BlcmF0b3IoJyNNYWluQ29udGVudCcsIFtcbiAgLyoqXG4gICAqIGNyZWF0ZXMgYSBwYWdlIHRyYW5zaXRpb25cbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXN0cmF0dG9uYmFpbGV5L29wZXJhdG9yI3RyYW5zaXRpb24tYW5pbWF0aW9uXG4gICAqL1xuICAoKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgICBjb25zdCBlbnRlciA9ICgpID0+IHtcbiAgICAgICAgcmVzKClcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgICAgfVxuXG4gICAgICB0bC50bygnbWFpbicsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgb25Db21wbGV0ZTogZW50ZXIgfSkudG8oXG4gICAgICAgICdtYWluJyxcbiAgICAgICAge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pLFxuICAvLyB7XG4gIC8vICAgcGF0aDogJy9hY2NvdW50LyonLFxuICAvLyAgIGlnbm9yZTogdHJ1ZSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHBhdGg6ICcvYWNjb3VudC8nLFxuICAvLyAgIGlnbm9yZTogdHJ1ZSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHBhdGg6ICcvYmxvZ3MvKicsXG4gIC8vICAgaWdub3JlOiB0cnVlLFxuICAvLyB9LFxuICB7XG4gICAgcGF0aDogJyonLFxuICAgIGlnbm9yZTogdHJ1ZSxcbiAgfSxcbl0pXG5cbnJvdXRlci5vbignYWZ0ZXInLCAoeyBwYXRobmFtZSB9KSA9PiB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHBhdGhuYW1lKVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGFnZXRpdGxlXScpICE9IHVuZGVmaW5lZCkge1xuICAgIGxldCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wYWdldGl0bGVdJykuZGF0YXNldC5wYWdldGl0bGVcbiAgICBsZXQgc2hvcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2hvcHRpdGxlXScpLmRhdGFzZXQuc2hvcHRpdGxlXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgJHtwYWdlVGl0bGV9YFxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnRpdGxlID0gJ1Byb21pc2VkIEdyb3VuZHMnXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIiwiaW1wb3J0IGZldGNoIGZyb20gJ3VuZmV0Y2gnXG5pbXBvcnQgYXBwIGZyb20gJ2Jhc2Uvc2NyaXB0cy9hcHAuanMnXG5pbXBvcnQgeyBxcyB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVmFyaWFudCh2YXJpYW50LCBxdWFudGl0eSwgc2VsbGluZ19wbGFuKSB7XG4gIGNvbnN0IG51bUF2YWlsYWJsZSA9XG4gICAgdmFyaWFudC5pbnZlbnRvcnlfcG9saWN5ID09PSAnZGVueScgJiZcbiAgICB2YXJpYW50LmludmVudG9yeV9tYW5hZ2VtZW50ID09PSAnc2hvcGlmeSdcbiAgICAgID8gdmFyaWFudC5pbnZlbnRvcnlfcXVhbnRpdHlcbiAgICAgIDogbnVsbCAvLyBudWxsIG1lYW5zIHRoZXkgY2FuIGFkZCBhcyBtYW55IGFzIHRoZXkgd2FudFxuXG4gIHJldHVybiBmZXRjaENhcnQoKS50aGVuKCh7IGl0ZW1zIH0pID0+IHtcbiAgICBjb25zdCBleGlzdGluZyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdmFyaWFudC5pZClbMF0gfHwge31cbiAgICBjb25zdCBudW1SZXF1ZXN0ZWQgPSAoZXhpc3RpbmcucXVhbnRpdHkgfHwgMCkgKyBxdWFudGl0eVxuXG4gICAgaWYgKG51bUF2YWlsYWJsZSAhPT0gbnVsbCAmJiBudW1SZXF1ZXN0ZWQgPiBudW1BdmFpbGFibGUpIHtcbiAgICAgIGNvbnN0IGVyciA9IGBUaGVyZSBhcmUgb25seSAke251bUF2YWlsYWJsZX0gb2YgdGhhdCBwcm9kdWN0IGF2YWlsYWJsZSwgcmVxdWVzdGVkICR7bnVtUmVxdWVzdGVkfS5gXG4gICAgICBhcHAuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYWRkSXRlbUJ5SWQodmFyaWFudC5pZCwgcXVhbnRpdHksIHNlbGxpbmdfcGxhbilcbiAgICB9XG4gIH0pXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBZGRvbihpZCwgcXVhbnRpdHkpIHtcbi8vICAgcmV0dXJuIGZldGNoQ2FydCgpLnRoZW4oKHsgaXRlbXMgfSkgPT4ge1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIGlmIChpdGVtc1tpXS52YXJpYW50X2lkID09PSBwYXJzZUludChpZCkpIHtcbi8vICAgICAgICAgcmV0dXJuIGNoYW5nZUFkZG9uKGkgKyAxLCBxdWFudGl0eSkgLy8gc2hvcGlmeSBjYXJ0IGlzIGEgMS1iYXNlZCBpbmRleFxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfSlcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFkZG9uKGlkLCBzZWxsaW5nX3BsYW4sIHF1YW50aXR5LCBsaW5rKSB7XG4gIHJldHVybiBmZXRjaENhcnQoKS50aGVuKCh7IGl0ZW1zIH0pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvL2NoZWNrIGlmIGl0ZW0gaXMgcmVjdXJyaW5nXG4gICAgICBpZiAoc2VsbGluZ19wbGFuICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGl0ZW1zW2ldLnNlbGxpbmdfcGxhbl9hbGxvY2F0aW9uKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXRlbXNbaV0udmFyaWFudF9pZCA9PT0gcGFyc2VJbnQoaWQpICYmXG4gICAgICAgICAgICBpdGVtc1tpXS5zZWxsaW5nX3BsYW5fYWxsb2NhdGlvbi5zZWxsaW5nX3BsYW4uaWQgPT09XG4gICAgICAgICAgICAgIHBhcnNlSW50KHNlbGxpbmdfcGxhbilcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VBZGRvbihpICsgMSwgcXVhbnRpdHksIGxpbmspIC8vIHNob3BpZnkgY2FydCBpcyBhIDEtYmFzZWQgaW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVtc1tpXS52YXJpYW50X2lkID09PSBwYXJzZUludChpZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hhbmdlQWRkb24oaSArIDEsIHF1YW50aXR5LCBsaW5rKSAvLyBzaG9waWZ5IGNhcnQgaXMgYSAxLWJhc2VkIGluZGV4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBZGRvbihpZCkge1xuLy8gICByZXR1cm4gdXBkYXRlQWRkb24oaWQsIDApXG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCBsaW5rKSB7XG4gIHJldHVybiB1cGRhdGVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCAwLCBsaW5rKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBZGRvbihsaW5lLCBxdWFudGl0eSwgbGluaykge1xuICBhcHAuZW1pdCgnY2FydDp1cGRhdGluZycpXG5cbiAgcmV0dXJuIGZldGNoKCcvY2FydC9jaGFuZ2UuanMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsaW5lLCBxdWFudGl0eSB9KSxcbiAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChjYXJ0KSA9PiB7XG4gICAgICBhcHAuaHlkcmF0ZSh7IGNhcnQ6IGNhcnQgfSlcbiAgICAgIGFwcC5lbWl0KCdjYXJ0OnVwZGF0ZWQnLCB7IGNhcnQ6IGNhcnQgfSlcblxuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rXG4gICAgICB9XG4gICAgICByZXR1cm4gY2FydFxuICAgIH0pXG59XG5cbi8qKlxuICogV2FybmluZzogdGhpcyBkb2VzIG5vdCBjaGVjayBhdmFpbGFibGUgcHJvZHVjdHMgZmlyc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1CeUlkKGlkLCBxdWFudGl0eSwgc2VsbGluZ19wbGFuKSB7XG4gIGFwcC5lbWl0KCdjYXJ0OnVwZGF0aW5nJylcblxuICByZXR1cm4gZmV0Y2goJy9jYXJ0L2FkZC5qcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkLCBxdWFudGl0eSwgc2VsbGluZ19wbGFuIH0pLFxuICB9KVxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAudGhlbigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoQ2FydCgpLnRoZW4oKGNhcnQpID0+IHtcbiAgICAgICAgbGV0IHBpeCA9IHFzKCcuY29sbGVjdGlvbi1waXgnKVxuICAgICAgICBhcHAuaHlkcmF0ZSh7IGNhcnQ6IGNhcnQgfSlcbiAgICAgICAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRlZCcpXG4gICAgICAgIGlmIChwaXggPT0gdW5kZWZpbmVkIHx8IGFwcC5nZXRTdGF0ZSgpLmNhcnQuaXRlbV9jb3VudCA+PSA2KSB7XG4gICAgICAgICAgYXBwLmVtaXQoJ2NhcnQ6dG9nZ2xlJywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjYXJ0T3BlbjogIXN0YXRlLmNhcnRPcGVuLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gYXBwLmVtaXQoJ3VwZGF0ZWQnLCB7IGl0ZW0sIGNhcnQgfSlcbiAgICAgICAgcmV0dXJuIHsgaXRlbSwgY2FydCB9XG4gICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhcnQoKSB7XG4gIHJldHVybiBmZXRjaCgnL2NhcnQuanMnLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG59XG4iLCIvKipcbiAqIEN1cnJlbmN5IEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBIGNvbGxlY3Rpb24gb2YgdXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGhlbHAgd2l0aCBjdXJyZW5jeSBmb3JtYXR0aW5nXG4gKlxuICogQ3VycmVudCBjb250ZW50c1xuICogLSBmb3JtYXRNb25leSAtIFRha2VzIGFuIGFtb3VudCBpbiBjZW50cyBhbmQgcmV0dXJucyBpdCBhcyBhIGZvcm1hdHRlZCBkb2xsYXIgdmFsdWUuXG4gKlxuICovXG5cbi8qKlxuICogRm9ybWF0IG1vbmV5IHZhbHVlcyBiYXNlZCBvbiB5b3VyIHNob3AgY3VycmVuY3kgc2V0dGluZ3NcbiAqIEBwYXJhbSAge051bWJlcnxzdHJpbmd9IGNlbnRzIC0gdmFsdWUgaW4gY2VudHMgb3IgZG9sbGFyIGFtb3VudCBlLmcuIDMwMCBjZW50c1xuICogb3IgMy4wMCBkb2xsYXJzXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGZvcm1hdCAtIHNob3AgbW9uZXlfZm9ybWF0IHNldHRpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdmFsdWUgLSBmb3JtYXR0ZWQgdmFsdWVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoY2VudHMsIGZvcm1hdCA9ICd7e2Ftb3VudH19Jykge1xuICBpZiAodHlwZW9mIGNlbnRzID09PSAnc3RyaW5nJykge1xuICAgIGNlbnRzID0gY2VudHMucmVwbGFjZSgnLicsICcnKVxuICB9XG5cbiAgbGV0IHZhbHVlID0gJydcbiAgY29uc3QgcGxhY2Vob2xkZXJSZWdleCA9IC9cXHtcXHtcXHMqKFxcdyspXFxzKlxcfVxcfS9cblxuICBmdW5jdGlvbiBmb3JtYXRXaXRoRGVsaW1pdGVycyhudW1iZXIsIHByZWNpc2lvbiwgdGhvdXNhbmRzLCBkZWNpbWFsKSB7XG4gICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDJcbiAgICB0aG91c2FuZHMgPSB0aG91c2FuZHMgfHwgJywnXG4gICAgZGVjaW1hbCA9IGRlY2ltYWwgfHwgJy4nXG5cbiAgICBpZiAoaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBudW1iZXIgPSAobnVtYmVyIC8gMTAwLjApLnRvRml4ZWQocHJlY2lzaW9uKVxuXG4gICAgY29uc3QgcGFydHMgPSBudW1iZXIuc3BsaXQoJy4nKVxuICAgIGNvbnN0IGRvbGxhcnNBbW91bnQgPSBwYXJ0c1swXS5yZXBsYWNlKFxuICAgICAgLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZyxcbiAgICAgICckMScgKyB0aG91c2FuZHNcbiAgICApXG4gICAgY29uc3QgY2VudHNBbW91bnQgPSBwYXJ0c1sxXSA/IGRlY2ltYWwgKyBwYXJ0c1sxXSA6ICcnXG5cbiAgICBpZiAoY2VudHNBbW91bnQgPiAwKSB7XG4gICAgICByZXR1cm4gZG9sbGFyc0Ftb3VudCArIGNlbnRzQW1vdW50XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkb2xsYXJzQW1vdW50XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChmb3JtYXQubWF0Y2gocGxhY2Vob2xkZXJSZWdleClbMV0pIHtcbiAgICBjYXNlICdhbW91bnQnOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYW1vdW50X25vX2RlY2ltYWxzJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDApXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF93aXRoX3NwYWNlX3NlcGFyYXRvcic6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAyLCAnICcsICcuJylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYW1vdW50X25vX2RlY2ltYWxzX3dpdGhfY29tbWFfc2VwYXJhdG9yJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDAsICcsJywgJy4nKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhbW91bnRfbm9fZGVjaW1hbHNfd2l0aF9zcGFjZV9zZXBhcmF0b3InOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMCwgJyAnKVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXQucmVwbGFjZShwbGFjZWhvbGRlclJlZ2V4LCB2YWx1ZSlcbn1cbiIsIi8qKlxuICogSW1hZ2UgSGVscGVyIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEEgY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgdGhhdCBoZWxwIHdpdGggYmFzaWMgaW1hZ2Ugb3BlcmF0aW9ucy5cbiAqXG4gKi9cblxuLyoqXG4gKiBQcmVsb2FkcyBhbiBpbWFnZSBpbiBtZW1vcnkgYW5kIHVzZXMgdGhlIGJyb3dzZXJzIGNhY2hlIHRvIHN0b3JlIGl0IHVudGlsIG5lZWRlZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpbWFnZXMgLSBBIGxpc3Qgb2YgaW1hZ2UgdXJsc1xuICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBBIHNob3BpZnkgaW1hZ2Ugc2l6ZSBhdHRyaWJ1dGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoaW1hZ2VzLCBzaXplKSB7XG4gIGlmICh0eXBlb2YgaW1hZ2VzID09PSAnc3RyaW5nJykge1xuICAgIGltYWdlcyA9IFtpbWFnZXNdXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbWFnZSA9IGltYWdlc1tpXVxuICAgIGxvYWRJbWFnZShnZXRTaXplZEltYWdlVXJsKGltYWdlLCBzaXplKSlcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGFuZCBjYWNoZXMgYW4gaW1hZ2UgaW4gdGhlIGJyb3dzZXJzIGNhY2hlLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBBbiBpbWFnZSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZShwYXRoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIG5ldyBJbWFnZSgpLnNyYyA9IHBhdGhcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIFNob3BpZnkgaW1hZ2UgYXR0cmlidXRlIHNpemVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltYWdlU2l6ZShzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgdmFyIG1hdGNoID0gc3JjLm1hdGNoKFxuICAgIC8uK18oKD86cGljb3xpY29ufHRodW1ifHNtYWxsfGNvbXBhY3R8bWVkaXVtfGxhcmdlfGdyYW5kZSl8XFxkezEsNH14XFxkezAsNH18eFxcZHsxLDR9KVtfXFwuQF0vXG4gIClcbiAgLyogZXNsaW5nLWVuYWJsZSAqL1xuXG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiBtYXRjaFsxXVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGEgU2hvcGlmeSBzaXplIGF0dHJpYnV0ZSB0byBhIFVSTFxuICpcbiAqIEBwYXJhbSBzcmNcbiAqIEBwYXJhbSBzaXplXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNpemVkSW1hZ2VVcmwoc3JjLCBzaXplKSB7XG4gIGlmIChzaXplID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNyY1xuICB9XG5cbiAgaWYgKHNpemUgPT09ICdtYXN0ZXInKSB7XG4gICAgcmV0dXJuIHJlbW92ZVByb3RvY29sKHNyYylcbiAgfVxuXG4gIHZhciBtYXRjaCA9IHNyYy5tYXRjaCgvXFwuKGpwZ3xqcGVnfGdpZnxwbmd8Ym1wfGJpdG1hcHx0aWZmfHRpZikoXFw/dj1cXGQrKT8kL2kpXG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIHByZWZpeCA9IHNyYy5zcGxpdChtYXRjaFswXSlcbiAgICB2YXIgc3VmZml4ID0gbWF0Y2hbMF1cblxuICAgIHJldHVybiByZW1vdmVQcm90b2NvbChwcmVmaXhbMF0gKyAnXycgKyBzaXplICsgc3VmZml4KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3RvY29sKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvaHR0cChzKT86LywgJycpXG59XG4iLCJpbXBvcnQgeyBxcywgcmVtb3ZlLCBhZGQgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZVNldHVwKCkge1xuICBsZXQgYW5ub3VuY2VCYXIgPSBxcygnLmpzLWFubm91bmNlQmFyJylcblxuICBpZiAoYW5ub3VuY2VCYXIpIHtcbiAgICBhZGQoYW5ub3VuY2VCYXIsICdoaWRkZW4nKVxuICB9XG5cbiAgaWYgKHFzKGAuanMtYW5ub3VuY2VCYXJbZGF0YS1wYWdlPVwiJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9XCJdYCkpIHtcbiAgICByZW1vdmUoXG4gICAgICBxcyhgLmpzLWFubm91bmNlQmFyW2RhdGEtcGFnZT1cIiR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfVwiXWApLFxuICAgICAgJ2hpZGRlbidcbiAgICApXG4gIH0gZWxzZSBpZiAocXMoYC5qcy1hbm5vdW5jZUJhcjpub3QoW2RhdGEtcGFnZV0pYCkpIHtcbiAgICByZW1vdmUocXMoYC5qcy1hbm5vdW5jZUJhcjpub3QoW2RhdGEtcGFnZV0pYCksICdoaWRkZW4nKVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJiYXNlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3b3JrZmxvd1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3b3JrZmxvd1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Jhc2Uvc2NyaXB0cy9iYXNlLmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9iYXNlL3N0eWxlcy9iYXNlLnNjc3NcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInBpY29hcHAiLCJhY2NvdW50TG9naW4iLCJhY2NvdW50QWRkcmVzc2VzIiwibGF6eSIsImhlYWRlciIsImNhcnREcmF3ZXIiLCJjYXJ0RHJhd2VySXRlbSIsInByb2R1Y3RDYXJvdXNlbCIsInByb2R1Y3QiLCJwcm9kdWN0Q291bnRlciIsInByb2R1Y3RWYXJpYW50IiwicHJvZHVjdE9wdGlvbnMiLCJjb2xsZWN0aW9uIiwiZmFxcyIsImNoZWNrb3V0IiwibmV3c2xldHRlciIsImNhcm91c2VsIiwiZm9vdGVyIiwiY29udGFjdCIsIm1hcnF1ZWUiLCJibG9nRmlsdGVyIiwidmlkZW8iLCJzaWdudXAiLCJiYWNraW5zdG9jayIsInByb2R1Y3RTdWJzY3JpcHRpb25zIiwiYWJvdXQiLCJoZXJvIiwiYmFubmVyIiwic29jaWFsIiwiY2FyZHMiLCJmYXFzSW1hZ2UiLCJzdGVwcyIsInN0YXRlIiwiY2FydE9wZW4iLCJjb21wb25lbnRzIiwiYmluZCIsInVwZGF0ZSIsImFwcCIsInJvdXRlciIsImZldGNoQ2FydCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicXMiLCJyZW1vdmUiLCJwYWdlU2V0dXAiLCJ2aCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZ2lzdGVyUGx1Z2luIiwib24iLCJ0aXRsZSIsInBhdGhuYW1lIiwidW5tb3VudCIsIm1vdW50IiwiZW1pdCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiY2FydCIsImh5ZHJhdGUiLCJjb21wb25lbnQiLCJjaG9venkiLCJhZGQiLCJxc2EiLCJ0b2dnbGUiLCJTY3JvbGxUb1BsdWdpbiIsIm5vZGUiLCJjdHgiLCJhbmNob3JzIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpbmRleCIsImFuY2hvciIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwiYXBwZW5kQ2hpbGQiLCJ0byIsImR1cmF0aW9uIiwic2Nyb2xsVG8iLCJ5Iiwib2Zmc2V0WSIsImVhc2UiLCJzZXRBY3RpdmUiLCJ0YXJnZXQiLCJ1dGlscyIsInRvQXJyYXkiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJvbkVudGVyIiwic2VsZiIsIm9uTGVhdmVCYWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImltZyIsIm9ubG9hZCIsInJlZnJlc2giLCJzZXRUaW1lb3V0IiwidHJpZ2dlcnMiLCJnZXRBbGwiLCJraWxsIiwiYWRkV3JhcCIsInRvZ2dsZUFkZCIsInRvZ2dsZUVkaXQiLCJlZGl0V3JhcCIsInVuZGVmaW5lZCIsImxvZ2luIiwicXVlcnlTZWxlY3RvciIsInJlY292ZXIiLCJyZWNvdmVyTGluayIsImNhbmNlbFJlY292ZXJMaW5rIiwicmVjb3ZlcklzVGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwibWF0Y2giLCJzdWNjZXNzTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXkiLCJlbWFpbCIsImJpcyIsImJpc2NvbnRlbnQiLCJzdWNjZXNzIiwiYmlzd3JhcCIsIm9wZW5iaXMiLCJjbG9zZWJpcyIsImZvcm1iaXMiLCJjdXJyZW50VmFyaWFudCIsInZhcmlhbnQiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwiYSIsInZhbHVlIiwicGxhdGZvcm0iLCJzdG9yZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImltYWdlcyIsImFsbEltYWdlcyIsIkpTT04iLCJwYXJzZSIsImFsbEJsb2NrcyIsInRoZW1lSW1hZ2VzIiwiY3VycmVudFRoZW1lIiwiYm9keSIsInRoZW1lIiwicHVzaCIsInNyYyIsImltYWdlIiwiZmlsdGVyVG9nZ2xlIiwiY2xlYXJGaWx0ZXIiLCJocmVmIiwiaW5jbHVkZXMiLCJ0YWciLCJzcGxpdCIsInRhcmdldFRhZyIsImVsIiwiRW1ibGFDYXJvdXNlbCIsIm5leHQiLCJwcmV2IiwiY291bnRlciIsImFjdGl2ZUluZGV4IiwiZW1ibGEiLCJsb29wIiwic2tpcFNuYXBzIiwidHJpbVNuYXBzIiwiY29udGFpblNjcm9sbCIsImFsaWduIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJzZWxlY3RlZFNjcm9sbFNuYXAiLCJzcGVlZCIsImdldFNpemVkSW1hZ2VVcmwiLCJpbWFnZVNpemUiLCJmb3JtYXRNb25leSIsIlBvd2VyNCIsInRsIiwidGltZWxpbmUiLCJYIiwiY3JlYXRlSXRlbSIsImlkIiwidmFyaWFudF9pZCIsInByb2R1Y3RfdGl0bGUiLCJwcmljZSIsImxpbmVfcHJpY2UiLCJvcmlnaW5hbF9wcmljZSIsIm9yaWdpbmFsX2xpbmVfcHJpY2UiLCJ2YXJpYW50X3RpdGxlIiwicXVhbnRpdHkiLCJpdGVtIiwic2VsbGluZ19wbGFuX2FsbG9jYXRpb24iLCJzZWxsaW5nX3BsYW4iLCJyZW5kZXJJdGVtcyIsIml0ZW1zIiwibGVuZ3RoIiwicmVkdWNlIiwibWFya3VwIiwib3ZlcmxheSIsImNsb3NlQnV0dG9uIiwic3VidG90YWwiLCJpdGVtc1Jvb3QiLCJsb2FkaW5nIiwicmVuZGVyIiwidG90YWxfcHJpY2UiLCJvcGVuIiwieCIsImVhc2VPdXQiLCJvbkNvbXBsZXRlIiwiY2xvc2UiLCJnZXRTdGF0ZSIsImNoZWNrQ2FydCIsInJlbW92ZUFkZG9uIiwidXBkYXRlQWRkb24iLCJyZW1vdmVycyIsImRlY3JlYXNlIiwiaW5jcmVhc2UiLCJjdXJyZW50UXR5IiwiZ2V0QXR0cmlidXRlIiwicmVtIiwibGluayIsInBhcnNlSW50Iiwic3VibWl0Iiwib2ZmRW1haWwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJmYXEiLCJpbm5lciIsInBsdXMiLCJvZmZzZXRIZWlnaHQiLCJhcHBlbmQiLCJzZWN0aW9uQ29udGFpbmVyIiwidGhlbWVJbWFnZSIsImZpbmQiLCJFeHBvIiwiY2FydFRvZ2dsZSIsImFubm91bmNlQmFyIiwiYW5ub3VuY2VDbG9zZSIsIm1lbnUiLCJuYXYiLCJuYXZUb2dnbGUiLCJoZWFkZXJDbG9zZSIsImNsb3NlWm9uZSIsImNhcnRDb3VudCIsImluaXRIZWFkZXIiLCJwYWdlWU9mZnNldCIsIm9mZnNldFdpZHRoIiwiY291bnQiLCJpdGVtX2NvdW50IiwiZnJvbVRvIiwibWVudU9wZW4iLCJpbmRleE9mIiwicHJvZHVjdHMiLCJpY29uIiwiYWxsUHJvZHVjdHMiLCJ1cGRhdGVUaGVtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsImJ0biIsImxxaXAiLCJkZWNvZGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvZmYiLCJzcmNzZXQiLCJoYXMiLCJjdXJyZW50WCIsInRhcmdldFgiLCJkaXJlY3Rpb24iLCJzY3JvbGxXaWR0aCIsInNldEludGVydmFsIiwiYW5pbWF0aW9uTG9vcExUUiIsInRyYW5zZm9ybSIsImFuaW1hdGlvbkxvb3BSVEwiLCJzdWJzY3JpYmUiLCJmb3JtQ29udGVudCIsImVycm9yIiwibGlzdElkIiwiYWRkVmFyaWFudCIsInN1YkRldGFpbFRvZ2dsZSIsInN1YkRldGFpbCIsImpzb24iLCJhZGRCdG4iLCJhZGRUZXh0IiwicHJlb3JkZXIiLCJzZWxlY3RlZE9yRmlyc3RBdmFpbGFibGVWYXJpYW50IiwidmFyaWFudHMiLCJmaWx0ZXIiLCJ2IiwiYWRkb25Kc29uIiwiYWRkb25TZWxlY3RlZE9yRmlyc3RBdmFpbGFibGVWYXJpYW50IiwiYWRkb25Qcm9kdWN0IiwiYWRkb25WYXJpYW50Iiwic2VsZWN0ZWRWYXJpYW50IiwicHJvZHVjdEltYWdlcyIsInZhcmlhbnRUaXRsZSIsImJ0bnMiLCJ0aHVtYiIsImluaXRFbWJsYSIsInZhcmlhbnRJbWFnZXMiLCJtYXAiLCJhbHQiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJkZXN0cm95IiwibWluIiwibWF4Iiwic2V0IiwiaSIsIk1hdGgiLCJvcHRpb25TdWIiLCJvcHRpb25PbmUiLCJvcHRpb25XcmFwIiwiYWRkUHJpY2UiLCJhY3RpdmVGcmVxdWVuY3kiLCJjb250ZW50IiwiY29udGVudFdyYXAiLCJ0b2dnbGVGcmVxdWVuY3kiLCJhcnJvdyIsImZyZXF1ZW5jeU9wdGlvbiIsInN1Yk9wdGlvbiIsImZyZXF1ZW5jeVdyYXAiLCJ0b2dnbGVPcHRpb25zIiwiY29udGVudEhlaWdodCIsIm1heEhlaWdodCIsIm9wdCIsImN1ck9wdGlvbiIsIm9wdGlvbiIsInN3YXRjaCIsIm9wdGlvbkdyb3VwcyIsInNlbGVjdGVkU3dhdGNoIiwib3B0aW9ucyIsInVwZGF0ZVZhcmlhbnQiLCJuZXdWYXJpYW50Iiwic2V0QXR0cmlidXRlIiwiaW52ZW50b3J5IiwidmFyaWFudFNlbGVjdCIsImN1clRpdGxlIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJoYW5kbGVJbnRlcnNlY3Rpb24iLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYXV0b3BsYXkiLCJ1bm9ic2VydmUiLCJwYXVzZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsIm9wZXJhdG9yIiwicmVzIiwiZW50ZXIiLCJzY3JvbGxUb3AiLCJvcGFjaXR5IiwicGF0aCIsImlnbm9yZSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwYWdlVGl0bGUiLCJwYWdldGl0bGUiLCJzaG9wVGl0bGUiLCJzaG9wdGl0bGUiLCJmZXRjaCIsIm51bUF2YWlsYWJsZSIsImludmVudG9yeV9wb2xpY3kiLCJpbnZlbnRvcnlfbWFuYWdlbWVudCIsImludmVudG9yeV9xdWFudGl0eSIsImV4aXN0aW5nIiwibnVtUmVxdWVzdGVkIiwiZXJyIiwiRXJyb3IiLCJhZGRJdGVtQnlJZCIsImNoYW5nZUFkZG9uIiwibGluZSIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInN0cmluZ2lmeSIsInIiLCJwaXgiLCJjZW50cyIsImZvcm1hdCIsInJlcGxhY2UiLCJwbGFjZWhvbGRlclJlZ2V4IiwiZm9ybWF0V2l0aERlbGltaXRlcnMiLCJudW1iZXIiLCJwcmVjaXNpb24iLCJ0aG91c2FuZHMiLCJkZWNpbWFsIiwiaXNOYU4iLCJ0b0ZpeGVkIiwicGFydHMiLCJkb2xsYXJzQW1vdW50IiwiY2VudHNBbW91bnQiLCJwcmVsb2FkIiwic2l6ZSIsImxvYWRJbWFnZSIsIkltYWdlIiwicmVtb3ZlUHJvdG9jb2wiLCJwcmVmaXgiLCJzdWZmaXgiXSwic291cmNlUm9vdCI6IiJ9