import React from 'react';
import { Grid } from '@mui/material';
import CourseCard from '../../components/CourseCard';
import GradsBreadCrumbs from '../../components/GradsBreadCrumbs';

const courses = [
  { name: 'Linear Algebra' },
  { name: 'Calculas' },
  { name: 'Infomation Management' },
  { name: 'Communication Skills' },
  { name: 'Electronic Commerce' },
  { name: 'Database Systems' }
];

const Index = () => {
  return (
    <div>
      <GradsBreadCrumbs />
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
