import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountMenu from './AccountMenu';
import MainSearch from './MainSearch';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RouterLink from './RouterLink';

const Navigation = ({ handleDrawerToggle }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          height: 64,
          backgroundColor: '#00143cc2',
          backdropFilter: ' blur(6px)',
          zIndex: ({ zIndex }) => zIndex.drawer + 1
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ pt: { xs: 1.1, sm: 0 } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <RouterLink href="/" underline="none">
              <Typography
                component="h1"
                variant="h6"
                noWrap
                sx={{ mr: 2, color: 'white', display: { xs: 'none', sm: 'flex' } }}
              >
                GRADS QP
              </Typography>
            </RouterLink>
            <Box sx={{ flexGrow: 1 }} />
            <MainSearch />
            <Box sx={{ flexGrow: 0 }}>
              <AccountMenu />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

Navigation.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired
};

export default Navigation;
