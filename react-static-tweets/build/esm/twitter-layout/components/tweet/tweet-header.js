import React from 'react'
export default function TweetHeader(_a) {
  var tweet = _a.tweet
  var authorUrl = 'https://twitter.com/' + tweet.username
  var tweetUrl = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id
  var avatar = tweet.avatar.normal
  return React.createElement(
    'div',
    { className: 'static-tweet-header' },
    React.createElement(
      'a',
      {
        href: authorUrl,
        className: 'static-tweet-header-avatar',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      React.createElement('img', {
        className: 'static-tweet-header-rounded',
        src: avatar,
        alt: tweet.name,
      })
    ),
    React.createElement(
      'a',
      {
        href: authorUrl,
        className: 'static-tweet-header-author',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      React.createElement(
        'span',
        { className: 'static-tweet-header-name', title: tweet.name },
        tweet.name
      ),
      React.createElement(
        'span',
        {
          className: 'static-tweet-header-username',
          title: '@' + tweet.username,
        },
        '@',
        tweet.username
      )
    ),
    React.createElement(
      'a',
      {
        href: tweetUrl,
        className: 'static-tweet-header-brand',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      React.createElement('div', {
        className: 'static-tweet-header-icon-twitter',
        title: 'View on Twitter',
        role: 'img',
      })
    )
  )
}
//# sourceMappingURL=tweet-header.js.map
