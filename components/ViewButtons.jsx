import { useState } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const ViewButtons = () => {
  const [veiw, setView] = useState('grid');

  const handleChange = (_event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      value={veiw}
      color="primary"
      exclusive
      onChange={handleChange}
      size="small"
    >
      <ToggleButton value="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="grid">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ViewButtons;
