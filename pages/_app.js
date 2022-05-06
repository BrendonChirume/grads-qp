import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../components/createEmotionCache';
import theme from '../components/theme';
import AuthRequired from '../components/AuthRequired';
import { Toolbar } from '@mui/material';
import AuthProvider from '../context/AuthContext';
import dynamic from 'next/dynamic';

const NotiSnackBar = dynamic(() => import('../components/NotiSnackBar'), {
  ssr: false,
});
const clientSideEmotionCache = createEmotionCache();
const noAuthRequired = ['/login'];

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const router = useRouter();
  const DynamicLayout =
    (Component.Layout &&
      function LayoutMain(props) {
        const { children, ...rest } = props;
        return (
          <Component.Layout sx={{}} variant="temporary" {...rest}>
            <Toolbar />
            {children}
          </Component.Layout>
        );
      }) ||
    dynamic(() => import('../layouts/DrawerLayout'));

  return (
    <AuthProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="manifest" href="manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Grads QP" />
          <meta name="apple-mobile-web-app-title" content="Grads QP" />
          <meta
            name="msapplication-navbutton-color"
            content={theme.palette.primary.main}
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta
            name="description"
            content="A simple, and modern question paper directory for universities."
          />
          <title>Grads QP - directory</title>
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
                <NotiSnackBar />
              </DynamicLayout>
            </AuthRequired>
          )}
        </ThemeProvider>
      </CacheProvider>
    </AuthProvider>
  );
}
