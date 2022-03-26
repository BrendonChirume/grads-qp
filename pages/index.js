import { Box, Grid } from '@mui/material';
import QPCard from '../src/components/qp-card';

export default function Home() {
  return (
    <Grid container spacing={2} columns={{ xs: 10, md: 12, lg: 12 }}>
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
