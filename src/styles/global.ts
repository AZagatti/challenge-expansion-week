import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #3d434d;
    color: #FFF;
  }

  body, input, button {
    font-family:'Roboto', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`
