'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Div = void 0
var react_1 = __importDefault(require('react'))
var Div = function (p) {
  return react_1['default'].createElement(
    'div',
    { className: p.className },
    p.children
  )
}
exports.Div = Div
//# sourceMappingURL=containers.js.map
