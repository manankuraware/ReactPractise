import React, { useState } from "react";

// lift state is method to communicate info between child components
export default function LiftStateup() {
  const [inputvalue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputvalue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputvalue} setInputValue={setInputValue} />
    </>
  );
}

const InputComponent = ({ inputValue, setInputValue }) => {
  // const [inputvalue, setInputValue] = useState("");
  // this componets state is lifted upto parent component
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name:"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return (
    <>
      <p>The input calue to Display is : {inputValue}</p>
    </>
  );
};
