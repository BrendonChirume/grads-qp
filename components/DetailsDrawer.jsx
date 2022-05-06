import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { useUtil } from '../context/UtilContext';

export default function DetailsDrawer({ isMobile }) {
  const { context, handleDrawerToggle, drawerDetailsWidth } = useUtil();
  const drawer = <div>Details</div>;

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerDetailsWidth },
        flexShrink: { sm: 0 }
      }}
    >
      <Drawer
        variant="temporary"
        anchor="right"
        onClose={() => handleDrawerToggle('details')}
        open={context.drawer.details}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          zIndex: ({ zIndex }) => zIndex.drawer,
          display: 'block',
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgb(0 10 0 / 10%)'
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerDetailsWidth
          }
        }}
      >
        <Toolbar />
        <Divider />
        {drawer}
      </Drawer>
    </Box>
  );
}

DetailsDrawer.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
