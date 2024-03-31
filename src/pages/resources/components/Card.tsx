import React from "react";
import "../css/card.css";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card-container">
      <a href="#" className="card">
        <div className="card__image">
          <img src={imageUrl} alt="Image alt text" title="Logo Title Text 1" />
        </div>
        <div className="card__body">
          <h1 style={{ fontSize: "30px" }}>{title}</h1>
          <small style={{ fontSize: "15px"}}>
            {description}
          </small>
        </div>
        <div className="card__footer">
          <h5> Deep Learning</h5>
        </div>
      </a>
    </div>
  );
};

export default Card;
