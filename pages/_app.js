import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../src/createEmotionCache';
import { store } from '../src/redux/store';
import theme from '../src/theme';
import Layout from '../src/containers/Layout';
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from '../src/components/ProtectedRoute';

const clientSideEmotionCache = createEmotionCache();
const noAuthRequired = ['/login', '/signup'];

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const router = useRouter();
  const DynamicLayout = Component.Layout || Layout;

  return (
    <AuthContextProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            {noAuthRequired.includes(router.pathname) ? (
              <Component {...pageProps} />
            ) : (
              <ProtectedRoute>
                <DynamicLayout>
                  <Component {...pageProps} />
                </DynamicLayout>
              </ProtectedRoute>
            )}
          </Provider>
        </ThemeProvider>
      </CacheProvider>
    </AuthContextProvider>
  );
}
