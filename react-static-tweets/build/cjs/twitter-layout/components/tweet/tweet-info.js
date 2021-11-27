'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var react_1 = __importDefault(require('react'))
var classnames_1 = __importDefault(require('classnames'))
var format_1 = __importDefault(require('date-fns/format'))
var format_number_1 = __importDefault(require('../../../format-number'))
var use_mounted_1 = __importDefault(require('../../../use-mounted'))
function TweetInfo(_a) {
  var tweet = _a.tweet,
    _b = _a.className,
    className = _b === void 0 ? undefined : _b
  var mounted = use_mounted_1['default']()
  var likeUrl = 'https://twitter.com/intent/like?tweet_id=' + tweet.id
  var tweetUrl = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id
  var createdAt =
    typeof window !== 'undefined' && mounted ? new Date(tweet.createdAt) : null
  return react_1['default'].createElement(
    'div',
    { className: classnames_1['default']('static-tweet-info', className) },
    react_1['default'].createElement(
      'a',
      {
        className: 'static-tweet-like',
        href: likeUrl,
        title: 'Like',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      react_1['default'].createElement(
        'div',
        { className: 'static-tweet-heart' },
        react_1['default'].createElement('div', {
          className: 'static-tweet-icon static-tweet-icon-heart',
          role: 'img',
        })
      ),
      (tweet.heartCount || tweet.likes > 0) &&
        react_1['default'].createElement(
          'span',
          { className: 'static-tweet-likes' },
          tweet.heartCount || format_number_1['default'](tweet.likes)
        )
    ),
    createdAt &&
      react_1['default'].createElement(
        'a',
        {
          className: 'static-tweet-time',
          href: tweetUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        react_1['default'].createElement(
          'time',
          {
            title: 'Time Posted: ' + createdAt.toUTCString(),
            dateTime: createdAt.toISOString(),
          },
          format_1['default'](createdAt, 'h:mm a - MMM d, y')
        )
      )
  )
}
exports['default'] = TweetInfo
//# sourceMappingURL=tweet-info.js.map
