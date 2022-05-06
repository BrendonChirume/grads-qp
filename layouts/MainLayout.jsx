import Box from '@mui/material/Box';
import UtilProvider, { useUtil } from '../context/UtilContext';
import Navigation from '../components/Navigation';
import { Container, useMediaQuery } from '@mui/material';
import MobileDrawer from '../components/MobileDrawer';
import DetailsDrawer from '../components/DetailsDrawer';

function Layout({ children, variant, ...rest }) {
  const { handleDrawerToggle } = useUtil();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const drawer = <MobileDrawer isMobile={isMobile} />;
  const detailsDrawer = <DetailsDrawer isMobile={isMobile} />;

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
        <>
          {children}
          {detailsDrawer}
        </>
      )}
    </Box>
  );
}

const MainLayout = (props) => {
  return (
    <UtilProvider>
      <Layout {...props} />
    </UtilProvider>
  );
};

export default MainLayout;
