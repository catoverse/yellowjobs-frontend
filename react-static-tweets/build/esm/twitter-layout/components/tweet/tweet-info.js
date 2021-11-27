import React from 'react'
import cs from 'classnames'
import format from 'date-fns/format'
import formatNumber from '../../../format-number'
import useMounted from '../../../use-mounted'
export default function TweetInfo(_a) {
  var tweet = _a.tweet,
    _b = _a.className,
    className = _b === void 0 ? undefined : _b
  var mounted = useMounted()
  var likeUrl = 'https://twitter.com/intent/like?tweet_id=' + tweet.id
  var tweetUrl = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id
  var createdAt =
    typeof window !== 'undefined' && mounted ? new Date(tweet.createdAt) : null
  return React.createElement(
    'div',
    { className: cs('static-tweet-info', className) },
    React.createElement(
      'a',
      {
        className: 'static-tweet-like',
        href: likeUrl,
        title: 'Like',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      React.createElement(
        'div',
        { className: 'static-tweet-heart' },
        React.createElement('div', {
          className: 'static-tweet-icon static-tweet-icon-heart',
          role: 'img',
        })
      ),
      (tweet.heartCount || tweet.likes > 0) &&
        React.createElement(
          'span',
          { className: 'static-tweet-likes' },
          tweet.heartCount || formatNumber(tweet.likes)
        )
    ),
    createdAt &&
      React.createElement(
        'a',
        {
          className: 'static-tweet-time',
          href: tweetUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        React.createElement(
          'time',
          {
            title: 'Time Posted: ' + createdAt.toUTCString(),
            dateTime: createdAt.toISOString(),
          },
          format(createdAt, 'h:mm a - MMM d, y')
        )
      )
  )
}
//# sourceMappingURL=tweet-info.js.map
