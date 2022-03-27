import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Navigation from '../components/Navigation';
import ActiveLastBreadCrumb from '../components/ActiveLastBreadCrumb';
import PaperTreeView from '../components/PaperTreeView';
import { Stack, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const drawerWidth = 250;

function LayoutContent(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [crumbs, setCrumbs] = useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ p: 1 }}>
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          width: '100%'
        }}
      >
        <SchoolIcon />
        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 2, my: 2 }}>
          Informatics
        </Typography>
      </Stack>
      <PaperTreeView appedtoCrumb={(n) => setCrumbs(n)} />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
      }}
    >
      {/* Navigation */}
      <Navigation handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="filter options"
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              mt: 8,
              overflow: 'auto',
              height: 'calc(100% - 64px)'
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 4,
          px: { xs: 1, md: 3 },
          width: `calc(100% - ${drawerWidth}px)`
        }}
      >
        <Toolbar />
        <Box sx={{ mb: 3 }}>
          <ActiveLastBreadCrumb crumbs={crumbs} mobileOpen={mobileOpen} />
        </Box>
        {children}
      </Box>
    </Box>
  );
}

const Layout = ({ children }) => <LayoutContent>{children}</LayoutContent>;
Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired
};

export default Layout;
