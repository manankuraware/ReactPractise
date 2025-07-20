import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

// Fetch Api Using Async Await

export const AaFetchapi = () => {
  const [apiData, setApiData] = useState(null);
  // loading state
  const [loading, setLoading] = useState(true);
  // error message
  const [error, setError] = useState(null);

  const api = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
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
