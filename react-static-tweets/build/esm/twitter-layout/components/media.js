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
import React from 'react'
// import dynamic from 'next/dynamic' // TODO
import { useTweet } from './tweet/tweet'
export var Img = function (_a) {
  var width = _a.width,
    height = _a.height,
    src = _a.src,
    p = __rest(_a, ['width', 'height', 'src'])
  var tweet = useTweet()
  var tweetUrl = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id
  return React.createElement(
    'details',
    { className: 'static-tweet-details' },
    React.createElement(
      'summary',
      { className: 'static-tweet-summary' },
      React.createElement(
        'a',
        {
          href: tweetUrl,
          className: 'avatar',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        React.createElement(
          'img',
          __assign(
            {
              src: src + '&name=small',
              style: { objectFit: 'cover' },
              alt: '',
            },
            p
          )
        )
      )
    )
  )
}
//# sourceMappingURL=media.js.map
