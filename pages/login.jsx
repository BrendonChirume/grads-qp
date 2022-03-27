import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { useAction } from '../src/lib/hooks';
import RouterLink from '../src/RouterLink';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <RouterLink color="inherit" href="https://mui.com/">
        Nust QP Directory
      </RouterLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const { signin } = useAction();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    signin({
      studentId: data.get('studentId'),
      password: data.get('password')
    });
  };

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
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="studentId"
          label="Student Id"
          name="studentId"
          autoComplete="studentId"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <RouterLink href="#" variant="body2">
              Forgot password?
            </RouterLink>
          </Grid>
          <Grid item>
            <RouterLink href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </RouterLink>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Paper>
  );
}

SignIn.Layout = function SignInContainer({ children }) {
  return <Box>{children}</Box>;
};
