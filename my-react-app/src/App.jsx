import React, { useState } from "react";
import ConditionalRendering from "./components/ConditionalRendering";
import { DynamicVal, MyDynamic } from "./components/DynamicVal";
import ImportLearn from "./components/ImportLearn";
import { Netflixcard } from "./components/Netflixcard";
import "./components/Netflix.module.css";
import { LearnStyleComponent } from "./components/LearnStyleComponent";
function App() {
  const [count, setCount] = useState(0);
  // <></> is also a way do declare fragment , fragment is used to avoid creating uncnesseary dom elemts
  return (
    <React.Fragment>
      <ConditionalRendering />
      <MyDynamic />
      <DynamicVal />
      <MyDynamic/>
      <ImportLearn />
      <Netflixcard />
      <LearnStyleComponent />
    </React.Fragment>
  );
}

export default App;
