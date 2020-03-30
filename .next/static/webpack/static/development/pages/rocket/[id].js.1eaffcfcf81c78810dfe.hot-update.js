webpackHotUpdate("static\\development\\pages\\rocket\\[id].js",{

/***/ "./pages/rocket/[id].js":
/*!******************************!*\
  !*** ./pages/rocket/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./pages/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Navbar */ "./components/Navbar.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\ethan\\Desktop\\SpaceX_Test\\pages\\rocket\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                        query GET_ROCKET {\n                            rocket(id: \"", "\") {\n                            name\n                            }\n                        }\n                    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Rocket = function Rocket() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      rocket = _useState[0],
      setRocket = _useState[1]; // https://github.com/zeit/next.js/issues/8259


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      id = _useState2[0],
      setId = _useState2[1];

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setId(query.id);

    if (id) {
      ___WEBPACK_IMPORTED_MODULE_4__["client"].query({
        query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject(), id)
      }).then(function (result) {
        console.log(result);
        setRocket(result.data.rocket);
      });
    }
  }, [query, id]);
  return __jsx(Layout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Rocket: ", rocket.name));
};

/* harmony default export */ __webpack_exports__["default"] = (Rocket);

/***/ })

})
//# sourceMappingURL=[id].js.1eaffcfcf81c78810dfe.hot-update.js.map