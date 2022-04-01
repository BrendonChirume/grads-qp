import { Grid } from '@mui/material';
import QPCard from '../../../src/components/qp-card';
import ActiveLastBreadCrumb from '../../../src/components/ActiveLastBreadCrumb';

export default function Index() {
  return (
    <>
      <ActiveLastBreadCrumb />
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
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
      </Grid>
    </>
  );
}
