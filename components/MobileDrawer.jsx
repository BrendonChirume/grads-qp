import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import ClassIcon from '@mui/icons-material/Class';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RouterLink from '../components/RouterLink';
import { Box, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { useLayout } from '../context/LayoutContext';

export default function MobileDrawer({ isMobile }) {
  const { mobileOpen, handleDrawerToggle, drawerWidth } = useLayout();

  const drawer = (
    <div>
      <List>
        <ListItem button component={RouterLink} href="/courses">
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <Divider />
        <ListItem button component={RouterLink} href="/add-new-qp">
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add a paper" />
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
        open={isMobile ? mobileOpen : false}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          zIndex: ({ zIndex }) => zIndex.drawer + (isMobile && 2),
          display: 'block',
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <RouterLink href="/" underline="none">
            <Typography component="h1" variant="h6" noWrap>
              GRADS QP
            </Typography>
          </RouterLink>
        </Toolbar>
        {drawer}
      </Drawer>
    </Box>
  );
}

MobileDrawer.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
