'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var containers_1 = require('./containers')
var headings_1 = require('./headings')
var text_1 = require('./text')
var code_1 = require('./code')
var anchor_1 = require('./anchor')
var lists_1 = require('./lists')
var table_1 = require('./table')
var media_1 = require('./media')
var twitter_1 = require('./twitter')
var tweet_1 = __importDefault(require('./tweet/tweet'))
var embedded_tweet_1 = __importDefault(require('./embedded-tweet'))
exports['default'] = {
  div: containers_1.Div,
  h1: headings_1.H1,
  h2: headings_1.H2,
  h3: headings_1.H3,
  h4: headings_1.H4,
  h5: headings_1.H5,
  h6: headings_1.H6,
  p: text_1.P,
  blockquote: text_1.Blockquote,
  hr: text_1.Hr,
  code: code_1.Code,
  pre: code_1.Pre,
  a: anchor_1.A,
  ul: lists_1.Ul,
  ol: lists_1.Ol,
  li: lists_1.Li,
  table: table_1.Table,
  th: table_1.Th,
  td: table_1.Td,
  img: media_1.Img,
  Mention: twitter_1.Mention,
  Hashtag: twitter_1.Hashtag,
  Cashtag: twitter_1.Cashtag,
  Emoji: twitter_1.Emoji,
  Poll: twitter_1.Poll,
  Tweet: tweet_1['default'],
  EmbeddedTweet: embedded_tweet_1['default'],
}
//# sourceMappingURL=index.js.map
