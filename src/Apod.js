import React from "react";

const Apod = (props) => {

  const {title, image, altImage, description} = props;

  return (
    <div className="apod">
      <div className="title">{title}</div>
      <div className="image">
        <img src={image} alt={altImage}></img>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Apod;
