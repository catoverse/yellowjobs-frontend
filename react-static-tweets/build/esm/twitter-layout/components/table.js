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
import React from 'react'
export var Table = function (p) {
  return React.createElement(
    'div',
    { className: 'table-container' },
    React.createElement('table', __assign({}, p))
  )
}
export var Th = function (p) {
  return React.createElement('th', __assign({}, p))
}
export var Td = function (p) {
  return React.createElement('td', __assign({}, p))
}
//# sourceMappingURL=table.js.map
