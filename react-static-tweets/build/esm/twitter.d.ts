import React, { ReactNode } from 'react'
import { ConfigInterface } from 'swr'
export declare type TweetAst = Array<any>
export declare type TwitterContextValue = {
  tweetAstMap: TweetAstMap
  swrOptions: ConfigInterface
}
export declare type TweetAstMap = {
  [tweetId: string]: TweetAst
}
export interface TwitterContextProviderProps {
  value: Partial<TwitterContextValue>
  children?: ReactNode
}
export declare function useTwitterContext(): TwitterContextValue
export declare function TwitterContextProvider({
  value,
  children,
}: TwitterContextProviderProps): JSX.Element
export declare const TwitterContextConsumer: React.Consumer<TwitterContextValue>
