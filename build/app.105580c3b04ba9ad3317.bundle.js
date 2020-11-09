(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2YZa":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__("q1tI");\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./node_modules/react-dom/index.js\nvar react_dom = __webpack_require__("i8i4");\nvar react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);\n\n// EXTERNAL MODULE: ./node_modules/redux/es/redux.js\nvar redux = __webpack_require__("ANjH");\n\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules\nvar es = __webpack_require__("/MKj");\n\n// CONCATENATED MODULE: ./src/reducers/app.ts\nvar countReducer = function countReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case "INCREMENT":\n      return state + 1;\n\n    case "DECREMENT":\n      return state - 1;\n\n    default:\n      return state;\n  }\n};\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js\nvar Grid = __webpack_require__("tRbT");\n\n// EXTERNAL MODULE: ./node_modules/lodash/lodash.js\nvar lodash = __webpack_require__("LvDl");\n\n// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js\nvar react_router = __webpack_require__("Ty5D");\n\n// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js\nvar react_router_dom = __webpack_require__("55Ip");\n\n// CONCATENATED MODULE: ./src/components/Header.tsx\n\n\n\n\nvar linkConfig = [// {\n  //   pathname: \'/\',\n  //   title: \'Project\'\n  // },\n  // {\n  //   pathname: \'/about\',\n  //   title: \'About\'\n  // }\n];\n\nvar Header_Header = function Header(props) {\n  var location = Object(react_router["d" /* useLocation */])();\n  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    container: true,\n    direction: "row",\n    spacing: 1\n  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    container: true,\n    direction: "row",\n    justify: "flex-start",\n    alignItems: "center",\n    xs: 6,\n    sm: 9\n  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    className: "logo"\n  }, "LUCY XIAO")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    container: true,\n    direction: "row",\n    justify: "flex-end",\n    alignItems: "center",\n    xs: 6,\n    sm: 3,\n    spacing: 1\n  }, Object(lodash["map"])(linkConfig, function (config) {\n    var className = config.pathname === location.pathname ? "header-item-active" : "header-item";\n    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n      key: config.title,\n      item: true,\n      className: className\n    }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {\n      to: config.pathname\n    }, config.title));\n  })));\n};\n\n/* harmony default export */ var components_Header = (Header_Header);\n// CONCATENATED MODULE: ./src/components/Footer.tsx\n\n\n\nvar Footer_Footer = function Footer(props) {\n  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    container: true,\n    direction: "row",\n    spacing: 1\n  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    container: true,\n    direction: "row",\n    justify: "flex-start",\n    alignItems: "center",\n    xs: 6,\n    sm: 6\n  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    className: "logo"\n  }, "Contact Me")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    container: true,\n    direction: "row",\n    justify: "flex-end",\n    alignItems: "center",\n    xs: 6,\n    sm: 6,\n    spacing: 1\n  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    className: "header-item"\n  }, /*#__PURE__*/react_default.a.createElement("a", {\n    href: "https://www.linkedin.com/in/lucygxiao/",\n    target: "__blank"\n  }, "LinkedIn")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    className: "header-item"\n  }, /*#__PURE__*/react_default.a.createElement("a", {\n    href: "mailto:lucy77xiao@gmail.com",\n    target: "__blank"\n  }, "Email")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    className: "header-item"\n  }, /*#__PURE__*/react_default.a.createElement("a", {\n    href: "https://drive.google.com/file/d/1vwz_8pJcedqN1gmEbfXKv2FOkoWiVenw/preview",\n    target: "__blank"\n  }, "Resume"))));\n};\n\n/* harmony default export */ var components_Footer = (Footer_Footer);\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js\nvar Paper = __webpack_require__("kKAo");\n\n// CONCATENATED MODULE: ./src/components/Section.tsx\n\n\n\n\nvar Section_Section = function Section(props) {\n  var title = props.title || \'\';\n  var description = props.description || \'\';\n  return /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {\n    className: "section",\n    elevation: 0\n  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    container: true\n  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    className: "section-left",\n    item: true,\n    container: true,\n    direction: "column",\n    xs: 12\n  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    className: "section-title"\n  }, title), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    className: "section-description"\n  }, description))));\n};\n\n/* harmony default export */ var components_Section = (Section_Section);\n// CONCATENATED MODULE: ./src/LayoutConfig.tsx\nvar sectionConfig = [{\n  key: \'Amazon FC MEC\',\n  title: \'Amazon Fulfillment Center Financials\',\n  description: \'I delivered end-to-end a new internal tool for Amazon Fulfilment center financial analysts to review and submit financial transactions for FCs for Month End Close. I designed, implemented the new tool which utilizes AWS Lambda, AWS Step Functions, and React/Typescript for the frontend. The service integrates with internal validation teams to check data validation for users to correct if submitting faulty data.\'\n}, {\n  key: \'Personal Portfolio\',\n  title: \'Personal Portfolio Website\',\n  description: \'I created my own portfolio website from scratch, starting with designing and mocking up the website using mobile-first approach, to coding the website from ground up using Material Design.\'\n}];\n// EXTERNAL MODULE: ./node_modules/react-masonry-css/dist/react-masonry-css.es5.js\nvar react_masonry_css_es5 = __webpack_require__("61uB");\nvar react_masonry_css_es5_default = /*#__PURE__*/__webpack_require__.n(react_masonry_css_es5);\n\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js\nvar makeStyles = __webpack_require__("R/WZ");\n\n// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js\nvar useTheme = __webpack_require__("tr08");\n\n// CONCATENATED MODULE: ./src/pages/Projects.tsx\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar Projects_Projects = function Projects(props) {\n  var _breakpointCols;\n\n  // from https://github.com/mui-org/material-ui/issues/17000\n  var useStyles = Object(makeStyles["a" /* default */])(function (theme) {\n    return {\n      root: {\n        margin: theme.spacing(1, 0, 1, 0)\n      },\n      paper: {\n        marginBottom: theme.spacing(1)\n      },\n      masonryGrid: {\n        display: "flex",\n        marginLeft: theme.spacing(-4),\n        width: "inherit"\n      },\n      masonryColumn: {\n        paddingLeft: theme.spacing(4),\n        backgroundClip: "padding-box"\n      }\n    };\n  });\n  var classes = useStyles();\n  var theme = Object(useTheme["a" /* default */])();\n  var breakpointCols = (_breakpointCols = {\n    "default": 2\n  }, _defineProperty(_breakpointCols, theme.breakpoints.values.xl, 2), _defineProperty(_breakpointCols, theme.breakpoints.values.lg, 2), _defineProperty(_breakpointCols, theme.breakpoints.values.md, 2), _defineProperty(_breakpointCols, theme.breakpoints.values.sm, 1), _defineProperty(_breakpointCols, theme.breakpoints.values.xs, 1), _breakpointCols);\n  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n    item: true,\n    className: "body-description"\n  }, "I am a full-stack developer who has heavy interest in UI/UX design. I am passionate about delivering the best customer experience by discovering user pain points and creating solutions for them."), /*#__PURE__*/react_default.a.createElement(react_masonry_css_es5_default.a, {\n    breakpointCols: breakpointCols,\n    className: classes.masonryGrid,\n    columnClassName: classes.masonryColumn\n  }, Object(lodash["map"])(sectionConfig, function (config) {\n    return /*#__PURE__*/react_default.a.createElement(components_Section, config);\n  })));\n};\n\n/* harmony default export */ var pages_Projects = (Projects_Projects);\n// CONCATENATED MODULE: ./src/Layout.tsx\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Layout_Layout = /*#__PURE__*/function (_Component) {\n  _inherits(Layout, _Component);\n\n  var _super = _createSuper(Layout);\n\n  function Layout() {\n    _classCallCheck(this, Layout);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Layout, [{\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n        container: true\n      }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n        container: true,\n        className: "header",\n        direction: "row",\n        justify: "center"\n      }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n        item: true,\n        container: true,\n        xs: 9\n      }, /*#__PURE__*/react_default.a.createElement(components_Header, null))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n        container: true,\n        className: "body",\n        direction: "row",\n        justify: "center"\n      }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n        item: true,\n        container: true,\n        xs: 9\n      }, /*#__PURE__*/react_default.a.createElement(pages_Projects, null)), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n        container: true,\n        className: "footer",\n        direction: "row",\n        justify: "center",\n        alignItems: "flex-end"\n      }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {\n        item: true,\n        container: true,\n        xs: 9\n      }, /*#__PURE__*/react_default.a.createElement(components_Footer, null)))));\n    }\n  }]);\n\n  return Layout;\n}(react["Component"]);\n\n/* harmony default export */ var src_Layout = (Layout_Layout);\n// EXTERNAL MODULE: ./src/style.scss\nvar style = __webpack_require__("lE3a");\n\n// CONCATENATED MODULE: ./src/index.tsx\n\n\n\n\n\n\n\n\nvar store = Object(redux["b" /* createStore */])(countReducer);\n\nvar src_App = function App() {\n  return /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {\n    store: store\n  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, /*#__PURE__*/react_default.a.createElement(src_Layout, null)));\n};\n\nreact_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.querySelector(\'#app\'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMllaYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hcHAudHM/ZTNmMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4PzhlYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeD82ZjZhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24udHN4PzllYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dENvbmZpZy50c3g/N2Y1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUHJvamVjdHMudHN4Pzc2YjciLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC50c3g/MzZjOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4P2Q5ODYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvdW50UmVkdWNlciA9IGZ1bmN0aW9uIChzdGF0ZSA9IDAsIGFjdGlvbjogYW55KSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcIklOQ1JFTUVOVFwiOlxuICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgICAgY2FzZSBcIkRFQ1JFTUVOVFwiOlxuICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIExpbmssXG4gIHVzZUxvY2F0aW9uLFxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBsaW5rQ29uZmlnID0gW1xuICAvLyB7XG4gIC8vICAgcGF0aG5hbWU6ICcvJyxcbiAgLy8gICB0aXRsZTogJ1Byb2plY3QnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBwYXRobmFtZTogJy9hYm91dCcsXG4gIC8vICAgdGl0bGU6ICdBYm91dCdcbiAgLy8gfVxuXVxuXG5cbmNvbnN0IEhlYWRlciA9IChwcm9wczogYW55KSA9PiB7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIHJldHVybiAoXG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0+XG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXs2fSBzbT17OX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9XCJsb2dvXCI+TFVDWSBYSUFPPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIFxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezZ9IHNtPXszfSBzcGFjaW5nPXsxfT5cbiAgICAgICAgICB7bWFwKGxpbmtDb25maWcsIGNvbmZpZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjb25maWcucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gXCJoZWFkZXItaXRlbS1hY3RpdmVcIiA6IFwiaGVhZGVyLWl0ZW1cIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxHcmlkIGtleT17Y29uZmlnLnRpdGxlfSBpdGVtIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Y29uZmlnLnBhdGhuYW1lfT57Y29uZmlnLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgRm9vdGVyID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfT5cbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezZ9IHNtPXs2fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT1cImxvZ29cIj5Db250YWN0IE1lPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJmbGV4LWVuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17Nn0gc209ezZ9IHNwYWNpbmc9ezF9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPVwiaGVhZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbHVjeWd4aWFvL1wiIHRhcmdldD1cIl9fYmxhbmtcIj5MaW5rZWRJbjwvYT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9XCJoZWFkZXItaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpsdWN5Nzd4aWFvQGdtYWlsLmNvbVwiIHRhcmdldD1cIl9fYmxhbmtcIj5FbWFpbDwvYT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9XCJoZWFkZXItaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZ3el84cEpjZWRxTjFnbUViZlhLdjJGT2tvV2lWZW53L3ByZXZpZXdcIiB0YXJnZXQ9XCJfX2JsYW5rXCI+UmVzdW1lPC9hPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5jb25zdCBTZWN0aW9uID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBwcm9wcy50aXRsZSB8fCAnJztcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbiB8fCAnJztcblxuICByZXR1cm4gKFxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT1cInNlY3Rpb25cIiBlbGV2YXRpb249ezB9ID5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9XCJzZWN0aW9uLWxlZnRcIiBpdGVtIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiB4cz17MTJ9ID5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPVwic2VjdGlvbi1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICB7LyogPEdyaWQgaXRlbSBjbGFzc05hbWU9XCJzZWN0aW9uLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCI+TW9yZSBJbmZvPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICB7LyogPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgeHM9ezZ9ID5cbiAgICAgICAgICAgICAgUmlnaHRcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgPC9QYXBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247IiwiZXhwb3J0IGNvbnN0IHNlY3Rpb25Db25maWcgPSBbXG4gIHtcbiAgICBrZXk6ICdBbWF6b24gRkMgTUVDJyxcbiAgICB0aXRsZTogJ0FtYXpvbiBGdWxmaWxsbWVudCBDZW50ZXIgRmluYW5jaWFscycsXG4gICAgZGVzY3JpcHRpb246ICdJIGRlbGl2ZXJlZCBlbmQtdG8tZW5kIGEgbmV3IGludGVybmFsIHRvb2wgZm9yIEFtYXpvbiBGdWxmaWxtZW50IGNlbnRlciBmaW5hbmNpYWwgYW5hbHlzdHMgdG8gcmV2aWV3IGFuZCBzdWJtaXQgZmluYW5jaWFsIHRyYW5zYWN0aW9ucyBmb3IgRkNzIGZvciBNb250aCBFbmQgQ2xvc2UuIEkgZGVzaWduZWQsIGltcGxlbWVudGVkIHRoZSBuZXcgdG9vbCB3aGljaCB1dGlsaXplcyBBV1MgTGFtYmRhLCBBV1MgU3RlcCBGdW5jdGlvbnMsIGFuZCBSZWFjdC9UeXBlc2NyaXB0IGZvciB0aGUgZnJvbnRlbmQuIFRoZSBzZXJ2aWNlIGludGVncmF0ZXMgd2l0aCBpbnRlcm5hbCB2YWxpZGF0aW9uIHRlYW1zIHRvIGNoZWNrIGRhdGEgdmFsaWRhdGlvbiBmb3IgdXNlcnMgdG8gY29ycmVjdCBpZiBzdWJtaXR0aW5nIGZhdWx0eSBkYXRhLidcbiAgfSxcbiAge1xuICAgIGtleTogJ1BlcnNvbmFsIFBvcnRmb2xpbycsXG4gICAgdGl0bGU6ICdQZXJzb25hbCBQb3J0Zm9saW8gV2Vic2l0ZScsXG4gICAgZGVzY3JpcHRpb246ICdJIGNyZWF0ZWQgbXkgb3duIHBvcnRmb2xpbyB3ZWJzaXRlIGZyb20gc2NyYXRjaCwgc3RhcnRpbmcgd2l0aCBkZXNpZ25pbmcgYW5kIG1vY2tpbmcgdXAgdGhlIHdlYnNpdGUgdXNpbmcgbW9iaWxlLWZpcnN0IGFwcHJvYWNoLCB0byBjb2RpbmcgdGhlIHdlYnNpdGUgZnJvbSBncm91bmQgdXAgdXNpbmcgTWF0ZXJpYWwgRGVzaWduLidcbiAgfVxuXSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24nO1xuaW1wb3J0IHsgc2VjdGlvbkNvbmZpZyB9IGZyb20gJy4uL0xheW91dENvbmZpZyc7XG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNzcydcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCBQcm9qZWN0cyA9IChwcm9wczogYW55KSA9PiB7XG4gIC8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvaXNzdWVzLzE3MDAwXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAwLCAxLCAwKSxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgICBtYXNvbnJ5R3JpZDoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKC00KSxcbiAgICAgIHdpZHRoOiBcImluaGVyaXRcIixcbiAgICB9LFxuICAgIG1hc29ucnlDb2x1bW46IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICB9LFxuICB9KSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgYnJlYWtwb2ludENvbHMgPSB7XG4gICAgZGVmYXVsdDogMixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsXTogMixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLmxnXTogMixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLm1kXTogMixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnNtXTogMSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhzXTogMSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9XCJib2R5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIEkgYW0gYSBmdWxsLXN0YWNrIGRldmVsb3BlciB3aG8gaGFzIGhlYXZ5IGludGVyZXN0IGluIFVJL1VYIGRlc2lnbi4gSSBhbSBwYXNzaW9uYXRlIGFib3V0IGRlbGl2ZXJpbmcgdGhlIGJlc3QgY3VzdG9tZXIgZXhwZXJpZW5jZSBieSBkaXNjb3ZlcmluZyB1c2VyIHBhaW4gcG9pbnRzIGFuZCBjcmVhdGluZyBzb2x1dGlvbnMgZm9yIHRoZW0uXG4gICAgICA8L0dyaWQ+XG4gICAgICA8TWFzb25yeVxuICAgICAgICBicmVha3BvaW50Q29scz17YnJlYWtwb2ludENvbHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXNvbnJ5R3JpZH1cbiAgICAgICAgY29sdW1uQ2xhc3NOYW1lPXtjbGFzc2VzLm1hc29ucnlDb2x1bW59XG4gICAgICA+XG4gICAgICAgIHttYXAoc2VjdGlvbkNvbmZpZywgY29uZmlnID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gey4uLmNvbmZpZ30gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L01hc29ucnk+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcGFnZXMvUHJvamVjdHMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnO1xuLy8gaW1wb3J0IHtcbi8vICAgU3dpdGNoLFxuLy8gICBSb3V0ZVxuLy8gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtcbiAgU3dpdGNoLFxuICBSb3V0ZVxufSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9XCJoZWFkZXJcIiBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXs5fSA+XG4gICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9XCJib2R5XCIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17OX0+XG4gICAgICAgICAgICB7LyogPFN3aXRjaD4gKi99XG4gICAgICAgICAgICAgIHsvKiA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e1Byb2plY3RzfSAvPiAqL31cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz4gKi99XG4gICAgICAgICAgICB7LyogPC9Td2l0Y2g+ICovfVxuICAgICAgICAgICAgPFByb2plY3RzIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT1cImZvb3RlclwiIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17OX0gPlxuICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxufVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGNvdW50UmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzL2FwcFwiO1xuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgU3dpdGNoLFxuICBSb3V0ZSxcbiAgTGlua1xufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50UmVkdWNlcik7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlcj5cbiAgICAgIDxMYXlvdXQvPlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuICApO1xufTtcbiAgXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBSUE7QUFDQTtBQUNBOztBQzFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFDQTs7QUMvQkE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFaQTtBQUFBO0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7O0FBMUJBO0FBQ0E7QUEyQkE7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2YZa\n')},h2xr:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JPst");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, "*{font-family:\\"Jost\\",sans-serif}body{background-color:#f5f5f5;margin:0}.logo{font-size:2rem}.header,.footer{background-color:#2e2c2f;color:#f5f5f5;padding:10px}.header a,.footer a{text-decoration:none;cursor:pointer;color:#f5f5f5}.body-description{padding-top:2.5rem;padding-bottom:2.5rem;text-align:justify}.resume{width:600px;height:500px}.section{padding:2rem;margin-bottom:20px}.section .section-left{padding:2rem}.section .section-title{font-size:1.5rem;margin-bottom:1.5rem}.section .section-description{font-size:1rem;margin-bottom:1rem}", "",{"version":3,"sources":["/Users/lucyxiao/webdesign/lucy-xiao.github.io/src/style.scss"],"names":[],"mappings":"AAYA,EACE,6BAAA,CAGF,KACE,wBAfY,CAgBZ,QAAA,CAIF,MACE,cAAA,CAGF,gBACE,wBAtBU,CAuBV,aA1BY,CA2BZ,YAAA,CACA,oBACE,oBAAA,CACA,cAAA,CACA,aA/BU,CAmCd,kBACE,kBAAA,CACA,qBAAA,CACA,kBAAA,CAGF,QACE,WAAA,CACA,YAAA,CAGF,SAEE,YAAA,CAEA,kBAAA,CACA,uBACE,YAAA,CAEF,wBACE,gBAAA,CACA,oBAAA,CAGF,8BACE,cAAA,CACA,kBAAA","file":"style.scss","sourcesContent":["$body-color: blue;\\n\\n$light-white: #F5F5F5;\\n$light-gray: #CCCCCC;\\n$mid-gray: #7D7C7E;\\n$dark-gray: #2E2C2F;\\n$dark-black: #151415;\\n$orange: #FC7753;\\n$green: #729B79;\\n$blue: #44A0D3;\\n$red: #A71D31;\\n\\n* {\\n  font-family: \'Jost\', sans-serif;\\n}\\n\\nbody {\\n  background-color: $light-white;\\n  margin: 0;\\n\\n}\\n\\n.logo {\\n  font-size: 2rem;\\n}\\n\\n.header, .footer {\\n  background-color: $dark-gray;\\n  color: $light-white;\\n  padding: 10px;\\n  a {\\n    text-decoration: none;\\n    cursor: pointer;\\n    color: $light-white;\\n  }\\n}\\n\\n.body-description {\\n  padding-top: 2.5rem;\\n  padding-bottom: 2.5rem;\\n  text-align: justify;\\n}\\n\\n.resume {\\n  width:600px; \\n  height:500px\\n}\\n\\n.section {\\n  // margin: \'auto\';\\n  padding: 2rem;\\n  // width: 33%;\\n  margin-bottom: 20px;\\n  .section-left {\\n    padding: 2rem;\\n  }\\n  .section-title {\\n    font-size: 1.5rem;\\n    margin-bottom: 1.5rem;\\n  }\\n  \\n  .section-description {\\n    font-size: 1rem;\\n    margin-bottom: 1rem;\\n  }\\n}\\n"]}]);\n// Exports\n/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaDJ4ci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzg3NmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntmb250LWZhbWlseTpcXFwiSm9zdFxcXCIsc2Fucy1zZXJpZn1ib2R5e2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTttYXJnaW46MH0ubG9nb3tmb250LXNpemU6MnJlbX0uaGVhZGVyLC5mb290ZXJ7YmFja2dyb3VuZC1jb2xvcjojMmUyYzJmO2NvbG9yOiNmNWY1ZjU7cGFkZGluZzoxMHB4fS5oZWFkZXIgYSwuZm9vdGVyIGF7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6I2Y1ZjVmNX0uYm9keS1kZXNjcmlwdGlvbntwYWRkaW5nLXRvcDoyLjVyZW07cGFkZGluZy1ib3R0b206Mi41cmVtO3RleHQtYWxpZ246anVzdGlmeX0ucmVzdW1le3dpZHRoOjYwMHB4O2hlaWdodDo1MDBweH0uc2VjdGlvbntwYWRkaW5nOjJyZW07bWFyZ2luLWJvdHRvbToyMHB4fS5zZWN0aW9uIC5zZWN0aW9uLWxlZnR7cGFkZGluZzoycmVtfS5zZWN0aW9uIC5zZWN0aW9uLXRpdGxle2ZvbnQtc2l6ZToxLjVyZW07bWFyZ2luLWJvdHRvbToxLjVyZW19LnNlY3Rpb24gLnNlY3Rpb24tZGVzY3JpcHRpb257Zm9udC1zaXplOjFyZW07bWFyZ2luLWJvdHRvbToxcmVtfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9sdWN5eGlhby93ZWJkZXNpZ24vbHVjeS14aWFvLmdpdGh1Yi5pby9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFZQSxFQUNFLDZCQUFBLENBR0YsS0FDRSx3QkFmWSxDQWdCWixRQUFBLENBSUYsTUFDRSxjQUFBLENBR0YsZ0JBQ0Usd0JBdEJVLENBdUJWLGFBMUJZLENBMkJaLFlBQUEsQ0FDQSxvQkFDRSxvQkFBQSxDQUNBLGNBQUEsQ0FDQSxhQS9CVSxDQW1DZCxrQkFDRSxrQkFBQSxDQUNBLHFCQUFBLENBQ0Esa0JBQUEsQ0FHRixRQUNFLFdBQUEsQ0FDQSxZQUFBLENBR0YsU0FFRSxZQUFBLENBRUEsa0JBQUEsQ0FDQSx1QkFDRSxZQUFBLENBRUYsd0JBQ0UsZ0JBQUEsQ0FDQSxvQkFBQSxDQUdGLDhCQUNFLGNBQUEsQ0FDQSxrQkFBQVwiLFwiZmlsZVwiOlwic3R5bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9keS1jb2xvcjogYmx1ZTtcXG5cXG4kbGlnaHQtd2hpdGU6ICNGNUY1RjU7XFxuJGxpZ2h0LWdyYXk6ICNDQ0NDQ0M7XFxuJG1pZC1ncmF5OiAjN0Q3QzdFO1xcbiRkYXJrLWdyYXk6ICMyRTJDMkY7XFxuJGRhcmstYmxhY2s6ICMxNTE0MTU7XFxuJG9yYW5nZTogI0ZDNzc1MztcXG4kZ3JlZW46ICM3MjlCNzk7XFxuJGJsdWU6ICM0NEEwRDM7XFxuJHJlZDogI0E3MUQzMTtcXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JheTtcXG4gIGNvbG9yOiAkbGlnaHQtd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogJGxpZ2h0LXdoaXRlO1xcbiAgfVxcbn1cXG5cXG4uYm9keS1kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5yZXN1bWUge1xcbiAgd2lkdGg6NjAwcHg7IFxcbiAgaGVpZ2h0OjUwMHB4XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIC8vIG1hcmdpbjogJ2F1dG8nO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIC8vIHdpZHRoOiAzMyU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgLnNlY3Rpb24tbGVmdCB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxuICAuc2VjdGlvbi10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICB9XFxuICBcXG4gIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///h2xr\n')},lE3a:function(module,exports,__webpack_require__){eval('var api = __webpack_require__("LboF");\n            var content = __webpack_require__("h2xr");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.i, content, \'\']];\n            }\n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibEUzYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lE3a\n')}},[["2YZa",1,2]]]);