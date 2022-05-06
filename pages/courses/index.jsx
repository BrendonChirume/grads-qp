import React from 'react';
import { Grid, Stack } from '@mui/material';
import CourseCard from '../../components/CourseCard';
import GradsBreadCrumbs from '../../components/GradsBreadCrumbs';

const courses = [
  { name: 'Linear Algebra' },
  { name: 'Calculas' },
  { name: 'Infomation Management' },
  { name: 'Communication Skills' },
  { name: 'Electronic Commerce' },
  { name: 'Database Systems' },
];

const Index = () => {
  return (
    <div>
      <Stack
        direction="row"
        sx={{ alignItems: 'center', justifyContent: 'space-between', pb: 2 }}
      >
        <GradsBreadCrumbs />
      </Stack>
      <Grid container spacing={2}>
        {courses.map(({ name }) => (
          <Grid item xs={12} sm={6} lg={3} key={name}>
            <CourseCard coursename={name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Index;
