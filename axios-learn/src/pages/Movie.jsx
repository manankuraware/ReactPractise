import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Movie() {
  const [data, setData] = useState([]);
  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=6186aa99";

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      //   automaticall json format
      console.log(res.data.Title);
      setData(res.data.Title);
    } catch (error) {
      console.log(error.message);
      console.log(error.response.status);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <div>
      <h1>Movie: {data}</h1>
    </div>
  );
}
