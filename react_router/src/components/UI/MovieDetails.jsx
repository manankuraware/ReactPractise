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
      <div className="moviecards">
        <p>{moviesData.Title}</p>
        <p>{moviesData.Released}</p>
        <p>{moviesData.Actors}</p>
        <p>{moviesData.Director}</p>
      </div>
    </div>
  );
};
