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
    className: "jsx-3292585594",
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
    className: "jsx-3292585594",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "columns",
    style: {
      backgroundColor: 'black',
      opacity: 0.8,
      height: '91vh'
    },
    className: "jsx-3292585594",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, rockets.map(function (rocket) {
    return __jsx("div", {
      "class": "column",
      style: {
        margin: '40px auto'
      },
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    }, __jsx("div", {
      "class": "card",
      style: {
        width: '300px',
        color: '#f2f2f2'
      },
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 33
      }
    }, __jsx("div", {
      "class": "card-image",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 37
      }
    }, __jsx("figure", {
      "class": "image is-4by3",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "/home_bgi.jpg",
      alt: "Placeholder image",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 45
      }
    }))), __jsx("div", {
      "class": "card-content",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 37
      }
    }, __jsx("div", {
      "class": "media",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 41
      }
    }, __jsx("div", {
      "class": "media-content",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 45
      }
    }, __jsx("p", {
      "class": "title is-4",
      style: {
        fontSize: '1.5em',
        textDecorationWidth: 'bold'
      },
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 49
      }
    }, rocket.name), __jsx("a", {
      "class": "subtitle is-6",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 49
      }
    }, "@", rocket.id))), __jsx("div", {
      "class": "content",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 45
      }
    }, __jsx("b", {
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 48
      }
    }, "Description: ")), rocket.description), __jsx("br", {
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 41
      }
    }), __jsx("div", {
      "class": "content",
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 45
      }
    }, __jsx("b", {
      className: "jsx-3292585594",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 48
      }
    }, "Country: "), " ", rocket.country)))));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3292585594",
    __self: _this
  }, "#img.jsx-3292585594{background-image:url(\"/home_bgi.jpg\");background-attachment:fixed;background-repeat:no-repeat;background-size:cover;height:91vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRoYW5cXERlc2t0b3BcXFNwYWNlWF9UZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUV3QixBQUd1RCxzQ0FDViw0QkFDQSw0QkFDTixzQkFDVixZQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXGV0aGFuXFxEZXNrdG9wXFxTcGFjZVhfVGVzdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtyb2NrZXRzLCBzZXRSb2NrZXRzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50XHJcbiAgICAgICAgICAgIC5xdWVyeSh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogZ3FsYFxyXG4gICAgICAgICAgICAgIHF1ZXJ5IEdFVF9ST0NLRVRTIHtcclxuICAgICAgICAgICAgICAgIHJvY2tldHMge1xyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGNvdW50cnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICBzZXRSb2NrZXRzKHJlc3VsdC5kYXRhLnJvY2tldHMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBvcGFjaXR5OiAwLjgsIGhlaWdodDonOTF2aCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb2NrZXRzLm1hcChyb2NrZXQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiIHN0eWxlPXt7IG1hcmdpbjonNDBweCBhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnLCBjb2xvcjonI2YyZjJmMid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJpbWFnZSBpcy00YnkzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaG9tZV9iZ2kuanBnXCIgYWx0PVwiUGxhY2Vob2xkZXIgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTRcIiBzdHlsZT17eyBmb250U2l6ZTogJzEuNWVtJywgdGV4dERlY29yYXRpb25XaWR0aDonYm9sZCcgfX0+e3JvY2tldC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdWJ0aXRsZSBpcy02XCI+QHtyb2NrZXQuaWR9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5EZXNjcmlwdGlvbjogPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm9ja2V0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+Q291bnRyeTogPC9iPiB7cm9ja2V0LmNvdW50cnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAjaW1nIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9ob21lX2JnaS5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkxdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\ethan\\\\Desktop\\\\SpaceX_Test\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.82d0e3679f77fc7a2e58.hot-update.js.map