import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    overflow-x: hidden;
  }

  #__next {
    height: 100vh;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }

  button, input {
    font-family: inherit;
    font-size: inherit;
  }
`;
