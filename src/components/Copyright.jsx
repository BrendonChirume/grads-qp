import { Typography } from '@mui/material';
import RouterLink from '../RouterLink';

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <RouterLink color="inherit">GRADS QP</RouterLink> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
