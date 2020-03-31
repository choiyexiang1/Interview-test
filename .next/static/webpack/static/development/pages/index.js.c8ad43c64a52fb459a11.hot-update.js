webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\ethan\\Desktop\\SpaceX_Test\\pages\\index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n              query GET_ROCKETS {\n                rockets {\n                  id\n                  name\n                  description\n                  country\n                }\n              }            \n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var index = function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      rockets = _useState[0],
      setRockets = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _components_Layout__WEBPACK_IMPORTED_MODULE_3__["client"].query({
      query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject())
    }).then(function (result) {
      console.log(result);
      setRockets(result.data.rockets);
    });
  }, []);
  return __jsx("div", {
    className: "jsx-329595105",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "img",
    className: "jsx-329595105",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("div", {
    "class": "columns",
    className: "jsx-329595105",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, rockets.map(function (rocket) {
    return __jsx("div", {
      "class": "column",
      style: {
        margin: '30px'
      },
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, __jsx("div", {
      "class": "card",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, __jsx("div", {
      "class": "card-content",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }
    }, __jsx("p", {
      "class": "title",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 37
      }
    }, rocket.name), __jsx("a", {
      "class": "subtitle",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 37
      }
    }, rocket.id)), __jsx("footer", {
      "class": "card-footer",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 33
      }
    }, __jsx("p", {
      "class": "card-footer-item",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 41
      }
    }, "View on ", __jsx("a", {
      href: "https://twitter.com/codinghorror/status/506010907021828096",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 53
      }
    }, "Twitter"))), __jsx("p", {
      "class": "card-footer-item",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 41
      }
    }, "Share on ", __jsx("a", {
      href: "#",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 54
      }
    }, "Facebook"))))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "329595105",
    __self: _this
  }, "#img.jsx-329595105{background-image:url(\"/home_bgi.jpg\");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRoYW5cXERlc2t0b3BcXFNwYWNlWF9UZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNER3QixBQUd1RCxzQ0FDViw0QkFDRCwyQkFDQyw0QkFDTixzQkFDTCxpQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGhhblxcRGVza3RvcFxcU3BhY2VYX1Rlc3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcm9ja2V0cywgc2V0Um9ja2V0c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudFxyXG4gICAgICAgICAgICAucXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGdxbGBcclxuICAgICAgICAgICAgICBxdWVyeSBHRVRfUk9DS0VUUyB7XHJcbiAgICAgICAgICAgICAgICByb2NrZXRzIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgc2V0Um9ja2V0cyhyZXN1bHQuZGF0YS5yb2NrZXRzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cm9ja2V0cy5tYXAocm9ja2V0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiIHN0eWxlPXt7IG1hcmdpbjogJzMwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57cm9ja2V0Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN1YnRpdGxlXCI+e3JvY2tldC5pZH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1mb290ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBvbiA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9jb2Rpbmdob3Jyb3Ivc3RhdHVzLzUwNjAxMDkwNzAyMTgyODA5NlwiPlR3aXR0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWZvb3Rlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGFyZSBvbiA8YSBocmVmPVwiI1wiPkZhY2Vib29rPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICNpbWcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2hvbWVfYmdpLmpwZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ethan\\\\Desktop\\\\SpaceX_Test\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.c8ad43c64a52fb459a11.hot-update.js.map