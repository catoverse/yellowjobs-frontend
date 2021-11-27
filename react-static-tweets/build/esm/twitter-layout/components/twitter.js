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
import React, { Fragment } from 'react'
import cs from 'classnames'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
export var TwitterLink = function (p) {
  return React.createElement(
    'a',
    {
      href: p.href,
      target: '_blank',
      rel: 'noopener noreferrer',
      title: p.title || p.href,
      className: 'static-tweet-twitter-link',
    },
    React.createElement('s', null, p.type),
    p.children
  )
}
export var Mention = function (p) {
  return React.createElement(
    TwitterLink,
    { href: p.href, type: '@' },
    p.children[0].replace(/^@/, '')
  )
}
export var Hashtag = function (p) {
  return React.createElement(
    TwitterLink,
    { href: p.href, type: '#' },
    p.children[0].replace(/^\#/, '')
  )
}
export var Cashtag = function (p) {
  return React.createElement(
    TwitterLink,
    { href: p.href, type: '$' },
    p.children[0].replace(/^\$/, '')
  )
}
export var Emoji = function (_a) {
  var className = _a.className,
    p = __rest(_a, ['className'])
  return React.createElement(
    'img',
    __assign({ className: cs('static-tweet-emoji', className) }, p)
  )
}
// Note: Poll data is most likely cached, so ongoing polls will not be updated
// until a revalidation happens
export var Poll = function (_a) {
  var data = _a.data
  var votesCount = data.options.reduce(function (count, option) {
    return count + option.votes
  }, 0)
  var endsAt = new Date(data.endsAt)
  var now = new Date()
  return React.createElement(
    'div',
    { className: 'static-tweet-poll' },
    React.createElement(
      'div',
      { className: 'static-tweet-options' },
      data.options.map(function (option) {
        var per = Math.round((option.votes / votesCount) * 100) || 0
        var width = per || 1 + '%'
        var widthLabel = per + '%'
        return React.createElement(
          Fragment,
          { key: option.position },
          React.createElement(
            'span',
            { className: 'static-tweet-label' },
            option.label
          ),
          React.createElement('span', {
            className: 'static-tweet-chart',
            style: { width: width },
          }),
          React.createElement('span', null, widthLabel)
        )
      })
    ),
    React.createElement('hr', null),
    React.createElement(
      'div',
      { className: 'static-tweet-footer' },
      React.createElement(
        'span',
        { className: 'static-tweet-votes-count' },
        votesCount,
        ' votes'
      ),
      React.createElement(
        'span',
        null,
        now > endsAt
          ? 'Final results'
          : formatDistanceStrict(endsAt, now) + ' left'
      )
    )
  )
}
//# sourceMappingURL=twitter.js.map
