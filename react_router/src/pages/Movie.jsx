import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <>
      <Card key={moviesData.imdbID} data={moviesData} />
    </>
  );
};
