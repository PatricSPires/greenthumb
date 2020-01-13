import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: transparent;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }
`;
