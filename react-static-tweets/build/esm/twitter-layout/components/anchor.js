import React from 'react'
import cs from 'classnames'
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
export var A = function (p) {
  return React.createElement(
    'a',
    {
      href: p.href,
      target: '_blank',
      rel: 'noopener noreferrer',
      title: p.title || p.href,
      className: cs('static-tweet-anchor', p.className),
    },
    p.children[0] === p.href ? beautifyHref(p.href) : p.children
  )
}
//# sourceMappingURL=anchor.js.map
