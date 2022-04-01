import PropTypes from 'prop-types';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountMenu from './AccountMenu';
import MainSearch from './MainSearch';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = ({ handleDrawerToggle }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ height: 64 }}>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}
          >
            GRADS QP
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <MainSearch />
          <Box sx={{ flexGrow: 0 }}>
            <AccountMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Navigation.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired
};

export default Navigation;
