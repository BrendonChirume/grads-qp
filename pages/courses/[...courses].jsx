import { Grid, Stack } from '@mui/material';
import GradsBreadCrumbs from '../../components/GradsBreadCrumbs';
import QPCard from '../../components/qp-card';

export default function Index() {
  return (
    <>
      <Stack
        direction="row"
        sx={{ alignItems: 'center', justifyContent: 'space-between', pb: 2 }}
      >
        <GradsBreadCrumbs />
      </Stack>
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
        <Grid item xs={5} md={4} lg={3}>
          <QPCard />
        </Grid>
      </Grid>
    </>
  );
}
