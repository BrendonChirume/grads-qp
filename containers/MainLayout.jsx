import { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Navigation from '../components/Navigation';
import { Container } from '@mui/material';
import LayoutProvider, { useLayout } from '../context/LayoutContext';

const Layout = ({ children }) => {
  const { handleDrawerToggle } = useLayout();

  console.log(handleDrawerToggle);
  return (
    <Box
      component="main"
      sx={{
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
        }
      }}
    >
      {/* Navigation */}
      <Navigation handleDrawerToggle={handleDrawerToggle} />
      <Container sx={{ p: 3 }}>{children}</Container>
    </Box>
  );
};

const MainLayout = (props) => (
  <LayoutProvider>
    <Layout {...props} />
  </LayoutProvider>
);

MainLayout.LayoutContent = MainLayout;

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired
};

export default MainLayout;
