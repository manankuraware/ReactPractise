// npm i styled-components
import React from "react";
import styled from "styled-components";

export const LearnStyleComponent = () => {
  //   const StyleCompButton = styled.button({
  //     padding: "1.2rem 1rem",
  //     border: "none",
  //     background: "rebeccapurple",
  //     color: "white",
  //     fontWeight: "bold",
  //     cursor:"pointer"
  //   });

//   using template literals , we can also use props in this 
  const StyleCompButton = styled.button`
    padding: 1.2rem 1rem;
    border: none;
    background: rebeccapurple;
    color: white;
    font-weight: bold;
    cursor: pointer;
  `;
  return (
    <div>
      {/* styled button as a componet using styled componeny library */}
      <StyleCompButton>Add To Cart</StyleCompButton>
    </div>
  );
};
