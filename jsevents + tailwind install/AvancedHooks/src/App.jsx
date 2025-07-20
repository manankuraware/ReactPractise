import { useState } from "react";
import "./App.css";
import { UseReducer } from "./usereducer/UseReducer";
import { ReactMemo } from "./useMemo/ReactMemo";
import MemoParentComponent from "./useMemo/UseMemo";
import { UseCallback } from "./useMemo/UseCallback";

function App() {
  return (
    <>
      <UseReducer />
      <ReactMemo />
      <MemoParentComponent />
      <UseCallback />
    </>
  );
}

export default App;
