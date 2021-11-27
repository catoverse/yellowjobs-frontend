import React from 'react'
import cs from 'classnames'
import { Skeleton } from './skeleton'
export default function TweetSkeleton(_a) {
  var _b = _a.simple,
    simple = _b === void 0 ? false : _b,
    _c = _a.className,
    className = _c === void 0 ? undefined : _c
  return React.createElement(
    'div',
    { className: cs('static-tweet-skeleton-container', className) },
    React.createElement(
      'div',
      { className: 'static-tweet-skeleton-content' },
      React.createElement(Skeleton, { style: { height: '2.25rem' } }),
      React.createElement(Skeleton, {
        style: { height: '7rem', margin: '1.25rem 0' },
      }),
      React.createElement(Skeleton, { style: { height: '1.25rem' } })
    ),
    simple
      ? null
      : React.createElement(
          'div',
          { className: 'static-tweet-skeleton-footer' },
          React.createElement(Skeleton, { style: { height: '1.25rem' } })
        )
  )
}
//# sourceMappingURL=tweet-skeleton.js.map
