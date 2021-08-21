import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-size: 16px;
    line-height: 1.15;
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

  button, input, textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    html {
      font-size: 90%;
    }
  }
`;
