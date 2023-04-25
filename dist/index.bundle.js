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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --light-dark: rgb(0,0,0,0.8);\n} \n\n.sidebar {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    align-items: center;\n    color: white;\n    /* background: white; */\n    background: rgb(122, 122, 238);\n}\n\n.home {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    opacity: 0.9;\n    padding: 10px 0;\n    font-size: 20px;\n    background: var(--light-dark);\n}\n.home:nth-child(1), .project:nth-child(2) {\n    opacity: 0.7;\n    border-bottom: 2px solid white;\n}\n.project {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    font-size: 20px;\n    opacity: 0.9;\n    padding: 10px 0;\n    background: var(--light-dark);\n}\n.home:hover, .project:hover, .cate:hover {\n    cursor: pointer;\n    background: #bdb7b7;\n}\n.cate {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    float: right;\n    width: 100%;\n    height: 8px;\n    font-size: 18px;\n    opacity: 0.9;\n    padding: 18px 0 18px 0;\n    background: var(--light-dark);\n}\n@media only screen and (max-width: 700px){\n    .sidebar {\n        background: rgb(122, 122, 238);\n        bottom: 0;\n        display: none;\n        height: auto;\n        margin-top: 0;\n    }\n    .home, .project {\n        font-size: 18px;\n    }\n    .cate {\n        font-size: 14px;\n        padding: 18px;\n        margin-bottom: 0;\n        bottom: 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css-folder/sidebar.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,6EAA6E;IAC7E,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,eAAe;IACf,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,eAAe;IACf,YAAY;IACZ,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI;QACI,8BAA8B;QAC9B,SAAS;QACT,aAAa;QACb,YAAY;QACZ,aAAa;IACjB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,aAAa;QACb,gBAAgB;QAChB,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --light-blue: rgb(202, 202, 223);\n    --light-dark: rgb(0,0,0,0.8);\n} \n\n.sidebar {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    align-items: center;\n    color: white;\n    /* background: white; */\n    background: rgb(122, 122, 238);\n}\n\n.home {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    opacity: 0.9;\n    padding: 10px 0;\n    font-size: 20px;\n    background: var(--light-dark);\n}\n.home:nth-child(1), .project:nth-child(2) {\n    opacity: 0.7;\n    border-bottom: 2px solid white;\n}\n.project {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    font-size: 20px;\n    opacity: 0.9;\n    padding: 10px 0;\n    background: var(--light-dark);\n}\n.home:hover, .project:hover, .cate:hover {\n    cursor: pointer;\n    background: #bdb7b7;\n}\n.cate {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    float: right;\n    width: 100%;\n    height: 8px;\n    font-size: 18px;\n    opacity: 0.9;\n    padding: 18px 0 18px 0;\n    background: var(--light-dark);\n}\n@media only screen and (max-width: 700px){\n    .sidebar {\n        background: rgb(122, 122, 238);\n        bottom: 0;\n        display: none;\n        height: auto;\n        margin-top: 0;\n    }\n    .home, .project {\n        font-size: 18px;\n    }\n    .cate {\n        font-size: 14px;\n        padding: 18px;\n        margin-bottom: 0;\n        bottom: 0;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --sidebarheight: 175px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 80px auto;\n    width: 100%;\n    height: 100vh;\n} \n.nav {\n    background: black;\n    color: var(--primary-light);\n    grid-column: 1/4;\n}\n.sidebar {\n    background: var(--primary-light);\n}\n.content {\n    background: var(--secondary-light);\n    grid-column: 2/4;\n}\n@media only screen and (max-width: 700px){\n    body {\n        width: auto;\n        overflow-x: hidden;\n        /* overflow: hidden; */\n        grid-template-columns: 1fr;\n        grid-template-rows: 80px 1fr;\n        /* 175px */\n    }\n    .nav, .content {\n        grid-column: 1/4;\n    }\n    .sidebar{\n        height: 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,sEAAsE;IACtE,aAAa;IACb,iCAAiC;IACjC,6BAA6B;IAC7B,WAAW;IACX,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;AACpB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;AACA;IACI;QACI,WAAW;QACX,kBAAkB;QAClB,sBAAsB;QACtB,0BAA0B;QAC1B,4BAA4B;QAC5B,UAAU;IACd;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --sidebarheight: 175px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 80px auto;\n    width: 100%;\n    height: 100vh;\n} \n.nav {\n    background: black;\n    color: var(--primary-light);\n    grid-column: 1/4;\n}\n.sidebar {\n    background: var(--primary-light);\n}\n.content {\n    background: var(--secondary-light);\n    grid-column: 2/4;\n}\n@media only screen and (max-width: 700px){\n    body {\n        width: auto;\n        overflow-x: hidden;\n        /* overflow: hidden; */\n        grid-template-columns: 1fr;\n        grid-template-rows: 80px 1fr;\n        /* 175px */\n    }\n    .nav, .content {\n        grid-column: 1/4;\n    }\n    .sidebar{\n        height: 0;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2REFBTTtBQUM5Qix3QkFBd0IsaUVBQVU7QUFDbEMsUUFBUSxnRUFBUztBQUNqQixRQUFRLDhEQUFVO0FBQ2xCO0FBQ0EsWUFBWSw0RUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvY29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvZGV0YWlscy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvZWRpdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvdG9wYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvY29udGVudC5jc3M/ZTFjZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci9kZXRhaWxzLmNzcz9iN2M0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MtZm9sZGVyL2VkaXQuY3NzPzZjYjAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy1mb2xkZXIvc2lkZWJhci5jc3M/ZGVlYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzLWZvbGRlci90b3BiYXIuY3NzP2U0NDYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGFiYXNlL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NsaWNrLWRldGFpbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2NsaWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9jbGlja0ljb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvY3JlYXRlLWZvbGRlci9zdWJtaXQtY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZGVsZXRlLWRldGFpbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2VkaXQtZm9sZGVyL2NhbGVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvc2V0RWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL2VkaXQtZm9sZGVyL3N1Ym1pdC1lZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvdG9kby1hZGQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9lZGl0LWZvbGRlci90b2RvLWhvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci9uZXdDb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1mb2xkZXIvcmVuZGVySWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtZm9sZGVyL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLWZvbGRlci90b3BiYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIwMiwgMjAyLCAyMjMpO1xcbiAgICAtLWRhcmstYmx1ZTogcmdiKDEwNiwgMTA2LCAxNzkpO1xcbn0gXFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDdweCAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDI0NSwgMTIwLCAyMDUpO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjQ1LCAxMjAsIDIwNSk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG86Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwIDAgNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLCAuZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogM3B4IDlweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHJnYigxMTMsIDEwNSwgMjE0KTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGV0YWlsLWJ0biwgLmRhdGUsIC5lZGl0LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDYsIDEwNiwgMTc5KTtcXG4gICAgY29sb3I6IHJnYigxMDYsIDEwNiwgMTc5KTtcXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5NiwgMTMyLCAxMzIpO1xcbiAgICBjb2xvcjogcmdiKDE5NiwgMTMyLCAxMzIpO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGVsZXRlLWJ0biBzdmcge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IHJnYigxOTYsIDEzMiwgMTMyKTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4gc3ZnIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmaWxsOiB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZWxldGUtYnRuOmhvdmVyLCAuZGV0YWlsLWJ0bjpob3ZlciwgLmVkaXQtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZWRpdC1idG4ge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRldGFpbC1idG4ge1xcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XFxuICAgIH1cXG5cXG59IFxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbzpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB9XFxufSBcXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kYXRlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuaXRlbSB7XFxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmVkaXQtYnRuIHtcXG4gICAgICAgIHdpZHRoOiAxN3B4O1xcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbn0gXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG5cXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5pdGVtIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGF0ZSB7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG59IFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MtZm9sZGVyL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZOztJQUVoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMzMzO1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNlZWU7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigyMDIsIDIwMiwgMjIzKTtcXG4gICAgLS1kYXJrLWJsdWU6IHJnYigxMDYsIDEwNiwgMTc5KTtcXG59IFxcblxcbi5jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiA3cHggMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0NSwgMTIwLCAyMDUpO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYigyNDUsIDEyMCwgMjA1KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDI0NSwgMTIwLCAyMDUpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxufVxcblxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRldGFpbCwgLmVkaXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDNweCA5cHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMTEzLCAxMDUsIDIxNCk7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRldGFpbC1idG4sIC5kYXRlLCAuZWRpdC1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTA2LCAxMDYsIDE3OSk7XFxuICAgIGNvbG9yOiByZ2IoMTA2LCAxMDYsIDE3OSk7XFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGVsZXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGVsZXRlLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOTYsIDEzMiwgMTMyKTtcXG4gICAgY29sb3I6IHJnYigxOTYsIDEzMiwgMTMyKTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRlbGV0ZS1idG4gc3ZnIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmaWxsOiByZ2IoMTk2LCAxMzIsIDEzMik7XFxufVxcbi5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmVkaXQtYnRuIHN2ZyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsbDogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGVsZXRlLWJ0bjpob3ZlciwgLmRldGFpbC1idG46aG92ZXIsIC5lZGl0LWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG86Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmVkaXQtYnRuIHtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5kZXRhaWwtYnRuIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xcbiAgICB9XFxuXFxufSBcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyB7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG86Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgfVxcbn0gXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCl7XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuZGF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLml0ZW0ge1xcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgfVxcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIC5lZGl0LWJ0biB7XFxuICAgICAgICB3aWR0aDogMTdweDtcXG4gICAgICAgIGhlaWdodDogMTdweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG59IFxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpe1xcbiAgICAuY29udGVudCAuY29udGFpbmVyIC50b2RvIHtcXG4gICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuXFxuICAgIH1cXG4gICAgLmNvbnRlbnQgLmNvbnRhaW5lciAudG9kbyAuaXRlbSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuICAgIC5jb250ZW50IC5jb250YWluZXIgLnRvZG8gLmRhdGUge1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxufSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2hlY2stZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxlIC5jbG9zZTpsYXN0LWNoaWxke1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiByZ2IoMCwwLDAsMC43KTtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxlIC5jbG9zZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHJnYigxNzcsIDE0MSwgMTQxKTtcXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94IC5rZXk6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94IC5rZXksIC52YWx1ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3h7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveCAua2V5OmZpcnN0LWNoaWxke1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9ICAgIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLWZvbGRlci9kZXRhaWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzSEFBc0g7SUFDdEgsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmNoZWNrLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC44KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLXRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZSAuY2xvc2U6bGFzdC1jaGlsZHtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogcmdiKDAsMCwwLDAuNyk7XFxufVxcbi5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZSAuY2xvc2U6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNDEsIDE0MSk7XFxuICAgIHBhZGRpbmc6IDEycHggMzBweDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveCAua2V5OmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyAuZGV0YWlsLWJveCAua2V5LCAudmFsdWV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLmNoZWNrLWRldGFpbHMgLmRldGFpbHMtaW5mbyB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAuY2hlY2stZGV0YWlscyAuZGV0YWlscy1pbmZvIC5kZXRhaWwtYm94e1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5jaGVjay1kZXRhaWxzIC5kZXRhaWxzLWluZm8gLmRldGFpbC1ib3ggLmtleTpmaXJzdC1jaGlsZHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfSAgICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmVkaXQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjQpO1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXFxufSBcXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jbG9zZXtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAud2FybmluZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjMsIDY2LCA2Nik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2xvc2U6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAudGV4dGFyZWE6bnRoLWNoaWxkKDIpIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG5cXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuc2VsZWN0IHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLnRleHRhcmVhIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuZHVlLWRhdGUsIC5jaGFuZ2UtcHJpb3JpdHksIC5jb25maXJtLWVkaXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jaGFuZ2UtZGF0ZSB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDU0LCA1NCwgMTI0KTtcXG4gICAgY29sb3I6IHJnYig1MiwgNTIsIDE5Nik7XFxufVxcbi5sb3ctYnRuIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC4yKTtcXG59XFxuLm1lZGl1bS1idG4ge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC4yKTtcXG59XFxuLmhpZ2gtYnRuIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuMik7XFxufVxcbi5sb3ctYnRuOmhvdmVyLCAubWVkaXVtLWJ0bjpob3ZlciwgLmhpZ2gtYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC40KTtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY29uZmlybS1lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig4OSwgODksIDE5OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY29uZmlybS1lZGl0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgIH0gXFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLnRleHRhcmVhIHtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcXG4gICAgfVxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jaGFuZ2UtcHJpb3JpdHkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2hhbmdlLXByaW9yaXR5IC5wcmlvcml0eSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICB9XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNvbmZpcm0tZWRpdCB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICAvKiBwYWRkaW5nOiBub25lOyAqL1xcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLWZvbGRlci9lZGl0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdFQUF3RTtBQUM1RTtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5lZGl0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC40KTtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbn0gXFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2xvc2V7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLndhcm5pbmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCA2NiwgNjYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNsb3NlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLnRleHRhcmVhOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuXFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLnNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC50ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweCAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmR1ZS1kYXRlLCAuY2hhbmdlLXByaW9yaXR5LCAuY29uZmlybS1lZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2hhbmdlLWRhdGUge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYig1NCwgNTQsIDEyNCk7XFxuICAgIGNvbG9yOiByZ2IoNTIsIDUyLCAxOTYpO1xcbn1cXG4ubG93LWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuMik7XFxufVxcbi5tZWRpdW0tYnRuIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuMik7XFxufVxcbi5oaWdoLWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjIpO1xcbn1cXG4ubG93LWJ0bjpob3ZlciwgLm1lZGl1bS1idG46aG92ZXIsIC5oaWdoLWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuNCk7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNvbmZpcm0tZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODksIDg5LCAxOTkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNvbmZpcm0tZWRpdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3gge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICB9IFxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC50ZXh0YXJlYSB7XFxuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XFxuICAgIH1cXG4gICAgLmVkaXQtY29udGFpbmVyIC5lZGl0LWJveCAuY2hhbmdlLXByaW9yaXR5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5lZGl0LWNvbnRhaW5lciAuZWRpdC1ib3ggLmNoYW5nZS1wcmlvcml0eSAucHJpb3JpdHkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgfVxcbiAgICAuZWRpdC1jb250YWluZXIgLmVkaXQtYm94IC5jb25maXJtLWVkaXQge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgLyogcGFkZGluZzogbm9uZTsgKi9cXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZGFyazogIzMzMztcXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjAyLCAyMDIsIDIyMyk7XFxuICAgIC0tbGlnaHQtZGFyazogcmdiKDAsMCwwLDAuOCk7XFxufSBcXG5cXG4uc2lkZWJhciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgKi9cXG4gICAgYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAyMzgpO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZGFyayk7XFxufVxcbi5ob21lOm50aC1jaGlsZCgxKSwgLnByb2plY3Q6bnRoLWNoaWxkKDIpIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1kYXJrKTtcXG59XFxuLmhvbWU6aG92ZXIsIC5wcm9qZWN0OmhvdmVyLCAuY2F0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI2JkYjdiNztcXG59XFxuLmNhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBwYWRkaW5nOiAxOHB4IDAgMThweCAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1kYXJrKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMjM4KTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuICAgIC5ob21lLCAucHJvamVjdCB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG4gICAgLmNhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgcGFkZGluZzogMThweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy1mb2xkZXIvc2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZFQUE2RTtJQUM3RSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSTtRQUNJLDhCQUE4QjtRQUM5QixTQUFTO1FBQ1QsYUFBYTtRQUNiLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMzMzO1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNlZWU7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigyMDIsIDIwMiwgMjIzKTtcXG4gICAgLS1saWdodC1kYXJrOiByZ2IoMCwwLDAsMC44KTtcXG59IFxcblxcbi5zaWRlYmFyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDIzOCk7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1kYXJrKTtcXG59XFxuLmhvbWU6bnRoLWNoaWxkKDEpLCAucHJvamVjdDpudGgtY2hpbGQoMikge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG4uaG9tZTpob3ZlciwgLnByb2plY3Q6aG92ZXIsIC5jYXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjYmRiN2I3O1xcbn1cXG4uY2F0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHBhZGRpbmc6IDE4cHggMCAxOHB4IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWRhcmspO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAyMzgpO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gICAgLmhvbWUsIC5wcm9qZWN0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuY2F0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxubmF2IHN2ZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAudG9wYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5uYXYgLnRvcGJhciAudG9wYmFyLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgbmF2IC50b3BiYXIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgIG5hdiBzdmcge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgbmF2IC50b3BiYXIgLnRvcGJhci1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLWZvbGRlci90b3BiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDREQUE0RDtBQUNoRTtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxubmF2IHN2ZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAudG9wYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5uYXYgLnRvcGJhciAudG9wYmFyLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgbmF2IC50b3BiYXIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgIG5hdiBzdmcge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgbmF2IC50b3BiYXIgLnRvcGJhci1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMzMzO1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNlZWU7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbiAgICAtLXNpZGViYXJoZWlnaHQ6IDE3NXB4O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufSBcXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgYm9keSB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICAgICAgICAvKiAxNzVweCAqL1xcbiAgICB9XFxuICAgIC5uYXYsIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIH1cXG4gICAgLnNpZGViYXJ7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0VBQXNFO0lBQ3RFLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxuICAgIC0tc2lkZWJhcmhlaWdodDogMTc1cHg7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59IFxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICBib2R5IHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcXG4gICAgICAgIC8qIDE3NXB4ICovXFxuICAgIH1cXG4gICAgLm5hdiwgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgfVxcbiAgICAuc2lkZWJhcntcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGV0YWlscy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RldGFpbHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cbmNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGF0aG9tZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3NpdGlvbicpO1xuICAgIHJldHVybiBhdGhvbWU7XG59XG5jb25zdCBzZXRQb3NpdGlvbiA9IChkYXRhKSA9PiB7ICAgICAgICBcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc2l0aW9uJywgZGF0YSk7XG59XG5jb25zdCBnZXRBcGkgPSAoKSA9PiB7XG4gICAgY29uc3QgYXRob21lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKTtcbiAgICByZXR1cm4gYXRob21lWzBdO1xufVxuY29uc3Qgc2V0QXBpID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59XG5cblxuZXhwb3J0IHtnZXRBcGksIHNldEFwaSwgZ2V0UG9zaXRpb24sIHNldFBvc2l0aW9ufTsgIiwiaW1wb3J0ICcuLi9jc3MtZm9sZGVyL2RldGFpbHMuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlRGl2KHR4dCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC10eHQnLCBjbGFzc05hbWUpO1xuICAgIGRldGFpbC50ZXh0Q29udGVudCA9IHR4dDtcbiAgICBcbiAgICByZXR1cm4gZGV0YWlsXG59XG5mdW5jdGlvbiB0aXRsZURpdihpdGVtcykge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtdGl0bGUnKTtcbiAgICBib3guYXBwZW5kKFxuICAgICAgICBjcmVhdGVEaXYoYCR7aXRlbXMudGl0bGV9YCksXG4gICAgICAgIGNyZWF0ZURpdignWCcsICdjbG9zZScpXG4gICAgKVxuXG4gICAgcmV0dXJuIGJveDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJvZHlEaXYoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtYm94Jyk7XG4gICAgYm94LmFwcGVuZChcbiAgICAgICAgY3JlYXRlRGl2KGtleSwgJ2tleScpLFxuICAgICAgICBjcmVhdGVEaXYodmFsdWUsICd2YWx1ZScpXG4gICAgKVxuICAgIHJldHVybiBib3hcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkZXRhaWxCdG4sIGl0ZW1zKSB7XG4gICAgZGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxCZy5jbGFzc0xpc3QuYWRkKCdjaGVjay1kZXRhaWxzJyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWluZm8nKTtcbiAgICAgICAgZGV0YWlsQmcuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gICAgICAgIGRldGFpbHMuYXBwZW5kKFxuICAgICAgICAgICAgdGl0bGVEaXYoaXRlbXMpLFxuICAgICAgICAgICAgY3JlYXRlQm9keURpdignUHJvamVjdDogJywgaXRlbXMuZGVzY3JpcHRpb24pLFxuICAgICAgICAgICAgY3JlYXRlQm9keURpdignRHVlIERhdGU6ICcsIGl0ZW1zLmR1ZURhdGUpLFxuICAgICAgICAgICAgY3JlYXRlQm9keURpdignUHJpb3JpdHk6ICcsIGl0ZW1zLnByaW9yaXR5KSxcbiAgICAgICAgICAgIGNyZWF0ZUJvZHlEaXYoJ0RldGFpbHM6ICcsIGl0ZW1zLm5vdGVzKSxcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXRhaWxCZyk7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgICAgIGlmKGNsb3NlKSB7XG4gICAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1kZXRhaWxzJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkZXRhaWxCZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbn0iLCJpbXBvcnQgJy4uL2Nzcy1mb2xkZXIvZWRpdC5jc3MnO1xuaW1wb3J0IHNldEVkaXQgZnJvbSAnLi9lZGl0LWZvbGRlci9zZXRFZGl0JztcbmltcG9ydCBzdWJtaXRFZGl0IGZyb20gJy4vZWRpdC1mb2xkZXIvc3VibWl0LWVkaXQnO1xuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dHMoY2xhc3NOYW1lLCBpdGVtLCB0eXBlKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS52YWx1ZSA9IGl0ZW07XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVEaXYoKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdC1jb250YWluZXInKTtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgnZWRpdC1ib3gnKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGJveCk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVCb3godHh0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IHR4dDtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURhdGUoY2xhc3NOYW1lLCBpdGVtLCB0eXBlKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWxlbS50eXBlID0gJ2RhdGUnO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gZGF0ZUJveChjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUJveCgnRHVlIERhdGU6ICcpLFxuICAgICAgICBjcmVhdGVEYXRlKCdjaGFuZ2UtZGF0ZScpLFxuICAgICk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBwcmlvcml0eSh0eHQsIGNsYXNzTmFtZSwgaXRlbXMsIHRpdGxlKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgc2V0RWRpdChlbGVtLCB0aXRsZSwgaXRlbXMsICAndGV4dENvbnRlbnQnLCAncHJpb3JpdHknKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIHByaW9yaXR5Qm94KGNsYXNzTmFtZSwgaXRlbXMsIHRpdGxlKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uYXBwZW5kKFxuICAgICAgICBjcmVhdGVCb3goJ1ByaW9yaXR5OiAnLCAncHJpb3JpdHknKSxcbiAgICAgICAgcHJpb3JpdHkoJ0xvdycsICdsb3ctYnRuJywgaXRlbXMsIHRpdGxlKSxcbiAgICAgICAgcHJpb3JpdHkoJ01lZGl1bScsICdtZWRpdW0tYnRuJywgaXRlbXMsIHRpdGxlKSxcbiAgICAgICAgcHJpb3JpdHkoJ0hpZ2gnLCAnaGlnaC1idG4nLCBpdGVtcywgdGl0bGUpLFxuICAgICk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBlZGl0RnVuYyh0eHQsIGNsYXNzTmFtZSwgdGl0bGUsIGl0ZW1zKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0eHQ7ICAgICAgICBcbiAgICBzdWJtaXRFZGl0KGVsZW0sIHRpdGxlLCBpdGVtcyk7XG4gICAgcmV0dXJuIGVsZW07IFxufSBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW0sIGl0ZW1zLCB0aXRsZSkgeyBcblxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KCkpO1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1ib3gnKTtcbiAgICAgICAgYm94LmFwcGVuZChcbiAgICAgICAgICAgIGNyZWF0ZUJveCgnWCcsICdjbG9zZScpLFxuICAgICAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsIGl0ZW1zLnRpdGxlLCAndGV4dGFyZWEnKSxcbiAgICAgICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCBpdGVtcy5ub3RlcywgJ3RleHRhcmVhJyksXG4gICAgICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHRhcmVhJywgaXRlbXMuZGVzY3JpcHRpb24sICd0ZXh0YXJlYScpLFxuICAgICAgICAgICAgZGF0ZUJveCgnZHVlLWRhdGUnLCBpdGVtcy5kdWVEYXRlKSxcbiAgICAgICAgICAgIHByaW9yaXR5Qm94KCdjaGFuZ2UtcHJpb3JpdHknLCBpdGVtcywgdGl0bGUpLFxuICAgICAgICAgICAgZWRpdEZ1bmMoJ0VkaXQnLCAnY29uZmlybS1lZGl0JywgdGl0bGUsIGl0ZW1zKSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH0pXG4gICAgfSk7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ZnJyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgXG4gICAgICAgID8gJ25vbmUnIDogJ2Jsb2NrJztcblxuICAgIH0pXG59IiwiaW1wb3J0ICcuLi9jc3MtZm9sZGVyL2NvbnRlbnQuY3NzJztcbmltcG9ydCBjbGlja0RldGFpbCBmcm9tICcuL2NsaWNrLWRldGFpbCc7XG5pbXBvcnQgc2V0RWRpdCBmcm9tICcuL2VkaXQtZm9sZGVyL3NldEVkaXQnO1xuaW1wb3J0IGNsaWNrRWRpdCBmcm9tICcuL2NsaWNrLWVkaXQnO1xuaW1wb3J0IGRlbGV0ZURldGFpbCBmcm9tICcuL2RlbGV0ZS1kZXRhaWwnO1xuaW1wb3J0IHJlbmRlckljb24gZnJvbSAnLi9yZW5kZXJJY29uJztcblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3goaXRlbXMsIHRpdGxlKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94Lm5hbWUgPSAnaXNyZWFkJztcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gaXRlbXNbJ2NoZWNrbGlzdCddO1xuICAgIHNldEVkaXQoY2hlY2tib3gsIHRpdGxlLCBpdGVtcywgJ2NoZWNrZWQnLCAnY2hlY2tsaXN0Jyk7XG4gICAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0aWVzKHR4dCwgY2xhc3NOYW1lLCBpdGVtcykge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nLCBjbGFzc05hbWUpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBpdGVtc1sndGl0bGUnXTtcbiAgICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZGV0YWlsQnV0dG9uKHR4dCwgY2xhc3NOYW1lLCBpdGVtcykge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2RldGFpbCcpO1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChkZXRhaWwpO1xuICAgIGRldGFpbC50ZXh0Q29udGVudCA9IHR4dDtcbiAgICBjbGlja0RldGFpbChkZXRhaWwsIGl0ZW1zKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGRhdGVCdXR0b24odHh0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkZXRhaWwnKTtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoZGV0YWlsKTtcbiAgICBkZXRhaWwudGV4dENvbnRlbnQgPSB0eHQ7XG4gICAgcmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGVkaXRCdXR0b24odHh0LCBjbGFzc05hbWUsIGl0ZW1zLCB0aXRsZSkge1xuICAgIGNvbnN0IGxpbmsgPSBcIk01IDIycS0uODI1IDAtMS40MTMtLjU4OFQzIDIwVjZxMC0uODI1LjU4OC0xLjQxM1Q1IDRoMVYzcTAtLjQyNS4yODgtLjcxM1Q3IDJxLjQyNSAwIC43MTMuMjg4VDggM3YxaDhWM3EwLS40MjUuMjg4LS43MTNUMTcgMnEuNDI1IDAgLjcxMy4yODhUMTggM3YxaDFxLjgyNSAwIDEuNDEzLjU4OFQyMSA2djVxMCAuNDI1LS4yODguNzEzVDIwIDEycS0uNDI1IDAtLjcxMy0uMjg4VDE5IDExdi0xSDV2MTBoNnEuNDI1IDAgLjcxMy4yODhUMTIgMjFxMCAuNDI1LS4yODguNzEzVDExIDIySDVabTE3LjEyNS01TDIwIDE0Ljg3NWwuNzI1LS43MjVxLjI3NS0uMjc1LjctLjI3NXQuNy4yNzVsLjcyNS43MjVxLjI3NS4yNzUuMjc1Ljd0LS4yNzUuN2wtLjcyNS43MjVaTTE1LjcgMjNoLTEuMnEtLjIgMC0uMzUtLjE1VDE0IDIyLjV2LTEuMnEwLS4yLjA3NS0uMzg4dC4yMjUtLjMzN2w1LTVsMi4xMjUgMi4xMjVsLTUgNXEtLjE1LjE1LS4zMzguMjI1VDE1LjcgMjNaTTUgOGgxNFY2SDV2MlptMCAwVjZ2MlpcIjtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlZGl0LmFwcGVuZENoaWxkKHJlbmRlckljb24obGluaywgJzI0JywgJzI0JykpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgY2xpY2tFZGl0KGVsZW0sIGl0ZW1zLCB0aXRsZSk7XG4gICAgcmV0dXJuIGVsZW07IFxufSBcbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbihpbmRleCwgdHh0LCBjbGFzc05hbWUsIGl0ZW1zLCB0aXRsZSkge1xuICAgIGNvbnN0IGxpbms9IFwibTkuNCAxNi41bDIuNi0yLjZsMi42IDIuNmwxLjQtMS40bC0yLjYtMi42TDE2IDkuOWwtMS40LTEuNGwtMi42IDIuNmwtMi42LTIuNkw4IDkuOWwyLjYgMi42TDggMTUuMWwxLjQgMS40Wk03IDIxcS0uODI1IDAtMS40MTMtLjU4OFQ1IDE5VjZINFY0aDVWM2g2djFoNXYyaC0xdjEzcTAgLjgyNS0uNTg4IDEuNDEzVDE3IDIxSDdaTTE3IDZIN3YxM2gxMFY2Wk03IDZ2MTNWNlpcIjtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgICBkZWxldGVCdG4uaWQgPSBpbmRleDtcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQocmVuZGVySWNvbihsaW5rLCAnMjQnLCAnMjQnKSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIGRlbGV0ZURldGFpbChlbGVtLCBpdGVtcywgdGl0bGUpO1xuICAgIHJldHVybiBlbGVtO1xufSBcbmZ1bmN0aW9uIGNyZWF0ZURpdihpbmRleCwgY2xhc3NOYW1lLCBpdGVtcywgdGl0bGUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUNoZWNrYm94KGl0ZW1zLCB0aXRsZSksXG4gICAgICAgIGNyZWF0ZVByb3BlcnRpZXMoaW5kZXgsICdrZXknLCBpdGVtcyksXG4gICAgICAgIGRldGFpbEJ1dHRvbignRGV0YWlscycsICdkZXRhaWwtYnRuJywgaXRlbXMpLFxuICAgICAgICBkYXRlQnV0dG9uKFxuICAgICAgICAgICAgaXRlbXNbJ2R1ZURhdGUnXS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgaXRlbXNbJ2R1ZURhdGUnXS5pbmRleE9mKCcgJykgKyAxKSwgXG4gICAgICAgICAgICAgICAgJ2RhdGUnXG4gICAgICAgICksXG4gICAgICAgIGVkaXRCdXR0b24oJ0VkaXQnLCAnZWRpdC1idG4nLCBpdGVtcywgdGl0bGUpLFxuICAgICAgICBkZWxldGVCdXR0b24oaW5kZXgsICdEZWxldGUnLCAnZGVsZXRlJywgaXRlbXMsIHRpdGxlKSxcbiAgICApO1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY29udGVudChpdGVtcykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZURpdihpdGVtc1tpbmRleF1bJ19pZCddLCAndG9kbycsIGl0ZW1zW2luZGV4XSwgaXRlbXNbaW5kZXhdWydvYmp0aXRsZSddKVxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgY29udGVudDsiLCJpbXBvcnQgeyBnZXRBcGksIHNldEFwaSwgZ2V0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvYXBpXCI7XG5pbXBvcnQgdG9kb0hvbWUgZnJvbSBcIi4uL2VkaXQtZm9sZGVyL3RvZG8taG9tZVwiO1xuaW1wb3J0IHRvZG9BZGQgZnJvbSBcIi4uL2VkaXQtZm9sZGVyL3RvZG8tYWRkXCI7XG5pbXBvcnQgY2FsZW5kZXIgZnJvbSBcIi4uL2VkaXQtZm9sZGVyL2NhbGVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB3YXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhcm5pbmcnKTtcbiAgICAgICAgbGV0IHN0YXRlID0gW2dldEFwaSgpXTtcbiAgICAgICAgY29uc3QgYXJyID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdub3RlcyddO1xuICAgICAgICBsZXQgdG9kb09iaiA9IHt9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcbiAgICAgICAgdG9kb09ialsnX2lkJ10gPSBzdGF0ZVswXVtzZWxlY3QudmFsdWVdLmxlbmd0aDtcblxuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0YXJlYScpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGV4dGFyZWEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAodGV4dGFyZWFbaW5kZXhdLnZhbHVlLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvT2JqW2FycltpbmRleF1dID0gdGV4dGFyZWFbaW5kZXhdLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXlEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1kYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShteURhdGUpO1xuICAgICAgICBpZiAoISFkYXRlLnZhbHVlT2YoKSkge1xuICAgICAgICAgICAgdG9kb09ialsnZHVlRGF0ZSddID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfSAke2NhbGVuZGVyW2RhdGUuZ2V0TW9udGgoKV19ICR7ZGF0ZS5nZXREYXRlKCkrMX1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvT2JqWydkdWVEYXRlJ10gPSAnMDAwMCBKYW4gMDAnO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9PYmpbJ3ByaW9yaXR5J10gPSAnTG93JztcbiAgICAgICAgdG9kb09ialsnY2hlY2tsaXN0J10gPSBmYWxzZTtcbiAgICAgICAgdG9kb09ialsnb2JqdGl0bGUnXSA9IHNlbGVjdC52YWx1ZTtcbiAgICAgICAgc3RhdGVbMF1bc2VsZWN0LnZhbHVlXS5wdXNoKHRvZG9PYmopO1xuICAgICAgICBzZXRBcGkoc3RhdGUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVkaXRDb250YWluZXIpO1xuICAgICAgICBpZihnZXRQb3NpdGlvbigpID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2RvSG9tZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvQWRkKHNlbGVjdC52YWx1ZSk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBnZXRBcGksIHNldEFwaSwgZ2V0UG9zaXRpb24gfSBmcm9tIFwiLi4vZGF0YWJhc2UvYXBpXCI7XG5pbXBvcnQgdG9kb0hvbWUgZnJvbSBcIi4vZWRpdC1mb2xkZXIvdG9kby1ob21lXCI7XG5pbXBvcnQgdG9kb0FkZCBmcm9tIFwiLi9lZGl0LWZvbGRlci90b2RvLWFkZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtLCBpdGVtcywgdGl0bGUpIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSBbZ2V0QXBpKCldO1xuXG4gICAgICAgIGNvbnN0IG5ld09iaiA9IHN0YXRlWzBdW3RpdGxlXS5maWx0ZXIoXG4gICAgICAgICAgICAob2JqKSA9PiBvYmpbJ19pZCddICE9PSBpdGVtc1snX2lkJ11cbiAgICAgICAgKTtcbiAgICAgICAgc3RhdGVbMF1bdGl0bGVdID0gbmV3T2JqO1xuICAgICAgICBzZXRBcGkoc3RhdGUpO1xuICAgICAgICBpZihnZXRQb3NpdGlvbigpID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2RvSG9tZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvQWRkKHRpdGxlKTtcbiAgICB9KTtcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgIFtcbiAgICAnSmFuJywgXG4gICAgJ0ZlYicsIFxuICAgICdNYXInLCBcbiAgICAnQXByJywgXG4gICAgJ01heScsIFxuICAgICdKdW4nLCBcbiAgICAnSnVseScsIFxuICAgICdBdWcnLCBcbiAgICAnU2VwJywgXG4gICAgJ09jdCcsIFxuICAgICdOb3YnLCBcbiAgICAnRGVjJ1xuXSIsImltcG9ydCB7IGdldEFwaSwgc2V0QXBpIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtLCB0aXRsZSwgaXRlbXMsIHR4dENvbnRlbnQsIHZhbHVlICkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaSA9IFtnZXRBcGkoKV07XG4gICAgICAgIGxldCBpbmRleCA9IGFwaVswXVt0aXRsZV0uZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmpbJ19pZCddID09IGl0ZW1zWydfaWQnXVxuICAgICAgICB9KTtcblxuICAgICAgICBhcGlbMF1bdGl0bGVdW2luZGV4XVt2YWx1ZV0gPSBlbGVtW3R4dENvbnRlbnRdO1xuICAgICAgICBzZXRBcGkoYXBpKTtcblxuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBnZXRBcGksIHNldEFwaSwgZ2V0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvYXBpXCI7XG5pbXBvcnQgdG9kb0hvbWUgZnJvbSBcIi4vdG9kby1ob21lXCI7XG5pbXBvcnQgdG9kb0FkZCBmcm9tIFwiLi90b2RvLWFkZFwiO1xuaW1wb3J0IGNhbGVuZGVyIGZyb20gXCIuL2NhbGVuZGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbSwgdGl0bGUsIGl0ZW1zLCB0eHRDb250ZW50LCB2YWx1ZSkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaSA9IFtnZXRBcGkoKV07XG4gICAgICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3QgbXlBcnIgPSBbJ3RpdGxlJywgJ25vdGVzJywgJ2Rlc2NyaXB0aW9uJ11cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGV4dGFyZWEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqSW5kZXggPSBhcGlbMF1bdGl0bGVdLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialsnX2lkJ10gPT0gaXRlbXNbJ19pZCddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFwaVswXVt0aXRsZV1bb2JqSW5kZXhdW215QXJyW2luZGV4XV0gPSB0ZXh0YXJlYVtpbmRleF0udmFsdWU7XG4gICAgICAgICAgICBzZXRBcGkoYXBpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGFuZ2VEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1kYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjaGFuZ2VEYXRlKTtcblxuICAgICAgICBpZiAoISFkYXRlLnZhbHVlT2YoKSkge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZU5vID0gZGF0ZS5nZXREYXRlKCkgKzE7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBhcGlbMF1bdGl0bGVdLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialsnX2lkJ10gPT0gaXRlbXNbJ19pZCddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFwaVswXVt0aXRsZV1baW5kZXhdWydkdWVEYXRlJ10gPSBgJHt5ZWFyfSAke2NhbGVuZGVyW21vbnRoXX0gJHtkYXRlTm99YDtcbiAgICAgICAgICAgIHNldEFwaShhcGkpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWRpdENvbnRhaW5lcik7XG4gICAgICAgIGlmKGdldFBvc2l0aW9uKCkgPT09ICdob21lJykge1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9Ib21lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG9BZGQodGl0bGUpO1xuICAgIH0pOyAgXG59ICAgIiwiaW1wb3J0IHsgZ2V0QXBpLCBnZXRQb3NpdGlvbiwgc2V0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvYXBpXCI7XG5pbXBvcnQgY29udGVudCBmcm9tIFwiLi4vY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0aXRsZSkge1xuICAgIGNvbnN0IGNvbnRlbnRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgY29udGVudGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgICBjb250ZW50Y29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQoZ2V0QXBpKClbdGl0bGVdKSk7XG4gICAgc2V0UG9zaXRpb24odGl0bGUpO1xufSIsImltcG9ydCB7IGdldEFwaSwgc2V0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvYXBpXCI7XG5pbXBvcnQgJy4uLy4uL2Nzcy1mb2xkZXIvY29udGVudC5jc3MnO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSBcIi4uL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odGl0bGUpIHtcbiAgICBjb25zdCBjYXRBcnIgPSBbJ2F0aG9tZScsICd3b3JrJywgJ3NjaG9vbCcsICdwbGF5Z3JvdW5kJ107XG4gICAgY29uc3Qgc3RhdGUgPSBbXG4gICAgICAgIC4uLmdldEFwaSgpW2NhdEFyclswXV0sXG4gICAgICAgIC4uLmdldEFwaSgpW2NhdEFyclsxXV0sXG4gICAgICAgIC4uLmdldEFwaSgpW2NhdEFyclsyXV0sXG4gICAgICAgIC4uLmdldEFwaSgpW2NhdEFyclszXV0sXG4gICAgXTtcbiAgICBsZXQgc2h1ZmZsZWQgPSBzdGF0ZS5zb3J0KChhLCBiKSA9PiBhLnRpdGxlID4gYi50aXRsZSk7XG5cbiAgICBjb25zdCBjb250ZW50Y29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgaWYoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRlbnRjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gICAgY29udGVudGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KHNodWZmbGVkKSk7XG4gICAgc2V0UG9zaXRpb24oJ2hvbWUnKTtcbn0gXG4gIiwiaW1wb3J0ICcuLi9jc3MtZm9sZGVyL2VkaXQuY3NzJztcbmltcG9ydCBzdWJtaXRDcmVhdGUgZnJvbSAnLi9jcmVhdGUtZm9sZGVyL3N1Ym1pdC1jcmVhdGUnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbih2YWx1ZSwgdHh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbnMudmFsdWUgPSB2YWx1ZTtcbiAgICBvcHRpb25zLnRleHQgPSB0eHQ7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5mdW5jdGlvbiBjcmVhdGVTZWxlY3QoKSB7XG4gICAgY29uc3QgY2F0QXJyID0gWydhdGhvbWUnLCAnd29yaycsICdzY2hvb2wnLCAncGxheWdyb3VuZCddO1xuICAgIGNvbnN0IGNhdFRleHQgPSBbJ0F0IEhvbWUnLCAnV29yaycsICdTY2hvb2wnLCAnUGxheWdyb3VuZCddO1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdCcpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYXRBcnIubGVuZ3RoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb24oY2F0QXJyW2luZGV4XSwgY2F0VGV4dFtpbmRleF0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBjcmVhdGVJbnB1dHMoY2xhc3NOYW1lLCB0eXBlLCBkZWZhdWx0VGV4dCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW0ucGxhY2Vob2xkZXIgPSBkZWZhdWx0VGV4dDtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURpdigpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKCdlZGl0LWJveCcpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoYm94KTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJveCh0eHQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0O1xuICAgIHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlRGF0ZShjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbGVtLnR5cGUgPSAnZGF0ZSc7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiBkYXRlQm94KGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQm94KCdEdWUgRGF0ZTogJyksXG4gICAgICAgIGNyZWF0ZURhdGUoJ2NoYW5nZS1kYXRlJyksXG4gICAgKTtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmModHh0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5zdHlsZS53aWR0aCA9ICc5MHB4JztcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0OyAgICBcbiAgICBzdWJtaXRDcmVhdGUoZWxlbSk7XG4gICAgcmV0dXJuIGVsZW07IFxufSAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtKSB7IFxuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVEaXYoKSk7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJveCcpO1xuICAgICAgICBib3guYXBwZW5kKFxuICAgICAgICAgICAgY3JlYXRlQm94KCdYJywgJ2Nsb3NlJyksXG4gICAgICAgICAgICBjcmVhdGVTZWxlY3QoKSxcbiAgICAgICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCAndGV4dGFyZWEnLCAnVGl0bGUnKSxcbiAgICAgICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCAndGV4dGFyZWEnLCAnUHJvamVjdCcpLFxuICAgICAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsICd0ZXh0YXJlYScsICdEZXRhaWxzJyksXG4gICAgICAgICAgICBjcmVhdGVCb3goJ1dhcm5pbmc6IGNoYXJhY3RlciBtdXN0IGJlIGdyZWF0ZXIgdGhhdCAyJywgJ3dhcm5pbmcnKSxcbiAgICAgICAgICAgIGRhdGVCb3goJ2R1ZS1kYXRlJyksXG4gICAgICAgICAgICBjcmVhdGVGdW5jKCdDcmVhdGUnLCAnY29uZmlybS1lZGl0JyksXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9KVxuICAgIH0pO1xufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaGFwZSwgc2l6ZTEsIHNpemUyLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7c2l6ZTF9ICR7c2l6ZTJ9YCk7XG4gICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdkJywgc2hhcGUpO1xuICAgIGljb25TdmcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xuICAgIHJldHVybiBpY29uU3ZnO1xufSIsImltcG9ydCAnLi4vY3NzLWZvbGRlci9zaWRlYmFyLmNzcyc7XG5cbmZ1bmN0aW9uIHNpZGViYXJEaXYgKHR4dCwgY2xhc3NOYW1lLCB0aXRsZSkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0O1xuICAgIGVsZW0udGl0bGUgPSB0aXRsZTtcbiAgICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgc2lkZWJhci5hcHBlbmQoXG4gICAgICAgIHNpZGViYXJEaXYoJ0hvbWUnLCAnaG9tZScsICdob21lJyksXG4gICAgICAgIHNpZGViYXJEaXYoJ1Byb2plY3QnLCAncHJvamVjdCcsICduZXctcHJvamVjdCcpLFxuICAgICAgICBzaWRlYmFyRGl2KCdBdCBIb21lJywgJ2NhdGUnLCAnYXRob21lJyksXG4gICAgICAgIHNpZGViYXJEaXYoJ1dvcmsnLCAnY2F0ZScsICd3b3JrJyksXG4gICAgICAgIHNpZGViYXJEaXYoJ1NjaG9vbCcsICdjYXRlJywgJ3NjaG9vbCcpLFxuICAgICAgICBzaWRlYmFyRGl2KCdQbGF5Z3JvdW5kJywgJ2NhdGUnLCAncGxheWdyb3VuZCcpLFxuICAgICk7XG59XG4iLCJpbXBvcnQgJy4uL2Nzcy1mb2xkZXIvdG9wYmFyLmNzcyc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi4vaW1hZ2UtZm9sZGVyL3RvZG8tZmF2aWNvbi5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVJbWcoKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IGltYWdlO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCd0b3BiYXItaWNvbicpO1xuICAgIHJldHVybiBpbWc7XG59XG5cbiBmdW5jdGlvbiB0b3BiYXIodHh0KSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgndG9wYmFyJyk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IHR4dDtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGNyZWF0ZUltZygpKVxuICAgIHJldHVybiBlbGVtO1xufSBcbmV4cG9ydCBkZWZhdWx0IHRvcGJhcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHRvcGJhciBmcm9tICcuL2pzLWZvbGRlci90b3BiYXInO1xuaW1wb3J0IG1hcENhdEZ1bmMgZnJvbSAnLi9qcy1mb2xkZXIvc2lkZWJhcic7XG5pbXBvcnQgdG9kb0hvbWUgZnJvbSAnLi9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvdG9kby1ob21lJztcbmltcG9ydCBuZXdDb250ZW50IGZyb20gJy4vanMtZm9sZGVyL25ld0NvbnRlbnQnO1xuaW1wb3J0IHRvZG9BZGQgZnJvbSAnLi9qcy1mb2xkZXIvZWRpdC1mb2xkZXIvdG9kby1hZGQnO1xuaW1wb3J0IHJlbmRlckljb24gZnJvbSAnLi9qcy1mb2xkZXIvcmVuZGVySWNvbic7XG5pbXBvcnQgY2xpY2tJY29uIGZyb20gJy4vanMtZm9sZGVyL2NsaWNrSWNvbic7XG5cblxuY2xhc3MgVG9kbyB7XG4gICAgY3JlYXRlRGl2KGVsZW1UeXBlLCBjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbVR5cGUpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIFxuICAgIGNvbnRlbnRGdW5jID0gKCkgPT4geyAgICAgICAgXG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZScpO1xuICAgICAgICBob21lLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvSG9tZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICAgICAgbmV3Q29udGVudChwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlJyk7XG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvZG9BZGQoYnRuLnRpdGxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBhcHBlbmRCb2R5KCkge1xuICAgICAgICBjb25zdCBkPVwiTTE1MzYgMTA4OHYxMjhxMCAyNi0xOSA0NXQtNDUgMTlINjRxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgxNDA4cTI2IDAgNDUgMTl0MTkgNDV6bTAtNTEydjEyOHEwIDI2LTE5IDQ1dC00NSAxOUg2NHEtMjYgMC00NS0xOVQwIDcwNFY1NzZxMC0yNiAxOS00NXQ0NS0xOWgxNDA4cTI2IDAgNDUgMTl0MTkgNDV6bTAtNTEydjEyOHEwIDI2LTE5IDQ1dC00NSAxOUg2NHEtMjYgMC00NS0xOVQwIDE5MlY2NHEwLTI2IDE5LTQ1VDY0IDBoMTQwOHEyNiAwIDQ1IDE5dDE5IDQ1elwiXG4gICAgICAgIGNvbnN0IHNpemUxID0gJzE1MzYnO1xuICAgICAgICBjb25zdCBzaXplMiA9ICcxMjgwJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURpdignbmF2JywgJ25hdicpLCBcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGl2KCdkaXYnLCAnc2lkZWJhcicpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEaXYoJ2RpdicsICdjb250ZW50JylcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHRvcGJhcignVG9kbyBMaXN0IEFwcCcpKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHJlbmRlckljb24oZCwgc2l6ZTEsIHNpemUyLCAnc3ZnJykpO1xuICAgICAgICBjbGlja0ljb24oKTtcbiAgICAgICAgbWFwQ2F0RnVuYygpO1xuICAgICAgICBvbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvSG9tZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGVudEZ1bmMoKTtcblxuICAgIH1cbn1cbmNvbnN0IHRvZG8gPSBuZXcgVG9kbygpO1xudG9kby5hcHBlbmRCb2R5KCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==