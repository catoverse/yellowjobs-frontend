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
exports.Td = exports.Th = exports.Table = void 0
var react_1 = __importDefault(require('react'))
var Table = function (p) {
  return react_1['default'].createElement(
    'div',
    { className: 'table-container' },
    react_1['default'].createElement('table', __assign({}, p))
  )
}
exports.Table = Table
var Th = function (p) {
  return react_1['default'].createElement('th', __assign({}, p))
}
exports.Th = Th
var Td = function (p) {
  return react_1['default'].createElement('td', __assign({}, p))
}
exports.Td = Td
//# sourceMappingURL=table.js.map
