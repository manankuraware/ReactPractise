import React from "react";
import "./card.css";
import { NavLink } from "react-router-dom";
export const Card = ({ data }) => {
  const { Poster, imdbID, Title } = data;
  return (
    <div className="maincard">
      <div className="moviecards" id={imdbID}>
        <NavLink to={imdbID}>
          <h1>{Title}</h1>
          <img src={Poster} alt={Title} />
        </NavLink>
      </div>
    </div>
  );
};
