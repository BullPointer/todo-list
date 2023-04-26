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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --light-dark: rgb(0,0,0,0.8);\n} \n\n.sidebar {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    align-items: center;\n    color: white;\n    /* background: white; */\n    background: rgb(122, 122, 238);\n}\n\n.home {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    opacity: 0.9;\n    padding: 10px 0;\n    font-size: 20px;\n    background: var(--light-dark);\n}\n.home:nth-child(1), .project:nth-child(2) {\n    opacity: 0.7;\n    border-bottom: 2px solid white;\n}\n.project {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    font-size: 20px;\n    opacity: 0.9;\n    padding: 10px 0;\n    background: var(--light-dark);\n}\n.home:hover, .project:hover, .cate:hover {\n    cursor: pointer;\n    background: #bdb7b7;\n}\n.cate {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    float: right;\n    width: 100%;\n    height: 8px;\n    font-size: 18px;\n    opacity: 0.9;\n    padding: 18px 0 18px 0;\n    background: var(--light-dark);\n}\n@media only screen and (max-width: 700px){\n    .sidebar {\n        background: rgb(122, 122, 238);\n        bottom: 0;\n        display: none;\n        height: 240px;\n        margin: 0;\n        /* margin-top: 0; */\n    }\n    .home, .project {\n        font-size: 18px;\n    }\n    .cate {\n        font-size: 14px;\n        padding: 18px;\n        margin-bottom: 0;\n        bottom: 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css-folder/sidebar.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,6EAA6E;IAC7E,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,eAAe;IACf,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,eAAe;IACf,YAAY;IACZ,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI;QACI,8BAA8B;QAC9B,SAAS;QACT,aAAa;QACb,aAAa;QACb,SAAS;QACT,mBAAmB;IACvB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,aAAa;QACb,gBAAgB;QAChB,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --light-dark: rgb(0,0,0,0.8);\n} \n\n.sidebar {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    align-items: center;\n    color: white;\n    /* background: white; */\n    background: rgb(122, 122, 238);\n}\n\n.home {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    opacity: 0.9;\n    padding: 10px 0;\n    font-size: 20px;\n    background: var(--light-dark);\n}\n.home:nth-child(1), .project:nth-child(2) {\n    opacity: 0.7;\n    border-bottom: 2px solid white;\n}\n.project {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    font-size: 20px;\n    opacity: 0.9;\n    padding: 10px 0;\n    background: var(--light-dark);\n}\n.home:hover, .project:hover, .cate:hover {\n    cursor: pointer;\n    background: #bdb7b7;\n}\n.cate {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    float: right;\n    width: 100%;\n    height: 8px;\n    font-size: 18px;\n    opacity: 0.9;\n    padding: 18px 0 18px 0;\n    background: var(--light-dark);\n}\n@media only screen and (max-width: 700px){\n    .sidebar {\n        background: rgb(122, 122, 238);\n        bottom: 0;\n        display: none;\n        height: 240px;\n        margin: 0;\n        /* margin-top: 0; */\n    }\n    .home, .project {\n        font-size: 18px;\n    }\n    .cate {\n        font-size: 14px;\n        padding: 18px;\n        margin-bottom: 0;\n        bottom: 0;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --sidebarheight: 175px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 80px auto;\n    width: 100%;\n    height: 100vh;\n} \n.nav {\n    background: black;\n    color: var(--primary-light);\n    grid-column: 1/4;\n}\n.sidebar {\n    background: var(--primary-light);\n}\n.content {\n    background: var(--secondary-light);\n    grid-column: 2/4;\n}\n\n@media only screen and (max-width: 700px){\n    :root {\n        margin: 0;\n        overflow-x: hidden;\n        /* width: 100%; */\n    }\n    body {\n        width: 100%;\n        overflow-x: hidden;\n        grid-template-columns: 1fr;\n        grid-template-rows: 80px, 1fr;\n    }\n    .nav, .content {\n        grid-column: 1/4;\n    }\n    .sidebar{\n        height: 0;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,sEAAsE;IACtE,aAAa;IACb,iCAAiC;IACjC,6BAA6B;IAC7B,WAAW;IACX,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;AACpB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI;QACI,SAAS;QACT,kBAAkB;QAClB,iBAAiB;IACrB;IACA;QACI,WAAW;QACX,kBAAkB;QAClB,0BAA0B;QAC1B,6BAA6B;IACjC;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --sidebarheight: 175px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 80px auto;\n    width: 100%;\n    height: 100vh;\n} \n.nav {\n    background: black;\n    color: var(--primary-light);\n    grid-column: 1/4;\n}\n.sidebar {\n    background: var(--primary-light);\n}\n.content {\n    background: var(--secondary-light);\n    grid-column: 2/4;\n}\n\n@media only screen and (max-width: 700px){\n    :root {\n        margin: 0;\n        overflow-x: hidden;\n        /* width: 100%; */\n    }\n    body {\n        width: 100%;\n        overflow-x: hidden;\n        grid-template-columns: 1fr;\n        grid-template-rows: 80px, 1fr;\n    }\n    .nav, .content {\n        grid-column: 1/4;\n    }\n    .sidebar{\n        height: 0;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2tEOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBZSxvQ0FBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERnQztBQUNZO0FBQ087O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBVTtBQUNkO0FBQ0E7QUFDQSw2QkFBZSxvQ0FBUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxRQUFRLGlFQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyRUFBTztBQUN2QixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZEQUFNO0FBQzlCLHdCQUF3QixpRUFBVTtBQUNsQyxRQUFRLGdFQUFTO0FBQ2pCLFFBQVEsOERBQVU7QUFDbEI7QUFDQSxZQUFZLDRFQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9kZXRhaWxzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9lZGl0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci90b3BiYXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9jb250ZW50LmNzcz9lMWNmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MtZm9sZGVyL2RldGFpbHMuY3NzP2I3YzQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvZWRpdC5jc3M/NmNiMCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9zaWRlYmFyLmNzcz9kZWVhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MtZm9sZGVyL3RvcGJhci5jc3M/ZTQ0NiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0YWJhc2UvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvY2xpY2stZGV0YWlsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvY2xpY2stZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NsaWNrSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9jcmVhdGUtZm9sZGVyL3N1Ym1pdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9kZWxldGUtZGV0YWlsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvY2FsZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9lZGl0LWZvbGRlci9zZXRFZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvc3VibWl0LWVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9lZGl0LWZvbGRlci90b2RvLWFkZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2VkaXQtZm9sZGVyL3RvZG8taG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL25ld0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9yZW5kZXJJY29uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL3RvcGJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZGFyazogIzMzMztcXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjAyLCAyMDIsIDIyMyk7XFxuICAgIC0tZGFyay1ibHVlOiByZ2IoMTA2LCAxMDYsIDE3OSk7XFxufSBcXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogN3B4IDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwsIC5lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDExMywgMTA1LCAyMTQpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwtYnRuLCAuZGF0ZSwgLmVkaXQtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBjb2xvcjogcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGNvbG9yOiByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuIHN2ZyB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsbDogcmdiKDE5NiwgMTMyLCAxMzIpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biBzdmcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG46aG92ZXIsIC5kZXRhaWwtYnRuOmhvdmVyLCAuZWRpdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLWJ0biB7XFxuICAgICAgICBwYWRkaW5nOiAwIDNweDtcXG4gICAgfVxcblxcbn0gXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG59IFxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4ge1xcbiAgICAgICAgd2lkdGg6IDE3cHg7XFxuICAgICAgICBoZWlnaHQ6IDE3cHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxufSBcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kYXRlIHtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbn0gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy1mb2xkZXIvY29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTs7SUFFaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZGFyazogIzMzMztcXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjAyLCAyMDIsIDIyMyk7XFxuICAgIC0tZGFyay1ibHVlOiByZ2IoMTA2LCAxMDYsIDE3OSk7XFxufSBcXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogN3B4IDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwsIC5lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDExMywgMTA1LCAyMTQpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwtYnRuLCAuZGF0ZSwgLmVkaXQtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBjb2xvcjogcmdiKDEwNiwgMTA2LCAxNzkpO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGNvbG9yOiByZ2IoMTk2LCAxMzIsIDEzMik7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuIHN2ZyB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsbDogcmdiKDE5NiwgMTMyLCAxMzIpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biBzdmcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG46aG92ZXIsIC5kZXRhaWwtYnRuOmhvdmVyLCAuZWRpdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLWJ0biB7XFxuICAgICAgICBwYWRkaW5nOiAwIDNweDtcXG4gICAgfVxcblxcbn0gXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG59IFxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4ge1xcbiAgICAgICAgd2lkdGg6IDE3cHg7XFxuICAgICAgICBoZWlnaHQ6IDE3cHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxufSBcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kYXRlIHtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNoZWNrLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC44KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZSAuY2xvc2U6bGFzdC1jaGlsZHtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogcmdiKDAsMCwwLDAuNyk7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZSAuY2xvc2U6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNDEsIDE0MSk7XFxuICAgIHBhZGRpbmc6IDEycHggMzBweDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveCAua2V5OmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveCAua2V5LCAudmFsdWV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94e1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleTpmaXJzdC1jaGlsZHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfSAgICBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy1mb2xkZXIvZGV0YWlscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0hBQXNIO0lBQ3RILGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5jaGVjay1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGUgLmNsb3NlOmxhc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IHJnYigwLDAsMCwwLjcpO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGUgLmNsb3NlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogcmdiKDE3NywgMTQxLCAxNDEpO1xcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleTpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleSwgLnZhbHVle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8ge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94IC5rZXk6Zmlyc3QtY2hpbGR7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH0gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5lZGl0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC40KTtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbn0gXFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2xvc2V7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLndhcm5pbmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCA2NiwgNjYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNsb3NlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLnRleHRhcmVhOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuXFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLnNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC50ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweCAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmR1ZS1kYXRlLCAuY2hhbmdlLXByaW9yaXR5LCAuY29uZmlybS1lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2hhbmdlLWRhdGUge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYig1NCwgNTQsIDEyNCk7XFxuICAgIGNvbG9yOiByZ2IoNTIsIDUyLCAxOTYpO1xcbn1cXG4ubG93LWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuMik7XFxufVxcbi5tZWRpdW0tYnRuIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuMik7XFxufVxcbi5oaWdoLWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjIpO1xcbn1cXG4ubG93LWJ0bjpob3ZlciwgLm1lZGl1bS1idG46aG92ZXIsIC5oaWdoLWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuNCk7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNvbmZpcm0tZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODksIDg5LCAxOTkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNvbmZpcm0tZWRpdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3gge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICB9IFxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC50ZXh0YXJlYSB7XFxuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XFxuICAgIH1cXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2hhbmdlLXByaW9yaXR5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNoYW5nZS1wcmlvcml0eSAucHJpb3JpdHkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgfVxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jb25maXJtLWVkaXQge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgLyogcGFkZGluZzogbm9uZTsgKi9cXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy1mb2xkZXIvZWRpdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix3RUFBd0U7QUFDNUU7QUFDQTtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZWRpdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuNCk7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3gge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG59IFxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNsb3Nle1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC53YXJuaW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMywgNjYsIDY2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jbG9zZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC50ZXh0YXJlYTpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcblxcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5zZWxlY3Qge1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIG1hcmdpbjogMjBweCAwIDEwcHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAudGV4dGFyZWEge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbjogMjBweCAwIDEwcHggMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5kdWUtZGF0ZSwgLmNoYW5nZS1wcmlvcml0eSwgLmNvbmZpcm0tZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNoYW5nZS1kYXRlIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNTQsIDU0LCAxMjQpO1xcbiAgICBjb2xvcjogcmdiKDUyLCA1MiwgMTk2KTtcXG59XFxuLmxvdy1idG4ge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjIpO1xcbn1cXG4ubWVkaXVtLWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjIpO1xcbn1cXG4uaGlnaC1idG4ge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC4yKTtcXG59XFxuLmxvdy1idG46aG92ZXIsIC5tZWRpdW0tYnRuOmhvdmVyLCAuaGlnaC1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjQpO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jb25maXJtLWVkaXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDg5LCA4OSwgMTk5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jb25maXJtLWVkaXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgfSBcXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAudGV4dGFyZWEge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xcbiAgICB9XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNoYW5nZS1wcmlvcml0eSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jaGFuZ2UtcHJpb3JpdHkgLnByaW9yaXR5IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIH1cXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY29uZmlybS1lZGl0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIC8qIHBhZGRpbmc6IG5vbmU7ICovXFxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIwMiwgMjAyLCAyMjMpO1xcbiAgICAtLWxpZ2h0LWRhcms6IHJnYigwLDAsMCwwLjgpO1xcbn0gXFxuXFxuLnNpZGViYXIge1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMjM4KTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG4uaG9tZTpudGgtY2hpbGQoMSksIC5wcm9qZWN0Om50aC1jaGlsZCgyKSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbi5ob21lOmhvdmVyLCAucHJvamVjdDpob3ZlciwgLmNhdGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNiZGI3Yjc7XFxufVxcbi5jYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMThweCAwIDE4cHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDIzOCk7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDA7ICovXFxuICAgIH1cXG4gICAgLmhvbWUsIC5wcm9qZWN0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuY2F0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLWZvbGRlci9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsYUFBYTtRQUNiLFNBQVM7UUFDVCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIwMiwgMjAyLCAyMjMpO1xcbiAgICAtLWxpZ2h0LWRhcms6IHJnYigwLDAsMCwwLjgpO1xcbn0gXFxuXFxuLnNpZGViYXIge1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMjM4KTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG4uaG9tZTpudGgtY2hpbGQoMSksIC5wcm9qZWN0Om50aC1jaGlsZCgyKSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbi5ob21lOmhvdmVyLCAucHJvamVjdDpob3ZlciwgLmNhdGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNiZGI3Yjc7XFxufVxcbi5jYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMThweCAwIDE4cHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDIzOCk7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDA7ICovXFxuICAgIH1cXG4gICAgLmhvbWUsIC5wcm9qZWN0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuY2F0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxubmF2IHN2ZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAudG9wYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5uYXYgLnRvcGJhciAudG9wYmFyLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgbmF2IC50b3BiYXIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgIG5hdiBzdmcge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgbmF2IC50b3BiYXIgLnRvcGJhci1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLWZvbGRlci90b3BiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDREQUE0RDtBQUNoRTtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxubmF2IHN2ZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAudG9wYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5uYXYgLnRvcGJhciAudG9wYmFyLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgbmF2IC50b3BiYXIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgIG5hdiBzdmcge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgbmF2IC50b3BiYXIgLnRvcGJhci1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMzMzO1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNlZWU7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbiAgICAtLXNpZGViYXJoZWlnaHQ6IDE3NXB4O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufSBcXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIH1cXG4gICAgYm9keSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4LCAxZnI7XFxuICAgIH1cXG4gICAgLm5hdiwgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgfVxcbiAgICAuc2lkZWJhcntcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZGFyazogIzMzMztcXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG4gICAgLS1zaWRlYmFyaGVpZ2h0OiAxNzVweDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn0gXFxuLm5hdiB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIDpyb290IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB9XFxuICAgIGJvZHkge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCwgMWZyO1xcbiAgICB9XFxuICAgIC5uYXYsIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIH1cXG4gICAgLnNpZGViYXJ7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RldGFpbHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXRhaWxzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcGJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcGJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5jb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhdGhvbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zaXRpb24nKTtcbiAgICByZXR1cm4gYXRob21lO1xufVxuY29uc3Qgc2V0UG9zaXRpb24gPSAoZGF0YSkgPT4geyAgICAgICAgXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbicsIGRhdGEpO1xufVxuY29uc3QgZ2V0QXBpID0gKCkgPT4ge1xuICAgIGNvbnN0IGF0aG9tZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSk7XG4gICAgcmV0dXJuIGF0aG9tZVswXTtcbn1cbmNvbnN0IHNldEFwaSA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufVxuXG5cbmV4cG9ydCB7Z2V0QXBpLCBzZXRBcGksIGdldFBvc2l0aW9uLCBzZXRQb3NpdGlvbn07ICIsImltcG9ydCAnLi4vY3NzLWZvbGRlci9kZXRhaWxzLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdih0eHQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbC5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtdHh0JywgY2xhc3NOYW1lKTtcbiAgICBkZXRhaWwudGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgXG4gICAgcmV0dXJuIGRldGFpbFxufVxuZnVuY3Rpb24gdGl0bGVEaXYoaXRlbXMpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXRpdGxlJyk7XG4gICAgYm94LmFwcGVuZChcbiAgICAgICAgY3JlYXRlRGl2KGAke2l0ZW1zLnRpdGxlfWApLFxuICAgICAgICBjcmVhdGVEaXYoJ1gnLCAnY2xvc2UnKVxuICAgIClcblxuICAgIHJldHVybiBib3g7XG59XG5mdW5jdGlvbiBjcmVhdGVCb2R5RGl2KGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgnZGV0YWlsLWJveCcpO1xuICAgIGJveC5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZURpdihrZXksICdrZXknKSxcbiAgICAgICAgY3JlYXRlRGl2KHZhbHVlLCAndmFsdWUnKVxuICAgIClcbiAgICByZXR1cm4gYm94XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGV0YWlsQnRuLCBpdGVtcykge1xuICAgIGRldGFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsQmcuY2xhc3NMaXN0LmFkZCgnY2hlY2stZGV0YWlscycpO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1pbmZvJyk7XG4gICAgICAgIGRldGFpbEJnLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZChcbiAgICAgICAgICAgIHRpdGxlRGl2KGl0ZW1zKSxcbiAgICAgICAgICAgIGNyZWF0ZUJvZHlEaXYoJ1Byb2plY3Q6ICcsIGl0ZW1zLmRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgIGNyZWF0ZUJvZHlEaXYoJ0R1ZSBEYXRlOiAnLCBpdGVtcy5kdWVEYXRlKSxcbiAgICAgICAgICAgIGNyZWF0ZUJvZHlEaXYoJ1ByaW9yaXR5OiAnLCBpdGVtcy5wcmlvcml0eSksXG4gICAgICAgICAgICBjcmVhdGVCb2R5RGl2KCdEZXRhaWxzOiAnLCBpdGVtcy5ub3RlcyksXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGV0YWlsQmcpO1xuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICAgICAgICBpZihjbG9zZSkge1xuICAgICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stZGV0YWlscycpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGV0YWlsQmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG59IiwiaW1wb3J0ICcuLi9jc3MtZm9sZGVyL2VkaXQuY3NzJztcbmltcG9ydCBzZXRFZGl0IGZyb20gJy4vZWRpdC1mb2xkZXIvc2V0RWRpdCc7XG5pbXBvcnQgc3VibWl0RWRpdCBmcm9tICcuL2VkaXQtZm9sZGVyL3N1Ym1pdC1lZGl0JztcblxuZnVuY3Rpb24gY3JlYXRlSW5wdXRzKGNsYXNzTmFtZSwgaXRlbSwgdHlwZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0udmFsdWUgPSBpdGVtO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlRGl2KCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ2VkaXQtYm94Jyk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChib3gpO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlQm94KHR4dCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVEYXRlKGNsYXNzTmFtZSwgaXRlbSwgdHlwZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsZW0udHlwZSA9ICdkYXRlJztcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGRhdGVCb3goY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uYXBwZW5kKFxuICAgICAgICBjcmVhdGVCb3goJ0R1ZSBEYXRlOiAnKSxcbiAgICAgICAgY3JlYXRlRGF0ZSgnY2hhbmdlLWRhdGUnKSxcbiAgICApO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gcHJpb3JpdHkodHh0LCBjbGFzc05hbWUsIGl0ZW1zLCB0aXRsZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0O1xuICAgIHNldEVkaXQoZWxlbSwgdGl0bGUsIGl0ZW1zLCAgJ3RleHRDb250ZW50JywgJ3ByaW9yaXR5Jyk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBwcmlvcml0eUJveChjbGFzc05hbWUsIGl0ZW1zLCB0aXRsZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQm94KCdQcmlvcml0eTogJywgJ3ByaW9yaXR5JyksXG4gICAgICAgIHByaW9yaXR5KCdMb3cnLCAnbG93LWJ0bicsIGl0ZW1zLCB0aXRsZSksXG4gICAgICAgIHByaW9yaXR5KCdNZWRpdW0nLCAnbWVkaXVtLWJ0bicsIGl0ZW1zLCB0aXRsZSksXG4gICAgICAgIHByaW9yaXR5KCdIaWdoJywgJ2hpZ2gtYnRuJywgaXRlbXMsIHRpdGxlKSxcbiAgICApO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gZWRpdEZ1bmModHh0LCBjbGFzc05hbWUsIHRpdGxlLCBpdGVtcykge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0OyAgICAgICAgXG4gICAgc3VibWl0RWRpdChlbGVtLCB0aXRsZSwgaXRlbXMpO1xuICAgIHJldHVybiBlbGVtOyBcbn0gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtLCBpdGVtcywgdGl0bGUpIHsgXG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZURpdigpKTtcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYm94Jyk7XG4gICAgICAgIGJveC5hcHBlbmQoXG4gICAgICAgICAgICBjcmVhdGVCb3goJ1gnLCAnY2xvc2UnKSxcbiAgICAgICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCBpdGVtcy50aXRsZSwgJ3RleHRhcmVhJyksXG4gICAgICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHRhcmVhJywgaXRlbXMubm90ZXMsICd0ZXh0YXJlYScpLFxuICAgICAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsIGl0ZW1zLmRlc2NyaXB0aW9uLCAndGV4dGFyZWEnKSxcbiAgICAgICAgICAgIGRhdGVCb3goJ2R1ZS1kYXRlJywgaXRlbXMuZHVlRGF0ZSksXG4gICAgICAgICAgICBwcmlvcml0eUJveCgnY2hhbmdlLXByaW9yaXR5JywgaXRlbXMsIHRpdGxlKSxcbiAgICAgICAgICAgIGVkaXRGdW5jKCdFZGl0JywgJ2NvbmZpcm0tZWRpdCcsIHRpdGxlLCBpdGVtcyksXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9KVxuICAgIH0pO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN2ZycpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gc2lkZWJhci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snIFxuICAgICAgICA/ICdub25lJyA6ICdibG9jayc7XG5cbiAgICB9KVxufSIsImltcG9ydCAnLi4vY3NzLWZvbGRlci9jb250ZW50LmNzcyc7XG5pbXBvcnQgY2xpY2tEZXRhaWwgZnJvbSAnLi9jbGljay1kZXRhaWwnO1xuaW1wb3J0IHNldEVkaXQgZnJvbSAnLi9lZGl0LWZvbGRlci9zZXRFZGl0JztcbmltcG9ydCBjbGlja0VkaXQgZnJvbSAnLi9jbGljay1lZGl0JztcbmltcG9ydCBkZWxldGVEZXRhaWwgZnJvbSAnLi9kZWxldGUtZGV0YWlsJztcbmltcG9ydCByZW5kZXJJY29uIGZyb20gJy4vcmVuZGVySWNvbic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94KGl0ZW1zLCB0aXRsZSkge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5uYW1lID0gJ2lzcmVhZCc7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2stYm94Jyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGl0ZW1zWydjaGVja2xpc3QnXTtcbiAgICBzZXRFZGl0KGNoZWNrYm94LCB0aXRsZSwgaXRlbXMsICdjaGVja2VkJywgJ2NoZWNrbGlzdCcpO1xuICAgIHJldHVybiBjaGVja2JveDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvcGVydGllcyh0eHQsIGNsYXNzTmFtZSwgaXRlbXMpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJywgY2xhc3NOYW1lKTtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gaXRlbXNbJ3RpdGxlJ107XG4gICAgcmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGRldGFpbEJ1dHRvbih0eHQsIGNsYXNzTmFtZSwgaXRlbXMpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkZXRhaWwnKTtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoZGV0YWlsKTtcbiAgICBkZXRhaWwudGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgY2xpY2tEZXRhaWwoZGV0YWlsLCBpdGVtcyk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBkYXRlQnV0dG9uKHR4dCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZGV0YWlsJyk7XG4gICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGRldGFpbCk7XG4gICAgZGV0YWlsLnRleHRDb250ZW50ID0gdHh0O1xuICAgIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBlZGl0QnV0dG9uKHR4dCwgY2xhc3NOYW1lLCBpdGVtcywgdGl0bGUpIHtcbiAgICBjb25zdCBsaW5rID0gXCJNNSAyMnEtLjgyNSAwLTEuNDEzLS41ODhUMyAyMFY2cTAtLjgyNS41ODgtMS40MTNUNSA0aDFWM3EwLS40MjUuMjg4LS43MTNUNyAycS40MjUgMCAuNzEzLjI4OFQ4IDN2MWg4VjNxMC0uNDI1LjI4OC0uNzEzVDE3IDJxLjQyNSAwIC43MTMuMjg4VDE4IDN2MWgxcS44MjUgMCAxLjQxMy41ODhUMjEgNnY1cTAgLjQyNS0uMjg4LjcxM1QyMCAxMnEtLjQyNSAwLS43MTMtLjI4OFQxOSAxMXYtMUg1djEwaDZxLjQyNSAwIC43MTMuMjg4VDEyIDIxcTAgLjQyNS0uMjg4LjcxM1QxMSAyMkg1Wm0xNy4xMjUtNUwyMCAxNC44NzVsLjcyNS0uNzI1cS4yNzUtLjI3NS43LS4yNzV0LjcuMjc1bC43MjUuNzI1cS4yNzUuMjc1LjI3NS43dC0uMjc1LjdsLS43MjUuNzI1Wk0xNS43IDIzaC0xLjJxLS4yIDAtLjM1LS4xNVQxNCAyMi41di0xLjJxMC0uMi4wNzUtLjM4OHQuMjI1LS4zMzdsNS01bDIuMTI1IDIuMTI1bC01IDVxLS4xNS4xNS0uMzM4LjIyNVQxNS43IDIzWk01IDhoMTRWNkg1djJabTAgMFY2djJaXCI7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWRpdC5hcHBlbmRDaGlsZChyZW5kZXJJY29uKGxpbmssICcyNCcsICcyNCcpKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgIGNsaWNrRWRpdChlbGVtLCBpdGVtcywgdGl0bGUpO1xuICAgIHJldHVybiBlbGVtOyBcbn0gXG5mdW5jdGlvbiBkZWxldGVCdXR0b24oaW5kZXgsIHR4dCwgY2xhc3NOYW1lLCBpdGVtcywgdGl0bGUpIHtcbiAgICBjb25zdCBsaW5rPSBcIm05LjQgMTYuNWwyLjYtMi42bDIuNiAyLjZsMS40LTEuNGwtMi42LTIuNkwxNiA5LjlsLTEuNC0xLjRsLTIuNiAyLjZsLTIuNi0yLjZMOCA5LjlsMi42IDIuNkw4IDE1LjFsMS40IDEuNFpNNyAyMXEtLjgyNSAwLTEuNDEzLS41ODhUNSAxOVY2SDRWNGg1VjNoNnYxaDV2MmgtMXYxM3EwIC44MjUtLjU4OCAxLjQxM1QxNyAyMUg3Wk0xNyA2SDd2MTNoMTBWNlpNNyA2djEzVjZaXCI7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG4gICAgZGVsZXRlQnRuLmlkID0gaW5kZXg7XG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKHJlbmRlckljb24obGluaywgJzI0JywgJzI0JykpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBkZWxldGVEZXRhaWwoZWxlbSwgaXRlbXMsIHRpdGxlKTtcbiAgICByZXR1cm4gZWxlbTtcbn0gXG5mdW5jdGlvbiBjcmVhdGVEaXYoaW5kZXgsIGNsYXNzTmFtZSwgaXRlbXMsIHRpdGxlKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uYXBwZW5kKFxuICAgICAgICBjcmVhdGVDaGVja2JveChpdGVtcywgdGl0bGUpLFxuICAgICAgICBjcmVhdGVQcm9wZXJ0aWVzKGluZGV4LCAna2V5JywgaXRlbXMpLFxuICAgICAgICBkZXRhaWxCdXR0b24oJ0RldGFpbHMnLCAnZGV0YWlsLWJ0bicsIGl0ZW1zKSxcbiAgICAgICAgZGF0ZUJ1dHRvbihcbiAgICAgICAgICAgIGl0ZW1zWydkdWVEYXRlJ10uc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgIGl0ZW1zWydkdWVEYXRlJ10uaW5kZXhPZignICcpICsgMSksIFxuICAgICAgICAgICAgICAgICdkYXRlJ1xuICAgICAgICApLFxuICAgICAgICBlZGl0QnV0dG9uKCdFZGl0JywgJ2VkaXQtYnRuJywgaXRlbXMsIHRpdGxlKSxcbiAgICAgICAgZGVsZXRlQnV0dG9uKGluZGV4LCAnRGVsZXRlJywgJ2RlbGV0ZScsIGl0ZW1zLCB0aXRsZSksXG4gICAgKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNvbnRlbnQoaXRlbXMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjcmVhdGVEaXYoaXRlbXNbaW5kZXhdWydfaWQnXSwgJ3RvZG8nLCBpdGVtc1tpbmRleF0sIGl0ZW1zW2luZGV4XVsnb2JqdGl0bGUnXSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7IiwiaW1wb3J0IHsgZ2V0QXBpLCBzZXRBcGksIGdldFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2FwaVwiO1xuaW1wb3J0IHRvZG9Ib21lIGZyb20gXCIuLi9lZGl0LWZvbGRlci90b2RvLWhvbWVcIjtcbmltcG9ydCB0b2RvQWRkIGZyb20gXCIuLi9lZGl0LWZvbGRlci90b2RvLWFkZFwiO1xuaW1wb3J0IGNhbGVuZGVyIGZyb20gXCIuLi9lZGl0LWZvbGRlci9jYWxlbmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3Qgd2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YXJuaW5nJyk7XG4gICAgICAgIGxldCBzdGF0ZSA9IFtnZXRBcGkoKV07XG4gICAgICAgIGNvbnN0IGFyciA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnbm90ZXMnXTtcbiAgICAgICAgbGV0IHRvZG9PYmogPSB7fTtcblxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Jyk7XG4gICAgICAgIHRvZG9PYmpbJ19pZCddID0gc3RhdGVbMF1bc2VsZWN0LnZhbHVlXS5sZW5ndGg7XG5cbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dGFyZWEnKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRleHRhcmVhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHRleHRhcmVhW2luZGV4XS52YWx1ZS5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIHdhcm5pbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb09ialthcnJbaW5kZXhdXSA9IHRleHRhcmVhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG15RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtZGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobXlEYXRlKTtcbiAgICAgICAgaWYgKCEhZGF0ZS52YWx1ZU9mKCkpIHtcbiAgICAgICAgICAgIHRvZG9PYmpbJ2R1ZURhdGUnXSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0gJHtjYWxlbmRlcltkYXRlLmdldE1vbnRoKCldfSAke2RhdGUuZ2V0RGF0ZSgpKzF9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb09ialsnZHVlRGF0ZSddID0gJzAwMDAgSmFuIDAwJztcbiAgICAgICAgfVxuICAgICAgICB0b2RvT2JqWydwcmlvcml0eSddID0gJ0xvdyc7XG4gICAgICAgIHRvZG9PYmpbJ2NoZWNrbGlzdCddID0gZmFsc2U7XG4gICAgICAgIHRvZG9PYmpbJ29ianRpdGxlJ10gPSBzZWxlY3QudmFsdWU7XG4gICAgICAgIHN0YXRlWzBdW3NlbGVjdC52YWx1ZV0ucHVzaCh0b2RvT2JqKTtcbiAgICAgICAgc2V0QXBpKHN0YXRlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlZGl0Q29udGFpbmVyKTtcbiAgICAgICAgaWYoZ2V0UG9zaXRpb24oKSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0hvbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb0FkZChzZWxlY3QudmFsdWUpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgZ2V0QXBpLCBzZXRBcGksIGdldFBvc2l0aW9uIH0gZnJvbSBcIi4uL2RhdGFiYXNlL2FwaVwiO1xuaW1wb3J0IHRvZG9Ib21lIGZyb20gXCIuL2VkaXQtZm9sZGVyL3RvZG8taG9tZVwiO1xuaW1wb3J0IHRvZG9BZGQgZnJvbSBcIi4vZWRpdC1mb2xkZXIvdG9kby1hZGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbSwgaXRlbXMsIHRpdGxlKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gW2dldEFwaSgpXTtcblxuICAgICAgICBjb25zdCBuZXdPYmogPSBzdGF0ZVswXVt0aXRsZV0uZmlsdGVyKFxuICAgICAgICAgICAgKG9iaikgPT4gb2JqWydfaWQnXSAhPT0gaXRlbXNbJ19pZCddXG4gICAgICAgICk7XG4gICAgICAgIHN0YXRlWzBdW3RpdGxlXSA9IG5ld09iajtcbiAgICAgICAgc2V0QXBpKHN0YXRlKTtcbiAgICAgICAgaWYoZ2V0UG9zaXRpb24oKSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0hvbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb0FkZCh0aXRsZSk7XG4gICAgfSk7XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0ICBbXG4gICAgJ0phbicsIFxuICAgICdGZWInLCBcbiAgICAnTWFyJywgXG4gICAgJ0FwcicsIFxuICAgICdNYXknLCBcbiAgICAnSnVuJywgXG4gICAgJ0p1bHknLCBcbiAgICAnQXVnJywgXG4gICAgJ1NlcCcsIFxuICAgICdPY3QnLCBcbiAgICAnTm92JywgXG4gICAgJ0RlYydcbl0iLCJpbXBvcnQgeyBnZXRBcGksIHNldEFwaSB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbSwgdGl0bGUsIGl0ZW1zLCB0eHRDb250ZW50LCB2YWx1ZSApIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcGkgPSBbZ2V0QXBpKCldO1xuICAgICAgICBsZXQgaW5kZXggPSBhcGlbMF1bdGl0bGVdLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqWydfaWQnXSA9PSBpdGVtc1snX2lkJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXBpWzBdW3RpdGxlXVtpbmRleF1bdmFsdWVdID0gZWxlbVt0eHRDb250ZW50XTtcbiAgICAgICAgc2V0QXBpKGFwaSk7XG5cbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgZ2V0QXBpLCBzZXRBcGksIGdldFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2FwaVwiO1xuaW1wb3J0IHRvZG9Ib21lIGZyb20gXCIuL3RvZG8taG9tZVwiO1xuaW1wb3J0IHRvZG9BZGQgZnJvbSBcIi4vdG9kby1hZGRcIjtcbmltcG9ydCBjYWxlbmRlciBmcm9tIFwiLi9jYWxlbmRlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW0sIHRpdGxlLCBpdGVtcywgdHh0Q29udGVudCwgdmFsdWUpIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcGkgPSBbZ2V0QXBpKCldO1xuICAgICAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRhcmVhJyk7XG4gICAgICAgIGNvbnN0IG15QXJyID0gWyd0aXRsZScsICdub3RlcycsICdkZXNjcmlwdGlvbiddXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRleHRhcmVhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IG9iakluZGV4ID0gYXBpWzBdW3RpdGxlXS5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpbJ19pZCddID09IGl0ZW1zWydfaWQnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhcGlbMF1bdGl0bGVdW29iakluZGV4XVtteUFycltpbmRleF1dID0gdGV4dGFyZWFbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgc2V0QXBpKGFwaSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtZGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY2hhbmdlRGF0ZSk7XG5cbiAgICAgICAgaWYgKCEhZGF0ZS52YWx1ZU9mKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVObyA9IGRhdGUuZ2V0RGF0ZSgpICsxO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gYXBpWzBdW3RpdGxlXS5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpbJ19pZCddID09IGl0ZW1zWydfaWQnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhcGlbMF1bdGl0bGVdW2luZGV4XVsnZHVlRGF0ZSddID0gYCR7eWVhcn0gJHtjYWxlbmRlclttb250aF19ICR7ZGF0ZU5vfWA7XG4gICAgICAgICAgICBzZXRBcGkoYXBpKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVkaXRDb250YWluZXIpO1xuICAgICAgICBpZihnZXRQb3NpdGlvbigpID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2RvSG9tZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvQWRkKHRpdGxlKTtcbiAgICB9KTsgIFxufSAgICIsImltcG9ydCB7IGdldEFwaSwgZ2V0UG9zaXRpb24sIHNldFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2FwaVwiO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSBcIi4uL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odGl0bGUpIHtcbiAgICBjb25zdCBjb250ZW50Y29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRlbnRjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gICAgY29udGVudGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KGdldEFwaSgpW3RpdGxlXSkpO1xuICAgIHNldFBvc2l0aW9uKHRpdGxlKTtcbn0iLCJpbXBvcnQgeyBnZXRBcGksIHNldFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2FwaVwiO1xuaW1wb3J0ICcuLi8uLi9jc3MtZm9sZGVyL2NvbnRlbnQuY3NzJztcbmltcG9ydCBjb250ZW50IGZyb20gXCIuLi9jb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgY29uc3QgY2F0QXJyID0gWydhdGhvbWUnLCAnd29yaycsICdzY2hvb2wnLCAncGxheWdyb3VuZCddO1xuICAgIGNvbnN0IHN0YXRlID0gW1xuICAgICAgICAuLi5nZXRBcGkoKVtjYXRBcnJbMF1dLFxuICAgICAgICAuLi5nZXRBcGkoKVtjYXRBcnJbMV1dLFxuICAgICAgICAuLi5nZXRBcGkoKVtjYXRBcnJbMl1dLFxuICAgICAgICAuLi5nZXRBcGkoKVtjYXRBcnJbM11dLFxuICAgIF07XG4gICAgbGV0IHNodWZmbGVkID0gc3RhdGUuc29ydCgoYSwgYikgPT4gYS50aXRsZSA+IGIudGl0bGUpO1xuXG4gICAgY29uc3QgY29udGVudGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGlmKGNvbnRhaW5lcikge1xuICAgICAgICBjb250ZW50Y29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNvbnRlbnRjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudChzaHVmZmxlZCkpO1xuICAgIHNldFBvc2l0aW9uKCdob21lJyk7XG59IFxuICIsImltcG9ydCAnLi4vY3NzLWZvbGRlci9lZGl0LmNzcyc7XG5pbXBvcnQgc3VibWl0Q3JlYXRlIGZyb20gJy4vY3JlYXRlLWZvbGRlci9zdWJtaXQtY3JlYXRlJztcblxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb24odmFsdWUsIHR4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25zLnZhbHVlID0gdmFsdWU7XG4gICAgb3B0aW9ucy50ZXh0ID0gdHh0O1xuICAgIHJldHVybiBvcHRpb25zO1xufVxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0KCkge1xuICAgIGNvbnN0IGNhdEFyciA9IFsnYXRob21lJywgJ3dvcmsnLCAnc2Nob29sJywgJ3BsYXlncm91bmQnXTtcbiAgICBjb25zdCBjYXRUZXh0ID0gWydBdCBIb21lJywgJ1dvcmsnLCAnU2Nob29sJywgJ1BsYXlncm91bmQnXTtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3QnKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2F0QXJyLmxlbmd0aDsgaW5kZXgrKykge1xuXG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKGNhdEFycltpbmRleF0sIGNhdFRleHRbaW5kZXhdKSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5wdXRzKGNsYXNzTmFtZSwgdHlwZSwgZGVmYXVsdFRleHQpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnBsYWNlaG9sZGVyID0gZGVmYXVsdFRleHQ7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVEaXYoKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdC1jb250YWluZXInKTtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgnZWRpdC1ib3gnKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGJveCk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVCb3godHh0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IHR4dDtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURhdGUoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWxlbS50eXBlID0gJ2RhdGUnO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gZGF0ZUJveChjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUJveCgnRHVlIERhdGU6ICcpLFxuICAgICAgICBjcmVhdGVEYXRlKCdjaGFuZ2UtZGF0ZScpLFxuICAgICk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVGdW5jKHR4dCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uc3R5bGUud2lkdGggPSAnOTBweCc7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IHR4dDsgICAgXG4gICAgc3VibWl0Q3JlYXRlKGVsZW0pO1xuICAgIHJldHVybiBlbGVtOyBcbn0gIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbSkgeyBcblxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KCkpO1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1ib3gnKTtcbiAgICAgICAgYm94LmFwcGVuZChcbiAgICAgICAgICAgIGNyZWF0ZUJveCgnWCcsICdjbG9zZScpLFxuICAgICAgICAgICAgY3JlYXRlU2VsZWN0KCksXG4gICAgICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHRhcmVhJywgJ3RleHRhcmVhJywgJ1RpdGxlJyksXG4gICAgICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHRhcmVhJywgJ3RleHRhcmVhJywgJ1Byb2plY3QnKSxcbiAgICAgICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCAndGV4dGFyZWEnLCAnRGV0YWlscycpLFxuICAgICAgICAgICAgY3JlYXRlQm94KCdXYXJuaW5nOiBjaGFyYWN0ZXIgbXVzdCBiZSBncmVhdGVyIHRoYXQgMicsICd3YXJuaW5nJyksXG4gICAgICAgICAgICBkYXRlQm94KCdkdWUtZGF0ZScpLFxuICAgICAgICAgICAgY3JlYXRlRnVuYygnQ3JlYXRlJywgJ2NvbmZpcm0tZWRpdCcpLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2hhcGUsIHNpemUxLCBzaXplMiwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3NpemUxfSAke3NpemUyfWApO1xuICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsIHNoYXBlKTtcbiAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcbiAgICByZXR1cm4gaWNvblN2Zztcbn0iLCJpbXBvcnQgJy4uL2Nzcy1mb2xkZXIvc2lkZWJhci5jc3MnO1xuXG5mdW5jdGlvbiBzaWRlYmFyRGl2ICh0eHQsIGNsYXNzTmFtZSwgdGl0bGUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IHR4dDtcbiAgICBlbGVtLnRpdGxlID0gdGl0bGU7XG4gICAgcmV0dXJuIGVsZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIHNpZGViYXIuYXBwZW5kKFxuICAgICAgICBzaWRlYmFyRGl2KCdIb21lJywgJ2hvbWUnLCAnaG9tZScpLFxuICAgICAgICBzaWRlYmFyRGl2KCdQcm9qZWN0JywgJ3Byb2plY3QnLCAnbmV3LXByb2plY3QnKSxcbiAgICAgICAgc2lkZWJhckRpdignQXQgSG9tZScsICdjYXRlJywgJ2F0aG9tZScpLFxuICAgICAgICBzaWRlYmFyRGl2KCdXb3JrJywgJ2NhdGUnLCAnd29yaycpLFxuICAgICAgICBzaWRlYmFyRGl2KCdTY2hvb2wnLCAnY2F0ZScsICdzY2hvb2wnKSxcbiAgICAgICAgc2lkZWJhckRpdignUGxheWdyb3VuZCcsICdjYXRlJywgJ3BsYXlncm91bmQnKSxcbiAgICApO1xufVxuIiwiaW1wb3J0ICcuLi9jc3MtZm9sZGVyL3RvcGJhci5jc3MnO1xuaW1wb3J0IGltYWdlIGZyb20gJy4uL2ltYWdlLWZvbGRlci90b2RvLWZhdmljb24ucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlSW1nKCkge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgndG9wYmFyLWljb24nKTtcbiAgICByZXR1cm4gaW1nO1xufVxuXG4gZnVuY3Rpb24gdG9wYmFyKHR4dCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3RvcGJhcicpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChjcmVhdGVJbWcoKSlcbiAgICByZXR1cm4gZWxlbTtcbn0gXG5leHBvcnQgZGVmYXVsdCB0b3BiYXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB0b3BiYXIgZnJvbSAnLi9qcy1mb2xkZXIvdG9wYmFyJztcbmltcG9ydCBtYXBDYXRGdW5jIGZyb20gJy4vanMtZm9sZGVyL3NpZGViYXInO1xuaW1wb3J0IHRvZG9Ib21lIGZyb20gJy4vanMtZm9sZGVyL2VkaXQtZm9sZGVyL3RvZG8taG9tZSc7XG5pbXBvcnQgbmV3Q29udGVudCBmcm9tICcuL2pzLWZvbGRlci9uZXdDb250ZW50JztcbmltcG9ydCB0b2RvQWRkIGZyb20gJy4vanMtZm9sZGVyL2VkaXQtZm9sZGVyL3RvZG8tYWRkJztcbmltcG9ydCByZW5kZXJJY29uIGZyb20gJy4vanMtZm9sZGVyL3JlbmRlckljb24nO1xuaW1wb3J0IGNsaWNrSWNvbiBmcm9tICcuL2pzLWZvbGRlci9jbGlja0ljb24nO1xuXG5cbmNsYXNzIFRvZG8ge1xuICAgIGNyZWF0ZURpdihlbGVtVHlwZSwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1UeXBlKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICBcbiAgICBjb250ZW50RnVuYyA9ICgpID0+IHsgICAgICAgIFxuICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWUnKTtcbiAgICAgICAgaG9tZS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kb0hvbWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgICAgIG5ld0NvbnRlbnQocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZScpO1xuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvQWRkKGJ0bi50aXRsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgYXBwZW5kQm9keSgpIHtcbiAgICAgICAgY29uc3QgZD1cIk0xNTM2IDEwODh2MTI4cTAgMjYtMTkgNDV0LTQ1IDE5SDY0cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloMTQwOHEyNiAwIDQ1IDE5dDE5IDQ1em0wLTUxMnYxMjhxMCAyNi0xOSA0NXQtNDUgMTlINjRxLTI2IDAtNDUtMTlUMCA3MDRWNTc2cTAtMjYgMTktNDV0NDUtMTloMTQwOHEyNiAwIDQ1IDE5dDE5IDQ1em0wLTUxMnYxMjhxMCAyNi0xOSA0NXQtNDUgMTlINjRxLTI2IDAtNDUtMTlUMCAxOTJWNjRxMC0yNiAxOS00NVQ2NCAwaDE0MDhxMjYgMCA0NSAxOXQxOSA0NXpcIlxuICAgICAgICBjb25zdCBzaXplMSA9ICcxNTM2JztcbiAgICAgICAgY29uc3Qgc2l6ZTIgPSAnMTI4MCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEaXYoJ25hdicsICduYXYnKSwgXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURpdignZGl2JywgJ3NpZGViYXInKSxcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGl2KCdkaXYnLCAnY29udGVudCcpXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh0b3BiYXIoJ1RvZG8gTGlzdCBBcHAnKSk7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChyZW5kZXJJY29uKGQsIHNpemUxLCBzaXplMiwgJ3N2ZycpKTtcbiAgICAgICAgY2xpY2tJY29uKCk7XG4gICAgICAgIG1hcENhdEZ1bmMoKTtcbiAgICAgICAgb25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0hvbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRlbnRGdW5jKCk7XG5cbiAgICB9XG59XG5jb25zdCB0b2RvID0gbmV3IFRvZG8oKTtcbnRvZG8uYXBwZW5kQm9keSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=