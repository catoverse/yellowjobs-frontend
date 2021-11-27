'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.A = void 0
var react_1 = __importDefault(require('react'))
var classnames_1 = __importDefault(require('classnames'))
var PROTOCOL = /^(https?:|)\/\//
var beautifyHref = function (href) {
  var text = href.replace(PROTOCOL, '')
  var i = text.indexOf('/')
  if (i === -1) return text
  // Remove trailing slash
  if (i === text.length - 1) {
    return text.substring(0, i)
  }
  var hostname = text.substring(0, i)
  var pathname = text.substring(i)
  // Hide large paths similarly to how twitter does it
  return pathname.length > 20
    ? '' + hostname + pathname.substring(0, 15) + '...'
    : text
}
var A = function (p) {
  return react_1['default'].createElement(
    'a',
    {
      href: p.href,
      target: '_blank',
      rel: 'noopener noreferrer',
      title: p.title || p.href,
      className: classnames_1['default']('static-tweet-anchor', p.className),
    },
    p.children[0] === p.href ? beautifyHref(p.href) : p.children
  )
}
exports.A = A
//# sourceMappingURL=anchor.js.map
