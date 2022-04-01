import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import RouterLink from '../src/RouterLink';
import { useAuth } from '../context/AuthContext';
import FirebaseAuth from '../src/components/FirebaseAuth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <RouterLink color="inherit" href="https://mui.com/">
        Varsity QP Directory
      </RouterLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const { user, signIn } = useAuth();

  return (
    <Paper
      sx={{
        my: 8,
        mx: 4,
        p: 3,
        maxWidth: 500,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} variant="rounded" />
      <Typography component="h1" variant="h5">
        Grands QP
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Box sx={{ my: 2 }}>
          <FirebaseAuth />
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Paper>
  );
}

Login.Layout = function SignInContainer({ children }) {
  return <Box>{children}</Box>;
};
