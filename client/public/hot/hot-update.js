webpackHotUpdate(0,{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactMaterialize = __webpack_require__(13);\n\nvar _reactRedux = __webpack_require__(12);\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _shortid = __webpack_require__(152);\n\nvar _shortid2 = _interopRequireDefault(_shortid);\n\nvar _reactRouterDom = __webpack_require__(24);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n *\n */\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  /**\n   *\n   * @param {*} props\n   */\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));\n\n    _this.state = {\n      user: undefined,\n      navs: []\n    };\n    return _this;\n  }\n\n  /**\n   *@returns{*} authentication status\n   */\n\n\n  _createClass(Header, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {}\n\n    /**\n     * @param {*} nextProps\n     * @returns {*} check props change\n     */\n\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {}\n\n    /**\n     *@returns {*}\n     *this will produce appropriate navabar menu for role\n     */\n\n  }, {\n    key: 'renderByRole',\n    value: function renderByRole() {\n      var user = this.state.user;\n\n      var userName = void 0;\n      if (user) {\n        userName = '';\n      } else {\n        userName = user.username;\n      }\n      var items = void 0;\n      var linkByRoles = {\n        unAuthUser: [{\n          linkName: 'SignIn',\n          linkRef: '/SignIn'\n        }, {\n          linkName: 'SignUp',\n          linkRef: '/SignUp'\n        }],\n        user: [{\n          linkName: userName,\n          linkRef: ''\n        }, {\n          linkName: 'My Events',\n          linkRef: '/events'\n        }, {\n          linkName: 'Logout',\n          linkRef: '/SignOut'\n        }],\n        admin: [{\n          linkName: 'Admin',\n          linkRef: ''\n        }, {\n          linkName: 'Centers',\n          linkRef: '/Centers'\n        }, {\n          linkName: 'My Events',\n          linkRef: '/events'\n        }, {\n          linkName: 'Pending Events',\n          linkRef: '/pendingEvents'\n        }, {\n          linkName: 'SignOut',\n          linkRef: '/SignOut'\n        }]\n      };\n      if (user && user.isVerified === false && user.isAdmin === false) {\n        items = linkByRoles.user.map(function (item, index) {\n          return _react2.default.createElement(\n            _reactMaterialize.NavItem,\n            { key: _shortid2.default.generate(), href: item.linkRef },\n            item.linkName\n          );\n        });\n      } else if (user && user.isVerified === true && user.isAdmin === true) {\n        items = linkByRoles.admin.map(function (item, index) {\n          return _react2.default.createElement(\n            _reactMaterialize.NavItem,\n            { key: _shortid2.default.generate(), href: item.linkRef },\n            item.linkName\n          );\n        });\n      } else {\n        items = linkByRoles.unAuthUser.map(function (item, index) {\n          return _react2.default.createElement(\n            _reactMaterialize.NavItem,\n            { key: _shortid2.default.generate(), href: item.linkRef },\n            item.linkName\n          );\n        });\n      }\n      this.setState({\n        navs: items\n      });\n    }\n\n    /**\n     *@returns {*} view for langing page\n     */\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var navs = this.state.navs;\n\n      return _react2.default.createElement(\n        'header',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'navbar-fixed' },\n          _react2.default.createElement(\n            'nav',\n            { className: ' z-depth-0 navigation' },\n            _react2.default.createElement(\n              'div',\n              { className: 'nav-wrapper' },\n              _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col s12' },\n                  _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '#side-nav', 'data-activates': 'mobile-demo', className: 'button-collapse hide-on-med-and-up' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'menu'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/', className: 'brand-logo', target: '' },\n                    'EventsManager'\n                  ),\n                  _react2.default.createElement(\n                    'ul',\n                    { className: 'right hide-on-med-and-down' },\n                    _react2.default.createElement(\n                      'li',\n                      null,\n                      _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/login', target: '' },\n                        'Login'\n                      )\n                    ),\n                    _react2.default.createElement(\n                      'li',\n                      null,\n                      _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/register', target: '' },\n                        'Register'\n                      )\n                    )\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                'ul',\n                { className: 'side-nav', id: 'mobile-demo' },\n                _react2.default.createElement(\n                  'li',\n                  null,\n                  _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/login', target: '' },\n                    'Login'\n                  )\n                ),\n                _react2.default.createElement(\n                  'li',\n                  null,\n                  _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/register', target: '' },\n                    'Register'\n                  )\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\n// const mapStateToProps = state => ({ userStateProps: state.userSignIn });\n\nHeader.propTypes = {\n  userStateProps: _propTypes2.default.objectOf(function () {\n    return null;\n  })\n};\n\nHeader.defaultProps = {\n  userStateProps: {}\n};\n\nexports.default = Header;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzeD85ZTlhIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwic3RhdGUiLCJ1c2VyIiwidW5kZWZpbmVkIiwibmF2cyIsIm5leHRQcm9wcyIsInVzZXJOYW1lIiwidXNlcm5hbWUiLCJpdGVtcyIsImxpbmtCeVJvbGVzIiwidW5BdXRoVXNlciIsImxpbmtOYW1lIiwibGlua1JlZiIsImFkbWluIiwiaXNWZXJpZmllZCIsImlzQWRtaW4iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJnZW5lcmF0ZSIsInNldFN0YXRlIiwicHJvcFR5cGVzIiwidXNlclN0YXRlUHJvcHMiLCJvYmplY3RPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBOzs7SUFHTUEsTTs7O0FBQ0o7Ozs7QUFJQSxrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTUMsU0FESztBQUVYQyxZQUFNO0FBRkssS0FBYjtBQUZpQjtBQU1sQjs7QUFFRDs7Ozs7Ozt5Q0FHcUIsQ0FFcEI7O0FBRUQ7Ozs7Ozs7OENBSTBCQyxTLEVBQVcsQ0FFcEM7O0FBR0Q7Ozs7Ozs7bUNBSWU7QUFBQSxVQUNMSCxJQURLLEdBQ0ksS0FBS0QsS0FEVCxDQUNMQyxJQURLOztBQUViLFVBQUlJLGlCQUFKO0FBQ0EsVUFBSUosSUFBSixFQUFVO0FBQ1JJLG1CQUFXLEVBQVg7QUFDRCxPQUZELE1BRU87QUFDTEEsbUJBQVdKLEtBQUtLLFFBQWhCO0FBQ0Q7QUFDRCxVQUFJQyxjQUFKO0FBQ0EsVUFBTUMsY0FBYztBQUNsQkMsb0JBQVksQ0FDVjtBQUNFQyxvQkFBVSxRQURaO0FBRUVDLG1CQUFTO0FBRlgsU0FEVSxFQUtWO0FBQ0VELG9CQUFVLFFB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QUFBO0FBQUo7QUFGRjtBQUhGO0FBREYsZUFERjtBQVdFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLFVBQWQsRUFBeUIsSUFBRyxhQUE1QjtBQUNBO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxzQkFBTSxJQUFHLFFBQVQsRUFBa0IsUUFBTyxFQUF6QjtBQUFBO0FBQUE7QUFBSixpQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxzQkFBTSxJQUFHLFdBQVQsRUFBcUIsUUFBTyxFQUE1QjtBQUFBO0FBQUE7QUFBSjtBQUZBO0FBWEY7QUFERjtBQURGO0FBREYsT0FERjtBQXdCRDs7Ozs7O0FBR0g7O0FBRUFMLE9BQU9zQixTQUFQLEdBQW1CO0FBQ2pCQyxrQkFBZ0Isb0JBQVVDLFFBQVYsQ0FBbUI7QUFBQSxXQUFNLElBQU47QUFBQSxHQUFuQjtBQURDLENBQW5COztBQUlBeEIsT0FBT3lCLFlBQVAsR0FBc0I7QUFDcEJGLGtCQUFnQjtBQURJLENBQXRCOztrQkFLZXZCLE0iLCJmaWxlIjoiMTEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdmJhciwgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cblxuLyoqXG4gKlxuICovXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHsqfSBwcm9wc1xuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6IHVuZGVmaW5lZCxcbiAgICAgIG5hdnM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKkByZXR1cm5zeyp9IGF1dGhlbnRpY2F0aW9uIHN0YXR1c1xuICAgKi9cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsqfSBuZXh0UHJvcHNcbiAgICogQHJldHVybnMgeyp9IGNoZWNrIHByb3BzIGNoYW5nZVxuICAgKi9cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblxuICB9XG5cblxuICAvKipcbiAgICpAcmV0dXJucyB7Kn1cbiAgICp0aGlzIHdpbGwgcHJvZHVjZSBhcHByb3ByaWF0ZSBuYXZhYmFyIG1lbnUgZm9yIHJvbGVcbiAgICovXG4gIHJlbmRlckJ5Um9sZSgpIHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHVzZXJOYW1lO1xuICAgIGlmICh1c2VyKSB7XG4gICAgICB1c2VyTmFtZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyTmFtZSA9IHVzZXIudXNlcm5hbWU7XG4gICAgfVxuICAgIGxldCBpdGVtcztcbiAgICBjb25zdCBsaW5rQnlSb2xlcyA9IHtcbiAgICAgIHVuQXV0aFVzZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpbmtOYW1lOiAnU2lnbkluJyxcbiAgICAgICAgICBsaW5rUmVmOiAnL1NpZ25JbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbmtOYW1lOiAnU2lnblVwJyxcbiAgICAgICAgICBsaW5rUmVmOiAnL1NpZ25VcCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHVzZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpbmtOYW1lOiB1c2VyTmFtZSxcbiAgICAgICAgICBsaW5rUmVmOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGlua05hbWU6ICdNeSBFdmVudHMnLFxuICAgICAgICAgIGxpbmtSZWY6ICcvZXZlbnRzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGlua05hbWU6ICdMb2dvdXQnLFxuICAgICAgICAgIGxpbmtSZWY6ICcvU2lnbk91dCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFkbWluOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rTmFtZTogJ0FkbWluJyxcbiAgICAgICAgICBsaW5rUmVmOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGlua05hbWU6ICdDZW50ZXJzJyxcbiAgICAgICAgICBsaW5rUmVmOiAnL0NlbnRlcnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rTmFtZTogJ015IEV2ZW50cycsXG4gICAgICAgICAgbGlua1JlZjogJy9ldmVudHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rTmFtZTogJ1BlbmRpbmcgRXZlbnRzJyxcbiAgICAgICAgICBsaW5rUmVmOiAnL3BlbmRpbmdFdmVudHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rTmFtZTogJ1NpZ25PdXQnLFxuICAgICAgICAgIGxpbmtSZWY6ICcvU2lnbk91dCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgaWYgKHVzZXIgJiYgdXNlci5pc1ZlcmlmaWVkID09PSBmYWxzZSAmJiB1c2VyLmlzQWRtaW4gPT09IGZhbHNlKSB7XG4gICAgICBpdGVtcyA9IGxpbmtCeVJvbGVzLnVzZXJcbiAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TmF2SXRlbSBrZXk9e3Nob3J0aWQuZ2VuZXJhdGUoKX0gaHJlZj17aXRlbS5saW5rUmVmfT5cbiAgICAgICAgICAgIHtpdGVtLmxpbmtOYW1lfVxuICAgICAgICAgIDwvTmF2SXRlbT4pKTtcbiAgICB9IGVsc2UgaWYgKHVzZXIgJiYgdXNlci5pc1ZlcmlmaWVkID09PSB0cnVlICYmIHVzZXIuaXNBZG1pbiA9PT0gdHJ1ZSkge1xuICAgICAgaXRlbXMgPSBsaW5rQnlSb2xlcy5hZG1pblxuICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxOYXZJdGVtIGtleT17c2hvcnRpZC5nZW5lcmF0ZSgpfSBocmVmPXtpdGVtLmxpbmtSZWZ9PlxuICAgICAgICAgICAge2l0ZW0ubGlua05hbWV9XG4gICAgICAgICAgPC9OYXZJdGVtPikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtcyA9IGxpbmtCeVJvbGVzLnVuQXV0aFVzZXJcbiAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TmF2SXRlbSBrZXk9e3Nob3J0aWQuZ2VuZXJhdGUoKX0gaHJlZj17aXRlbS5saW5rUmVmfT5cbiAgICAgICAgICAgIHtpdGVtLmxpbmtOYW1lfVxuICAgICAgICAgIDwvTmF2SXRlbT4pKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYXZzOiBpdGVtc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqQHJldHVybnMgeyp9IHZpZXcgZm9yIGxhbmdpbmcgcGFnZVxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZml4ZWRcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIiB6LWRlcHRoLTAgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIjc2lkZS1uYXZcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZS1kZW1vXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbGxhcHNlIGhpZGUtb24tbWVkLWFuZC11cFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCIgdGFyZ2V0PVwiXCI+RXZlbnRzTWFuYWdlcjwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIiB0YXJnZXQ9XCJcIj5Mb2dpbjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvcmVnaXN0ZXJcIiB0YXJnZXQ9XCJcIj5SZWdpc3RlcjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2xvZ2luXCIgdGFyZ2V0PVwiXCI+TG9naW48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgdGFyZ2V0PVwiXCI+UmVnaXN0ZXI8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHsgdXNlclN0YXRlUHJvcHM6IHN0YXRlLnVzZXJTaWduSW4gfSk7XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHVzZXJTdGF0ZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0T2YoKCkgPT4gbnVsbClcbn07XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHVzZXJTdGF0ZVByb3BzOiB7fVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///113\n");

/***/ })

})