import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RouterLink from '../components/RouterLink';

const Error404 = () => {
  return (
    <Box>
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Box>
          <Typography variant="h1">404</Typography>
          <Typography variant="h5" sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Page Not Found ⚠️
          </Typography>
          <Typography variant="body2">
            We couldn&prime;t find the page you are looking for.
          </Typography>
        </Box>
        <RouterLink sx={{ pt: 4 }} underline="none" passHref href="/">
          <Button component="a" variant="contained" sx={{ px: 5.5 }}>
            Back to Home
          </Button>
        </RouterLink>
      </Box>
    </Box>
  );
};

export default Error404;
