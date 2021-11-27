'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var react_1 = __importDefault(require('react'))
var classnames_1 = __importDefault(require('classnames'))
var skeleton_1 = require('./skeleton')
function TweetSkeleton(_a) {
  var _b = _a.simple,
    simple = _b === void 0 ? false : _b,
    _c = _a.className,
    className = _c === void 0 ? undefined : _c
  return react_1['default'].createElement(
    'div',
    {
      className: classnames_1['default'](
        'static-tweet-skeleton-container',
        className
      ),
    },
    react_1['default'].createElement(
      'div',
      { className: 'static-tweet-skeleton-content' },
      react_1['default'].createElement(skeleton_1.Skeleton, {
        style: { height: '2.25rem' },
      }),
      react_1['default'].createElement(skeleton_1.Skeleton, {
        style: { height: '7rem', margin: '1.25rem 0' },
      }),
      react_1['default'].createElement(skeleton_1.Skeleton, {
        style: { height: '1.25rem' },
      })
    ),
    simple
      ? null
      : react_1['default'].createElement(
          'div',
          { className: 'static-tweet-skeleton-footer' },
          react_1['default'].createElement(skeleton_1.Skeleton, {
            style: { height: '1.25rem' },
          })
        )
  )
}
exports['default'] = TweetSkeleton
//# sourceMappingURL=tweet-skeleton.js.map
