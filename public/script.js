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

/***/ "./src/components/Board.js":
/*!*********************************!*\
  !*** ./src/components/Board.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square */ \"./src/components/Square.js\");\n\n\n\n\nclass Board extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor() {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.getElementById(\"board\") });\n\t};\n\n\trender() {\n\t\tthis.element.innerHTML = \"\";\n\n\t\tconst boardContent = _store_index__WEBPACK_IMPORTED_MODULE_1__.default.state.board.map(square => new _Square__WEBPACK_IMPORTED_MODULE_2__.default(square).render());\n\t\tthis.element.append(...boardContent);\n\n\t\treturn this.element;\n\t};\n};\n\n//# sourceURL=webpack://tic-tac-toe/./src/components/Board.js?");

/***/ }),

/***/ "./src/components/ComponentBase.js":
/*!*****************************************!*\
  !*** ./src/components/ComponentBase.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ComponentBase)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n\n\nclass ComponentBase {\n\tconstructor(props={}) {\n\t\t// Components that are not listening to state can be defined by\n\t\t// passing down `props.static` set to true\n\n\t\tthis.render = this.render || function(){};\n\n\t\tif (props.store instanceof _store_store__WEBPACK_IMPORTED_MODULE_0__.default && !props.hasOwnProperty(\"static\")) {\n\t\t\tprops.store.events.subscribe(\"stateChange\", () => this.render());\n\t\t};\n\n\t\tif (props.hasOwnProperty(\"element\")) {\n\t\t\tthis.element = props.element;\n\t\t};\n\t};\n};\n\n//# sourceURL=webpack://tic-tac-toe/./src/components/ComponentBase.js?");

/***/ }),

/***/ "./src/components/Square.js":
/*!**********************************!*\
  !*** ./src/components/Square.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Square)\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n\n\n\nclass Square extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor({ index, content }) {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.createElement(\"div\") });\n\t\tthis.index = index;\n\t\tthis.content = content;\n\t\tthis.hasRendered = false;\n\n\t\t// Specific cell classes are required to properly style the grid\n\t\tthis.element.classList.add(\"board-square\", `board-square-${this.index}`);\n\t};\n\n\taddEvents() {\n\t\tthis.element.addEventListener(\"click\", () => {\n\t\t\t_store_index__WEBPACK_IMPORTED_MODULE_1__.default.dispatch(\"runTurn\", { squareIndex: this.index })\n\t\t});\n\t};\n\n\trender() {\n\t\tif (!this.hasRendered) {\n\t\t\tthis.addEvents();\n\t\t};\n\n\t\tif (this.content !== null) {\n\t\t\tthis.element.innerHTML = this.content;\n\t\t};\n\n\t\tthis.hasRendered = true;\n\t\treturn this.element;\n\t};\n};\n\n//# sourceURL=webpack://tic-tac-toe/./src/components/Square.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Board */ \"./src/components/Board.js\");\n\n\nconst instanceOfBoard = new _components_Board__WEBPACK_IMPORTED_MODULE_0__.default();\n\ninstanceOfBoard.render();\n\n//# sourceURL=webpack://tic-tac-toe/./src/index.js?");

/***/ }),

/***/ "./src/library/eventObserver.js":
/*!**************************************!*\
  !*** ./src/library/eventObserver.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventObserver)\n/* harmony export */ });\nclass EventObserver {\n\tconstructor() {\n\t\tthis.events = {};\n\t};\n\n\tsubscribe(event, callback) {\n\t\tif (!this.events.hasOwnProperty(event)) {\n\t\t\tthis.events[event] = [];\n\t\t};\n\n\t\treturn this.events[event].push(callback);\n\t};\n\n\tnotify(event, state) {\n\t\tif (!this.events.hasOwnProperty(event)) {\n\t\t\treturn [];\n\t\t};\n\n\t\treturn this.events[event].map(callback => callback(state));\n\t};\n};\n\n//# sourceURL=webpack://tic-tac-toe/./src/library/eventObserver.js?");

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\trunTurn(context, { squareIndex }) {\n\t\tif (context.state.board[squareIndex].content === null) {\n\t\t\tconst playerData = context.getter(\"currentTurnPlayerData\");\n\t\t\tcontext.commit(\"updateSquareContent\", { index: squareIndex, newContent: playerData.icon });\n\n\t\t\tif (context.getter(\"hasWinningConditionMet\")) {\n\t\t\t\tcontext.commit(\"updateScore\", { scorer: playerData.name });\n\t\t\t\tcontext.commit(\"clearBoard\");\n\t\t\t};\n\n\t\t\tif (context.getter(\"isBoardFull\")) {\n\t\t\t\tcontext.commit(\"updateScore\", { scorer: \"draw\" });\n\t\t\t\tcontext.commit(\"clearBoard\");\n\t\t\t};\n\n\t\t\tcontext.commit(\"toggleTurn\");\n\t\t};\n\t}\n});\n\n//# sourceURL=webpack://tic-tac-toe/./src/store/actions.js?");

/***/ }),

/***/ "./src/store/getters.js":
/*!******************************!*\
  !*** ./src/store/getters.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tcurrentTurnPlayerData(state) {\n\t\tconst playerData = state.isPlayerFirstTurn\n\t\t\t? { name: \"playerFirst\", icon: state.icon.playerFirst }\n\t\t\t: { name: \"playerSecond\", icon: state.icon.playerSecond }\n\n\t\treturn playerData;\n\t},\n\n\thasWinningConditionMet(state) {\n\t\tconst winningConditionsIndexes = [\n\t\t\t[0, 1, 2], [3, 4, 5], [6, 7, 8],\n\t\t\t[0, 3, 6], [1, 4, 7], [2, 5, 8],\n\t\t\t[0, 4, 8], [6, 4, 2]\n\t\t];\n\n\t\tconst boardWinningConditionsLines = winningConditionsIndexes.map(conditionSet => (\n\t\t\tconditionSet.map(index => state.board[index].content)\n\t\t));\n\n\t\tconst boardLinesFilled = boardWinningConditionsLines.filter(line => {\n\t\t\treturn !line.includes(null) && line.every(item => item === line[0])\n\t\t});\n\n\t\tif (boardLinesFilled?.length) {\n\t\t\treturn true\n\t\t};\n\n\t\treturn false;\n\t},\n\n\tisBoardFull(state) {\n\t\treturn state.board.every(square => square.content !== null);\n\t}\n});\n\n//# sourceURL=webpack://tic-tac-toe/./src/store/getters.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/store/store.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/store/state.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ \"./src/store/mutations.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/store/actions.js\");\n/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getters */ \"./src/store/getters.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _store__WEBPACK_IMPORTED_MODULE_0__.default(_state__WEBPACK_IMPORTED_MODULE_1__.default, _mutations__WEBPACK_IMPORTED_MODULE_2__.default, _actions__WEBPACK_IMPORTED_MODULE_3__.default, _getters__WEBPACK_IMPORTED_MODULE_4__.default));\n\n//# sourceURL=webpack://tic-tac-toe/./src/store/index.js?");

/***/ }),

/***/ "./src/store/mutations.js":
/*!********************************!*\
  !*** ./src/store/mutations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tupdateSquareContent(state, { index, newContent }) {\n\t\tstate.board[index].content = newContent;\n\t},\n\n\ttoggleTurn(state) {\n\t\tstate.isPlayerFirstTurn = !state.isPlayerFirstTurn;\n\t},\n\n\tupdateScore(state, { scorer }) {\n\t\tif (state.score.hasOwnProperty(scorer)) {\n\t\t\tstate.score[scorer]++;\n\t\t};\n\t},\n\n\tclearBoard(state) {\n\t\tstate.board.map(square => square.content = null);\n\t},\n\n\tclearScore(state) {\n\t\tstate.score = {\n\t\t\tplayerFirst: 0,\n\t\t\tplayerSecond: 0,\n\t\t\tdraws: 0\n\t\t};\n\t},\n});\n\n//# sourceURL=webpack://tic-tac-toe/./src/store/mutations.js?");

/***/ }),

/***/ "./src/store/state.js":
/*!****************************!*\
  !*** ./src/store/state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst state = {\n  board: [\n    { index: 0, content: null },\n    { index: 1, content: null },\n    { index: 2, content: null },\n    { index: 3, content: null },\n    { index: 4, content: null },\n    { index: 5, content: null },\n    { index: 6, content: null },\n    { index: 7, content: null },\n    { index: 8, content: null },\n  ],\n  isPlayerFirstTurn: true,\n  score: {\n    playerFirst: 0,\n    playerSecond: 0,\n    draws: 0,\n  },\n  icon: {\n    // Unicode Icons, for more reference, read:\n    // https://www.w3schools.com/charsets/ref_utf_dingbats.asp\n    playerFirst: \"&#10007;\",\n    playerSecond: \"&#10061;\",\n    draw: \"&#10070;\",\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/store/state.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n/* harmony import */ var _library_eventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/eventObserver */ \"./src/library/eventObserver.js\");\n\n\nclass Store {\n\tconstructor(state, mutations, actions, getters) {\n\t\tthis.state = state || {};\n\t\tthis.mutations = mutations || {};\n\t\tthis.actions = actions || {};\n\t\tthis.getters = getters || {};\n\t\tthis.events = new _library_eventObserver__WEBPACK_IMPORTED_MODULE_0__.default();\n\t};\n\n\tcommit(mutationName, payload, notifyEvents = true) {\n\t\tif (typeof this.mutations[mutationName] !== \"function\") {\n\t\t\tconsole.error(`Mutation \"${mutationName}\" doesn't exists!`);\n\t\t\treturn false;\n\t\t};\n\n\t\t// Commit the mutation\n\t\tthis.mutations[mutationName](this.state, payload);\n\n\t\t// Notify the components that are listening to the event\n\t\tif (notifyEvents) {\n\t\t\tthis.events.notify(\"stateChange\", this.state);\n\t\t};\n\t};\n\n\tdispatch(actionName, payload) {\n\t\tif (typeof this.actions[actionName] !== \"function\") {\n\t\t\tconsole.error(`Action \"${actionName}\" doesn't exists!`);\n\t\t\treturn false;\n\t\t};\n\n\t\tthis.actions[actionName](this, payload);\n\t};\n\n\tgetter(getterName) {\n\t\tif (typeof this.getters[getterName] !== \"function\") {\n\t\t\tconsole.error(`Getter \"${getterName}\" doesn't exists!`);\n\t\t\treturn false;\n\t\t};\n\n\t\treturn this.getters[getterName](this.state);\n\t}\n};\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/store/store.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;