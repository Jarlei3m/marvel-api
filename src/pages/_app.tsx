import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import CssBaseline from '@mui/material/CssBaseline';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Marvel | Home</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          name="viewport"
          content="minimum-scale=1 initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
