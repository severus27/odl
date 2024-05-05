import React from 'react';
import { Grid } from '@mui/material';
import CourseCard from './CourseCard';
import courses from './courses';

const CourseGrid = () => (
<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
  {courses.map((course) => (
    <Grid item key={course.id} xs={12} md={6}>
      <CourseCard course={course} />
    </Grid>
  ))}
</Grid>
);

export default CourseGrid;