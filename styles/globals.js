import { Global, css } from '@emotion/react'

// add gloabl CSS here.
const CSS = css`
  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: yellow;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: goldenrod;
  }

  ::selection {
    background: yellow;
  }

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`

function GlobalCSS() {
  return <Global styles={CSS} />
}

export default GlobalCSS
