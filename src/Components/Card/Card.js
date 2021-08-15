import React from "react";

import "./Card-style.css";

const CardC = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="image_1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.desc}</p>
        <a href="#" className="btn btn-outline-success">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CardC;
