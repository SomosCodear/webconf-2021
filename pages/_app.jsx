import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { GlobalStyle, theme } from '~/styles';

const queryClient = new QueryClient();

/* eslint-disable react/prop-types */
const WebconfApp = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>WebConf LATAM 2021 | Un evento de CoDeAr</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default WebconfApp;
