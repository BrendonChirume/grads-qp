import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { UserProvider } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { store } from '../redux/store';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import Filters from '../components/Filters';
import Navigation from '../components/Navigation';
import ActiveLastBreadCrumb from '../components/ActiveLastBreadCrumb';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Providers = (props) => {
  const { emotionCache = clientSideEmotionCache, children } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <UserProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </UserProvider>
    </CacheProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  emotionCache: PropTypes.shape({})
};

const drawerWidth = 240;

function LayoutContent(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ p: 1 }}>
      <Filters />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Navigation */}
      <Navigation handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="filter options"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              mt: 8
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{ mb: 3 }}>
          <ActiveLastBreadCrumb />
        </Box>
        {children}
      </Box>
    </Box>
  );
}

const Layout = ({ children }) => (
  <Providers>
    <LayoutContent>{children}</LayoutContent>
  </Providers>
);
Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired
};

export default Layout;
