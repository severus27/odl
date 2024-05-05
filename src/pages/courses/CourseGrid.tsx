import React from "react";
import Grid from "@mui/material/Grid";
import CourseCard from "./CourseCard";
import { courses } from "./courses";
import "./CourseCard.css";

const CourseGrid = () => {
  return (
    <div>
      <Grid container spacing={3.5}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CourseGrid;
