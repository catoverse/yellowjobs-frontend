import React from 'react'
declare type TweetProps = {
  id: string
  ast?: any
  caption?: string
  className?: string
}
declare const Tweet: React.ForwardRefExoticComponent<
  TweetProps & React.RefAttributes<HTMLElement>
>
export { Tweet }
