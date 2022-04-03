import React from 'react';
import {
  Autocomplete,
  Avatar,
  Box,
  Grid,
  Stack,
  styled,
  SvgIcon,
  Typography
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import AsyncAutocomplete from '../../components/AsyncAutoComplete';
import StyledInput from '../../components/StyledInput';
import LinearStepper from '../../components/Stepper';
import MainLayout from '../../containers/MainLayout';
import ProfileTabs from '../../components/ProfileTabs';
import TabContent from '../../components/TabContent';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4} lg={3}>
              <AsyncAutocomplete
                list={[
                  { logo: '', name: 'University of Zimbabwe' },
                  {
                    logo: '',
                    name: 'National University of Science and Technology of Zimbabwe'
                  },
                  {
                    logo: '',
                    name: 'Midlands State University'
                  },
                  {
                    logo: '',
                    name: 'Bindura State University'
                  },
                  {
                    logo: '',
                    name: 'Africa University'
                  }
                ]}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option.name}
                renderOption={(renderProps, { logo, name }) => (
                  <Stack flexDirection="row" sx={{ px: 2, py: 1 }} {...renderProps}>
                    <SvgIcon
                      sx={{
                        height: 30,
                        width: 30,
                        fill: 'currentcolor',
                        color: '#e5e7eb'
                      }}
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 32 32"
                      enableBackground="new 0 0 512 512"
                    >
                      <g>
                        <g
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_2"
                          data-name="Layer 2"
                        >
                          <path d="M29.22,20.2l-4.32-4.36a.19.19,0,0,0-.17-.07.24.24,0,0,0-.17.08L21.68,18.9a2,2,0,0,1-1.45.63h0a2,2,0,0,1-1.45-.63L12.6,12.31a.24.24,0,0,0-.32,0l-9.62,7.5L1.42,18.2,11,10.7a2.23,2.23,0,0,1,3,.24l6.17,6.59,2.86-3.05a2.22,2.22,0,0,1,1.6-.71,2.18,2.18,0,0,1,1.62.66l4.32,4.36Z"></path>
                          <path d="M27.08,31H4.92A3.92,3.92,0,0,1,1,27.08V4.92A3.92,3.92,0,0,1,4.92,1H27.08A3.92,3.92,0,0,1,31,4.92V27.08A3.92,3.92,0,0,1,27.08,31ZM4.92,3A1.92,1.92,0,0,0,3,4.92V27.08A1.92,1.92,0,0,0,4.92,29H27.08A1.92,1.92,0,0,0,29,27.08V4.92A1.92,1.92,0,0,0,27.08,3Z"></path>
                          <circle cx="20.33" cy="9.83" r="2"></circle>
                          <path d="M2,19.5l9.53-7.67,1.76-.21,5.77,6.16s1,1.37,1.85.43l2.87-3.05s.57-1.25,1.79,0S30,20.5,30,20.5l-.07,7.23S29.63,30,26.69,30s-22-.31-22-.31S2,30.35,2,27.08,2,19.5,2,19.5Z"></path>
                        </g>
                      </g>
                    </SvgIcon>
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      {name}
                    </Typography>
                  </Stack>
                )}
                placeholder="School or College/University"
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <StyledInput fullWidth label="Program" />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Autocomplete
                fullWidth
                options={[
                  '1.1',
                  '1.2',
                  '2.1',
                  '2.2',
                  '3.1',
                  '3.2',
                  '4.1',
                  '4.2',
                  '5.1',
                  '5.2',
                  '6.1',
                  '6.2',
                  '7.1',
                  '7.2'
                ]}
                renderInput={(params) => <StyledInput label="Part" {...params} />}
              />
            </Grid>
          </Grid>
        );

      default:
        return <Box>Step {activeStep}</Box>;
    }
  };

  return (
    <Box>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 4,
          pb: 6,
          overflow: 'hidden'
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
          <ProfileTabs value={value} onChange={handleChange} />
        </Banner>
      </Box>
      <TabContent value={value} index={1}>
        <LinearStepper getStepContent={getStepContent} />
      </TabContent>
    </Box>
  );
};

Email.propTypes = {};
Email.Layout = MainLayout;

export default Email;
