'use strict'
exports.__esModule = true
var react_1 = require('react')
function useMounted() {
  var _a = react_1.useState(false),
    mounted = _a[0],
    setMounted = _a[1]
  react_1.useEffect(function () {
    return setMounted(true)
  }, [])
  return mounted
}
exports['default'] = useMounted
//# sourceMappingURL=use-mounted.js.map
