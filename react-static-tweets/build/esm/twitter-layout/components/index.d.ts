/// <reference types="react" />
import Tweet from './tweet/tweet'
import EmbeddedTweet from './embedded-tweet'
declare const _default: {
  div: (p: any) => JSX.Element
  h1: (p: any) => JSX.Element
  h2: (p: any) => JSX.Element
  h3: (p: any) => JSX.Element
  h4: (p: any) => JSX.Element
  h5: (p: any) => JSX.Element
  h6: (p: any) => JSX.Element
  p: ({ className, ...p }: { [x: string]: any; className?: any }) => JSX.Element
  blockquote: ({
    className,
    ...p
  }: {
    [x: string]: any
    className?: any
  }) => JSX.Element
  hr: ({
    className,
    ...p
  }: {
    [x: string]: any
    className?: any
  }) => JSX.Element
  code: (p: any) => JSX.Element
  pre: (p: any) => JSX.Element
  a: (p: any) => JSX.Element
  ul: (p: any) => JSX.Element
  ol: (p: any) => JSX.Element
  li: (p: any) => JSX.Element
  table: (p: any) => JSX.Element
  th: (p: any) => JSX.Element
  td: (p: any) => JSX.Element
  img: ({
    width,
    height,
    src,
    ...p
  }: {
    [x: string]: any
    width: any
    height: any
    src: any
  }) => JSX.Element
  Mention: (p: any) => JSX.Element
  Hashtag: (p: any) => JSX.Element
  Cashtag: (p: any) => JSX.Element
  Emoji: ({
    className,
    ...p
  }: {
    [x: string]: any
    className: any
  }) => JSX.Element
  Poll: ({ data }: { data: any }) => JSX.Element
  Tweet: typeof Tweet
  EmbeddedTweet: typeof EmbeddedTweet
}
export default _default
