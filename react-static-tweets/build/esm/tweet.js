import React, { forwardRef } from 'react'
import cs from 'classnames'
import useSWR from 'swr'
import { useTwitterContext } from './twitter'
import Node from './html/node'
import components from './twitter-layout/components'
var Tweet = forwardRef(function (_a, ref) {
  var id = _a.id,
    ast = _a.ast,
    caption = _a.caption,
    className = _a.className
  var twitter = useTwitterContext()
  var tweetAst = useSWR(
    id,
    function (id) {
      return ast || twitter.tweetAstMap[id] || twitter.swrOptions.fetcher(id)
    },
    twitter.swrOptions
  ).data
  return React.createElement(
    'article',
    { ref: ref, className: cs('static-tweet', className) },
    tweetAst &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Node, {
          components: components,
          node: tweetAst[0],
        }),
        caption != null
          ? React.createElement(
              'p',
              { className: 'static-tweet-caption' },
              caption
            )
          : null
      )
  )
})
export { Tweet }
//# sourceMappingURL=tweet.js.map
