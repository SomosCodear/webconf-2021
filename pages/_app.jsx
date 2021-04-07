import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '~/styles';

const queryClient = new QueryClient();

/* eslint-disable react/prop-types */
const WebconfApp = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Webconf</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default WebconfApp;
