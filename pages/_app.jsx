import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '~/styles';

/* eslint-disable react/prop-types */
const WebconfApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Webconf</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default WebconfApp;
