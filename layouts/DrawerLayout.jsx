import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useLayout } from '../context/LayoutContext';

const MainLayout = dynamic(() => import('./MainLayout'));

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
