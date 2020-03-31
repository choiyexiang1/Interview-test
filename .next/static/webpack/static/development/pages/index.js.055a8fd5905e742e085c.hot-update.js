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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n              query GET_ROCKETs {\n                rockets {\n                  id\n                  name\n                }\n              }            \n          "]);

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
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "img",
    className: "jsx-329595105",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("div", {
    "class": "columns",
    className: "jsx-329595105",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, rockets.map(function (rocket) {
    return __jsx("div", {
      "class": "column",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, __jsx("div", {
      "class": "card",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }
    }, __jsx("div", {
      "class": "card-image",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 33
      }
    }, __jsx("figure", {
      "class": "image",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "https://bulma.io/images/placeholders/1280x960.png",
      alt: "Placeholder image",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 41
      }
    }))), __jsx("div", {
      "class": "card-content",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }, __jsx("div", {
      "class": "media",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 37
      }
    }, __jsx("div", {
      "class": "media-left",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 41
      }
    }, __jsx("figure", {
      "class": "image is-48x48",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "https://bulma.io/images/placeholders/96x96.png",
      alt: "Placeholder image",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 49
      }
    }))), __jsx("div", {
      "class": "media-content",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 41
      }
    }, __jsx("p", {
      "class": "title is-4",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 45
      }
    }, "John Smith"), __jsx("p", {
      "class": "subtitle is-6",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 45
      }
    }, "@johnsmith"))), __jsx("div", {
      "class": "content",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 37
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ", __jsx("a", {
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 55
      }
    }, "@bulmaio"), ".", __jsx("a", {
      href: "#",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, "#css"), " ", __jsx("a", {
      href: "#",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 46
      }
    }, "#responsive"), __jsx("br", {
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 41
      }
    }), __jsx("time", {
      datetime: "2016-1-1",
      className: "jsx-329595105",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 41
      }
    }, "11:09 PM - 1 Jan 2016")))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "329595105",
    __self: _this
  }, "#img.jsx-329595105{background-image:url(\"/home_bgi.jpg\");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRoYW5cXERlc2t0b3BcXFNwYWNlWF9UZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0V3QixBQUd1RCxzQ0FDViw0QkFDRCwyQkFDQyw0QkFDTixzQkFDTCxpQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGhhblxcRGVza3RvcFxcU3BhY2VYX1Rlc3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcm9ja2V0cywgc2V0Um9ja2V0c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudFxyXG4gICAgICAgICAgICAucXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGdxbGBcclxuICAgICAgICAgICAgICBxdWVyeSBHRVRfUk9DS0VUcyB7XHJcbiAgICAgICAgICAgICAgICByb2NrZXRzIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgIGBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgICAgIHNldFJvY2tldHMocmVzdWx0LmRhdGEucm9ja2V0cylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3JvY2tldHMubWFwKHJvY2tldCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYnVsbWEuaW8vaW1hZ2VzL3BsYWNlaG9sZGVycy8xMjgweDk2MC5wbmdcIiBhbHQ9XCJQbGFjZWhvbGRlciBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJpbWFnZSBpcy00OHg0OFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYnVsbWEuaW8vaW1hZ2VzL3BsYWNlaG9sZGVycy85Nng5Ni5wbmdcIiBhbHQ9XCJQbGFjZWhvbGRlciBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy00XCI+Sm9obiBTbWl0aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlIGlzLTZcIj5Aam9obnNtaXRoPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBuZWMgaWFjdWxpcyBtYXVyaXMuIDxhPkBidWxtYWlvPC9hPi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4jY3NzPC9hPiA8YSBocmVmPVwiI1wiPiNyZXNwb25zaXZlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTYtMS0xXCI+MTE6MDkgUE0gLSAxIEphbiAyMDE2PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgI2ltZyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaG9tZV9iZ2kuanBnXCIpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\ethan\\\\Desktop\\\\SpaceX_Test\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.055a8fd5905e742e085c.hot-update.js.map