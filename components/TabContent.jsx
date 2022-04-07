import { Box } from '@mui/material';
import { oneOfType, node, number, arrayOf } from 'prop-types';

export default function TabContent(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ pt: 3 }}
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}

TabContent.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  index: number.isRequired,
  value: number.isRequired
};
