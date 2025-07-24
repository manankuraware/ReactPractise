import React from "react";

export const GetMovieDetails = async ({ params }) => {
  try {
    // USING ENV VARIABLE TO SECURE API
    const response = await fetch(
      `http://www.omdbapi.com/?i=${params.imdbID}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
