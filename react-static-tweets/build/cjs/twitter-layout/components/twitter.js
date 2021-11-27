'use strict'
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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
exports.Poll =
  exports.Emoji =
  exports.Cashtag =
  exports.Hashtag =
  exports.Mention =
  exports.TwitterLink =
    void 0
var react_1 = __importStar(require('react'))
var classnames_1 = __importDefault(require('classnames'))
var formatDistanceStrict_1 = __importDefault(
  require('date-fns/formatDistanceStrict')
)
var TwitterLink = function (p) {
  return react_1['default'].createElement(
    'a',
    {
      href: p.href,
      target: '_blank',
      rel: 'noopener noreferrer',
      title: p.title || p.href,
      className: 'static-tweet-twitter-link',
    },
    react_1['default'].createElement('s', null, p.type),
    p.children
  )
}
exports.TwitterLink = TwitterLink
var Mention = function (p) {
  return react_1['default'].createElement(
    exports.TwitterLink,
    { href: p.href, type: '@' },
    p.children[0].replace(/^@/, '')
  )
}
exports.Mention = Mention
var Hashtag = function (p) {
  return react_1['default'].createElement(
    exports.TwitterLink,
    { href: p.href, type: '#' },
    p.children[0].replace(/^\#/, '')
  )
}
exports.Hashtag = Hashtag
var Cashtag = function (p) {
  return react_1['default'].createElement(
    exports.TwitterLink,
    { href: p.href, type: '$' },
    p.children[0].replace(/^\$/, '')
  )
}
exports.Cashtag = Cashtag
var Emoji = function (_a) {
  var className = _a.className,
    p = __rest(_a, ['className'])
  return react_1['default'].createElement(
    'img',
    __assign(
      { className: classnames_1['default']('static-tweet-emoji', className) },
      p
    )
  )
}
exports.Emoji = Emoji
// Note: Poll data is most likely cached, so ongoing polls will not be updated
// until a revalidation happens
var Poll = function (_a) {
  var data = _a.data
  var votesCount = data.options.reduce(function (count, option) {
    return count + option.votes
  }, 0)
  var endsAt = new Date(data.endsAt)
  var now = new Date()
  return react_1['default'].createElement(
    'div',
    { className: 'static-tweet-poll' },
    react_1['default'].createElement(
      'div',
      { className: 'static-tweet-options' },
      data.options.map(function (option) {
        var per = Math.round((option.votes / votesCount) * 100) || 0
        var width = per || 1 + '%'
        var widthLabel = per + '%'
        return react_1['default'].createElement(
          react_1.Fragment,
          { key: option.position },
          react_1['default'].createElement(
            'span',
            { className: 'static-tweet-label' },
            option.label
          ),
          react_1['default'].createElement('span', {
            className: 'static-tweet-chart',
            style: { width: width },
          }),
          react_1['default'].createElement('span', null, widthLabel)
        )
      })
    ),
    react_1['default'].createElement('hr', null),
    react_1['default'].createElement(
      'div',
      { className: 'static-tweet-footer' },
      react_1['default'].createElement(
        'span',
        { className: 'static-tweet-votes-count' },
        votesCount,
        ' votes'
      ),
      react_1['default'].createElement(
        'span',
        null,
        now > endsAt
          ? 'Final results'
          : formatDistanceStrict_1['default'](endsAt, now) + ' left'
      )
    )
  )
}
exports.Poll = Poll
//# sourceMappingURL=twitter.js.map
