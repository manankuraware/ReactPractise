import React from "react";
import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  if (!moviesData) {
    return <div>Loading or no data available...</div>;
  }

  return (
    <div className="maincard">
      <div className="moviecards" id={moviesData.imdbID}>
        <h1>{moviesData.Title}</h1>
        <p>{moviesData.Actors}</p>
        <img src={moviesData.Poster} alt={moviesData.Title} />
      </div>
    </div>
  );
};
