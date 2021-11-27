import React from 'react'
var Permalink = function (_a) {
  var children = _a.children,
    id = _a.id
  return React.createElement(
    'span',
    { className: 'static-tweet-permalink' },
    React.createElement('span', { id: id }),
    React.createElement('a', { href: '#' + id }, children),
    React.createElement('span', { className: 'permalink' }, '#')
  )
}
export var H1 = function (p) {
  return React.createElement(
    'h1',
    { className: 'static-tweet-h1' },
    React.createElement(Permalink, { id: p.data.id }, p.children)
  )
}
export var H2 = function (p) {
  return React.createElement(
    'h2',
    { className: 'static-tweet-h2' },
    React.createElement(Permalink, { id: p.data.id }, p.children)
  )
}
export var H3 = function (p) {
  return React.createElement(
    'h3',
    { className: 'static-tweet-h3' },
    React.createElement(Permalink, { id: p.data.id }, p.children)
  )
}
export var H4 = function (p) {
  return React.createElement(
    'h4',
    { className: 'static-tweet-h4' },
    React.createElement(Permalink, { id: p.data.id }, p.children)
  )
}
export var H5 = function (p) {
  return React.createElement(
    'h5',
    { className: 'static-tweet-h5' },
    React.createElement(Permalink, { id: p.data.id }, p.children)
  )
}
export var H6 = function (p) {
  return React.createElement(
    'h6',
    { className: 'static-tweet-h6' },
    React.createElement(Permalink, { id: p.data.id }, p.children)
  )
}
//# sourceMappingURL=headings.js.map
