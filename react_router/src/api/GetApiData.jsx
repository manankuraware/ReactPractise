import React from "react";

export const getMoviesData = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=6186aa99"
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
