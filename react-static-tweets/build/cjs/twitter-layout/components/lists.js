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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Li = exports.Ol = exports.Ul = void 0
var react_1 = __importDefault(require('react'))
var Ul = function (p) {
  return react_1['default'].createElement('ul', __assign({}, p))
}
exports.Ul = Ul
var Ol = function (p) {
  return react_1['default'].createElement('ol', __assign({}, p))
}
exports.Ol = Ol
var Li = function (p) {
  return react_1['default'].createElement('li', __assign({}, p))
}
exports.Li = Li
//# sourceMappingURL=lists.js.map
