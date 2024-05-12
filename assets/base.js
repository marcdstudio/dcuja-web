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
  cards: base_scripts_components_cards_js__WEBPACK_IMPORTED_MODULE_29__["default"]
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
      body = _choozy.body;

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(faq, 'click', function (e) {
    var openDrawer = (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('.faq-wrap.active');

    if (openDrawer && (openDrawer === null || openDrawer === void 0 ? void 0 : openDrawer.dataset.index) != e.target.dataset.index) {
      // console.log('openDrawer', qs('.js-faq', openDrawer));
      (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(openDrawer, 'active');
    }

    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.toggle)(node, 'active');
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
      menuOpen = _choozy.menuOpen,
      announceBar = _choozy.announceBar,
      announceClose = _choozy.announceClose,
      anchor = _choozy.anchor,
      nav = _choozy.nav;

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

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('body').style.setProperty('--headerHeight', "".concat((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('header').offsetHeight, "px"));
  document.body.style.setProperty('--nav', "".concat(nav.offsetWidth, "px")); // Change to desired color

  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', function () {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('body').style.setProperty('--headerHeight', "".concat((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('header').offsetHeight, "px"));
    document.body.style.setProperty('--nav', "".concat(nav.offsetWidth, "px")); // Change to desired color
  });
  setTimeout(function () {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('body').style.setProperty('--headerHeight', "".concat((0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qs)('header').offsetHeight, "px"));
  }, 1000);
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(menuOpen, 'click', function () {
    gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo('.nav-menu-wrap', {
      x: '-100%'
    }, {
      x: 0,
      duration: 0.5,
      ease: gsap__WEBPACK_IMPORTED_MODULE_4__.Expo.easeOut
    });
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.add)(menuOpen, 'hidden');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(headerClose, 'hidden');
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.remove)(closeZone, 'hidden');
  });
  (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.qsa)('.js-menuClose').forEach(function (btn) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(btn, 'click', function () {
      ctx.emit('menu:close');
    });
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

  if (anchor) {
    (0,_selfaware_martha__WEBPACK_IMPORTED_MODULE_2__.on)(anchor, 'click', function (e) {
      window.location.href = e.target.dataset.link;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQSwyREFBMkQsMkRBQTJEO1VBQ3RILHFGQUFxRiw0REFBNEQ7VUFDakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9iYXNlLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Fib3V0LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2FjY291bnRBZGRyZXNzZXMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudExvZ2luLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2JhY2tpbnN0b2NrLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9ibG9nRmlsdGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NhcmRzLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NhcnREcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FydERyYXdlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2ZhcXMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2xhenkuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvbWFycXVlZS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdENhcm91c2VsLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RDb3VudGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RPcHRpb25zLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RTdWJzY3JpcHRpb25zLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RWYXJpYW50LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvY29tcG9uZW50cy9zb2NpYWwuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvY2FydC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvYmFzZS9zY3JpcHRzL3V0aWxzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9iYXNlL3NjcmlwdHMvdXRpbHMvcGFnZVNldHVwLmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL2Jhc2Uvc3R5bGVzL2Jhc2Uuc2Nzcz82ODcxIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGljb2FwcCB9IGZyb20gJ3BpY29hcHAnXG5cbmltcG9ydCBhY2NvdW50TG9naW4gZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudExvZ2luLmpzJ1xuaW1wb3J0IGFjY291bnRBZGRyZXNzZXMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudEFkZHJlc3Nlcy5qcydcbmltcG9ydCBsYXp5IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2xhenkuanMnXG5pbXBvcnQgaGVhZGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci5qcydcbmltcG9ydCBjYXJ0RHJhd2VyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NhcnREcmF3ZXIuanMnXG5pbXBvcnQgY2FydERyYXdlckl0ZW0gZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2FydERyYXdlckl0ZW0uanMnXG5pbXBvcnQgcHJvZHVjdENhcm91c2VsIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RDYXJvdXNlbC5qcydcbmltcG9ydCBwcm9kdWN0IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3QuanMnXG5pbXBvcnQgcHJvZHVjdENvdW50ZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdENvdW50ZXIuanMnXG5pbXBvcnQgcHJvZHVjdFZhcmlhbnQgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFZhcmlhbnQuanMnXG5pbXBvcnQgcHJvZHVjdE9wdGlvbnMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdE9wdGlvbnMuanMnXG5pbXBvcnQgY29sbGVjdGlvbiBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jb2xsZWN0aW9uLmpzJ1xuaW1wb3J0IGZhcXMgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvZmFxcy5qcydcbmltcG9ydCBjaGVja291dCBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jaGVja291dC5qcydcbmltcG9ydCBuZXdzbGV0dGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL25ld3NsZXR0ZXIuanMnXG5pbXBvcnQgY2Fyb3VzZWwgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMnXG5pbXBvcnQgZm9vdGVyIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Zvb3Rlci5qcydcbmltcG9ydCBjb250YWN0IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2NvbnRhY3QuanMnXG5pbXBvcnQgbWFycXVlZSBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9tYXJxdWVlLmpzJ1xuaW1wb3J0IGJsb2dGaWx0ZXIgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvYmxvZ0ZpbHRlci5qcydcbmltcG9ydCB2aWRlbyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy92aWRlby5qcydcbmltcG9ydCBzaWdudXAgZnJvbSAnYmFzZS9zY3JpcHRzL2NvbXBvbmVudHMvc2lnbnVwLmpzJ1xuaW1wb3J0IGJhY2tpbnN0b2NrIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2JhY2tpbnN0b2NrLmpzJ1xuaW1wb3J0IHByb2R1Y3RTdWJzY3JpcHRpb25zIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RTdWJzY3JpcHRpb25zLmpzJ1xuaW1wb3J0IGFib3V0IGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL2Fib3V0LmpzJ1xuXG5pbXBvcnQgaGVybyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9oZXJvLmpzJ1xuaW1wb3J0IGJhbm5lciBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9iYW5uZXIuanMnXG5pbXBvcnQgc29jaWFsIGZyb20gJ2Jhc2Uvc2NyaXB0cy9jb21wb25lbnRzL3NvY2lhbC5qcydcbmltcG9ydCBjYXJkcyBmcm9tICdiYXNlL3NjcmlwdHMvY29tcG9uZW50cy9jYXJkcy5qcydcblxuY29uc3Qgc3RhdGUgPSB7XG4gIGNhcnRPcGVuOiBmYWxzZSxcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgYWNjb3VudExvZ2luLFxuICBhY2NvdW50QWRkcmVzc2VzLFxuICBoZWFkZXIsXG4gIGNhcnREcmF3ZXIsXG4gIGNhcnREcmF3ZXJJdGVtLFxuICBsYXp5LFxuICBwcm9kdWN0Q2Fyb3VzZWwsXG4gIHByb2R1Y3QsXG4gIHByb2R1Y3RDb3VudGVyLFxuICBwcm9kdWN0VmFyaWFudCxcbiAgcHJvZHVjdE9wdGlvbnMsXG4gIGNvbGxlY3Rpb24sXG4gIGZhcXMsXG4gIGNoZWNrb3V0LFxuICBuZXdzbGV0dGVyLFxuICBjYXJvdXNlbCxcbiAgZm9vdGVyLFxuICBjb250YWN0LFxuICBtYXJxdWVlLFxuICBibG9nRmlsdGVyLFxuICB2aWRlbyxcbiAgc2lnbnVwLFxuICBiYWNraW5zdG9jayxcbiAgcHJvZHVjdFN1YnNjcmlwdGlvbnMsXG4gIGFib3V0LFxuXG4gIGhlcm8sXG4gIGJhbm5lcixcbiAgc29jaWFsLFxuICBjYXJkcyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGljb2FwcChjb21wb25lbnRzLCBzdGF0ZSlcbiIsIi8vIGltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnXG4vLyBpbXBvcnQgJ0AvbGliL3NlbGVjdC5qcydcbi8vIGltcG9ydCBsYXppbSBmcm9tICdsYXppbSdcbmltcG9ydCB7IGJpbmQsIHVwZGF0ZSB9IGZyb20gJ2xhemltJ1xuaW1wb3J0IGFwcCBmcm9tICdiYXNlL3NjcmlwdHMvYXBwLmpzJ1xuaW1wb3J0IHJvdXRlciBmcm9tICdiYXNlL3NjcmlwdHMvcm91dGVyLmpzJ1xuaW1wb3J0IHsgZmV0Y2hDYXJ0IH0gZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL2NhcnQuanMnXG5pbXBvcnQgeyBnc2FwLCBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9hbGwnXG5pbXBvcnQgeyBxcywgcmVtb3ZlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgcGFnZVNldHVwIGZyb20gJ2Jhc2Uvc2NyaXB0cy91dGlscy9wYWdlU2V0dXAnXG5cbmxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDFcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YClcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApXG59KVxuXG4vKipcbiAqIHN0b3JlIGJpbmRpbmcgZm5cbiAqL1xuYmluZCgpXG5cbi8qKlxuICogcmVnaXN0ZXIgc2Nyb2xsdHJpZ2dlclxuICovXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG5cbnJvdXRlci5vbignYWZ0ZXInLCAoeyB0aXRsZSwgcGF0aG5hbWUgfSkgPT4ge1xuICBhcHAudW5tb3VudCgpXG4gIGFwcC5tb3VudCgpXG5cbiAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3Byb2R1Y3RzJykgPiAtMSkge1xuICAvLyAgIHZhciBhcGkgPSBuZXcgWW90cG8uQVBJKHlvdHBvKVxuICAvLyAgIGFwaS5yZWZyZXNoV2lkZ2V0cygpXG4gIC8vIH1cblxuICAvKipcbiAgICogYmluZCBuZXcgaW1hZ2VzXG4gICAqL1xuXG4gIGJpbmQoKVxuICAvKipcbiAgICogaGlkZSBzdWJuYXZcbiAgICovXG4gIGFwcC5lbWl0KCdtZW51OmNsb3NlJylcbiAgYXBwLmVtaXQoJ3RyYW5zaXRpb246Y29tcGxldGUnKVxuXG4gIHBhZ2VTZXR1cCgpXG59KVxuXG5wYWdlU2V0dXAoKVxuXG4vKipcbiAqIGxvYWQgYW55IGRhdGEgdGhhdCB5b3VyIHNpdGUgbmVlZHMgb24gZmlzdCBsb2FkXG4gKi9cblByb21pc2UuYWxsKFtmZXRjaENhcnQoKV0pLnRoZW4oKFtjYXJ0XSkgPT4ge1xuICAvKipcbiAgICogYWRkIHRoZSBjYXJ0IGRhdGEgdG8gdGhlIHBpY29hcHAgaW5zdGFuY2VcbiAgICovXG4gIGFwcC5oeWRyYXRlKHsgY2FydCB9KVxuXG4gIC8qKlxuICAgKiBtb3VudCBhbnkgY29tcG9uZW50cyBkZWZpbmVkIG9uIHRoZSBwYWdlXG4gICAqL1xuICBhcHAubW91bnQoKVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IGFkZCwgcmVtb3ZlLCBvbiwgcXMsIHFzYSwgdG9nZ2xlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcC9hbGwnXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXInXG5pbXBvcnQgeyBTY3JvbGxUb1BsdWdpbiB9IGZyb20gJ2dzYXAvZGlzdC9TY3JvbGxUb1BsdWdpbidcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGFuY2hvcnMgfSA9IGNob296eShub2RlKVxuXG4gIHFzYSgnW2RhdGEtc2VjdGlvbl0nKS5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFuY2hvci5pbm5lckhUTUwgPSBzZWN0aW9uLmRhdGFzZXQudGl0bGUgfHwgc2VjdGlvbi5kYXRhc2V0LnNlY3Rpb25cbiAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnanMtYW5jaG9yJylcbiAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGFuY2hvci5kYXRhc2V0LnNlY3Rpb24gPSBzZWN0aW9uLmRhdGFzZXQuc2VjdGlvblxuICAgIGFuY2hvcnMuYXBwZW5kQ2hpbGQoYW5jaG9yKVxuXG4gICAgb24oYW5jaG9yLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICBnc2FwLnRvKHdpbmRvdywge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgc2Nyb2xsVG86IHtcbiAgICAgICAgICB5OiBgW2RhdGEtdGl0bGU9XCIke3NlY3Rpb24uZGF0YXNldC50aXRsZX1cIl1gLFxuICAgICAgICAgIG9mZnNldFk6IDc1LFxuICAgICAgICB9LFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHNldEFjdGl2ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBxc2EoJy5qcy1hbmNob3InKS5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICAgIHJlbW92ZShhbmNob3IsICdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICBhZGQocXMoYC5qcy1hbmNob3JbZGF0YS1zZWN0aW9uPVwiJHt0YXJnZXR9XCJdYCksICdhY3RpdmUnKVxuICB9XG5cbiAgZ3NhcC51dGlscy50b0FycmF5KCdbZGF0YS1zZWN0aW9uXScpLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiBzZWN0aW9uLFxuICAgICAgc3RhcnQ6ICd0b3AgdG9wKz0xNTAnLFxuICAgICAgb25FbnRlcjogKHNlbGYpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKHNlbGYudHJpZ2dlci5kYXRhc2V0LnNlY3Rpb24pXG4gICAgICB9LFxuICAgIH0pXG4gIH0pXG5cbiAgZ3NhcC51dGlscy50b0FycmF5KCdbZGF0YS1zZWN0aW9uXScpLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiBzZWN0aW9uLFxuICAgICAgc3RhcnQ6ICdib3R0b20gdG9wJyxcbiAgICAgIG9uTGVhdmVCYWNrOiAoc2VsZikgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoc2VsZi50cmlnZ2VyLmRhdGFzZXQuc2VjdGlvbilcbiAgICAgIH0sXG4gICAgfSlcbiAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgU2Nyb2xsVHJpZ2dlci5yZWZyZXNoKClcbiAgICAgIGltZy5vbmxvYWQgPSBudWxsXG4gICAgfVxuICB9KVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpXG4gIH0sIDEwMDApXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgdHJpZ2dlcnMgPSBTY3JvbGxUcmlnZ2VyLmdldEFsbCgpXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgdHJpZ2dlci5raWxsKClcbiAgICB9KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgcXMsIHFzYSwgb24sIGFkZCwgcmVtb3ZlLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgYWRkV3JhcCwgdG9nZ2xlQWRkLCB0b2dnbGVFZGl0LCBlZGl0V3JhcCB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgaWYgKHRvZ2dsZUFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICBvbih0b2dnbGVBZGQsICdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZ2dsZShhZGRXcmFwLCAnaGlkZGVuJylcbiAgICB9KVxuICB9XG5cbiAgaWYgKHRvZ2dsZUVkaXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgb24odG9nZ2xlRWRpdCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlKGVkaXRXcmFwLCAnaGlkZGVuJylcbiAgICB9KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgY29uc3QgbG9naW4gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2dpbi1kaWFsb2cnKVxuICBjb25zdCByZWNvdmVyID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjb3Zlci1kaWFsb2cnKVxuICBjb25zdCByZWNvdmVyTGluayA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY292ZXItdHJpZ2dlcicpXG4gIGNvbnN0IGNhbmNlbFJlY292ZXJMaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjb3Zlci1jYW5jZWwnKVxuXG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGNvbnN0IHJlY292ZXJJc1RhcmdldCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLm1hdGNoKC9cXCNyZWNvdmVyLykgPyB0cnVlIDogZmFsc2VcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY292ZXItc3VjY2VzcycpICE9PSBudWxsXG5cbiAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHN1Y2Nlc3NNZXNzYWdlKVxuICAvLyBjb25zb2xlLmxvZygndGVzdCcpO1xuXG4gIC8vIGlmIChyZWNvdmVySXNUYXJnZXQgfHwgc3VjY2Vzc01lc3NhZ2UpIHtcbiAgLy8gICBjb25zb2xlLmxvZygndGVzdCcpXG4gIC8vICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAvLyAgIHJlY292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAvLyB9XG5cbiAgcmVjb3ZlckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICByZWNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH0pXG5cbiAgY2FuY2VsUmVjb3ZlckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJlY292ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgZW1haWwsIGJpcywgYmlzY29udGVudCwgc3VjY2VzcywgYmlzd3JhcCwgb3BlbmJpcywgY2xvc2ViaXMsIGZvcm1iaXMgfSA9XG4gICAgY2hvb3p5KG5vZGUpXG5cbiAgb24oYmlzLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IGN1cnJlbnRWYXJpYW50ID0gbm9kZS5kYXRhc2V0LnZhcmlhbnRcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwczovL2Eua2xhdml5by5jb20vb25zaXRlL2NvbXBvbmVudHMvYmFjay1pbi1zdG9jay9zdWJzY3JpYmUnLFxuICAgICAgZGF0YToge1xuICAgICAgICBhOiAnVjdpQ2pYJyxcbiAgICAgICAgZW1haWw6IGVtYWlsLnZhbHVlLFxuICAgICAgICB2YXJpYW50OiBjdXJyZW50VmFyaWFudCxcbiAgICAgICAgcGxhdGZvcm06ICdzaG9waWZ5JyxcbiAgICAgICAgc3RvcmU6ICdkcmlua21vZGljYScsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICBhZGQoZm9ybWJpcywgJ2hpZGRlbicpXG4gICAgICAgIHJlbW92ZShzdWNjZXNzLCAnaGlkZGVuJylcbiAgICAgIH0sXG4gICAgfSlcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwicGljb2FwcFwiO1xuaW1wb3J0IGNob296eSBmcm9tIFwiY2hvb3p5XCI7XG5pbXBvcnQgeyByZW1vdmUsIGFkZCwgb24sIHFzYSB9IGZyb20gXCJAc2VsZmF3YXJlL21hcnRoYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBpbWFnZXMgfSA9IGNob296eShub2RlKTtcblxuICBjb25zdCBhbGxJbWFnZXMgPSBKU09OLnBhcnNlKGltYWdlcz8uaW5uZXJIVE1MKS5pbWFnZXM7XG4gIGNvbnN0IGFsbEJsb2NrcyA9IHFzYSgnLmpzLWltYWdlJywgbm9kZSlcblxuICBjb25zdCB0aGVtZUltYWdlcyA9ICgpID0+IHtcbiAgICBsZXQgY3VycmVudFRoZW1lID0gZG9jdW1lbnQuYm9keS5kYXRhc2V0LnRoZW1lXG4gICAgbGV0IHRoZW1lSW1hZ2VzID0gW11cblxuICAgIGFsbEltYWdlcy5mb3JFYWNoKChpbWcsIGluZGV4KSA9PiB7XG4gICAgICBpZihpbWcudGhlbWUgPT0gY3VycmVudFRoZW1lKXtcbiAgICAgICAgdGhlbWVJbWFnZXMucHVzaChpbWcpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhbGxCbG9ja3MuZm9yRWFjaChpbWcgPT4gaW1nLnNyYyA9ICcnKTtcblxuICAgIHRoZW1lSW1hZ2VzLmZvckVhY2goKGltZywgaW5kZXgpID0+IHtcbiAgICAgIGlmKGltZy50aGVtZSA9PSBjdXJyZW50VGhlbWUpe1xuICAgICAgICBhbGxCbG9ja3NbaW5kZXhdLnNyYyA9IGltZy5pbWFnZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGhlbWVJbWFnZXMoKVxuXG4gIGN0eC5vbigndGhlbWUnLCAoKSA9PiB7XG4gICAgdGhlbWVJbWFnZXMoKVxuICB9KVxufSk7XG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBmaWx0ZXJUb2dnbGUsIGNsZWFyRmlsdGVyIH0gPSBjaG9venkobm9kZSlcblxuICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJy90YWdnZWQvJykpIHtcbiAgICBsZXQgdGFnID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJ3RhZ2dlZC8nKVsxXVxuICAgIGxldCB0YXJnZXRUYWcgPSBxcyhgLmpzLWZpbHRlcltkYXRhLWZpbHRlcj1cIiR7dGFnfVwiXWApXG5cbiAgICBxc2EoJy5qcy1maWx0ZXInLCBub2RlKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgcmVtb3ZlKGVsLCAnYWN0aXZlJylcbiAgICB9KVxuXG4gICAgaWYgKHRhcmdldFRhZykge1xuICAgICAgYWRkKHRhcmdldFRhZywgJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICdlbWJsYS1jYXJvdXNlbCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgY2Fyb3VzZWwsIG5leHQsIHByZXYsIGNvdW50ZXIsIGFjdGl2ZUluZGV4LCBjYXJkcyB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QgZW1ibGEgPSBFbWJsYUNhcm91c2VsKGNhcm91c2VsLCB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBza2lwU25hcHM6IGZhbHNlLFxuICAgIHRyaW1TbmFwczogdHJ1ZSxcbiAgICBjb250YWluU2Nyb2xsOiB0cnVlLFxuICAgIGFsaWduOiAnc3RhcnQnLFxuICB9KVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbE5leHQsIGZhbHNlKVxuICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcblxuICAgIC8vIG9uKG5leHQsICdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGVtYmxhLnNjcm9sbE5leHRcbiAgICAvLyB9KVxuICB9XG5cbiAgaWYgKGNvdW50ZXIpIHtcbiAgICBvbihjb3VudGVyLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZW1ibGEuc2Nyb2xsVG8oZS50YXJnZXQuZGF0YXNldC5pbmRleClcbiAgICB9KVxuICB9XG5cbiAgZW1ibGEub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICBpZiAoY291bnRlcikge1xuICAgICAgcmVtb3ZlKGNvdW50ZXIsICdpcy1hY3RpdmUnKVxuICAgICAgYWRkKFxuICAgICAgICBxcyhgLmpzLWNvdW50ZXJbZGF0YS1pbmRleD1cIiR7ZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCl9XCJdYCwgbm9kZSksXG4gICAgICAgICdpcy1hY3RpdmUnXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4KSB7XG4gICAgICBhY3RpdmVJbmRleC5pbm5lckhUTUwgPSBlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKSArIDFcbiAgICB9XG4gIH0pXG5cbiAgLy8gcmV0dXJuICgpID0+IHtcbiAgLy8gICBpZiAobmV4dCkge1xuICAvLyAgICAgICBuZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gIC8vICAgICAgIHByZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxQcmV2LCBmYWxzZSlcbiAgLy8gICB9XG4gIC8vIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJvdXNlbCwgbmV4dCwgcHJldiwgY291bnRlciwgYWN0aXZlSW5kZXggfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IGVtYmxhID0gRW1ibGFDYXJvdXNlbChjYXJvdXNlbCwge1xuICAgIGxvb3A6IG5vZGUuZGF0YXNldC5sb29wID09ICdmYWxzZScgPyBmYWxzZSA6IHRydWUsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgICB0cmltU25hcHM6IHRydWUsXG4gICAgY29udGFpblNjcm9sbDogdHJ1ZSxcbiAgICBzcGVlZDogbm9kZS5kYXRhc2V0LnNwZWVkID8gbm9kZS5kYXRhc2V0LnNwZWVkIDogMTAsXG4gICAgYWxpZ246IG5vZGUuZGF0YXNldC5zdGFydCA9PSAnbGVmdCcgPyAnc3RhcnQnIDogJ2NlbnRlcicsXG4gIH0pXG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuXG4gICAgLy8gb24obmV4dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgZW1ibGEuc2Nyb2xsTmV4dFxuICAgIC8vIH0pXG4gIH1cblxuICBpZiAoY291bnRlcikge1xuICAgIG9uKGNvdW50ZXIsICdjbGljaycsIChlKSA9PiB7XG4gICAgICBlbWJsYS5zY3JvbGxUbyhlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgIH0pXG4gIH1cblxuICBlbWJsYS5vbignc2VsZWN0JywgKCkgPT4ge1xuICAgIGlmIChjb3VudGVyKSB7XG4gICAgICByZW1vdmUoY291bnRlciwgJ2lzLWFjdGl2ZScpXG4gICAgICBhZGQoXG4gICAgICAgIHFzKGAuanMtY291bnRlcltkYXRhLWluZGV4PVwiJHtlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKX1cIl1gLCBub2RlKSxcbiAgICAgICAgJ2lzLWFjdGl2ZSdcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXgpIHtcbiAgICAgIGFjdGl2ZUluZGV4LmlubmVySFRNTCA9IGVtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpICsgMVxuICAgIH1cbiAgfSlcblxuICAvLyByZXR1cm4gKCkgPT4ge1xuICAvLyAgIGlmIChuZXh0KSB7XG4gIC8vICAgICAgIG5leHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgLy8gICAgICAgcHJldi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuICAvLyAgIH1cbiAgLy8gfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBnZXRTaXplZEltYWdlVXJsLCBpbWFnZVNpemUgfSBmcm9tICdiYXNlL3NjcmlwdHMvdXRpbHMvaW1hZ2VzLmpzJ1xuaW1wb3J0IHsgZm9ybWF0TW9uZXkgfSBmcm9tICdiYXNlL3NjcmlwdHMvdXRpbHMvY3VycmVuY3kuanMnXG5pbXBvcnQgYXBwIGZyb20gJ2Jhc2Uvc2NyaXB0cy9hcHAuanMnXG5pbXBvcnQgeyBnc2FwLCBQb3dlcjQgfSBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgYWRkLCBxcywgcXNhLCByZW1vdmUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcblxuY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKClcblxuY29uc3QgWCA9IGA8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE5IDE5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTEgMUwxNy45NzA2IDE3Ljk3MDZcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbjxwYXRoIGQ9XCJNMSAxNy45NzA1TDE3Ljk3MDYgMC45OTk4OTdcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbjwvc3ZnPmBcblxuZnVuY3Rpb24gY3JlYXRlSXRlbSh7XG4gIHZhcmlhbnRfaWQ6IGlkLFxuICBwcm9kdWN0X3RpdGxlOiB0aXRsZSxcbiAgbGluZV9wcmljZTogcHJpY2UsXG4gIG9yaWdpbmFsX2xpbmVfcHJpY2U6IG9yaWdpbmFsX3ByaWNlLFxuICB2YXJpYW50X3RpdGxlLFxuICBpbWFnZSxcbiAgdXJsLFxuICBxdWFudGl0eSxcbiAgLi4uaXRlbVxufSkge1xuICAvLyBjb25zdCBpbWcgPSBpbWFnZVxuICAvLyAgID8gZ2V0U2l6ZWRJbWFnZVVybChcbiAgLy8gICAgICAgaW1hZ2UucmVwbGFjZSgnLicgKyBpbWFnZVNpemUoaW1hZ2UpLCAnJyksXG4gIC8vICAgICAgICc0MDB4JyAvLyBUT0RPIGhhY2t5IGFmXG4gIC8vICAgICApXG4gIC8vICAgOiAnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL1I5T1MyOXhKYi04LzIwMDB4MTMzMydcblxuICByZXR1cm4gYFxuPGRpdiBjbGFzcz0nY2FydC1kcmF3ZXJfX2l0ZW0nIGRhdGEtY29tcG9uZW50PSdjYXJ0RHJhd2VySXRlbScgZGF0YS1pZD0ke2lkfSAke1xuICAgIGl0ZW0uc2VsbGluZ19wbGFuX2FsbG9jYXRpb25cbiAgICAgID8gYGRhdGEtcGxhbmlkPScke2l0ZW0uc2VsbGluZ19wbGFuX2FsbG9jYXRpb24uc2VsbGluZ19wbGFuLmlkfSdgXG4gICAgICA6IGBgXG4gIH0+XG4gIDxkaXYgY2xhc3M9J3JlbGF0aXZlIHctZnVsbCBib3JkZXItYiBib3JkZXItc29saWQgcC0yMCc+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgIDxhIGhyZWY9JyR7dXJsfScgY2xhc3M9XCJjYXJ0LWltYWdlXCIgYXJpYS1sYWJlbD1cInZpZXcgJHt0aXRsZX1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiBzcmM9JyR7aW1hZ2V9JyBhbHQ9XCJwcm9kdWN0IHRodW1ibmFpbFwiLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMTAgZmxleCBpdGVtcy1zdGFydCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZm9udC1ib2xkIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleC1ncm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9JyR7dXJsfScgY2xhc3M9J3RpdGxlLXNtYWxsIHVwcGVyY2FzZSc+JHt0aXRsZX08L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcnQtZHJhd2VyX19pdGVtLS1wcmljZSBmbGV4LXNocmluay0wJz5cbiAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfcHJpY2UgPiBwcmljZVxuICAgICAgICAgICAgICAgICAgICA/IGA8c3BhbiBjbGFzcz1cImpzLXByaWNlIGxpbmUtdGhyb3VnaFwiPiQke2Zvcm1hdE1vbmV5KFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImpzLWRpc2NvdW50IG1sLTVcIj4kJHtmb3JtYXRNb25leShwcmljZSl9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICAgICAgOiBgPHNwYW4gY2xhc3M9XCJqcy1wcmljZVwiPiQke2Zvcm1hdE1vbmV5KHByaWNlKX08L3NwYW4+YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIHZhcmlhbnRfdGl0bGVcbiAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPSdpdGVtLXZhcmlhbnRfX3RpdGxlIGNhcnQtaXRlbS0tZGV0YWlsJz4ke3ZhcmlhbnRfdGl0bGV9PC9kaXY+YFxuICAgICAgICAgICAgICAgIDogYGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1pdGVtX19xdHkgZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtMTAgZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgbGVhZGluZy0xMDAgdGV4dC0xNCBweS01IGJvcmRlciBib3JkZXItc29saWQgaC0yNSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcnQtcXVhbnRpdHkgYnRuLXF1YW50aXR5IGpzLXJlbW92ZS1zaW5nbGUgY3Vyc29yLXBvaW50ZXInPjxzcGFuIGNsYXNzPVwiYmxvY2tcIj4mbmRhc2g7PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdqcy1zaW5nbGUtcXVhbnRpdHkgbXgtNSc+JHtxdWFudGl0eX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1xdWFudGl0eSBidG4tcXVhbnRpdHkganMtYWRkLXNpbmdsZSBjdXJzb3ItcG9pbnRlcic+PHNwYW4gY2xhc3M9XCJibG9ja1wiPis8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbi0tcmVzZXQganMtcmVtb3ZlLWl0ZW0gdGV4dC1yaWdodCB0ZXh0LTEyIGNhcnQtaXRlbV9fcmVtb3ZlIGxoMTAwJyBhcmlhLWxhYmVsPVwicmVtb3ZlIGl0ZW1cIj48c3BhbiBjbGFzcz1cImJsb2NrIHVuZGVybGluZVwiPlJFTU9WRTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmBcbn1cblxuZnVuY3Rpb24gcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDBcbiAgICA/IGl0ZW1zLnJlZHVjZSgobWFya3VwLCBpdGVtKSA9PiB7XG4gICAgICAgIG1hcmt1cCArPSBjcmVhdGVJdGVtKGl0ZW0pXG4gICAgICAgIHJldHVybiBtYXJrdXBcbiAgICAgIH0sICcnKVxuICAgIDogYDxkaXYgY2xhc3M9J3B4LTIwIG06cHgtNDAnPjxwIGNsYXNzPVwicHktMjAgdy1mdWxsIGJvcmRlci1iLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibHVlXCI+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPjwvZGl2PmBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLW92ZXJsYXknKVxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWNsb3NlJylcbiAgY29uc3Qgc3VidG90YWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zdWJ0b3RhbCcpXG4gIGNvbnN0IGl0ZW1zUm9vdCA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWl0ZW1zJylcbiAgY29uc3QgbG9hZGluZyA9IGl0ZW1zUm9vdC5pbm5lckhUTUxcblxuICBjb25zdCByZW5kZXIgPSAoY2FydCkgPT4ge1xuICAgIGl0ZW1zUm9vdC5pbm5lckhUTUwgPSByZW5kZXJJdGVtcyhjYXJ0Lml0ZW1zLCBpdGVtc1Jvb3QpXG4gICAgc3VidG90YWwuaW5uZXJIVE1MID0gYCR7Zm9ybWF0TW9uZXkoY2FydC50b3RhbF9wcmljZSl9YFxuICB9XG5cbiAgY29uc3Qgb3BlbiA9IChjYXJ0KSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxuICAgIGl0ZW1zUm9vdC5pbm5lckhUTUwgPSBsb2FkaW5nXG5cbiAgICBzZXRUaW1lb3V0KHJlbmRlcihjYXJ0KSwgMTApXG4gICAgYXBwLm1vdW50KClcblxuICAgIHRsLnRvKCcuY2FydC1kcmF3ZXInLCB7XG4gICAgICB4OiAnMCUnLFxuICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge30sXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcblxuICAgIHRsLnRvKCcuY2FydC1kcmF3ZXInLCB7XG4gICAgICB4OiAnMTAwJScsXG4gICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIGFwcC5oeWRyYXRlKHsgY2FydE9wZW46IGZhbHNlIH0pXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoY3R4LmdldFN0YXRlKCkuY2FydClcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpXG5cbiAgY29uc3QgY2hlY2tDYXJ0ID0gKGNhcnQpID0+IHtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPCAxKSB7XG4gICAgICByZW1vdmUocXMoJy5jYXJ0LWVtcHR5X193cmFwcGVyJyksICdoaWRkZW4nKVxuICAgICAgYWRkKHFzKCcuY2FydC1kcmF3ZXJfX2l0ZW1zJyksICdoaWRkZW4nKVxuICAgICAgYWRkKHFzKCcuanMtY2FydEZvb3RlcicpLCAnaGlkZGVuJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkKHFzKCcuY2FydC1lbXB0eV9fd3JhcHBlcicpLCAnaGlkZGVuJylcbiAgICAgIHJlbW92ZShxcygnLmNhcnQtZHJhd2VyX19pdGVtcycpLCAnaGlkZGVuJylcbiAgICAgIHJlbW92ZShxcygnLmpzLWNhcnRGb290ZXInKSwgJ2hpZGRlbicpXG4gICAgfVxuICAgIC8vIH0sIDEwMCk7XG4gIH1cblxuICBjdHgub24oJ2NhcnQ6dG9nZ2xlJywgKHsgY2FydCwgY2FydE9wZW4gfSkgPT4ge1xuICAgIGNhcnRPcGVuICYmIG9wZW4oY2FydClcblxuICAgIGNoZWNrQ2FydChjdHguZ2V0U3RhdGUoKS5jYXJ0KVxuICB9KVxuXG4gIGN0eC5vbignY2FydDp1cGRhdGVkJywgKCkgPT4ge1xuICAgIHJlbmRlcihjdHguZ2V0U3RhdGUoKS5jYXJ0KVxuICAgIGFwcC5tb3VudCgpXG5cbiAgICBjaGVja0NhcnQoY3R4LmdldFN0YXRlKCkuY2FydClcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IHsgcmVtb3ZlQWRkb24sIHVwZGF0ZUFkZG9uIH0gZnJvbSAnYmFzZS9zY3JpcHRzL3V0aWxzL2NhcnQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGNvbnN0IHJlbW92ZXJzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcmVtb3ZlLWl0ZW0nKVxuICBjb25zdCBkZWNyZWFzZSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlbW92ZS1zaW5nbGUnKVxuICBjb25zdCBpbmNyZWFzZSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWFkZC1zaW5nbGUnKVxuICBjb25zdCBjdXJyZW50UXR5ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtc2luZ2xlLXF1YW50aXR5JykuaW5uZXJIVE1MXG4gIGNvbnN0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuICBjb25zdCBzZWxsaW5nX3BsYW4gPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFuaWQnKVxuXG4gIHJlbW92ZXJzLmZvckVhY2goKHJlbSkgPT4ge1xuICAgIHJlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBsZXQgbGluayA9IGUudGFyZ2V0LmRhdGFzZXQubGlua1xuICAgICAgY3R4LmVtaXQoJ2l0ZW06cmVtb3ZlZCcpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJlbW92ZUFkZG9uKGlkLCBzZWxsaW5nX3BsYW4sIGxpbmspXG4gICAgfSlcbiAgfSlcblxuICBkZWNyZWFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlQWRkb24oaWQsIHNlbGxpbmdfcGxhbiwgcGFyc2VJbnQoY3VycmVudFF0eSkgLSAxKVxuICB9KVxuXG4gIGluY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVBZGRvbihpZCwgc2VsbGluZ19wbGFuLCBwYXJzZUludChjdXJyZW50UXR5KSArIDEpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IG9uLCBxcyB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUpID0+IHtcbiAgb24obm9kZSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHFzKCcuanMtY2FydEZvcm0nKS5zdWJtaXQoKVxuXG4gICAgLy8gd2luZG93LmxvY2F0aW9uID0gJy9jaGVja291dCdcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IHsgZ3NhcCwgU2Nyb2xsVG9QbHVnaW4gfSBmcm9tICdnc2FwL2FsbCdcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICBkdXJhdGlvbjogMSxcbiAgICAgIHNjcm9sbFRvOiB7XG4gICAgICAgIHk6IGBbZGF0YS1zZWN0aW9uPVwiJHt3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnIycpWzFdfVwiXWAsXG4gICAgICAgIG9mZnNldFk6IDkwLFxuICAgICAgfSxcbiAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgfSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IG9uLCBhZGQsIHJlbW92ZSwgcXMsIHFzYSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBzdWJtaXQsIGVtYWlsIH0gPSBjaG9venkobm9kZSlcblxuICBjb25zdCBvZmZFbWFpbCA9IG9uKGVtYWlsLCAnYmx1cicsIChlKSA9PiB7XG4gICAgaWYgKCFlbWFpbC52YWx1ZS5pbmNsdWRlcygnQCcpKSB7XG4gICAgICBhZGQocXMoJy5mb3JtLWVtYWlsJywgbm9kZSksICdlcnJvcicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZShxcygnLmZvcm0tZW1haWwnLCBub2RlKSwgJ2Vycm9yJylcbiAgICB9XG4gIH0pXG5cbiAgcXNhKCcuZm9ybS1pbnB1dCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgb24oZWwsICdpbnB1dCcsICgpID0+IHtcbiAgICAgIGlmIChlbC52YWx1ZSkge1xuICAgICAgICBhZGQoZWwsICdoYXMtZmlsbCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmUoZWwsICdoYXMtZmlsbCcpXG4gICAgICB9XG5cbiAgICAgIGlmIChxc2EoJy5mb3JtLWlucHV0Lmhhcy1maWxsOm5vdCguZXJyb3IpJykubGVuZ3RoID09IDMpIHtcbiAgICAgICAgc3VibWl0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VibWl0LmFkZEF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBvZmZFbWFpbCgpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBvbiwgdG9nZ2xlLCBxc2EsIHFzLCByZW1vdmUsIGFkZCB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBmYXEsIGJvZHkgfSA9IGNob296eShub2RlKVxuXG4gIG9uKGZhcSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQgb3BlbkRyYXdlciA9IHFzKCcuZmFxLXdyYXAuYWN0aXZlJylcblxuICAgIGlmIChvcGVuRHJhd2VyICYmIG9wZW5EcmF3ZXI/LmRhdGFzZXQuaW5kZXggIT0gZS50YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ29wZW5EcmF3ZXInLCBxcygnLmpzLWZhcScsIG9wZW5EcmF3ZXIpKTtcbiAgICAgIHJlbW92ZShvcGVuRHJhd2VyLCAnYWN0aXZlJylcbiAgICB9XG4gICAgdG9nZ2xlKG5vZGUsICdhY3RpdmUnKVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmltcG9ydCB7IHVwZGF0ZSB9IGZyb20gJ2xhemltJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBpbWFnZXMsIGltYWdlIH0gPSBjaG9venkobm9kZSk7XG5cbiAgY29uc3QgYWxsSW1hZ2VzID0gSlNPTi5wYXJzZShpbWFnZXM/LmlubmVySFRNTCkuaW1hZ2VzO1xuXG4gIGNvbnN0IHRoZW1lSW1hZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGRvY3VtZW50LmJvZHkuZGF0YXNldC50aGVtZVxuICAgIGNvbnN0IHRoZW1lSW1hZ2UgPSBhbGxJbWFnZXMuZmluZCgoaW1nKSA9PiBpbWcudGhlbWUgPT0gY3VycmVudFRoZW1lKTtcblxuICAgIGltYWdlLnNyYyA9IHRoZW1lSW1hZ2UuaW1hZ2VcbiAgICBpbWFnZS5kYXRhc2V0LnNyYyA9IHRoZW1lSW1hZ2UuaW1hZ2VcblxuICAgIHVwZGF0ZSgpXG4gIH1cblxuICB0aGVtZUltYWdlcygpXG5cbiAgY3R4Lm9uKCd0aGVtZScsICgpID0+IHtcbiAgICB0aGVtZUltYWdlcygpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgYWRkLCByZW1vdmUsIG9uLCBxcywgcXNhLCB0b2dnbGUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCB7IGdzYXAsIEV4cG8gfSBmcm9tICdnc2FwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJ0VG9nZ2xlLCBtZW51T3BlbiwgYW5ub3VuY2VCYXIsIGFubm91bmNlQ2xvc2UsIGFuY2hvciwgbmF2IH0gPVxuICAgIGNob296eShub2RlKVxuXG4gIGxldCBoZWFkZXJDbG9zZSA9IHFzKCcuaGVhZGVyLWNsb3NlJylcbiAgbGV0IGNsb3NlWm9uZSA9IHFzKCcuanMtY2xvc2Vab25lJylcbiAgbGV0IGNhcnRDb3VudCA9IHFzYSgnLmpzLWNhcnRDb3VudCcpXG5cbiAgaWYgKGFubm91bmNlQ2xvc2UpIHtcbiAgICBvbihhbm5vdW5jZUNsb3NlLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICBhZGQoYW5ub3VuY2VCYXIsICdoaWRkZW4nKVxuICAgICAgcXMoJ2JvZHknKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hbm5vdW5jZScsIGAwcHhgKVxuICAgIH0pXG4gIH1cblxuICBvbihjYXJ0VG9nZ2xlLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgY3R4LmVtaXQoJ2NhcnQ6dG9nZ2xlJywgKHN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYXJ0T3BlbjogIXN0YXRlLmNhcnRPcGVuLFxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgLy9kZWZpbmUgbmF2IHNpemluZ1xuICBxcygnYm9keScpLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICctLWhlYWRlckhlaWdodCcsXG4gICAgYCR7cXMoJ2hlYWRlcicpLm9mZnNldEhlaWdodH1weGBcbiAgKVxuXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tbmF2JywgYCR7bmF2Lm9mZnNldFdpZHRofXB4YCk7IC8vIENoYW5nZSB0byBkZXNpcmVkIGNvbG9yXG5cbiAgb24od2luZG93LCAncmVzaXplJywgKCkgPT4ge1xuICAgIHFzKCdib2R5Jykuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1oZWFkZXJIZWlnaHQnLFxuICAgICAgYCR7cXMoJ2hlYWRlcicpLm9mZnNldEhlaWdodH1weGBcbiAgICApXG5cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLW5hdicsIGAke25hdi5vZmZzZXRXaWR0aH1weGApOyAvLyBDaGFuZ2UgdG8gZGVzaXJlZCBjb2xvclxuICB9KVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHFzKCdib2R5Jykuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1oZWFkZXJIZWlnaHQnLFxuICAgICAgYCR7cXMoJ2hlYWRlcicpLm9mZnNldEhlaWdodH1weGBcbiAgICApXG4gIH0sIDEwMDApXG5cbiAgb24obWVudU9wZW4sICdjbGljaycsICgpID0+IHtcbiAgICBnc2FwLmZyb21UbyhcbiAgICAgICcubmF2LW1lbnUtd3JhcCcsXG4gICAgICB7IHg6ICctMTAwJScgfSxcbiAgICAgIHsgeDogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogRXhwby5lYXNlT3V0IH1cbiAgICApXG5cbiAgICBhZGQobWVudU9wZW4sICdoaWRkZW4nKVxuICAgIHJlbW92ZShoZWFkZXJDbG9zZSwgJ2hpZGRlbicpXG4gICAgcmVtb3ZlKGNsb3NlWm9uZSwgJ2hpZGRlbicpXG4gIH0pXG5cbiAgcXNhKCcuanMtbWVudUNsb3NlJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgb24oYnRuLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICBjdHguZW1pdCgnbWVudTpjbG9zZScpXG4gICAgfSlcbiAgfSlcblxuICBjdHgub24oJ2NhcnQ6dXBkYXRlZCcsIChzdGF0ZSkgPT4ge1xuICAgIGNhcnRDb3VudC5mb3JFYWNoKChjb3VudCkgPT4gKGNvdW50LmlubmVySFRNTCA9IHN0YXRlLmNhcnQuaXRlbV9jb3VudCkpXG4gIH0pXG5cbiAgY2FydENvdW50LmZvckVhY2goXG4gICAgKGNvdW50KSA9PiAoY291bnQuaW5uZXJIVE1MID0gY3R4LmdldFN0YXRlKCkuY2FydC5pdGVtX2NvdW50KVxuICApXG5cbiAgY3R4Lm9uKCdtZW51OmNsb3NlJywgKCkgPT4ge1xuICAgIGdzYXAuZnJvbVRvKFxuICAgICAgJy5uYXYtbWVudS13cmFwJyxcbiAgICAgIHsgeDogMCB9LFxuICAgICAgeyB4OiAnLTEwMCUnLCBkdXJhdGlvbjogMC4zLCBlYXNlOiBFeHBvLmVhc2VPdXQgfVxuICAgIClcblxuICAgIHJlbW92ZShtZW51T3BlbiwgJ2hpZGRlbicpXG4gICAgYWRkKGhlYWRlckNsb3NlLCAnaGlkZGVuJylcbiAgICBhZGQoY2xvc2Vab25lLCAnaGlkZGVuJylcbiAgfSlcblxuICAvL2hhbmRsZSBoZWFkZXIgbG9nb1xuICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYgPT0gJy8nKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2dvJylcbiAgfSBlbHNle1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9nbycpXG4gIH1cblxuICAvL3RvZ2dsZSBjYXJ0IGlmIHVzZXIgaXMgcG9pbnRlZCB0byBjYXJ0IHBhZ2VcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NhcnQnKSA+IC0xKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyNjYXJ0JykgPiAtMSkge1xuICAgICAgY3R4LmVtaXQoJ2NhcnQ6dG9nZ2xlJywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2FydE9wZW46ICFzdGF0ZS5jYXJ0T3BlbixcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyNjYXJ0J1xuICAgIH1cbiAgfVxuXG4gIGlmIChhbmNob3IpIHtcbiAgICBvbihhbmNob3IsICdjbGljaycsIChlKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGUudGFyZ2V0LmRhdGFzZXQubGlua1xuICAgIH0pXG4gIH1cblxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCJwaWNvYXBwXCI7XG5pbXBvcnQgY2hvb3p5IGZyb20gXCJjaG9venlcIjtcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBvbiwgcXNhIH0gZnJvbSBcIkBzZWxmYXdhcmUvbWFydGhhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHByb2R1Y3RzLCB0b2dnbGUsIGljb24sIGhlcm8sIGxpbmsgfSA9IGNob296eShub2RlKTtcblxuICBjb25zdCBhbGxQcm9kdWN0cyA9IEpTT04ucGFyc2UocHJvZHVjdHM/LmlubmVySFRNTCkucHJvZHVjdHM7XG5cbiAgY29uc3QgdXBkYXRlVGhlbWUgPSAodGhlbWUsIHByaW1hcnksIHNlY29uZGFyeSwgdGVydGlhcnkpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1wcmltYXJ5XCIsIGAke3ByaW1hcnl9YCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Vjb25kYXJ5XCIsIGAke3NlY29uZGFyeX1gKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXJ0aWFyeVwiLCBgJHt0ZXJ0aWFyeX1gKTtcbiAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQudGhlbWUgPSB0aGVtZVxuICB9XG5cbiAgdXBkYXRlVGhlbWUobm9kZS5kYXRhc2V0LnRoZW1lLCBub2RlLmRhdGFzZXQucHJpbWFyeSwgbm9kZS5kYXRhc2V0LnNlY29uZGFyeSwgbm9kZS5kYXRhc2V0LnRlcnRpYXJ5KVxuXG4gIG9uKHRvZ2dsZSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQgYnRuID0gZS50YXJnZXRcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludChidG4uZGF0YXNldC5pbmRleCkgLSAxXG4gICAgdXBkYXRlVGhlbWUoYnRuLmRhdGFzZXQudGhlbWUsIGJ0bi5kYXRhc2V0LnByaW1hcnksIGJ0bi5kYXRhc2V0LnNlY29uZGFyeSwgYnRuLmRhdGFzZXQudGVydGlhcnkpXG5cbiAgICByZW1vdmUodG9nZ2xlLCAnYWN0aXZlJylcbiAgICBhZGQoZS50YXJnZXQsICdhY3RpdmUnKVxuXG4gICAgaGVyby5zcmMgPSBhbGxQcm9kdWN0c1tpbmRleF0/Lmhlcm9cbiAgICBpY29uLnNyYyA9IGFsbFByb2R1Y3RzW2luZGV4XT8uaWNvblxuICAgIGxpbmsuaHJlZiA9IGFsbFByb2R1Y3RzW2luZGV4XT8udXJsXG5cbiAgICBjdHguZW1pdCgndGhlbWUnKVxuICB9KVxufSk7XG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBvbiwgcmVtb3ZlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGxxaXAsIGltZyB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgb24oaW1nLCAnbG9hZCcsICgpID0+IHtcbiAgICBpbWcuZGVjb2RlKCkudGhlbigoKSA9PiB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjdHguZW1pdCgnbGF6eTpsb2FkJywgbnVsbCwgeyBpZDogbm9kZS5kYXRhc2V0LmlkIH0pXG4gICAgICAgIGxldCBvZmYgPSBvbihpbWcsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgIG9mZigpXG4gICAgICAgICAgbHFpcC5yZW1vdmUoKVxuICAgICAgICB9KVxuICAgICAgICByZW1vdmUoaW1nLCAnb3BhY2l0eS0wJylcbiAgICAgICAgaW1nLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGltZy5zcmMgPSBpbWcuZGF0YXNldC5zcmNcbiAgaW1nLnNyY3NldCA9IGltZy5kYXRhc2V0LnNyY3NldFxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBvbiwgcmVtb3ZlLCBhZGQsIGhhcywgcXMsIHFzYSB9IGZyb20gJ21hcnRoYSdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBwcmltYXJ5IH0gPSBjaG9venkobm9kZSlcbiAgbGV0IGN1cnJlbnRYID0gMFxuICBsZXQgdGFyZ2V0WCA9IDBcblxuICB3aW5kb3cuc2V0SW50ZXJ2YWwoYW5pbWF0aW9uTG9vcCwgMTUpXG5cbiAgZnVuY3Rpb24gYW5pbWF0aW9uTG9vcCgpIHtcbiAgICB0YXJnZXRYID0gY3VycmVudFggPiBwcmltYXJ5LnNjcm9sbFdpZHRoID8gMCA6IGN1cnJlbnRYICsgMVxuXG4gICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0YXJnZXRYfXB4KSB0cmFuc2xhdGVaKDBweClgXG5cbiAgICBjdXJyZW50WCA9IHRhcmdldFhcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IG9uLCBxcywgYWRkLCByZW1vdmUgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJ2tsYXZpeW8tc3Vic2NyaWJlJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBmb3JtQ29udGVudCwgc3VjY2Vzcywgc3VibWl0LCBlcnJvciB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgb24oc3VibWl0LCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IGxpc3RJZCA9ICdYdEdKV1cnXG4gICAgbGV0IGVtYWlsID0gcXMoJy5qcy1lbWFpbCcsIG5vZGUpLnZhbHVlXG5cbiAgICBpZiAoZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgc3Vic2NyaWJlKGxpc3RJZCwgZW1haWwsIHt9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZW1vdmUoc3VjY2VzcywgJ2hpZGRlbicpXG4gICAgICAgIGFkZChmb3JtQ29udGVudCwgJ2hpZGRlbicpXG4gICAgICAgIGFkZChlcnJvciwgJ2hpZGRlbicpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoZXJyb3IsICdoaWRkZW4nKVxuICAgIH1cbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IHsgYWRkVmFyaWFudCB9IGZyb20gJ2Jhc2Uvc2NyaXB0cy91dGlscy9jYXJ0LmpzJ1xuaW1wb3J0IHsgcXMsIHFzYSwgaGFzLCBvbiB9IGZyb20gJ21hcnRoYSdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBzdWJEZXRhaWxUb2dnbGUsIHN1YkRldGFpbCwgcXVhbnRpdHkgfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHFzKCcuanMtcHJvZHVjdC1qc29uJywgbm9kZSkuaW5uZXJIVE1MKVxuICBjb25zdCBhZGRCdG4gPSBxcygnLmpzLWFkZC10by1jYXJ0Jywgbm9kZSlcbiAgY29uc3QgYWRkVGV4dCA9XG4gICAgYWRkQnRuLmlubmVySFRNTCB8fFxuICAgIGAke2FkZEJ0bi5kYXRhc2V0Py5wcmVvcmRlciA9PSAndHJ1ZScgPyAnUHJlLU9yZGVyJyA6ICdBZGQgVG8gQ2FydCd9IHwgJHtcbiAgICAgIGFkZEJ0bi5kYXRhc2V0Py5wcmljZVxuICAgIH1gXG5cbiAgbGV0IHsgc2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudCwgcHJvZHVjdCB9ID0ganNvblxuICBsZXQgY3VycmVudFZhcmlhbnQgPSBwcm9kdWN0LnZhcmlhbnRzLmZpbHRlcihcbiAgICAodikgPT4gdi5pZCA9PT0gc2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudFxuICApWzBdXG5cbiAgY3R4Lm9uKCdjYXJ0OnRvZ2dsZScsICgpID0+IHtcbiAgICBhZGRCdG4uaW5uZXJIVE1MID0gYWRkVGV4dFxuICB9KVxuXG4gIG9uKGFkZEJ0biwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGFkZEJ0bi5pbm5lckhUTUwgPSAnQWRkaW5nLi4uJ1xuXG4gICAgLy9nZXQgYWRkb25zXG4gICAgcXNhKCcuanMtYWRkb24uc2VsZWN0ZWQnLCBub2RlKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgYWRkb25Kc29uID0gSlNPTi5wYXJzZShxcygnLmpzLWFkZG9uLWpzb24nLCBlbCkuaW5uZXJIVE1MKVxuXG4gICAgICBsZXQgeyBhZGRvblNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnQsIGFkZG9uUHJvZHVjdCB9ID0gYWRkb25Kc29uXG4gICAgICBsZXQgYWRkb25WYXJpYW50ID0gYWRkb25Qcm9kdWN0LnZhcmlhbnRzLmZpbHRlcihcbiAgICAgICAgKHYpID0+IHYuaWQgPT09IGFkZG9uU2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudFxuICAgICAgKVswXVxuXG4gICAgICBhZGRWYXJpYW50KGFkZG9uVmFyaWFudCwgMSwgbnVsbClcbiAgICB9KVxuICAgIC8vIGFkZEJ0bi5pbm5lckhUTUwgPSAnYWRkaW5nLi4uJ1xuXG4gICAgbGV0IHNlbGVjdGVkVmFyaWFudCA9IHFzKCdzZWxlY3RbbmFtZT1cImlkXCJdJywgbm9kZSkudmFsdWVcblxuICAgIGN1cnJlbnRWYXJpYW50ID0gc2VsZWN0ZWRWYXJpYW50XG4gICAgICA/IHByb2R1Y3QudmFyaWFudHMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkID09PSBwYXJzZUludChxcygnc2VsZWN0W25hbWU9XCJpZFwiXScsIG5vZGUpLnZhbHVlKVxuICAgICAgICApWzBdXG4gICAgICA6IGN1cnJlbnRWYXJpYW50XG5cbiAgICBhZGRWYXJpYW50KGN1cnJlbnRWYXJpYW50LCBxdWFudGl0eT8udmFsdWUgfHwgMSwgbnVsbClcbiAgICBjb25zb2xlLmxvZyhqc29uKVxuICB9KVxuXG4gIHJldHVybiAoKSA9PiB7fVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBxcywgb24sIHFzYSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnZW1ibGEtY2Fyb3VzZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IGNhcm91c2VsLCBuZXh0LCBwcmV2LCBjb3VudGVyLCBwcm9kdWN0SW1hZ2VzLCB2YXJpYW50VGl0bGUsIGJ0bnMsIHRodW1iIH0gPVxuICAgIGNob296eShub2RlKVxuXG4gIGxldCBlbWJsYVxuXG4gIGNvbnN0IGltYWdlcyA9IEpTT04ucGFyc2UocHJvZHVjdEltYWdlcz8uaW5uZXJIVE1MKT8uaW1hZ2VzXG4gIGltYWdlcy5mb3JFYWNoKChlbCkgPT4ge30pXG5cbiAgY29uc3QgaW5pdEVtYmxhID0gKCkgPT4ge1xuICAgIGVtYmxhID0gRW1ibGFDYXJvdXNlbChjYXJvdXNlbCwgeyBsb29wOiB0cnVlLCBza2lwU25hcHM6IGZhbHNlIH0pXG5cbiAgICBpZiAobmV4dCAmJiBwcmV2KSB7XG4gICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsUHJldiwgZmFsc2UpXG4gICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gICAgfVxuXG4gICAgbGV0IHZhcmlhbnRJbWFnZXMgPSBxc2EoJy5wcm9kdWN0LWltZycpXG5cbiAgICBidG5zLmlubmVySFRNTCA9ICcnXG5cbiAgICAvL3JlbmRlciBidXR0b25zXG4gICAgdmFyaWFudEltYWdlcy5mb3JFYWNoKChpbWcsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJywgaW5kZXgpXG4gICAgICAgIGVtYmxhLnNjcm9sbFRvKGluZGV4KVxuICAgICAgfSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbC1kb3QnKVxuICAgICAgYnRucy5hcHBlbmRDaGlsZChidG4pXG4gICAgfSlcblxuICAgIGFkZChxcygnLmNhcm91c2VsLWRvdDpmaXJzdC1jaGlsZCcpLCAnaXMtYWN0aXZlJylcblxuICAgIGVtYmxhLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgICBpZiAoY291bnRlcikge1xuICAgICAgICByZW1vdmUocXMoJy5jYXJvdXNlbC1kb3QuaXMtYWN0aXZlJyksICdpcy1hY3RpdmUnKVxuICAgICAgICBhZGQoXG4gICAgICAgICAgcXMoXG4gICAgICAgICAgICBgLmNhcm91c2VsLWRvdDpudGgtY2hpbGQoJHtlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKSArIDF9KWAsXG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgKSxcbiAgICAgICAgICAnaXMtYWN0aXZlJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXRFbWJsYSgpXG5cbiAgY3R4Lm9uKCd2YXJpYW50OmNoYW5nZScsICgpID0+IHtcbiAgICBsZXQgY3VycmVudFZhcmlhbnQgPSB2YXJpYW50VGl0bGUuaW5uZXJIVE1MXG5cbiAgICBjYXJvdXNlbC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgLy9yZW5kZXIgdmFyaWFudCBpbWFnZXNcbiAgICBjYXJvdXNlbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHNlbGVjdC1ub25lIHctZnVsbCBoLVsxMDB2d10gbTpoLWhlcm8gbTptaW4taC1bY2FsYygxMDB2aC0xM3JlbSldXCI+XG4gICAgICAgICR7aW1hZ2VzXG4gICAgICAgICAgLm1hcCgoaW1nKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGltZy5hbHQudG9Mb3dlckNhc2UoKSA9PSBjdXJyZW50VmFyaWFudCB8fFxuICAgICAgICAgICAgICBpbWcuYWx0LnRvTG93ZXJDYXNlKCkgPT0gJ2FsbCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtZnVsbCBwcm9kdWN0LWltZyBtOnB4LTAgcmVsYXRpdmUgbWluLXctWzEwMCVdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTBcIiBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Mi83MDYxLzk0NTYvJHtpbWcuc3JjfVwiIGFsdD1cIiR7aW1nLmFsdH1cIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuXG4gICAgLy9yZXNldCBjYXJvdXNlbFxuICAgIGlmIChlbWJsYSkge1xuICAgICAgZW1ibGEuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgLy9pbml0aWFsaXplIGNhcm91c2VsXG4gICAgaW5pdEVtYmxhKClcbiAgfSlcblxuICBvbih0aHVtYiwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlbWJsYS5zY3JvbGxUbyhwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4IC0gMSkpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIHFzLCBvbiwgdG9nZ2xlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGxldCB7IHF1YW50aXR5LCByZW1vdmUsIGFkZCB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QgbWluID0gMVxuICBjb25zdCBtYXggPSAxMDAwXG5cbiAgbGV0IGNvdW50ID0gMVxuXG4gIGNvbnNvbGUubG9nKCdjb3VudGVyJylcblxuICBjb25zdCBzZXQgPSAoaSkgPT4ge1xuICAgIGNvdW50ID0gTWF0aC5tYXgobWluLCBNYXRoLm1pbihpLCBtYXggfHwgMTAwMDApKVxuXG4gICAgcXVhbnRpdHkuaW5uZXJIVE1MID0gY291bnRcbiAgICBxdWFudGl0eS52YWx1ZSA9IGNvdW50XG4gIH1cblxuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldCgtLWNvdW50KVxuXG4gICAgY29uc29sZS5sb2coJ3JlbW92ZScpXG4gIH0pXG5cbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXQoKytjb3VudClcblxuICAgIGNvbnNvbGUubG9nKCdhZGQnKVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgY2hvb3p5IGZyb20gJ2Nob296eSdcbmltcG9ydCB7IHJlbW92ZSwgYWRkLCBvbiwgcXMsIHFzYSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBvcHRpb25TdWIsIG9wdGlvbk9uZSwgb3B0aW9uV3JhcCB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgbGV0IGFkZFByaWNlID0gcXNhKCcuanMtYWRkUHJpY2UnKVxuXG4gIGlmIChvcHRpb25TdWIpIHtcbiAgICBvbihvcHRpb25TdWIsICdjbGljaycsICgpID0+IHtcbiAgICAgIGFkZChxcygnLnByb2R1Y3QtdmFyaWFudC13cmFwJyksICdpcy1zdWJzY3JpcHRpb24nKVxuICAgICAgcmVtb3ZlKG9wdGlvbldyYXAsICdzZWxlY3RlZC1vbmUnKVxuICAgICAgYWRkKG9wdGlvbldyYXAsICdzZWxlY3RlZC1zdWInKVxuICAgICAgYWRkKG9wdGlvblN1YiwgJ2FjdGl2ZScpXG4gICAgICByZW1vdmUob3B0aW9uT25lLCAnYWN0aXZlJylcblxuICAgICAgaWYgKGFkZFByaWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWRkUHJpY2UuZm9yRWFjaCgocHJpY2UpID0+IHtcbiAgICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBgJCR7b3B0aW9uU3ViLmRhdGFzZXQucHJpY2V9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbihvcHRpb25PbmUsICdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbW92ZShxcygnLnByb2R1Y3QtdmFyaWFudC13cmFwJyksICdpcy1zdWJzY3JpcHRpb24nKVxuICAgICAgYWRkKG9wdGlvbldyYXAsICdzZWxlY3RlZC1vbmUnKVxuICAgICAgcmVtb3ZlKG9wdGlvbldyYXAsICdzZWxlY3RlZC1zdWInKVxuICAgICAgcmVtb3ZlKG9wdGlvblN1YiwgJ2FjdGl2ZScpXG4gICAgICBhZGQob3B0aW9uT25lLCAnYWN0aXZlJylcblxuICAgICAgaWYgKGFkZFByaWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWRkUHJpY2UuZm9yRWFjaCgocHJpY2UpID0+IHtcbiAgICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBgJCR7b3B0aW9uT25lLmRhdGFzZXQucHJpY2V9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyByZW1vdmUsIGFkZCwgcXMsIHFzYSwgb24sIGhhcywgdG9nZ2xlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgeyBnc2FwLCBFeHBvIH0gZnJvbSAnZ3NhcCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHtcbiAgICBhY3RpdmVGcmVxdWVuY3ksXG4gICAgY29udGVudCxcbiAgICBjb250ZW50V3JhcCxcbiAgICB0b2dnbGVGcmVxdWVuY3ksXG4gICAgYXJyb3csXG4gICAgZnJlcXVlbmN5T3B0aW9uLFxuICAgIHN1Yk9wdGlvbixcbiAgICBmcmVxdWVuY3lXcmFwLFxuICB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgY29uc3QgdG9nZ2xlT3B0aW9ucyA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudEhlaWdodCA9IGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG5cbiAgICB0b2dnbGUoY29udGVudFdyYXAsICdhY3RpdmUnKVxuICAgIHRvZ2dsZShhcnJvdywgJ3JvdGF0ZS05MCcpXG4gICAgdG9nZ2xlKGFycm93LCAnLXJvdGF0ZS05MCcpXG5cbiAgICBpZiAoaGFzKGNvbnRlbnRXcmFwLCAnYWN0aXZlJykpIHtcbiAgICAgIGNvbnRlbnRXcmFwLnN0eWxlLm1heEhlaWdodCA9IGAke2NvbnRlbnRIZWlnaHQgKyAxMH1weGBcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudFdyYXAuc3R5bGUubWF4SGVpZ2h0ID0gJzBweCdcbiAgICB9XG4gIH1cblxuICBvbih0b2dnbGVGcmVxdWVuY3ksICdjbGljaycsIChlKSA9PiB7XG4gICAgdG9nZ2xlT3B0aW9ucygpXG4gIH0pXG5cbiAgb24oZnJlcXVlbmN5T3B0aW9uLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIHRvZ2dsZU9wdGlvbnMoKVxuXG4gICAgcXNhKCcuanMtZnJlcXVlbmN5T3B0aW9uJywgbm9kZSkuZm9yRWFjaCgob3B0KSA9PiB7XG4gICAgICByZW1vdmUob3B0LCAnYWN0aXZlJylcbiAgICB9KVxuXG4gICAgYWRkKGUudGFyZ2V0LCAnYWN0aXZlJylcblxuICAgIGxldCBjdXJPcHRpb24gPSBlLnRhcmdldC5kYXRhc2V0LmlkXG5cbiAgICBhY3RpdmVGcmVxdWVuY3kuaW5uZXJIVE1MID0gZS50YXJnZXQuZGF0YXNldC50aXRsZVxuICAgIHRvZ2dsZUZyZXF1ZW5jeS5kYXRhc2V0LmlkID0gY3VyT3B0aW9uXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCBjaG9venkgZnJvbSAnY2hvb3p5J1xuaW1wb3J0IHsgcmVtb3ZlLCBhZGQsIHFzLCBxc2EsIG9uLCBoYXMsIHRvZ2dsZSB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBvcHRpb24sIHZhcmlhbnRUaXRsZSwgc3dhdGNoIH0gPSBjaG9venkobm9kZSlcbiAgbGV0IGFkZEJ0biA9IHFzYSgnLmpzLWFkZC10by1jYXJ0JylcbiAgbGV0IG9wdGlvbkdyb3VwcyA9IHFzYSgnLmpzLW9wdGlvbkdyb3VwJylcblxuICBsZXQgc2VsZWN0ZWRTd2F0Y2hcbiAgbGV0IG9wdGlvbnMgPSBxc2EoJy5qcy12YXJpYW50T3B0aW9uJywgbm9kZSlcblxuICBjb25zdCB1cGRhdGVWYXJpYW50ID0gKCkgPT4ge1xuICAgIGlmICghcXMoJy5qcy1zd2F0Y2gnKSkgcmV0dXJuXG5cbiAgICBzZWxlY3RlZFN3YXRjaCA9IHFzKCcuanMtc3dhdGNoLmFjdGl2ZScsIG5vZGUpPy5kYXRhc2V0Py50aXRsZSB8fCBudWxsXG5cbiAgICAvLyAvL2ZpbmQgdmFyaWFudCB0aGF0IG1hdGNoZXMgdGl0bGUgYW5kIHNpemVcbiAgICBjb25zdCBuZXdWYXJpYW50ID0gb3B0aW9ucy5maW5kKFxuICAgICAgKHZhcmlhbnQpID0+IHZhcmlhbnQuZGF0YXNldC50aXRsZSA9PT0gc2VsZWN0ZWRTd2F0Y2hcbiAgICApXG5cbiAgICAvL2NsZWFyIGFsbCBvcHRpb25zXG4gICAgb3B0aW9ucy5mb3JFYWNoKChzZWxlY3RlZFZhcmlhbnQpID0+XG4gICAgICBzZWxlY3RlZFZhcmlhbnQucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpXG4gICAgKVxuXG4gICAgLy9zZWxlY3QgbmV3IHZhcmlhbnRcbiAgICBpZiAobmV3VmFyaWFudCkgbmV3VmFyaWFudC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJylcblxuICAgIC8vY29uZmlndXJlIGJ1dHRvbiB3aXRoIGludmVudG9yeVxuICAgIGlmICghbmV3VmFyaWFudCB8fCBuZXdWYXJpYW50LmRhdGFzZXQuaW52ZW50b3J5IDwgMSkge1xuICAgICAgYWRkQnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnT3V0IE9mIFN0b2NrJ1xuICAgICAgICBhZGQoYnRuLCAnb29zJylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICBidG4uaW5uZXJIVE1MID0gYCR7XG4gICAgICAgICAgYnRuLmRhdGFzZXQucHJlb3JkZXIgPT0gJ3RydWUnID8gJ1ByZS1PcmRlcicgOiAnQWRkIFRvIENhcnQnXG4gICAgICAgIH0gfCAke2J0bi5kYXRhc2V0LnByaWNlfWBcbiAgICAgICAgcmVtb3ZlKGJ0biwgJ29vcycpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhcmlhbnRTZWxlY3QgPSAoY3VyVGl0bGUpID0+IHtcbiAgICAvL2NsZWFyIHN3YXRjaGVzXG4gICAgcXNhKCcuanMtc3dhdGNoJykuZm9yRWFjaCgoc3dhdGNoKSA9PiB7XG4gICAgICByZW1vdmUoc3dhdGNoLCAnYWN0aXZlJylcbiAgICAgIHN3YXRjaC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsIGZhbHNlKVxuICAgIH0pXG5cbiAgICAvL3NlbGVjdCBuZXcgc3dhdGNoXG4gICAgbGV0IHNlbGVjdGVkU3dhdGNoID0gcXMoYC5qcy1zd2F0Y2hbZGF0YS10aXRsZT1cIiR7Y3VyVGl0bGV9XCJdYCwgbm9kZSlcbiAgICBhZGQoc2VsZWN0ZWRTd2F0Y2gsICdhY3RpdmUnKVxuICAgIHNlbGVjdGVkU3dhdGNoLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgdHJ1ZSlcblxuICAgIHZhcmlhbnRUaXRsZS5pbm5lckhUTUwgPSBjdXJUaXRsZVxuXG4gICAgY3R4LmVtaXQoJ3ZhcmlhbnQ6Y2hhbmdlJylcbiAgfVxuXG4gIG9uKHN3YXRjaCwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoaGFzKGUudGFyZ2V0LCAnYWN0aXZlJykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBjdXJUaXRsZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpXG5cbiAgICB2YXJpYW50U2VsZWN0KGN1clRpdGxlKVxuICAgIHVwZGF0ZVZhcmlhbnQoKVxuICB9KVxuXG4gIC8vdXBkYXRlIHZhcmlhbnQgb24gZmlyc3QgbG9hZFxuICBpZiAob3B0aW9ucy5sZW5ndGggPiAxKSB1cGRhdGVWYXJpYW50KClcblxuICBjdHgub24oJ3ZhcmlhbnQ6dXBkYXRlJywgKCkgPT4ge1xuICAgIHVwZGF0ZVZhcmlhbnQoKVxuICB9KVxuXG4gIC8vbmF2IGJhciBzZWxlY3RvclxuICAvLyBxc2EoJy5qcy1uYXZPcHRpb25zW2RhdGEtZ3JvdXBdJykuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgLy8gICBsZXQgc3dhdGNoVG9nZ2xlID0gcXMoJy5qcy1tZW51U3dhdGNoJywgZ3JvdXApXG5cbiAgLy8gICBvbihzd2F0Y2hUb2dnbGUsICdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICBsZXQgY3VyR3JvdXAgPSBlLnRhcmdldC5jbG9zZXN0KCcuanMtbmF2T3B0aW9ucycpXG5cbiAgLy8gICAgIHRvZ2dsZShxcygnLmpzLW5hdk9wdGlvbkdyb3VwJywgY3VyR3JvdXApLCAnaGlkZGVuJylcbiAgLy8gICAgIHRvZ2dsZShxcygnLmpzLWNoZXZyb25OYXYnLCBjdXJHcm91cCksICdyb3RhdGUtMTgwJylcbiAgLy8gICB9KVxuICAvLyB9KVxuXG4gIC8vIHFzYSgnLmpzLXN3YXRjaE5hdicpLmZvckVhY2goKG5hdlN3YXRjaCkgPT4ge1xuICAvLyAgIG9uKG5hdlN3YXRjaCwgJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgIGxldCBjdXJUaXRsZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpXG4gIC8vICAgICBsZXQgY29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdCgnLmpzLW5hdk9wdGlvbnNbZGF0YS1ncm91cF0nKVxuICAvLyAgICAgbGV0IGN1ckdyb3VwID0gY29udGFpbmVyLmRhdGFzZXQ/Lmdyb3VwXG5cbiAgLy8gICAgIHRvZ2dsZShlLnRhcmdldC5jbG9zZXN0KCcuanMtbmF2T3B0aW9uR3JvdXAnKSwgJ2hpZGRlbicpXG4gIC8vICAgICB0b2dnbGUocXMoJy5qcy1jaGV2cm9uTmF2JywgY29udGFpbmVyKSwgJ3JvdGF0ZS0xODAnKVxuXG4gIC8vICAgICAvL2hpZGUgc2VsZWN0ZWQgZnJvbSBsaXN0XG4gIC8vICAgICBxc2EoJy5qcy1zd2F0Y2hOYXYnLCBjb250YWluZXIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgLy8gICAgICAgaWYgKGl0ZW0uZGF0YXNldC50aXRsZSA9PT0gZS50YXJnZXQuZGF0YXNldC50aXRsZSkge1xuICAvLyAgICAgICAgIGFkZChpdGVtLCAnaGlkZGVuJylcbiAgLy8gICAgICAgICBxcygnLmpzLXNlbGVjdGVkTmF2T3B0aW9uJywgY29udGFpbmVyKS5pbm5lckhUTUwgPSBpdGVtLmRhdGFzZXQudGl0bGVcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICByZW1vdmUoaXRlbSwgJ2hpZGRlbicpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG5cbiAgLy8gICAgIHZhcmlhbnRTZWxlY3QoY3VyVGl0bGUsIGN1ckdyb3VwKVxuICAvLyAgICAgdXBkYXRlVmFyaWFudCgpXG4gIC8vICAgfSlcbiAgLy8gfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBvbiwgcXMsIGFkZCwgcmVtb3ZlIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5pbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICdrbGF2aXlvLXN1YnNjcmliZSdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgbGV0IHsgZm9ybUNvbnRlbnQsIHN1Y2Nlc3MsIHN1Ym1pdCB9ID0gY2hvb3p5KG5vZGUpXG5cbiAgb24oc3VibWl0LCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IGxpc3RJZCA9ICdXekc3MnMnXG4gICAgbGV0IGVtYWlsID0gcXMoJy5qcy1lbWFpbCcsIG5vZGUpLnZhbHVlXG5cbiAgICBzdWJzY3JpYmUobGlzdElkLCBlbWFpbCwge30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZW1vdmUoc3VjY2VzcywgJ2hpZGRlbicpXG4gICAgICBhZGQoZm9ybUNvbnRlbnQsICdoaWRkZW4nKVxuXG4gICAgICBpZiAocXMoJy5qcy1mb3JtVGl0bGUnKSkge1xuICAgICAgICBhZGQocXMoJy5qcy1mb3JtVGl0bGUnKSwgJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuaW1wb3J0IGNob296eSBmcm9tICdjaG9venknXG5pbXBvcnQgeyBhZGQsIHJlbW92ZSwgb24sIHFzLCBxc2EgfSBmcm9tICdAc2VsZmF3YXJlL21hcnRoYSdcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBsZXQgeyBjYXJvdXNlbCwgbmV4dCwgcHJldiwgY291bnRlciwgYWN0aXZlSW5kZXggfSA9IGNob296eShub2RlKVxuXG4gIGNvbnN0IGVtYmxhID0gRW1ibGFDYXJvdXNlbChjYXJvdXNlbCwge1xuICAgIGxvb3A6IHRydWUsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgICB0cmltU25hcHM6IHRydWUsXG4gICAgY29udGFpblNjcm9sbDogdHJ1ZSxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gIH0pXG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGEuc2Nyb2xsTmV4dCwgZmFsc2UpXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuXG4gICAgLy8gb24obmV4dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgZW1ibGEuc2Nyb2xsTmV4dFxuICAgIC8vIH0pXG4gIH1cblxuICBpZiAoY291bnRlcikge1xuICAgIG9uKGNvdW50ZXIsICdjbGljaycsIChlKSA9PiB7XG4gICAgICBlbWJsYS5zY3JvbGxUbyhlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgIH0pXG4gIH1cblxuICBlbWJsYS5vbignc2VsZWN0JywgKCkgPT4ge1xuICAgIGlmIChjb3VudGVyKSB7XG4gICAgICByZW1vdmUoY291bnRlciwgJ2lzLWFjdGl2ZScpXG4gICAgICBhZGQoXG4gICAgICAgIHFzKGAuanMtY291bnRlcltkYXRhLWluZGV4PVwiJHtlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKX1cIl1gLCBub2RlKSxcbiAgICAgICAgJ2lzLWFjdGl2ZSdcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXgpIHtcbiAgICAgIGFjdGl2ZUluZGV4LmlubmVySFRNTCA9IGVtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpICsgMVxuICAgIH1cbiAgfSlcblxuICAvLyByZXR1cm4gKCkgPT4ge1xuICAvLyAgIGlmIChuZXh0KSB7XG4gIC8vICAgICAgIG5leHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYS5zY3JvbGxOZXh0LCBmYWxzZSlcbiAgLy8gICAgICAgcHJldi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhLnNjcm9sbFByZXYsIGZhbHNlKVxuICAvLyAgIH1cbiAgLy8gfVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIC8vIE9wdGlvbnMgZm9yIHRoZSBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICByb290OiBudWxsLFxuICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgIHRocmVzaG9sZDogMCwgLy8gQWRqdXN0IGFzIG5lZWRlZCwgMC41IG1lYW5zIGF0IGxlYXN0IDUwJSBvZiB0aGUgdmlkZW8gbXVzdCBiZSBpbiB2aWV3XG4gIH1cblxuICAvLyBDYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSB2aWRlbyBjb21lcyBpbnRvIHZpZXdcbiAgZnVuY3Rpb24gaGFuZGxlSW50ZXJzZWN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIC8vIExvYWQgdGhlIHZpZGVvXG4gICAgICAgIG5vZGUuc3JjID0gbm9kZS5kYXRhc2V0LnZpZGVvXG4gICAgICAgIG5vZGUuYXV0b3BsYXkgPSB0cnVlXG4gICAgICAgIG5vZGUubG9vcCA9IHRydWVcblxuICAgICAgICAvLyBVbm9ic2VydmUgdG8gcHJldmVudCBmdXJ0aGVyIHVubmVjZXNzYXJ5IGNoZWNrc1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUobm9kZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhdXNlIHRoZSB2aWRlbyB3aGVuIGl0IGdvZXMgb3V0IG9mIHZpZXdcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpXG4gICAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnBhdXNlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIEludGVyc2VjdGlvbiBPYnNlcnZlciB3aXRoIHRoZSBjYWxsYmFjayBhbmQgb3B0aW9uc1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVJbnRlcnNlY3Rpb24sIG9wdGlvbnMpXG5cbiAgLy8gT2JzZXJ2ZSB0aGUgdmlkZW8gcGxhY2Vob2xkZXJcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlKVxufSlcbiIsImltcG9ydCBvcGVyYXRvciBmcm9tICdvcGVyYXRvcidcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5cbi8qKlxuICogb3BlcmF0b3IgaXMgYSB0aW55IFwiUEpBWFwiIGxpYnJhcnksIHBsZWFzZSBoYXZlIGEgbG9vayBhdCB0aGUgZG9jcyBmb3JcbiAqIG1vcmUgaW5mb1xuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzdHJhdHRvbmJhaWxleS9vcGVyYXRvclxuICovXG5jb25zdCByb3V0ZXIgPSBvcGVyYXRvcignI01haW5Db250ZW50JywgW1xuICAvKipcbiAgICogY3JlYXRlcyBhIHBhZ2UgdHJhbnNpdGlvblxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc3RyYXR0b25iYWlsZXkvb3BlcmF0b3IjdHJhbnNpdGlvbi1hbmltYXRpb25cbiAgICovXG4gICgpID0+XG4gICAgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICAgIGNvbnN0IGVudGVyID0gKCkgPT4ge1xuICAgICAgICByZXMoKVxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG4gICAgICB9XG5cbiAgICAgIHRsLnRvKCdtYWluJywgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBvbkNvbXBsZXRlOiBlbnRlciB9KS50byhcbiAgICAgICAgJ21haW4nLFxuICAgICAgICB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICB9XG4gICAgICApXG4gICAgfSksXG4gIC8vIHtcbiAgLy8gICBwYXRoOiAnL2FjY291bnQvKicsXG4gIC8vICAgaWdub3JlOiB0cnVlLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgcGF0aDogJy9hY2NvdW50LycsXG4gIC8vICAgaWdub3JlOiB0cnVlLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgcGF0aDogJy9ibG9ncy8qJyxcbiAgLy8gICBpZ25vcmU6IHRydWUsXG4gIC8vIH0sXG4gIHtcbiAgICBwYXRoOiAnKicsXG4gICAgaWdub3JlOiB0cnVlLFxuICB9LFxuXSlcblxucm91dGVyLm9uKCdhZnRlcicsICh7IHBhdGhuYW1lIH0pID0+IHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgcGF0aG5hbWUpXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wYWdldGl0bGVdJykgIT0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBhZ2V0aXRsZV0nKS5kYXRhc2V0LnBhZ2V0aXRsZVxuICAgIGxldCBzaG9wVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zaG9wdGl0bGVdJykuZGF0YXNldC5zaG9wdGl0bGVcbiAgICBkb2N1bWVudC50aXRsZSA9IGAke3BhZ2VUaXRsZX1gXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSAnUHJvbWlzZWQgR3JvdW5kcydcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCdcbmltcG9ydCBhcHAgZnJvbSAnYmFzZS9zY3JpcHRzL2FwcC5qcydcbmltcG9ydCB7IHFzIH0gZnJvbSAnQHNlbGZhd2FyZS9tYXJ0aGEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRWYXJpYW50KHZhcmlhbnQsIHF1YW50aXR5LCBzZWxsaW5nX3BsYW4pIHtcbiAgY29uc3QgbnVtQXZhaWxhYmxlID1cbiAgICB2YXJpYW50LmludmVudG9yeV9wb2xpY3kgPT09ICdkZW55JyAmJlxuICAgIHZhcmlhbnQuaW52ZW50b3J5X21hbmFnZW1lbnQgPT09ICdzaG9waWZ5J1xuICAgICAgPyB2YXJpYW50LmludmVudG9yeV9xdWFudGl0eVxuICAgICAgOiBudWxsIC8vIG51bGwgbWVhbnMgdGhleSBjYW4gYWRkIGFzIG1hbnkgYXMgdGhleSB3YW50XG5cbiAgcmV0dXJuIGZldGNoQ2FydCgpLnRoZW4oKHsgaXRlbXMgfSkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSB2YXJpYW50LmlkKVswXSB8fCB7fVxuICAgIGNvbnN0IG51bVJlcXVlc3RlZCA9IChleGlzdGluZy5xdWFudGl0eSB8fCAwKSArIHF1YW50aXR5XG5cbiAgICBpZiAobnVtQXZhaWxhYmxlICE9PSBudWxsICYmIG51bVJlcXVlc3RlZCA+IG51bUF2YWlsYWJsZSkge1xuICAgICAgY29uc3QgZXJyID0gYFRoZXJlIGFyZSBvbmx5ICR7bnVtQXZhaWxhYmxlfSBvZiB0aGF0IHByb2R1Y3QgYXZhaWxhYmxlLCByZXF1ZXN0ZWQgJHtudW1SZXF1ZXN0ZWR9LmBcbiAgICAgIGFwcC5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhZGRJdGVtQnlJZCh2YXJpYW50LmlkLCBxdWFudGl0eSwgc2VsbGluZ19wbGFuKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFkZG9uKGlkLCBxdWFudGl0eSkge1xuLy8gICByZXR1cm4gZmV0Y2hDYXJ0KCkudGhlbigoeyBpdGVtcyB9KSA9PiB7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgaWYgKGl0ZW1zW2ldLnZhcmlhbnRfaWQgPT09IHBhcnNlSW50KGlkKSkge1xuLy8gICAgICAgICByZXR1cm4gY2hhbmdlQWRkb24oaSArIDEsIHF1YW50aXR5KSAvLyBzaG9waWZ5IGNhcnQgaXMgYSAxLWJhc2VkIGluZGV4XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9KVxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWRkb24oaWQsIHNlbGxpbmdfcGxhbiwgcXVhbnRpdHksIGxpbmspIHtcbiAgcmV0dXJuIGZldGNoQ2FydCgpLnRoZW4oKHsgaXRlbXMgfSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vY2hlY2sgaWYgaXRlbSBpcyByZWN1cnJpbmdcbiAgICAgIGlmIChzZWxsaW5nX3BsYW4gIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXRlbXNbaV0uc2VsbGluZ19wbGFuX2FsbG9jYXRpb24pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpdGVtc1tpXS52YXJpYW50X2lkID09PSBwYXJzZUludChpZCkgJiZcbiAgICAgICAgICAgIGl0ZW1zW2ldLnNlbGxpbmdfcGxhbl9hbGxvY2F0aW9uLnNlbGxpbmdfcGxhbi5pZCA9PT1cbiAgICAgICAgICAgICAgcGFyc2VJbnQoc2VsbGluZ19wbGFuKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZUFkZG9uKGkgKyAxLCBxdWFudGl0eSwgbGluaykgLy8gc2hvcGlmeSBjYXJ0IGlzIGEgMS1iYXNlZCBpbmRleFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGl0ZW1zW2ldLnZhcmlhbnRfaWQgPT09IHBhcnNlSW50KGlkKSkge1xuICAgICAgICAgIHJldHVybiBjaGFuZ2VBZGRvbihpICsgMSwgcXVhbnRpdHksIGxpbmspIC8vIHNob3BpZnkgY2FydCBpcyBhIDEtYmFzZWQgaW5kZXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFkZG9uKGlkKSB7XG4vLyAgIHJldHVybiB1cGRhdGVBZGRvbihpZCwgMClcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFkZG9uKGlkLCBzZWxsaW5nX3BsYW4sIGxpbmspIHtcbiAgcmV0dXJuIHVwZGF0ZUFkZG9uKGlkLCBzZWxsaW5nX3BsYW4sIDAsIGxpbmspXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUFkZG9uKGxpbmUsIHF1YW50aXR5LCBsaW5rKSB7XG4gIGFwcC5lbWl0KCdjYXJ0OnVwZGF0aW5nJylcblxuICByZXR1cm4gZmV0Y2goJy9jYXJ0L2NoYW5nZS5qcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxpbmUsIHF1YW50aXR5IH0pLFxuICB9KVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGNhcnQpID0+IHtcbiAgICAgIGFwcC5oeWRyYXRlKHsgY2FydDogY2FydCB9KVxuICAgICAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRlZCcsIHsgY2FydDogY2FydCB9KVxuXG4gICAgICBpZiAobGluaykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXJ0XG4gICAgfSlcbn1cblxuLyoqXG4gKiBXYXJuaW5nOiB0aGlzIGRvZXMgbm90IGNoZWNrIGF2YWlsYWJsZSBwcm9kdWN0cyBmaXJzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbUJ5SWQoaWQsIHF1YW50aXR5LCBzZWxsaW5nX3BsYW4pIHtcbiAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRpbmcnKVxuXG4gIHJldHVybiBmZXRjaCgnL2NhcnQvYWRkLmpzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQsIHF1YW50aXR5LCBzZWxsaW5nX3BsYW4gfSksXG4gIH0pXG4gICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgIC50aGVuKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2hDYXJ0KCkudGhlbigoY2FydCkgPT4ge1xuICAgICAgICBsZXQgcGl4ID0gcXMoJy5jb2xsZWN0aW9uLXBpeCcpXG4gICAgICAgIGFwcC5oeWRyYXRlKHsgY2FydDogY2FydCB9KVxuICAgICAgICBhcHAuZW1pdCgnY2FydDp1cGRhdGVkJylcbiAgICAgICAgaWYgKHBpeCA9PSB1bmRlZmluZWQgfHwgYXBwLmdldFN0YXRlKCkuY2FydC5pdGVtX2NvdW50ID49IDYpIHtcbiAgICAgICAgICBhcHAuZW1pdCgnY2FydDp0b2dnbGUnLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNhcnRPcGVuOiAhc3RhdGUuY2FydE9wZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyBhcHAuZW1pdCgndXBkYXRlZCcsIHsgaXRlbSwgY2FydCB9KVxuICAgICAgICByZXR1cm4geyBpdGVtLCBjYXJ0IH1cbiAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ2FydCgpIHtcbiAgcmV0dXJuIGZldGNoKCcvY2FydC5qcycsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbn1cbiIsIi8qKlxuICogQ3VycmVuY3kgSGVscGVyc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEEgY29sbGVjdGlvbiBvZiB1c2VmdWwgZnVuY3Rpb25zIHRoYXQgaGVscCB3aXRoIGN1cnJlbmN5IGZvcm1hdHRpbmdcbiAqXG4gKiBDdXJyZW50IGNvbnRlbnRzXG4gKiAtIGZvcm1hdE1vbmV5IC0gVGFrZXMgYW4gYW1vdW50IGluIGNlbnRzIGFuZCByZXR1cm5zIGl0IGFzIGEgZm9ybWF0dGVkIGRvbGxhciB2YWx1ZS5cbiAqXG4gKi9cblxuLyoqXG4gKiBGb3JtYXQgbW9uZXkgdmFsdWVzIGJhc2VkIG9uIHlvdXIgc2hvcCBjdXJyZW5jeSBzZXR0aW5nc1xuICogQHBhcmFtICB7TnVtYmVyfHN0cmluZ30gY2VudHMgLSB2YWx1ZSBpbiBjZW50cyBvciBkb2xsYXIgYW1vdW50IGUuZy4gMzAwIGNlbnRzXG4gKiBvciAzLjAwIGRvbGxhcnNcbiAqIEBwYXJhbSAge1N0cmluZ30gZm9ybWF0IC0gc2hvcCBtb25leV9mb3JtYXQgc2V0dGluZ1xuICogQHJldHVybiB7U3RyaW5nfSB2YWx1ZSAtIGZvcm1hdHRlZCB2YWx1ZVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb25leShjZW50cywgZm9ybWF0ID0gJ3t7YW1vdW50fX0nKSB7XG4gIGlmICh0eXBlb2YgY2VudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgY2VudHMgPSBjZW50cy5yZXBsYWNlKCcuJywgJycpXG4gIH1cblxuICBsZXQgdmFsdWUgPSAnJ1xuICBjb25zdCBwbGFjZWhvbGRlclJlZ2V4ID0gL1xce1xce1xccyooXFx3KylcXHMqXFx9XFx9L1xuXG4gIGZ1bmN0aW9uIGZvcm1hdFdpdGhEZWxpbWl0ZXJzKG51bWJlciwgcHJlY2lzaW9uLCB0aG91c2FuZHMsIGRlY2ltYWwpIHtcbiAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgMlxuICAgIHRob3VzYW5kcyA9IHRob3VzYW5kcyB8fCAnLCdcbiAgICBkZWNpbWFsID0gZGVjaW1hbCB8fCAnLidcblxuICAgIGlmIChpc05hTihudW1iZXIpIHx8IG51bWJlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIG51bWJlciA9IChudW1iZXIgLyAxMDAuMCkudG9GaXhlZChwcmVjaXNpb24pXG5cbiAgICBjb25zdCBwYXJ0cyA9IG51bWJlci5zcGxpdCgnLicpXG4gICAgY29uc3QgZG9sbGFyc0Ftb3VudCA9IHBhcnRzWzBdLnJlcGxhY2UoXG4gICAgICAvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLFxuICAgICAgJyQxJyArIHRob3VzYW5kc1xuICAgIClcbiAgICBjb25zdCBjZW50c0Ftb3VudCA9IHBhcnRzWzFdID8gZGVjaW1hbCArIHBhcnRzWzFdIDogJydcblxuICAgIGlmIChjZW50c0Ftb3VudCA+IDApIHtcbiAgICAgIHJldHVybiBkb2xsYXJzQW1vdW50ICsgY2VudHNBbW91bnRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRvbGxhcnNBbW91bnRcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGZvcm1hdC5tYXRjaChwbGFjZWhvbGRlclJlZ2V4KVsxXSkge1xuICAgIGNhc2UgJ2Ftb3VudCc6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhbW91bnRfbm9fZGVjaW1hbHMnOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYW1vdW50X3dpdGhfc3BhY2Vfc2VwYXJhdG9yJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDIsICcgJywgJy4nKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhbW91bnRfbm9fZGVjaW1hbHNfd2l0aF9jb21tYV9zZXBhcmF0b3InOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMCwgJywnLCAnLicpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFsc193aXRoX3NwYWNlX3NlcGFyYXRvcic6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwLCAnICcpXG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKHBsYWNlaG9sZGVyUmVnZXgsIHZhbHVlKVxufVxuIiwiLyoqXG4gKiBJbWFnZSBIZWxwZXIgRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyB0aGF0IGhlbHAgd2l0aCBiYXNpYyBpbWFnZSBvcGVyYXRpb25zLlxuICpcbiAqL1xuXG4vKipcbiAqIFByZWxvYWRzIGFuIGltYWdlIGluIG1lbW9yeSBhbmQgdXNlcyB0aGUgYnJvd3NlcnMgY2FjaGUgdG8gc3RvcmUgaXQgdW50aWwgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGltYWdlcyAtIEEgbGlzdCBvZiBpbWFnZSB1cmxzXG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIEEgc2hvcGlmeSBpbWFnZSBzaXplIGF0dHJpYnV0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZChpbWFnZXMsIHNpemUpIHtcbiAgaWYgKHR5cGVvZiBpbWFnZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgaW1hZ2VzID0gW2ltYWdlc11cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGltYWdlID0gaW1hZ2VzW2ldXG4gICAgbG9hZEltYWdlKGdldFNpemVkSW1hZ2VVcmwoaW1hZ2UsIHNpemUpKVxuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYW5kIGNhY2hlcyBhbiBpbWFnZSBpbiB0aGUgYnJvd3NlcnMgY2FjaGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIEFuIGltYWdlIHVybFxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEltYWdlKHBhdGgpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgbmV3IEltYWdlKCkuc3JjID0gcGF0aFxuICAvKiBlc2xpbnQtZW5hYmxlICovXG59XG5cbi8qKlxuICogRmluZCB0aGUgU2hvcGlmeSBpbWFnZSBhdHRyaWJ1dGUgc2l6ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmNcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VTaXplKHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICB2YXIgbWF0Y2ggPSBzcmMubWF0Y2goXG4gICAgLy4rXygoPzpwaWNvfGljb258dGh1bWJ8c21hbGx8Y29tcGFjdHxtZWRpdW18bGFyZ2V8Z3JhbmRlKXxcXGR7MSw0fXhcXGR7MCw0fXx4XFxkezEsNH0pW19cXC5AXS9cbiAgKVxuICAvKiBlc2xpbmctZW5hYmxlICovXG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoWzFdXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYSBTaG9waWZ5IHNpemUgYXR0cmlidXRlIHRvIGEgVVJMXG4gKlxuICogQHBhcmFtIHNyY1xuICogQHBhcmFtIHNpemVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZWRJbWFnZVVybChzcmMsIHNpemUpIHtcbiAgaWYgKHNpemUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gc3JjXG4gIH1cblxuICBpZiAoc2l6ZSA9PT0gJ21hc3RlcicpIHtcbiAgICByZXR1cm4gcmVtb3ZlUHJvdG9jb2woc3JjKVxuICB9XG5cbiAgdmFyIG1hdGNoID0gc3JjLm1hdGNoKC9cXC4oanBnfGpwZWd8Z2lmfHBuZ3xibXB8Yml0bWFwfHRpZmZ8dGlmKShcXD92PVxcZCspPyQvaSlcblxuICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgcHJlZml4ID0gc3JjLnNwbGl0KG1hdGNoWzBdKVxuICAgIHZhciBzdWZmaXggPSBtYXRjaFswXVxuXG4gICAgcmV0dXJuIHJlbW92ZVByb3RvY29sKHByZWZpeFswXSArICdfJyArIHNpemUgKyBzdWZmaXgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvdG9jb2wocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9odHRwKHMpPzovLCAnJylcbn1cbiIsImltcG9ydCB7IHFzLCByZW1vdmUsIGFkZCB9IGZyb20gJ0BzZWxmYXdhcmUvbWFydGhhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlU2V0dXAoKSB7XG4gIGxldCBhbm5vdW5jZUJhciA9IHFzKCcuanMtYW5ub3VuY2VCYXInKVxuXG4gIGlmIChhbm5vdW5jZUJhcikge1xuICAgIGFkZChhbm5vdW5jZUJhciwgJ2hpZGRlbicpXG4gIH1cblxuICBpZiAocXMoYC5qcy1hbm5vdW5jZUJhcltkYXRhLXBhZ2U9XCIke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1cIl1gKSkge1xuICAgIHJlbW92ZShcbiAgICAgIHFzKGAuanMtYW5ub3VuY2VCYXJbZGF0YS1wYWdlPVwiJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9XCJdYCksXG4gICAgICAnaGlkZGVuJ1xuICAgIClcbiAgfSBlbHNlIGlmIChxcyhgLmpzLWFubm91bmNlQmFyOm5vdChbZGF0YS1wYWdlXSlgKSkge1xuICAgIHJlbW92ZShxcyhgLmpzLWFubm91bmNlQmFyOm5vdChbZGF0YS1wYWdlXSlgKSwgJ2hpZGRlbicpXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJhc2VcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dvcmtmbG93XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dvcmtmbG93XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYmFzZS9zY3JpcHRzL2Jhc2UuanNcIik7IH0pXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Jhc2Uvc3R5bGVzL2Jhc2Uuc2Nzc1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicGljb2FwcCIsImFjY291bnRMb2dpbiIsImFjY291bnRBZGRyZXNzZXMiLCJsYXp5IiwiaGVhZGVyIiwiY2FydERyYXdlciIsImNhcnREcmF3ZXJJdGVtIiwicHJvZHVjdENhcm91c2VsIiwicHJvZHVjdCIsInByb2R1Y3RDb3VudGVyIiwicHJvZHVjdFZhcmlhbnQiLCJwcm9kdWN0T3B0aW9ucyIsImNvbGxlY3Rpb24iLCJmYXFzIiwiY2hlY2tvdXQiLCJuZXdzbGV0dGVyIiwiY2Fyb3VzZWwiLCJmb290ZXIiLCJjb250YWN0IiwibWFycXVlZSIsImJsb2dGaWx0ZXIiLCJ2aWRlbyIsInNpZ251cCIsImJhY2tpbnN0b2NrIiwicHJvZHVjdFN1YnNjcmlwdGlvbnMiLCJhYm91dCIsImhlcm8iLCJiYW5uZXIiLCJzb2NpYWwiLCJjYXJkcyIsInN0YXRlIiwiY2FydE9wZW4iLCJjb21wb25lbnRzIiwiYmluZCIsInVwZGF0ZSIsImFwcCIsInJvdXRlciIsImZldGNoQ2FydCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicXMiLCJyZW1vdmUiLCJwYWdlU2V0dXAiLCJ2aCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZ2lzdGVyUGx1Z2luIiwib24iLCJ0aXRsZSIsInBhdGhuYW1lIiwidW5tb3VudCIsIm1vdW50IiwiZW1pdCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiY2FydCIsImh5ZHJhdGUiLCJjb21wb25lbnQiLCJjaG9venkiLCJhZGQiLCJxc2EiLCJ0b2dnbGUiLCJTY3JvbGxUb1BsdWdpbiIsIm5vZGUiLCJjdHgiLCJhbmNob3JzIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpbmRleCIsImFuY2hvciIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwiYXBwZW5kQ2hpbGQiLCJ0byIsImR1cmF0aW9uIiwic2Nyb2xsVG8iLCJ5Iiwib2Zmc2V0WSIsImVhc2UiLCJzZXRBY3RpdmUiLCJ0YXJnZXQiLCJ1dGlscyIsInRvQXJyYXkiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJvbkVudGVyIiwic2VsZiIsIm9uTGVhdmVCYWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImltZyIsIm9ubG9hZCIsInJlZnJlc2giLCJzZXRUaW1lb3V0IiwidHJpZ2dlcnMiLCJnZXRBbGwiLCJraWxsIiwiYWRkV3JhcCIsInRvZ2dsZUFkZCIsInRvZ2dsZUVkaXQiLCJlZGl0V3JhcCIsInVuZGVmaW5lZCIsImxvZ2luIiwicXVlcnlTZWxlY3RvciIsInJlY292ZXIiLCJyZWNvdmVyTGluayIsImNhbmNlbFJlY292ZXJMaW5rIiwicmVjb3ZlcklzVGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwibWF0Y2giLCJzdWNjZXNzTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXkiLCJlbWFpbCIsImJpcyIsImJpc2NvbnRlbnQiLCJzdWNjZXNzIiwiYmlzd3JhcCIsIm9wZW5iaXMiLCJjbG9zZWJpcyIsImZvcm1iaXMiLCJjdXJyZW50VmFyaWFudCIsInZhcmlhbnQiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwiYSIsInZhbHVlIiwicGxhdGZvcm0iLCJzdG9yZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImltYWdlcyIsImFsbEltYWdlcyIsIkpTT04iLCJwYXJzZSIsImFsbEJsb2NrcyIsInRoZW1lSW1hZ2VzIiwiY3VycmVudFRoZW1lIiwiYm9keSIsInRoZW1lIiwicHVzaCIsInNyYyIsImltYWdlIiwiZmlsdGVyVG9nZ2xlIiwiY2xlYXJGaWx0ZXIiLCJocmVmIiwiaW5jbHVkZXMiLCJ0YWciLCJzcGxpdCIsInRhcmdldFRhZyIsImVsIiwiRW1ibGFDYXJvdXNlbCIsIm5leHQiLCJwcmV2IiwiY291bnRlciIsImFjdGl2ZUluZGV4IiwiZW1ibGEiLCJsb29wIiwic2tpcFNuYXBzIiwidHJpbVNuYXBzIiwiY29udGFpblNjcm9sbCIsImFsaWduIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJzZWxlY3RlZFNjcm9sbFNuYXAiLCJzcGVlZCIsImdldFNpemVkSW1hZ2VVcmwiLCJpbWFnZVNpemUiLCJmb3JtYXRNb25leSIsIlBvd2VyNCIsInRsIiwidGltZWxpbmUiLCJYIiwiY3JlYXRlSXRlbSIsImlkIiwidmFyaWFudF9pZCIsInByb2R1Y3RfdGl0bGUiLCJwcmljZSIsImxpbmVfcHJpY2UiLCJvcmlnaW5hbF9wcmljZSIsIm9yaWdpbmFsX2xpbmVfcHJpY2UiLCJ2YXJpYW50X3RpdGxlIiwicXVhbnRpdHkiLCJpdGVtIiwic2VsbGluZ19wbGFuX2FsbG9jYXRpb24iLCJzZWxsaW5nX3BsYW4iLCJyZW5kZXJJdGVtcyIsIml0ZW1zIiwibGVuZ3RoIiwicmVkdWNlIiwibWFya3VwIiwib3ZlcmxheSIsImNsb3NlQnV0dG9uIiwic3VidG90YWwiLCJpdGVtc1Jvb3QiLCJsb2FkaW5nIiwicmVuZGVyIiwidG90YWxfcHJpY2UiLCJvcGVuIiwieCIsImVhc2VPdXQiLCJvbkNvbXBsZXRlIiwiY2xvc2UiLCJnZXRTdGF0ZSIsImNoZWNrQ2FydCIsInJlbW92ZUFkZG9uIiwidXBkYXRlQWRkb24iLCJyZW1vdmVycyIsImRlY3JlYXNlIiwiaW5jcmVhc2UiLCJjdXJyZW50UXR5IiwiZ2V0QXR0cmlidXRlIiwicmVtIiwibGluayIsInBhcnNlSW50Iiwic3VibWl0Iiwib2ZmRW1haWwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJmYXEiLCJvcGVuRHJhd2VyIiwidGhlbWVJbWFnZSIsImZpbmQiLCJFeHBvIiwiY2FydFRvZ2dsZSIsIm1lbnVPcGVuIiwiYW5ub3VuY2VCYXIiLCJhbm5vdW5jZUNsb3NlIiwibmF2IiwiaGVhZGVyQ2xvc2UiLCJjbG9zZVpvbmUiLCJjYXJ0Q291bnQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsImZyb21UbyIsImJ0biIsImNvdW50IiwiaXRlbV9jb3VudCIsImluZGV4T2YiLCJwcm9kdWN0cyIsImljb24iLCJhbGxQcm9kdWN0cyIsInVwZGF0ZVRoZW1lIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwibHFpcCIsImRlY29kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9mZiIsInNyY3NldCIsImhhcyIsImN1cnJlbnRYIiwidGFyZ2V0WCIsInNldEludGVydmFsIiwiYW5pbWF0aW9uTG9vcCIsInNjcm9sbFdpZHRoIiwidHJhbnNmb3JtIiwic3Vic2NyaWJlIiwiZm9ybUNvbnRlbnQiLCJlcnJvciIsImxpc3RJZCIsImFkZFZhcmlhbnQiLCJzdWJEZXRhaWxUb2dnbGUiLCJzdWJEZXRhaWwiLCJqc29uIiwiYWRkQnRuIiwiYWRkVGV4dCIsInByZW9yZGVyIiwic2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudCIsInZhcmlhbnRzIiwiZmlsdGVyIiwidiIsImFkZG9uSnNvbiIsImFkZG9uU2VsZWN0ZWRPckZpcnN0QXZhaWxhYmxlVmFyaWFudCIsImFkZG9uUHJvZHVjdCIsImFkZG9uVmFyaWFudCIsInNlbGVjdGVkVmFyaWFudCIsInByb2R1Y3RJbWFnZXMiLCJ2YXJpYW50VGl0bGUiLCJidG5zIiwidGh1bWIiLCJpbml0RW1ibGEiLCJ2YXJpYW50SW1hZ2VzIiwibWFwIiwiYWx0IiwidG9Mb3dlckNhc2UiLCJqb2luIiwiZGVzdHJveSIsIm1pbiIsIm1heCIsInNldCIsImkiLCJNYXRoIiwib3B0aW9uU3ViIiwib3B0aW9uT25lIiwib3B0aW9uV3JhcCIsImFkZFByaWNlIiwiYWN0aXZlRnJlcXVlbmN5IiwiY29udGVudCIsImNvbnRlbnRXcmFwIiwidG9nZ2xlRnJlcXVlbmN5IiwiYXJyb3ciLCJmcmVxdWVuY3lPcHRpb24iLCJzdWJPcHRpb24iLCJmcmVxdWVuY3lXcmFwIiwidG9nZ2xlT3B0aW9ucyIsImNvbnRlbnRIZWlnaHQiLCJtYXhIZWlnaHQiLCJvcHQiLCJjdXJPcHRpb24iLCJvcHRpb24iLCJzd2F0Y2giLCJvcHRpb25Hcm91cHMiLCJzZWxlY3RlZFN3YXRjaCIsIm9wdGlvbnMiLCJ1cGRhdGVWYXJpYW50IiwibmV3VmFyaWFudCIsInNldEF0dHJpYnV0ZSIsImludmVudG9yeSIsInZhcmlhbnRTZWxlY3QiLCJjdXJUaXRsZSIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiaGFuZGxlSW50ZXJzZWN0aW9uIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImF1dG9wbGF5IiwidW5vYnNlcnZlIiwicGF1c2UiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJvcGVyYXRvciIsInJlcyIsImVudGVyIiwic2Nyb2xsVG9wIiwib3BhY2l0eSIsInBhdGgiLCJpZ25vcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicGFnZVRpdGxlIiwicGFnZXRpdGxlIiwic2hvcFRpdGxlIiwic2hvcHRpdGxlIiwiZmV0Y2giLCJudW1BdmFpbGFibGUiLCJpbnZlbnRvcnlfcG9saWN5IiwiaW52ZW50b3J5X21hbmFnZW1lbnQiLCJpbnZlbnRvcnlfcXVhbnRpdHkiLCJleGlzdGluZyIsIm51bVJlcXVlc3RlZCIsImVyciIsIkVycm9yIiwiYWRkSXRlbUJ5SWQiLCJjaGFuZ2VBZGRvbiIsImxpbmUiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJzdHJpbmdpZnkiLCJyIiwicGl4IiwiY2VudHMiLCJmb3JtYXQiLCJyZXBsYWNlIiwicGxhY2Vob2xkZXJSZWdleCIsImZvcm1hdFdpdGhEZWxpbWl0ZXJzIiwibnVtYmVyIiwicHJlY2lzaW9uIiwidGhvdXNhbmRzIiwiZGVjaW1hbCIsImlzTmFOIiwidG9GaXhlZCIsInBhcnRzIiwiZG9sbGFyc0Ftb3VudCIsImNlbnRzQW1vdW50IiwicHJlbG9hZCIsInNpemUiLCJsb2FkSW1hZ2UiLCJJbWFnZSIsInJlbW92ZVByb3RvY29sIiwicHJlZml4Iiwic3VmZml4Il0sInNvdXJjZVJvb3QiOiIifQ==