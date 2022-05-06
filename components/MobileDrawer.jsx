import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import ClassIcon from '@mui/icons-material/Class';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import HistoryIcon from '@mui/icons-material/History';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RouterLink from '../components/RouterLink';
import { Avatar, Box, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { useUtil } from '../context/UtilContext';
import { useAuth } from '../context/AuthContext';

export default function MobileDrawer({ isMobile }) {
  const { context, handleDrawerToggle, drawerWidth } = useUtil();
  const { user, signOut } = useAuth();

  const drawer = (
    <div>
      <List>
        <ListItem button component={RouterLink} href="/courses">
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button component={RouterLink} href="/recent">
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Recent" />
        </ListItem>
        <Divider sx={{ display: { sm: 'none' } }} />
        <ListItem
          button
          component={RouterLink}
          href="/add-new-qp"
          sx={{ display: { sm: 'none' } }}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add a paper" />
        </ListItem>
        <ListItem button onClick={() => signOut()}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 }
      }}
    >
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? context.drawer.main : false}
        onClose={() => handleDrawerToggle('main')}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          zIndex: ({ zIndex }) => zIndex.drawer + (isMobile && 2),
          display: 'block',
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar disableGutters sx={{ px: 2 }}>
          <RouterLink sx={{ display: 'flex' }} href="/" underline="none">
            <Avatar
              src={user?.photoURL}
              sx={{ width: { xs: 35, sm: 40 }, height: { xs: 35, sm: 40 } }}
            >
              {user?.displayName.charAt(0).toUpperCase()}
            </Avatar>
            <Box sx={{ pl: 2 }}>
              <Typography sx={({ typography }) => typography.truncate(150)}>
                {user?.displayName}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={({ typography }) => typography.truncate(130)}
              >
                {user?.email}
              </Typography>
            </Box>
          </RouterLink>
        </Toolbar>
        <Divider />
        {drawer}
      </Drawer>
    </Box>
  );
}

MobileDrawer.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
