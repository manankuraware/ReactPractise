import React, { useEffect, useState } from "react";

export const FetchApi = () => {
  const [apiData, setApiData] = useState(null);
  // loading state
  const [loading, setLoading] = useState(true);
  // error message
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fetchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error);
      });
  };
  console.log(apiData);
  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );
  }
  return (
    <div>
      <img src={apiData.sprites.front_female} alt={apiData.name} />
      <h3>{apiData.name}</h3>
      <p>Height: {apiData.height}Ft</p>
    </div>
  );
};
