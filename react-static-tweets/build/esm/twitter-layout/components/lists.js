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
export var Ul = function (p) {
  return React.createElement('ul', __assign({}, p))
}
export var Ol = function (p) {
  return React.createElement('ol', __assign({}, p))
}
export var Li = function (p) {
  return React.createElement('li', __assign({}, p))
}
//# sourceMappingURL=lists.js.map
