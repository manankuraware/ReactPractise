import { useState } from "react";
import "./App.css";
import { UseReducer } from "./usereducer/UseReducer";
import { ReactMemo } from "./useMemo/ReactMemo";

function App() {
  return (
    <>
      <UseReducer />
      <ReactMemo />
    </>
  );
}

export default App;
