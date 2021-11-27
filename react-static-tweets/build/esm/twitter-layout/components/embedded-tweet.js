import React from 'react'
import Node from '../../html/node'
import components from './index'
export default function EmbeddedTweet(_a) {
  var ast = _a.ast
  return React.createElement(Node, { components: components, node: ast })
}
//# sourceMappingURL=embedded-tweet.js.map
