import * as React from 'react';
import Box from '@mui/material/Box';
import LayoutProvider, { useLayout } from '../context/LayoutContext';
import Navigation from '../components/Navigation';
import { Container, useMediaQuery } from '@mui/material';
import MobileDrawer from '../components/MobileDrawer';

function Layout({ children, variant, ...rest }) {
  const { handleDrawerToggle } = useLayout();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const drawer = <MobileDrawer isMobile={isMobile} />;
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100%',
        overflowY: 'scroll'
      }}
    >
      <Navigation handleDrawerToggle={handleDrawerToggle} />
      {(!variant && drawer) || (isMobile && drawer)}
      {rest.sx ? (
        <Container sx={{ p: 3, flexGrow: 1 }}>
          {children}
          <Box sx={{ pb: 5 }}></Box>
        </Container>
      ) : (
        children
      )}
    </Box>
  );
}

const MainLayout = (props) => {
  return (
    <LayoutProvider>
      <Layout {...props} />
    </LayoutProvider>
  );
};

export default MainLayout;
