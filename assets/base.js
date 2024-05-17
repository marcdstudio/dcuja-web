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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLDJEQUEyRCwyREFBMkQ7VUFDdEgscUZBQXFGLDREQUE0RDtVQUNqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudEFkZHJlc3Nlcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvdW50TG9naW4uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYmFja2luc3RvY2suanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYmFubmVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Jsb2dGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FydERyYXdlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jYXJ0RHJhd2VySXRlbS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jaGVja291dC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZmFxcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9mYXFzSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2xhenkuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvbWFycXVlZS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdENhcm91c2VsLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RDb3VudGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RPcHRpb25zLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RTdWJzY3JpcHRpb25zLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RWYXJpYW50LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9zb2NpYWwuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvc3RlcHMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvY2FydC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3V0aWxzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvcGFnZVNldHVwLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc3R5bGVzL2Jhc2Uuc2Nzcz82ODcxIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGljb2FwcCB9IGZyb20gJ3BpY29hcHAnXG5cbmltcG9ydCBhY2NvdW50TG9naW4gZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudExvZ2luLmpzJ1xuaW1wb3J0IGFjY291bnRBZGRyZXNzZXMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudEFkZHJlc3Nlcy5qcydcbmltcG9ydCBsYXp5IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2xhenkuanMnXG5pbXBvcnQgaGVhZGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci5qcydcbmltcG9ydCBjYXJ0RHJhd2VyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NhcnREcmF3ZXIuanMnXG5pbXBvcnQgY2FydERyYXdlckl0ZW0gZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FydERyYXdlckl0ZW0uanMnXG5pbXBvcnQgcHJvZHVjdENhcm91c2VsIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RDYXJvdXNlbC5qcydcbmltcG9ydCBwcm9kdWN0IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3QuanMnXG5pbXBvcnQgcHJvZHVjdENvdW50ZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdENvdW50ZXIuanMnXG5pbXBvcnQgcHJvZHVjdFZhcmlhbnQgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFZhcmlhbnQuanMnXG5pbXBvcnQgcHJvZHVjdE9wdGlvbnMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdE9wdGlvbnMuanMnXG5pbXBvcnQgY29sbGVjdGlvbiBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jb2xsZWN0aW9uLmpzJ1xuaW1wb3J0IGZhcXMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZmFxcy5qcydcbmltcG9ydCBjaGVja291dCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jaGVja291dC5qcydcbmltcG9ydCBuZXdzbGV0dGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL25ld3NsZXR0ZXIuanMnXG5pbXBvcnQgY2Fyb3VzZWwgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMnXG5pbXBvcnQgZm9vdGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Zvb3Rlci5qcydcbmltcG9ydCBjb250YWN0IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NvbnRhY3QuanMnXG5pbXBvcnQgbWFycXVlZSBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9tYXJxdWVlLmpzJ1xuaW1wb3J0IGJsb2dGaWx0ZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYmxvZ0ZpbHRlci5qcydcbmltcG9ydCB2aWRlbyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy92aWRlby5qcydcbmltcG9ydCBzaWdudXAgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvc2lnbnVwLmpzJ1xuaW1wb3J0IGJhY2tpbnN0b2NrIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2JhY2tpbnN0b2NrLmpzJ1xuaW1wb3J0IHByb2R1Y3RTdWJzY3JpcHRpb25zIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RTdWJzY3JpcHRpb25zLmpzJ1xuaW1wb3J0IGFib3V0IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Fib3V0LmpzJ1xuXG5pbXBvcnQgaGVybyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9oZXJvLmpzJ1xuaW1wb3J0IGJhbm5lciBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9iYW5uZXIuanMnXG5pbXBvcnQgc29jaWFsIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3NvY2lhbC5qcydcbmltcG9ydCBjYXJkcyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jYXJkcy5qcydcbmltcG9ydCBmYXFzSW1hZ2UgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZmFxc0ltYWdlLmpzJ1xuaW1wb3J0IHN0ZXBzIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3N0ZXBzLmpzJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgY2FydE9wZW46IGZhbHNlLFxufVxuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBhY2NvdW50TG9naW4sXG4gIGFjY291bnRBZGRyZXNzZXMsXG4gIGhlYWRlcixcbiAgY2FydERyYXdlcixcbiAgY2FydERyYXdlckl0ZW0sXG4gIGxhenksXG4gIHByb2R1Y3RDYXJvdXNlbCxcbiAgcHJvZHVjdCxcbiAgcHJvZHVjdENvdW50ZXIsXG4gIHByb2R1Y3RWYXJpYW50LFxuICBwcm9kdWN0T3B0aW9ucyxcbiAgY29sbGVjdGlvbixcbiAgZmFxcyxcbiAgY2hlY2tvdXQsXG4gIG5ld3NsZXR0ZXIsXG4gIGNhcm91c2VsLFxuICBmb290ZXIsXG4gIGNvbnRhY3QsXG4gIG1hcnF1ZWUsXG4gIGJsb2dGaWx0ZXIsXG4gIHZpZGVvLFxuICBzaWdudXAsXG4gIGJhY2tpbnN0b2NrLFxuICBwcm9kdWN0U3Vic2NyaXB0aW9ucyxcbiAgYWJvdXQsXG5cbiAgaGVybyxcbiAgYmFubmVyLFxuICBzb2NpYWwsXG4gIGNhcmRzLFxuICBmYXFzSW1hZ2UsXG4gIHN0ZXBzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBwaWNvYXBwKGNvbXBvbmVudHMsIHN0YXRlKVxuIiwiLy8gaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Nzcydcbi8vIGltcG9ydCAnQC9saWIvc2VsZWN0LmpzJ1xuLy8gaW1wb3J0IGxhemltIGZyb20gJ2xhemltJ1xuaW1wb3J0IHsgYmluZCwgdXBkYXRlIH0gZnJvbSAnbGF6aW0nXG5pbXBvcnQgYXBwIGZyb20gJ2Jhc2Uvc2NyaXB0cy9hcHAuanMnXG5pbXBvcnQgcm91dGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9yb3V0ZXIuanMnXG5pbXBvcnQgeyBmZXRjaENhcnQgfSBmcm9tICdiYXNlL3NjcmlwdHMvdXRpbHMvY2FydC5qcydcbmltcG9ydCB7IGdzYXAsIFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL2FsbCdcbmltcG9ydCB7IHFzLCByZW1vdmUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCBwYWdlU2V0dXAgZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL3BhZ2VTZXR1cCdcblxubGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMVxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YClcbn0pXG5cbi8qKlxuICogc3RvcmUgYmluZGluZyBmblxuICovXG5iaW5kKClcblxuLyoqXG4gKiByZWdpc3RlciBzY3JvbGx0cmlnZ2VyXG4gKi9cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcblxucm91dGVyLm9uKCdhZnRlcicsICh7IHRpdGxlLCBwYXRobmFtZSB9KSA9PiB7XG4gIGFwcC51bm1vdW50KClcbiAgYXBwLm1vdW50KClcblxuICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigncHJvZHVjdHMnKSA+IC0xKSB7XG4gIC8vICAgdmFyIGFwaSA9IG5ldyBZb3Rwby5BUEkoeW90cG8pXG4gIC8vICAgYXBpLnJlZnJlc2hXaWRnZXRzKClcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBiaW5kIG5ldyBpbWFnZXNcbiAgICovXG5cbiAgYmluZCgpXG4gIC8qKlxuICAgKiBoaWRlIHN1Ym5hdlxuICAgKi9cbiAgYXBwLmVtaXQoJ21lbnU6Y2xvc2UnKVxuICBhcHAuZW1pdCgndHJhbnNpdGlvbjpjb21wbGV0ZScpXG5cbiAgcGFnZVNldHVwKClcbn0pXG5cbnBhZ2VTZXR1cCgpXG5cbi8qKlxuICogbG9hZCBhbnkgZGF0YSB0aGF0IHlvdXIgc2l0ZSBuZWVkcyBvbiBmaXN0IGxvYWRcbiAqL1xuUHJvbWlzZS5hbGwoW2ZldGNoQ2FydCgpXSkudGhlbigoW2NhcnRdKSA9PiB7XG4gIC8qKlxuICAgKiBhZGQgdGhlIGNhcnQgZGF0YSB0byB0aGUgcGljb2FwcCBpbnN0YW5jZVxuICAgKi9cbiAgYXBwLmh5ZHJhdGUoeyBjYXJ0IH0pXG5cbiAgLyoqXG4gICAqIG1vdW50IGFueSBjb21wb25lbnRzIGRlZmluZWQgb24gdGhlIHBhZ2VcbiAgICovXG4gIGFwcC5tb3VudCgpXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwL2FsbCdcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlcidcbmltcG9ydCB7IFNjcm9sbFRvUGx1Z2luIH0gZnJvbSAnZ3NhcC9kaXN0L1Njcm9sbFRvUGx1Z2luJ1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUb1BsdWdpbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgYW5jaG9ycyB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgcXNhKCdbZGF0YS1zZWN0aW9uXScpLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYW5jaG9yLmlubmVySFRNTCA9IHNlY3Rpb24uZGF0YXNldC50aXRsZSB8fCBzZWN0aW9uLmRhdGFzZXQuc2VjdGlvblxuICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdqcy1hbmNob3InKVxuICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gICAgYW5jaG9yLmRhdGFzZXQuc2VjdGlvbiA9IHNlY3Rpb24uZGF0YXNldC5zZWN0aW9uXG4gICAgYW5jaG9ycy5hcHBlbmRDaGlsZChhbmNob3IpXG5cbiAgICBvbihhbmNob3IsICdjbGljaycsICgpID0+IHtcbiAgICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBzY3JvbGxUbzoge1xuICAgICAgICAgIHk6IGBbZGF0YS10aXRsZT1cIiR7c2VjdGlvbi5kYXRhc2V0LnRpdGxlfVwiXWAsXG4gICAgICAgICAgb2Zmc2V0WTogNzUsXG4gICAgICAgIH0sXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc2V0QWN0aXZlID0gKHRhcmdldCkgPT4ge1xuICAgIHFzYSgnLmpzLWFuY2hvcicpLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgcmVtb3ZlKGFuY2hvciwgJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIGFkZChxcyhgLmpzLWFuY2hvcltkYXRhLXNlY3Rpb249XCIke3RhcmdldH1cIl1gKSwgJ2FjdGl2ZScpXG4gIH1cblxuICBnc2FwLnV0aWxzLnRvQXJyYXkoJ1tkYXRhLXNlY3Rpb25dJykuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICBzdGFydDogJ3RvcCB0b3ArPTE1MCcsXG4gICAgICBvbkVudGVyOiAoc2VsZikgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoc2VsZi50cmlnZ2VyLmRhdGFzZXQuc2VjdGlvbilcbiAgICAgIH0sXG4gICAgfSlcbiAgfSlcblxuICBnc2FwLnV0aWxzLnRvQXJyYXkoJ1tkYXRhLXNlY3Rpb25dJykuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICBzdGFydDogJ2JvdHRvbSB0b3AnLFxuICAgICAgb25MZWF2ZUJhY2s6IChzZWxmKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShzZWxmLnRyaWdnZXIuZGF0YXNldC5zZWN0aW9uKVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmZvckVhY2goKGltZykgPT4ge1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKVxuICAgICAgaW1nLm9ubG9hZCA9IG51bGxcbiAgICB9XG4gIH0pXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgU2Nyb2xsVHJpZ2dlci5yZWZyZXNoKClcbiAgfSwgMTAwMClcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCB0cmlnZ2VycyA9IFNjcm9sbFRyaWdnZXIuZ2V0QWxsKClcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICB0cmlnZ2VyLmtpbGwoKVxuICAgIH0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBxcywgcXNhLCBvbiwgYWRkLCByZW1vdmUsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBhZGRXcmFwLCB0b2dnbGVBZGQsIHRvZ2dsZUVkaXQsIGVkaXRXcmFwIH0gPSBjaG9venkobm9kZSlcblxuICBpZiAodG9nZ2xlQWRkICE9IHVuZGVmaW5lZCkge1xuICAgIG9uKHRvZ2dsZUFkZCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlKGFkZFdyYXAsICdoaWRkZW4nKVxuICAgIH0pXG4gIH1cblxuICBpZiAodG9nZ2xlRWRpdCAhPSB1bmRlZmluZWQpIHtcbiAgICBvbih0b2dnbGVFZGl0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGUoZWRpdFdyYXAsICdoaWRkZW4nKVxuICAgIH0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBsb2dpbiA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWxvZ2luLWRpYWxvZycpXG4gIGNvbnN0IHJlY292ZXIgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLWRpYWxvZycpXG4gIGNvbnN0IHJlY292ZXJMaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjb3Zlci10cmlnZ2VyJylcbiAgY29uc3QgY2FuY2VsUmVjb3ZlckxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLWNhbmNlbCcpXG5cbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgY29uc3QgcmVjb3ZlcklzVGFyZ2V0ID0gd2luZG93LmxvY2F0aW9uLmhhc2gubWF0Y2goL1xcI3JlY292ZXIvKSA/IHRydWUgOiBmYWxzZVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG4gIGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjb3Zlci1zdWNjZXNzJykgIT09IG51bGxcblxuICAvLyBjb25zb2xlLmxvZygnc3VjY2Vzcycsc3VjY2Vzc01lc3NhZ2UpXG4gIC8vIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG5cbiAgLy8gaWYgKHJlY292ZXJJc1RhcmdldCB8fCBzdWNjZXNzTWVzc2FnZSkge1xuICAvLyAgIGNvbnNvbGUubG9nKCd0ZXN0JylcbiAgLy8gICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIC8vICAgcmVjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIC8vIH1cblxuICByZWNvdmVyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHJlY292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSlcblxuICBjYW5jZWxSZWNvdmVyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmVjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBlbWFpbCwgYmlzLCBiaXNjb250ZW50LCBzdWNjZXNzLCBiaXN3cmFwLCBvcGVuYmlzLCBjbG9zZWJpcywgZm9ybWJpcyB9ID1cbiAgICBjaG9venkobm9kZSlcblxuICBvbihiaXMsICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgY3VycmVudFZhcmlhbnQgPSBub2RlLmRhdGFzZXQudmFyaWFudFxuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYS5rbGF2aXlvLmNvbS9vbnNpdGUvY29tcG9uZW50cy9iYWNrLWluLXN0b2NrL3N1YnNjcmliZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGE6ICdWN2lDalgnLFxuICAgICAgICBlbWFpbDogZW1haWwudmFsdWUsXG4gICAgICAgIHZhcmlhbnQ6IGN1cnJlbnRWYXJpYW50LFxuICAgICAgICBwbGF0Zm9ybTogJ3Nob3BpZnknLFxuICAgICAgICBzdG9yZTogJ2RyaW5rbW9kaWNhJyxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGFkZChmb3JtYmlzLCAnaGlkZGVuJylcbiAgICAgICAgcmVtb3ZlKHN1Y2Nlc3MsICdoaWRkZW4nKVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCJwaWNvYXBwXCI7XG5pbXBvcnQgY2hvb3p5IGZyb20gXCJjaG9venlcIjtcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBvbiwgcXNhIH0gZnJvbSBcIkBzZWxmYXdhcmUvbWFydGhhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGltYWdlcyB9ID0gY2hvb3p5KG5vZGUpO1xuXG4gIGNvbnN0IGFsbEltYWdlcyA9IEpTT04ucGFyc2UoaW1hZ2VzPy5pbm5lckhUTUwpLmltYWdlcztcbiAgY29uc3QgYWxsQmxvY2tzID0gcXNhKCcuanMtaW1hZ2UnLCBub2RlKVxuXG4gIGNvbnN0IHRoZW1lSW1hZ2VzID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5ib2R5LmRhdGFzZXQudGhlbWVcbiAgICBsZXQgdGhlbWVJbWFnZXMgPSBbXVxuXG4gICAgYWxsSW1hZ2VzLmZvckVhY2goKGltZywgaW5kZXgpID0+IHtcbiAgICAgIGlmKGltZy50aGVtZSA9PSBjdXJyZW50VGhlbWUpe1xuICAgICAgICB0aGVtZUltYWdlcy5wdXNoKGltZylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFsbEJsb2Nrcy5mb3JFYWNoKGltZyA9PiBpbWcuc3JjID0gJycpO1xuXG4gICAgdGhlbWVJbWFnZXMuZm9yRWFjaCgoaW1nLCBpbmRleCkgPT4ge1xuICAgICAgaWYoaW1nLnRoZW1lID09IGN1cnJlbnRUaGVtZSl7XG4gICAgICAgIGFsbEJsb2Nrc1tpbmRleF0uc3JjID0gaW1nLmltYWdlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGVtZUltYWdlcygpXG5cbiAgY3R4Lm9uKCd0aGVtZScsICgpID0+IHtcbiAgICB0aGVtZUltYWdlcygpXG4gIH0pXG59KTtcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IGFkZCwgcmVtb3ZlLCBvbiwgcXMsIHFzYSwgdG9nZ2xlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGZpbHRlclRvZ2dsZSwgY2xlYXJGaWx0ZXIgfSA9IGNob296eShub2RlKVxuXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnL3RhZ2dlZC8nKSkge1xuICAgIGxldCB0YWcgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgndGFnZ2VkLycpWzFdXG4gICAgbGV0IHRhcmdldFRhZyA9IHFzKGAuanMtZmlsdGVyW2RhdGEtZmlsdGVyPVwiJHt0YWd9XCJdYClcblxuICAgIHFzYSgnLmpzLWZpbHRlcicsIG5vZGUpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICByZW1vdmUoZWwsICdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICBpZiAodGFyZ2V0VGFnKSB7XG4gICAgICBhZGQodGFyZ2V0VGFnLCAnYWN0aXZlJylcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJvdXNlbCwgbmV4dCwgcHJldiwgY291bnRlciwgYWN0aXZlSW5kZXgsIGNhcmRzIH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgdHJpbVNuYXBzOiB0cnVlLFxuICAgIGNvbnRhaW5TY3JvbGw6IHRydWUsXG4gICAgYWxpZ246ICdzdGFydCcsXG4gIH0pXG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuXG4gICAgLy8gb24obmV4dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgZW1ibGEuc2Nyb2xsTmV4dFxuICAgIC8vIH0pXG4gIH1cblxuICBpZiAoY291bnRlcikge1xuICAgIG9uKGNvdW50ZXIsICdjbGljaycsIChlKSA9PiB7XG4gICAgICBlbWJsYS5zY3JvbGxUbyhlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgIH0pXG4gIH1cblxuICBlbWJsYS5vbignc2VsZWN0JywgKCkgPT4ge1xuICAgIGlmIChjb3VudGVyKSB7XG4gICAgICByZW1vdmUoY291bnRlciwgJ2lzLWFjdGl2ZScpXG4gICAgICBhZGQoXG4gICAgICAgIHFzKGAuanMtY291bnRlcltkYXRhLWluZGV4PVwiJHtlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKX1cIl1gLCBub2RlKSxcbiAgICAgICAgJ2lzLWFjdGl2ZSdcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXgpIHtcbiAgICAgIGFjdGl2ZUluZGV4LmlubmVySFRNTCA9IGVtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpICsgMVxuICAgIH1cbiAgfSlcblxuICAvLyByZXR1cm4gKCkgPT4ge1xuICAvLyAgIGlmIChuZXh0KSB7XG4gIC8vICAgICAgIG5leHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgLy8gICAgICAgcHJldi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuICAvLyAgIH1cbiAgLy8gfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IGFkZCwgcmVtb3ZlLCBvbiwgcXMsIHFzYSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnZW1ibGEtY2Fyb3VzZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGNhcm91c2VsLCBuZXh0LCBwcmV2LCBjb3VudGVyLCBhY3RpdmVJbmRleCB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QgZW1ibGEgPSBFbWJsYUNhcm91c2VsKGNhcm91c2VsLCB7XG4gICAgbG9vcDogbm9kZS5kYXRhc2V0Lmxvb3AgPT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZSxcbiAgICBza2lwU25hcHM6IGZhbHNlLFxuICAgIHRyaW1TbmFwczogdHJ1ZSxcbiAgICBjb250YWluU2Nyb2xsOiB0cnVlLFxuICAgIHNwZWVkOiBub2RlLmRhdGFzZXQuc3BlZWQgPyBub2RlLmRhdGFzZXQuc3BlZWQgOiAxMCxcbiAgICBhbGlnbjogbm9kZS5kYXRhc2V0LnN0YXJ0ID09ICdsZWZ0JyA/ICdzdGFydCcgOiAnY2VudGVyJyxcbiAgfSlcblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG5cbiAgICAvLyBvbihuZXh0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICBlbWJsYS5zY3JvbGxOZXh0XG4gICAgLy8gfSlcbiAgfVxuXG4gIGlmIChjb3VudGVyKSB7XG4gICAgb24oY291bnRlciwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGVtYmxhLnNjcm9sbFRvKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgfSlcbiAgfVxuXG4gIGVtYmxhLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgIHJlbW92ZShjb3VudGVyLCAnaXMtYWN0aXZlJylcbiAgICAgIGFkZChcbiAgICAgICAgcXMoYC5qcy1jb3VudGVyW2RhdGEtaW5kZXg9XCIke2VtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpfVwiXWAsIG5vZGUpLFxuICAgICAgICAnaXMtYWN0aXZlJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCkge1xuICAgICAgYWN0aXZlSW5kZXguaW5uZXJIVE1MID0gZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCkgKyAxXG4gICAgfVxuICB9KVxuXG4gIC8vIHJldHVybiAoKSA9PiB7XG4gIC8vICAgaWYgKG5leHQpIHtcbiAgLy8gICAgICAgbmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAvLyAgICAgICBwcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG4gIC8vICAgfVxuICAvLyB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IGdldFNpemVkSW1hZ2VVcmwsIGltYWdlU2l6ZSB9IGZyb20gJ2Jhc2Uvc2NyaXB0cy91dGlscy9pbWFnZXMuanMnXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gJ2Jhc2Uvc2NyaXB0cy91dGlscy9jdXJyZW5jeS5qcydcbmltcG9ydCBhcHAgZnJvbSAnYmFzZS9zY3JpcHRzL2FwcC5qcydcbmltcG9ydCB7IGdzYXAsIFBvd2VyNCB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBhZGQsIHFzLCBxc2EsIHJlbW92ZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5jb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKVxuXG5jb25zdCBYID0gYDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTkgMTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMSAxTDE3Ljk3MDYgMTcuOTcwNlwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuPHBhdGggZD1cIk0xIDE3Ljk3MDVMMTcuOTcwNiAwLjk5OTg5N1wiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuPC9zdmc+YFxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKHtcbiAgdmFyaWFudF9pZDogaWQsXG4gIHByb2R1Y3RfdGl0bGU6IHRpdGxlLFxuICBsaW5lX3ByaWNlOiBwcmljZSxcbiAgb3JpZ2luYWxfbGluZV9wcmljZTogb3JpZ2luYWxfcHJpY2UsXG4gIHZhcmlhbnRfdGl0bGUsXG4gIGltYWdlLFxuICB1cmwsXG4gIHF1YW50aXR5LFxuICAuLi5pdGVtXG59KSB7XG4gIC8vIGNvbnN0IGltZyA9IGltYWdlXG4gIC8vICAgPyBnZXRTaXplZEltYWdlVXJsKFxuICAvLyAgICAgICBpbWFnZS5yZXBsYWNlKCcuJyArIGltYWdlU2l6ZShpbWFnZSksICcnKSxcbiAgLy8gICAgICAgJzQwMHgnIC8vIFRPRE8gaGFja3kgYWZcbiAgLy8gICAgIClcbiAgLy8gICA6ICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vUjlPUzI5eEpiLTgvMjAwMHgxMzMzJ1xuXG4gIHJldHVybiBgXG48ZGl2IGNsYXNzPSdjYXJ0LWRyYXdlcl9faXRlbScgZGF0YS1jb21wb25lbnQ9J2NhcnREcmF3ZXJJdGVtJyBkYXRhLWlkPSR7aWR9ICR7XG4gICAgaXRlbS5zZWxsaW5nX3BsYW5fYWxsb2NhdGlvblxuICAgICAgPyBgZGF0YS1wbGFuaWQ9JyR7aXRlbS5zZWxsaW5nX3BsYW5fYWxsb2NhdGlvbi5zZWxsaW5nX3BsYW4uaWR9J2BcbiAgICAgIDogYGBcbiAgfT5cbiAgPGRpdiBjbGFzcz0ncmVsYXRpdmUgdy1mdWxsIGJvcmRlci1iIGJvcmRlci1zb2xpZCBwLTE1IG06cC0yMCc+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgIDxhIGhyZWY9JyR7dXJsfScgY2xhc3M9XCJjYXJ0LWltYWdlXCIgYXJpYS1sYWJlbD1cInZpZXcgJHt0aXRsZX1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiBzcmM9JyR7aW1hZ2V9JyBhbHQ9XCJwcm9kdWN0IHRodW1ibmFpbFwiLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMTAgZmxleCBpdGVtcy1zdGFydCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZm9udC1ib2xkIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleC1ncm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9JyR7dXJsfScgY2xhc3M9J3RpdGxlLWNhcnQgdXBwZXJjYXNlJz4ke3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1kcmF3ZXJfX2l0ZW0tLXByaWNlIGZsZXgtc2hyaW5rLTAgdGV4dC0yMCc+XG4gICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsX3ByaWNlID4gcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgPyBgPHNwYW4gY2xhc3M9XCJqcy1wcmljZSBsaW5lLXRocm91Z2hcIj4kJHtmb3JtYXRNb25leShcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJqcy1kaXNjb3VudCBtbC01XCI+JCR7Zm9ybWF0TW9uZXkocHJpY2UpfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgICAgIDogYDxzcGFuIGNsYXNzPVwianMtcHJpY2VcIj4kJHtmb3JtYXRNb25leShwcmljZSl9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICB2YXJpYW50X3RpdGxlXG4gICAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz0naXRlbS12YXJpYW50X190aXRsZSBjYXJ0LWl0ZW0tLWRldGFpbCc+JHt2YXJpYW50X3RpdGxlfTwvZGl2PmBcbiAgICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcnQtaXRlbV9fcXR5IGZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTEwIGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIGxlYWRpbmctMTAwIHRleHQtMjAgcHktNSBib3JkZXIgYm9yZGVyLXNvbGlkIGgtMjUnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJ0LXF1YW50aXR5IGJ0bi1xdWFudGl0eSBqcy1yZW1vdmUtc2luZ2xlIGN1cnNvci1wb2ludGVyJz48c3BhbiBjbGFzcz1cImJsb2NrXCI+Jm5kYXNoOzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nanMtc2luZ2xlLXF1YW50aXR5IG14LTUnPiR7cXVhbnRpdHl9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcnQtcXVhbnRpdHkgYnRuLXF1YW50aXR5IGpzLWFkZC1zaW5nbGUgY3Vyc29yLXBvaW50ZXInPjxzcGFuIGNsYXNzPVwiYmxvY2tcIj4rPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24tLXJlc2V0IGpzLXJlbW92ZS1pdGVtIHRleHQtcmlnaHQgdGV4dC0xNCBjYXJ0LWl0ZW1fX3JlbW92ZSBsaDEwMCcgYXJpYS1sYWJlbD1cInJlbW92ZSBpdGVtXCI+PHNwYW4gY2xhc3M9XCJibG9jayB1bmRlcmxpbmVcIj5SRU1PVkU8L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5gXG59XG5cbmZ1bmN0aW9uIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gIHJldHVybiBpdGVtcy5sZW5ndGggPiAwXG4gICAgPyBpdGVtcy5yZWR1Y2UoKG1hcmt1cCwgaXRlbSkgPT4ge1xuICAgICAgICBtYXJrdXAgKz0gY3JlYXRlSXRlbShpdGVtKVxuICAgICAgICByZXR1cm4gbWFya3VwXG4gICAgICB9LCAnJylcbiAgICA6IGA8ZGl2IGNsYXNzPSdweC0yMCBtOnB4LTQwJz48cCBjbGFzcz1cInB5LTIwIHctZnVsbCBib3JkZXItYi0yIGJvcmRlci1zb2xpZCBib3JkZXItYmx1ZVwiPllvdXIgY2FydCBpcyBlbXB0eTwvcD48L2Rpdj5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1vdmVybGF5JylcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jbG9zZScpXG4gIGNvbnN0IHN1YnRvdGFsID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtc3VidG90YWwnKVxuICBjb25zdCBpdGVtc1Jvb3QgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1pdGVtcycpXG4gIGNvbnN0IGxvYWRpbmcgPSBpdGVtc1Jvb3QuaW5uZXJIVE1MXG5cbiAgY29uc3QgcmVuZGVyID0gKGNhcnQpID0+IHtcbiAgICBpdGVtc1Jvb3QuaW5uZXJIVE1MID0gcmVuZGVySXRlbXMoY2FydC5pdGVtcywgaXRlbXNSb290KVxuICAgIHN1YnRvdGFsLmlubmVySFRNTCA9IGAke2Zvcm1hdE1vbmV5KGNhcnQudG90YWxfcHJpY2UpfWBcbiAgfVxuXG4gIGNvbnN0IG9wZW4gPSAoY2FydCkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICBpdGVtc1Jvb3QuaW5uZXJIVE1MID0gbG9hZGluZ1xuXG4gICAgc2V0VGltZW91dChyZW5kZXIoY2FydCksIDEwKVxuICAgIGFwcC5tb3VudCgpXG5cbiAgICB0bC50bygnLmNhcnQtZHJhd2VyJywge1xuICAgICAgeDogJzAlJyxcbiAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG5cbiAgICB0bC50bygnLmNhcnQtZHJhd2VyJywge1xuICAgICAgeDogJzEwMCUnLFxuICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICBhcHAuaHlkcmF0ZSh7IGNhcnRPcGVuOiBmYWxzZSB9KVxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKGN0eC5nZXRTdGF0ZSgpLmNhcnQpXG5cbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKVxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKVxuXG4gIGNvbnN0IGNoZWNrQ2FydCA9IChjYXJ0KSA9PiB7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGNhcnQuaXRlbXMubGVuZ3RoIDwgMSkge1xuICAgICAgcmVtb3ZlKHFzKCcuY2FydC1lbXB0eV9fd3JhcHBlcicpLCAnaGlkZGVuJylcbiAgICAgIGFkZChxcygnLmNhcnQtZHJhd2VyX19pdGVtcycpLCAnaGlkZGVuJylcbiAgICAgIGFkZChxcygnLmpzLWNhcnRGb290ZXInKSwgJ2hpZGRlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZChxcygnLmNhcnQtZW1wdHlfX3dyYXBwZXInKSwgJ2hpZGRlbicpXG4gICAgICByZW1vdmUocXMoJy5jYXJ0LWRyYXdlcl9faXRlbXMnKSwgJ2hpZGRlbicpXG4gICAgICByZW1vdmUocXMoJy5qcy1jYXJ0Rm9vdGVyJyksICdoaWRkZW4nKVxuICAgIH1cbiAgICAvLyB9LCAxMDApO1xuICB9XG5cbiAgY3R4Lm9uKCdjYXJ0OnRvZ2dsZScsICh7IGNhcnQsIGNhcnRPcGVuIH0pID0+IHtcbiAgICBjYXJ0T3BlbiAmJiBvcGVuKGNhcnQpXG5cbiAgICBjaGVja0NhcnQoY3R4LmdldFN0YXRlKCkuY2FydClcbiAgfSlcblxuICBjdHgub24oJ2NhcnQ6dXBkYXRlZCcsICgpID0+IHtcbiAgICByZW5kZXIoY3R4LmdldFN0YXRlKCkuY2FydClcbiAgICBhcHAubW91bnQoKVxuXG4gICAgY2hlY2tDYXJ0KGN0eC5nZXRTdGF0ZSgpLmNhcnQpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IHJlbW92ZUFkZG9uLCB1cGRhdGVBZGRvbiB9IGZyb20gJ2Jhc2Uvc2NyaXB0cy91dGlscy9jYXJ0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCByZW1vdmVycyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmpzLXJlbW92ZS1pdGVtJylcbiAgY29uc3QgZGVjcmVhc2UgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZW1vdmUtc2luZ2xlJylcbiAgY29uc3QgaW5jcmVhc2UgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hZGQtc2luZ2xlJylcbiAgY29uc3QgY3VycmVudFF0eSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXNpbmdsZS1xdWFudGl0eScpLmlubmVySFRNTFxuICBjb25zdCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgY29uc3Qgc2VsbGluZ19wbGFuID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhbmlkJylcblxuICByZW1vdmVycy5mb3JFYWNoKChyZW0pID0+IHtcbiAgICByZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgbGV0IGxpbmsgPSBlLnRhcmdldC5kYXRhc2V0LmxpbmtcbiAgICAgIGN0eC5lbWl0KCdpdGVtOnJlbW92ZWQnKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZW1vdmVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCBsaW5rKVxuICAgIH0pXG4gIH0pXG5cbiAgZGVjcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZUFkZG9uKGlkLCBzZWxsaW5nX3BsYW4sIHBhcnNlSW50KGN1cnJlbnRRdHkpIC0gMSlcbiAgfSlcblxuICBpbmNyZWFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlQWRkb24oaWQsIHNlbGxpbmdfcGxhbiwgcGFyc2VJbnQoY3VycmVudFF0eSkgKyAxKVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBvbiwgcXMgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlKSA9PiB7XG4gIG9uKG5vZGUsICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBxcygnLmpzLWNhcnRGb3JtJykuc3VibWl0KClcblxuICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9ICcvY2hlY2tvdXQnXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IGdzYXAsIFNjcm9sbFRvUGx1Z2luIH0gZnJvbSAnZ3NhcC9hbGwnXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICBnc2FwLnRvKHdpbmRvdywge1xuICAgICAgZHVyYXRpb246IDEsXG4gICAgICBzY3JvbGxUbzoge1xuICAgICAgICB5OiBgW2RhdGEtc2VjdGlvbj1cIiR7d2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJyMnKVsxXX1cIl1gLFxuICAgICAgICBvZmZzZXRZOiA5MCxcbiAgICAgIH0sXG4gICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgIH0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBvbiwgYWRkLCByZW1vdmUsIHFzLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgc3VibWl0LCBlbWFpbCB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3Qgb2ZmRW1haWwgPSBvbihlbWFpbCwgJ2JsdXInLCAoZSkgPT4ge1xuICAgIGlmICghZW1haWwudmFsdWUuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgYWRkKHFzKCcuZm9ybS1lbWFpbCcsIG5vZGUpLCAnZXJyb3InKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUocXMoJy5mb3JtLWVtYWlsJywgbm9kZSksICdlcnJvcicpXG4gICAgfVxuICB9KVxuXG4gIHFzYSgnLmZvcm0taW5wdXQnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIG9uKGVsLCAnaW5wdXQnLCAoKSA9PiB7XG4gICAgICBpZiAoZWwudmFsdWUpIHtcbiAgICAgICAgYWRkKGVsLCAnaGFzLWZpbGwnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlKGVsLCAnaGFzLWZpbGwnKVxuICAgICAgfVxuXG4gICAgICBpZiAocXNhKCcuZm9ybS1pbnB1dC5oYXMtZmlsbDpub3QoLmVycm9yKScpLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgIHN1Ym1pdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Ym1pdC5hZGRBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgb2ZmRW1haWwoKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSBcInBpY29hcHBcIjtcbmltcG9ydCBjaG9venkgZnJvbSBcImNob296eVwiO1xuaW1wb3J0IHsgb24sIHRvZ2dsZSwgcXNhLCBxcywgcmVtb3ZlLCBhZGQgfSBmcm9tIFwiQHNlbGZhd2FyZS9tYXJ0aGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgZmFxLCBib2R5LCBpbm5lciwgcGx1cyB9ID0gY2hvb3p5KG5vZGUpO1xuXG4gIGNvbnNvbGUubG9nKCdmYXFzJyk7XG5cbiAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kcmF3ZXJIZWlnaHQnLCBgJHtpbm5lci5vZmZzZXRIZWlnaHR9cHhgKVxuXG4gIC8vamFua1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KCctLWRyYXdlckhlaWdodCcsIGAke2lubmVyLm9mZnNldEhlaWdodH1weGApXG4gIH0sIDUwMCk7XG5cbiAgb24od2luZG93LCAncmVzaXplJywgKCkgPT4ge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoJy0tZHJhd2VySGVpZ2h0JywgYCR7aW5uZXIub2Zmc2V0SGVpZ2h0fXB4YClcbiAgfSlcblxuICBvbihmYXEsIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGUoYm9keSwgXCJvcGVuXCIpO1xuICAgIHRvZ2dsZShub2RlLCBcImFjdGl2ZVwiKTtcbiAgICB0b2dnbGUocGx1cywgXCJyb3RhdGUtNDVcIik7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwicGljb2FwcFwiO1xuaW1wb3J0IGNob296eSBmcm9tIFwiY2hvb3p5XCI7XG5pbXBvcnQgeyBvbiwgdG9nZ2xlLCBxc2EsIHFzLCByZW1vdmUsIGFkZCB9IGZyb20gXCJAc2VsZmF3YXJlL21hcnRoYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBxcyhcIm1haW5cIikuYXBwZW5kKG5vZGUpO1xuXG4gIGxldCBzZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYWRkKHNlY3Rpb25Db250YWluZXIsICdmYXEtY29udGFpbmVyJylcblxuICBxcygnbWFpbicpLmFwcGVuZChzZWN0aW9uQ29udGFpbmVyKVxuXG4gIHFzYSgnc2VjdGlvbicpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoc2VjdGlvbilcbiAgfSk7XG59KTtcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmltcG9ydCB7IHVwZGF0ZSB9IGZyb20gJ2xhemltJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBpbWFnZXMsIGltYWdlIH0gPSBjaG9venkobm9kZSk7XG5cbiAgY29uc3QgYWxsSW1hZ2VzID0gSlNPTi5wYXJzZShpbWFnZXM/LmlubmVySFRNTCkuaW1hZ2VzO1xuXG4gIGNvbnN0IHRoZW1lSW1hZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGRvY3VtZW50LmJvZHkuZGF0YXNldC50aGVtZVxuICAgIGNvbnN0IHRoZW1lSW1hZ2UgPSBhbGxJbWFnZXMuZmluZCgoaW1nKSA9PiBpbWcudGhlbWUgPT0gY3VycmVudFRoZW1lKTtcblxuICAgIGltYWdlLnNyYyA9IHRoZW1lSW1hZ2UuaW1hZ2VcbiAgICBpbWFnZS5kYXRhc2V0LnNyYyA9IHRoZW1lSW1hZ2UuaW1hZ2VcblxuICAgIHVwZGF0ZSgpXG4gIH1cblxuICB0aGVtZUltYWdlcygpXG5cbiAgY3R4Lm9uKCd0aGVtZScsICgpID0+IHtcbiAgICB0aGVtZUltYWdlcygpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCB7IGdzYXAsIEV4cG8gfSBmcm9tICdnc2FwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJ0VG9nZ2xlLCBhbm5vdW5jZUJhciwgYW5ub3VuY2VDbG9zZSwgbWVudSwgYW5jaG9yLCBuYXYsIG9wZW4sIGNsb3NlLCBuYXZUb2dnbGUgfSA9XG4gICAgY2hvb3p5KG5vZGUpXG5cbiAgbGV0IGhlYWRlckNsb3NlID0gcXMoJy5oZWFkZXItY2xvc2UnKVxuICBsZXQgY2xvc2Vab25lID0gcXMoJy5qcy1jbG9zZVpvbmUnKVxuICBsZXQgY2FydENvdW50ID0gcXNhKCcuanMtY2FydENvdW50JylcblxuICBpZiAoYW5ub3VuY2VDbG9zZSkge1xuICAgIG9uKGFubm91bmNlQ2xvc2UsICdjbGljaycsICgpID0+IHtcbiAgICAgIGFkZChhbm5vdW5jZUJhciwgJ2hpZGRlbicpXG4gICAgICBxcygnYm9keScpLnN0eWxlLnNldFByb3BlcnR5KCctLWFubm91bmNlJywgYDBweGApXG4gICAgfSlcbiAgfVxuXG4gIG9uKGNhcnRUb2dnbGUsICdjbGljaycsICgpID0+IHtcbiAgICBjdHguZW1pdCgnY2FydDp0b2dnbGUnLCAoc3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNhcnRPcGVuOiAhc3RhdGUuY2FydE9wZW4sXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvL2RlZmluZSBuYXYgc2l6aW5nXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tbmF2JywgYCR7bmF2Lm9mZnNldFdpZHRofXB4YCk7IC8vIENoYW5nZSB0byBkZXNpcmVkIGNvbG9yXG5cbiAgb24od2luZG93LCAncmVzaXplJywgKCkgPT4ge1xuICAgIHFzKCdib2R5Jykuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1oZWFkZXJIZWlnaHQnLFxuICAgICAgYCR7cXMoJ2hlYWRlcicpLm9mZnNldEhlaWdodCAtIDJ9cHhgXG4gICAgKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1uYXYnLCBgJHtuYXYub2Zmc2V0V2lkdGh9cHhgKTsgLy8gQ2hhbmdlIHRvIGRlc2lyZWQgY29sb3JcbiAgfSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBxcygnYm9keScpLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgJy0taGVhZGVySGVpZ2h0JyxcbiAgICAgIGAke25vZGUub2Zmc2V0SGVpZ2h0IC0gMn1weGBcbiAgICApXG4gIH0sIDEwMDApXG5cbiAgb24obmF2VG9nZ2xlLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlKG9wZW4sICdoaWRkZW4nKVxuICAgIHRvZ2dsZShjbG9zZSwgJ2hpZGRlbicpXG5cbiAgICB0b2dnbGUobWVudSwgJ2lzLW9wZW4nKVxuICB9KVxuXG4gIG9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KCctLW1lbnVPZmZzZXQnLCBgJHtub2RlLm9mZnNldEhlaWdodH1gKVxuICB9KVxuXG4gIGN0eC5vbignY2FydDp1cGRhdGVkJywgKHN0YXRlKSA9PiB7XG4gICAgY2FydENvdW50LmZvckVhY2goKGNvdW50KSA9PiAoY291bnQuaW5uZXJIVE1MID0gc3RhdGUuY2FydC5pdGVtX2NvdW50KSlcbiAgfSlcblxuICBjYXJ0Q291bnQuZm9yRWFjaChcbiAgICAoY291bnQpID0+IChjb3VudC5pbm5lckhUTUwgPSBjdHguZ2V0U3RhdGUoKS5jYXJ0Lml0ZW1fY291bnQpXG4gIClcblxuICBjdHgub24oJ21lbnU6Y2xvc2UnLCAoKSA9PiB7XG4gICAgZ3NhcC5mcm9tVG8oXG4gICAgICAnLm5hdi1tZW51LXdyYXAnLFxuICAgICAgeyB4OiAwIH0sXG4gICAgICB7IHg6ICctMTAwJScsIGR1cmF0aW9uOiAwLjMsIGVhc2U6IEV4cG8uZWFzZU91dCB9XG4gICAgKVxuXG4gICAgcmVtb3ZlKG1lbnVPcGVuLCAnaGlkZGVuJylcbiAgICBhZGQoaGVhZGVyQ2xvc2UsICdoaWRkZW4nKVxuICAgIGFkZChjbG9zZVpvbmUsICdoaWRkZW4nKVxuICB9KVxuXG4gIC8vaGFuZGxlIGhlYWRlciBsb2dvXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiA9PSAnLycpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICB9IGVsc2V7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2dvJylcbiAgfVxuXG4gIC8vdG9nZ2xlIGNhcnQgaWYgdXNlciBpcyBwb2ludGVkIHRvIGNhcnQgcGFnZVxuICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY2FydCcpID4gLTEpIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignI2NhcnQnKSA+IC0xKSB7XG4gICAgICBjdHguZW1pdCgnY2FydDp0b2dnbGUnLCAoc3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0T3BlbjogIXN0YXRlLmNhcnRPcGVuLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvI2NhcnQnXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSBcInBpY29hcHBcIjtcbmltcG9ydCBjaG9venkgZnJvbSBcImNob296eVwiO1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIG9uLCBxc2EgfSBmcm9tIFwiQHNlbGZhd2FyZS9tYXJ0aGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgcHJvZHVjdHMsIHRvZ2dsZSwgaWNvbiwgaGVybywgbGluayB9ID0gY2hvb3p5KG5vZGUpO1xuXG4gIGNvbnN0IGFsbFByb2R1Y3RzID0gSlNPTi5wYXJzZShwcm9kdWN0cz8uaW5uZXJIVE1MKS5wcm9kdWN0cztcblxuICBjb25zdCB1cGRhdGVUaGVtZSA9ICh0aGVtZSwgcHJpbWFyeSwgc2Vjb25kYXJ5LCB0ZXJ0aWFyeSkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXByaW1hcnlcIiwgYCR7cHJpbWFyeX1gKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zZWNvbmRhcnlcIiwgYCR7c2Vjb25kYXJ5fWApO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRlcnRpYXJ5XCIsIGAke3RlcnRpYXJ5fWApO1xuICAgIGRvY3VtZW50LmJvZHkuZGF0YXNldC50aGVtZSA9IHRoZW1lXG4gIH1cblxuICB1cGRhdGVUaGVtZShub2RlLmRhdGFzZXQudGhlbWUsIG5vZGUuZGF0YXNldC5wcmltYXJ5LCBub2RlLmRhdGFzZXQuc2Vjb25kYXJ5LCBub2RlLmRhdGFzZXQudGVydGlhcnkpXG5cbiAgb24odG9nZ2xlLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGxldCBidG4gPSBlLnRhcmdldFxuICAgIGxldCBpbmRleCA9IHBhcnNlSW50KGJ0bi5kYXRhc2V0LmluZGV4KSAtIDFcbiAgICB1cGRhdGVUaGVtZShidG4uZGF0YXNldC50aGVtZSwgYnRuLmRhdGFzZXQucHJpbWFyeSwgYnRuLmRhdGFzZXQuc2Vjb25kYXJ5LCBidG4uZGF0YXNldC50ZXJ0aWFyeSlcblxuICAgIHJlbW92ZSh0b2dnbGUsICdhY3RpdmUnKVxuICAgIGFkZChlLnRhcmdldCwgJ2FjdGl2ZScpXG5cbiAgICBoZXJvLnNyYyA9IGFsbFByb2R1Y3RzW2luZGV4XT8uaGVyb1xuICAgIGljb24uc3JjID0gYWxsUHJvZHVjdHNbaW5kZXhdPy5pY29uXG4gICAgbGluay5ocmVmID0gYWxsUHJvZHVjdHNbaW5kZXhdPy51cmxcblxuICAgIGN0eC5lbWl0KCd0aGVtZScpXG4gIH0pXG59KTtcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IG9uLCByZW1vdmUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgbHFpcCwgaW1nIH0gPSBjaG9venkobm9kZSlcblxuICBvbihpbWcsICdsb2FkJywgKCkgPT4ge1xuICAgIGltZy5kZWNvZGUoKS50aGVuKCgpID0+IHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGN0eC5lbWl0KCdsYXp5OmxvYWQnLCBudWxsLCB7IGlkOiBub2RlLmRhdGFzZXQuaWQgfSlcbiAgICAgICAgbGV0IG9mZiA9IG9uKGltZywgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgb2ZmKClcbiAgICAgICAgICBscWlwLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIHJlbW92ZShpbWcsICdvcGFjaXR5LTAnKVxuICAgICAgICBpbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgaW1nLnNyYyA9IGltZy5kYXRhc2V0LnNyY1xuICBpbWcuc3Jjc2V0ID0gaW1nLmRhdGFzZXQuc3Jjc2V0XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IG9uLCByZW1vdmUsIGFkZCwgaGFzLCBxcywgcXNhIH0gZnJvbSAnbWFydGhhJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHByaW1hcnkgfSA9IGNob296eShub2RlKVxuICBsZXQgY3VycmVudFggPSAwXG4gIGxldCB0YXJnZXRYID0gMFxuXG4gIHdpbmRvdy5zZXRJbnRlcnZhbChhbmltYXRpb25Mb29wLCAxNSlcblxuICBmdW5jdGlvbiBhbmltYXRpb25Mb29wKCkge1xuICAgIHRhcmdldFggPSBjdXJyZW50WCA+IHByaW1hcnkuc2Nyb2xsV2lkdGggPyAwIDogY3VycmVudFggKyAxXG5cbiAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RhcmdldFh9cHgpIHRyYW5zbGF0ZVooMHB4KWBcblxuICAgIGN1cnJlbnRYID0gdGFyZ2V0WFxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgb24sIHFzLCBhZGQsIHJlbW92ZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAna2xhdml5by1zdWJzY3JpYmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGZvcm1Db250ZW50LCBzdWNjZXNzLCBzdWJtaXQsIGVycm9yIH0gPSBjaG9venkobm9kZSlcblxuICBvbihzdWJtaXQsICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgbGlzdElkID0gJ1h0R0pXVydcbiAgICBsZXQgZW1haWwgPSBxcygnLmpzLWVtYWlsJywgbm9kZSkudmFsdWVcblxuICAgIGlmIChlbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICBzdWJzY3JpYmUobGlzdElkLCBlbWFpbCwge30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlbW92ZShzdWNjZXNzLCAnaGlkZGVuJylcbiAgICAgICAgYWRkKGZvcm1Db250ZW50LCAnaGlkZGVuJylcbiAgICAgICAgYWRkKGVycm9yLCAnaGlkZGVuJylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZShlcnJvciwgJ2hpZGRlbicpXG4gICAgfVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBhZGRWYXJpYW50IH0gZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL2NhcnQuanMnXG5pbXBvcnQgeyBxcywgcXNhLCBoYXMsIG9uIH0gZnJvbSAnbWFydGhhJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHN1YkRldGFpbFRvZ2dsZSwgc3ViRGV0YWlsLCBxdWFudGl0eSB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocXMoJy5qcy1wcm9kdWN0LWpzb24nLCBub2RlKS5pbm5lckhUTUwpXG4gIGNvbnN0IGFkZEJ0biA9IHFzKCcuYnRuLWFkZCcsIG5vZGUpXG4gIGNvbnN0IGFkZFRleHQgPVxuICAgIGFkZEJ0bi5pbm5lckhUTUwgfHxcbiAgICBgJHthZGRCdG4uZGF0YXNldD8ucHJlb3JkZXIgPT0gJ3RydWUnID8gJ1ByZS1PcmRlcicgOiAnQWRkIFRvIENhcnQnfSB8ICR7XG4gICAgICBhZGRCdG4uZGF0YXNldD8ucHJpY2VcbiAgICB9YFxuXG4gIGxldCB7IHNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnQsIHByb2R1Y3QgfSA9IGpzb25cbiAgbGV0IGN1cnJlbnRWYXJpYW50ID0gcHJvZHVjdC52YXJpYW50cy5maWx0ZXIoXG4gICAgKHYpID0+IHYuaWQgPT09IHNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnRcbiAgKVswXVxuXG4gIGN0eC5vbignY2FydDp0b2dnbGUnLCAoKSA9PiB7XG4gICAgYWRkQnRuLmlubmVySFRNTCA9IGFkZFRleHRcbiAgfSlcblxuICBvbihhZGRCdG4sICdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBhZGRCdG4uaW5uZXJIVE1MID0gJ0FkZGluZy4uLidcblxuICAgIC8vZ2V0IGFkZG9uc1xuICAgIHFzYSgnLmpzLWFkZG9uLnNlbGVjdGVkJywgbm9kZSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGFkZG9uSnNvbiA9IEpTT04ucGFyc2UocXMoJy5qcy1hZGRvbi1qc29uJywgZWwpLmlubmVySFRNTClcblxuICAgICAgbGV0IHsgYWRkb25TZWxlY3RlZE9yRmlyc3RBdmFpbGFibGVWYXJpYW50LCBhZGRvblByb2R1Y3QgfSA9IGFkZG9uSnNvblxuICAgICAgbGV0IGFkZG9uVmFyaWFudCA9IGFkZG9uUHJvZHVjdC52YXJpYW50cy5maWx0ZXIoXG4gICAgICAgICh2KSA9PiB2LmlkID09PSBhZGRvblNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnRcbiAgICAgIClbMF1cblxuICAgICAgYWRkVmFyaWFudChhZGRvblZhcmlhbnQsIDEsIG51bGwpXG4gICAgfSlcbiAgICAvLyBhZGRCdG4uaW5uZXJIVE1MID0gJ2FkZGluZy4uLidcblxuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSBxcygnc2VsZWN0W25hbWU9XCJpZFwiXScsIG5vZGUpLnZhbHVlXG5cbiAgICBjdXJyZW50VmFyaWFudCA9IHNlbGVjdGVkVmFyaWFudFxuICAgICAgPyBwcm9kdWN0LnZhcmlhbnRzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCA9PT0gcGFyc2VJbnQocXMoJ3NlbGVjdFtuYW1lPVwiaWRcIl0nLCBub2RlKS52YWx1ZSlcbiAgICAgICAgKVswXVxuICAgICAgOiBjdXJyZW50VmFyaWFudFxuXG4gICAgYWRkVmFyaWFudChjdXJyZW50VmFyaWFudCwgcXVhbnRpdHk/LnZhbHVlIHx8IDEsIG51bGwpXG4gICAgY29uc29sZS5sb2coanNvbilcbiAgfSlcblxuICByZXR1cm4gKCkgPT4ge31cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyByZW1vdmUsIGFkZCwgcXMsIG9uLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJvdXNlbCwgbmV4dCwgcHJldiwgY291bnRlciwgcHJvZHVjdEltYWdlcywgdmFyaWFudFRpdGxlLCBidG5zLCB0aHVtYiB9ID1cbiAgICBjaG9venkobm9kZSlcblxuICBsZXQgZW1ibGFcblxuICBjb25zdCBpbWFnZXMgPSBKU09OLnBhcnNlKHByb2R1Y3RJbWFnZXM/LmlubmVySFRNTCk/LmltYWdlc1xuICBpbWFnZXMuZm9yRWFjaCgoZWwpID0+IHt9KVxuXG4gIGNvbnN0IGluaXRFbWJsYSA9ICgpID0+IHtcbiAgICBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHsgbG9vcDogdHJ1ZSwgc2tpcFNuYXBzOiBmYWxzZSB9KVxuXG4gICAgaWYgKG5leHQgJiYgcHJldikge1xuICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAgIH1cblxuICAgIGxldCB2YXJpYW50SW1hZ2VzID0gcXNhKCcucHJvZHVjdC1pbWcnKVxuXG4gICAgYnRucy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgLy9yZW5kZXIgYnV0dG9uc1xuICAgIHZhcmlhbnRJbWFnZXMuZm9yRWFjaCgoaW1nLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcsIGluZGV4KVxuICAgICAgICBlbWJsYS5zY3JvbGxUbyhpbmRleClcbiAgICAgIH0pXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWwtZG90JylcbiAgICAgIGJ0bnMuYXBwZW5kQ2hpbGQoYnRuKVxuICAgIH0pXG5cbiAgICBhZGQocXMoJy5jYXJvdXNlbC1kb3Q6Zmlyc3QtY2hpbGQnKSwgJ2lzLWFjdGl2ZScpXG5cbiAgICBlbWJsYS5vbignc2VsZWN0JywgKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgICAgcmVtb3ZlKHFzKCcuY2Fyb3VzZWwtZG90LmlzLWFjdGl2ZScpLCAnaXMtYWN0aXZlJylcbiAgICAgICAgYWRkKFxuICAgICAgICAgIHFzKFxuICAgICAgICAgICAgYC5jYXJvdXNlbC1kb3Q6bnRoLWNoaWxkKCR7ZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCkgKyAxfSlgLFxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICksXG4gICAgICAgICAgJ2lzLWFjdGl2ZSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0RW1ibGEoKVxuXG4gIGN0eC5vbigndmFyaWFudDpjaGFuZ2UnLCAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRWYXJpYW50ID0gdmFyaWFudFRpdGxlLmlubmVySFRNTFxuXG4gICAgY2Fyb3VzZWwuaW5uZXJIVE1MID0gJydcblxuICAgIC8vcmVuZGVyIHZhcmlhbnQgaW1hZ2VzXG4gICAgY2Fyb3VzZWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBzZWxlY3Qtbm9uZSB3LWZ1bGwgaC1bMTAwdnddIG06aC1oZXJvIG06bWluLWgtW2NhbGMoMTAwdmgtMTNyZW0pXVwiPlxuICAgICAgICAke2ltYWdlc1xuICAgICAgICAgIC5tYXAoKGltZykgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpbWcuYWx0LnRvTG93ZXJDYXNlKCkgPT0gY3VycmVudFZhcmlhbnQgfHxcbiAgICAgICAgICAgICAgaW1nLmFsdC50b0xvd2VyQ2FzZSgpID09ICdhbGwnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgcHJvZHVjdC1pbWcgbTpweC0wIHJlbGF0aXZlIG1pbi13LVsxMDAlXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgYWJzb2x1dGUgbGVmdC0wIHRvcC0wXCIgc3JjPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTIvNzA2MS85NDU2LyR7aW1nLnNyY31cIiBhbHQ9XCIke2ltZy5hbHR9XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldCwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgIC8vcmVzZXQgY2Fyb3VzZWxcbiAgICBpZiAoZW1ibGEpIHtcbiAgICAgIGVtYmxhLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIC8vaW5pdGlhbGl6ZSBjYXJvdXNlbFxuICAgIGluaXRFbWJsYSgpXG4gIH0pXG5cbiAgb24odGh1bWIsICdjbGljaycsIChlKSA9PiB7XG4gICAgZW1ibGEuc2Nyb2xsVG8ocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCAtIDEpKVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBxcywgb24sIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBxdWFudGl0eSwgcmVtb3ZlLCBhZGQgfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IG1pbiA9IDFcbiAgY29uc3QgbWF4ID0gMTAwMFxuXG4gIGxldCBjb3VudCA9IDFcblxuICBjb25zb2xlLmxvZygnY291bnRlcicpXG5cbiAgY29uc3Qgc2V0ID0gKGkpID0+IHtcbiAgICBjb3VudCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4oaSwgbWF4IHx8IDEwMDAwKSlcblxuICAgIHF1YW50aXR5LmlubmVySFRNTCA9IGNvdW50XG4gICAgcXVhbnRpdHkudmFsdWUgPSBjb3VudFxuICB9XG5cbiAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXQoLS1jb3VudClcblxuICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKVxuICB9KVxuXG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0KCsrY291bnQpXG5cbiAgICBjb25zb2xlLmxvZygnYWRkJylcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyByZW1vdmUsIGFkZCwgb24sIHFzLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgb3B0aW9uU3ViLCBvcHRpb25PbmUsIG9wdGlvbldyYXAgfSA9IGNob296eShub2RlKVxuXG4gIGxldCBhZGRQcmljZSA9IHFzYSgnLmpzLWFkZFByaWNlJylcblxuICBpZiAob3B0aW9uU3ViKSB7XG4gICAgb24ob3B0aW9uU3ViLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICBhZGQocXMoJy5wcm9kdWN0LXZhcmlhbnQtd3JhcCcpLCAnaXMtc3Vic2NyaXB0aW9uJylcbiAgICAgIHJlbW92ZShvcHRpb25XcmFwLCAnc2VsZWN0ZWQtb25lJylcbiAgICAgIGFkZChvcHRpb25XcmFwLCAnc2VsZWN0ZWQtc3ViJylcbiAgICAgIGFkZChvcHRpb25TdWIsICdhY3RpdmUnKVxuICAgICAgcmVtb3ZlKG9wdGlvbk9uZSwgJ2FjdGl2ZScpXG5cbiAgICAgIGlmIChhZGRQcmljZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFkZFByaWNlLmZvckVhY2goKHByaWNlKSA9PiB7XG4gICAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gYCQke29wdGlvblN1Yi5kYXRhc2V0LnByaWNlfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb24ob3B0aW9uT25lLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmUocXMoJy5wcm9kdWN0LXZhcmlhbnQtd3JhcCcpLCAnaXMtc3Vic2NyaXB0aW9uJylcbiAgICAgIGFkZChvcHRpb25XcmFwLCAnc2VsZWN0ZWQtb25lJylcbiAgICAgIHJlbW92ZShvcHRpb25XcmFwLCAnc2VsZWN0ZWQtc3ViJylcbiAgICAgIHJlbW92ZShvcHRpb25TdWIsICdhY3RpdmUnKVxuICAgICAgYWRkKG9wdGlvbk9uZSwgJ2FjdGl2ZScpXG5cbiAgICAgIGlmIChhZGRQcmljZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFkZFByaWNlLmZvckVhY2goKHByaWNlKSA9PiB7XG4gICAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gYCQke29wdGlvbk9uZS5kYXRhc2V0LnByaWNlfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIHFzLCBxc2EsIG9uLCBoYXMsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgZ3NhcCwgRXhwbyB9IGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7XG4gICAgYWN0aXZlRnJlcXVlbmN5LFxuICAgIGNvbnRlbnQsXG4gICAgY29udGVudFdyYXAsXG4gICAgdG9nZ2xlRnJlcXVlbmN5LFxuICAgIGFycm93LFxuICAgIGZyZXF1ZW5jeU9wdGlvbixcbiAgICBzdWJPcHRpb24sXG4gICAgZnJlcXVlbmN5V3JhcCxcbiAgfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IHRvZ2dsZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50Lm9mZnNldEhlaWdodFxuXG4gICAgdG9nZ2xlKGNvbnRlbnRXcmFwLCAnYWN0aXZlJylcbiAgICB0b2dnbGUoYXJyb3csICdyb3RhdGUtOTAnKVxuICAgIHRvZ2dsZShhcnJvdywgJy1yb3RhdGUtOTAnKVxuXG4gICAgaWYgKGhhcyhjb250ZW50V3JhcCwgJ2FjdGl2ZScpKSB7XG4gICAgICBjb250ZW50V3JhcC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50SGVpZ2h0ICsgMTB9cHhgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnRXcmFwLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnXG4gICAgfVxuICB9XG5cbiAgb24odG9nZ2xlRnJlcXVlbmN5LCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIHRvZ2dsZU9wdGlvbnMoKVxuICB9KVxuXG4gIG9uKGZyZXF1ZW5jeU9wdGlvbiwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0b2dnbGVPcHRpb25zKClcblxuICAgIHFzYSgnLmpzLWZyZXF1ZW5jeU9wdGlvbicsIG5vZGUpLmZvckVhY2goKG9wdCkgPT4ge1xuICAgICAgcmVtb3ZlKG9wdCwgJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIGFkZChlLnRhcmdldCwgJ2FjdGl2ZScpXG5cbiAgICBsZXQgY3VyT3B0aW9uID0gZS50YXJnZXQuZGF0YXNldC5pZFxuXG4gICAgYWN0aXZlRnJlcXVlbmN5LmlubmVySFRNTCA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcbiAgICB0b2dnbGVGcmVxdWVuY3kuZGF0YXNldC5pZCA9IGN1ck9wdGlvblxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBxcywgcXNhLCBvbiwgaGFzLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgb3B0aW9uLCB2YXJpYW50VGl0bGUsIHN3YXRjaCB9ID0gY2hvb3p5KG5vZGUpXG4gIGxldCBhZGRCdG4gPSBxc2EoJy5qcy1hZGQtdG8tY2FydCcpXG4gIGxldCBvcHRpb25Hcm91cHMgPSBxc2EoJy5qcy1vcHRpb25Hcm91cCcpXG5cbiAgbGV0IHNlbGVjdGVkU3dhdGNoXG4gIGxldCBvcHRpb25zID0gcXNhKCcuanMtdmFyaWFudE9wdGlvbicsIG5vZGUpXG5cbiAgY29uc3QgdXBkYXRlVmFyaWFudCA9ICgpID0+IHtcbiAgICBpZiAoIXFzKCcuanMtc3dhdGNoJykpIHJldHVyblxuXG4gICAgc2VsZWN0ZWRTd2F0Y2ggPSBxcygnLmpzLXN3YXRjaC5hY3RpdmUnLCBub2RlKT8uZGF0YXNldD8udGl0bGUgfHwgbnVsbFxuXG4gICAgLy8gLy9maW5kIHZhcmlhbnQgdGhhdCBtYXRjaGVzIHRpdGxlIGFuZCBzaXplXG4gICAgY29uc3QgbmV3VmFyaWFudCA9IG9wdGlvbnMuZmluZChcbiAgICAgICh2YXJpYW50KSA9PiB2YXJpYW50LmRhdGFzZXQudGl0bGUgPT09IHNlbGVjdGVkU3dhdGNoXG4gICAgKVxuXG4gICAgLy9jbGVhciBhbGwgb3B0aW9uc1xuICAgIG9wdGlvbnMuZm9yRWFjaCgoc2VsZWN0ZWRWYXJpYW50KSA9PlxuICAgICAgc2VsZWN0ZWRWYXJpYW50LnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKVxuICAgIClcblxuICAgIC8vc2VsZWN0IG5ldyB2YXJpYW50XG4gICAgaWYgKG5ld1ZhcmlhbnQpIG5ld1ZhcmlhbnQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG5cbiAgICAvL2NvbmZpZ3VyZSBidXR0b24gd2l0aCBpbnZlbnRvcnlcbiAgICBpZiAoIW5ld1ZhcmlhbnQgfHwgbmV3VmFyaWFudC5kYXRhc2V0LmludmVudG9yeSA8IDEpIHtcbiAgICAgIGFkZEJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICBidG4uaW5uZXJIVE1MID0gJ091dCBPZiBTdG9jaydcbiAgICAgICAgYWRkKGJ0biwgJ29vcycpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGAke1xuICAgICAgICAgIGJ0bi5kYXRhc2V0LnByZW9yZGVyID09ICd0cnVlJyA/ICdQcmUtT3JkZXInIDogJ0FkZCBUbyBDYXJ0J1xuICAgICAgICB9IHwgJHtidG4uZGF0YXNldC5wcmljZX1gXG4gICAgICAgIHJlbW92ZShidG4sICdvb3MnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YXJpYW50U2VsZWN0ID0gKGN1clRpdGxlKSA9PiB7XG4gICAgLy9jbGVhciBzd2F0Y2hlc1xuICAgIHFzYSgnLmpzLXN3YXRjaCcpLmZvckVhY2goKHN3YXRjaCkgPT4ge1xuICAgICAgcmVtb3ZlKHN3YXRjaCwgJ2FjdGl2ZScpXG4gICAgICBzd2F0Y2guc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBmYWxzZSlcbiAgICB9KVxuXG4gICAgLy9zZWxlY3QgbmV3IHN3YXRjaFxuICAgIGxldCBzZWxlY3RlZFN3YXRjaCA9IHFzKGAuanMtc3dhdGNoW2RhdGEtdGl0bGU9XCIke2N1clRpdGxlfVwiXWAsIG5vZGUpXG4gICAgYWRkKHNlbGVjdGVkU3dhdGNoLCAnYWN0aXZlJylcbiAgICBzZWxlY3RlZFN3YXRjaC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsIHRydWUpXG5cbiAgICB2YXJpYW50VGl0bGUuaW5uZXJIVE1MID0gY3VyVGl0bGVcblxuICAgIGN0eC5lbWl0KCd2YXJpYW50OmNoYW5nZScpXG4gIH1cblxuICBvbihzd2F0Y2gsICdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGhhcyhlLnRhcmdldCwgJ2FjdGl2ZScpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgY3VyVGl0bGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKVxuXG4gICAgdmFyaWFudFNlbGVjdChjdXJUaXRsZSlcbiAgICB1cGRhdGVWYXJpYW50KClcbiAgfSlcblxuICAvL3VwZGF0ZSB2YXJpYW50IG9uIGZpcnN0IGxvYWRcbiAgaWYgKG9wdGlvbnMubGVuZ3RoID4gMSkgdXBkYXRlVmFyaWFudCgpXG5cbiAgY3R4Lm9uKCd2YXJpYW50OnVwZGF0ZScsICgpID0+IHtcbiAgICB1cGRhdGVWYXJpYW50KClcbiAgfSlcblxuICAvL25hdiBiYXIgc2VsZWN0b3JcbiAgLy8gcXNhKCcuanMtbmF2T3B0aW9uc1tkYXRhLWdyb3VwXScpLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gIC8vICAgbGV0IHN3YXRjaFRvZ2dsZSA9IHFzKCcuanMtbWVudVN3YXRjaCcsIGdyb3VwKVxuXG4gIC8vICAgb24oc3dhdGNoVG9nZ2xlLCAnY2xpY2snLCAoZSkgPT4ge1xuICAvLyAgICAgbGV0IGN1ckdyb3VwID0gZS50YXJnZXQuY2xvc2VzdCgnLmpzLW5hdk9wdGlvbnMnKVxuXG4gIC8vICAgICB0b2dnbGUocXMoJy5qcy1uYXZPcHRpb25Hcm91cCcsIGN1ckdyb3VwKSwgJ2hpZGRlbicpXG4gIC8vICAgICB0b2dnbGUocXMoJy5qcy1jaGV2cm9uTmF2JywgY3VyR3JvdXApLCAncm90YXRlLTE4MCcpXG4gIC8vICAgfSlcbiAgLy8gfSlcblxuICAvLyBxc2EoJy5qcy1zd2F0Y2hOYXYnKS5mb3JFYWNoKChuYXZTd2F0Y2gpID0+IHtcbiAgLy8gICBvbihuYXZTd2F0Y2gsICdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICBsZXQgY3VyVGl0bGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKVxuICAvLyAgICAgbGV0IGNvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1uYXZPcHRpb25zW2RhdGEtZ3JvdXBdJylcbiAgLy8gICAgIGxldCBjdXJHcm91cCA9IGNvbnRhaW5lci5kYXRhc2V0Py5ncm91cFxuXG4gIC8vICAgICB0b2dnbGUoZS50YXJnZXQuY2xvc2VzdCgnLmpzLW5hdk9wdGlvbkdyb3VwJyksICdoaWRkZW4nKVxuICAvLyAgICAgdG9nZ2xlKHFzKCcuanMtY2hldnJvbk5hdicsIGNvbnRhaW5lciksICdyb3RhdGUtMTgwJylcblxuICAvLyAgICAgLy9oaWRlIHNlbGVjdGVkIGZyb20gbGlzdFxuICAvLyAgICAgcXNhKCcuanMtc3dhdGNoTmF2JywgY29udGFpbmVyKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIC8vICAgICAgIGlmIChpdGVtLmRhdGFzZXQudGl0bGUgPT09IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUpIHtcbiAgLy8gICAgICAgICBhZGQoaXRlbSwgJ2hpZGRlbicpXG4gIC8vICAgICAgICAgcXMoJy5qcy1zZWxlY3RlZE5hdk9wdGlvbicsIGNvbnRhaW5lcikuaW5uZXJIVE1MID0gaXRlbS5kYXRhc2V0LnRpdGxlXG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgcmVtb3ZlKGl0ZW0sICdoaWRkZW4nKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuXG4gIC8vICAgICB2YXJpYW50U2VsZWN0KGN1clRpdGxlLCBjdXJHcm91cClcbiAgLy8gICAgIHVwZGF0ZVZhcmlhbnQoKVxuICAvLyAgIH0pXG4gIC8vIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgb24sIHFzLCBhZGQsIHJlbW92ZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAna2xhdml5by1zdWJzY3JpYmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGZvcm1Db250ZW50LCBzdWNjZXNzLCBzdWJtaXQgfSA9IGNob296eShub2RlKVxuXG4gIG9uKHN1Ym1pdCwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBsaXN0SWQgPSAnV3pHNzJzJ1xuICAgIGxldCBlbWFpbCA9IHFzKCcuanMtZW1haWwnLCBub2RlKS52YWx1ZVxuXG4gICAgc3Vic2NyaWJlKGxpc3RJZCwgZW1haWwsIHt9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmVtb3ZlKHN1Y2Nlc3MsICdoaWRkZW4nKVxuICAgICAgYWRkKGZvcm1Db250ZW50LCAnaGlkZGVuJylcblxuICAgICAgaWYgKHFzKCcuanMtZm9ybVRpdGxlJykpIHtcbiAgICAgICAgYWRkKHFzKCcuanMtZm9ybVRpdGxlJyksICdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICdlbWJsYS1jYXJvdXNlbCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgY2Fyb3VzZWwsIG5leHQsIHByZXYsIGNvdW50ZXIsIGFjdGl2ZUluZGV4IH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgdHJpbVNuYXBzOiB0cnVlLFxuICAgIGNvbnRhaW5TY3JvbGw6IHRydWUsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICB9KVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcblxuICAgIC8vIG9uKG5leHQsICdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGVtYmxhLnNjcm9sbE5leHRcbiAgICAvLyB9KVxuICB9XG5cbiAgaWYgKGNvdW50ZXIpIHtcbiAgICBvbihjb3VudGVyLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZW1ibGEuc2Nyb2xsVG8oZS50YXJnZXQuZGF0YXNldC5pbmRleClcbiAgICB9KVxuICB9XG5cbiAgZW1ibGEub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICBpZiAoY291bnRlcikge1xuICAgICAgcmVtb3ZlKGNvdW50ZXIsICdpcy1hY3RpdmUnKVxuICAgICAgYWRkKFxuICAgICAgICBxcyhgLmpzLWNvdW50ZXJbZGF0YS1pbmRleD1cIiR7ZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCl9XCJdYCwgbm9kZSksXG4gICAgICAgICdpcy1hY3RpdmUnXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4KSB7XG4gICAgICBhY3RpdmVJbmRleC5pbm5lckhUTUwgPSBlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKSArIDFcbiAgICB9XG4gIH0pXG5cbiAgLy8gcmV0dXJuICgpID0+IHtcbiAgLy8gICBpZiAobmV4dCkge1xuICAvLyAgICAgICBuZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gIC8vICAgICAgIHByZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcbiAgLy8gICB9XG4gIC8vIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwicGljb2FwcFwiO1xuaW1wb3J0IGNob296eSBmcm9tIFwiY2hvb3p5XCI7XG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EgfSBmcm9tIFwiQHNlbGZhd2FyZS9tYXJ0aGFcIjtcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gXCJlbWJsYS1jYXJvdXNlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJvdXNlbCwgbmV4dCwgcHJldiwgY291bnRlciwgYWN0aXZlSW5kZXggfSA9IGNob296eShub2RlKTtcblxuICBjb25zdCBlbWJsYSA9IEVtYmxhQ2Fyb3VzZWwoY2Fyb3VzZWwsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgdHJpbVNuYXBzOiB0cnVlLFxuICAgIGNvbnRhaW5TY3JvbGw6IHRydWUsXG4gICAgYWxpZ246IFwic3RhcnRcIixcbiAgfSk7XG5cbiAgZW1ibGEub24oXCJzZWxlY3RcIiwgKCkgPT4ge30pO1xufSk7XG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICAvLyBPcHRpb25zIGZvciB0aGUgSW50ZXJzZWN0aW9uIE9ic2VydmVyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcm9vdDogbnVsbCxcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IDAsIC8vIEFkanVzdCBhcyBuZWVkZWQsIDAuNSBtZWFucyBhdCBsZWFzdCA1MCUgb2YgdGhlIHZpZGVvIG11c3QgYmUgaW4gdmlld1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgdmlkZW8gY29tZXMgaW50byB2aWV3XG4gIGZ1bmN0aW9uIGhhbmRsZUludGVyc2VjdGlvbihlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAvLyBMb2FkIHRoZSB2aWRlb1xuICAgICAgICBub2RlLnNyYyA9IG5vZGUuZGF0YXNldC52aWRlb1xuICAgICAgICBub2RlLmF1dG9wbGF5ID0gdHJ1ZVxuICAgICAgICBub2RlLmxvb3AgPSB0cnVlXG5cbiAgICAgICAgLy8gVW5vYnNlcnZlIHRvIHByZXZlbnQgZnVydGhlciB1bm5lY2Vzc2FyeSBjaGVja3NcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKG5vZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXVzZSB0aGUgdmlkZW8gd2hlbiBpdCBnb2VzIG91dCBvZiB2aWV3XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKVxuICAgICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5wYXVzZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXIgd2l0aCB0aGUgY2FsbGJhY2sgYW5kIG9wdGlvbnNcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlSW50ZXJzZWN0aW9uLCBvcHRpb25zKVxuXG4gIC8vIE9ic2VydmUgdGhlIHZpZGVvIHBsYWNlaG9sZGVyXG4gIG9ic2VydmVyLm9ic2VydmUobm9kZSlcbn0pXG4iLCJpbXBvcnQgb3BlcmF0b3IgZnJvbSAnb3BlcmF0b3InXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG4vKipcbiAqIG9wZXJhdG9yIGlzIGEgdGlueSBcIlBKQVhcIiBsaWJyYXJ5LCBwbGVhc2UgaGF2ZSBhIGxvb2sgYXQgdGhlIGRvY3MgZm9yXG4gKiBtb3JlIGluZm9cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc3RyYXR0b25iYWlsZXkvb3BlcmF0b3JcbiAqL1xuY29uc3Qgcm91dGVyID0gb3BlcmF0b3IoJyNNYWluQ29udGVudCcsIFtcbiAgLyoqXG4gICAqIGNyZWF0ZXMgYSBwYWdlIHRyYW5zaXRpb25cbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXN0cmF0dG9uYmFpbGV5L29wZXJhdG9yI3RyYW5zaXRpb24tYW5pbWF0aW9uXG4gICAqL1xuICAoKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgICBjb25zdCBlbnRlciA9ICgpID0+IHtcbiAgICAgICAgcmVzKClcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgICAgfVxuXG4gICAgICB0bC50bygnbWFpbicsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgb25Db21wbGV0ZTogZW50ZXIgfSkudG8oXG4gICAgICAgICdtYWluJyxcbiAgICAgICAge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pLFxuICAvLyB7XG4gIC8vICAgcGF0aDogJy9hY2NvdW50LyonLFxuICAvLyAgIGlnbm9yZTogdHJ1ZSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHBhdGg6ICcvYWNjb3VudC8nLFxuICAvLyAgIGlnbm9yZTogdHJ1ZSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHBhdGg6ICcvYmxvZ3MvKicsXG4gIC8vICAgaWdub3JlOiB0cnVlLFxuICAvLyB9LFxuICB7XG4gICAgcGF0aDogJyonLFxuICAgIGlnbm9yZTogdHJ1ZSxcbiAgfSxcbl0pXG5cbnJvdXRlci5vbignYWZ0ZXInLCAoeyBwYXRobmFtZSB9KSA9PiB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHBhdGhuYW1lKVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGFnZXRpdGxlXScpICE9IHVuZGVmaW5lZCkge1xuICAgIGxldCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wYWdldGl0bGVdJykuZGF0YXNldC5wYWdldGl0bGVcbiAgICBsZXQgc2hvcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2hvcHRpdGxlXScpLmRhdGFzZXQuc2hvcHRpdGxlXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgJHtwYWdlVGl0bGV9YFxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnRpdGxlID0gJ1Byb21pc2VkIEdyb3VuZHMnXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIiwiaW1wb3J0IGZldGNoIGZyb20gJ3VuZmV0Y2gnXG5pbXBvcnQgYXBwIGZyb20gJ2Jhc2Uvc2NyaXB0cy9hcHAuanMnXG5pbXBvcnQgeyBxcyB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVmFyaWFudCh2YXJpYW50LCBxdWFudGl0eSwgc2VsbGluZ19wbGFuKSB7XG4gIGNvbnN0IG51bUF2YWlsYWJsZSA9XG4gICAgdmFyaWFudC5pbnZlbnRvcnlfcG9saWN5ID09PSAnZGVueScgJiZcbiAgICB2YXJpYW50LmludmVudG9yeV9tYW5hZ2VtZW50ID09PSAnc2hvcGlmeSdcbiAgICAgID8gdmFyaWFudC5pbnZlbnRvcnlfcXVhbnRpdHlcbiAgICAgIDogbnVsbCAvLyBudWxsIG1lYW5zIHRoZXkgY2FuIGFkZCBhcyBtYW55IGFzIHRoZXkgd2FudFxuXG4gIHJldHVybiBmZXRjaENhcnQoKS50aGVuKCh7IGl0ZW1zIH0pID0+IHtcbiAgICBjb25zdCBleGlzdGluZyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdmFyaWFudC5pZClbMF0gfHwge31cbiAgICBjb25zdCBudW1SZXF1ZXN0ZWQgPSAoZXhpc3RpbmcucXVhbnRpdHkgfHwgMCkgKyBxdWFudGl0eVxuXG4gICAgaWYgKG51bUF2YWlsYWJsZSAhPT0gbnVsbCAmJiBudW1SZXF1ZXN0ZWQgPiBudW1BdmFpbGFibGUpIHtcbiAgICAgIGNvbnN0IGVyciA9IGBUaGVyZSBhcmUgb25seSAke251bUF2YWlsYWJsZX0gb2YgdGhhdCBwcm9kdWN0IGF2YWlsYWJsZSwgcmVxdWVzdGVkICR7bnVtUmVxdWVzdGVkfS5gXG4gICAgICBhcHAuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYWRkSXRlbUJ5SWQodmFyaWFudC5pZCwgcXVhbnRpdHksIHNlbGxpbmdfcGxhbilcbiAgICB9XG4gIH0pXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBZGRvbihpZCwgcXVhbnRpdHkpIHtcbi8vICAgcmV0dXJuIGZldGNoQ2FydCgpLnRoZW4oKHsgaXRlbXMgfSkgPT4ge1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIGlmIChpdGVtc1tpXS52YXJpYW50X2lkID09PSBwYXJzZUludChpZCkpIHtcbi8vICAgICAgICAgcmV0dXJuIGNoYW5nZUFkZG9uKGkgKyAxLCBxdWFudGl0eSkgLy8gc2hvcGlmeSBjYXJ0IGlzIGEgMS1iYXNlZCBpbmRleFxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfSlcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFkZG9uKGlkLCBzZWxsaW5nX3BsYW4sIHF1YW50aXR5LCBsaW5rKSB7XG4gIHJldHVybiBmZXRjaENhcnQoKS50aGVuKCh7IGl0ZW1zIH0pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvL2NoZWNrIGlmIGl0ZW0gaXMgcmVjdXJyaW5nXG4gICAgICBpZiAoc2VsbGluZ19wbGFuICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGl0ZW1zW2ldLnNlbGxpbmdfcGxhbl9hbGxvY2F0aW9uKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXRlbXNbaV0udmFyaWFudF9pZCA9PT0gcGFyc2VJbnQoaWQpICYmXG4gICAgICAgICAgICBpdGVtc1tpXS5zZWxsaW5nX3BsYW5fYWxsb2NhdGlvbi5zZWxsaW5nX3BsYW4uaWQgPT09XG4gICAgICAgICAgICAgIHBhcnNlSW50KHNlbGxpbmdfcGxhbilcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VBZGRvbihpICsgMSwgcXVhbnRpdHksIGxpbmspIC8vIHNob3BpZnkgY2FydCBpcyBhIDEtYmFzZWQgaW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVtc1tpXS52YXJpYW50X2lkID09PSBwYXJzZUludChpZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hhbmdlQWRkb24oaSArIDEsIHF1YW50aXR5LCBsaW5rKSAvLyBzaG9waWZ5IGNhcnQgaXMgYSAxLWJhc2VkIGluZGV4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBZGRvbihpZCkge1xuLy8gICByZXR1cm4gdXBkYXRlQWRkb24oaWQsIDApXG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCBsaW5rKSB7XG4gIHJldHVybiB1cGRhdGVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCAwLCBsaW5rKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBZGRvbihsaW5lLCBxdWFudGl0eSwgbGluaykge1xuICBhcHAuZW1pdCgnY2FydDp1cGRhdGluZycpXG5cbiAgcmV0dXJuIGZldGNoKCcvY2FydC9jaGFuZ2UuanMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsaW5lLCBxdWFudGl0eSB9KSxcbiAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChjYXJ0KSA9PiB7XG4gICAgICBhcHAuaHlkcmF0ZSh7IGNhcnQ6IGNhcnQgfSlcbiAgICAgIGFwcC5lbWl0KCdjYXJ0OnVwZGF0ZWQnLCB7IGNhcnQ6IGNhcnQgfSlcblxuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rXG4gICAgICB9XG4gICAgICByZXR1cm4gY2FydFxuICAgIH0pXG59XG5cbi8qKlxuICogV2FybmluZzogdGhpcyBkb2VzIG5vdCBjaGVjayBhdmFpbGFibGUgcHJvZHVjdHMgZmlyc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1CeUlkKGlkLCBxdWFudGl0eSwgc2VsbGluZ19wbGFuKSB7XG4gIGFwcC5lbWl0KCdjYXJ0OnVwZGF0aW5nJylcblxuICByZXR1cm4gZmV0Y2goJy9jYXJ0L2FkZC5qcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkLCBxdWFudGl0eSwgc2VsbGluZ19wbGFuIH0pLFxuICB9KVxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAudGhlbigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoQ2FydCgpLnRoZW4oKGNhcnQpID0+IHtcbiAgICAgICAgbGV0IHBpeCA9IHFzKCcuY29sbGVjdGlvbi1waXgnKVxuICAgICAgICBhcHAuaHlkcmF0ZSh7IGNhcnQ6IGNhcnQgfSlcbiAgICAgICAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRlZCcpXG4gICAgICAgIGlmIChwaXggPT0gdW5kZWZpbmVkIHx8IGFwcC5nZXRTdGF0ZSgpLmNhcnQuaXRlbV9jb3VudCA+PSA2KSB7XG4gICAgICAgICAgYXBwLmVtaXQoJ2NhcnQ6dG9nZ2xlJywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjYXJ0T3BlbjogIXN0YXRlLmNhcnRPcGVuLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gYXBwLmVtaXQoJ3VwZGF0ZWQnLCB7IGl0ZW0sIGNhcnQgfSlcbiAgICAgICAgcmV0dXJuIHsgaXRlbSwgY2FydCB9XG4gICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhcnQoKSB7XG4gIHJldHVybiBmZXRjaCgnL2NhcnQuanMnLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG59XG4iLCIvKipcbiAqIEN1cnJlbmN5IEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBIGNvbGxlY3Rpb24gb2YgdXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGhlbHAgd2l0aCBjdXJyZW5jeSBmb3JtYXR0aW5nXG4gKlxuICogQ3VycmVudCBjb250ZW50c1xuICogLSBmb3JtYXRNb25leSAtIFRha2VzIGFuIGFtb3VudCBpbiBjZW50cyBhbmQgcmV0dXJucyBpdCBhcyBhIGZvcm1hdHRlZCBkb2xsYXIgdmFsdWUuXG4gKlxuICovXG5cbi8qKlxuICogRm9ybWF0IG1vbmV5IHZhbHVlcyBiYXNlZCBvbiB5b3VyIHNob3AgY3VycmVuY3kgc2V0dGluZ3NcbiAqIEBwYXJhbSAge051bWJlcnxzdHJpbmd9IGNlbnRzIC0gdmFsdWUgaW4gY2VudHMgb3IgZG9sbGFyIGFtb3VudCBlLmcuIDMwMCBjZW50c1xuICogb3IgMy4wMCBkb2xsYXJzXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGZvcm1hdCAtIHNob3AgbW9uZXlfZm9ybWF0IHNldHRpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdmFsdWUgLSBmb3JtYXR0ZWQgdmFsdWVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoY2VudHMsIGZvcm1hdCA9ICd7e2Ftb3VudH19Jykge1xuICBpZiAodHlwZW9mIGNlbnRzID09PSAnc3RyaW5nJykge1xuICAgIGNlbnRzID0gY2VudHMucmVwbGFjZSgnLicsICcnKVxuICB9XG5cbiAgbGV0IHZhbHVlID0gJydcbiAgY29uc3QgcGxhY2Vob2xkZXJSZWdleCA9IC9cXHtcXHtcXHMqKFxcdyspXFxzKlxcfVxcfS9cblxuICBmdW5jdGlvbiBmb3JtYXRXaXRoRGVsaW1pdGVycyhudW1iZXIsIHByZWNpc2lvbiwgdGhvdXNhbmRzLCBkZWNpbWFsKSB7XG4gICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDJcbiAgICB0aG91c2FuZHMgPSB0aG91c2FuZHMgfHwgJywnXG4gICAgZGVjaW1hbCA9IGRlY2ltYWwgfHwgJy4nXG5cbiAgICBpZiAoaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBudW1iZXIgPSAobnVtYmVyIC8gMTAwLjApLnRvRml4ZWQocHJlY2lzaW9uKVxuXG4gICAgY29uc3QgcGFydHMgPSBudW1iZXIuc3BsaXQoJy4nKVxuICAgIGNvbnN0IGRvbGxhcnNBbW91bnQgPSBwYXJ0c1swXS5yZXBsYWNlKFxuICAgICAgLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZyxcbiAgICAgICckMScgKyB0aG91c2FuZHNcbiAgICApXG4gICAgY29uc3QgY2VudHNBbW91bnQgPSBwYXJ0c1sxXSA/IGRlY2ltYWwgKyBwYXJ0c1sxXSA6ICcnXG5cbiAgICBpZiAoY2VudHNBbW91bnQgPiAwKSB7XG4gICAgICByZXR1cm4gZG9sbGFyc0Ftb3VudCArIGNlbnRzQW1vdW50XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkb2xsYXJzQW1vdW50XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChmb3JtYXQubWF0Y2gocGxhY2Vob2xkZXJSZWdleClbMV0pIHtcbiAgICBjYXNlICdhbW91bnQnOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYW1vdW50X25vX2RlY2ltYWxzJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDApXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF93aXRoX3NwYWNlX3NlcGFyYXRvcic6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAyLCAnICcsICcuJylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYW1vdW50X25vX2RlY2ltYWxzX3dpdGhfY29tbWFfc2VwYXJhdG9yJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDAsICcsJywgJy4nKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhbW91bnRfbm9fZGVjaW1hbHNfd2l0aF9zcGFjZV9zZXBhcmF0b3InOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMCwgJyAnKVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXQucmVwbGFjZShwbGFjZWhvbGRlclJlZ2V4LCB2YWx1ZSlcbn1cbiIsIi8qKlxuICogSW1hZ2UgSGVscGVyIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEEgY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgdGhhdCBoZWxwIHdpdGggYmFzaWMgaW1hZ2Ugb3BlcmF0aW9ucy5cbiAqXG4gKi9cblxuLyoqXG4gKiBQcmVsb2FkcyBhbiBpbWFnZSBpbiBtZW1vcnkgYW5kIHVzZXMgdGhlIGJyb3dzZXJzIGNhY2hlIHRvIHN0b3JlIGl0IHVudGlsIG5lZWRlZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpbWFnZXMgLSBBIGxpc3Qgb2YgaW1hZ2UgdXJsc1xuICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBBIHNob3BpZnkgaW1hZ2Ugc2l6ZSBhdHRyaWJ1dGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoaW1hZ2VzLCBzaXplKSB7XG4gIGlmICh0eXBlb2YgaW1hZ2VzID09PSAnc3RyaW5nJykge1xuICAgIGltYWdlcyA9IFtpbWFnZXNdXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbWFnZSA9IGltYWdlc1tpXVxuICAgIGxvYWRJbWFnZShnZXRTaXplZEltYWdlVXJsKGltYWdlLCBzaXplKSlcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGFuZCBjYWNoZXMgYW4gaW1hZ2UgaW4gdGhlIGJyb3dzZXJzIGNhY2hlLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBBbiBpbWFnZSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZShwYXRoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIG5ldyBJbWFnZSgpLnNyYyA9IHBhdGhcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIFNob3BpZnkgaW1hZ2UgYXR0cmlidXRlIHNpemVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltYWdlU2l6ZShzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgdmFyIG1hdGNoID0gc3JjLm1hdGNoKFxuICAgIC8uK18oKD86cGljb3xpY29ufHRodW1ifHNtYWxsfGNvbXBhY3R8bWVkaXVtfGxhcmdlfGdyYW5kZSl8XFxkezEsNH14XFxkezAsNH18eFxcZHsxLDR9KVtfXFwuQF0vXG4gIClcbiAgLyogZXNsaW5nLWVuYWJsZSAqL1xuXG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiBtYXRjaFsxXVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGEgU2hvcGlmeSBzaXplIGF0dHJpYnV0ZSB0byBhIFVSTFxuICpcbiAqIEBwYXJhbSBzcmNcbiAqIEBwYXJhbSBzaXplXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNpemVkSW1hZ2VVcmwoc3JjLCBzaXplKSB7XG4gIGlmIChzaXplID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNyY1xuICB9XG5cbiAgaWYgKHNpemUgPT09ICdtYXN0ZXInKSB7XG4gICAgcmV0dXJuIHJlbW92ZVByb3RvY29sKHNyYylcbiAgfVxuXG4gIHZhciBtYXRjaCA9IHNyYy5tYXRjaCgvXFwuKGpwZ3xqcGVnfGdpZnxwbmd8Ym1wfGJpdG1hcHx0aWZmfHRpZikoXFw/dj1cXGQrKT8kL2kpXG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIHByZWZpeCA9IHNyYy5zcGxpdChtYXRjaFswXSlcbiAgICB2YXIgc3VmZml4ID0gbWF0Y2hbMF1cblxuICAgIHJldHVybiByZW1vdmVQcm90b2NvbChwcmVmaXhbMF0gKyAnXycgKyBzaXplICsgc3VmZml4KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3RvY29sKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvaHR0cChzKT86LywgJycpXG59XG4iLCJpbXBvcnQgeyBxcywgcmVtb3ZlLCBhZGQgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZVNldHVwKCkge1xuICBsZXQgYW5ub3VuY2VCYXIgPSBxcygnLmpzLWFubm91bmNlQmFyJylcblxuICBpZiAoYW5ub3VuY2VCYXIpIHtcbiAgICBhZGQoYW5ub3VuY2VCYXIsICdoaWRkZW4nKVxuICB9XG5cbiAgaWYgKHFzKGAuanMtYW5ub3VuY2VCYXJbZGF0YS1wYWdlPVwiJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9XCJdYCkpIHtcbiAgICByZW1vdmUoXG4gICAgICBxcyhgLmpzLWFubm91bmNlQmFyW2RhdGEtcGFnZT1cIiR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfVwiXWApLFxuICAgICAgJ2hpZGRlbidcbiAgICApXG4gIH0gZWxzZSBpZiAocXMoYC5qcy1hbm5vdW5jZUJhcjpub3QoW2RhdGEtcGFnZV0pYCkpIHtcbiAgICByZW1vdmUocXMoYC5qcy1hbm5vdW5jZUJhcjpub3QoW2RhdGEtcGFnZV0pYCksICdoaWRkZW4nKVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJiYXNlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3b3JrZmxvd1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3b3JrZmxvd1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Jhc2Uvc2NyaXB0cy9iYXNlLmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9iYXNlL3N0eWxlcy9iYXNlLnNjc3NcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInBpY29hcHAiLCJhY2NvdW50TG9naW4iLCJhY2NvdW50QWRkcmVzc2VzIiwibGF6eSIsImhlYWRlciIsImNhcnREcmF3ZXIiLCJjYXJ0RHJhd2VySXRlbSIsInByb2R1Y3RDYXJvdXNlbCIsInByb2R1Y3QiLCJwcm9kdWN0Q291bnRlciIsInByb2R1Y3RWYXJpYW50IiwicHJvZHVjdE9wdGlvbnMiLCJjb2xsZWN0aW9uIiwiZmFxcyIsImNoZWNrb3V0IiwibmV3c2xldHRlciIsImNhcm91c2VsIiwiZm9vdGVyIiwiY29udGFjdCIsIm1hcnF1ZWUiLCJibG9nRmlsdGVyIiwidmlkZW8iLCJzaWdudXAiLCJiYWNraW5zdG9jayIsInByb2R1Y3RTdWJzY3JpcHRpb25zIiwiYWJvdXQiLCJoZXJvIiwiYmFubmVyIiwic29jaWFsIiwiY2FyZHMiLCJmYXFzSW1hZ2UiLCJzdGVwcyIsInN0YXRlIiwiY2FydE9wZW4iLCJjb21wb25lbnRzIiwiYmluZCIsInVwZGF0ZSIsImFwcCIsInJvdXRlciIsImZldGNoQ2FydCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicXMiLCJyZW1vdmUiLCJwYWdlU2V0dXAiLCJ2aCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZ2lzdGVyUGx1Z2luIiwib24iLCJ0aXRsZSIsInBhdGhuYW1lIiwidW5tb3VudCIsIm1vdW50IiwiZW1pdCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiY2FydCIsImh5ZHJhdGUiLCJjb21wb25lbnQiLCJjaG9venkiLCJhZGQiLCJxc2EiLCJ0b2dnbGUiLCJTY3JvbGxUb1BsdWdpbiIsIm5vZGUiLCJjdHgiLCJhbmNob3JzIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpbmRleCIsImFuY2hvciIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwiYXBwZW5kQ2hpbGQiLCJ0byIsImR1cmF0aW9uIiwic2Nyb2xsVG8iLCJ5Iiwib2Zmc2V0WSIsImVhc2UiLCJzZXRBY3RpdmUiLCJ0YXJnZXQiLCJ1dGlscyIsInRvQXJyYXkiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJvbkVudGVyIiwic2VsZiIsIm9uTGVhdmVCYWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImltZyIsIm9ubG9hZCIsInJlZnJlc2giLCJzZXRUaW1lb3V0IiwidHJpZ2dlcnMiLCJnZXRBbGwiLCJraWxsIiwiYWRkV3JhcCIsInRvZ2dsZUFkZCIsInRvZ2dsZUVkaXQiLCJlZGl0V3JhcCIsInVuZGVmaW5lZCIsImxvZ2luIiwicXVlcnlTZWxlY3RvciIsInJlY292ZXIiLCJyZWNvdmVyTGluayIsImNhbmNlbFJlY292ZXJMaW5rIiwicmVjb3ZlcklzVGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwibWF0Y2giLCJzdWNjZXNzTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXkiLCJlbWFpbCIsImJpcyIsImJpc2NvbnRlbnQiLCJzdWNjZXNzIiwiYmlzd3JhcCIsIm9wZW5iaXMiLCJjbG9zZWJpcyIsImZvcm1iaXMiLCJjdXJyZW50VmFyaWFudCIsInZhcmlhbnQiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwiYSIsInZhbHVlIiwicGxhdGZvcm0iLCJzdG9yZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImltYWdlcyIsImFsbEltYWdlcyIsIkpTT04iLCJwYXJzZSIsImFsbEJsb2NrcyIsInRoZW1lSW1hZ2VzIiwiY3VycmVudFRoZW1lIiwiYm9keSIsInRoZW1lIiwicHVzaCIsInNyYyIsImltYWdlIiwiZmlsdGVyVG9nZ2xlIiwiY2xlYXJGaWx0ZXIiLCJocmVmIiwiaW5jbHVkZXMiLCJ0YWciLCJzcGxpdCIsInRhcmdldFRhZyIsImVsIiwiRW1ibGFDYXJvdXNlbCIsIm5leHQiLCJwcmV2IiwiY291bnRlciIsImFjdGl2ZUluZGV4IiwiZW1ibGEiLCJsb29wIiwic2tpcFNuYXBzIiwidHJpbVNuYXBzIiwiY29udGFpblNjcm9sbCIsImFsaWduIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJzZWxlY3RlZFNjcm9sbFNuYXAiLCJzcGVlZCIsImdldFNpemVkSW1hZ2VVcmwiLCJpbWFnZVNpemUiLCJmb3JtYXRNb25leSIsIlBvd2VyNCIsInRsIiwidGltZWxpbmUiLCJYIiwiY3JlYXRlSXRlbSIsImlkIiwidmFyaWFudF9pZCIsInByb2R1Y3RfdGl0bGUiLCJwcmljZSIsImxpbmVfcHJpY2UiLCJvcmlnaW5hbF9wcmljZSIsIm9yaWdpbmFsX2xpbmVfcHJpY2UiLCJ2YXJpYW50X3RpdGxlIiwicXVhbnRpdHkiLCJpdGVtIiwic2VsbGluZ19wbGFuX2FsbG9jYXRpb24iLCJzZWxsaW5nX3BsYW4iLCJyZW5kZXJJdGVtcyIsIml0ZW1zIiwibGVuZ3RoIiwicmVkdWNlIiwibWFya3VwIiwib3ZlcmxheSIsImNsb3NlQnV0dG9uIiwic3VidG90YWwiLCJpdGVtc1Jvb3QiLCJsb2FkaW5nIiwicmVuZGVyIiwidG90YWxfcHJpY2UiLCJvcGVuIiwieCIsImVhc2VPdXQiLCJvbkNvbXBsZXRlIiwiY2xvc2UiLCJnZXRTdGF0ZSIsImNoZWNrQ2FydCIsInJlbW92ZUFkZG9uIiwidXBkYXRlQWRkb24iLCJyZW1vdmVycyIsImRlY3JlYXNlIiwiaW5jcmVhc2UiLCJjdXJyZW50UXR5IiwiZ2V0QXR0cmlidXRlIiwicmVtIiwibGluayIsInBhcnNlSW50Iiwic3VibWl0Iiwib2ZmRW1haWwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJmYXEiLCJpbm5lciIsInBsdXMiLCJvZmZzZXRIZWlnaHQiLCJhcHBlbmQiLCJzZWN0aW9uQ29udGFpbmVyIiwidGhlbWVJbWFnZSIsImZpbmQiLCJFeHBvIiwiY2FydFRvZ2dsZSIsImFubm91bmNlQmFyIiwiYW5ub3VuY2VDbG9zZSIsIm1lbnUiLCJuYXYiLCJuYXZUb2dnbGUiLCJoZWFkZXJDbG9zZSIsImNsb3NlWm9uZSIsImNhcnRDb3VudCIsIm9mZnNldFdpZHRoIiwiY291bnQiLCJpdGVtX2NvdW50IiwiZnJvbVRvIiwibWVudU9wZW4iLCJpbmRleE9mIiwicHJvZHVjdHMiLCJpY29uIiwiYWxsUHJvZHVjdHMiLCJ1cGRhdGVUaGVtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsImJ0biIsImxxaXAiLCJkZWNvZGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvZmYiLCJzcmNzZXQiLCJoYXMiLCJjdXJyZW50WCIsInRhcmdldFgiLCJzZXRJbnRlcnZhbCIsImFuaW1hdGlvbkxvb3AiLCJzY3JvbGxXaWR0aCIsInRyYW5zZm9ybSIsInN1YnNjcmliZSIsImZvcm1Db250ZW50IiwiZXJyb3IiLCJsaXN0SWQiLCJhZGRWYXJpYW50Iiwic3ViRGV0YWlsVG9nZ2xlIiwic3ViRGV0YWlsIiwianNvbiIsImFkZEJ0biIsImFkZFRleHQiLCJwcmVvcmRlciIsInNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnQiLCJ2YXJpYW50cyIsImZpbHRlciIsInYiLCJhZGRvbkpzb24iLCJhZGRvblNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnQiLCJhZGRvblByb2R1Y3QiLCJhZGRvblZhcmlhbnQiLCJzZWxlY3RlZFZhcmlhbnQiLCJwcm9kdWN0SW1hZ2VzIiwidmFyaWFudFRpdGxlIiwiYnRucyIsInRodW1iIiwiaW5pdEVtYmxhIiwidmFyaWFudEltYWdlcyIsIm1hcCIsImFsdCIsInRvTG93ZXJDYXNlIiwiam9pbiIsImRlc3Ryb3kiLCJtaW4iLCJtYXgiLCJzZXQiLCJpIiwiTWF0aCIsIm9wdGlvblN1YiIsIm9wdGlvbk9uZSIsIm9wdGlvbldyYXAiLCJhZGRQcmljZSIsImFjdGl2ZUZyZXF1ZW5jeSIsImNvbnRlbnQiLCJjb250ZW50V3JhcCIsInRvZ2dsZUZyZXF1ZW5jeSIsImFycm93IiwiZnJlcXVlbmN5T3B0aW9uIiwic3ViT3B0aW9uIiwiZnJlcXVlbmN5V3JhcCIsInRvZ2dsZU9wdGlvbnMiLCJjb250ZW50SGVpZ2h0IiwibWF4SGVpZ2h0Iiwib3B0IiwiY3VyT3B0aW9uIiwib3B0aW9uIiwic3dhdGNoIiwib3B0aW9uR3JvdXBzIiwic2VsZWN0ZWRTd2F0Y2giLCJvcHRpb25zIiwidXBkYXRlVmFyaWFudCIsIm5ld1ZhcmlhbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbnZlbnRvcnkiLCJ2YXJpYW50U2VsZWN0IiwiY3VyVGl0bGUiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImhhbmRsZUludGVyc2VjdGlvbiIsImVudHJpZXMiLCJvYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJhdXRvcGxheSIsInVub2JzZXJ2ZSIsInBhdXNlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwib3BlcmF0b3IiLCJyZXMiLCJlbnRlciIsInNjcm9sbFRvcCIsIm9wYWNpdHkiLCJwYXRoIiwiaWdub3JlIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInBhZ2VUaXRsZSIsInBhZ2V0aXRsZSIsInNob3BUaXRsZSIsInNob3B0aXRsZSIsImZldGNoIiwibnVtQXZhaWxhYmxlIiwiaW52ZW50b3J5X3BvbGljeSIsImludmVudG9yeV9tYW5hZ2VtZW50IiwiaW52ZW50b3J5X3F1YW50aXR5IiwiZXhpc3RpbmciLCJudW1SZXF1ZXN0ZWQiLCJlcnIiLCJFcnJvciIsImFkZEl0ZW1CeUlkIiwiY2hhbmdlQWRkb24iLCJsaW5lIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwic3RyaW5naWZ5IiwiciIsInBpeCIsImNlbnRzIiwiZm9ybWF0IiwicmVwbGFjZSIsInBsYWNlaG9sZGVyUmVnZXgiLCJmb3JtYXRXaXRoRGVsaW1pdGVycyIsIm51bWJlciIsInByZWNpc2lvbiIsInRob3VzYW5kcyIsImRlY2ltYWwiLCJpc05hTiIsInRvRml4ZWQiLCJwYXJ0cyIsImRvbGxhcnNBbW91bnQiLCJjZW50c0Ftb3VudCIsInByZWxvYWQiLCJzaXplIiwibG9hZEltYWdlIiwiSW1hZ2UiLCJyZW1vdmVQcm90b2NvbCIsInByZWZpeCIsInN1ZmZpeCJdLCJzb3VyY2VSb290IjoiIn0=