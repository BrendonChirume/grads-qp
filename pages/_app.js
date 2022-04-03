import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../components/createEmotionCache';
import theme from '../components/theme';
import { AuthContextProvider } from '../context/AuthContext';
import AuthRequired from '../components/AuthRequired';
import DrawerLayout from '../containers/DrawerLayout';

const clientSideEmotionCache = createEmotionCache();
const noAuthRequired = ['/login', '/signup'];

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const router = useRouter();
  const DynamicLayout = Component.Layout || DrawerLayout;

  return (
    <AuthContextProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <AuthRequired>
              <DynamicLayout>
                <Component {...pageProps} />
              </DynamicLayout>
            </AuthRequired>
          )}
        </ThemeProvider>
      </CacheProvider>
    </AuthContextProvider>
  );
}
