'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.useTweet = void 0
var react_1 = __importDefault(require('react'))
var tweet_header_1 = __importDefault(require('./tweet-header'))
var tweet_info_1 = __importDefault(require('./tweet-info'))
var TweetContext = react_1['default'].createContext({})
var useTweet = function () {
  return react_1['default'].useContext(TweetContext)
}
exports.useTweet = useTweet
function Tweet(_a) {
  var children = _a.children,
    data = _a.data
  return react_1['default'].createElement(
    'div',
    { className: 'static-tweet-body' },
    react_1['default'].createElement(
      'blockquote',
      { className: 'static-tweet-body-blockquote' },
      react_1['default'].createElement(tweet_header_1['default'], {
        tweet: data,
      }),
      react_1['default'].createElement(
        TweetContext.Provider,
        { value: data },
        children
      ),
      react_1['default'].createElement(tweet_info_1['default'], { tweet: data })
    )
  )
}
exports['default'] = Tweet
//# sourceMappingURL=tweet.js.map
