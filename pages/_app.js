import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { UserProvider } from '@auth0/nextjs-auth0';
import createEmotionCache from '../src/createEmotionCache';
import { store } from '../src/redux/store';
import theme from '../src/theme';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
    <UserProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </CacheProvider>
    </UserProvider>
  );
}

export default MyApp;
