'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Hr = exports.Blockquote = exports.P = void 0
var react_1 = __importDefault(require('react'))
var classnames_1 = __importDefault(require('classnames'))
var P = function (_a) {
  var _b = _a.className,
    className = _b === void 0 ? undefined : _b,
    p = __rest(_a, ['className'])
  return react_1['default'].createElement(
    'p',
    __assign({ className: 'static-tweet-p' }, p)
  )
}
exports.P = P
var Blockquote = function (_a) {
  var _b = _a.className,
    className = _b === void 0 ? undefined : _b,
    p = __rest(_a, ['className'])
  return react_1['default'].createElement(
    'blockquote',
    __assign(
      {
        className: classnames_1['default'](
          'static-tweet-blockquote',
          className
        ),
      },
      p
    )
  )
}
exports.Blockquote = Blockquote
var Hr = function (_a) {
  var _b = _a.className,
    className = _b === void 0 ? undefined : _b,
    p = __rest(_a, ['className'])
  return react_1['default'].createElement(
    'hr',
    __assign(
      { className: classnames_1['default']('static-tweet-hr', className) },
      p
    )
  )
}
exports.Hr = Hr
//# sourceMappingURL=text.js.map
