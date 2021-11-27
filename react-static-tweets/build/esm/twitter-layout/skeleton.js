import React from 'react'
import cs from 'classnames'
export var Skeleton = function (_a) {
  var children = _a.children,
    className = _a.className,
    style = _a.style
  return React.createElement(
    'span',
    { className: cs('static-tweet-skeleton', className), style: style },
    children
  )
}
//# sourceMappingURL=skeleton.js.map
