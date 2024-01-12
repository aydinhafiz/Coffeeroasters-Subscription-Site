import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #FEFCF7;
  font-family: 'Barlow', sans-serif;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

`;
