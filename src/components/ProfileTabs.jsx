import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { tabClasses } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LowPriorityIcon from '@mui/icons-material/LowPriority';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function ProfileTabs({ value, onChange }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: -49,
        left: { xs: '50%', md: '100%' },
        transform: { xs: 'translateX(-50%)', md: 'translateX(-100%)' }
      }}
    >
      <Tabs value={value} onChange={onChange} variant="scrollable">
        <Tab
          iconPosition="start"
          icon={<DriveFolderUploadIcon />}
          label="Uploads"
          {...a11yProps(0)}
          sx={{ [`&.${tabClasses.root}`]: { minHeight: 48 } }}
        />
        <Tab
          iconPosition="start"
          icon={<ManageAccountsIcon />}
          label="Details"
          {...a11yProps(1)}
          sx={{ [`&.${tabClasses.root}`]: { minHeight: 48 } }}
        />
        <Tab
          iconPosition="start"
          icon={<LowPriorityIcon />}
          label="Organise"
          {...a11yProps(2)}
          sx={{ [`&.${tabClasses.root}`]: { minHeight: 48 } }}
        />
      </Tabs>
    </Box>
  );
}

ProfileTabs.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
