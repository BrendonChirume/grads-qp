import React from 'react';
import {
  Autocomplete,
  Avatar,
  Box,
  Grid,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { HistoryEdu } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import AsyncAutocomplete from '../../components/AsyncAutoComplete';
import StyledInput from '../../components/StyledInput';
import LinearStepper from '../../components/Stepper';
import MainLayout from '../../layouts/MainLayout';
import ProfileTabs from '../../components/ProfileTabs';
import TabContent from '../../components/TabContent';
import Icons from '../../components/Icons';
import QPCard from '../../components/qp-card';

const Banner = styled(Box)(({ theme }) => ({
  height: 200,
  borderTopRightRadius: theme.spacing(2),
  borderTopLeftRadius: theme.spacing(2),
  boxShadow: 5,
  position: 'relative',
  m: theme.spacing(-0.125, -0.125, 0, -0.125),
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
          <Grid container spacing={2} sx={{ mt: 2 }}>
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
                    <Icons.ImgAlt
                      sx={{
                        height: 30,
                        width: 30,
                        fill: 'currentcolor',
                        color: '#e5e7eb'
                      }}
                    />
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
          overflow: 'hidden',
          mb: 2
        }}
      >
        <Banner>
          <Avatar
            sx={{
              width: { xs: 110, md: 130 },
              height: { xs: 110, md: 130 },
              position: 'absolute',
              top: { xs: '8%', md: '48%' },
              left: { xs: '50%', md: '4%' },
              transform: { xs: 'translateX(-50%)', md: 'translateX(0)' },
              border: '3px solid white',
              fontSize: ({ typography }) => typography.pxToRem(48)
            }}
            src={user?.photoURL}
          >
            {user?.displayName
              .split(' ')
              .map((n) => n.charAt(0))
              .join('')}
          </Avatar>
          <Box
            sx={({ typography }) => ({
              color: ({ palette }) => palette.common.white,
              position: 'absolute',
              bottom: '5%',
              left: { xs: '50%', md: '19%' },
              transform: { xs: 'translateX(-50%)', md: 'translateX(0)' },
              textAlign: { xs: 'center', md: 'left' },
              ...typography.truncate({ xs: '100%' })
            })}
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
      <TabContent value={value} index={0}>
        <Box sx={{ display: 'flex', alignItems: 'center', pb: 3 }}>
          <HistoryEdu fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="subtitle1">Papers</Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 10, md: 12, lg: 12 }}
        >
          <Grid item xs={5} md={4} lg={3}>
            <QPCard />
          </Grid>
          <Grid item xs={5} md={4} lg={3}>
            <QPCard />
          </Grid>
          <Grid item xs={5} md={4} lg={3}>
            <QPCard />
          </Grid>
          <Grid item xs={5} md={4} lg={3}>
            <QPCard />
          </Grid>
          <Grid item xs={5} md={4} lg={3}>
            <QPCard />
          </Grid>
          <Grid item xs={5} md={4} lg={3}>
            <QPCard />
          </Grid>
          <Grid item xs={5} md={4} lg={3}>
            <QPCard />
          </Grid>
        </Grid>
      </TabContent>
      <TabContent value={value} index={1}>
        <LinearStepper getStepContent={getStepContent} />
      </TabContent>
    </Box>
  );
};

Email.propTypes = {};
Email.Layout = MainLayout;

export default Email;
