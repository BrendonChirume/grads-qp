import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ClassIcon from '@mui/icons-material/Class';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import MainLayout from './MainLayout';
import { useLayout } from '../context/LayoutContext';
import RouterLink from '../components/RouterLink';
import { Typography } from '@mui/material';

function Layout(props) {
  const { window, children } = props;
  const { handleDrawerToggle, drawerWidth, mobileOpen } = useLayout();

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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 2,
            display: { xs: 'block', sm: 'none' },
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          <Toolbar />
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </>
  );
}

const DrawerLayout = (props) => (
  <MainLayout>
    <Layout {...props} />
  </MainLayout>
);

export default DrawerLayout;
