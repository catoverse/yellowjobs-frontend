'use strict'
exports.__esModule = true
function formatNumber(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
exports['default'] = formatNumber
//# sourceMappingURL=format-number.js.map
