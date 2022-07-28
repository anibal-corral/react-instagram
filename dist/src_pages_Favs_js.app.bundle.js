"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_instagram"] = self["webpackChunkreact_instagram"] || []).push([["src_pages_Favs_js"],{

/***/ "./src/components/FavsList/FavList.js":
/*!********************************************!*\
  !*** ./src/components/FavsList/FavList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavList\": () => (/* binding */ FavList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/FavsList/styles.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar FavList = function FavList(_ref) {\n  var _ref$favs = _ref.favs,\n      favs = _ref$favs === void 0 ? [] : _ref$favs;\n  console.log('FavsList ', favs);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, null, favs.map(function (fav) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/detail/\".concat(fav.id),\n      key: fav.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Image, {\n      src: fav.src\n    }));\n  }));\n};\nFavList.propTypes = {\n  favs: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)\n  }))\n};\n\n//# sourceURL=webpack://react-instagram/./src/components/FavsList/FavList.js?");

/***/ }),

/***/ "./src/components/FavsList/styles.js":
/*!*******************************************!*\
  !*** ./src/components/FavsList/styles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Grid\": () => (/* binding */ Grid),\n/* harmony export */   \"Image\": () => (/* binding */ Image),\n/* harmony export */   \"Link\": () => (/* binding */ Link)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_reach_router__WEBPACK_IMPORTED_MODULE_0__.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\nborder-radius: 8px;\\nbox-shadow: 0 0 8px rgba(0, 0, 0, .3);\\ndisplay: inline-block;\\nmargin: 1%;\\noverflow:hidden;\\nposition: relative;\\nwidth:31.33%;\\n&:after {\\n    content: '';\\n    display:block;\\n    padding-bottom:100%;\\n}\\n\"])));\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\npadding-top:32px;\\n\"])));\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\nobject-fit: cover;\\nheight:100%;\\nwidth:100%;\\nposition:absolute\\n\"])));\n\n//# sourceURL=webpack://react-instagram/./src/components/FavsList/styles.js?");

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Layout/styles.js\");\n\n\n\nvar Layout = function Layout(_ref) {\n  var children = _ref.children,\n      title = _ref.title,\n      subtitle = _ref.subtitle;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, title, \" | Petgram\"), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: subtitle\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Div, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, null, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Subtitle, null, subtitle), children));\n};\n\n//# sourceURL=webpack://react-instagram/./src/components/Layout/Layout.js?");

/***/ }),

/***/ "./src/components/Layout/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Div\": () => (/* binding */ Div),\n/* harmony export */   \"Subtitle\": () => (/* binding */ Subtitle),\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Div = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  padding: 16px;\\n\"])));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  font-size: 24px;\\n  font-weight: 600;\\n  color: #222;\\n  padding-bottom: 8px;\\n\"])));\nvar Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  font-size: 16px;\\n  font-weight: 400;\\n  color: #333;\\n  padding-bottom: 4px;\\n\"])));\n\n//# sourceURL=webpack://react-instagram/./src/components/Layout/styles.js?");

/***/ }),

/***/ "./src/containers/GetFavorites.js":
/*!****************************************!*\
  !*** ./src/containers/GetFavorites.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavsWithQuery\": () => (/* binding */ FavsWithQuery)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"./node_modules/@apollo/react-components/lib/react-components.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _components_FavsList_FavList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FavsList/FavList */ \"./src/components/FavsList/FavList.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar GET_FAVS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\nquery getFavs {\\n  favs {\\n    id\\n    categoryId\\n    src\\n    likes\\n    userId\\n  }\\n}\\n\"])));\n\nvar renderProp = function renderProp(_ref) {\n  var loading = _ref.loading,\n      error = _ref.error,\n      data = _ref.data;\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading...\");\n  console.log('error => ', error);\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Error! \");\n  console.log('data ', data);\n  var favs = data.favs;\n  console.log('favs', favs);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FavsList_FavList__WEBPACK_IMPORTED_MODULE_1__.FavList, {\n    favs: favs\n  }, \"FavsWithQuery\");\n};\n\nvar FavsWithQuery = function FavsWithQuery() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__.Query, {\n    query: GET_FAVS,\n    fetchPolicy: \"network-only\"\n  }, renderProp);\n};\n\n//# sourceURL=webpack://react-instagram/./src/containers/GetFavorites.js?");

/***/ }),

/***/ "./src/pages/Favs.js":
/*!***************************!*\
  !*** ./src/pages/Favs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_GetFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/GetFavorites */ \"./src/containers/GetFavorites.js\");\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./src/components/Layout/Layout.js\");\n\n\n // export const Favs = () => {\n//   return (\n//     //  <Layout title={`Petsgram - Your favorites`} subtitle={`With this app you can find nice pet pictures`}>\n//         <>\n//      <h1>Favs</h1>\n//       <FavsWithQuery />  \n//       </>\n//   )\n// }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return (\n    /*#__PURE__*/\n    //  <Layout title={`Petsgram - Your favorites`} subtitle={`With this app you can find nice pet pictures`}>\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Favs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_GetFavorites__WEBPACK_IMPORTED_MODULE_1__.FavsWithQuery, null))\n  );\n});\n\n//# sourceURL=webpack://react-instagram/./src/pages/Favs.js?");

/***/ })

}]);