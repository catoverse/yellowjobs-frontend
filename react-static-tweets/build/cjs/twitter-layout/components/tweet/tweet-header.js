'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var react_1 = __importDefault(require('react'))
function TweetHeader(_a) {
  var tweet = _a.tweet
  var authorUrl = 'https://twitter.com/' + tweet.username
  var tweetUrl = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id
  var avatar = tweet.avatar.normal
  return react_1['default'].createElement(
    'div',
    { className: 'static-tweet-header' },
    react_1['default'].createElement(
      'a',
      {
        href: authorUrl,
        className: 'static-tweet-header-avatar',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      react_1['default'].createElement('img', {
        className: 'static-tweet-header-rounded',
        src: avatar,
        alt: tweet.name,
      })
    ),
    react_1['default'].createElement(
      'a',
      {
        href: authorUrl,
        className: 'static-tweet-header-author',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      react_1['default'].createElement(
        'span',
        { className: 'static-tweet-header-name', title: tweet.name },
        tweet.name
      ),
      react_1['default'].createElement(
        'span',
        {
          className: 'static-tweet-header-username',
          title: '@' + tweet.username,
        },
        '@',
        tweet.username
      )
    ),
    react_1['default'].createElement(
      'a',
      {
        href: tweetUrl,
        className: 'static-tweet-header-brand',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      react_1['default'].createElement('div', {
        className: 'static-tweet-header-icon-twitter',
        title: 'View on Twitter',
        role: 'img',
      })
    )
  )
}
exports['default'] = TweetHeader
//# sourceMappingURL=tweet-header.js.map
