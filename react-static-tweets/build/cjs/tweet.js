'use strict'
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Tweet = void 0
var react_1 = __importStar(require('react'))
var classnames_1 = __importDefault(require('classnames'))
var swr_1 = __importDefault(require('swr'))
var twitter_1 = require('./twitter')
var node_1 = __importDefault(require('./html/node'))
var components_1 = __importDefault(require('./twitter-layout/components'))
var Tweet = react_1.forwardRef(function (_a, ref) {
  var id = _a.id,
    ast = _a.ast,
    caption = _a.caption,
    className = _a.className
  var twitter = twitter_1.useTwitterContext()
  var tweetAst = swr_1['default'](
    id,
    function (id) {
      return ast || twitter.tweetAstMap[id] || twitter.swrOptions.fetcher(id)
    },
    twitter.swrOptions
  ).data
  return react_1['default'].createElement(
    'article',
    { ref: ref, className: classnames_1['default']('static-tweet', className) },
    tweetAst &&
      react_1['default'].createElement(
        react_1['default'].Fragment,
        null,
        react_1['default'].createElement(node_1['default'], {
          components: components_1['default'],
          node: tweetAst[0],
        }),
        caption != null
          ? react_1['default'].createElement(
              'p',
              { className: 'static-tweet-caption' },
              caption
            )
          : null
      )
  )
})
exports.Tweet = Tweet
//# sourceMappingURL=tweet.js.map
