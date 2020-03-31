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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n              query GET_ROCKETS {\n                rockets {\n                  id\n                  name\n                }\n              }            \n          "]);

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
      style: {
        margin: '10px'
      },
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
  }, "#img.jsx-329595105{background-image:url(\"/home_bgi.jpg\");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRoYW5cXERlc2t0b3BcXFNwYWNlWF9UZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0V3QixBQUd1RCxzQ0FDViw0QkFDRCwyQkFDQyw0QkFDTixzQkFDTCxpQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGhhblxcRGVza3RvcFxcU3BhY2VYX1Rlc3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcm9ja2V0cywgc2V0Um9ja2V0c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudFxyXG4gICAgICAgICAgICAucXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGdxbGBcclxuICAgICAgICAgICAgICBxdWVyeSBHRVRfUk9DS0VUUyB7XHJcbiAgICAgICAgICAgICAgICByb2NrZXRzIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgIGBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgICAgIHNldFJvY2tldHMocmVzdWx0LmRhdGEucm9ja2V0cylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3JvY2tldHMubWFwKHJvY2tldCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIiBzdHlsZT17e21hcmdpbiA6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9idWxtYS5pby9pbWFnZXMvcGxhY2Vob2xkZXJzLzEyODB4OTYwLnBuZ1wiIGFsdD1cIlBsYWNlaG9sZGVyIGltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImltYWdlIGlzLTQ4eDQ4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9idWxtYS5pby9pbWFnZXMvcGxhY2Vob2xkZXJzLzk2eDk2LnBuZ1wiIGFsdD1cIlBsYWNlaG9sZGVyIGltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTRcIj5Kb2huIFNtaXRoPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGUgaXMtNlwiPkBqb2huc21pdGg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGhhc2VsbHVzIG5lYyBpYWN1bGlzIG1hdXJpcy4gPGE+QGJ1bG1haW88L2E+LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPiNjc3M8L2E+IDxhIGhyZWY9XCIjXCI+I3Jlc3BvbnNpdmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxNi0xLTFcIj4xMTowOSBQTSAtIDEgSmFuIDIwMTY8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAjaW1nIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9ob21lX2JnaS5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ethan\\\\Desktop\\\\SpaceX_Test\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.e82f941bfc172cc5ccda.hot-update.js.map