import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ViewListIcon from '@mui/icons-material/ViewList';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import { alpha, Button, IconButton, styled, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Typography from '@mui/material/Typography';
import AccountMenu from './AccountMenu';
import MainSearch from './MainSearch';
import RouterLink from './RouterLink';
import { useUtil } from '../context/UtilContext';

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}));

const Navigation = ({ handleDrawerToggle }) => {
  const { drawerWidth } = useUtil();
  const [showSearch, setShowSearch] = useState(false);
  const { context, handleViewChange } = useUtil();

  const handleSearchToggle = () => setShowSearch(!showSearch);

  const ViewIcon = context.view === 'list' ? ViewModuleIcon : ViewListIcon;

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      {showSearch ? (
        <Toolbar>
          <MainSearch handleSearchToggle={handleSearchToggle} />
        </Toolbar>
      ) : (
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle('main')}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <RouterLink href="/" underline="none">
            <Typography
              component="h1"
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                color: 'white',
                display: { xs: 'none', sm: 'flex' },
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
            >
              GRADS QP
            </Typography>
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="Add paper">
            <CustomButton size="large" component={RouterLink} href="/add-new-qp">
              <NoteAddIcon />
            </CustomButton>
          </Tooltip>
          <Tooltip title="Search">
            <CustomButton size="large" onClick={handleSearchToggle}>
              <SearchIcon />
            </CustomButton>
          </Tooltip>
          <Tooltip title={context.view === 'list' ? 'Grid view' : 'List view'}>
            <CustomButton
              size="large"
              onClick={() =>
                handleViewChange(context.view === 'list' ? 'grid' : 'list')
              }
            >
              <ViewIcon />
            </CustomButton>
          </Tooltip>

          <Box sx={{ flexGrow: 0, display: { sm: 'none' } }}>
            <AccountMenu />
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
};

Navigation.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Navigation;
