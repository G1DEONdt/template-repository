/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-colour: #0f2f47;
    --bg-colour: #7e878f;
    --confirm: rgba(0, 144, 0, 0.4);
    --reject: rgba(255, 0, 0, 0.4);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", system-ui;
}

body {
    display: flex;
    width: 100%;
    height: 100vh;
}

/* -------------------------------------- Sidebar -------------------------------------------*/

.menu {
    background-color: var(--main-colour);
    flex: 1;
    min-width: 360px;
    padding: 28px;
}

h1 {
    color: white;
    font-size: 4rem;
    text-align: center;
}

.project-header {
    padding: 0 20px;
}

/* Project Default */
.project-default, .project-add {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.project-default h2 {
    font-size: 1.1rem;
    color: white;
}

.project-default button {
    padding: 0px 24px;
}

.project-default input {
    width: 100%;
    padding: 4px;
}

.project-add {
    display: flex;
    gap: 8px;
}

.project-add input {
    width: 100%;
    font-size: 1.1rem;
}

.project-add button {
    padding: 0px 16px;
}

.project-default.hidden {
    display: none
}

.project-add.hidden {
    display: none;
}

.menu hr {
    margin: 4px auto 12px auto;
    width: 88%;
}

.project-container {
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.project {
    border-radius: 12px;
    padding: 4px 12px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.project-select {
    position: absolute;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 12px;
    opacity: 0;
}

.project-select:hover {
    cursor: pointer;
}

.project h3 {
    font-size: 0.9rem;
}

.project .add-project {
    padding: 4px 12px;
    border: 1px solid grey;
    border-radius: 8px;
    color: grey;
    z-index: 1;
}

.project .add-project:hover {
    cursor: pointer;
    border: 1px solid black;
    color: black;
}


/* ----------------------------------- Content Window -----------------------------------*/ 

.content {
    background-color: var(--bg-colour);
    flex: 5;
}

.content .add-todo {
    display: block;
    margin: 28px auto;
    padding: 12px 24px;
}

.content h2 {
    font-size: 3em;
    text-align: center;
    margin: 28px 0px;
}

.todo-container {
    margin: 0 auto;
    max-width: 740px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.todo {
    width: 100%;
    min-height: 64px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    background-color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.todo-selector {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    opacity: 0;
    background-color: black;
}

.todo-selector:hover {
    cursor: pointer;
    opacity: 0.2;
}

.todo .check {
    align-self: center;
    background-color: var(--bg-colour);
    margin: 0 24px;
    padding: 8px 8px;
    border-radius: 4px;
    z-index: 1;
}

.todo .check:hover {
    cursor: pointer;
    background-color: var(--confirm);
}

.todo .todo-content {
    flex: 10;   
}

.todo-content h3 {
    font-size: 1.5rem;
}

.todo-content p {
    font-size: 0.9rem;
}

.todo .delete {
    padding: 16px 8px;
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    flex: 1;
    z-index: 1;
    position: relative;
}

.todo .delete:hover {
    cursor: pointer;
    color: var(--reject);
    transform: scale(1.2);
}

.delete p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
}

.todo.complete{
    opacity: 0.3;
}

/* ------------------------- Form -------------------------- */
.form-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    display: none;
}

.form-container.active {
    display: inline;
}

.form-container form {
    position: absolute;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    min-width: 600px;
    max-width: 800px;
    height: 80%;
    border-radius: 24px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
}

.form-element,
.window-element {
    width: 100%;
}

.form-element label {
    display: block;
    font-weight: bold;
}

#description,
#notes {
    padding: 24px;
}

#title {
    width: 100%;
    border: none;
    font-size: 2rem;
}

#description {
    width: 100%;
    min-height: 200px;
    border: 2px solid black;
    border-radius: 24px;
}

#date {
    padding: 4px;
}

#notes {
    width: 100%;
    border: 2px solid black;
    border-radius: 24px;
}

.form-buttons {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.cancel,
.submit {
    width: 128px;
    padding: 12px;
    border-radius: 12px;
}

.cancel:hover {
    cursor: pointer;
    background-color: var(--reject);
}

.submit:hover { 
    cursor: pointer;
    background-color: var(--confirm);
}


/* ------------------------- Todo -------------------------- */
.todo-expanded {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
}

.todo-expanded.hidden {
    display: none;
}

.todo-expanded-close {
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
}

.todo-expanded-close:hover{
    cursor: pointer;
}

.window {
    position: relative;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    min-width: 600px;
    max-width: 800px;
    height: 80%;
    border-radius: 24px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 3;
}

.window-section {
    width: 100%;
}

.window-section h2 {
    font-size: 2rem;
}

.window-section h3 {
    font-size: 1rem;
    font-weight: bold;
}

.window-section:nth-child(1) {
    display: flex;
    justify-content: space-between;
}

.window-close {
    padding: 0px 12px;
    font-size: 1.8rem;
    border: none;
}

.window-close:hover {
    color: var(--confirm);
}

.window-description-border {
    width: 100%;
    min-height: 200px;
    border: 2px solid black;
    border-radius: 24px;
    padding: 24px;
}

.window-due-text {
    padding-left: 24px;
}

.window-notes-border {
    width: 100%;
    border: 2px solid black;
    border-radius: 24px;
    padding: 24px;
    min-height: 120px;
}

.window-buttons {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.edit,
.remove {
    width: 128px;
    padding: 12px;
    border-radius: 12px;
}

.edit:hover {
    cursor: pointer;
    background-color: var(--confirm);
}

.remove:hover {
    cursor: pointer;
    background-color: var(--reject);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --main-colour: #0f2f47;\r\n    --bg-colour: #7e878f;\r\n    --confirm: rgba(0, 144, 0, 0.4);\r\n    --reject: rgba(255, 0, 0, 0.4);\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Poppins\", system-ui;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n/* -------------------------------------- Sidebar -------------------------------------------*/\r\n\r\n.menu {\r\n    background-color: var(--main-colour);\r\n    flex: 1;\r\n    min-width: 360px;\r\n    padding: 28px;\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n    font-size: 4rem;\r\n    text-align: center;\r\n}\r\n\r\n.project-header {\r\n    padding: 0 20px;\r\n}\r\n\r\n/* Project Default */\r\n.project-default, .project-add {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.project-default h2 {\r\n    font-size: 1.1rem;\r\n    color: white;\r\n}\r\n\r\n.project-default button {\r\n    padding: 0px 24px;\r\n}\r\n\r\n.project-default input {\r\n    width: 100%;\r\n    padding: 4px;\r\n}\r\n\r\n.project-add {\r\n    display: flex;\r\n    gap: 8px;\r\n}\r\n\r\n.project-add input {\r\n    width: 100%;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.project-add button {\r\n    padding: 0px 16px;\r\n}\r\n\r\n.project-default.hidden {\r\n    display: none\r\n}\r\n\r\n.project-add.hidden {\r\n    display: none;\r\n}\r\n\r\n.menu hr {\r\n    margin: 4px auto 12px auto;\r\n    width: 88%;\r\n}\r\n\r\n.project-container {\r\n    margin: 0 auto;\r\n    width: 95%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n}\r\n\r\n.project {\r\n    border-radius: 12px;\r\n    padding: 4px 12px;\r\n    background-color: white;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.project-select {\r\n    position: absolute;\r\n    border: 1px solid red;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 12px;\r\n    opacity: 0;\r\n}\r\n\r\n.project-select:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.project h3 {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.project .add-project {\r\n    padding: 4px 12px;\r\n    border: 1px solid grey;\r\n    border-radius: 8px;\r\n    color: grey;\r\n    z-index: 1;\r\n}\r\n\r\n.project .add-project:hover {\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    color: black;\r\n}\r\n\r\n\r\n/* ----------------------------------- Content Window -----------------------------------*/ \r\n\r\n.content {\r\n    background-color: var(--bg-colour);\r\n    flex: 5;\r\n}\r\n\r\n.content .add-todo {\r\n    display: block;\r\n    margin: 28px auto;\r\n    padding: 12px 24px;\r\n}\r\n\r\n.content h2 {\r\n    font-size: 3em;\r\n    text-align: center;\r\n    margin: 28px 0px;\r\n}\r\n\r\n.todo-container {\r\n    margin: 0 auto;\r\n    max-width: 740px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\n\r\n.todo {\r\n    width: 100%;\r\n    min-height: 64px;\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);\r\n    background-color: white;\r\n    border-radius: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.todo-selector {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 12px;\r\n    opacity: 0;\r\n    background-color: black;\r\n}\r\n\r\n.todo-selector:hover {\r\n    cursor: pointer;\r\n    opacity: 0.2;\r\n}\r\n\r\n.todo .check {\r\n    align-self: center;\r\n    background-color: var(--bg-colour);\r\n    margin: 0 24px;\r\n    padding: 8px 8px;\r\n    border-radius: 4px;\r\n    z-index: 1;\r\n}\r\n\r\n.todo .check:hover {\r\n    cursor: pointer;\r\n    background-color: var(--confirm);\r\n}\r\n\r\n.todo .todo-content {\r\n    flex: 10;   \r\n}\r\n\r\n.todo-content h3 {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.todo-content p {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.todo .delete {\r\n    padding: 16px 8px;\r\n    font-size: 1.2rem;\r\n    background-color: transparent;\r\n    border: none;\r\n    flex: 1;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.todo .delete:hover {\r\n    cursor: pointer;\r\n    color: var(--reject);\r\n    transform: scale(1.2);\r\n}\r\n\r\n.delete p {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.todo.complete{\r\n    opacity: 0.3;\r\n}\r\n\r\n/* ------------------------- Form -------------------------- */\r\n.form-container {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    z-index: 2;\r\n    display: none;\r\n}\r\n\r\n.form-container.active {\r\n    display: inline;\r\n}\r\n\r\n.form-container form {\r\n    position: absolute;\r\n    background-color: white;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 50%;\r\n    min-width: 600px;\r\n    max-width: 800px;\r\n    height: 80%;\r\n    border-radius: 24px;\r\n    padding: 48px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    z-index: 1;\r\n}\r\n\r\n.form-element,\r\n.window-element {\r\n    width: 100%;\r\n}\r\n\r\n.form-element label {\r\n    display: block;\r\n    font-weight: bold;\r\n}\r\n\r\n#description,\r\n#notes {\r\n    padding: 24px;\r\n}\r\n\r\n#title {\r\n    width: 100%;\r\n    border: none;\r\n    font-size: 2rem;\r\n}\r\n\r\n#description {\r\n    width: 100%;\r\n    min-height: 200px;\r\n    border: 2px solid black;\r\n    border-radius: 24px;\r\n}\r\n\r\n#date {\r\n    padding: 4px;\r\n}\r\n\r\n#notes {\r\n    width: 100%;\r\n    border: 2px solid black;\r\n    border-radius: 24px;\r\n}\r\n\r\n.form-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 24px;\r\n}\r\n\r\n.cancel,\r\n.submit {\r\n    width: 128px;\r\n    padding: 12px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.cancel:hover {\r\n    cursor: pointer;\r\n    background-color: var(--reject);\r\n}\r\n\r\n.submit:hover { \r\n    cursor: pointer;\r\n    background-color: var(--confirm);\r\n}\r\n\r\n\r\n/* ------------------------- Todo -------------------------- */\r\n.todo-expanded {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    z-index: 2;\r\n}\r\n\r\n.todo-expanded.hidden {\r\n    display: none;\r\n}\r\n\r\n.todo-expanded-close {\r\n    position: absolute;\r\n    background-color: transparent;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.todo-expanded-close:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.window {\r\n    position: relative;\r\n    background-color: white;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 50%;\r\n    min-width: 600px;\r\n    max-width: 800px;\r\n    height: 80%;\r\n    border-radius: 24px;\r\n    padding: 48px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    z-index: 3;\r\n}\r\n\r\n.window-section {\r\n    width: 100%;\r\n}\r\n\r\n.window-section h2 {\r\n    font-size: 2rem;\r\n}\r\n\r\n.window-section h3 {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.window-section:nth-child(1) {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.window-close {\r\n    padding: 0px 12px;\r\n    font-size: 1.8rem;\r\n    border: none;\r\n}\r\n\r\n.window-close:hover {\r\n    color: var(--confirm);\r\n}\r\n\r\n.window-description-border {\r\n    width: 100%;\r\n    min-height: 200px;\r\n    border: 2px solid black;\r\n    border-radius: 24px;\r\n    padding: 24px;\r\n}\r\n\r\n.window-due-text {\r\n    padding-left: 24px;\r\n}\r\n\r\n.window-notes-border {\r\n    width: 100%;\r\n    border: 2px solid black;\r\n    border-radius: 24px;\r\n    padding: 24px;\r\n    min-height: 120px;\r\n}\r\n\r\n.window-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 24px;\r\n}\r\n\r\n.edit,\r\n.remove {\r\n    width: 128px;\r\n    padding: 12px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.edit:hover {\r\n    cursor: pointer;\r\n    background-color: var(--confirm);\r\n}\r\n\r\n.remove:hover {\r\n    cursor: pointer;\r\n    background-color: var(--reject);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadData: () => (/* binding */ loadData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder */ "./src/scripts/folder.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/scripts/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/scripts/todo.js");




function saveData (folder) {
    const stringified = JSON.stringify(folder);
    localStorage.setItem("data", stringified);
}

function loadData () {
    const stringified = localStorage.getItem("data");
    
    try {
        const serialised = JSON.parse(stringified);
        for (let index in serialised) {
            const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(serialised[index].title);
            const array = serialised[index].project;
    
            for (let todo in array) {
                const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(
                    array[todo].name,
                    array[todo].description,
                    array[todo].dueDate,
                    array[todo].notes
                )
    
                newProject.addTodo(newTodo);
            }
    
            (0,_folder__WEBPACK_IMPORTED_MODULE_0__.addToFolder)(newProject);
        }
    } 
    catch (error) {
        return;
    }

    


}



/***/ }),

/***/ "./src/scripts/folder.js":
/*!*******************************!*\
  !*** ./src/scripts/folder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToFolder: () => (/* binding */ addToFolder),
/* harmony export */   getFolder: () => (/* binding */ getFolder),
/* harmony export */   getSelectedProject: () => (/* binding */ getSelectedProject),
/* harmony export */   getSelectedProjectIndex: () => (/* binding */ getSelectedProjectIndex),
/* harmony export */   removeFromFolder: () => (/* binding */ removeFromFolder),
/* harmony export */   selectedProject: () => (/* binding */ selectedProject),
/* harmony export */   setSelectedProject: () => (/* binding */ setSelectedProject)
/* harmony export */ });
const folder = [];
let selectedProject = 0;

function getSelectedProject () {
    return folder[selectedProject];
}

function getSelectedProjectIndex() {
    return selectedProject;
}

function setSelectedProject (index) {
    selectedProject = index;
}

function addToFolder(project) {
    folder.push(project);
}

function getFolder() {
    return folder;
}

function removeFromFolder(project) {
    folder.splice(project, 1);
}

/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
function Project (title) {
    this.title = title;

    this.project = [];

    this.setTitle = (title) => {
        this.title = title;
    }

    this.addTodo = (todo) => {
        this.project.push(todo);
    }

    this.removeTodo = (index) => {
        this.project.splice(index, 1);
    }
}

/***/ }),

/***/ "./src/scripts/render.js":
/*!*******************************!*\
  !*** ./src/scripts/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTodo: () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/scripts/data.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder */ "./src/scripts/folder.js");



const projectContainer = document.querySelector(".project-container");
const todoContainer = document.querySelector('.todo-container');
const contentHeader = document.querySelector(".content-header");



function renderProjects() {
    const folder = (0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)();
    resetContainer(projectContainer);
    contentHeader.innerText = folder[_folder__WEBPACK_IMPORTED_MODULE_1__.selectedProject].title;

    for (let item in folder) {
        // Create Elements
        const project = document.createElement("div");
        const selector = document.createElement("button");
        const title = document.createElement("h3");
        const deleteButton = document.createElement("button");

        // Add Classes
        project.classList.add("project");
        selector.classList.add("project-select");
        deleteButton.classList.add("add-project");

        // Fill Elements
        title.innerText = folder[item].title;
        deleteButton.innerText = "x";

        // Append Elements 
        project.appendChild(selector);
        project.appendChild(title);
        project.appendChild(deleteButton);

        projectContainer.appendChild(project);

        selector.addEventListener("click", () => {
            renderTodo(folder[item]);
            (0,_folder__WEBPACK_IMPORTED_MODULE_1__.setSelectedProject)(item);
            contentHeader.innerText = folder[item].title;
        })

        deleteButton.addEventListener("click", () => {
            if ((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)().length > 1) {
                (0,_folder__WEBPACK_IMPORTED_MODULE_1__.removeFromFolder)(item);
                
                if ((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProjectIndex)() == item && item > 0){
                    (0,_folder__WEBPACK_IMPORTED_MODULE_1__.setSelectedProject)((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProjectIndex)() - 1);
                } else {
                    (0,_folder__WEBPACK_IMPORTED_MODULE_1__.setSelectedProject)(0);
                }

                renderProjects();
                renderTodo((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)());

            } else {
                alert("Must have at least one folder");
            }
            (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveData)(folder);
        })
    }
}

function renderTodo(project) {
    resetContainer(todoContainer);
    
    for (let item in project.project) {
        // Create Elements
        const todo = document.createElement('div');
        const selector = document.createElement('button');
        const check = document.createElement('button');
        const content = document.createElement('div');
        const title = document.createElement('h3');
        const due = document.createElement('p');
        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createElement('p');


        // Add classes
        todo.classList.add('todo');
        selector.classList.add('todo-selector');
        check.classList.add('check');
        content.classList.add('todo-content');
        deleteButton.classList.add('delete');

        // Fill elements
        title.innerText = project.project[item].name;
        due.innerText = project.project[item].dueDate;
        deleteButtonText.innerText = "x";

        // Append elements
        todo.appendChild(selector);
        todo.appendChild(check);
        todo.appendChild(content);
        content.appendChild(title);
        content.appendChild(due);
        todo.appendChild(deleteButton);
        deleteButton.appendChild(deleteButtonText);
        todoContainer.appendChild(todo);


        selector.addEventListener("click", () => {
            renderTodoItem(project, project.project[item], item);
            // console.log(project.project[item]);
        })
        
        // The illusion of choice
        check.addEventListener("click", () => {
            project.removeTodo(item);
            renderTodo(project);
            (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveData)((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)());
        })

        deleteButton.addEventListener("click", () => {
            project.removeTodo(item);
            renderTodo(project);
            (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveData)((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)());
        })
    }
}

function renderTodoItem (project, todo, index) {
    const todoExpanded = document.querySelector(".todo-expanded");
    const todoExpandedClose = document.querySelector(".todo-expanded-close");
    const title = document.querySelector(".window-title");
    const windowClose = document.querySelector(".window-close");
    const description = document.querySelector(".window-description-text");
    const due = document.querySelector(".window-due-text");
    const notes = document.querySelector(".window-notes-text");
    const edit = document.querySelector(".edit");
    const remove = document.querySelector(".remove");

    todoExpanded.classList.remove("hidden");

    // Fill Elements
    title.innerText = todo.name;
    description.innerText = todo.description;
    due.innerText = todo.dueDate;
    notes.innerText = todo.notes;

    // Button functions

    // I honestly have no idea why this doesn't work properly.....
    remove.addEventListener("click", () => {
        project.removeTodo(index);
        renderTodo(project);
        resetElements();
    })

    windowClose.addEventListener("click", () => {
        resetElements();
    })

    todoExpandedClose.addEventListener("click", () => {
        resetElements();
    })

    edit.addEventListener("click", () => {
        alert("I didn't implement this.");
        resetElements();
    })

    function resetElements() {
        title.innerText = "";
        description.innerText = "";
        due.innerText = "";
        notes.innerText = "";
        todoExpanded.classList.add("hidden");
    }
}

function resetContainer (container) {
    container.innerHTML = "";
}

/***/ }),

/***/ "./src/scripts/todo.js":
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
function Todo (name, description, dueDate, notes) {
    this.name = name;
    this.description = description; 
    this.dueDate = dueDate;
    this.notes = notes;
}


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data */ "./src/scripts/data.js");
/* harmony import */ var _scripts_folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/folder */ "./src/scripts/folder.js");
/* harmony import */ var _scripts_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/project */ "./src/scripts/project.js");
/* harmony import */ var _scripts_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/render */ "./src/scripts/render.js");
/* harmony import */ var _scripts_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/todo */ "./src/scripts/todo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







let projects = (0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)();

//Side Bar
const addProject = document.querySelector(".add-project");
const createProject = document.querySelector(".create");
const projectDefault = document.querySelector(".project-default");
const projectAdd = document.querySelector(".project-add");
const projectName = document.querySelector("#project-name");

// Form
const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".form");
const addTodoButton = document.querySelector('.add-todo');
const cancelButton = document.querySelector('.cancel');
const submitButton = document.querySelector(".submit");



    
(function pageLoad () {
    (0,_scripts_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();
    if ((0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)().length <= 0) {
        const defaultProject = new _scripts_project__WEBPACK_IMPORTED_MODULE_2__.Project("Home");
        (0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.addToFolder)(defaultProject);
    }
    update();
})();




// Event Listeners 
addProject.addEventListener("click", () => {
    projectDefault.classList.add("hidden");
    projectAdd.classList.remove("hidden");
})


// Create Project 
createProject.addEventListener("click", () => {
    projectDefault.classList.remove("hidden");
    projectAdd.classList.add("hidden");

    const newProject = new _scripts_project__WEBPACK_IMPORTED_MODULE_2__.Project(projectName.value);
    projectName.value = ""

    if (newProject.title === "") {
        newProject.setTitle("Unnamed Project");
    }

    (0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.addToFolder)(newProject);
    update();
})

addTodoButton.addEventListener("click", () => {
    formContainer.classList.add("active");
})

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
    formContainer.classList.remove("active");
})


// Create Todo

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector('#date').value;
    const notes = document.querySelector('#notes').value;

    const todo = new _scripts_todo__WEBPACK_IMPORTED_MODULE_4__.Todo(title, description, date, notes);
    (0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)().addTodo(todo);

    form.reset();
    formContainer.classList.remove("active");

    // renderTodo(getSelectedProject());
    update();
})

function update() {
    ;(0,_scripts_render__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();
    (0,_scripts_render__WEBPACK_IMPORTED_MODULE_3__.renderTodo)((0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)());
    (0,_scripts_data__WEBPACK_IMPORTED_MODULE_0__.saveData)((0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)());
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFB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LEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3NjcmlwdHMvZGF0YS5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9zcmMvc2NyaXB0cy9mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9zcmMvc2NyaXB0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3NjcmlwdHMvdG9kby5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tbWFpbi1jb2xvdXI6ICMwZjJmNDc7XHJcbiAgICAtLWJnLWNvbG91cjogIzdlODc4ZjtcclxuICAgIC0tY29uZmlybTogcmdiYSgwLCAxNDQsIDAsIDAuNCk7XHJcbiAgICAtLXJlamVjdDogcmdiYSgyNTUsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHN5c3RlbS11aTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLm1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvdXIpO1xyXG4gICAgZmxleDogMTtcclxuICAgIG1pbi13aWR0aDogMzYwcHg7XHJcbiAgICBwYWRkaW5nOiAyOHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi8qIFByb2plY3QgRGVmYXVsdCAqL1xyXG4ucHJvamVjdC1kZWZhdWx0LCAucHJvamVjdC1hZGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZWZhdWx0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZWZhdWx0IGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjRweDtcclxufVxyXG5cclxuLnByb2plY3QtZGVmYXVsdCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnByb2plY3QtYWRkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLnByb2plY3QtYWRkIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWFkZCBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlZmF1bHQuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLnByb2plY3QtYWRkLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubWVudSBociB7XHJcbiAgICBtYXJnaW46IDRweCBhdXRvIDEycHggYXV0bztcclxuICAgIHdpZHRoOiA4OCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC1zZWxlY3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXNlbGVjdDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdCAuYWRkLXByb2plY3Qge1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvamVjdCAuYWRkLXByb2plY3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDb250ZW50IFdpbmRvdyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3VyKTtcclxuICAgIGZsZXg6IDU7XHJcbn1cclxuXHJcbi5jb250ZW50IC5hZGQtdG9kbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjhweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG59XHJcblxyXG4uY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjhweCAwcHg7XHJcbn1cclxuXHJcbi50b2RvLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogNzQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50b2RvLXNlbGVjdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnRvZG8tc2VsZWN0b3I6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59XHJcblxyXG4udG9kbyAuY2hlY2sge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3VyKTtcclxuICAgIG1hcmdpbjogMCAyNHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi50b2RvIC5jaGVjazpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtKTtcclxufVxyXG5cclxuLnRvZG8gLnRvZG8tY29udGVudCB7XHJcbiAgICBmbGV4OiAxMDsgICBcclxufVxyXG5cclxuLnRvZG8tY29udGVudCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnRvZG8tY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4udG9kbyAuZGVsZXRlIHtcclxuICAgIHBhZGRpbmc6IDE2cHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udG9kbyAuZGVsZXRlOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1yZWplY3QpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4uZGVsZXRlIHAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4udG9kby5jb21wbGV0ZXtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGb3JtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lci5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWluLXdpZHRoOiA2MDBweDtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiA0OHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1lbGVtZW50LFxyXG4ud2luZG93LWVsZW1lbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2Rlc2NyaXB0aW9uLFxyXG4jbm90ZXMge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxufVxyXG5cclxuI2RhdGUge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4jbm90ZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG59XHJcblxyXG4uY2FuY2VsLFxyXG4uc3VibWl0IHtcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uY2FuY2VsOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlamVjdCk7XHJcbn1cclxuXHJcbi5zdWJtaXQ6aG92ZXIgeyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbmZpcm0pO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUb2RvIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi50b2RvLWV4cGFuZGVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udG9kby1leHBhbmRlZC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tZXhwYW5kZWQtY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tZXhwYW5kZWQtY2xvc2U6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53aW5kb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgcGFkZGluZzogNDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuLndpbmRvdy1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2luZG93LXNlY3Rpb24gaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ud2luZG93LXNlY3Rpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53aW5kb3ctc2VjdGlvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLndpbmRvdy1jbG9zZSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ud2luZG93LWNsb3NlOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb25maXJtKTtcclxufVxyXG5cclxuLndpbmRvdy1kZXNjcmlwdGlvbi1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi53aW5kb3ctZHVlLXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4ud2luZG93LW5vdGVzLWJvcmRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLndpbmRvdy1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjRweDtcclxufVxyXG5cclxuLmVkaXQsXHJcbi5yZW1vdmUge1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5lZGl0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbmZpcm0pO1xyXG59XHJcblxyXG4ucmVtb3ZlOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlamVjdCk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUEsOEZBQThGOztBQUU5RjtJQUNJLG9DQUFvQztJQUNwQyxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7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QjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLW1haW4tY29sb3VyOiAjMGYyZjQ3O1xcclxcbiAgICAtLWJnLWNvbG91cjogIzdlODc4ZjtcXHJcXG4gICAgLS1jb25maXJtOiByZ2JhKDAsIDE0NCwgMCwgMC40KTtcXHJcXG4gICAgLS1yZWplY3Q6IHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzeXN0ZW0tdWk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2lkZWJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3VyKTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgbWluLXdpZHRoOiAzNjBweDtcXHJcXG4gICAgcGFkZGluZzogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFByb2plY3QgRGVmYXVsdCAqL1xcclxcbi5wcm9qZWN0LWRlZmF1bHQsIC5wcm9qZWN0LWFkZCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlZmF1bHQgaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZWZhdWx0IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZWZhdWx0IGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZCBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZWZhdWx0LmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmVcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51IGhyIHtcXHJcXG4gICAgbWFyZ2luOiA0cHggYXV0byAxMnB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA4OCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zZWxlY3Qge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zZWxlY3Q6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5hZGQtcHJvamVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENvbnRlbnQgV2luZG93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvdXIpO1xcclxcbiAgICBmbGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAuYWRkLXRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAyOHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgaDIge1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDI4cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiA3NDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VsZWN0b3Ige1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWxlY3Rvcjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogMC4yO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyAuY2hlY2sge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG91cik7XFxyXFxuICAgIG1hcmdpbjogMCAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50b2RvIC5jaGVjazpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29uZmlybSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvIC50b2RvLWNvbnRlbnQge1xcclxcbiAgICBmbGV4OiAxMDsgICBcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGVudCBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250ZW50IHAge1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gLmRlbGV0ZSB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHggOHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyAuZGVsZXRlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcmVqZWN0KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlIHAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8uY29tcGxldGV7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGb3JtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDQ4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZWxlbWVudCxcXHJcXG4ud2luZG93LWVsZW1lbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZWxlbWVudCBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uLFxcclxcbiNub3RlcyB7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUge1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbiNub3RlcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwsXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICAgIHdpZHRoOiAxMjhweDtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVqZWN0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdDpob3ZlciB7IFxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbmZpcm0pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRvZG8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4udG9kby1leHBhbmRlZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWV4cGFuZGVkLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWV4cGFuZGVkLWNsb3NlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1leHBhbmRlZC1jbG9zZTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiA0OHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi53aW5kb3ctc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93LXNlY3Rpb24gaDIge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi53aW5kb3ctc2VjdGlvbiBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi53aW5kb3ctc2VjdGlvbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi53aW5kb3ctY2xvc2Uge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRvdy1jbG9zZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb25maXJtKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRvdy1kZXNjcmlwdGlvbi1ib3JkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93LWR1ZS10ZXh0IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93LW5vdGVzLWJvcmRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXHJcXG4gICAgcGFkZGluZzogMjRweDtcXHJcXG4gICAgbWluLWhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi53aW5kb3ctYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LFxcclxcbi5yZW1vdmUge1xcclxcbiAgICB3aWR0aDogMTI4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVqZWN0KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGRUb0ZvbGRlciB9IGZyb20gXCIuL2ZvbGRlclwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhIChmb2xkZXIpIHtcclxuICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoZm9sZGVyKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVwiLCBzdHJpbmdpZmllZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YSAoKSB7XHJcbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpc2VkID0gSlNPTi5wYXJzZShzdHJpbmdpZmllZCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gc2VyaWFsaXNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3Qoc2VyaWFsaXNlZFtpbmRleF0udGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IHNlcmlhbGlzZWRbaW5kZXhdLnByb2plY3Q7XHJcbiAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgdG9kbyBpbiBhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5W3RvZG9dLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbdG9kb10uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbdG9kb10uZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJheVt0b2RvXS5ub3Rlc1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBhZGRUb0ZvbGRlcihuZXdQcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbiIsImNvbnN0IGZvbGRlciA9IFtdO1xyXG5leHBvcnQgbGV0IHNlbGVjdGVkUHJvamVjdCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcm9qZWN0ICgpIHtcclxuICAgIHJldHVybiBmb2xkZXJbc2VsZWN0ZWRQcm9qZWN0XTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkUHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGVkUHJvamVjdCAoaW5kZXgpIHtcclxuICAgIHNlbGVjdGVkUHJvamVjdCA9IGluZGV4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Gb2xkZXIocHJvamVjdCkge1xyXG4gICAgZm9sZGVyLnB1c2gocHJvamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2xkZXIoKSB7XHJcbiAgICByZXR1cm4gZm9sZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUZvbGRlcihwcm9qZWN0KSB7XHJcbiAgICBmb2xkZXIuc3BsaWNlKHByb2plY3QsIDEpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QgKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcblxyXG4gICAgdGhpcy5wcm9qZWN0ID0gW107XHJcblxyXG4gICAgdGhpcy5zZXRUaXRsZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvamVjdC5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XHJcbmltcG9ydCB7IGdldEZvbGRlciwgZ2V0U2VsZWN0ZWRQcm9qZWN0LCBnZXRTZWxlY3RlZFByb2plY3RJbmRleCwgcmVtb3ZlRnJvbUZvbGRlciwgc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9mb2xkZXJcIjtcclxuXHJcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xyXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XHJcbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtaGVhZGVyXCIpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBmb2xkZXIgPSBnZXRGb2xkZXIoKTtcclxuICAgIHJlc2V0Q29udGFpbmVyKHByb2plY3RDb250YWluZXIpO1xyXG4gICAgY29udGVudEhlYWRlci5pbm5lclRleHQgPSBmb2xkZXJbc2VsZWN0ZWRQcm9qZWN0XS50aXRsZTtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIGZvbGRlcikge1xyXG4gICAgICAgIC8vIENyZWF0ZSBFbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICAvLyBBZGQgQ2xhc3Nlc1xyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICAgICAgc2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VsZWN0XCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XHJcblxyXG4gICAgICAgIC8vIEZpbGwgRWxlbWVudHNcclxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBmb2xkZXJbaXRlbV0udGl0bGU7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwieFwiO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgXHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChzZWxlY3Rvcik7XHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG5cclxuICAgICAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJUb2RvKGZvbGRlcltpdGVtXSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvamVjdChpdGVtKTtcclxuICAgICAgICAgICAgY29udGVudEhlYWRlci5pbm5lclRleHQgPSBmb2xkZXJbaXRlbV0udGl0bGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnZXRGb2xkZXIoKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tRm9sZGVyKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgoKSA9PSBpdGVtICYmIGl0ZW0gPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFByb2plY3QoZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgoKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFByb2plY3QoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclRvZG8oZ2V0U2VsZWN0ZWRQcm9qZWN0KCkpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBmb2xkZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2F2ZURhdGEoZm9sZGVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kbyhwcm9qZWN0KSB7XHJcbiAgICByZXNldENvbnRhaW5lcih0b2RvQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBwcm9qZWN0LnByb2plY3QpIHtcclxuICAgICAgICAvLyBDcmVhdGUgRWxlbWVudHNcclxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG5cclxuICAgICAgICAvLyBBZGQgY2xhc3Nlc1xyXG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgICAgIHNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc2VsZWN0b3InKTtcclxuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xyXG5cclxuICAgICAgICAvLyBGaWxsIGVsZW1lbnRzXHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5wcm9qZWN0W2l0ZW1dLm5hbWU7XHJcbiAgICAgICAgZHVlLmlubmVyVGV4dCA9IHByb2plY3QucHJvamVjdFtpdGVtXS5kdWVEYXRlO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvblRleHQuaW5uZXJUZXh0ID0gXCJ4XCI7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoY2hlY2spO1xyXG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkdWUpO1xyXG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uVGV4dCk7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcclxuXHJcblxyXG4gICAgICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlclRvZG9JdGVtKHByb2plY3QsIHByb2plY3QucHJvamVjdFtpdGVtXSwgaXRlbSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QucHJvamVjdFtpdGVtXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBUaGUgaWxsdXNpb24gb2YgY2hvaWNlXHJcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKGl0ZW0pO1xyXG4gICAgICAgICAgICByZW5kZXJUb2RvKHByb2plY3QpO1xyXG4gICAgICAgICAgICBzYXZlRGF0YShnZXRGb2xkZXIoKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyhpdGVtKTtcclxuICAgICAgICAgICAgcmVuZGVyVG9kbyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgc2F2ZURhdGEoZ2V0Rm9sZGVyKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRvZG9JdGVtIChwcm9qZWN0LCB0b2RvLCBpbmRleCkge1xyXG4gICAgY29uc3QgdG9kb0V4cGFuZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWV4cGFuZGVkXCIpO1xyXG4gICAgY29uc3QgdG9kb0V4cGFuZGVkQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZXhwYW5kZWQtY2xvc2VcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZG93LXRpdGxlXCIpO1xyXG4gICAgY29uc3Qgd2luZG93Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvdy1jbG9zZVwiKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kb3ctZGVzY3JpcHRpb24tdGV4dFwiKTtcclxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZG93LWR1ZS10ZXh0XCIpO1xyXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvdy1ub3Rlcy10ZXh0XCIpO1xyXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtb3ZlXCIpO1xyXG5cclxuICAgIHRvZG9FeHBhbmRlZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG5cclxuICAgIC8vIEZpbGwgRWxlbWVudHNcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRvZG8ubmFtZTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XHJcbiAgICBkdWUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xyXG4gICAgbm90ZXMuaW5uZXJUZXh0ID0gdG9kby5ub3RlcztcclxuXHJcbiAgICAvLyBCdXR0b24gZnVuY3Rpb25zXHJcblxyXG4gICAgLy8gSSBob25lc3RseSBoYXZlIG5vIGlkZWEgd2h5IHRoaXMgZG9lc24ndCB3b3JrIHByb3Blcmx5Li4uLi5cclxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyhpbmRleCk7XHJcbiAgICAgICAgcmVuZGVyVG9kbyhwcm9qZWN0KTtcclxuICAgICAgICByZXNldEVsZW1lbnRzKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHdpbmRvd0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXRFbGVtZW50cygpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0b2RvRXhwYW5kZWRDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlc2V0RWxlbWVudHMoKTtcclxuICAgIH0pXHJcblxyXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiSSBkaWRuJ3QgaW1wbGVtZW50IHRoaXMuXCIpO1xyXG4gICAgICAgIHJlc2V0RWxlbWVudHMoKTtcclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRFbGVtZW50cygpIHtcclxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZHVlLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgbm90ZXMuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICB0b2RvRXhwYW5kZWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRDb250YWluZXIgKGNvbnRhaW5lcikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gVG9kbyAobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIG5vdGVzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyBcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZERhdGEsIHNhdmVEYXRhIH0gZnJvbSAnLi9zY3JpcHRzL2RhdGEnO1xyXG5pbXBvcnQgeyBhZGRUb0ZvbGRlciwgZ2V0Rm9sZGVyLCBnZXRTZWxlY3RlZFByb2plY3QgfSBmcm9tICcuL3NjcmlwdHMvZm9sZGVyJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vc2NyaXB0cy9wcm9qZWN0JztcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlclRvZG8gfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyJztcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vc2NyaXB0cy90b2RvJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5sZXQgcHJvamVjdHMgPSBnZXRGb2xkZXIoKTtcclxuXHJcbi8vU2lkZSBCYXJcclxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVwiKTtcclxuY29uc3QgcHJvamVjdERlZmF1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGVmYXVsdFwiKTtcclxuY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGRcIik7XHJcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIik7XHJcblxyXG4vLyBGb3JtXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG5jb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XHJcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcclxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XHJcblxyXG5cclxuXHJcbiAgICBcclxuKGZ1bmN0aW9uIHBhZ2VMb2FkICgpIHtcclxuICAgIGxvYWREYXRhKCk7XHJcbiAgICBpZiAoZ2V0Rm9sZGVyKCkubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiSG9tZVwiKTtcclxuICAgICAgICBhZGRUb0ZvbGRlcihkZWZhdWx0UHJvamVjdCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKTtcclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIEV2ZW50IExpc3RlbmVycyBcclxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcHJvamVjdERlZmF1bHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIHByb2plY3RBZGQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxufSlcclxuXHJcblxyXG4vLyBDcmVhdGUgUHJvamVjdCBcclxuY3JlYXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcHJvamVjdERlZmF1bHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIHByb2plY3RBZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xyXG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiXHJcblxyXG4gICAgaWYgKG5ld1Byb2plY3QudGl0bGUgPT09IFwiXCIpIHtcclxuICAgICAgICBuZXdQcm9qZWN0LnNldFRpdGxlKFwiVW5uYW1lZCBQcm9qZWN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvRm9sZGVyKG5ld1Byb2plY3QpO1xyXG4gICAgdXBkYXRlKCk7XHJcbn0pXHJcblxyXG5hZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn0pXHJcblxyXG5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn0pXHJcblxyXG5cclxuLy8gQ3JlYXRlIFRvZG9cclxuXHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xyXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBub3Rlcyk7XHJcbiAgICBnZXRTZWxlY3RlZFByb2plY3QoKS5hZGRUb2RvKHRvZG8pO1xyXG5cclxuICAgIGZvcm0ucmVzZXQoKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAvLyByZW5kZXJUb2RvKGdldFNlbGVjdGVkUHJvamVjdCgpKTtcclxuICAgIHVwZGF0ZSgpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcclxuICAgIHJlbmRlclRvZG8oZ2V0U2VsZWN0ZWRQcm9qZWN0KCkpO1xyXG4gICAgc2F2ZURhdGEoZ2V0Rm9sZGVyKCkpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9