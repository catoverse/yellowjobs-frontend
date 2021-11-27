'use strict'
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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
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
exports.__esModule = true
exports.TwitterContextConsumer =
  exports.TwitterContextProvider =
  exports.useTwitterContext =
    void 0
var react_1 = __importStar(require('react'))
// Saves the tweets returned as props to the page
var TwitterContext = react_1.createContext({
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
function useTwitterContext() {
  return react_1.useContext(TwitterContext)
}
exports.useTwitterContext = useTwitterContext
// allows partials that override outer providers
function TwitterContextProvider(_a) {
  var value = _a.value,
    children = _a.children
  var currentContext = react_1.useContext(TwitterContext)
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
  return react_1['default'].createElement(
    TwitterContext.Provider,
    { value: mergedContext },
    children
  )
}
exports.TwitterContextProvider = TwitterContextProvider
exports.TwitterContextConsumer = TwitterContext.Consumer
//# sourceMappingURL=twitter.js.map
