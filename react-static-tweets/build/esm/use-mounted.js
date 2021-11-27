import { useState, useEffect } from 'react'
export default function useMounted() {
  var _a = useState(false),
    mounted = _a[0],
    setMounted = _a[1]
  useEffect(function () {
    return setMounted(true)
  }, [])
  return mounted
}
//# sourceMappingURL=use-mounted.js.map
