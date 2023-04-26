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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --dark-blue: rgb(106, 106, 179);\n} \n\n.content {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: center;\n    justify-content: center;\n    background: var(--primary-dark);\n}\n.content .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n.content .container .todo {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    gap: 5px;\n    width: 80%;\n    margin: 7px 0;\n    border: 2px solid rgb(245, 120, 205);\n    border-left: 5px solid rgb(245, 120, 205);\n    border-right: 2px solid rgb(245, 120, 205);\n    height: 50px;\n    background: white;\n}\n.content .container .todo:first-child {\n    margin-top: 50px;\n}\n.content .container .todo .item {\n    display: flex;\n    align-items: center;\n    padding: 0 0 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 100%;\n}\n.content .container .todo .item:first-child {\n    border-left: none;\n}\n.content .container .todo input[type=checkbox] {\n    margin: 20px;\n    width: 50px;\n    height: 50px;\n    padding: 40px 20px;\n}\n\n.content .container .todo .detail, .edit {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 120px;\n}\n.content .container .todo .date {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 70px;\n    height: 25px;\n    padding: 3px 9px;\n    font-size: small;\n    font-weight: bold;\n    border: none;\n    color: rgb(113, 105, 214);\n}\n.content .container .todo .detail-btn, .date, .edit-btn {\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n    border: 2px solid rgb(106, 106, 179);\n    color: rgb(106, 106, 179);\n    padding: 3px 10px;\n    background: transparent;\n}\n.content .container .todo .delete {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 120px;\n}\n.content .container .todo .delete-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    border: 2px solid rgb(196, 132, 132);\n    color: rgb(196, 132, 132);\n    background: transparent;\n}\n.content .container .todo .delete-btn svg {\n    width: 70%;\n    height: auto;\n    fill: rgb(196, 132, 132);\n}\n.content .container .todo .edit-btn svg {\n    width: 80%;\n    height: auto;\n    fill: var(--dark-blue);\n}\n.content .container .todo .delete-btn:hover, .detail-btn:hover, .edit-btn {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 700px){\n    .content .container .todo:first-child {\n        margin-top: 50px;\n    }\n    .content .container .todo:last-child {\n        margin-bottom: 50px;\n    }\n}\n\n@media only screen and (max-width: 580px){\n    .content .container .todo {\n        width: 70%;\n        height: 35px;\n    }\n    .content .container .todo .edit-btn {\n        width: 25px;\n        height: 25px;\n        padding: 0;\n    }\n    .content .container .todo .detail-btn {\n        padding: 0 3px;\n    }\n\n} \n@media only screen and (max-width: 500px){\n    .content .container .todo {\n        width: 60%;\n        height: 35px;\n    }\n    .content .container .todo:first-child {\n        margin-top: 50px;\n    }\n} \n\n@media only screen and (max-width: 414px){\n    .content .container .todo {\n        font-size: x-small;\n        width: 50%;\n        height: 35px;\n    }\n    .content .container .todo input[type=checkbox] {\n        margin: 5px;\n        width: 50px;\n        height: 50px;\n    }\n    .content .container .todo .date {\n        font-size: xx-small;\n    }\n    .content .container .todo .item {\n        font-size: small;\n    }\n    .content .container .todo .edit-btn {\n        width: 17px;\n        height: 17px;\n        padding: 0;\n    }\n} \n@media only screen and (max-width: 360px){\n    .content .container .todo {\n        width: 45%;\n        height: 35px;\n\n    }\n    .content .container .todo .item {\n        height: 100%;\n        width: 70%;\n        font-size: x-small;\n    }\n    .content .container .todo .date {\n        width: 40px;\n        font-size: xx-small;\n    }\n} ", "",{"version":3,"sources":["webpack://./src/css-folder/content.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,gCAAgC;IAChC,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,QAAQ;IACR,UAAU;IACV,aAAa;IACb,oCAAoC;IACpC,yCAAyC;IACzC,0CAA0C;IAC1C,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,wCAAwC;IACxC,YAAY;IACZ,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,wCAAwC;IACxC,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,oCAAoC;IACpC,yBAAyB;IACzB,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,wCAAwC;IACxC,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,oCAAoC;IACpC,yBAAyB;IACzB,uBAAuB;AAC3B;AACA;IACI,UAAU;IACV,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,UAAU;IACV,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,WAAW;QACX,YAAY;QACZ,UAAU;IACd;IACA;QACI,cAAc;IAClB;;AAEJ;AACA;IACI;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,kBAAkB;QAClB,UAAU;QACV,YAAY;IAChB;IACA;QACI,WAAW;QACX,WAAW;QACX,YAAY;IAChB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,WAAW;QACX,YAAY;QACZ,UAAU;IACd;AACJ;AACA;IACI;QACI,UAAU;QACV,YAAY;;IAEhB;IACA;QACI,YAAY;QACZ,UAAU;QACV,kBAAkB;IACtB;IACA;QACI,WAAW;QACX,mBAAmB;IACvB;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --dark-blue: rgb(106, 106, 179);\n} \n\n.content {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: center;\n    justify-content: center;\n    background: var(--primary-dark);\n}\n.content .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n.content .container .todo {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    gap: 5px;\n    width: 80%;\n    margin: 7px 0;\n    border: 2px solid rgb(245, 120, 205);\n    border-left: 5px solid rgb(245, 120, 205);\n    border-right: 2px solid rgb(245, 120, 205);\n    height: 50px;\n    background: white;\n}\n.content .container .todo:first-child {\n    margin-top: 50px;\n}\n.content .container .todo .item {\n    display: flex;\n    align-items: center;\n    padding: 0 0 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 100%;\n}\n.content .container .todo .item:first-child {\n    border-left: none;\n}\n.content .container .todo input[type=checkbox] {\n    margin: 20px;\n    width: 50px;\n    height: 50px;\n    padding: 40px 20px;\n}\n\n.content .container .todo .detail, .edit {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 120px;\n}\n.content .container .todo .date {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 70px;\n    height: 25px;\n    padding: 3px 9px;\n    font-size: small;\n    font-weight: bold;\n    border: none;\n    color: rgb(113, 105, 214);\n}\n.content .container .todo .detail-btn, .date, .edit-btn {\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n    border: 2px solid rgb(106, 106, 179);\n    color: rgb(106, 106, 179);\n    padding: 3px 10px;\n    background: transparent;\n}\n.content .container .todo .delete {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 4px;\n    border-left: 2px solid var(--light-blue);\n    height: 100%;\n    width: 120px;\n}\n.content .container .todo .delete-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    border: 2px solid rgb(196, 132, 132);\n    color: rgb(196, 132, 132);\n    background: transparent;\n}\n.content .container .todo .delete-btn svg {\n    width: 70%;\n    height: auto;\n    fill: rgb(196, 132, 132);\n}\n.content .container .todo .edit-btn svg {\n    width: 80%;\n    height: auto;\n    fill: var(--dark-blue);\n}\n.content .container .todo .delete-btn:hover, .detail-btn:hover, .edit-btn {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 700px){\n    .content .container .todo:first-child {\n        margin-top: 50px;\n    }\n    .content .container .todo:last-child {\n        margin-bottom: 50px;\n    }\n}\n\n@media only screen and (max-width: 580px){\n    .content .container .todo {\n        width: 70%;\n        height: 35px;\n    }\n    .content .container .todo .edit-btn {\n        width: 25px;\n        height: 25px;\n        padding: 0;\n    }\n    .content .container .todo .detail-btn {\n        padding: 0 3px;\n    }\n\n} \n@media only screen and (max-width: 500px){\n    .content .container .todo {\n        width: 60%;\n        height: 35px;\n    }\n    .content .container .todo:first-child {\n        margin-top: 50px;\n    }\n} \n\n@media only screen and (max-width: 414px){\n    .content .container .todo {\n        font-size: x-small;\n        width: 50%;\n        height: 35px;\n    }\n    .content .container .todo input[type=checkbox] {\n        margin: 5px;\n        width: 50px;\n        height: 50px;\n    }\n    .content .container .todo .date {\n        font-size: xx-small;\n    }\n    .content .container .todo .item {\n        font-size: small;\n    }\n    .content .container .todo .edit-btn {\n        width: 17px;\n        height: 17px;\n        padding: 0;\n    }\n} \n@media only screen and (max-width: 360px){\n    .content .container .todo {\n        width: 45%;\n        height: 35px;\n\n    }\n    .content .container .todo .item {\n        height: 100%;\n        width: 70%;\n        font-size: x-small;\n    }\n    .content .container .todo .date {\n        width: 40px;\n        font-size: xx-small;\n    }\n} "],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/edit.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css-folder/edit.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.edit-container {\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100vh;\n    background: rgb(0,0,0,0.4);\n}\n.edit-container .edit-box {\n    width: 50%;\n    background: white;\n    border-radius: 5px; \n} \n.edit-container .edit-box .close{\n    float: right;\n    width: 30px;\n    padding: 10px 10px 10px 10px;\n    font-size: 25px;\n    margin-right: 20px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.edit-container .edit-box .warning {\n    display: none;\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 5px;\n    background: rgb(223, 66, 66);\n    color: white;\n    font-size: small;\n}\n.edit-container .edit-box .close:hover{\n    cursor: pointer;\n}\n.edit-container .edit-box .textarea:nth-child(2) {\n    margin-top: 50px;\n\n}\n.edit-container .edit-box .select {\n    padding: 7px;\n    margin: 20px 0 10px 10px;\n    border: 1px solid #000;\n    border-radius: 5px;\n    opacity: 0.8;\n    width: 80%;\n    font-size: 18px;\n}\n\n.edit-container .edit-box .textarea {\n    border: none;\n    outline: none;\n    margin: 20px 0 10px 10px;\n    border-bottom: 1px solid #000;\n    opacity: 0.8;\n    width: 80%;\n    height: 20px;\n    font-size: 18px;\n    -webkit-appearance: none;\n    resize: none;\n}\n.edit-container .edit-box .due-date, .change-priority, .confirm-edit {\n    display: flex;\n    column-gap: 10px;\n    padding: 15px;\n}\n.edit-container .edit-box .change-date {\n    padding: 4px;\n    text-align: center;\n    border-radius: 5px;\n    border-color: rgb(54, 54, 124);\n    color: rgb(52, 52, 196);\n}\n.low-btn {\n    padding: 12px;\n    color: green;\n    background: rgb(0,0,0,0.2);\n}\n.medium-btn {\n    padding: 12px;\n    color: yellow;\n    background: rgb(0,0,0,0.2);\n}\n.high-btn {\n    padding: 12px;\n    color: red;\n    background: rgb(0,0,0,0.2);\n}\n.low-btn:hover, .medium-btn:hover, .high-btn:hover {\n    cursor: pointer;\n    background: rgb(0,0,0,0.4);\n}\n.edit-container .edit-box .confirm-edit {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px 0;\n    width: 80px;\n    border-radius: 5px;\n    opacity: 0.8;\n    margin-left: 20px;\n    margin-bottom: 20px;\n    font-size: 20px;\n    background: rgb(89, 89, 199);\n    color: white;\n}\n.edit-container .edit-box .confirm-edit:hover {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 700px){\n    .edit-container .edit-box {\n        width: 90%;\n        height: 90%;\n    } \n    .edit-container .edit-box .textarea {\n        margin: 10px 0 10px 10px;\n    }\n    .edit-container .edit-box .change-priority {\n        flex-direction: column;\n        padding: 0;\n    }\n    .edit-container .edit-box .change-priority .priority {\n        margin-bottom: 4px;\n        margin-left: 4px;\n    }\n    .edit-container .edit-box .confirm-edit {\n        font-size: 15px;\n        /* padding: none; */\n        margin: 5px 10px;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/css-folder/edit.css"],"names":[],"mappings":";AACA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,0BAA0B;AAC9B;AACA;IACI,UAAU;IACV,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;IAClB,wEAAwE;AAC5E;AACA;IACI,aAAa;IACb,yCAAyC;IACzC,YAAY;IACZ,4BAA4B;IAC5B,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;;AAEpB;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,6BAA6B;IAC7B,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,eAAe;IACf,wBAAwB;IACxB,YAAY;AAChB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,8BAA8B;IAC9B,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,YAAY;IACZ,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,aAAa;IACb,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,UAAU;IACV,0BAA0B;AAC9B;AACA;IACI,eAAe;IACf,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,4BAA4B;IAC5B,YAAY;AAChB;AACA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,sBAAsB;QACtB,UAAU;IACd;IACA;QACI,kBAAkB;QAClB,gBAAgB;IACpB;IACA;QACI,eAAe;QACf,mBAAmB;QACnB,gBAAgB;IACpB;AACJ","sourcesContent":["\n.edit-container {\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100vh;\n    background: rgb(0,0,0,0.4);\n}\n.edit-container .edit-box {\n    width: 50%;\n    background: white;\n    border-radius: 5px; \n} \n.edit-container .edit-box .close{\n    float: right;\n    width: 30px;\n    padding: 10px 10px 10px 10px;\n    font-size: 25px;\n    margin-right: 20px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.edit-container .edit-box .warning {\n    display: none;\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 5px;\n    background: rgb(223, 66, 66);\n    color: white;\n    font-size: small;\n}\n.edit-container .edit-box .close:hover{\n    cursor: pointer;\n}\n.edit-container .edit-box .textarea:nth-child(2) {\n    margin-top: 50px;\n\n}\n.edit-container .edit-box .select {\n    padding: 7px;\n    margin: 20px 0 10px 10px;\n    border: 1px solid #000;\n    border-radius: 5px;\n    opacity: 0.8;\n    width: 80%;\n    font-size: 18px;\n}\n\n.edit-container .edit-box .textarea {\n    border: none;\n    outline: none;\n    margin: 20px 0 10px 10px;\n    border-bottom: 1px solid #000;\n    opacity: 0.8;\n    width: 80%;\n    height: 20px;\n    font-size: 18px;\n    -webkit-appearance: none;\n    resize: none;\n}\n.edit-container .edit-box .due-date, .change-priority, .confirm-edit {\n    display: flex;\n    column-gap: 10px;\n    padding: 15px;\n}\n.edit-container .edit-box .change-date {\n    padding: 4px;\n    text-align: center;\n    border-radius: 5px;\n    border-color: rgb(54, 54, 124);\n    color: rgb(52, 52, 196);\n}\n.low-btn {\n    padding: 12px;\n    color: green;\n    background: rgb(0,0,0,0.2);\n}\n.medium-btn {\n    padding: 12px;\n    color: yellow;\n    background: rgb(0,0,0,0.2);\n}\n.high-btn {\n    padding: 12px;\n    color: red;\n    background: rgb(0,0,0,0.2);\n}\n.low-btn:hover, .medium-btn:hover, .high-btn:hover {\n    cursor: pointer;\n    background: rgb(0,0,0,0.4);\n}\n.edit-container .edit-box .confirm-edit {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px 0;\n    width: 80px;\n    border-radius: 5px;\n    opacity: 0.8;\n    margin-left: 20px;\n    margin-bottom: 20px;\n    font-size: 20px;\n    background: rgb(89, 89, 199);\n    color: white;\n}\n.edit-container .edit-box .confirm-edit:hover {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 700px){\n    .edit-container .edit-box {\n        width: 90%;\n        height: 90%;\n    } \n    .edit-container .edit-box .textarea {\n        margin: 10px 0 10px 10px;\n    }\n    .edit-container .edit-box .change-priority {\n        flex-direction: column;\n        padding: 0;\n    }\n    .edit-container .edit-box .change-priority .priority {\n        margin-bottom: 4px;\n        margin-left: 4px;\n    }\n    .edit-container .edit-box .confirm-edit {\n        font-size: 15px;\n        /* padding: none; */\n        margin: 5px 10px;\n    }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --light-dark: rgb(0,0,0,0.8);\n} \n\n.sidebar {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    align-items: center;\n    color: white;\n    /* background: white; */\n    background: rgb(122, 122, 238);\n}\n\n.home {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    opacity: 0.9;\n    padding: 10px 0;\n    font-size: 20px;\n    background: var(--light-dark);\n}\n.home:nth-child(1), .project:nth-child(2) {\n    opacity: 0.7;\n    border-bottom: 2px solid white;\n}\n.project {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    font-size: 20px;\n    opacity: 0.9;\n    padding: 10px 0;\n    background: var(--light-dark);\n}\n.home:hover, .project:hover, .cate:hover {\n    cursor: pointer;\n    background: #bdb7b7;\n}\n.cate {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    float: right;\n    width: 100%;\n    height: 8px;\n    font-size: 18px;\n    opacity: 0.9;\n    padding: 18px 0 18px 0;\n    background: var(--light-dark);\n}\n@media only screen and (max-width: 700px){\n    .sidebar {\n        background: rgb(122, 122, 238);\n        bottom: 0;\n        display: none;\n        height: 240px;\n        margin-top: 0;\n    }\n    .home, .project {\n        font-size: 18px;\n    }\n    .cate {\n        font-size: 14px;\n        padding: 18px;\n        margin-bottom: 0;\n        bottom: 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css-folder/sidebar.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,6EAA6E;IAC7E,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,eAAe;IACf,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,eAAe;IACf,YAAY;IACZ,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI;QACI,8BAA8B;QAC9B,SAAS;QACT,aAAa;QACb,aAAa;QACb,aAAa;IACjB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,aAAa;QACb,gBAAgB;QAChB,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --light-dark: rgb(0,0,0,0.8);\n} \n\n.sidebar {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    align-items: center;\n    color: white;\n    /* background: white; */\n    background: rgb(122, 122, 238);\n}\n\n.home {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    opacity: 0.9;\n    padding: 10px 0;\n    font-size: 20px;\n    background: var(--light-dark);\n}\n.home:nth-child(1), .project:nth-child(2) {\n    opacity: 0.7;\n    border-bottom: 2px solid white;\n}\n.project {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    font-size: 20px;\n    opacity: 0.9;\n    padding: 10px 0;\n    background: var(--light-dark);\n}\n.home:hover, .project:hover, .cate:hover {\n    cursor: pointer;\n    background: #bdb7b7;\n}\n.cate {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    float: right;\n    width: 100%;\n    height: 8px;\n    font-size: 18px;\n    opacity: 0.9;\n    padding: 18px 0 18px 0;\n    background: var(--light-dark);\n}\n@media only screen and (max-width: 700px){\n    .sidebar {\n        background: rgb(122, 122, 238);\n        bottom: 0;\n        display: none;\n        height: 240px;\n        margin-top: 0;\n    }\n    .home, .project {\n        font-size: 18px;\n    }\n    .cate {\n        font-size: 14px;\n        padding: 18px;\n        margin-bottom: 0;\n        bottom: 0;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --sidebarheight: 175px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 80px auto;\n    width: 100%;\n    height: 100vh;\n} \n.nav {\n    background: black;\n    color: var(--primary-light);\n    grid-column: 1/4;\n}\n.sidebar {\n    background: var(--primary-light);\n}\n.content {\n    background: var(--secondary-light);\n    grid-column: 2/4;\n}\n\n@media only screen and (max-width: 700px){\n    :root {\n        overflow-x: hidden;\n    }\n    body {\n        width: 100%;\n        overflow-x: hidden;\n        grid-template-columns: 1fr;\n        grid-template-rows: 80px 1fr;\n    }\n    .nav, .content {\n        grid-column: 1/4;\n    }\n    .sidebar{\n        height: 0;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,sEAAsE;IACtE,aAAa;IACb,iCAAiC;IACjC,6BAA6B;IAC7B,WAAW;IACX,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;AACpB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI;QACI,kBAAkB;IACtB;IACA;QACI,WAAW;QACX,kBAAkB;QAClB,0BAA0B;QAC1B,4BAA4B;IAChC;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --sidebarheight: 175px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 80px auto;\n    width: 100%;\n    height: 100vh;\n} \n.nav {\n    background: black;\n    color: var(--primary-light);\n    grid-column: 1/4;\n}\n.sidebar {\n    background: var(--primary-light);\n}\n.content {\n    background: var(--secondary-light);\n    grid-column: 2/4;\n}\n\n@media only screen and (max-width: 700px){\n    :root {\n        overflow-x: hidden;\n    }\n    body {\n        width: 100%;\n        overflow-x: hidden;\n        grid-template-columns: 1fr;\n        grid-template-rows: 80px 1fr;\n    }\n    .nav, .content {\n        grid-column: 1/4;\n    }\n    .sidebar{\n        height: 0;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css-folder/edit.css":
/*!*********************************!*\
  !*** ./src/css-folder/edit.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_edit_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./edit.css */ "./node_modules/css-loader/dist/cjs.js!./src/css-folder/edit.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_edit_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_edit_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_edit_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_edit_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js-folder/click-edit.js":
/*!*************************************!*\
  !*** ./src/js-folder/click-edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_folder_edit_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-folder/edit.css */ "./src/css-folder/edit.css");
/* harmony import */ var _edit_folder_setEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-folder/setEdit */ "./src/js-folder/edit-folder/setEdit.js");
/* harmony import */ var _edit_folder_submit_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-folder/submit-edit */ "./src/js-folder/edit-folder/submit-edit.js");




function createInputs(className, item, type) {
    const elem = document.createElement(type);
    elem.classList.add(className);
    elem.value = item;
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
function createDate(className, item, type) {
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
function priority(txt, className, items, title) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;
    (0,_edit_folder_setEdit__WEBPACK_IMPORTED_MODULE_1__["default"])(elem, title, items,  'textContent', 'priority');
    return elem;
}
function priorityBox(className, items, title) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        createBox('Priority: ', 'priority'),
        priority('Low', 'low-btn', items, title),
        priority('Medium', 'medium-btn', items, title),
        priority('High', 'high-btn', items, title),
    );
    return elem;
}
function editFunc(txt, className, title, items) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;        
    (0,_edit_folder_submit_edit__WEBPACK_IMPORTED_MODULE_2__["default"])(elem, title, items);
    return elem; 
} 
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elem, items, title) { 

    elem.addEventListener('click', () => {
        document.body.appendChild(createDiv());
        const box = document.querySelector('.edit-box');
        box.append(
            createBox('X', 'close'),
            createInputs('textarea', items.title, 'textarea'),
            createInputs('textarea', items.notes, 'textarea'),
            createInputs('textarea', items.description, 'textarea'),
            dateBox('due-date', items.dueDate),
            priorityBox('change-priority', items, title),
            editFunc('Edit', 'confirm-edit', title, items),
        );
        
        document.querySelector('.close').addEventListener('click', () => {
            const container = document.querySelector('.edit-container');
            document.body.removeChild(container);
        })
    });
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
/* harmony import */ var _click_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./click-edit */ "./src/js-folder/click-edit.js");
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
    (0,_click_edit__WEBPACK_IMPORTED_MODULE_3__["default"])(elem, items, title);
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

/***/ "./src/js-folder/edit-folder/submit-edit.js":
/*!**************************************************!*\
  !*** ./src/js-folder/edit-folder/submit-edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/api */ "./src/database/api.js");
/* harmony import */ var _todo_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-home */ "./src/js-folder/edit-folder/todo-home.js");
/* harmony import */ var _todo_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-add */ "./src/js-folder/edit-folder/todo-add.js");
/* harmony import */ var _calender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calender */ "./src/js-folder/edit-folder/calender.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elem, title, items, txtContent, value) {
    elem.addEventListener('click', () => {
        const api = [(0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getApi)()];
        const editContainer = document.querySelector('.edit-container');
        const textarea = document.querySelectorAll('.textarea');
        const myArr = ['title', 'notes', 'description']

        for (let index = 0; index < textarea.length; index++) {
            let objIndex = api[0][title].findIndex((obj) => {
                return obj['_id'] == items['_id']
            });
            api[0][title][objIndex][myArr[index]] = textarea[index].value;
            (0,_database_api__WEBPACK_IMPORTED_MODULE_0__.setApi)(api);
        }
        const changeDate = document.querySelector('.change-date').value;
        const date = new Date(changeDate);

        if (!!date.valueOf()) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const dateNo = date.getDate() +1;
            let index = api[0][title].findIndex((obj) => {
                return obj['_id'] == items['_id']
            });
            api[0][title][index]['dueDate'] = `${year} ${_calender__WEBPACK_IMPORTED_MODULE_3__["default"][month]} ${dateNo}`;
            (0,_database_api__WEBPACK_IMPORTED_MODULE_0__.setApi)(api);
        }
        document.body.removeChild(editContainer);
        if((0,_database_api__WEBPACK_IMPORTED_MODULE_0__.getPosition)() === 'home') {
            return (0,_todo_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
        return (0,_todo_add__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
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
/* harmony import */ var _css_folder_edit_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-folder/edit.css */ "./src/css-folder/edit.css");
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
/* harmony import */ var _image_folder_todo_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-folder/todo-favicon.png */ "./src/image-folder/todo-favicon.png");



function createImg() {
    const img = document.createElement('img');
    img.src = _image_folder_todo_favicon_png__WEBPACK_IMPORTED_MODULE_1__;
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

/***/ }),

/***/ "./src/image-folder/todo-favicon.png":
/*!*******************************************!*\
  !*** ./src/image-folder/todo-favicon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2761f7114fab0dbea21d.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQiwyRUFBTztBQUN2QixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZEQUFNO0FBQzlCLHdCQUF3QixpRUFBVTtBQUNsQyxRQUFRLGdFQUFTO0FBQ2pCLFFBQVEsOERBQVU7QUFDbEI7QUFDQSxZQUFZLDRFQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9kZXRhaWxzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9lZGl0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci90b3BiYXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9jb250ZW50LmNzcz9lMWNmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MtZm9sZGVyL2RldGFpbHMuY3NzP2I3YzQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvZWRpdC5jc3M/NmNiMCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9zaWRlYmFyLmNzcz9kZWVhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MtZm9sZGVyL3RvcGJhci5jc3M/ZTQ0NiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0YWJhc2UvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvY2xpY2stZGV0YWlsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvY2xpY2stZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NsaWNrSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9jcmVhdGUtZm9sZGVyL3N1Ym1pdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9kZWxldGUtZGV0YWlsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvY2FsZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9lZGl0LWZvbGRlci9zZXRFZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvc3VibWl0LWVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9lZGl0LWZvbGRlci90b2RvLWFkZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2VkaXQtZm9sZGVyL3RvZG8taG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL25ld0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9yZW5kZXJJY29uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL3RvcGJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZGFyazogIzMzMztcXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjAyLCAyMDIsIDIyMyk7XFxuICAgIC0tZGFyay1ibHVlOiByZ2IoMTA2LCAxMDYsIDE3OSk7XFxufSBcXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogN3B4IDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwsIC5lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDExMywgMTA1LCAyMTQpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwtYnRuLCAuZGF0ZSwgLmVkaXQtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBjb2xvcjogcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGNvbG9yOiByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuIHN2ZyB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsbDogcmdiKDE5NiwgMTMyLCAxMzIpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biBzdmcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG46aG92ZXIsIC5kZXRhaWwtYnRuOmhvdmVyLCAuZWRpdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLWJ0biB7XFxuICAgICAgICBwYWRkaW5nOiAwIDNweDtcXG4gICAgfVxcblxcbn0gXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG59IFxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4ge1xcbiAgICAgICAgd2lkdGg6IDE3cHg7XFxuICAgICAgICBoZWlnaHQ6IDE3cHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxufSBcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kYXRlIHtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbn0gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy1mb2xk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ZGFyazogIzMzMztcXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjAyLCAyMDIsIDIyMyk7XFxuICAgIC0tZGFyay1ibHVlOiByZ2IoMTA2LCAxMDYsIDE3OSk7XFxufSBcXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogN3B4IDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwsIC5lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDExMywgMTA1LCAyMTQpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwtYnRuLCAuZGF0ZSwgLmVkaXQtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBjb2xvcjogcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGNvbG9yOiByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuIHN2ZyB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsbDogcmdiKDE5NiwgMTMyLCAxMzIpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biBzdmcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG46aG92ZXIsIC5kZXRhaWwtYnRuOmhvdmVyLCAuZWRpdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLWJ0biB7XFxuICAgICAgICBwYWRkaW5nOiAwIDNweDtcXG4gICAgfVxcblxcbn0gXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG59IFxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4ge1xcbiAgICAgICAgd2lkdGg6IDE3cHg7XFxuICAgICAgICBoZWlnaHQ6IDE3cHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxufSBcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kYXRlIHtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNoZWNrLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC44KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZSAuY2xvc2U6bGFzdC1jaGlsZHtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogcmdiKDAsMCwwLDAuNyk7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZSAuY2xvc2U6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNDEsIDE0MSk7XFxuICAgIHBhZGRpbmc6IDEycHggMzBweDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveCAua2V5OmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveCAua2V5LCAudmFsdWV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94e1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleTpmaXJzdC1jaGlsZHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfSAgICBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy1mb2xkZXIvZGV0YWlscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0hBQXNIO0lBQ3RILGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5jaGVjay1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGUgLmNsb3NlOmxhc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IHJnYigwLDAsMCwwLjcpO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGUgLmNsb3NlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogcmdiKDE3NywgMTQxLCAxNDEpO1xcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleTpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleSwgLnZhbHVle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8ge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94IC5rZXk6Zmlyc3QtY2hpbGR7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH0gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5lZGl0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC40KTtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbn0gXFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2xvc2V7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLndhcm5pbmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCA2NiwgNjYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNsb3NlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLnRleHRhcmVhOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuXFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLnNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC50ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweCAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmR1ZS1kYXRlLCAuY2hhbmdlLXByaW9yaXR5LCAuY29uZmlybS1lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2hhbmdlLWRhdGUge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYig1NCwgNTQsIDEyNCk7XFxuICAgIGNvbG9yOiByZ2IoNTIsIDUyLCAxOTYpO1xcbn1cXG4ubG93LWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuMik7XFxufVxcbi5tZWRpdW0tYnRuIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuMik7XFxufVxcbi5oaWdoLWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjIpO1xcbn1cXG4ubG93LWJ0bjpob3ZlciwgLm1lZGl1bS1idG46aG92ZXIsIC5oaWdoLWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuNCk7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNvbmZpcm0tZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODksIDg5LCAxOTkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNvbmZpcm0tZWRpdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3gge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICB9IFxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC50ZXh0YXJlYSB7XFxuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XFxuICAgIH1cXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2hhbmdlLXByaW9yaXR5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNoYW5nZS1wcmlvcml0eSAucHJpb3JpdHkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgfVxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jb25maXJtLWVkaXQge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgLyogcGFkZGluZzogbm9uZTsgKi9cXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy1mb2xkZXIvZWRpdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix3RUFBd0U7QUFDNUU7QUFDQTtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZWRpdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuNCk7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3gge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG59IFxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNsb3Nle1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC53YXJuaW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMywgNjYsIDY2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jbG9zZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC50ZXh0YXJlYTpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcblxcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5zZWxlY3Qge1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIG1hcmdpbjogMjBweCAwIDEwcHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAudGV4dGFyZWEge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbjogMjBweCAwIDEwcHggMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5kdWUtZGF0ZSwgLmNoYW5nZS1wcmlvcml0eSwgLmNvbmZpcm0tZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNoYW5nZS1kYXRlIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNTQsIDU0LCAxMjQpO1xcbiAgICBjb2xvcjogcmdiKDUyLCA1MiwgMTk2KTtcXG59XFxuLmxvdy1idG4ge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjIpO1xcbn1cXG4ubWVkaXVtLWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjIpO1xcbn1cXG4uaGlnaC1idG4ge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC4yKTtcXG59XFxuLmxvdy1idG46aG92ZXIsIC5tZWRpdW0tYnRuOmhvdmVyLCAuaGlnaC1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjQpO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jb25maXJtLWVkaXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDg5LCA4OSwgMTk5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jb25maXJtLWVkaXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgfSBcXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAudGV4dGFyZWEge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xcbiAgICB9XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNoYW5nZS1wcmlvcml0eSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jaGFuZ2UtcHJpb3JpdHkgLnByaW9yaXR5IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIH1cXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY29uZmlybS1lZGl0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIC8qIHBhZGRpbmc6IG5vbmU7ICovXFxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIwMiwgMjAyLCAyMjMpO1xcbiAgICAtLWxpZ2h0LWRhcms6IHJnYigwLDAsMCwwLjgpO1xcbn0gXFxuXFxuLnNpZGViYXIge1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMjM4KTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG4uaG9tZTpudGgtY2hpbGQoMSksIC5wcm9qZWN0Om50aC1jaGlsZCgyKSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbi5ob21lOmhvdmVyLCAucHJvamVjdDpob3ZlciwgLmNhdGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNiZGI3Yjc7XFxufVxcbi5jYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMThweCAwIDE4cHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDIzOCk7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gICAgLmhvbWUsIC5wcm9qZWN0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuY2F0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLWZvbGRlci9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsYUFBYTtRQUNiLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIwMiwgMjAyLCAyMjMpO1xcbiAgICAtLWxpZ2h0LWRhcms6IHJnYigwLDAsMCwwLjgpO1xcbn0gXFxuXFxuLnNpZGViYXIge1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMjM4KTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG4uaG9tZTpudGgtY2hpbGQoMSksIC5wcm9qZWN0Om50aC1jaGlsZCgyKSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbi5ob21lOmhvdmVyLCAucHJvamVjdDpob3ZlciwgLmNhdGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNiZGI3Yjc7XFxufVxcbi5jYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMThweCAwIDE4cHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDIzOCk7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gICAgLmhvbWUsIC5wcm9qZWN0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuY2F0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxubmF2IHN2ZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAudG9wYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5uYXYgLnRvcGJhciAudG9wYmFyLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgbmF2IC50b3BiYXIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgIG5hdiBzdmcge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgbmF2IC50b3BiYXIgLnRvcGJhci1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLWZvbGRlci90b3BiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDREQUE0RDtBQUNoRTtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxubmF2IHN2ZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAudG9wYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5uYXYgLnRvcGJhciAudG9wYmFyLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgbmF2IC50b3BiYXIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgIG5hdiBzdmcge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgbmF2IC50b3BiYXIgLnRvcGJhci1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMzMzO1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNlZWU7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbiAgICAtLXNpZGViYXJoZWlnaHQ6IDE3NXB4O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufSBcXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB9XFxuICAgIGJvZHkge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICAgIH1cXG4gICAgLm5hdiwgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgfVxcbiAgICAuc2lkZWJhcntcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tc2lkZWJhcmhlaWdodDogMTc1cHg7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59IFxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICA6cm9vdCB7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG4gICAgYm9keSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcXG4gICAgfVxcbiAgICAubmF2LCAuY29udGVudCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICB9XFxuICAgIC5zaWRlYmFye1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXRhaWxzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGV0YWlscy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3BiYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3BiYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxuY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgYXRob21lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc2l0aW9uJyk7XG4gICAgcmV0dXJuIGF0aG9tZTtcbn1cbmNvbnN0IHNldFBvc2l0aW9uID0gKGRhdGEpID0+IHsgICAgICAgIFxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zaXRpb24nLCBkYXRhKTtcbn1cbmNvbnN0IGdldEFwaSA9ICgpID0+IHtcbiAgICBjb25zdCBhdGhvbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJykpO1xuICAgIHJldHVybiBhdGhvbWVbMF07XG59XG5jb25zdCBzZXRBcGkgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kbycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn1cblxuXG5leHBvcnQge2dldEFwaSwgc2V0QXBpLCBnZXRQb3NpdGlvbiwgc2V0UG9zaXRpb259OyAiLCJpbXBvcnQgJy4uL2Nzcy1mb2xkZXIvZGV0YWlscy5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVEaXYodHh0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWwuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXR4dCcsIGNsYXNzTmFtZSk7XG4gICAgZGV0YWlsLnRleHRDb250ZW50ID0gdHh0O1xuICAgIFxuICAgIHJldHVybiBkZXRhaWxcbn1cbmZ1bmN0aW9uIHRpdGxlRGl2KGl0ZW1zKSB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ2RldGFpbC10aXRsZScpO1xuICAgIGJveC5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZURpdihgJHtpdGVtcy50aXRsZX1gKSxcbiAgICAgICAgY3JlYXRlRGl2KCdYJywgJ2Nsb3NlJylcbiAgICApXG5cbiAgICByZXR1cm4gYm94O1xufVxuZnVuY3Rpb24gY3JlYXRlQm9keURpdihrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ2RldGFpbC1ib3gnKTtcbiAgICBib3guYXBwZW5kKFxuICAgICAgICBjcmVhdGVEaXYoa2V5LCAna2V5JyksXG4gICAgICAgIGNyZWF0ZURpdih2YWx1ZSwgJ3ZhbHVlJylcbiAgICApXG4gICAgcmV0dXJuIGJveFxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRldGFpbEJ0biwgaXRlbXMpIHtcbiAgICBkZXRhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbEJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbEJnLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRldGFpbHMnKTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtaW5mbycpO1xuICAgICAgICBkZXRhaWxCZy5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmQoXG4gICAgICAgICAgICB0aXRsZURpdihpdGVtcyksXG4gICAgICAgICAgICBjcmVhdGVCb2R5RGl2KCdQcm9qZWN0OiAnLCBpdGVtcy5kZXNjcmlwdGlvbiksXG4gICAgICAgICAgICBjcmVhdGVCb2R5RGl2KCdEdWUgRGF0ZTogJywgaXRlbXMuZHVlRGF0ZSksXG4gICAgICAgICAgICBjcmVhdGVCb2R5RGl2KCdQcmlvcml0eTogJywgaXRlbXMucHJpb3JpdHkpLFxuICAgICAgICAgICAgY3JlYXRlQm9keURpdignRGV0YWlsczogJywgaXRlbXMubm90ZXMpLFxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRldGFpbEJnKTtcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICAgICAgaWYoY2xvc2UpIHtcbiAgICAgICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLWRldGFpbHMnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRldGFpbEJnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxufSIsImltcG9ydCAnLi4vY3NzLWZvbGRlci9lZGl0LmNzcyc7XG5pbXBvcnQgc2V0RWRpdCBmcm9tICcuL2VkaXQtZm9sZGVyL3NldEVkaXQnO1xuaW1wb3J0IHN1Ym1pdEVkaXQgZnJvbSAnLi9lZGl0LWZvbGRlci9zdWJtaXQtZWRpdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0cyhjbGFzc05hbWUsIGl0ZW0sIHR5cGUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnZhbHVlID0gaXRlbTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURpdigpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKCdlZGl0LWJveCcpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoYm94KTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJveCh0eHQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0O1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlRGF0ZShjbGFzc05hbWUsIGl0ZW0sIHR5cGUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbGVtLnR5cGUgPSAnZGF0ZSc7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBkYXRlQm94KGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQm94KCdEdWUgRGF0ZTogJyksXG4gICAgICAgIGNyZWF0ZURhdGUoJ2NoYW5nZS1kYXRlJyksXG4gICAgKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIHByaW9yaXR5KHR4dCwgY2xhc3NOYW1lLCBpdGVtcywgdGl0bGUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IHR4dDtcbiAgICBzZXRFZGl0KGVsZW0sIHRpdGxlLCBpdGVtcywgICd0ZXh0Q29udGVudCcsICdwcmlvcml0eScpO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gcHJpb3JpdHlCb3goY2xhc3NOYW1lLCBpdGVtcywgdGl0bGUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUJveCgnUHJpb3JpdHk6ICcsICdwcmlvcml0eScpLFxuICAgICAgICBwcmlvcml0eSgnTG93JywgJ2xvdy1idG4nLCBpdGVtcywgdGl0bGUpLFxuICAgICAgICBwcmlvcml0eSgnTWVkaXVtJywgJ21lZGl1bS1idG4nLCBpdGVtcywgdGl0bGUpLFxuICAgICAgICBwcmlvcml0eSgnSGlnaCcsICdoaWdoLWJ0bicsIGl0ZW1zLCB0aXRsZSksXG4gICAgKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGVkaXRGdW5jKHR4dCwgY2xhc3NOYW1lLCB0aXRsZSwgaXRlbXMpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IHR4dDsgICAgICAgIFxuICAgIHN1Ym1pdEVkaXQoZWxlbSwgdGl0bGUsIGl0ZW1zKTtcbiAgICByZXR1cm4gZWxlbTsgXG59IFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbSwgaXRlbXMsIHRpdGxlKSB7IFxuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVEaXYoKSk7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJveCcpO1xuICAgICAgICBib3guYXBwZW5kKFxuICAgICAgICAgICAgY3JlYXRlQm94KCdYJywgJ2Nsb3NlJyksXG4gICAgICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHRhcmVhJywgaXRlbXMudGl0bGUsICd0ZXh0YXJlYScpLFxuICAgICAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsIGl0ZW1zLm5vdGVzLCAndGV4dGFyZWEnKSxcbiAgICAgICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCBpdGVtcy5kZXNjcmlwdGlvbiwgJ3RleHRhcmVhJyksXG4gICAgICAgICAgICBkYXRlQm94KCdkdWUtZGF0ZScsIGl0ZW1zLmR1ZURhdGUpLFxuICAgICAgICAgICAgcHJpb3JpdHlCb3goJ2NoYW5nZS1wcmlvcml0eScsIGl0ZW1zLCB0aXRsZSksXG4gICAgICAgICAgICBlZGl0RnVuYygnRWRpdCcsICdjb25maXJtLWVkaXQnLCB0aXRsZSwgaXRlbXMpLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdmcnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IHNpZGViYXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyBcbiAgICAgICAgPyAnbm9uZScgOiAnYmxvY2snO1xuXG4gICAgfSlcbn0iLCJpbXBvcnQgJy4uL2Nzcy1mb2xkZXIvY29udGVudC5jc3MnO1xuaW1wb3J0IGNsaWNrRGV0YWlsIGZyb20gJy4vY2xpY2stZGV0YWlsJztcbmltcG9ydCBzZXRFZGl0IGZyb20gJy4vZWRpdC1mb2xkZXIvc2V0RWRpdCc7XG5pbXBvcnQgY2xpY2tFZGl0IGZyb20gJy4vY2xpY2stZWRpdCc7XG5pbXBvcnQgZGVsZXRlRGV0YWlsIGZyb20gJy4vZGVsZXRlLWRldGFpbCc7XG5pbXBvcnQgcmVuZGVySWNvbiBmcm9tICcuL3JlbmRlckljb24nO1xuXG5mdW5jdGlvbiBjcmVhdGVDaGVja2JveChpdGVtcywgdGl0bGUpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3gubmFtZSA9ICdpc3JlYWQnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBpdGVtc1snY2hlY2tsaXN0J107XG4gICAgc2V0RWRpdChjaGVja2JveCwgdGl0bGUsIGl0ZW1zLCAnY2hlY2tlZCcsICdjaGVja2xpc3QnKTtcbiAgICByZXR1cm4gY2hlY2tib3g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnRpZXModHh0LCBjbGFzc05hbWUsIGl0ZW1zKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScsIGNsYXNzTmFtZSk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IGl0ZW1zWyd0aXRsZSddO1xuICAgIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBkZXRhaWxCdXR0b24odHh0LCBjbGFzc05hbWUsIGl0ZW1zKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZGV0YWlsJyk7XG4gICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGRldGFpbCk7XG4gICAgZGV0YWlsLnRleHRDb250ZW50ID0gdHh0O1xuICAgIGNsaWNrRGV0YWlsKGRldGFpbCwgaXRlbXMpO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gZGF0ZUJ1dHRvbih0eHQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2RldGFpbCcpO1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChkZXRhaWwpO1xuICAgIGRldGFpbC50ZXh0Q29udGVudCA9IHR4dDtcbiAgICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZWRpdEJ1dHRvbih0eHQsIGNsYXNzTmFtZSwgaXRlbXMsIHRpdGxlKSB7XG4gICAgY29uc3QgbGluayA9IFwiTTUgMjJxLS44MjUgMC0xLjQxMy0uNTg4VDMgMjBWNnEwLS44MjUuNTg4LTEuNDEzVDUgNGgxVjNxMC0uNDI1LjI4OC0uNzEzVDcgMnEuNDI1IDAgLjcxMy4yODhUOCAzdjFoOFYzcTAtLjQyNS4yODgtLjcxM1QxNyAycS40MjUgMCAuNzEzLjI4OFQxOCAzdjFoMXEuODI1IDAgMS40MTMuNTg4VDIxIDZ2NXEwIC40MjUtLjI4OC43MTNUMjAgMTJxLS40MjUgMC0uNzEzLS4yODhUMTkgMTF2LTFINXYxMGg2cS40MjUgMCAuNzEzLjI4OFQxMiAyMXEwIC40MjUtLjI4OC43MTNUMTEgMjJINVptMTcuMTI1LTVMMjAgMTQuODc1bC43MjUtLjcyNXEuMjc1LS4yNzUuNy0uMjc1dC43LjI3NWwuNzI1LjcyNXEuMjc1LjI3NS4yNzUuN3QtLjI3NS43bC0uNzI1LjcyNVpNMTUuNyAyM2gtMS4ycS0uMiAwLS4zNS0uMTVUMTQgMjIuNXYtMS4ycTAtLjIuMDc1LS4zODh0LjIyNS0uMzM3bDUtNWwyLjEyNSAyLjEyNWwtNSA1cS0uMTUuMTUtLjMzOC4yMjVUMTUuNyAyM1pNNSA4aDE0VjZINXYyWm0wIDBWNnYyWlwiO1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVkaXQuYXBwZW5kQ2hpbGQocmVuZGVySWNvbihsaW5rLCAnMjQnLCAnMjQnKSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICBjbGlja0VkaXQoZWxlbSwgaXRlbXMsIHRpdGxlKTtcbiAgICByZXR1cm4gZWxlbTsgXG59IFxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKGluZGV4LCB0eHQsIGNsYXNzTmFtZSwgaXRlbXMsIHRpdGxlKSB7XG4gICAgY29uc3QgbGluaz0gXCJtOS40IDE2LjVsMi42LTIuNmwyLjYgMi42bDEuNC0xLjRsLTIuNi0yLjZMMTYgOS45bC0xLjQtMS40bC0yLjYgMi42bC0yLjYtMi42TDggOS45bDIuNiAyLjZMOCAxNS4xbDEuNCAxLjRaTTcgMjFxLS44MjUgMC0xLjQxMy0uNTg4VDUgMTlWNkg0VjRoNVYzaDZ2MWg1djJoLTF2MTNxMCAuODI1LS41ODggMS40MTNUMTcgMjFIN1pNMTcgNkg3djEzaDEwVjZaTTcgNnYxM1Y2WlwiO1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICAgIGRlbGV0ZUJ0bi5pZCA9IGluZGV4O1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChyZW5kZXJJY29uKGxpbmssICcyNCcsICcyNCcpKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgZGVsZXRlRGV0YWlsKGVsZW0sIGl0ZW1zLCB0aXRsZSk7XG4gICAgcmV0dXJuIGVsZW07XG59IFxuZnVuY3Rpb24gY3JlYXRlRGl2KGluZGV4LCBjbGFzc05hbWUsIGl0ZW1zLCB0aXRsZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQ2hlY2tib3goaXRlbXMsIHRpdGxlKSxcbiAgICAgICAgY3JlYXRlUHJvcGVydGllcyhpbmRleCwgJ2tleScsIGl0ZW1zKSxcbiAgICAgICAgZGV0YWlsQnV0dG9uKCdEZXRhaWxzJywgJ2RldGFpbC1idG4nLCBpdGVtcyksXG4gICAgICAgIGRhdGVCdXR0b24oXG4gICAgICAgICAgICBpdGVtc1snZHVlRGF0ZSddLnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICBpdGVtc1snZHVlRGF0ZSddLmluZGV4T2YoJyAnKSArIDEpLCBcbiAgICAgICAgICAgICAgICAnZGF0ZSdcbiAgICAgICAgKSxcbiAgICAgICAgZWRpdEJ1dHRvbignRWRpdCcsICdlZGl0LWJ0bicsIGl0ZW1zLCB0aXRsZSksXG4gICAgICAgIGRlbGV0ZUJ1dHRvbihpbmRleCwgJ0RlbGV0ZScsICdkZWxldGUnLCBpdGVtcywgdGl0bGUpLFxuICAgICk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjb250ZW50KGl0ZW1zKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlRGl2KGl0ZW1zW2luZGV4XVsnX2lkJ10sICd0b2RvJywgaXRlbXNbaW5kZXhdLCBpdGVtc1tpbmRleF1bJ29ianRpdGxlJ10pXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5leHBvcnQgZGVmYXVsdCBjb250ZW50OyIsImltcG9ydCB7IGdldEFwaSwgc2V0QXBpLCBnZXRQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9hcGlcIjtcbmltcG9ydCB0b2RvSG9tZSBmcm9tIFwiLi4vZWRpdC1mb2xkZXIvdG9kby1ob21lXCI7XG5pbXBvcnQgdG9kb0FkZCBmcm9tIFwiLi4vZWRpdC1mb2xkZXIvdG9kby1hZGRcIjtcbmltcG9ydCBjYWxlbmRlciBmcm9tIFwiLi4vZWRpdC1mb2xkZXIvY2FsZW5kZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybmluZycpO1xuICAgICAgICBsZXQgc3RhdGUgPSBbZ2V0QXBpKCldO1xuICAgICAgICBjb25zdCBhcnIgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ25vdGVzJ107XG4gICAgICAgIGxldCB0b2RvT2JqID0ge307XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdCcpO1xuICAgICAgICB0b2RvT2JqWydfaWQnXSA9IHN0YXRlWzBdW3NlbGVjdC52YWx1ZV0ubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRhcmVhJyk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZXh0YXJlYS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0ZXh0YXJlYVtpbmRleF0udmFsdWUubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICB3YXJuaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9PYmpbYXJyW2luZGV4XV0gPSB0ZXh0YXJlYVtpbmRleF0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBteURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLWRhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG15RGF0ZSk7XG4gICAgICAgIGlmICghIWRhdGUudmFsdWVPZigpKSB7XG4gICAgICAgICAgICB0b2RvT2JqWydkdWVEYXRlJ10gPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9ICR7Y2FsZW5kZXJbZGF0ZS5nZXRNb250aCgpXX0gJHtkYXRlLmdldERhdGUoKSsxfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9PYmpbJ2R1ZURhdGUnXSA9ICcwMDAwIEphbiAwMCc7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb09ialsncHJpb3JpdHknXSA9ICdMb3cnO1xuICAgICAgICB0b2RvT2JqWydjaGVja2xpc3QnXSA9IGZhbHNlO1xuICAgICAgICB0b2RvT2JqWydvYmp0aXRsZSddID0gc2VsZWN0LnZhbHVlO1xuICAgICAgICBzdGF0ZVswXVtzZWxlY3QudmFsdWVdLnB1c2godG9kb09iaik7XG4gICAgICAgIHNldEFwaShzdGF0ZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWRpdENvbnRhaW5lcik7XG4gICAgICAgIGlmKGdldFBvc2l0aW9uKCkgPT09ICdob21lJykge1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9Ib21lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG9BZGQoc2VsZWN0LnZhbHVlKTtcbiAgICB9KVxufSIsImltcG9ydCB7IGdldEFwaSwgc2V0QXBpLCBnZXRQb3NpdGlvbiB9IGZyb20gXCIuLi9kYXRhYmFzZS9hcGlcIjtcbmltcG9ydCB0b2RvSG9tZSBmcm9tIFwiLi9lZGl0LWZvbGRlci90b2RvLWhvbWVcIjtcbmltcG9ydCB0b2RvQWRkIGZyb20gXCIuL2VkaXQtZm9sZGVyL3RvZG8tYWRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW0sIGl0ZW1zLCB0aXRsZSkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IFtnZXRBcGkoKV07XG5cbiAgICAgICAgY29uc3QgbmV3T2JqID0gc3RhdGVbMF1bdGl0bGVdLmZpbHRlcihcbiAgICAgICAgICAgIChvYmopID0+IG9ialsnX2lkJ10gIT09IGl0ZW1zWydfaWQnXVxuICAgICAgICApO1xuICAgICAgICBzdGF0ZVswXVt0aXRsZV0gPSBuZXdPYmo7XG4gICAgICAgIHNldEFwaShzdGF0ZSk7XG4gICAgICAgIGlmKGdldFBvc2l0aW9uKCkgPT09ICdob21lJykge1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9Ib21lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG9BZGQodGl0bGUpO1xuICAgIH0pO1xufSIsIlxuXG5leHBvcnQgZGVmYXVsdCAgW1xuICAgICdKYW4nLCBcbiAgICAnRmViJywgXG4gICAgJ01hcicsIFxuICAgICdBcHInLCBcbiAgICAnTWF5JywgXG4gICAgJ0p1bicsIFxuICAgICdKdWx5JywgXG4gICAgJ0F1ZycsIFxuICAgICdTZXAnLCBcbiAgICAnT2N0JywgXG4gICAgJ05vdicsIFxuICAgICdEZWMnXG5dIiwiaW1wb3J0IHsgZ2V0QXBpLCBzZXRBcGkgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW0sIHRpdGxlLCBpdGVtcywgdHh0Q29udGVudCwgdmFsdWUgKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXBpID0gW2dldEFwaSgpXTtcbiAgICAgICAgbGV0IGluZGV4ID0gYXBpWzBdW3RpdGxlXS5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9ialsnX2lkJ10gPT0gaXRlbXNbJ19pZCddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwaVswXVt0aXRsZV1baW5kZXhdW3ZhbHVlXSA9IGVsZW1bdHh0Q29udGVudF07XG4gICAgICAgIHNldEFwaShhcGkpO1xuXG4gICAgfSk7XG59ICIsImltcG9ydCB7IGdldEFwaSwgc2V0QXBpLCBnZXRQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9hcGlcIjtcbmltcG9ydCB0b2RvSG9tZSBmcm9tIFwiLi90b2RvLWhvbWVcIjtcbmltcG9ydCB0b2RvQWRkIGZyb20gXCIuL3RvZG8tYWRkXCI7XG5pbXBvcnQgY2FsZW5kZXIgZnJvbSBcIi4vY2FsZW5kZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtLCB0aXRsZSwgaXRlbXMsIHR4dENvbnRlbnQsIHZhbHVlKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXBpID0gW2dldEFwaSgpXTtcbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0YXJlYScpO1xuICAgICAgICBjb25zdCBteUFyciA9IFsndGl0bGUnLCAnbm90ZXMnLCAnZGVzY3JpcHRpb24nXVxuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZXh0YXJlYS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBvYmpJbmRleCA9IGFwaVswXVt0aXRsZV0uZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqWydfaWQnXSA9PSBpdGVtc1snX2lkJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXBpWzBdW3RpdGxlXVtvYmpJbmRleF1bbXlBcnJbaW5kZXhdXSA9IHRleHRhcmVhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIHNldEFwaShhcGkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLWRhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGNoYW5nZURhdGUpO1xuXG4gICAgICAgIGlmICghIWRhdGUudmFsdWVPZigpKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICBjb25zdCBkYXRlTm8gPSBkYXRlLmdldERhdGUoKSArMTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGFwaVswXVt0aXRsZV0uZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqWydfaWQnXSA9PSBpdGVtc1snX2lkJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXBpWzBdW3RpdGxlXVtpbmRleF1bJ2R1ZURhdGUnXSA9IGAke3llYXJ9ICR7Y2FsZW5kZXJbbW9udGhdfSAke2RhdGVOb31gO1xuICAgICAgICAgICAgc2V0QXBpKGFwaSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlZGl0Q29udGFpbmVyKTtcbiAgICAgICAgaWYoZ2V0UG9zaXRpb24oKSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0hvbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb0FkZCh0aXRsZSk7XG4gICAgfSk7ICBcbn0gICAiLCJpbXBvcnQgeyBnZXRBcGksIGdldFBvc2l0aW9uLCBzZXRQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9hcGlcIjtcbmltcG9ydCBjb250ZW50IGZyb20gXCIuLi9jb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgY29uc3QgY29udGVudGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250ZW50Y29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNvbnRlbnRjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudChnZXRBcGkoKVt0aXRsZV0pKTtcbiAgICBzZXRQb3NpdGlvbih0aXRsZSk7XG59IiwiaW1wb3J0IHsgZ2V0QXBpLCBzZXRQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9hcGlcIjtcbmltcG9ydCAnLi4vLi4vY3NzLWZvbGRlci9jb250ZW50LmNzcyc7XG5pbXBvcnQgY29udGVudCBmcm9tIFwiLi4vY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0aXRsZSkge1xuICAgIGNvbnN0IGNhdEFyciA9IFsnYXRob21lJywgJ3dvcmsnLCAnc2Nob29sJywgJ3BsYXlncm91bmQnXTtcbiAgICBjb25zdCBzdGF0ZSA9IFtcbiAgICAgICAgLi4uZ2V0QXBpKClbY2F0QXJyWzBdXSxcbiAgICAgICAgLi4uZ2V0QXBpKClbY2F0QXJyWzFdXSxcbiAgICAgICAgLi4uZ2V0QXBpKClbY2F0QXJyWzJdXSxcbiAgICAgICAgLi4uZ2V0QXBpKClbY2F0QXJyWzNdXSxcbiAgICBdO1xuICAgIGxldCBzaHVmZmxlZCA9IHN0YXRlLnNvcnQoKGEsIGIpID0+IGEudGl0bGUgPiBiLnRpdGxlKTtcblxuICAgIGNvbnN0IGNvbnRlbnRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGVudGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgICBjb250ZW50Y29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQoc2h1ZmZsZWQpKTtcbiAgICBzZXRQb3NpdGlvbignaG9tZScpO1xufSBcbiAiLCJpbXBvcnQgJy4uL2Nzcy1mb2xkZXIvZWRpdC5jc3MnO1xuaW1wb3J0IHN1Ym1pdENyZWF0ZSBmcm9tICcuL2NyZWF0ZS1mb2xkZXIvc3VibWl0LWNyZWF0ZSc7XG5cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKHZhbHVlLCB0eHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9ucy52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbnMudGV4dCA9IHR4dDtcbiAgICByZXR1cm4gb3B0aW9ucztcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdCgpIHtcbiAgICBjb25zdCBjYXRBcnIgPSBbJ2F0aG9tZScsICd3b3JrJywgJ3NjaG9vbCcsICdwbGF5Z3JvdW5kJ107XG4gICAgY29uc3QgY2F0VGV4dCA9IFsnQXQgSG9tZScsICdXb3JrJywgJ1NjaG9vbCcsICdQbGF5Z3JvdW5kJ107XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0Jyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhdEFyci5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihjYXRBcnJbaW5kZXhdLCBjYXRUZXh0W2luZGV4XSkpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0cyhjbGFzc05hbWUsIHR5cGUsIGRlZmF1bHRUZXh0KSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5wbGFjZWhvbGRlciA9IGRlZmF1bHRUZXh0O1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlRGl2KCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ2VkaXQtYm94Jyk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChib3gpO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlQm94KHR4dCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVEYXRlKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsZW0udHlwZSA9ICdkYXRlJztcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGRhdGVCb3goY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uYXBwZW5kKFxuICAgICAgICBjcmVhdGVCb3goJ0R1ZSBEYXRlOiAnKSxcbiAgICAgICAgY3JlYXRlRGF0ZSgnY2hhbmdlLWRhdGUnKSxcbiAgICApO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlRnVuYyh0eHQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnN0eWxlLndpZHRoID0gJzkwcHgnO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7ICAgIFxuICAgIHN1Ym1pdENyZWF0ZShlbGVtKTtcbiAgICByZXR1cm4gZWxlbTsgXG59ICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW0pIHsgXG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZURpdigpKTtcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYm94Jyk7XG4gICAgICAgIGJveC5hcHBlbmQoXG4gICAgICAgICAgICBjcmVhdGVCb3goJ1gnLCAnY2xvc2UnKSxcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdCgpLFxuICAgICAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsICd0ZXh0YXJlYScsICdUaXRsZScpLFxuICAgICAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsICd0ZXh0YXJlYScsICdQcm9qZWN0JyksXG4gICAgICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHRhcmVhJywgJ3RleHRhcmVhJywgJ0RldGFpbHMnKSxcbiAgICAgICAgICAgIGNyZWF0ZUJveCgnV2FybmluZzogY2hhcmFjdGVyIG11c3QgYmUgZ3JlYXRlciB0aGF0IDInLCAnd2FybmluZycpLFxuICAgICAgICAgICAgZGF0ZUJveCgnZHVlLWRhdGUnKSxcbiAgICAgICAgICAgIGNyZWF0ZUZ1bmMoJ0NyZWF0ZScsICdjb25maXJtLWVkaXQnKSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH0pXG4gICAgfSk7XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNoYXBlLCBzaXplMSwgc2l6ZTIsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcbiAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHtzaXplMX0gJHtzaXplMn1gKTtcbiAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBzaGFwZSk7XG4gICAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG4gICAgcmV0dXJuIGljb25Tdmc7XG59IiwiaW1wb3J0ICcuLi9jc3MtZm9sZGVyL3NpZGViYXIuY3NzJztcblxuZnVuY3Rpb24gc2lkZWJhckRpdiAodHh0LCBjbGFzc05hbWUsIHRpdGxlKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgZWxlbS50aXRsZSA9IHRpdGxlO1xuICAgIHJldHVybiBlbGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBzaWRlYmFyLmFwcGVuZChcbiAgICAgICAgc2lkZWJhckRpdignSG9tZScsICdob21lJywgJ2hvbWUnKSxcbiAgICAgICAgc2lkZWJhckRpdignUHJvamVjdCcsICdwcm9qZWN0JywgJ25ldy1wcm9qZWN0JyksXG4gICAgICAgIHNpZGViYXJEaXYoJ0F0IEhvbWUnLCAnY2F0ZScsICdhdGhvbWUnKSxcbiAgICAgICAgc2lkZWJhckRpdignV29yaycsICdjYXRlJywgJ3dvcmsnKSxcbiAgICAgICAgc2lkZWJhckRpdignU2Nob29sJywgJ2NhdGUnLCAnc2Nob29sJyksXG4gICAgICAgIHNpZGViYXJEaXYoJ1BsYXlncm91bmQnLCAnY2F0ZScsICdwbGF5Z3JvdW5kJyksXG4gICAgKTtcbn1cbiIsImltcG9ydCAnLi4vY3NzLWZvbGRlci90b3BiYXIuY3NzJztcbmltcG9ydCBpbWFnZSBmcm9tICcuLi9pbWFnZS1mb2xkZXIvdG9kby1mYXZpY29uLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZygpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gaW1hZ2U7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3RvcGJhci1pY29uJyk7XG4gICAgcmV0dXJuIGltZztcbn1cblxuIGZ1bmN0aW9uIHRvcGJhcih0eHQpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCd0b3BiYXInKTtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0O1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKCkpXG4gICAgcmV0dXJuIGVsZW07XG59IFxuZXhwb3J0IGRlZmF1bHQgdG9wYmFyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgdG9wYmFyIGZyb20gJy4vanMtZm9sZGVyL3RvcGJhcic7XG5pbXBvcnQgbWFwQ2F0RnVuYyBmcm9tICcuL2pzLWZvbGRlci9zaWRlYmFyJztcbmltcG9ydCB0b2RvSG9tZSBmcm9tICcuL2pzLWZvbGRlci9lZGl0LWZvbGRlci90b2RvLWhvbWUnO1xuaW1wb3J0IG5ld0NvbnRlbnQgZnJvbSAnLi9qcy1mb2xkZXIvbmV3Q29udGVudCc7XG5pbXBvcnQgdG9kb0FkZCBmcm9tICcuL2pzLWZvbGRlci9lZGl0LWZvbGRlci90b2RvLWFkZCc7XG5pbXBvcnQgcmVuZGVySWNvbiBmcm9tICcuL2pzLWZvbGRlci9yZW5kZXJJY29uJztcbmltcG9ydCBjbGlja0ljb24gZnJvbSAnLi9qcy1mb2xkZXIvY2xpY2tJY29uJztcblxuXG5jbGFzcyBUb2RvIHtcbiAgICBjcmVhdGVEaXYoZWxlbVR5cGUsIGNsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtVHlwZSk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgXG4gICAgY29udGVudEZ1bmMgPSAoKSA9PiB7ICAgICAgICBcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lJyk7XG4gICAgICAgIGhvbWUuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvZG9Ib21lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgICAgICBuZXdDb250ZW50KHByb2plY3QpO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGUnKTtcbiAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kb0FkZChidG4udGl0bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGFwcGVuZEJvZHkoKSB7XG4gICAgICAgIGNvbnN0IGQ9XCJNMTUzNiAxMDg4djEyOHEwIDI2LTE5IDQ1dC00NSAxOUg2NHEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDE0MDhxMjYgMCA0NSAxOXQxOSA0NXptMC01MTJ2MTI4cTAgMjYtMTkgNDV0LTQ1IDE5SDY0cS0yNiAwLTQ1LTE5VDAgNzA0VjU3NnEwLTI2IDE5LTQ1dDQ1LTE5aDE0MDhxMjYgMCA0NSAxOXQxOSA0NXptMC01MTJ2MTI4cTAgMjYtMTkgNDV0LTQ1IDE5SDY0cS0yNiAwLTQ1LTE5VDAgMTkyVjY0cTAtMjYgMTktNDVUNjQgMGgxNDA4cTI2IDAgNDUgMTl0MTkgNDV6XCJcbiAgICAgICAgY29uc3Qgc2l6ZTEgPSAnMTUzNic7XG4gICAgICAgIGNvbnN0IHNpemUyID0gJzEyODAnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGl2KCduYXYnLCAnbmF2JyksIFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEaXYoJ2RpdicsICdzaWRlYmFyJyksXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURpdignZGl2JywgJ2NvbnRlbnQnKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQodG9wYmFyKCdUb2RvIExpc3QgQXBwJykpO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQocmVuZGVySWNvbihkLCBzaXplMSwgc2l6ZTIsICdzdmcnKSk7XG4gICAgICAgIGNsaWNrSWNvbigpO1xuICAgICAgICBtYXBDYXRGdW5jKCk7XG4gICAgICAgIG9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9Ib21lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZW50RnVuYygpO1xuXG4gICAgfVxufVxuY29uc3QgdG9kbyA9IG5ldyBUb2RvKCk7XG50b2RvLmFwcGVuZEJvZHkoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9