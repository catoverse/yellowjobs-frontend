'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Skeleton = void 0
var react_1 = __importDefault(require('react'))
var classnames_1 = __importDefault(require('classnames'))
var Skeleton = function (_a) {
  var children = _a.children,
    className = _a.className,
    style = _a.style
  return react_1['default'].createElement(
    'span',
    {
      className: classnames_1['default']('static-tweet-skeleton', className),
      style: style,
    },
    children
  )
}
exports.Skeleton = Skeleton
//# sourceMappingURL=skeleton.js.map
