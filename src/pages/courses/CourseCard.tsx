import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const difficultyColors = {
    Intermediate: "#04A380",
    Moderate: "#FDD736",
    Advanced: "#FF6665",
  };

  return (
    <Link to={course.link} className="card-container">
      <div className="card">
        <div className="card__image">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="card__body">
          <h2 className="title">{course.title}</h2>
          <small className="description">{course.description}</small>
        </div>
        <div className="card__footer">
          <div
            className="card__difficulty-tag"
            style={{ color: difficultyColors[course.difficulty] }}
          >
            {course.difficulty}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
