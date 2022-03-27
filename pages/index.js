import { History } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import QPCard from '../src/components/qp-card';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Index() {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, md: 12, lg: 12 }}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <History size="small" sx={{ mr: 1 }} />
          <Typography variant="subtitle1">Recent</Typography>
        </Box>
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
      <Grid item xs={5} md={4} lg={3}>
        <QPCard />
      </Grid>
    </Grid>
  );
}

export const getServerSideProps = withPageAuthRequired();
