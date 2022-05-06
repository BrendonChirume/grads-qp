import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FirebaseAuth from '../components/FirebaseAuth';
import Copyright from '../components/Copyright';
import { Paper } from '@mui/material';

export default function Login() {
  return (
    <Box
      sx={{
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        width: '100%',
      }}
    >
      <Paper
        sx={{
          transform: 'translate(-50%,-50%)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: { xs: '90%', sm: 500 },
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          alignItems: 'center',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Avatar
          sx={{ m: 1, height: 150, width: 150 }}
          src="/logo.png"
          variant="rounded"
        />
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
          Grands QP
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Box sx={{ my: 2 }}>
            <FirebaseAuth />
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Paper>
    </Box>
  );
}

Login.Layout = function SignInContainer({ children }) {
  return <Box>{children}</Box>;
};
