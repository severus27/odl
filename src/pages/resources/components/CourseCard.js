import React from 'react';
import { Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import '../css/style.css';

const CourseCard = ({ course }) => (
    <Card
      component="a"
      href={course.link}
      target="_blank"
      rel="noopener noreferrer"
      className="course-card"
    >
      <CardMedia className="course-card-media">
        <img src={course.image} alt={course.title} loading="lazy" />
        <Stack className="course-card-content">
          <h2 className="course-card-title" variant="h6">
            {course.title}
          </h2>
          <small className="course-card-description" variant="body2">
            {course.description}
          </small>
        </Stack>
      </CardMedia>
    </Card>
  );
  
  export default CourseCard;