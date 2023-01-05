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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.replaceChildren();\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"For questions or reservations, please contact us at:\";\n    heading.classList.add(\"content--heading\");\n    contentDiv.appendChild(heading);\n\n    const phoneNumberTitle = document.createElement(\"h3\");\n    phoneNumberTitle.textContent = \"Phone number\";\n    phoneNumberTitle.classList.add(\"contactTitle\");\n\n    const phoneNumberText = document.createElement(\"h4\");\n    phoneNumberText.textContent = \"8 800 8135 \";\n    phoneNumberText.classList.add(\"contactText\");\n\n    const phoneInfoContainer = document.createElement(\"div\");\n    phoneInfoContainer.classList.add(\"infoContainer\");\n    phoneInfoContainer.append(phoneNumberTitle, phoneNumberText);\n    contentDiv.appendChild(phoneInfoContainer)\n\n    const emailTitle = document.createElement(\"h3\");\n    emailTitle.textContent = \"Email\";\n    emailTitle.classList.add(\"contactTitle\");\n\n    const emailText = document.createElement(\"h4\");\n    emailText.textContent = \"valetinos@bestrestaurant.com\";\n    emailText.classList.add(\"contactText\");\n\n    const emailInfoContainer = document.createElement(\"div\");\n    emailInfoContainer.classList.add(\"infoContainer\");\n    emailInfoContainer.append(emailTitle, emailText);\n    contentDiv.appendChild(emailInfoContainer);\n\n\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n\n    console.log(\"testing again again\")\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.replaceChildren();\n\n    //Main heading for page\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"We have an international cousine. Please check the dishes below.\";\n    heading.classList.add(\"content--heading\");\n    contentDiv.appendChild(heading);\n\n    //image for first dish\n    const dishOneImg = document.createElement(\"img\");\n    dishOneImg.classList.add(\"dish--image\");\n    dishOneImg.src = \"../src/assets/dishes/roast_beef.jpg\";\n    dishOneImg.alt = \"Image of roast beef.\"\n    \n    //title for first dish\n    const dishOneTitle = document.createElement(\"h2\");\n    dishOneTitle.textContent = \"Roast Beef\";\n    dishOneTitle.classList.add(\"dishes\");\n\n    //description for first dish\n    const dishOneDescription = document.createElement(\"p\");\n    dishOneDescription.textContent = \"Straight from the United States, this dish is made from select beef cuts. Tasty, and will fill you up.\";\n    dishOneDescription.classList.add(\"description\");\n\n    //div container for first dish\n    const dishTextBoxOne = document.createElement(\"div\");\n    dishTextBoxOne.classList.add(\"dishTextBox\");\n    dishTextBoxOne.append(dishOneTitle, dishOneDescription);\n\n    //div box containing first dish added to page\n    const dishBoxOne = document.createElement(\"div\");\n    dishBoxOne.classList.add(\"dishBox\");\n    dishBoxOne.append(dishOneImg, dishTextBoxOne);\n    contentDiv.appendChild(dishBoxOne)\n\n    //image for second dish\n    const dishTwoImg = document.createElement(\"img\");\n    dishTwoImg.classList.add(\"dish--image\");\n    dishTwoImg.src = \"../src/assets/dishes/pigs-feet-soup.jpg\";\n    dishTwoImg.alt = \"Image of pork feed.\"\n    \n    //title for second dish\n    const dishTwoTitle = document.createElement(\"h2\");\n    dishTwoTitle.textContent = \"Pork feet\";\n    dishTwoTitle.classList.add(\"dishes\");\n\n    //description for second dish\n    const dishTwoDescription = document.createElement(\"p\");\n    dishTwoDescription.textContent = \"Vietnamese style coocked pork feet. Very healthy and tasty.\";\n    dishTwoDescription.classList.add(\"description\");\n\n    //div container for second dish\n    const dishTextBoxTwo = document.createElement(\"div\");\n    dishTextBoxTwo.classList.add(\"dishTextBox\");\n    dishTextBoxTwo.append(dishTwoTitle, dishTwoDescription);\n\n    //div box containing second dish added to page\n    const dishBoxTwo = document.createElement(\"div\");\n    dishBoxTwo.classList.add(\"dishBox\");\n    dishBoxTwo.append(dishTwoImg, dishTextBoxTwo);\n    contentDiv.appendChild(dishBoxTwo)\n    \n    //image for third dish\n    const dishThirdImg = document.createElement(\"img\");\n    dishThirdImg.classList.add(\"dish--image\");\n    dishThirdImg.src = \"../src/assets/dishes/turducken.jpg\";\n    dishThirdImg.alt = \"Image of turducken.\"\n    \n    //title for third dish\n    const dishThirdTitle = document.createElement(\"h2\");\n    dishThirdTitle.textContent = \"Turducken\";\n    dishThirdTitle.classList.add(\"dishes\");\n\n    //description for third dish\n    const dishThirdDescription = document.createElement(\"p\");\n    dishThirdDescription.textContent = \"Maybe you wanted to try chicken, duck and turkey at the same time? Well now you can.\";\n    dishThirdDescription.classList.add(\"description\");\n\n    //div container for third dish\n    const dishTextBoxThird = document.createElement(\"div\");\n    dishTextBoxThird.classList.add(\"dishTextBox\");\n    dishTextBoxThird.append(dishThirdTitle, dishThirdDescription);\n\n    //div box containing third dish added to page\n    const dishBoxThird = document.createElement(\"div\");\n    dishBoxThird.classList.add(\"dishBox\");\n    dishBoxThird.append(dishThirdImg, dishTextBoxThird);\n    contentDiv.appendChild(dishBoxThird);\n    \n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/on-page-load.js":
/*!*****************************!*\
  !*** ./src/on-page-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onPageLoad\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\nfunction onPageLoad() {\n\n    \n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.replaceChildren();\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Welcome to Valentino's\"\n    heading.classList.add(\"content--heading\");\n    contentDiv.appendChild(heading);\n\n    const imageHero = document.createElement(\"img\");\n    imageHero.classList.add(\"heading--hero--image\");\n    imageHero.src = \"../src/assets/pepe_painting.jpg\";\n    imageHero.alt = \"Image of chef Pepe\";\n    contentDiv.appendChild(imageHero);\n\n    const topParagraph = document.createElement(\"p\");\n    topParagraph.classList.add(\"heading--paragraph\");\n    topParagraph.textContent = \"Thank you for visiting my restaurant page. Here you'll find why we're the best at what we do. We cook the best dishes out there!\";\n    contentDiv.appendChild(topParagraph);\n\n    const middleParagraph = document.createElement(\"p\");\n    middleParagraph.classList.add(\"middle--paragraph\");\n    middleParagraph.textContent = \"Our cuisine is international. We're picked the most influencial and important aspects of each country to create grandiose dishes. Please check out our menu!\";\n    contentDiv.appendChild(middleParagraph);\n    \n    //Bottom images\n\n    const imageMainOne = document.createElement(\"img\");\n    imageMainOne.classList.add(\"imageHome\");\n    imageMainOne.classList.add(\"pepe-cooking\");\n    imageMainOne.src = \"../src/assets/pepe-cooking-soup.webp\";\n    imageMainOne.alt = \"Pepe chef cooking soup.\";\n\n    const imageMainTwo = document.createElement(\"img\");\n    imageMainTwo.classList.add(\"imageHome\");\n    imageMainTwo.src = \"../src/assets/pepe-happy.gif\";\n    imageMainTwo.alt = \"Pepe chef happy.\";\n\n    const imageMainThree = document.createElement(\"img\");\n    imageMainThree.classList.add(\"imageHome\");\n    imageMainThree.classList.add(\"pepe-comfy\");\n    imageMainThree.src = \"../src/assets/pepe-comfy.jpg\";\n    imageMainThree.alt = \"Comfy Pepe chef with lasagna.\";\n\n\n\n    const mainImagesContainer = document.createElement(\"div\");\n    mainImagesContainer.classList.add(\"imagesContainer\");\n    mainImagesContainer.append(imageMainOne, imageMainTwo, imageMainThree);\n    contentDiv.appendChild(mainImagesContainer);\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/on-page-load.js?");

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