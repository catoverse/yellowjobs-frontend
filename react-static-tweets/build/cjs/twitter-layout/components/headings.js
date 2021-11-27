'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.H6 =
  exports.H5 =
  exports.H4 =
  exports.H3 =
  exports.H2 =
  exports.H1 =
    void 0
var react_1 = __importDefault(require('react'))
var Permalink = function (_a) {
  var children = _a.children,
    id = _a.id
  return react_1['default'].createElement(
    'span',
    { className: 'static-tweet-permalink' },
    react_1['default'].createElement('span', { id: id }),
    react_1['default'].createElement('a', { href: '#' + id }, children),
    react_1['default'].createElement('span', { className: 'permalink' }, '#')
  )
}
var H1 = function (p) {
  return react_1['default'].createElement(
    'h1',
    { className: 'static-tweet-h1' },
    react_1['default'].createElement(Permalink, { id: p.data.id }, p.children)
  )
}
exports.H1 = H1
var H2 = function (p) {
  return react_1['default'].createElement(
    'h2',
    { className: 'static-tweet-h2' },
    react_1['default'].createElement(Permalink, { id: p.data.id }, p.children)
  )
}
exports.H2 = H2
var H3 = function (p) {
  return react_1['default'].createElement(
    'h3',
    { className: 'static-tweet-h3' },
    react_1['default'].createElement(Permalink, { id: p.data.id }, p.children)
  )
}
exports.H3 = H3
var H4 = function (p) {
  return react_1['default'].createElement(
    'h4',
    { className: 'static-tweet-h4' },
    react_1['default'].createElement(Permalink, { id: p.data.id }, p.children)
  )
}
exports.H4 = H4
var H5 = function (p) {
  return react_1['default'].createElement(
    'h5',
    { className: 'static-tweet-h5' },
    react_1['default'].createElement(Permalink, { id: p.data.id }, p.children)
  )
}
exports.H5 = H5
var H6 = function (p) {
  return react_1['default'].createElement(
    'h6',
    { className: 'static-tweet-h6' },
    react_1['default'].createElement(Permalink, { id: p.data.id }, p.children)
  )
}
exports.H6 = H6
//# sourceMappingURL=headings.js.map
