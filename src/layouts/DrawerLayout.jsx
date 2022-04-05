import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MainLayout from './MainLayout';
import { useLayout } from '../context/LayoutContext';

function Layout(props) {
  const { children } = props;
  const { drawerWidth } = useLayout();

  return (
    <Box sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
      <Toolbar />
      {children}
    </Box>
  );
}

const DrawerLayout = (props) => (
  <MainLayout>
    <Layout {...props} />
  </MainLayout>
);

export default DrawerLayout;
