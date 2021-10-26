import { Global, css } from '@emotion/react'

// add gloabl CSS here.
const CSS = css`
  @import url('https://fonts.googleapis.com/css?family=Atkinson+Hyperlegible');

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #fafafa;
    font-family: Atkinson Hyperlegible;
  }

  ::selection {
    background: yellow;
  }

  /* removing ugly outlines */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    box-shadow: none;
    outline-color: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 20px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`

function GlobalCSS() {
  return <Global styles={CSS} />
}

export default GlobalCSS
