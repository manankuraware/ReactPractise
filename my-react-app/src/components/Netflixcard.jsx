import React from "react";
import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
export const Netflixcard = () => {
  return (
    <div className="parentcard-dwrapper">
      {seriesData.map((currEle) => (
        <SeriesCard currEle={currEle} key={currEle.id} />
      ))}
    </div>
  );
};

// passed component with prop