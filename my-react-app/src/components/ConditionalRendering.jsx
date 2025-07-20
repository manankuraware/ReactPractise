import React from "react";

const ConditionalRendering = () => {
  const age = 9;
  function agecont(age) {
    return age > 18 ? "Watch Now" : `Unrestricted bcz your age is ${age}`;
  }
  return <div>{agecont(age)}</div>;
};

export default ConditionalRendering;
