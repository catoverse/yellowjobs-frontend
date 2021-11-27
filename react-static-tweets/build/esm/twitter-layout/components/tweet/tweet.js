import React from 'react'
import TweetHeader from './tweet-header'
import TweetInfo from './tweet-info'
var TweetContext = React.createContext({})
export var useTweet = function () {
  return React.useContext(TweetContext)
}
export default function Tweet(_a) {
  var children = _a.children,
    data = _a.data
  return React.createElement(
    'div',
    { className: 'static-tweet-body' },
    React.createElement(
      'blockquote',
      { className: 'static-tweet-body-blockquote' },
      React.createElement(TweetHeader, { tweet: data }),
      React.createElement(TweetContext.Provider, { value: data }, children),
      React.createElement(TweetInfo, { tweet: data })
    )
  )
}
//# sourceMappingURL=tweet.js.map
