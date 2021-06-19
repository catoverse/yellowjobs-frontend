import { Global, css } from '@emotion/react'

// add gloabl CSS here.
const CSS = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #fafafa;
  }

  ::selection {
    background: yellow;
  }

  /* removing ugly outlines */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    box-shadow: none;
    outline-color: transparent;
  }
`

function GlobalCSS() {
  return <Global styles={CSS} />
}

export default GlobalCSS
