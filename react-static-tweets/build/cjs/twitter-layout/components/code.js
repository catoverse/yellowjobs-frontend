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
exports.Pre = exports.Code = void 0
var react_1 = __importDefault(require('react'))
var Code = function (p) {
  return react_1['default'].createElement('code', __assign({}, p))
}
exports.Code = Code
var Pre = function (p) {
  return react_1['default'].createElement('pre', __assign({}, p))
}
exports.Pre = Pre
//# sourceMappingURL=code.js.map
