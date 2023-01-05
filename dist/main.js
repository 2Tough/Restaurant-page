/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.replaceChildren();\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"For questions or reservations, please contact us at:\";\n    heading.classList.add(\"content--heading\");\n    contentDiv.appendChild(heading);\n\n\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _on_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-page-load.js */ \"./src/on-page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_on_page_load_js__WEBPACK_IMPORTED_MODULE_0__.onPageLoad)();\n\nconst switchPageModule = (() => {\n    const homePage = document.querySelector(\".home\");\n    homePage.addEventListener(\"click\", _on_page_load_js__WEBPACK_IMPORTED_MODULE_0__.onPageLoad);\n\n    const menuPage = document.querySelector(\".menu\");\n    menuPage.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu);\n\n    const contactPage = document.querySelector(\".contact\");\n    contactPage.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__.contact);\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n\n    console.log(\"testing again again\")\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.replaceChildren();\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"We have an international cousine. Please check the dishes below.\";\n    heading.classList.add(\"content--heading\");\n    contentDiv.appendChild(heading);\n\n    const dishOneImg = document.createElement(\"img\");\n    dishOneImg.classList.add(\"dish--image\");\n    dishOneImg.src = \"../src/assets/dishes/roast_beef.jpg\";\n    dishOneImg.alt = \"Image of roast beef.\"\n    \n    const dishOneTitle = document.createElement(\"h2\");\n    dishOneTitle.textContent = \"Roast Beef\";\n    dishOneTitle.classList.add(\"dishes\");\n\n    const dishOneDescription = document.createElement(\"p\");\n    dishOneDescription.textContent = \"Straight from the United States, this dish is made from select beef cuts. Tasty, and will fill you up.\";\n    dishOneDescription.classList.add(\"description\");\n\n    const dishTextBox = document.createElement(\"div\");\n    dishTextBox.classList.add(\"dishTextBox\");\n    dishTextBox.append(dishOneTitle, dishOneDescription);\n\n    const dishBox = document.createElement(\"div\");\n    dishBox.classList.add(\"dishBox\");\n    dishBox.append(dishOneImg, dishTextBox);\n    contentDiv.appendChild(dishBox)\n    \n    \n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/on-page-load.js":
/*!*****************************!*\
  !*** ./src/on-page-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onPageLoad\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\nfunction onPageLoad() {\n\n    \n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.replaceChildren();\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Welcome to Valentino's\"\n    heading.classList.add(\"content--heading\");\n    contentDiv.appendChild(heading);\n\n    const imageHero = document.createElement(\"img\");\n    imageHero.classList.add(\"heading--hero--image\");\n    imageHero.src = \"../src/assets/pepe_painting.jpg\";\n    imageHero.alt = \"Image of chef Pepe\";\n    contentDiv.appendChild(imageHero);\n\n    const topParagraph = document.createElement(\"p\");\n    topParagraph.classList.add(\"heading--paragraph\");\n    topParagraph.textContent = \"Thank you for visiting my restaurant page. Here you'll find why we're the best at what we do. We cook the best dishes out there!\";\n    contentDiv.appendChild(topParagraph);\n\n    const middleParagraph = document.createElement(\"p\");\n    middleParagraph.classList.add(\"middle--paragraph\");\n    middleParagraph.textContent = \"Our cuisine is international. We're picked the most influencial and important aspects of each country to create grandiose dishes. Please check out our menu!\";\n    contentDiv.appendChild(middleParagraph);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/on-page-load.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;