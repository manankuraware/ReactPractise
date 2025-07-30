import { useEffect, useState } from "react";
import faq from "../api/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  useEffect(() => {
    setData(faq);
  }, []);
  return (
    <>
      <h1>the accordion </h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <FAQ
              key={curElem.id}
              curData={curElem}
              isActive={activeId === curElem.id}
              onToggle={() => handleButton(curElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
