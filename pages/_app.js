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
import Layout from '../src/containers/Layout';

const clientSideEmotionCache = createEmotionCache();

const EmptyLayout = ({ children }) => <>{children}</>;
export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const DynLayout = Component.Layout || Layout;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <UserProvider>
          <Provider store={store}>
            <DynLayout>
              <Component {...pageProps} />
            </DynLayout>
          </Provider>
        </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
