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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import React, { createContext, useContext } from 'react'
// Saves the tweets returned as props to the page
var TwitterContext = createContext({
  tweetAstMap: {},
  swrOptions: {
    fetcher: function (id) {
      return fetch(
        'https://twitter-search.vercel.app/api/get-tweet-ast/' + id
      ).then(function (r) {
        return r.json()
      })
    },
  },
})
export function useTwitterContext() {
  return useContext(TwitterContext)
}
// allows partials that override outer providers
export function TwitterContextProvider(_a) {
  var value = _a.value,
    children = _a.children
  var currentContext = useContext(TwitterContext)
  var tweetAstMap = value.tweetAstMap,
    swrOptions = value.swrOptions,
    rest = __rest(value, ['tweetAstMap', 'swrOptions'])
  var mergedContext = __assign(__assign(__assign({}, currentContext), rest), {
    tweetAstMap: __assign(
      __assign({}, currentContext.tweetAstMap),
      tweetAstMap
    ),
    swrOptions: __assign(__assign({}, currentContext.swrOptions), swrOptions),
  })
  return React.createElement(
    TwitterContext.Provider,
    { value: mergedContext },
    children
  )
}
export var TwitterContextConsumer = TwitterContext.Consumer
//# sourceMappingURL=twitter.js.map
