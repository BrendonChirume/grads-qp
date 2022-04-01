import React from 'react';
import { Avatar, Box, styled, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const Banner = styled(Box)(({ theme }) => ({
  height: 200,
  borderTopRightRadius: theme.spacing(2),
  borderTopLeftRadius: theme.spacing(2),
  boxShadow: 5,
  position: 'relative',
  m: theme.spacing(-0.125, -0.125, 3, -0.125),
  background: 'linear-gradient(#141E30, #243B55)',
  backgroundImage: 'url(/bgPattern.png), linear-gradient(#141E30, #243B55)'
}));

const Email = (props) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Box>
      <Box
        sx={{
          border: ({ palette }) => `1px solid ${palette.divider}`,
          borderRadius: ({ spacing }) => spacing(2),
          pb: 6
        }}
      >
        <Banner>
          <Avatar
            sx={{
              width: 130,
              height: 130,
              position: 'absolute',
              bottom: '-17%',
              left: '4%',
              border: '3px solid white',
              fontSize: ({ typography }) => typography.pxToRem(48)
            }}
            src={user?.picture}
          >
            {user?.displayName
              .split(' ')
              .map((n) => n.charAt(0))
              .join('')}
          </Avatar>
          <Box
            sx={{
              color: ({ palette }) => palette.common.white,
              position: 'absolute',
              bottom: '5%',
              left: { xs: '40%', lg: '19%' }
            }}
          >
            <Typography variant="h5" sx={{ color: 'inherit', fontWeight: 'bold' }}>
              {user?.displayName}
            </Typography>
            <Typography variant="body1" sx={{ color: 'inherit' }}>
              {user?.email}
            </Typography>
          </Box>
        </Banner>
      </Box>
    </Box>
  );
};

Email.propTypes = {};

export default Email;
