import React, { useContext } from "react";
import { BioContext, useBioContext } from "./Index";

export const Home = () => {
  // use context to get context provider value

  // const myName = useContext(BioContext);

  // usiing custom hook for usecontext
  const myName = useBioContext();
  // custom hook can be useful when we deal with complex data to ensure code understability

  
  return <div>Hello My Name is {myName}</div>;
};
