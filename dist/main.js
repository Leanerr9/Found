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

/***/ "./src/Rest.js":
/*!*********************!*\
  !*** ./src/Rest.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createRestaurantHomePage = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('restContent');\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Welcome To Rèst de Gastronomica!';\r\n    pageContent.appendChild(heading);\r\n\r\n    const image = document.createElement('img');\r\n    image.src = '../images/Rectangle-39.png'\r\n    image.height = '300';\r\n    pageContent.appendChild(image);\r\n\r\n    const subtext = document.createElement('p');\r\n    subtext.textContent = `We aim to serve the best experience. Don't miss out,\r\n     Join us- We will leave you wanting more!`\r\n     pageContent.appendChild(subtext);\r\n     content.appendChild(pageContent);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n//# sourceURL=webpack://java/./src/Rest.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createContactPage = () => {\r\n    const content = document.querySelector('#content');\r\n    const contactContent = document.createElement('div');\r\n    contactContent.classList.add('contactContent');\r\n\r\n    const contactInfo  = document.createElement('form');\r\n    contactInfo.classList.add('contactForm');\r\n\r\n    const headInput = document.createElement('input');\r\n    headInput.type = 'text';\r\n    headInput.placeholder = 'Enter';\r\n    contactInfo.appendChild(headInput);\r\n\r\n    const userAddress = document.createElement('input');\r\n    userAddress.type = 'text';\r\n    userAddress.placeholder = 'Find Address';\r\n    contactInfo.appendChild(userAddress);\r\n\r\n    const userPhoneNumber = document.createElement('input');\r\n    userPhoneNumber.type = 'text';\r\n    userPhoneNumber.placeholder = 'Enter Phone';\r\n    contactInfo.appendChild(userPhoneNumber);\r\n\r\n    const submitBtn = document.createElement('input');\r\n    submitBtn.type = 'submit';\r\n    submitBtn.value = 'submit';\r\n    contactInfo.appendChild(submitBtn);\r\n\r\n   contactContent.appendChild(contactInfo);\r\n   content.appendChild(contactContent);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://java/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageDisplay */ \"./src/pageDisplay.js\");\n\r\n\r\n(0,_pageDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://java/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createMenuPage = () => {\r\n    const content = document.querySelector('#content');\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('menuContent');\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'OuR MeNuS';\r\n    heading.classList.add('menuHeader');\r\n\r\n    const menuList = document.createElement('ul');\r\n\r\n    const menuItem1 = document.createElement('li');\r\n    menuItem1.textContent = `Chilean Seabass Ransom Miso & Truffle`;\r\n\r\n    const imageItem1 = document.createElement('img');\r\n    imageItem1.src = '../images/OIP.jpg';\r\n    imageItem1.height = '125';\r\n    imageItem1.width = '200';\r\n    imageItem1.classList.add('menuImg');\r\n    menuItem1.appendChild(imageItem1);\r\n\r\n\r\n     const menuItem2 = document.createElement('li');\r\n    menuItem2.textContent = `Crispy Duck Watermelon Salad, Pomegranate`;\r\n\r\n    const imageItem2 = document.createElement('img');\r\n    imageItem2.src = '../images/LSJOSZZA45A67KKCET35P6OWJA.webp'\r\n    imageItem2.height = '125';\r\n    imageItem2.width = '200';\r\n    imageItem2.classList.add('menuImg');\r\n    menuItem2.appendChild(imageItem2);\r\n\r\n\r\n     const menuItem3 = document.createElement('li');\r\n    menuItem3.textContent = ` Salt & Pepper Squid Yellowtail Sashimi Mandarin Ponzu`;\r\n\r\n    const imageItem3 = document.createElement('img');\r\n    imageItem3.src = '../images/a-plate-with-yellowtail-sashimi-1.webp'\r\n    imageItem3.height = '125';\r\n    imageItem3.width = '200';\r\n    imageItem3.classList.add('menuImg');\r\n    menuItem3.appendChild(imageItem3);\r\n\r\n    menuList.appendChild(menuItem1);\r\n    menuList.appendChild(menuItem2);\r\n    menuList.appendChild(menuItem3);\r\n\r\n    pageContent.appendChild(heading);\r\n    pageContent.appendChild(menuList);\r\n    content.appendChild(pageContent);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://java/./src/menu.js?");

/***/ }),

/***/ "./src/pageDisplay.js":
/*!****************************!*\
  !*** ./src/pageDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rest */ \"./src/Rest.js\");\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section */ \"./src/section.js\");\n\r\n\r\n\r\nfunction startingLoad() {\r\n    (0,_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    ;(0,_Rest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startingLoad);\n\n//# sourceURL=webpack://java/./src/pageDisplay.js?");

/***/ }),

/***/ "./src/section.js":
/*!************************!*\
  !*** ./src/section.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _Rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rest */ \"./src/Rest.js\");\n\r\n\r\n\r\n\r\nconst createSections = () => {\r\n    const content = document.querySelector('#content');\r\n\r\n\r\n    const divOne = document.createElement('div');\r\n    const divTwo = document.createElement('div');\r\n    const divThree = document.createElement('div');\r\n\r\n    divOne.setAttribute('id', 'homeBtn');\r\n    divTwo.setAttribute('id', 'menuBtn');\r\n    divThree.setAttribute('id', 'contactBtn');\r\n\r\n    divOne.classList.add('click');\r\n    divTwo.classList.add('click');\r\n    divThree.classList.add('click');\r\n\r\n    divOne.textContent = 'Home';\r\n    divTwo.textContent = 'Menu';\r\n    divThree.textContent = 'Contact';\r\n\r\n    content.appendChild(divOne);\r\n    content.appendChild(divTwo);\r\n    content.appendChild(divThree);\r\n\r\n    divOne.addEventListener('click', () => {\r\n        clearSection();\r\n        (0,_Rest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\n    divTwo.addEventListener('click', () => {\r\n        clearSection();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    divThree.addEventListener('click', () => {\r\n        clearSection();\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n};\r\n\r\nfunction clearSection() {\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.querySelector(\".page-content\");\r\n    if (pageContent) {\r\n        content.removeChild(pageContent);\r\n    }\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSections);\n\n//# sourceURL=webpack://java/./src/section.js?");

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