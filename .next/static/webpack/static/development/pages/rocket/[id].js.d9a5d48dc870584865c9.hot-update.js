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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loader */ "./components/Loader.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\ethan\\Desktop\\SpaceX_Test\\pages\\rocket\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                        query GET_ROCKET {\n                            histories {\n                                title\n                                details\n                                event_date_utc\n                                flight {\n                                  rocket {\n                                    rocket {\n                                      id\n                                    }\n                                  }\n                                }\n                              }\n                              rocket(id: \"", "\") {\n                                id\n                                name\n                                description\n                                country\n                                diameter {\n                                  feet\n                                  meters\n                                }\n                                height {\n                                  feet\n                                  meters\n                                }\n                                mass {\n                                  kg\n                                  lb\n                                }\n                                payload_weights {\n                                  kg\n                                  lb\n                                  name\n                                }\n                                first_stage {\n                                  burn_time_sec\n                                  engines\n                                  fuel_amount_tons\n                                  thrust_vacuum {\n                                    kN\n                                    lbf\n                                  }\n                                  thrust_sea_level {\n                                    kN\n                                    lbf\n                                  }\n                                }\n                                second_stage {\n                                  burn_time_sec\n                                  engines\n                                  thrust {\n                                    kN\n                                    lbf\n                                  }\n                                }\n                                wikipedia\n                                stages\n                              }\n                        }\n                    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Rocket = function Rocket() {
  var img = {
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      rocket = _useState[0],
      setRocket = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      histories = _useState2[0],
      setHistories = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1]; // https://github.com/zeit/next.js/issues/8259


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      id = _useState4[0],
      setId = _useState4[1];

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setId(query.id);

    if (id) {
      _components_Layout__WEBPACK_IMPORTED_MODULE_5__["client"].query({
        query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject(), id)
      }).then(function (result) {
        // console.log(result)
        setRocket(result.data.rocket);
        setIsLoading(false);
        setHistories(result.data.histories);
      });
    }
  }, [query, id]); // Filter out histories don't have flight

  var filterHistory = histories.filter(function (history) {
    return history.flight;
  }); // console.log(filterHistory)
  // Filter out id not same with this page

  var rocketHistory = filterHistory.filter(function (history) {
    return history.flight.rocket.rocket.id == "".concat(id);
  }); // console.log(rocketHistory)
  //change number to [123,456]

  var changeNum = function changeNum(x) {
    return x.toLocaleString(x);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, isLoading ? //isLoading (true)--------------------------------------------------------------------------------------------
  __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'black',
      height: '92vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }))) : //isLoading (false)--------------------------------------------------------------------------------------------
  __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, rocket.name, " | SpaceX")), __jsx("img", {
    src: "/RocketPic/".concat(rocket.id, "_pic.jpg"),
    style: img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }), __jsx("section", {
    "class": "section has-text-black has-background-white-bis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx("h1", {
    "class": "title is-size-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, rocket.name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, rocket.description), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }), rocket.id == "falcon9" || rocket.id == "falconheavy" ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 35
    }
  }, __jsx("button", {
    "class": "button is-dark",
    style: {
      margin: "5px 5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 37
    }
  }, "Histories"), __jsx("button", {
    "class": "button is-dark",
    style: {
      margin: "5px 5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }, "Launch Manifest"), __jsx("button", {
    "class": "button is-dark",
    style: {
      margin: "5px 5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 37
    }
  }, "Pricing")) : rocket.id == "starship" ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }, __jsx("button", {
    "class": "button is-dark",
    style: {
      margin: "5px 5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }, "Launch Manifest")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }, __jsx("button", {
    "class": "button is-dark",
    style: {
      margin: "5px 5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, "Histories"), __jsx("button", {
    "class": "button is-dark",
    style: {
      margin: "5px 5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 41
    }
  }, "Launch Manifest")))), __jsx("section", {
    "class": "section has-text-black has-background-white-bis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 25
    }
  }, __jsx("h1", {
    "class": "title is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 29
    }
  }, "Technical Overview"), __jsx("div", {
    "class": "columns is-multiline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 33
    }
  }, __jsx("div", {
    "class": "notification has-background-white-bis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, __jsx("h1", {
    "class": "title is-size-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 41
    }
  }, "Height"), __jsx("article", {
    "class": "level",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 41
    }
  }, __jsx("figure", {
    "class": "level-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 45
    }
  }, __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 49
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 69
    }
  }, changeNum(rocket.height.meters), " m"))), __jsx("div", {
    "class": "level-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 45
    }
  }, __jsx("div", {
    "class": "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 49
    }
  }, __jsx("p", {
    "class": "subtitle ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 53
    }
  }, changeNum(rocket.height.feet), " ft")))))), __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }, __jsx("div", {
    "class": "notification has-background-white-bis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 37
    }
  }, __jsx("h1", {
    "class": "title is-size-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 41
    }
  }, "Mass"), __jsx("article", {
    "class": "level",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 41
    }
  }, __jsx("figure", {
    "class": "level-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 45
    }
  }, __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 49
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 69
    }
  }, changeNum(rocket.mass.kg), " kg"))), __jsx("div", {
    "class": "level-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 45
    }
  }, __jsx("div", {
    "class": "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 49
    }
  }, __jsx("p", {
    "class": "subtitle ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 53
    }
  }, changeNum(rocket.mass.lb), " lb")))))), __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 33
    }
  }, __jsx("div", {
    "class": "notification has-background-white-bis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 37
    }
  }, __jsx("h1", {
    "class": "title is-size-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 41
    }
  }, "Diameter"), __jsx("article", {
    "class": "level",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }, __jsx("figure", {
    "class": "level-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 45
    }
  }, __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 49
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 69
    }
  }, changeNum(rocket.diameter.meters), " m"))), __jsx("div", {
    "class": "level-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 45
    }
  }, __jsx("div", {
    "class": "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 49
    }
  }, __jsx("p", {
    "class": "subtitle ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 53
    }
  }, changeNum(rocket.diameter.feet), " ft")))))), __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 33
    }
  }, __jsx("div", {
    "class": "notification has-background-white-bis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 37
    }
  }, __jsx("h1", {
    "class": "title is-size-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 41
    }
  }, "Stages"), __jsx("article", {
    "class": "level",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 41
    }
  }, __jsx("figure", {
    "class": "level-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 45
    }
  }, __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 49
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 69
    }
  }, rocket.stages)))))))), "`"), __jsx("section", {
    "class": "section has-background-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }, __jsx("h1", {
    "class": "title is-size-2 has-text-white-bis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 29
    }
  }, "Payloads"), __jsx("div", {
    "class": "columns is-multiline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 29
    }
  }, rocket.payload_weights.map(function (payload) {
    return __jsx("div", {
      "class": "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 37
      }
    }, __jsx("div", {
      "class": "notification has-background-black has-text-grey-lighter",
      style: {
        height: '180px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 41
      }
    }, __jsx("h1", {
      "class": "title is-size-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 45
      }
    }, payload.name), __jsx("article", {
      "class": "level",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 45
      }
    }, __jsx("figure", {
      "class": "level-left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 49
      }
    }, __jsx("p", {
      "class": "subtitle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 53
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 73
      }
    }, changeNum(payload.kg), " kg"))), __jsx("div", {
      "class": "level-right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 49
      }
    }, __jsx("div", {
      "class": "content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 53
      }
    }, __jsx("p", {
      "class": "subtitle ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 57
      }
    }, changeNum(payload.lb), " lb"))))));
  })))), __jsx("section", {
    "class": "section has-text-black has-background-white-bis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 25
    }
  }, __jsx("div", {
    "class": "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 29
    }
  }, __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 33
    }
  }, __jsx("h1", {
    "class": "title is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 37
    }
  }, "First Stage"), __jsx("div", {
    "class": "notification",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 37
    }
  }, __jsx("div", {
    "class": "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 41
    }
  }, rocket.id == "starship" ? __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 51
    }
  }, __jsx("h1", {
    "class": "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 53
    }
  }, "Burn Time"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 53
    }
  }, " - ")) : __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 51
    }
  }, __jsx("h1", {
    "class": "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 53
    }
  }, "Burn Time"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 53
    }
  }, changeNum(rocket.first_stage.burn_time_sec), " sec")), __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 45
    }
  }, __jsx("h1", {
    "class": "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 49
    }
  }, "Engines"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 49
    }
  }, rocket.first_stage.engines))), __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 41
    }
  }, __jsx("h1", {
    "class": "title is-size-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 45
    }
  }, "Thrust In Vacuum"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 45
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 65
    }
  }, changeNum(rocket.first_stage.thrust_vacuum.kN), " kN"), "\xA0\xA0\xA0", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 141
    }
  }, changeNum(rocket.first_stage.thrust_vacuum.lbf), " lbf"))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 41
    }
  }), __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 41
    }
  }, __jsx("h1", {
    "class": "title is-size-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 45
    }
  }, "Thrust At Sea Level"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 45
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 65
    }
  }, changeNum(rocket.first_stage.thrust_sea_level.kN), " kN"), "\xA0\xA0\xA0", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 144
    }
  }, changeNum(rocket.first_stage.thrust_sea_level.lbf), " lbf"))))), __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 33
    }
  }, __jsx("h1", {
    "class": "title is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 37
    }
  }, "Second Stage"), __jsx("div", {
    "class": "notification",
    style: {
      height: '280px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 37
    }
  }, __jsx("div", {
    "class": "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }, rocket.id == "starship" ? __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 51
    }
  }, __jsx("h1", {
    "class": "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 53
    }
  }, "Burn Time"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 53
    }
  }, " - ")) : __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 51
    }
  }, __jsx("h1", {
    "class": "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 53
    }
  }, "Burn Time"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 53
    }
  }, changeNum(rocket.second_stage.burn_time_sec), " sec")), __jsx("div", {
    "class": "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 45
    }
  }, __jsx("h1", {
    "class": "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 49
    }
  }, "Engines"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 49
    }
  }, rocket.second_stage.engines))), __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 41
    }
  }, __jsx("h1", {
    "class": "title is-size-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 45
    }
  }, "Thrust"), __jsx("p", {
    "class": "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 45
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 65
    }
  }, changeNum(rocket.second_stage.thrust.kN), " Kn"), "\xA0\xA0\xA0", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 135
    }
  }, changeNum(rocket.second_stage.thrust.lbf), " lbf"))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Rocket);

/***/ })

})
//# sourceMappingURL=[id].js.d9a5d48dc870584865c9.hot-update.js.map