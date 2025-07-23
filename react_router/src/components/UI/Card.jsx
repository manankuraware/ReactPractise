import React from "react";
import './card.css'
export const Card = ({ data }) => {
  return (
    <div className="maincard">
      <div className="moviecards" id={data.imdbID}>
        <h1>{data.Title}</h1>
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};
