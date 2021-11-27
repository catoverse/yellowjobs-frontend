'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var react_1 = __importDefault(require('react'))
var node_1 = __importDefault(require('../../html/node'))
var index_1 = __importDefault(require('./index'))
function EmbeddedTweet(_a) {
  var ast = _a.ast
  return react_1['default'].createElement(node_1['default'], {
    components: index_1['default'],
    node: ast,
  })
}
exports['default'] = EmbeddedTweet
//# sourceMappingURL=embedded-tweet.js.map
