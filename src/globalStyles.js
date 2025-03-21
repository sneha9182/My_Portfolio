// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #282c34;
    color: white;
    overflow-x: hidden;
  }

  h1, h2 {
    margin: 0;
  }
`;

export default GlobalStyles;