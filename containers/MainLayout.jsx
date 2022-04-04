import * as React from 'react';
import Box from '@mui/material/Box';
import LayoutProvider, { useLayout } from '../context/LayoutContext';
import Navigation from '../components/Navigation';
import { Container } from '@mui/material';

function Layout({ children, ...rest }) {
  const { handleDrawerToggle } = useLayout();
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
        overflowY: 'scroll',
        '&': {
          '::-webkit-scrollbar': { width: '0.7rem' },
          '::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '0.7rem'
          }
        },
        ...rest.sx
      }}
    >
      <Navigation handleDrawerToggle={handleDrawerToggle} />
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
