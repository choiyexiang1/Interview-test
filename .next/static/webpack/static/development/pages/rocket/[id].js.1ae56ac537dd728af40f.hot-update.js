webpackHotUpdate("static\\development\\pages\\rocket\\[id].js",{

/***/ "./pages/rocket/[id].js":
/*!******************************!*\
  !*** ./pages/rocket/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./pages/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ethan\\Desktop\\SpaceX_Test\\pages\\rocket\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Rocket = function Rocket() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id; // const [id] = useState(router.query.id)

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // const queryString = "query GET_ROCKET {rocket(id: \""+id+"\") {name}}"
    console.log(id); // client
    //     .query({
    //         query: gql`${queryString}`
    //     })
    //     .then(result => console.log(result));
    // client
    //     .query({
    //         query: gql`
    //             query GET_ROCKET {
    //                 rocket(id: "falcon1") {
    //                   name
    //                 }
    //               }
    //         `
    //     })
    //     .then(result => console.log(result));
  }, []); // const { data, loading, error } = useQuery(GET_ROCKET);
  // if (loading) return <p>loading</p>;
  // if (error) return <p>SOMETHING ERROR</p>;
  // if (!data) return <p>Not found</p>;
  // console.log(data);

  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 12
    }
  }, "Rocket: ", id);
};

/* harmony default export */ __webpack_exports__["default"] = (Rocket);

/***/ })

})
//# sourceMappingURL=[id].js.1ae56ac537dd728af40f.hot-update.js.map