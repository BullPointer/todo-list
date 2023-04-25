/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/content.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css-folder/content.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --dark-blue: rgb(106, 106, 179);\n} \n\n.content {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: center;\n    justify-content: center;\n    background: var(--primary-dark);\n}\n.content .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n.content .container .todo {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    gap: 5px;\n    width: 80%;\n    margin: 7px 0;\n    border: 2px solid rgb(245, 120, 205);\n    border-left: 5px solid rgb(245, 120, 205);\n    border-right: 2px solid rgb(245, 120, 205);\n    height: 50px;\n    background: white;\n}\n.content .container .todo:first-child {\n    margin-top: 50px;\n}\n.content .container .todo .item {\n    display: flex;\n    align-items: center;\n    padding: 0 0 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 100%;\n}\n.content .container .todo .item:first-child {\n    border-left: none;\n}\n.content .container .todo input[type=checkbox] {\n    margin: 20px;\n    width: 50px;\n    height: 50px;\n    padding: 40px 20px;\n}\n\n.content .container .todo .detail, .edit {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 120px;\n}\n.content .container .todo .date {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 70px;\n    height: 25px;\n    padding: 3px 9px;\n    font-size: small;\n    font-weight: bold;\n    border: none;\n    color: rgb(113, 105, 214);\n}\n.content .container .todo .detail-btn, .date, .edit-btn {\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n    border: 2px solid rgb(106, 106, 179);\n    color: rgb(106, 106, 179);\n    padding: 3px 10px;\n    background: transparent;\n}\n.content .container .todo .delete {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 120px;\n}\n.content .container .todo .delete-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    border: 2px solid rgb(196, 132, 132);\n    color: rgb(196, 132, 132);\n    background: transparent;\n}\n.content .container .todo .delete-btn svg {\n    width: 70%;\n    height: auto;\n    fill: rgb(196, 132, 132);\n}\n.content .container .todo .edit-btn svg {\n    width: 80%;\n    height: auto;\n    fill: var(--dark-blue);\n}\n.content .container .todo .delete-btn:hover, .detail-btn:hover, .edit-btn {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 700px){\n    .content .container .todo:first-child {\n        margin-top: 50px;\n    }\n}\n\n@media only screen and (max-width: 580px){\n    .content .container .todo {\n        width: 70%;\n        height: 35px;\n    }\n    .content .container .todo .edit-btn {\n        width: 25px;\n        height: 25px;\n        padding: 0;\n    }\n    .content .container .todo .detail-btn {\n        padding: 0 3px;\n    }\n\n} \n@media only screen and (max-width: 500px){\n    .content .container .todo {\n        width: 60%;\n        height: 35px;\n    }\n    .content .container .todo:first-child {\n        margin-top: 50px;\n    }\n} \n\n@media only screen and (max-width: 414px){\n    .content .container .todo {\n        font-size: x-small;\n        width: 50%;\n        height: 35px;\n    }\n    .content .container .todo input[type=checkbox] {\n        margin: 5px;\n        width: 50px;\n        height: 50px;\n    }\n    .content .container .todo .date {\n        font-size: xx-small;\n    }\n    .content .container .todo .item {\n        font-size: small;\n    }\n    .content .container .todo .edit-btn {\n        width: 17px;\n        height: 17px;\n        padding: 0;\n    }\n} \n@media only screen and (max-width: 360px){\n    .content .container .todo {\n        width: 45%;\n        height: 35px;\n\n    }\n    .content .container .todo .item {\n        height: 100%;\n        width: 70%;\n        font-size: x-small;\n    }\n    .content .container .todo .date {\n        width: 40px;\n        font-size: xx-small;\n    }\n} ", "",{"version":3,"sources":["webpack://./src/css-folder/content.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,gCAAgC;IAChC,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,QAAQ;IACR,UAAU;IACV,aAAa;IACb,oCAAoC;IACpC,yCAAyC;IACzC,0CAA0C;IAC1C,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,wCAAwC;IACxC,YAAY;IACZ,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,wCAAwC;IACxC,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,oCAAoC;IACpC,yBAAyB;IACzB,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,wCAAwC;IACxC,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,oCAAoC;IACpC,yBAAyB;IACzB,uBAAuB;AAC3B;AACA;IACI,UAAU;IACV,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,UAAU;IACV,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,WAAW;QACX,YAAY;QACZ,UAAU;IACd;IACA;QACI,cAAc;IAClB;;AAEJ;AACA;IACI;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,kBAAkB;QAClB,UAAU;QACV,YAAY;IAChB;IACA;QACI,WAAW;QACX,WAAW;QACX,YAAY;IAChB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,WAAW;QACX,YAAY;QACZ,UAAU;IACd;AACJ;AACA;IACI;QACI,UAAU;QACV,YAAY;;IAEhB;IACA;QACI,YAAY;QACZ,UAAU;QACV,kBAAkB;IACtB;IACA;QACI,WAAW;QACX,mBAAmB;IACvB;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --dark-blue: rgb(106, 106, 179);\n} \n\n.content {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: center;\n    justify-content: center;\n    background: var(--primary-dark);\n}\n.content .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n.content .container .todo {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    gap: 5px;\n    width: 80%;\n    margin: 7px 0;\n    border: 2px solid rgb(245, 120, 205);\n    border-left: 5px solid rgb(245, 120, 205);\n    border-right: 2px solid rgb(245, 120, 205);\n    height: 50px;\n    background: white;\n}\n.content .container .todo:first-child {\n    margin-top: 50px;\n}\n.content .container .todo .item {\n    display: flex;\n    align-items: center;\n    padding: 0 0 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 100%;\n}\n.content .container .todo .item:first-child {\n    border-left: none;\n}\n.content .container .todo input[type=checkbox] {\n    margin: 20px;\n    width: 50px;\n    height: 50px;\n    padding: 40px 20px;\n}\n\n.content .container .todo .detail, .edit {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 120px;\n}\n.content .container .todo .date {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 70px;\n    height: 25px;\n    padding: 3px 9px;\n    font-size: small;\n    font-weight: bold;\n    border: none;\n    color: rgb(113, 105, 214);\n}\n.content .container .todo .detail-btn, .date, .edit-btn {\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n    border: 2px solid rgb(106, 106, 179);\n    color: rgb(106, 106, 179);\n    padding: 3px 10px;\n    background: transparent;\n}\n.content .container .todo .delete {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 120px;\n}\n.content .container .todo .delete-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    border: 2px solid rgb(196, 132, 132);\n    color: rgb(196, 132, 132);\n    background: transparent;\n}\n.content .container .todo .delete-btn svg {\n    width: 70%;\n    height: auto;\n    fill: rgb(196, 132, 132);\n}\n.content .container .todo .edit-btn svg {\n    width: 80%;\n    height: auto;\n    fill: var(--dark-blue);\n}\n.content .container .todo .delete-btn:hover, .detail-btn:hover, .edit-btn {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 700px){\n    .content .container .todo:first-child {\n        margin-top: 50px;\n    }\n}\n\n@media only screen and (max-width: 580px){\n    .content .container .todo {\n        width: 70%;\n        height: 35px;\n    }\n    .content .container .todo .edit-btn {\n        width: 25px;\n        height: 25px;\n        padding: 0;\n    }\n    .content .container .todo .detail-btn {\n        padding: 0 3px;\n    }\n\n} \n@media only screen and (max-width: 500px){\n    .content .container .todo {\n        width: 60%;\n        height: 35px;\n    }\n    .content .container .todo:first-child {\n        margin-top: 50px;\n    }\n} \n\n@media only screen and (max-width: 414px){\n    .content .container .todo {\n        font-size: x-small;\n        width: 50%;\n        height: 35px;\n    }\n    .content .container .todo input[type=checkbox] {\n        margin: 5px;\n        width: 50px;\n        height: 50px;\n    }\n    .content .container .todo .date {\n        font-size: xx-small;\n    }\n    .content .container .todo .item {\n        font-size: small;\n    }\n    .content .container .todo .edit-btn {\n        width: 17px;\n        height: 17px;\n        padding: 0;\n    }\n} \n@media only screen and (max-width: 360px){\n    .content .container .todo {\n        width: 45%;\n        height: 35px;\n\n    }\n    .content .container .todo .item {\n        height: 100%;\n        width: 70%;\n        font-size: x-small;\n    }\n    .content .container .todo .date {\n        width: 40px;\n        font-size: xx-small;\n    }\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/details.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css-folder/details.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.check-details {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    background: rgb(0,0,0,0.8);\n    width: 100%;\n    height: 100vh;\n}\n.check-details .details-info {\n    width: 50%;\n    height: 300px;\n    background: white;\n}\n.check-details .details-info .detail-title{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 30px;\n    font-size: 35px;\n}\n.check-details .details-info .detail-title .close:last-child{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 25px;\n    color: rgb(0,0,0,0.7);\n}\n.check-details .details-info .detail-title .close:hover{\n    cursor: pointer;\n}\n.check-details .details-info .detail-box{\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-size: 15px;\n    color: rgb(177, 141, 141);\n    padding: 12px 30px;\n    background: #000;\n}\n.check-details .details-info .detail-box .key:first-child{\n    font-size: 20px;\n    color: white;\n}\n.check-details .details-info .detail-box .key, .value{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n@media only screen and (max-width: 700px){\n    .check-details .details-info {\n        width: 80%;\n    }\n    .check-details .details-info .detail-title{\n        font-size: 20px;\n    }\n    .check-details .details-info .detail-box{\n        font-size: 14px;\n    }\n    .check-details .details-info .detail-box .key:first-child{\n        font-size: 15px;\n    }    \n}", "",{"version":3,"sources":["webpack://./src/css-folder/details.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,0BAA0B;IAC1B,WAAW;IACX,aAAa;AACjB;AACA;IACI,UAAU;IACV,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,sHAAsH;IACtH,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;AACJ","sourcesContent":["\n.check-details {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    background: rgb(0,0,0,0.8);\n    width: 100%;\n    height: 100vh;\n}\n.check-details .details-info {\n    width: 50%;\n    height: 300px;\n    background: white;\n}\n.check-details .details-info .detail-title{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 30px;\n    font-size: 35px;\n}\n.check-details .details-info .detail-title .close:last-child{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 25px;\n    color: rgb(0,0,0,0.7);\n}\n.check-details .details-info .detail-title .close:hover{\n    cursor: pointer;\n}\n.check-details .details-info .detail-box{\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-size: 15px;\n    color: rgb(177, 141, 141);\n    padding: 12px 30px;\n    background: #000;\n}\n.check-details .details-info .detail-box .key:first-child{\n    font-size: 20px;\n    color: white;\n}\n.check-details .details-info .detail-box .key, .value{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n@media only screen and (max-width: 700px){\n    .check-details .details-info {\n        width: 80%;\n    }\n    .check-details .details-info .detail-title{\n        font-size: 20px;\n    }\n    .check-details .details-info .detail-box{\n        font-size: 14px;\n    }\n    .check-details .details-info .detail-box .key:first-child{\n        font-size: 15px;\n    }    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/sidebar.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css-folder/sidebar.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --light-dark: rgb(0,0,0,0.8);\n} \n\n.sidebar {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    align-items: center;\n    color: white;\n    /* background: white; */\n    background: rgb(122, 122, 238);\n}\n\n.home {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    opacity: 0.9;\n    padding: 10px 0;\n    font-size: 20px;\n    background: var(--light-dark);\n}\n.home:nth-child(1), .project:nth-child(2) {\n    opacity: 0.7;\n    border-bottom: 2px solid white;\n}\n.project {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    font-size: 20px;\n    opacity: 0.9;\n    padding: 10px 0;\n    background: var(--light-dark);\n}\n.home:hover, .project:hover, .cate:hover {\n    cursor: pointer;\n    background: #bdb7b7;\n}\n.cate {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    float: right;\n    width: 100%;\n    height: 8px;\n    font-size: 18px;\n    opacity: 0.9;\n    padding: 10px 0 10px 0;\n    background: var(--light-dark);\n}\n@media only screen and (max-width: 700px){\n    .sidebar {\n        background: rgb(122, 122, 238);\n        bottom: 0;\n        display: none;\n        height: auto;\n        margin-top: 0;\n    }\n    .home, .project {\n        font-size: 18px;\n    }\n    .cate {\n        font-size: 14px;\n        padding: 18px;\n        margin-bottom: 0;\n        bottom: 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css-folder/sidebar.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,6EAA6E;IAC7E,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,eAAe;IACf,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,eAAe;IACf,YAAY;IACZ,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI;QACI,8BAA8B;QAC9B,SAAS;QACT,aAAa;QACb,YAAY;QACZ,aAAa;IACjB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,aAAa;QACb,gBAAgB;QAChB,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --light-dark: rgb(0,0,0,0.8);\n} \n\n.sidebar {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    align-items: center;\n    color: white;\n    /* background: white; */\n    background: rgb(122, 122, 238);\n}\n\n.home {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    opacity: 0.9;\n    padding: 10px 0;\n    font-size: 20px;\n    background: var(--light-dark);\n}\n.home:nth-child(1), .project:nth-child(2) {\n    opacity: 0.7;\n    border-bottom: 2px solid white;\n}\n.project {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    font-size: 20px;\n    opacity: 0.9;\n    padding: 10px 0;\n    background: var(--light-dark);\n}\n.home:hover, .project:hover, .cate:hover {\n    cursor: pointer;\n    background: #bdb7b7;\n}\n.cate {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    float: right;\n    width: 100%;\n    height: 8px;\n    font-size: 18px;\n    opacity: 0.9;\n    padding: 10px 0 10px 0;\n    background: var(--light-dark);\n}\n@media only screen and (max-width: 700px){\n    .sidebar {\n        background: rgb(122, 122, 238);\n        bottom: 0;\n        display: none;\n        height: auto;\n        margin-top: 0;\n    }\n    .home, .project {\n        font-size: 18px;\n    }\n    .cate {\n        font-size: 14px;\n        padding: 18px;\n        margin-bottom: 0;\n        bottom: 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/topbar.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css-folder/topbar.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nnav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\nnav svg {\n    padding: 0;\n    width: 25px;\n    height: 25px;\n    margin-right: 40px;\n    fill: white;\n    display: none;\n}\nnav .topbar {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n    margin: 0 15px;\n    font-size: 50px;\n}\nnav .topbar .topbar-icon {\n    margin-left: 5px;\n    width: 70px;\n    height: 70px;\n}\n@media only screen and (max-width: 700px){\n    nav .topbar {\n        font-size: 25px;\n    }\n    nav svg {\n        display: block;\n    }\n    nav .topbar .topbar-icon {\n        margin-left: 3px;\n        width: 50px;\n        height: 50px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css-folder/topbar.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,4DAA4D;AAChE;AACA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;AACA;IACI;QACI,eAAe;IACnB;IACA;QACI,cAAc;IAClB;IACA;QACI,gBAAgB;QAChB,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":["\nnav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\nnav svg {\n    padding: 0;\n    width: 25px;\n    height: 25px;\n    margin-right: 40px;\n    fill: white;\n    display: none;\n}\nnav .topbar {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n    margin: 0 15px;\n    font-size: 50px;\n}\nnav .topbar .topbar-icon {\n    margin-left: 5px;\n    width: 70px;\n    height: 70px;\n}\n@media only screen and (max-width: 700px){\n    nav .topbar {\n        font-size: 25px;\n    }\n    nav svg {\n        display: block;\n    }\n    nav .topbar .topbar-icon {\n        margin-left: 3px;\n        width: 50px;\n        height: 50px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --sidebarheight: 175px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 80px auto;\n    width: 100%;\n    height: 100vh;\n} \n.nav {\n    background: black;\n    color: var(--primary-light);\n    grid-column: 1/4;\n}\n.sidebar {\n    background: var(--primary-light);\n}\n.content {\n    background: var(--secondary-light);\n    grid-column: 2/4;\n}\n@media only screen and (max-width: 700px){\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 80px 1fr;\n        /* 175px */\n    }\n    .nav, .content {\n        grid-column: 1/4;\n    }\n    .sidebar{\n        height: 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,sEAAsE;IACtE,aAAa;IACb,iCAAiC;IACjC,6BAA6B;IAC7B,WAAW;IACX,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;AACpB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;AACA;IACI;QACI,0BAA0B;QAC1B,4BAA4B;QAC5B,UAAU;IACd;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --sidebarheight: 175px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 80px auto;\n    width: 100%;\n    height: 100vh;\n} \n.nav {\n    background: black;\n    color: var(--primary-light);\n    grid-column: 1/4;\n}\n.sidebar {\n    background: var(--primary-light);\n}\n.content {\n    background: var(--secondary-light);\n    grid-column: 2/4;\n}\n@media only screen and (max-width: 700px){\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 80px 1fr;\n        /* 175px */\n    }\n    .nav, .content {\n        grid-column: 1/4;\n    }\n    .sidebar{\n        height: 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css-folder/content.css":
/*!************************************!*\
  !*** ./src/css-folder/content.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./content.css */ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/content.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css-folder/details.css":
/*!************************************!*\
  !*** ./src/css-folder/details.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./details.css */ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/details.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css-folder/sidebar.css":
/*!************************************!*\
  !*** ./src/css-folder/sidebar.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css-folder/topbar.css":
/*!***********************************!*\
  !*** ./src/css-folder/topbar.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_topbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./topbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/topbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_topbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_topbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_topbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_topbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/database/api.js":
/*!*****************************!*\
  !*** ./src/database/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApi": () => (/* binding */ getApi),
/* harmony export */   "getPosition": () => (/* binding */ getPosition),
/* harmony export */   "setApi": () => (/* binding */ setApi),
/* harmony export */   "setPosition": () => (/* binding */ setPosition)
/* harmony export */ });


const getPosition = () => {
    const athome = localStorage.getItem('position');
    return athome;
}
const setPosition = (data) => {        
    return localStorage.setItem('position', data);
}
const getApi = () => {
    const athome = JSON.parse(localStorage.getItem('todo'));
    return athome[0];
}
const setApi = (data) => {
    return localStorage.setItem('todo', JSON.stringify(data));
}


 

/***/ }),

/***/ "./src/js-folder/click-detail.js":
/*!***************************************!*\
  !*** ./src/js-folder/click-detail.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_folder_details_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-folder/details.css */ "./src/css-folder/details.css");


function createDiv(txt, className) {
    const detail = document.createElement('div');
    detail.classList.add('detail-txt', className);
    detail.textContent = txt;
    
    return detail
}
function titleDiv(items) {
    const box = document.createElement('div');
    box.classList.add('detail-title');
    box.append(
        createDiv(`${items.title}`),
        createDiv('X', 'close')
    )

    return box;
}
function createBodyDiv(key, value) {
    const box = document.createElement('div');
    box.classList.add('detail-box');
    box.append(
        createDiv(key, 'key'),
        createDiv(value, 'value')
    )
    return box
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(detailBtn, items) {
    detailBtn.addEventListener('click', () => {
        const detailBg = document.createElement('div');
        detailBg.classList.add('check-details');
        const details = document.createElement('div');
        details.classList.add('details-info');
        detailBg.appendChild(details);
        details.append(
            titleDiv(items),
            createBodyDiv('Project: ', items.description),
            createBodyDiv('Due Date: ', items.dueDate),
            createBodyDiv('Priority: ', items.priority),
            createBodyDiv('Details: ', items.notes),
        );
        document.body.appendChild(detailBg);
        const close = document.querySelector('.close');
        if(close) {
            close.addEventListener('click', () => {
                const detailBg = document.querySelector('.check-details');
                document.body.removeChild(detailBg);
            });
        }
    })

}

/***/ }),

/***/ "./src/js-folder/clickIcon.js":
/*!************************************!*\
  !*** ./src/js-folder/clickIcon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const sidebar = document.querySelector('.sidebar');
    const svg = document.querySelector('.svg');
    svg.addEventListener('click', () => {
        sidebar.style.display = sidebar.style.display === 'block' 
        ? 'none' : 'block';

    })
}

/***/ }),

/***/ "./src/js-folder/content.js":
/*!**********************************!*\
  !*** ./src/js-folder/content.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_folder_content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-folder/content.css */ "./src/css-folder/content.css");
/* harmony import */ var _click_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click-detail */ "./src/js-folder/click-detail.js");
/* harmony import */ var _edit_folder_setEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-folder/setEdit */ "./src/js-folder/edit-folder/setEdit.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './click-edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _delete_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-detail */ "./src/js-folder/delete-detail.js");
/* harmony import */ var _renderIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderIcon */ "./src/js-folder/renderIcon.js");







function createCheckbox(items, title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'isread';
    checkbox.classList.add('check-box');
    checkbox.checked = items['checklist'];
    (0,_edit_folder_setEdit__WEBPACK_IMPORTED_MODULE_2__["default"])(checkbox, title, items, 'checked', 'checklist');
    return checkbox;
}

function createProperties(txt, className, items) {
    const elem = document.createElement('div');
    elem.classList.add('item', className);
    elem.textContent = items['title'];
    return elem;
}

function detailButton(txt, className, items) {
    const elem = document.createElement('div');
    elem.classList.add('detail');
    const detail = document.createElement('div');
    detail.classList.add(className);
    elem.appendChild(detail);
    detail.textContent = txt;
    (0,_click_detail__WEBPACK_IMPORTED_MODULE_1__["default"])(detail, items);
    return elem;
}
function dateButton(txt, className) {
    const elem = document.createElement('div');
    elem.classList.add('detail');
    const detail = document.createElement('div');
    detail.classList.add(className);
    elem.appendChild(detail);
    detail.textContent = txt;
    return elem;
}

function editButton(txt, className, items, title) {
    const link = "M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v5q0 .425-.288.713T20 12q-.425 0-.713-.288T19 11v-1H5v10h6q.425 0 .713.288T12 21q0 .425-.288.713T11 22H5Zm17.125-5L20 14.875l.725-.725q.275-.275.7-.275t.7.275l.725.725q.275.275.275.7t-.275.7l-.725.725ZM15.7 23h-1.2q-.2 0-.35-.15T14 22.5v-1.2q0-.2.075-.388t.225-.337l5-5l2.125 2.125l-5 5q-.15.15-.338.225T15.7 23ZM5 8h14V6H5v2Zm0 0V6v2Z";
    const elem = document.createElement('div'); 
    elem.classList.add('edit');
    const edit = document.createElement('div');
    edit.classList.add(className);
    edit.appendChild((0,_renderIcon__WEBPACK_IMPORTED_MODULE_5__["default"])(link, '24', '24'));
    elem.appendChild(edit);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './click-edit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(elem, items, title);
    return elem; 
} 
function deleteButton(index, txt, className, items, title) {
    const link= "m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1l1.4 1.4ZM7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM7 6v13V6Z";
    const elem = document.createElement('div');
    elem.classList.add(className);
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.id = index;
    deleteBtn.appendChild((0,_renderIcon__WEBPACK_IMPORTED_MODULE_5__["default"])(link, '24', '24'));
    elem.appendChild(deleteBtn);
    (0,_delete_detail__WEBPACK_IMPORTED_MODULE_4__["default"])(elem, items, title);
    return elem;
} 
function createDiv(index, className, items, title) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        createCheckbox(items, title),
        createProperties(index, 'key', items),
        detailButton('Details', 'detail-btn', items),
        dateButton(
            items['dueDate'].substring(
                items['dueDate'].indexOf(' ') + 1), 
                'date'
        ),
        editButton('Edit', 'edit-btn', items, title),
        deleteButton(index, 'Delete', 'delete', items, title),
    );
    return elem;
}
function content(items) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let index = 0; index < items.length; index++) {
        container.appendChild(
            createDiv(items[index]['_id'], 'todo', items[index], items[index]['objtitle'])
        );
    }
    return container;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);

/***/ }),

/***/ "./src/js-folder/create-folder/submit-create.js":
/*!******************************************************!*\
  !*** ./src/js-folder/create-folder/submit-create.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/api */ "./src/database/api.js");
/* harmony import */ var _edit_folder_todo_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-folder/todo-home */ "./src/js-folder/edit-folder/todo-home.js");
/* harmony import */ var _edit_folder_todo_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-folder/todo-add */ "./src/js-folder/edit-folder/todo-add.js");
/* harmony import */ var _edit_folder_calender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-folder/calender */ "./src/js-folder/edit-folder/calender.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elem) {
    elem.addEventListener('click', () => {
        const editContainer = document.querySelector('.edit-container');
        const warning = document.querySelector('.warning');
        let state = [(0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()];
        const arr = ['title', 'description', 'notes'];
        let todoObj = {};

        const select = document.querySelector('.select');
        todoObj['_id'] = state[0][select.value].length;

        const textarea = document.querySelectorAll('.textarea');
        for (let index = 0; index < textarea.length; index++) {
            if (textarea[index].value.length <= 2) {
                warning.style.display = 'block';
                return false;
            }
            todoObj[arr[index]] = textarea[index].value;
        }

        const myDate = document.querySelector('.change-date').value;
        const date = new Date(myDate);
        if (!!date.valueOf()) {
            todoObj['dueDate'] = `${date.getFullYear()} ${_edit_folder_calender__WEBPACK_IMPORTED_MODULE_3__["default"][date.getMonth()]} ${date.getDate()+1}`
        } else {
            todoObj['dueDate'] = '0000 Jan 00';
        }
        todoObj['priority'] = 'Low';
        todoObj['checklist'] = false;
        todoObj['objtitle'] = select.value;
        state[0][select.value].push(todoObj);
        (0,_database_api__WEBPACK_IMPORTED_MODULE_0__.setApi)(state);
        document.body.removeChild(editContainer);
        if((0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getPosition)() === 'home') {
            return (0,_edit_folder_todo_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
        return (0,_edit_folder_todo_add__WEBPACK_IMPORTED_MODULE_2__["default"])(select.value);
    })
}

/***/ }),

/***/ "./src/js-folder/delete-detail.js":
/*!****************************************!*\
  !*** ./src/js-folder/delete-detail.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database/api */ "./src/database/api.js");
/* harmony import */ var _edit_folder_todo_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-folder/todo-home */ "./src/js-folder/edit-folder/todo-home.js");
/* harmony import */ var _edit_folder_todo_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-folder/todo-add */ "./src/js-folder/edit-folder/todo-add.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elem, items, title) {
    elem.addEventListener('click', () => {
        let state = [(0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()];

        const newObj = state[0][title].filter(
            (obj) => obj['_id'] !== items['_id']
        );
        state[0][title] = newObj;
        (0,_database_api__WEBPACK_IMPORTED_MODULE_0__.setApi)(state);
        if((0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getPosition)() === 'home') {
            return (0,_edit_folder_todo_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
        return (0,_edit_folder_todo_add__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
    });
}

/***/ }),

/***/ "./src/js-folder/edit-folder/calender.js":
/*!***********************************************!*\
  !*** ./src/js-folder/edit-folder/calender.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    'Jan', 
    'Feb', 
    'Mar', 
    'Apr', 
    'May', 
    'Jun', 
    'July', 
    'Aug', 
    'Sep', 
    'Oct', 
    'Nov', 
    'Dec'
]);

/***/ }),

/***/ "./src/js-folder/edit-folder/setEdit.js":
/*!**********************************************!*\
  !*** ./src/js-folder/edit-folder/setEdit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/api */ "./src/database/api.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elem, title, items, txtContent, value ) {
    elem.addEventListener('click', () => {
        const api = [(0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()];
        let index = api[0][title].findIndex((obj) => {
            return obj['_id'] == items['_id']
        });

        api[0][title][index][value] = elem[txtContent];
        (0,_database_api__WEBPACK_IMPORTED_MODULE_0__.setApi)(api);

    });
} 

/***/ }),

/***/ "./src/js-folder/edit-folder/todo-add.js":
/*!***********************************************!*\
  !*** ./src/js-folder/edit-folder/todo-add.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/api */ "./src/database/api.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content */ "./src/js-folder/content.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(title) {
    const contentcontainer = document.querySelector('.content');
    const container = document.querySelector('.container');
    if(container) {
        contentcontainer.removeChild(container);
    }
    contentcontainer.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()[title]));
    (0,_database_api__WEBPACK_IMPORTED_MODULE_0__.setPosition)(title);
}

/***/ }),

/***/ "./src/js-folder/edit-folder/todo-home.js":
/*!************************************************!*\
  !*** ./src/js-folder/edit-folder/todo-home.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/api */ "./src/database/api.js");
/* harmony import */ var _css_folder_content_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-folder/content.css */ "./src/css-folder/content.css");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content */ "./src/js-folder/content.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(title) {
    const catArr = ['athome', 'work', 'school', 'playground'];
    const state = [
        ...(0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()[catArr[0]],
        ...(0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()[catArr[1]],
        ...(0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()[catArr[2]],
        ...(0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()[catArr[3]],
    ];
    let shuffled = state.sort((a, b) => a.title > b.title);

    const contentcontainer = document.querySelector('.content');
    const container = document.querySelector('.container');
    if(container) {
        contentcontainer.removeChild(container);
    }
    contentcontainer.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_2__["default"])(shuffled));
    (0,_database_api__WEBPACK_IMPORTED_MODULE_0__.setPosition)('home');
} 
 

/***/ }),

/***/ "./src/js-folder/newContent.js":
/*!*************************************!*\
  !*** ./src/js-folder/newContent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../css-folder/edit.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _create_folder_submit_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-folder/submit-create */ "./src/js-folder/create-folder/submit-create.js");




function createOption(value, txt) {
    const options = document.createElement('option');
    options.value = value;
    options.text = txt;
    return options;
}
function createSelect() {
    const catArr = ['athome', 'work', 'school', 'playground'];
    const catText = ['At Home', 'Work', 'School', 'Playground'];
    const elem = document.createElement('select');
    elem.classList.add('select');
    for (let index = 0; index < catArr.length; index++) {

        elem.appendChild(createOption(catArr[index], catText[index]));
    }
    return elem;
}
function createInputs(className, type, defaultText) {
    const elem = document.createElement(type);
    elem.classList.add(className);
    elem.placeholder = defaultText;
    return elem;
}
function createDiv() {
    const elem = document.createElement('div');
    elem.classList.add('edit-container');
    const box = document.createElement('div');
    box.classList.add('edit-box');
    elem.appendChild(box);
    return elem;
}
function createBox(txt, className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;
    return elem;
}
function createDate(className) {
    const elem = document.createElement('input');
    elem.type = 'date';
    elem.classList.add(className);
    return elem;
}
function dateBox(className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        createBox('Due Date: '),
        createDate('change-date'),
    );
    return elem;
}
function createFunc(txt, className) {
    const elem = document.createElement('button');
    elem.classList.add(className);
    elem.style.width = '90px';
    elem.textContent = txt;    
    (0,_create_folder_submit_create__WEBPACK_IMPORTED_MODULE_1__["default"])(elem);
    return elem; 
}  
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elem) { 

    elem.addEventListener('click', () => {
        document.body.appendChild(createDiv());
        const box = document.querySelector('.edit-box');
        box.append(
            createBox('X', 'close'),
            createSelect(),
            createInputs('textarea', 'textarea', 'Title'),
            createInputs('textarea', 'textarea', 'Project'),
            createInputs('textarea', 'textarea', 'Details'),
            createBox('Warning: character must be greater that 2', 'warning'),
            dateBox('due-date'),
            createFunc('Create', 'confirm-edit'),
        );
        
        document.querySelector('.close').addEventListener('click', () => {
            const container = document.querySelector('.edit-container');
            document.body.removeChild(container);
        })
    });
}

/***/ }),

/***/ "./src/js-folder/renderIcon.js":
/*!*************************************!*\
  !*** ./src/js-folder/renderIcon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(shape, size1, size2, className) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg.setAttribute('viewBox', `0 0 ${size1} ${size2}`);
    iconPath.setAttribute('d', shape);
    iconSvg.classList.add(className);
    iconSvg.appendChild(iconPath);
    return iconSvg;
}

/***/ }),

/***/ "./src/js-folder/sidebar.js":
/*!**********************************!*\
  !*** ./src/js-folder/sidebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_folder_sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-folder/sidebar.css */ "./src/css-folder/sidebar.css");


function sidebarDiv (txt, className, title) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;
    elem.title = title;
    return elem;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.append(
        sidebarDiv('Home', 'home', 'home'),
        sidebarDiv('Project', 'project', 'new-project'),
        sidebarDiv('At Home', 'cate', 'athome'),
        sidebarDiv('Work', 'cate', 'work'),
        sidebarDiv('School', 'cate', 'school'),
        sidebarDiv('Playground', 'cate', 'playground'),
    );
}


/***/ }),

/***/ "./src/js-folder/topbar.js":
/*!*********************************!*\
  !*** ./src/js-folder/topbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_folder_topbar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-folder/topbar.css */ "./src/css-folder/topbar.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../image-folder/todo-favicon.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function createImg() {
    const img = document.createElement('img');
    img.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../image-folder/todo-favicon.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    img.classList.add('topbar-icon');
    return img;
}

 function topbar(txt) {
    const elem = document.createElement('div');
    elem.classList.add('topbar');
    elem.textContent = txt;
    elem.appendChild(createImg())
    return elem;
} 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topbar);

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_folder_topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-folder/topbar */ "./src/js-folder/topbar.js");
/* harmony import */ var _js_folder_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-folder/sidebar */ "./src/js-folder/sidebar.js");
/* harmony import */ var _js_folder_edit_folder_todo_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-folder/edit-folder/todo-home */ "./src/js-folder/edit-folder/todo-home.js");
/* harmony import */ var _js_folder_newContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js-folder/newContent */ "./src/js-folder/newContent.js");
/* harmony import */ var _js_folder_edit_folder_todo_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js-folder/edit-folder/todo-add */ "./src/js-folder/edit-folder/todo-add.js");
/* harmony import */ var _js_folder_renderIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js-folder/renderIcon */ "./src/js-folder/renderIcon.js");
/* harmony import */ var _js_folder_clickIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js-folder/clickIcon */ "./src/js-folder/clickIcon.js");










class Todo {
    createDiv(elemType, className) {
        const elem = document.createElement(elemType);
        elem.classList.add(className);
        return elem;
    }
    
    contentFunc = () => {        
        const home = document.querySelectorAll('.home');
        home.forEach(btn => {
            btn.addEventListener('click', () => {
                (0,_js_folder_edit_folder_todo_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
            });
        });
        const project = document.querySelector('.project');
        (0,_js_folder_newContent__WEBPACK_IMPORTED_MODULE_4__["default"])(project);
        const categories = document.querySelectorAll('.cate');
        categories.forEach(btn => {
            btn.addEventListener('click', () => {
                (0,_js_folder_edit_folder_todo_add__WEBPACK_IMPORTED_MODULE_5__["default"])(btn.title);
            });
        });

    }
    appendBody() {
        const d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45z"
        const size1 = '1536';
        const size2 = '1280';
        document.body.append(
            this.createDiv('nav', 'nav'), 
            this.createDiv('div', 'sidebar'),
            this.createDiv('div', 'content')
        )
        const nav = document.querySelector('nav');
        nav.appendChild((0,_js_folder_topbar__WEBPACK_IMPORTED_MODULE_1__["default"])('Todo List App'));
        nav.appendChild((0,_js_folder_renderIcon__WEBPACK_IMPORTED_MODULE_6__["default"])(d, size1, size2, 'svg'));
        (0,_js_folder_clickIcon__WEBPACK_IMPORTED_MODULE_7__["default"])();
        (0,_js_folder_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])();
        onload = () => {
            (0,_js_folder_edit_folder_todo_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
        }
        this.contentFunc();

    }
}
const todo = new Todo();
todo.appendBody();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0M7QUFDbUI7O0FBRXJEO0FBQ0E7QUFDQSxjQUFjLCtKQUFLO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7OztVQ2pCckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDbUI7QUFDSztBQUNZO0FBQ1Q7QUFDTztBQUNQO0FBQ0Y7OztBQUc5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRFQUFRO0FBQ3hCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxRQUFRLGlFQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyRUFBTztBQUN2QixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZEQUFNO0FBQzlCLHdCQUF3QixpRUFBVTtBQUNsQyxRQUFRLGdFQUFTO0FBQ2pCLFFBQVEsOERBQVU7QUFDbEI7QUFDQSxZQUFZLDRFQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9kZXRhaWxzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci90b3BiYXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9jb250ZW50LmNzcz9lMWNmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MtZm9sZGVyL2RldGFpbHMuY3NzP2I3YzQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvc2lkZWJhci5jc3M/ZGVlYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci90b3BiYXIuY3NzP2U0NDYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGFiYXNlL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NsaWNrLWRldGFpbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NsaWNrSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9jcmVhdGUtZm9sZGVyL3N1Ym1pdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9kZWxldGUtZGV0YWlsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvY2FsZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9lZGl0LWZvbGRlci9zZXRFZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvdG9kby1hZGQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9lZGl0LWZvbGRlci90b2RvLWhvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9uZXdDb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvcmVuZGVySWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci90b3BiYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZGFyazogIzMzMztcXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjAyLCAyMDIsIDIyMyk7XFxuICAgIC0tZGFyay1ibHVlOiByZ2IoMTA2LCAxMDYsIDE3OSk7XFxufSBcXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogN3B4IDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwsIC5lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDExMywgMTA1LCAyMTQpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwtYnRuLCAuZGF0ZSwgLmVkaXQtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBjb2xvcjogcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGNvbG9yOiByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuIHN2ZyB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsbDogcmdiKDE5NiwgMTMyLCAxMzIpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biBzdmcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG46aG92ZXIsIC5kZXRhaWwtYnRuOmhvdmVyLCAuZWRpdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLWJ0biB7XFxuICAgICAgICBwYWRkaW5nOiAwIDNweDtcXG4gICAgfVxcblxcbn0gXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG59IFxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4ge1xcbiAgICAgICAgd2lkdGg6IDE3cHg7XFxuICAgICAgICBoZWlnaHQ6IDE3cHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxufSBcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kYXRlIHtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbn0gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy1mb2xkZXIvY29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztRQUNYLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIwMiwgMjAyLCAyMjMpO1xcbiAgICAtLWRhcmstYmx1ZTogcmdiKDEwNiwgMTA2LCAxNzkpO1xcbn0gXFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDdweCAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDI0NSwgMTIwLCAyMDUpO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG86Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwIDAgNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLCAuZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogM3B4IDlweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHJnYigxMTMsIDEwNSwgMjE0KTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLWJ0biwgLmRhdGUsIC5lZGl0LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDYsIDEwNiwgMTc5KTtcXG4gICAgY29sb3I6IHJnYigxMDYsIDEwNiwgMTc5KTtcXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5NiwgMTMyLCAxMzIpO1xcbiAgICBjb2xvcjogcmdiKDE5NiwgMTMyLCAxMzIpO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGVsZXRlLWJ0biBzdmcge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IHJnYigxOTYsIDEzMiwgMTMyKTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4gc3ZnIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmaWxsOiB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuOmhvdmVyLCAuZGV0YWlsLWJ0bjpob3ZlciwgLmVkaXQtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4ge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRldGFpbC1idG4ge1xcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XFxuICAgIH1cXG5cXG59IFxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB9XFxufSBcXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kYXRlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuaXRlbSB7XFxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmVkaXQtYnRuIHtcXG4gICAgICAgIHdpZHRoOiAxN3B4O1xcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbn0gXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG5cXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGF0ZSB7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG59IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jaGVjay1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGUgLmNsb3NlOmxhc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IHJnYigwLDAsMCwwLjcpO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGUgLmNsb3NlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogcmdiKDE3NywgMTQxLCAxNDEpO1xcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleTpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleSwgLnZhbHVle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8ge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94IC5rZXk6Zmlyc3QtY2hpbGR7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH0gICAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MtZm9sZGVyL2RldGFpbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNIQUFzSDtJQUN0SCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uY2hlY2stZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxlIC5jbG9zZTpsYXN0LWNoaWxke1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiByZ2IoMCwwLDAsMC43KTtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxlIC5jbG9zZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHJnYigxNzcsIDE0MSwgMTQxKTtcXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94IC5rZXk6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94IC5rZXksIC52YWx1ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3h7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveCAua2V5OmZpcnN0LWNoaWxke1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9ICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMzMzO1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNlZWU7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigyMDIsIDIwMiwgMjIzKTtcXG4gICAgLS1saWdodC1kYXJrOiByZ2IoMCwwLDAsMC44KTtcXG59IFxcblxcbi5zaWRlYmFyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDIzOCk7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1kYXJrKTtcXG59XFxuLmhvbWU6bnRoLWNoaWxkKDEpLCAucHJvamVjdDpudGgtY2hpbGQoMikge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG4uaG9tZTpob3ZlciwgLnByb2plY3Q6aG92ZXIsIC5jYXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjYmRiN2I3O1xcbn1cXG4uY2F0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAyMzgpO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gICAgLmhvbWUsIC5wcm9qZWN0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuY2F0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLWZvbGRlci9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIwMiwgMjAyLCAyMjMpO1xcbiAgICAtLWxpZ2h0LWRhcms6IHJnYigwLDAsMCwwLjgpO1xcbn0gXFxuXFxuLnNpZGViYXIge1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMjM4KTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG4uaG9tZTpudGgtY2hpbGQoMSksIC5wcm9qZWN0Om50aC1jaGlsZCgyKSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbi5ob21lOmhvdmVyLCAucHJvamVjdDpob3ZlciwgLmNhdGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNiZGI3Yjc7XFxufVxcbi5jYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDIzOCk7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcbiAgICAuaG9tZSwgLnByb2plY3Qge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxuICAgIC5jYXRlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5uYXYgc3ZnIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxubmF2IC50b3BiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMCAxNXB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcbm5hdiAudG9wYmFyIC50b3BiYXItaWNvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICBuYXYgLnRvcGJhciB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG4gICAgbmF2IHN2ZyB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICBuYXYgLnRvcGJhciAudG9wYmFyLWljb24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MtZm9sZGVyL3RvcGJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNERBQTREO0FBQ2hFO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5uYXYgc3ZnIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxubmF2IC50b3BiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMCAxNXB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcbm5hdiAudG9wYmFyIC50b3BiYXItaWNvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICBuYXYgLnRvcGJhciB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG4gICAgbmF2IHN2ZyB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICBuYXYgLnRvcGJhciAudG9wYmFyLWljb24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tc2lkZWJhcmhlaWdodDogMTc1cHg7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59IFxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcXG4gICAgICAgIC8qIDE3NXB4ICovXFxuICAgIH1cXG4gICAgLm5hdiwgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgfVxcbiAgICAuc2lkZWJhcntcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZGFyazogIzMzMztcXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG4gICAgLS1zaWRlYmFyaGVpZ2h0OiAxNzVweDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn0gXFxuLm5hdiB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyO1xcbiAgICAgICAgLyogMTc1cHggKi9cXG4gICAgfVxcbiAgICAubmF2LCAuY29udGVudCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICB9XFxuICAgIC5zaWRlYmFye1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXRhaWxzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGV0YWlscy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcGJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcGJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5jb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhdGhvbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zaXRpb24nKTtcbiAgICByZXR1cm4gYXRob21lO1xufVxuY29uc3Qgc2V0UG9zaXRpb24gPSAoZGF0YSkgPT4geyAgICAgICAgXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbicsIGRhdGEpO1xufVxuY29uc3QgZ2V0QXBpID0gKCkgPT4ge1xuICAgIGNvbnN0IGF0aG9tZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSk7XG4gICAgcmV0dXJuIGF0aG9tZVswXTtcbn1cbmNvbnN0IHNldEFwaSA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufVxuXG5cbmV4cG9ydCB7Z2V0QXBpLCBzZXRBcGksIGdldFBvc2l0aW9uLCBzZXRQb3NpdGlvbn07ICIsImltcG9ydCAnLi4vY3NzLWZvbGRlci9kZXRhaWxzLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdih0eHQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbC5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtdHh0JywgY2xhc3NOYW1lKTtcbiAgICBkZXRhaWwudGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgXG4gICAgcmV0dXJuIGRldGFpbFxufVxuZnVuY3Rpb24gdGl0bGVEaXYoaXRlbXMpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXRpdGxlJyk7XG4gICAgYm94LmFwcGVuZChcbiAgICAgICAgY3JlYXRlRGl2KGAke2l0ZW1zLnRpdGxlfWApLFxuICAgICAgICBjcmVhdGVEaXYoJ1gnLCAnY2xvc2UnKVxuICAgIClcblxuICAgIHJldHVybiBib3g7XG59XG5mdW5jdGlvbiBjcmVhdGVCb2R5RGl2KGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgnZGV0YWlsLWJveCcpO1xuICAgIGJveC5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZURpdihrZXksICdrZXknKSxcbiAgICAgICAgY3JlYXRlRGl2KHZhbHVlLCAndmFsdWUnKVxuICAgIClcbiAgICByZXR1cm4gYm94XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGV0YWlsQnRuLCBpdGVtcykge1xuICAgIGRldGFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsQmcuY2xhc3NMaXN0LmFkZCgnY2hlY2stZGV0YWlscycpO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1pbmZvJyk7XG4gICAgICAgIGRldGFpbEJnLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZChcbiAgICAgICAgICAgIHRpdGxlRGl2KGl0ZW1zKSxcbiAgICAgICAgICAgIGNyZWF0ZUJvZHlEaXYoJ1Byb2plY3Q6ICcsIGl0ZW1zLmRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgIGNyZWF0ZUJvZHlEaXYoJ0R1ZSBEYXRlOiAnLCBpdGVtcy5kdWVEYXRlKSxcbiAgICAgICAgICAgIGNyZWF0ZUJvZHlEaXYoJ1ByaW9yaXR5OiAnLCBpdGVtcy5wcmlvcml0eSksXG4gICAgICAgICAgICBjcmVhdGVCb2R5RGl2KCdEZXRhaWxzOiAnLCBpdGVtcy5ub3RlcyksXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGV0YWlsQmcpO1xuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICAgICAgICBpZihjbG9zZSkge1xuICAgICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stZGV0YWlscycpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGV0YWlsQmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ZnJyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgXG4gICAgICAgID8gJ25vbmUnIDogJ2Jsb2NrJztcblxuICAgIH0pXG59IiwiaW1wb3J0ICcuLi9jc3MtZm9sZGVyL2NvbnRlbnQuY3NzJztcbmltcG9ydCBjbGlja0RldGFpbCBmcm9tICcuL2NsaWNrLWRldGFpbCc7XG5pbXBvcnQgc2V0RWRpdCBmcm9tICcuL2VkaXQtZm9sZGVyL3NldEVkaXQnO1xuaW1wb3J0IGNsaWNrRWRpdCBmcm9tICcuL2NsaWNrLWVkaXQnO1xuaW1wb3J0IGRlbGV0ZURldGFpbCBmcm9tICcuL2RlbGV0ZS1kZXRhaWwnO1xuaW1wb3J0IHJlbmRlckljb24gZnJvbSAnLi9yZW5kZXJJY29uJztcblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3goaXRlbXMsIHRpdGxlKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94Lm5hbWUgPSAnaXNyZWFkJztcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gaXRlbXNbJ2NoZWNrbGlzdCddO1xuICAgIHNldEVkaXQoY2hlY2tib3gsIHRpdGxlLCBpdGVtcywgJ2NoZWNrZWQnLCAnY2hlY2tsaXN0Jyk7XG4gICAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0aWVzKHR4dCwgY2xhc3NOYW1lLCBpdGVtcykge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nLCBjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBpdGVtc1sndGl0bGUnXTtcbiAgICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZGV0YWlsQnV0dG9uKHR4dCwgY2xhc3NOYW1lLCBpdGVtcykge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2RldGFpbCcpO1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChkZXRhaWwpO1xuICAgIGRldGFpbC50ZXh0Q29udGVudCA9IHR4dDtcbiAgICBjbGlja0RldGFpbChkZXRhaWwsIGl0ZW1zKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGRhdGVCdXR0b24odHh0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkZXRhaWwnKTtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoZGV0YWlsKTtcbiAgICBkZXRhaWwudGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgcmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGVkaXRCdXR0b24odHh0LCBjbGFzc05hbWUsIGl0ZW1zLCB0aXRsZSkge1xuICAgIGNvbnN0IGxpbmsgPSBcIk01IDIycS0uODI1IDAtMS40MTMtLjU4OFQzIDIwVjZxMC0uODI1LjU4OC0xLjQxM1Q1IDRoMVYzcTAtLjQyNS4yODgtLjcxM1Q3IDJxLjQyNSAwIC43MTMuMjg4VDggM3YxaDhWM3EwLS40MjUuMjg4LS43MTNUMTcgMnEuNDI1IDAgLjcxMy4yODhUMTggM3YxaDFxLjgyNSAwIDEuNDEzLjU4OFQyMSA2djVxMCAuNDI1LS4yODguNzEzVDIwIDEycS0uNDI1IDAtLjcxMy0uMjg4VDE5IDExdi0xSDV2MTBoNnEuNDI1IDAgLjcxMy4yODhUMTIgMjFxMCAuNDI1LS4yODguNzEzVDExIDIySDVabTE3LjEyNS01TDIwIDE0Ljg3NWwuNzI1LS43MjVxLjI3NS0uMjc1LjctLjI3NXQuNy4yNzVsLjcyNS43MjVxLjI3NS4yNzUuMjc1Ljd0LS4yNzUuN2wtLjcyNS43MjVaTTE1LjcgMjNoLTEuMnEtLjIgMC0uMzUtLjE1VDE0IDIyLjV2LTEuMnEwLS4yLjA3NS0uMzg4dC4yMjUtLjMzN2w1LTVsMi4xMjUgMi4xMjVsLTUgNXEtLjE1LjE1LS4zMzguMjI1VDE1LjcgMjNaTTUgOGgxNFY2SDV2MlptMCAwVjZ2MlpcIjtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlZGl0LmFwcGVuZENoaWxkKHJlbmRlckljb24obGluaywgJzI0JywgJzI0JykpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgY2xpY2tFZGl0KGVsZW0sIGl0ZW1zLCB0aXRsZSk7XG4gICAgcmV0dXJuIGVsZW07IFxufSBcbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbihpbmRleCwgdHh0LCBjbGFzc05hbWUsIGl0ZW1zLCB0aXRsZSkge1xuICAgIGNvbnN0IGxpbms9IFwibTkuNCAxNi41bDIuNi0yLjZsMi42IDIuNmwxLjQtMS40bC0yLjYtMi42TDE2IDkuOWwtMS40LTEuNGwtMi42IDIuNmwtMi42LTIuNkw4IDkuOWwyLjYgMi42TDggMTUuMWwxLjQgMS40Wk03IDIxcS0uODI1IDAtMS40MTMtLjU4OFQ1IDE5VjZINFY0aDVWM2g2djFoNXYyaC0xdjEzcTAgLjgyNS0uNTg4IDEuNDEzVDE3IDIxSDdaTTE3IDZIN3YxM2gxMFY2Wk03IDZ2MTNWNlpcIjtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgICBkZWxldGVCdG4uaWQgPSBpbmRleDtcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQocmVuZGVySWNvbihsaW5rLCAnMjQnLCAnMjQnKSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIGRlbGV0ZURldGFpbChlbGVtLCBpdGVtcywgdGl0bGUpO1xuICAgIHJldHVybiBlbGVtO1xufSBcbmZ1bmN0aW9uIGNyZWF0ZURpdihpbmRleCwgY2xhc3NOYW1lLCBpdGVtcywgdGl0bGUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUNoZWNrYm94KGl0ZW1zLCB0aXRsZSksXG4gICAgICAgIGNyZWF0ZVByb3BlcnRpZXMoaW5kZXgsICdrZXknLCBpdGVtcyksXG4gICAgICAgIGRldGFpbEJ1dHRvbignRGV0YWlscycsICdkZXRhaWwtYnRuJywgaXRlbXMpLFxuICAgICAgICBkYXRlQnV0dG9uKFxuICAgICAgICAgICAgaXRlbXNbJ2R1ZURhdGUnXS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgaXRlbXNbJ2R1ZURhdGUnXS5pbmRleE9mKCcgJykgKyAxKSwgXG4gICAgICAgICAgICAgICAgJ2RhdGUnXG4gICAgICAgICksXG4gICAgICAgIGVkaXRCdXR0b24oJ0VkaXQnLCAnZWRpdC1idG4nLCBpdGVtcywgdGl0bGUpLFxuICAgICAgICBkZWxldGVCdXR0b24oaW5kZXgsICdEZWxldGUnLCAnZGVsZXRlJywgaXRlbXMsIHRpdGxlKSxcbiAgICApO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY29udGVudChpdGVtcykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZURpdihpdGVtc1tpbmRleF1bJ19pZCddLCAndG9kbycsIGl0ZW1zW2luZGV4XSwgaXRlbXNbaW5kZXhdWydvYmp0aXRsZSddKVxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgY29udGVudDsiLCJpbXBvcnQgeyBnZXRBcGksIHNldEFwaSwgZ2V0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvYXBpXCI7XG5pbXBvcnQgdG9kb0hvbWUgZnJvbSBcIi4uL2VkaXQtZm9sZGVyL3RvZG8taG9tZVwiO1xuaW1wb3J0IHRvZG9BZGQgZnJvbSBcIi4uL2VkaXQtZm9sZGVyL3RvZG8tYWRkXCI7XG5pbXBvcnQgY2FsZW5kZXIgZnJvbSBcIi4uL2VkaXQtZm9sZGVyL2NhbGVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB3YXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhcm5pbmcnKTtcbiAgICAgICAgbGV0IHN0YXRlID0gW2dldEFwaSgpXTtcbiAgICAgICAgY29uc3QgYXJyID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdub3RlcyddO1xuICAgICAgICBsZXQgdG9kb09iaiA9IHt9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcbiAgICAgICAgdG9kb09ialsnX2lkJ10gPSBzdGF0ZVswXVtzZWxlY3QudmFsdWVdLmxlbmd0aDtcblxuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0YXJlYScpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGV4dGFyZWEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAodGV4dGFyZWFbaW5kZXhdLnZhbHVlLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvT2JqW2FycltpbmRleF1dID0gdGV4dGFyZWFbaW5kZXhdLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXlEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1kYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShteURhdGUpO1xuICAgICAgICBpZiAoISFkYXRlLnZhbHVlT2YoKSkge1xuICAgICAgICAgICAgdG9kb09ialsnZHVlRGF0ZSddID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfSAke2NhbGVuZGVyW2RhdGUuZ2V0TW9udGgoKV19ICR7ZGF0ZS5nZXREYXRlKCkrMX1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvT2JqWydkdWVEYXRlJ10gPSAnMDAwMCBKYW4gMDAnO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9PYmpbJ3ByaW9yaXR5J10gPSAnTG93JztcbiAgICAgICAgdG9kb09ialsnY2hlY2tsaXN0J10gPSBmYWxzZTtcbiAgICAgICAgdG9kb09ialsnb2JqdGl0bGUnXSA9IHNlbGVjdC52YWx1ZTtcbiAgICAgICAgc3RhdGVbMF1bc2VsZWN0LnZhbHVlXS5wdXNoKHRvZG9PYmopO1xuICAgICAgICBzZXRBcGkoc3RhdGUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVkaXRDb250YWluZXIpO1xuICAgICAgICBpZihnZXRQb3NpdGlvbigpID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2RvSG9tZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvQWRkKHNlbGVjdC52YWx1ZSk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBnZXRBcGksIHNldEFwaSwgZ2V0UG9zaXRpb24gfSBmcm9tIFwiLi4vZGF0YWJhc2UvYXBpXCI7XG5pbXBvcnQgdG9kb0hvbWUgZnJvbSBcIi4vZWRpdC1mb2xkZXIvdG9kby1ob21lXCI7XG5pbXBvcnQgdG9kb0FkZCBmcm9tIFwiLi9lZGl0LWZvbGRlci90b2RvLWFkZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtLCBpdGVtcywgdGl0bGUpIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSBbZ2V0QXBpKCldO1xuXG4gICAgICAgIGNvbnN0IG5ld09iaiA9IHN0YXRlWzBdW3RpdGxlXS5maWx0ZXIoXG4gICAgICAgICAgICAob2JqKSA9PiBvYmpbJ19pZCddICE9PSBpdGVtc1snX2lkJ11cbiAgICAgICAgKTtcbiAgICAgICAgc3RhdGVbMF1bdGl0bGVdID0gbmV3T2JqO1xuICAgICAgICBzZXRBcGkoc3RhdGUpO1xuICAgICAgICBpZihnZXRQb3NpdGlvbigpID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2RvSG9tZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvQWRkKHRpdGxlKTtcbiAgICB9KTtcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgIFtcbiAgICAnSmFuJywgXG4gICAgJ0ZlYicsIFxuICAgICdNYXInLCBcbiAgICAnQXByJywgXG4gICAgJ01heScsIFxuICAgICdKdW4nLCBcbiAgICAnSnVseScsIFxuICAgICdBdWcnLCBcbiAgICAnU2VwJywgXG4gICAgJ09jdCcsIFxuICAgICdOb3YnLCBcbiAgICAnRGVjJ1xuXSIsImltcG9ydCB7IGdldEFwaSwgc2V0QXBpIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtLCB0aXRsZSwgaXRlbXMsIHR4dENvbnRlbnQsIHZhbHVlICkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaSA9IFtnZXRBcGkoKV07XG4gICAgICAgIGxldCBpbmRleCA9IGFwaVswXVt0aXRsZV0uZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmpbJ19pZCddID09IGl0ZW1zWydfaWQnXVxuICAgICAgICB9KTtcblxuICAgICAgICBhcGlbMF1bdGl0bGVdW2luZGV4XVt2YWx1ZV0gPSBlbGVtW3R4dENvbnRlbnRdO1xuICAgICAgICBzZXRBcGkoYXBpKTtcblxuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBnZXRBcGksIGdldFBvc2l0aW9uLCBzZXRQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9hcGlcIjtcbmltcG9ydCBjb250ZW50IGZyb20gXCIuLi9jb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgY29uc3QgY29udGVudGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250ZW50Y29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNvbnRlbnRjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudChnZXRBcGkoKVt0aXRsZV0pKTtcbiAgICBzZXRQb3NpdGlvbih0aXRsZSk7XG59IiwiaW1wb3J0IHsgZ2V0QXBpLCBzZXRQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9hcGlcIjtcbmltcG9ydCAnLi4vLi4vY3NzLWZvbGRlci9jb250ZW50LmNzcyc7XG5pbXBvcnQgY29udGVudCBmcm9tIFwiLi4vY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0aXRsZSkge1xuICAgIGNvbnN0IGNhdEFyciA9IFsnYXRob21lJywgJ3dvcmsnLCAnc2Nob29sJywgJ3BsYXlncm91bmQnXTtcbiAgICBjb25zdCBzdGF0ZSA9IFtcbiAgICAgICAgLi4uZ2V0QXBpKClbY2F0QXJyWzBdXSxcbiAgICAgICAgLi4uZ2V0QXBpKClbY2F0QXJyWzFdXSxcbiAgICAgICAgLi4uZ2V0QXBpKClbY2F0QXJyWzJdXSxcbiAgICAgICAgLi4uZ2V0QXBpKClbY2F0QXJyWzNdXSxcbiAgICBdO1xuICAgIGxldCBzaHVmZmxlZCA9IHN0YXRlLnNvcnQoKGEsIGIpID0+IGEudGl0bGUgPiBiLnRpdGxlKTtcblxuICAgIGNvbnN0IGNvbnRlbnRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGVudGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgICBjb250ZW50Y29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQoc2h1ZmZsZWQpKTtcbiAgICBzZXRQb3NpdGlvbignaG9tZScpO1xufSBcbiAiLCJpbXBvcnQgJy4uL2Nzcy1mb2xkZXIvZWRpdC5jc3MnO1xuaW1wb3J0IHN1Ym1pdENyZWF0ZSBmcm9tICcuL2NyZWF0ZS1mb2xkZXIvc3VibWl0LWNyZWF0ZSc7XG5cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKHZhbHVlLCB0eHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9ucy52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbnMudGV4dCA9IHR4dDtcbiAgICByZXR1cm4gb3B0aW9ucztcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdCgpIHtcbiAgICBjb25zdCBjYXRBcnIgPSBbJ2F0aG9tZScsICd3b3JrJywgJ3NjaG9vbCcsICdwbGF5Z3JvdW5kJ107XG4gICAgY29uc3QgY2F0VGV4dCA9IFsnQXQgSG9tZScsICdXb3JrJywgJ1NjaG9vbCcsICdQbGF5Z3JvdW5kJ107XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0Jyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhdEFyci5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihjYXRBcnJbaW5kZXhdLCBjYXRUZXh0W2luZGV4XSkpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0cyhjbGFzc05hbWUsIHR5cGUsIGRlZmF1bHRUZXh0KSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5wbGFjZWhvbGRlciA9IGRlZmF1bHRUZXh0O1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlRGl2KCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ2VkaXQtYm94Jyk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChib3gpO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlQm94KHR4dCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVEYXRlKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsZW0udHlwZSA9ICdkYXRlJztcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGRhdGVCb3goY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uYXBwZW5kKFxuICAgICAgICBjcmVhdGVCb3goJ0R1ZSBEYXRlOiAnKSxcbiAgICAgICAgY3JlYXRlRGF0ZSgnY2hhbmdlLWRhdGUnKSxcbiAgICApO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlRnVuYyh0eHQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnN0eWxlLndpZHRoID0gJzkwcHgnO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7ICAgIFxuICAgIHN1Ym1pdENyZWF0ZShlbGVtKTtcbiAgICByZXR1cm4gZWxlbTsgXG59ICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW0pIHsgXG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZURpdigpKTtcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYm94Jyk7XG4gICAgICAgIGJveC5hcHBlbmQoXG4gICAgICAgICAgICBjcmVhdGVCb3goJ1gnLCAnY2xvc2UnKSxcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdCgpLFxuICAgICAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsICd0ZXh0YXJlYScsICdUaXRsZScpLFxuICAgICAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsICd0ZXh0YXJlYScsICdQcm9qZWN0JyksXG4gICAgICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHRhcmVhJywgJ3RleHRhcmVhJywgJ0RldGFpbHMnKSxcbiAgICAgICAgICAgIGNyZWF0ZUJveCgnV2FybmluZzogY2hhcmFjdGVyIG11c3QgYmUgZ3JlYXRlciB0aGF0IDInLCAnd2FybmluZycpLFxuICAgICAgICAgICAgZGF0ZUJveCgnZHVlLWRhdGUnKSxcbiAgICAgICAgICAgIGNyZWF0ZUZ1bmMoJ0NyZWF0ZScsICdjb25maXJtLWVkaXQnKSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH0pXG4gICAgfSk7XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNoYXBlLCBzaXplMSwgc2l6ZTIsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcbiAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHtzaXplMX0gJHtzaXplMn1gKTtcbiAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBzaGFwZSk7XG4gICAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG4gICAgcmV0dXJuIGljb25Tdmc7XG59IiwiaW1wb3J0ICcuLi9jc3MtZm9sZGVyL3NpZGViYXIuY3NzJztcblxuZnVuY3Rpb24gc2lkZWJhckRpdiAodHh0LCBjbGFzc05hbWUsIHRpdGxlKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgZWxlbS50aXRsZSA9IHRpdGxlO1xuICAgIHJldHVybiBlbGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBzaWRlYmFyLmFwcGVuZChcbiAgICAgICAgc2lkZWJhckRpdignSG9tZScsICdob21lJywgJ2hvbWUnKSxcbiAgICAgICAgc2lkZWJhckRpdignUHJvamVjdCcsICdwcm9qZWN0JywgJ25ldy1wcm9qZWN0JyksXG4gICAgICAgIHNpZGViYXJEaXYoJ0F0IEhvbWUnLCAnY2F0ZScsICdhdGhvbWUnKSxcbiAgICAgICAgc2lkZWJhckRpdignV29yaycsICdjYXRlJywgJ3dvcmsnKSxcbiAgICAgICAgc2lkZWJhckRpdignU2Nob29sJywgJ2NhdGUnLCAnc2Nob29sJyksXG4gICAgICAgIHNpZGViYXJEaXYoJ1BsYXlncm91bmQnLCAnY2F0ZScsICdwbGF5Z3JvdW5kJyksXG4gICAgKTtcbn1cbiIsImltcG9ydCAnLi4vY3NzLWZvbGRlci90b3BiYXIuY3NzJztcbmltcG9ydCBpbWFnZSBmcm9tICcuLi9pbWFnZS1mb2xkZXIvdG9kby1mYXZpY29uLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZygpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gaW1hZ2U7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3RvcGJhci1pY29uJyk7XG4gICAgcmV0dXJuIGltZztcbn1cblxuIGZ1bmN0aW9uIHRvcGJhcih0eHQpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCd0b3BiYXInKTtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0O1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKCkpXG4gICAgcmV0dXJuIGVsZW07XG59IFxuZXhwb3J0IGRlZmF1bHQgdG9wYmFyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHRvcGJhciBmcm9tICcuL2pzLWZvbGRlci90b3BiYXInO1xuaW1wb3J0IG1hcENhdEZ1bmMgZnJvbSAnLi9qcy1mb2xkZXIvc2lkZWJhcic7XG5pbXBvcnQgdG9kb0hvbWUgZnJvbSAnLi9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvdG9kby1ob21lJztcbmltcG9ydCBuZXdDb250ZW50IGZyb20gJy4vanMtZm9sZGVyL25ld0NvbnRlbnQnO1xuaW1wb3J0IHRvZG9BZGQgZnJvbSAnLi9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvdG9kby1hZGQnO1xuaW1wb3J0IHJlbmRlckljb24gZnJvbSAnLi9qcy1mb2xkZXIvcmVuZGVySWNvbic7XG5pbXBvcnQgY2xpY2tJY29uIGZyb20gJy4vanMtZm9sZGVyL2NsaWNrSWNvbic7XG5cblxuY2xhc3MgVG9kbyB7XG4gICAgY3JlYXRlRGl2KGVsZW1UeXBlLCBjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbVR5cGUpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIFxuICAgIGNvbnRlbnRGdW5jID0gKCkgPT4geyAgICAgICAgXG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZScpO1xuICAgICAgICBob21lLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvSG9tZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICAgICAgbmV3Q29udGVudChwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlJyk7XG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvZG9BZGQoYnRuLnRpdGxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBhcHBlbmRCb2R5KCkge1xuICAgICAgICBjb25zdCBkPVwiTTE1MzYgMTA4OHYxMjhxMCAyNi0xOSA0NXQtNDUgMTlINjRxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgxNDA4cTI2IDAgNDUgMTl0MTkgNDV6bTAtNTEydjEyOHEwIDI2LTE5IDQ1dC00NSAxOUg2NHEtMjYgMC00NS0xOVQwIDcwNFY1NzZxMC0yNiAxOS00NXQ0NS0xOWgxNDA4cTI2IDAgNDUgMTl0MTkgNDV6bTAtNTEydjEyOHEwIDI2LTE5IDQ1dC00NSAxOUg2NHEtMjYgMC00NS0xOVQwIDE5MlY2NHEwLTI2IDE5LTQ1VDY0IDBoMTQwOHEyNiAwIDQ1IDE5dDE5IDQ1elwiXG4gICAgICAgIGNvbnN0IHNpemUxID0gJzE1MzYnO1xuICAgICAgICBjb25zdCBzaXplMiA9ICcxMjgwJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURpdignbmF2JywgJ25hdicpLCBcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGl2KCdkaXYnLCAnc2lkZWJhcicpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEaXYoJ2RpdicsICdjb250ZW50JylcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHRvcGJhcignVG9kbyBMaXN0IEFwcCcpKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHJlbmRlckljb24oZCwgc2l6ZTEsIHNpemUyLCAnc3ZnJykpO1xuICAgICAgICBjbGlja0ljb24oKTtcbiAgICAgICAgbWFwQ2F0RnVuYygpO1xuICAgICAgICBvbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvSG9tZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGVudEZ1bmMoKTtcblxuICAgIH1cbn1cbmNvbnN0IHRvZG8gPSBuZXcgVG9kbygpO1xudG9kby5hcHBlbmRCb2R5KCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==